from fastapi import FastAPI, APIRouter, HTTPException, Request, Response, Cookie
from fastapi.responses import RedirectResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field
from typing import Optional, Any, Dict
from pathlib import Path
from datetime import datetime, timezone
import os
import uuid
import logging
import requests
import jwt
from urllib.parse import urlencode

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Mongo
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Discord config
DISCORD_CLIENT_ID = os.environ.get('DISCORD_CLIENT_ID', '')
DISCORD_CLIENT_SECRET = os.environ.get('DISCORD_CLIENT_SECRET', '')
DISCORD_REDIRECT_URI = os.environ.get('DISCORD_REDIRECT_URI', '')
DISCORD_WEBHOOK_URL = os.environ.get('DISCORD_WEBHOOK_URL', '')
FRONTEND_URL = os.environ.get('FRONTEND_URL', '')
JWT_SECRET = os.environ.get('JWT_SECRET', 'change_me')

DISCORD_AUTH_BASE = 'https://discord.com/api/oauth2/authorize'
DISCORD_TOKEN_URL = 'https://discord.com/api/oauth2/token'
DISCORD_USER_URL = 'https://discord.com/api/users/@me'

app = FastAPI()
api_router = APIRouter(prefix='/api')


# ---------------- Models ----------------
class DraftIn(BaseModel):
    kind: str = Field(..., description='character | background')
    data: Dict[str, Any]

class SubmitCharacter(BaseModel):
    data: Dict[str, Any]

class SubmitBackground(BaseModel):
    charName: str
    playerName: Optional[str] = ''
    discordTag: Optional[str] = ''
    age: Optional[str] = ''
    story: str
    motivation: Optional[str] = ''


def make_jwt(user: Dict[str, Any]) -> str:
    payload = {
        'id': user['id'],
        'username': user.get('username'),
        'global_name': user.get('global_name'),
        'avatar': user.get('avatar'),
        'discriminator': user.get('discriminator', '0'),
        'iat': datetime.now(timezone.utc).timestamp(),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm='HS256')


def get_user_from_token(token: Optional[str]) -> Optional[Dict[str, Any]]:
    if not token:
        return None
    try:
        return jwt.decode(token, JWT_SECRET, algorithms=['HS256'])
    except jwt.PyJWTError:
        return None


# ---------------- Routes ----------------
@api_router.get('/')
async def root():
    return {'message': 'Rust Valley 85s API'}


@api_router.get('/auth/discord/login')
async def discord_login():
    params = {
        'client_id': DISCORD_CLIENT_ID,
        'redirect_uri': DISCORD_REDIRECT_URI,
        'response_type': 'code',
        'scope': 'identify',
        'prompt': 'consent',
    }
    return RedirectResponse(f'{DISCORD_AUTH_BASE}?{urlencode(params)}')


@api_router.get('/auth/discord/callback')
async def discord_callback(code: Optional[str] = None, error: Optional[str] = None):
    if error or not code:
        return RedirectResponse(f'{FRONTEND_URL}/character-sheet?error=auth_failed')

    # exchange code for token
    data = {
        'client_id': DISCORD_CLIENT_ID,
        'client_secret': DISCORD_CLIENT_SECRET,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': DISCORD_REDIRECT_URI,
    }
    try:
        token_resp = requests.post(DISCORD_TOKEN_URL, data=data, headers={'Content-Type': 'application/x-www-form-urlencoded'}, timeout=10)
        token_resp.raise_for_status()
        access_token = token_resp.json().get('access_token')
        if not access_token:
            raise ValueError('no access_token')
        user_resp = requests.get(DISCORD_USER_URL, headers={'Authorization': f'Bearer {access_token}'}, timeout=10)
        user_resp.raise_for_status()
        user = user_resp.json()
    except Exception as e:
        logging.exception('Discord OAuth error: %s', e)
        return RedirectResponse(f'{FRONTEND_URL}/character-sheet?error=oauth')

    # upsert user in DB
    await db.users.update_one(
        {'id': user['id']},
        {'$set': {**user, 'last_login': datetime.now(timezone.utc).isoformat()}},
        upsert=True,
    )

    token = make_jwt(user)
    # Redirect back to frontend with the token in URL hash (frontend will store it)
    return RedirectResponse(f'{FRONTEND_URL}/character-sheet#token={token}')


