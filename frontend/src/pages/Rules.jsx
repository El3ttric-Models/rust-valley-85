import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';
import { RULES, IMAGES } from '../mock';

function PageHeader({ title, subtitle, image, icon: Icon }) {
  return (
    <section className="relative overflow-hidden scanlines" style={{ minHeight: '44vh' }}>
      <div className="absolute inset-0" style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(2,38,35,0.75) 0%, rgba(2,38,35,0.95) 100%)' }} />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: '44vh' }}>
        {Icon && (
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5" style={{ background: '#CE9A16', color: '#043935' }}>
            <Icon size={28} />
          </div>
        )}
        <h1 className="font-display text-4xl md:text-6xl chrome-text leading-tight">{title}</h1>
        <p className="mt-4 max-w-2xl" style={{ color: '#d9e9e7' }}>{subtitle}</p>
      </div>
    </section>
  );
}

export { PageHeader };

export default function Rules() {
  return (
    <div>
      <PageHeader
        icon={Shield}
        title="Regolamento"
        subtitle="Le fondamenta del nostro mondo. Leggile con attenzione: rispettarle significa proteggere l'esperienza di tutti."
        image={IMAGES.rules}
      />

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="mb-12 p-5 rounded-xl flex items-start gap-4"
            style={{ background: 'rgba(206,22,22,0.08)', border: '1px solid #CE1616' }}
          >
            <AlertTriangle className="shrink-0 mt-1" style={{ color: '#CE1616' }} />
            <div>
              <div className="font-head uppercase tracking-widest text-sm" style={{ color: '#CE1616' }}>Nota importante</div>
              <p className="mt-1 text-sm" style={{ color: '#f5efe0' }}>
                Il regolamento può essere aggiornato periodicamente. È responsabilità di ogni giocatore restare informato. L'ignoranza non esime dalle sanzioni.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {RULES.map((section, idx) => (
              <article
                key={section.id}
                className="rounded-2xl overflow-hidden"
                style={{ background: 'rgba(4,57,53,0.7)', border: '1px solid rgba(19,136,127,0.5)' }}
              >
                <header
                  className="px-6 py-4 flex items-center gap-4"
                  style={{ background: 'linear-gradient(90deg, rgba(19,136,127,0.2) 0%, transparent 100%)', borderBottom: '1px solid #13887F' }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-display"
                    style={{ background: '#CE9A16', color: '#043935' }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h2 className="font-head uppercase tracking-widest text-lg md:text-xl" style={{ color: '#f5efe0' }}>
                    {section.title}
                  </h2>
                </header>
                <ol className="p-6 space-y-3">
                  {section.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="font-retro text-lg shrink-0"
                        style={{ color: '#CE9A16', minWidth: '28px' }}
                      >
                        {idx + 1}.{i + 1}
                      </span>
                      <span style={{ color: '#e6ede9' }}>{it}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
