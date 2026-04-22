import React, { useState } from 'react';
import { FileText, Send, Save, AlertCircle, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../mock';
import { PageHeader } from './Rules';
import { useToast } from '../hooks/use-toast';

export default function BackgroundForm() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    charName: '',
    playerName: '',
    discordTag: '',
    age: '',
    story: '',
    motivation: '',
    agree: false,
  });
  const [saved, setSaved] = useState(false);

  const update = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
    setSaved(false);
  };

  const onDraft = () => {
    try {
      localStorage.setItem('rv85_background_draft', JSON.stringify(form));
      setSaved(true);
      toast({ title: 'Bozza salvata', description: 'La tua bozza è stata salvata nel browser.' });
    } catch {
      toast({ title: 'Errore', description: 'Impossibile salvare la bozza.', variant: 'destructive' });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.charName || !form.story || !form.agree) {
      toast({ title: 'Campi mancanti', description: 'Compila i campi obbligatori e accetta le condizioni.', variant: 'destructive' });
      return;
    }
    toast({ title: 'Invio non disponibile', description: "Collega il backend per inviare il background allo staff tramite webhook Discord." });
  };

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem('rv85_background_draft');
      if (raw) setForm(JSON.parse(raw));
    } catch { /* ignore */ }
  }, []);

  return (
    <div>
      <PageHeader
        icon={FileText}
        title="Invia il tuo Background"
        subtitle="Racconta in breve la storia del tuo personaggio. Per la scheda completa usa la sezione Scheda Personaggio."
        image={IMAGES.city}
      />

      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={onSubmit}
            className="p-8 rounded-2xl space-y-6"
            style={{ background: 'rgba(4,57,53,0.75)', border: '1px solid rgba(19,136,127,0.6)' }}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Nome personaggio *" value={form.charName} onChange={update('charName')} placeholder="Es. Marcus Delaney" />
              <Field label="Età personaggio" value={form.age} onChange={update('age')} placeholder="Es. 27" type="number" />
              <Field label="Il tuo nome" value={form.playerName} onChange={update('playerName')} placeholder="Nome reale o nickname" />
              <Field label="Tag Discord" value={form.discordTag} onChange={update('discordTag')} placeholder="es. username#0000" />
            </div>

            <Field
              label="Storia del personaggio *"
              value={form.story}
              onChange={update('story')}
              placeholder="Racconta brevemente chi è, da dove viene e cosa lo ha portato a Rust Valley."
              textarea
              rows={8}
            />

            <Field
              label="Motivazione per il trasferimento"
              value={form.motivation}
              onChange={update('motivation')}
              placeholder="Perché Rust Valley? Cosa cerca?"
              textarea
              rows={4}
            />

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={update('agree')}
                className="mt-1 w-5 h-5 accent-[#CE9A16]"
              />
              <span className="text-sm" style={{ color: '#d9e9e7' }}>
                Confermo di aver letto il <a href="/rules" className="underline" style={{ color: '#CE9A16' }}>regolamento</a> e la <a href="/wiki/background-guide" className="underline" style={{ color: '#CE9A16' }}>guida al background</a>. *
              </span>
            </label>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onDraft}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm transition-colors duration-200"
                style={{ background: 'transparent', color: '#13887F', border: '1px solid #13887F' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#13887F'; e.currentTarget.style.color = '#043935'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#13887F'; }}
              >
                <Save size={16} /> Salva bozza
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm"
                style={{ background: '#CE9A16', color: '#043935' }}
              >
                <Send size={16} /> Invia Background
              </button>
            </div>

            {saved && (
              <div className="flex items-center gap-2 text-sm" style={{ color: '#13887F' }}>
                <CheckCircle2 size={16} /> Bozza salvata localmente.
              </div>
            )}

            <div
              className="p-4 rounded-xl flex items-start gap-3 text-sm"
              style={{ background: 'rgba(206,22,22,0.08)', border: '1px solid #CE1616', color: '#f5efe0' }}
            >
              <AlertCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#CE1616' }} />
              <div>Funzionalità demo: il salvataggio definitivo e l'invio a Discord saranno attivati collegando il backend.</div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, textarea, rows = 3, type = 'text' }) {
  const base = {
    background: 'rgba(2,38,35,0.9)',
    border: '1px solid rgba(19,136,127,0.5)',
    color: '#f5efe0',
  };
  return (
    <label className="block">
      <span className="font-head uppercase tracking-widest text-xs" style={{ color: '#CE9A16' }}>{label}</span>
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[#CE9A16] transition-colors"
          style={base}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-2 w-full rounded-lg px-4 py-3 text-sm outline-none focus:border-[#CE9A16] transition-colors"
          style={base}
        />
      )}
    </label>
  );
}
