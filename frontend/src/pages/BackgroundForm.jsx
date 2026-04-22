import React, { useEffect, useState } from 'react';
import { FileText, Send, Save, AlertCircle, Loader2 } from 'lucide-react';
import { IMAGES } from '../mock';
import { PageHeader } from './Rules';
import { useToast } from '../hooks/use-toast';
import { api, getToken, setToken, clearToken } from '../api';

const DRAFT_KIND = 'background';

export default function BackgroundForm() {
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    charName: '', playerName: '', discordTag: '', age: '', story: '', motivation: '', agree: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
  };

  useEffect(() => {
    // handle token after oauth redirect
    if (window.location.hash.startsWith('#token=')) {
      setToken(window.location.hash.replace('#token=', ''));
      window.history.replaceState(null, '', window.location.pathname);
    }
    (async () => {
      if (!getToken()) return;
      try {
        const me = await api.me();
        setUser(me.user);
        const res = await api.getDraft(DRAFT_KIND);
        if (res?.data) setForm((f) => ({ ...f, ...res.data }));
      } catch { clearToken(); }
    })();
  }, []);

  const onDraft = async () => {
    if (!user) { toast({ title: 'Accedi prima', description: 'Effettua il login con Discord per salvare bozze sul server.' }); return; }
    try {
      await api.saveDraft(DRAFT_KIND, form);
      toast({ title: 'Bozza salvata', description: 'Bozza salvata sul server.' });
    } catch {
      toast({ title: 'Errore', description: 'Impossibile salvare la bozza.', variant: 'destructive' });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!user) { window.location.href = api.loginUrl(); return; }
    if (!form.charName || !form.story || !form.agree) {
      toast({ title: 'Campi mancanti', description: 'Compila i campi obbligatori e accetta le condizioni.', variant: 'destructive' });
      return;
    }
    setSubmitting(true);
    try {
      const { agree, ...payload } = form;
      const res = await api.submitBackground(payload);
      if (res.webhook_sent) {
        toast({ title: 'Background inviato', description: 'Lo staff lo valuterà a breve su Discord.' });
      } else {
        toast({ title: 'Salvato', description: 'Salvato sul server ma invio webhook fallito.' });
      }
    } catch (err) {
      toast({ title: 'Errore invio', description: err?.response?.data?.detail || 'Invio non riuscito.', variant: 'destructive' });
    }
    setSubmitting(false);
  };

  return (
    <div>
      <PageHeader icon={FileText} title="Invia il tuo Background" subtitle="Racconta in breve la storia del tuo personaggio." image={IMAGES.city} />
      <section className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {!user && (
            <div className="mb-6 p-5 rounded-xl flex flex-wrap items-center justify-between gap-4"
              style={{ background: 'rgba(88,101,242,0.1)', border: '1px solid #5865F2' }}>
              <div className="text-sm" style={{ color: '#f5efe0' }}>
                Per inviare il tuo background devi prima accedere con Discord.
              </div>
              <a href={api.loginUrl()} className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-head uppercase tracking-widest text-xs"
                style={{ background: '#5865F2', color: '#fff' }}>Accedi con Discord</a>
            </div>
          )}

          <form onSubmit={onSubmit} className="p-8 rounded-2xl space-y-6"
            style={{ background: 'rgba(4,57,53,0.75)', border: '1px solid rgba(19,136,127,0.6)' }}>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Nome personaggio *" value={form.charName} onChange={update('charName')} placeholder="Es. Marcus Delaney" />
              <Field label="Età personaggio" value={form.age} onChange={update('age')} placeholder="Es. 27" type="number" />
              <Field label="Il tuo nome" value={form.playerName} onChange={update('playerName')} placeholder="Nome reale o nickname" />
              <Field label="Tag Discord" value={form.discordTag} onChange={update('discordTag')} placeholder="username#0000" />
            </div>
            <Field label="Storia del personaggio *" value={form.story} onChange={update('story')}
              placeholder="Racconta brevemente chi è, da dove viene e cosa lo ha portato a Rust Valley." textarea rows={8} />
            <Field label="Motivazione per il trasferimento" value={form.motivation} onChange={update('motivation')}
              placeholder="Perché Rust Valley?" textarea rows={4} />
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={form.agree} onChange={update('agree')} className="mt-1 w-5 h-5 accent-[#CE9A16]" />
              <span className="text-sm" style={{ color: '#d9e9e7' }}>
                Confermo di aver letto il <a href="/rules" className="underline" style={{ color: '#CE9A16' }}>regolamento</a>. *
              </span>
            </label>
            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={onDraft}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm transition-colors duration-200"
                style={{ background: 'transparent', color: '#13887F', border: '1px solid #13887F' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#13887F'; e.currentTarget.style.color = '#043935'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#13887F'; }}>
                <Save size={16} /> Salva bozza
              </button>
              <button type="submit" disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm disabled:opacity-60"
                style={{ background: '#CE9A16', color: '#043935' }}>
                {submitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} Invia Background
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, textarea, rows = 3, type = 'text' }) {
  const base = { background: 'rgba(2,38,35,0.9)', border: '1px solid rgba(19,136,127,0.5)', color: '#f5efe0' };
  return (
    <label className="block">
      <span className="font-head uppercase tracking-widest text-xs" style={{ color: '#CE9A16' }}>{label}</span>
      {textarea ? (
        <textarea value={value} onChange={onChange} placeholder={placeholder} rows={rows}
          className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[#CE9A16] transition-colors" style={base} />
      ) : (
        <input type={type} value={value} onChange={onChange} placeholder={placeholder}
          className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[#CE9A16] transition-colors" style={base} />
      )}
    </label>
  );
}