@api_router.get('/auth/me')
async def me(request: Request):
    auth = request.headers.get('Authorization', '')
    token = auth.replace('Bearer ', '') if auth.startswith('Bearer ') else None
    user = get_user_from_token(token)
    if not user:
        raise HTTPException(status_code=401, detail='Not authenticated')
    return {'user': user}


@api_router.post('/drafts')
async def save_draft(payload: DraftIn, request: Request):
    auth = request.headers.get('Authorization', '')
    token = auth.replace('Bearer ', '') if auth.startswith('Bearer ') else None
    user = get_user_from_token(token)
    if not user:
        raise HTTPException(status_code=401, detail='Not authenticated')
    doc = {
        'user_id': user['id'],
        'kind': payload.kind,
        'data': payload.data,
        'updated_at': datetime.now(timezone.utc).isoformat(),
    }
    await db.drafts.update_one(
        {'user_id': user['id'], 'kind': payload.kind},
        {'$set': doc},
        upsert=True,
    )
    return {'ok': True}


@api_router.get('/drafts/{kind}')
async def get_draft(kind: str, request: Request):
    auth = request.headers.get('Authorization', '')
    token = auth.replace('Bearer ', '') if auth.startswith('Bearer ') else None
    user = get_user_from_token(token)
    if not user:
        raise HTTPException(status_code=401, detail='Not authenticated')
    doc = await db.drafts.find_one({'user_id': user['id'], 'kind': kind})
    if not doc:
        return {'data': None}
    return {'data': doc.get('data'), 'updated_at': doc.get('updated_at')}


def _truncate(s: str, n: int = 1000) -> str:
    if s is None:
        return ''
    s = str(s)
    return s if len(s) <= n else s[: n - 3] + '...'


async def _send_discord_webhook(title: str, description: str, fields: list, user: Dict[str, Any], extra_messages: Optional[list] = None):
    """Send a webhook with optional follow-up messages.
    - title/description/fields → first embed (Discord limit 6000 chars across the embed).
    - extra_messages: list of dicts {title, value} → each sent as its own follow-up webhook POST
      to stay within Discord's 6000-char per-message limit (ideal for long background sections).
    """
    if not DISCORD_WEBHOOK_URL:
        logging.warning('DISCORD_WEBHOOK_URL not configured')
        return False
    avatar_url = None
    if user.get('avatar'):
        avatar_url = f"https://cdn.discordapp.com/avatars/{user['id']}/{user['avatar']}.png"
    author = {
        'name': f"{user.get('global_name') or user.get('username')} ({user.get('id')})",
        **({'icon_url': avatar_url} if avatar_url else {}),
    }
    footer = {'text': "Rust Valley 85's \u00b7 Staff Review"}

    embed = {
        'title': title,
        'description': description[:2000],
        'color': 0xCE9A16,
        'timestamp': datetime.now(timezone.utc).isoformat(),
        'author': author,
        'footer': footer,
        'fields': fields[:25],
    }
    ok = True
    try:
        r = requests.post(DISCORD_WEBHOOK_URL, json={'embeds': [embed]}, timeout=10)
        r.raise_for_status()
    except Exception as e:
        logging.exception('webhook error (main): %s', e)
        ok = False

    # Follow-up messages: one embed per long-text subsection to avoid the 6000 chars/message limit.
    if extra_messages:
        for i, m in enumerate(extra_messages, start=1):
            val = str(m.get('value', ''))
            if not val.strip():
                continue
            follow_embed = {
                'title': m.get('title', f'Sezione {i}'),
                'description': val[:4000],
                'color': 0x13887F,
                'author': author,
                'footer': footer,
            }
            try:
                r = requests.post(DISCORD_WEBHOOK_URL, json={'embeds': [follow_embed]}, timeout=10)
                r.raise_for_status()
            except Exception as e:
                logging.exception('webhook error (follow %s): %s', i, e)
                ok = False
    return ok


