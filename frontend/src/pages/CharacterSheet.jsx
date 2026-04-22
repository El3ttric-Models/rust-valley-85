import React, { useEffect, useMemo, useState } from 'react';
import { User, Save, Send, LogOut, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { CHARACTER_SECTIONS, IMAGES } from '../mock';
import { PageHeader } from './Rules';
import Logo from '../components/Logo';
import { useToast } from '../hooks/use-toast';

const DRAFT_KEY = 'rv85_character_draft';
const AUTH_KEY = 'rv85_mock_auth';

function MockDiscordLogin({ onLogin }) {
  const [loading, setLoading] = useState(false);
  const handle = () => {
    setLoading(true);
    setTimeout(() => {
      const user = {
        id: 'mock_' + Math.random().toString(36).slice(2, 10),
        username: 'cittadino_rv85',
        discriminator: '0001',
        avatar: null,
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      onLogin(user);
      setLoading(false);
    }, 900);
  };

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl grid md:grid-cols-[260px_1fr]"
          style={{ background: 'rgba(4,57,53,0.8)', border: '1px solid #CE9A16' }}
        >
          <div
            className="hidden md:flex items-center justify-center p-10"
            style={{ background: 'linear-gradient(180deg, rgba(206,154,22,0.15), rgba(4,57,53,0.6))', borderRight: '1px solid rgba(206,154,22,0.4)' }}
          >
            <div className="w-28 h-28 rounded-full flex items-center justify-center" style={{ background: '#043935', border: '2px solid #CE9A16' }}>
              <User size={56} style={{ color: '#CE9A16' }} />
            </div>
          </div>
          <div className="p-10">
            <div className="font-head uppercase tracking-[0.3em] text-xs" style={{ color: '#CE9A16' }}>Inizia la tua storia</div>
            <h2 className="mt-2 font-display text-3xl md:text-4xl chrome-text leading-tight">Accedi con Discord</h2>
            <p className="mt-4 text-sm max-w-md" style={{ color: '#d9e9e7' }}>
              Per compilare la scheda personaggio devi autorizzare il sito tramite il tuo account Discord. I tuoi dati verranno utilizzati solo per la verifica da parte dello staff.
            </p>
            <button
              onClick={handle}
              disabled={loading}
              className="mt-8 inline-flex items-center gap-3 px-7 py-3 rounded-full font-head uppercase tracking-widest text-sm"
              style={{ background: '#5865F2', color: '#fff' }}
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <DiscordLogo />}
              {loading ? 'Autorizzazione...' : 'Accedi con Discord'}
            </button>
            <div
              className="mt-6 flex items-start gap-3 text-xs p-3 rounded-lg"
              style={{ background: 'rgba(206,22,22,0.08)', border: '1px solid #CE1616', color: '#f5efe0' }}
            >
              <AlertCircle size={14} className="shrink-0 mt-0.5" style={{ color: '#CE1616' }} />
              <span>Demo mock: in produzione verrà usato l'OAuth ufficiale di Discord e l'invio tramite webhook sicuro.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const DiscordLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
    <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a14.25 14.25 0 0 0-.67 1.378 18.27 18.27 0 0 0-5.487 0A12.6 12.6 0 0 0 9.728 3 19.8 19.8 0 0 0 5.966 4.372C2.5 9.527 1.59 14.555 2.05 19.5a19.93 19.93 0 0 0 6.032 3.05c.49-.666.927-1.375 1.3-2.118a12.9 12.9 0 0 1-2.048-.982c.172-.126.34-.257.501-.39a14.19 14.19 0 0 0 12.33 0c.163.134.33.265.503.39-.655.39-1.343.719-2.05.983.373.743.81 1.451 1.3 2.117a19.89 19.89 0 0 0 6.035-3.05c.54-5.75-.92-10.732-3.635-15.131Z" />
  </svg>
);

function Sheet({ user, onLogout }) {
  const { toast } = useToast();
  const [active, setActive] = useState(CHARACTER_SECTIONS[0].id);
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) setData(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const progress = useMemo(() => {
    const total = CHARACTER_SECTIONS.reduce((acc, s) => acc + s.fields.length, 0);
    const filled = CHARACTER_SECTIONS.reduce(
      (acc, s) => acc + s.fields.filter((f) => data[f.key] && String(data[f.key]).trim() !== '').length,
      0,
    );
    return Math.round((filled / total) * 100);
  }, [data]);

  const set = (key) => (e) => {
    const v = e.target.value;
    setData((d) => ({ ...d, [key]: v }));
  };

  const saveDraft = () => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    toast({ title: 'Bozza salvata', description: 'Puoi tornare a completarla in qualsiasi momento.' });
  };

  const submit = () => {
    const required = ['fullName', 'birthDate', 'childhood', 'adulthood', 'arrival'];
    const missing = required.filter((k) => !data[k]);
    if (missing.length) {
      toast({ title: 'Campi mancanti', description: 'Completa almeno anagrafica e sezioni narrative principali.', variant: 'destructive' });
      return;
    }
    toast({
      title: 'Invio demo',
      description: 'In questa demo non viene inviato nulla. Collegheremo il webhook Discord nel backend.',
    });
  };

  const section = CHARACTER_SECTIONS.find((s) => s.id === active);

  return (
    <section className="relative py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl mb-6"
          style={{ background: 'rgba(4,57,53,0.8)', border: '1px solid rgba(19,136,127,0.5)' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#5865F2', color: '#fff' }}>
              <User size={22} />
            </div>
            <div>
              <div className="font-head uppercase tracking-widest text-xs" style={{ color: '#CE9A16' }}>Connesso come</div>
              <div className="font-head text-lg" style={{ color: '#f5efe0' }}>{user.username}#{user.discriminator}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:block min-w-[160px]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-head uppercase tracking-widest" style={{ color: '#9fbfbb' }}>Progresso</span>
                <span style={{ color: '#CE9A16' }}>{progress}%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(19,136,127,0.2)' }}>
                <div className="h-full" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #13887F, #CE9A16)' }} />
              </div>
            </div>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-head uppercase tracking-widest"
              style={{ background: 'transparent', color: '#CE1616', border: '1px solid #CE1616' }}
            >
              <LogOut size={14} /> Esci
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-6">
          {/* Sidebar sections */}
          <aside
            className="rounded-2xl p-4 h-fit lg:sticky lg:top-24"
            style={{ background: 'rgba(4,57,53,0.75)', border: '1px solid rgba(19,136,127,0.5)' }}
          >
            <div className="font-head uppercase tracking-widest text-xs mb-3" style={{ color: '#CE9A16' }}>Sezioni</div>
            <ul className="flex lg:flex-col gap-2 overflow-x-auto">
              {CHARACTER_SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <button
                    onClick={() => setActive(s.id)}
                    className="w-full text-left px-4 py-3 rounded-xl font-head uppercase tracking-widest text-xs whitespace-nowrap transition-colors duration-200"
                    style={{
                      background: active === s.id ? '#CE9A16' : 'transparent',
                      color: active === s.id ? '#043935' : '#f5efe0',
                      border: active === s.id ? '1px solid #CE9A16' : '1px solid rgba(19,136,127,0.4)',
                    }}
                  >
                    <span style={{ color: active === s.id ? '#043935' : '#13887F' }}>{String(i + 1).padStart(2, '0')}.</span> {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Form section */}
          <div
            className="rounded-2xl p-7"
            style={{ background: 'rgba(4,57,53,0.75)', border: '1px solid rgba(19,136,127,0.5)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl md:text-3xl chrome-text">{section.title}</h2>
              <div className="hidden md:block font-retro text-lg" style={{ color: '#13887F' }}>&gt; {section.id.toUpperCase()}</div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {section.fields.map((f) => (
                <div key={f.key} className={f.type === 'textarea' ? 'md:col-span-2' : ''}>
                  <label className="font-head uppercase tracking-widest text-xs" style={{ color: '#CE9A16' }}>
                    {f.label}
                  </label>
                  {f.type === 'textarea' ? (
                    <textarea
                      rows={f.rows || 4}
                      value={data[f.key] || ''}
                      onChange={set(f.key)}
                      placeholder={f.placeholder}
                      className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[#CE9A16] transition-colors"
                      style={{ background: 'rgba(2,38,35,0.9)', border: '1px solid rgba(19,136,127,0.5)', color: '#f5efe0' }}
                    />
                  ) : f.type === 'select' ? (
                    <select
                      value={data[f.key] || ''}
                      onChange={set(f.key)}
                      className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[#CE9A16] transition-colors"
                      style={{ background: 'rgba(2,38,35,0.9)', border: '1px solid rgba(19,136,127,0.5)', color: '#f5efe0' }}
                    >
                      <option value="">Seleziona...</option>
                      {f.options.map((o) => (<option key={o} value={o}>{o}</option>))}
                    </select>
                  ) : (
                    <input
                      type={f.type}
                      value={data[f.key] || ''}
                      onChange={set(f.key)}
                      placeholder={f.placeholder}
                      className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[#CE9A16] transition-colors"
                      style={{ background: 'rgba(2,38,35,0.9)', border: '1px solid rgba(19,136,127,0.5)', color: '#f5efe0' }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Footer actions */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs" style={{ color: '#9fbfbb' }}>
                <CheckCircle2 size={14} style={{ color: '#13887F' }} />
                Salvataggio automatico locale disponibile · Staff review 24-48h
              </div>
              <div className="flex gap-3">
                <button
                  onClick={saveDraft}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm transition-colors duration-200"
                  style={{ background: 'transparent', color: '#13887F', border: '1px solid #13887F' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#13887F'; e.currentTarget.style.color = '#043935'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#13887F'; }}
                >
                  <Save size={16} /> Salva bozza
                </button>
                <button
                  onClick={submit}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm"
                  style={{ background: '#CE9A16', color: '#043935' }}
                >
                  <Send size={16} /> Invia scheda
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Logo size="sm" />
        </div>
      </div>
    </section>
  );
}

export default function CharacterSheet() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    setUser(null);
  };

  return (
    <div>
      <PageHeader
        icon={User}
        title="Scheda Personaggio"
        subtitle="Compila ogni sezione per dare vita al tuo cittadino di Rust Valley. Salva bozze in ogni momento."
        image={IMAGES.valley}
      />
      {user ? <Sheet user={user} onLogout={logout} /> : <MockDiscordLogin onLogin={setUser} />}
    </div>
  );
}