@api_router.post('/submit/character')
async def submit_character(payload: SubmitCharacter, request: Request):
    auth = request.headers.get('Authorization', '')
    token = auth.replace('Bearer ', '') if auth.startswith('Bearer ') else None
    user = get_user_from_token(token)
    if not user:
        raise HTTPException(status_code=401, detail='Not authenticated')

    data = payload.data or {}
    # Grouped sections (aggregated in one embed field each)
    GROUPED_SECTIONS = [
        ('Anagrafica', ['fullName', 'nickname', 'birthDate', 'birthPlace', 'nationality', 'gender']),
        ('Origini & Ruolo', ['ethnicity', 'legalStatus', 'religion', 'archetype']),
        ('Aspetto', ['height', 'weight', 'eyes', 'hair', 'signs']),
        ('Famiglia', ['father', 'mother', 'siblings', 'socialClass']),
        ('Formazione', ['education', 'jobs', 'skills']),
        ('Personalit\u00e0', ['traits', 'virtues', 'flaws', 'fears', 'goals']),
    ]
    # Background narrative subsections: each becomes a dedicated embed field (up to 1024 chars each)
    BACKGROUND_SUBSECTIONS = [
        ('Infanzia', 'childhood'),
        ('Adolescenza', 'adolescence'),
        ('Et\u00e0 adulta', 'adulthood'),
        ('Arrivo a Rust Valley', 'arrival'),
        ('Prospettive future', 'future'),
        ('Condanne penali', 'convictions'),
    ]
    fields = []
    for section, keys in GROUPED_SECTIONS:
        parts = [f"**{k}**: {_truncate(data.get(k, ''), 240)}" for k in keys if data.get(k)]
        if parts:
            fields.append({'name': section, 'value': _truncate('\n'.join(parts), 1024), 'inline': False})

    # Each background subsection sent as its own follow-up webhook message
    extra_messages = []
    for label, key in BACKGROUND_SUBSECTIONS:
        val = data.get(key)
        if val and str(val).strip():
            extra_messages.append({'title': f'Background \u00b7 {label}', 'value': str(val)})

    submission_id = str(uuid.uuid4())
    await db.submissions.insert_one({
        'id': submission_id,
        'user_id': user['id'],
        'kind': 'character',
        'data': data,
        'created_at': datetime.now(timezone.utc).isoformat(),
    })

    ok = await _send_discord_webhook(
        title=f"Nuova Scheda Personaggio \u2014 {data.get('fullName', 'Senza nome')}",
        description=f"Inviata da **{user.get('username')}** (<@{user['id']}>)",
        fields=fields or [{'name': 'Nota', 'value': 'Scheda inviata vuota.', 'inline': False}],
        user=user,
        extra_messages=extra_messages,
    )
    return {'ok': True, 'submission_id': submission_id, 'webhook_sent': ok}


@api_router.post('/submit/background')
async def submit_background(payload: SubmitBackground, request: Request):
    auth = request.headers.get('Authorization', '')
    token = auth.replace('Bearer ', '') if auth.startswith('Bearer ') else None
    user = get_user_from_token(token)
    if not user:
        raise HTTPException(status_code=401, detail='Not authenticated')

    fields = [
        {'name': 'Personaggio', 'value': _truncate(payload.charName, 256), 'inline': True},
        {'name': 'Et\u00e0', 'value': _truncate(payload.age or '-', 32), 'inline': True},
        {'name': 'Giocatore', 'value': _truncate(payload.playerName or '-', 64), 'inline': True},
        {'name': 'Discord Tag', 'value': _truncate(payload.discordTag or '-', 64), 'inline': True},
        {'name': 'Storia', 'value': _truncate(payload.story, 1024), 'inline': False},
    ]
    if payload.motivation:
        fields.append({'name': 'Motivazione', 'value': _truncate(payload.motivation, 1024), 'inline': False})

    submission_id = str(uuid.uuid4())
    await db.submissions.insert_one({
        'id': submission_id,
        'user_id': user['id'],
        'kind': 'background',
        'data': payload.dict(),
        'created_at': datetime.now(timezone.utc).isoformat(),
    })
    ok = await _send_discord_webhook(
        title=f"Nuovo Background \u2014 {payload.charName}",
        description=f"Inviato da **{user.get('username')}** (<@{user['id']}>)",
        fields=fields,
        user=user,
    )
    return {'ok': True, 'submission_id': submission_id, 'webhook_sent': ok}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=['*'],
    allow_methods=['*'],
    allow_headers=['*'],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

@app.on_event('shutdown')
async def shutdown_db_client():
    client.close()
