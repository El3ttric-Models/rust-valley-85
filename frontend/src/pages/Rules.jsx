import React from 'react';
import { Shield, AlertTriangle, Sparkles } from 'lucide-react';
import { RULES, RULES_INTRO, RULES_FOOTER, IMAGES } from '../mock';

export function PageHeader({ title, subtitle, image, icon: Icon }) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '38vh' }}>
      <div className="absolute inset-0" style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(2,38,35,0.75) 0%, rgba(2,38,35,0.95) 100%)' }} />
      <div className="relative max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: '38vh' }}>
        {Icon && (
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: '#CE9A16', color: '#043935' }}>
            <Icon size={24} />
          </div>
        )}
        <h1 className="font-head uppercase tracking-[0.2em] text-3xl md:text-5xl" style={{ color: '#f5efe0' }}>{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl" style={{ color: '#d9e9e7' }}>{subtitle}</p>}
      </div>
    </section>
  );
}

export default function Rules() {
  return (
    <div>
      <PageHeader
        icon={Shield}
        title="Regolamento"
        subtitle="Regolamento ufficiale del server Rust Valley 85's."
        image={IMAGES.rules}
      />

      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <article
            className="rounded-2xl p-7 mb-6"
            style={{ background: 'rgba(4,57,53,0.7)', border: '1px solid rgba(19,136,127,0.5)' }}
          >
            <h2 className="font-head uppercase tracking-widest text-xl mb-4" style={{ color: '#CE9A16' }}>
              {RULES_INTRO.title}
            </h2>
            {RULES_INTRO.paragraphs.map((p, i) => (
              <p key={i} className="mb-3 leading-relaxed" style={{ color: '#e6ede9' }}>{p}</p>
            ))}
          </article>

          {/* Tip callout */}
          <div
            className="mb-10 p-5 rounded-xl flex items-start gap-4"
            style={{ background: 'rgba(206,154,22,0.08)', border: '1px solid #CE9A16' }}
          >
            <Sparkles className="shrink-0 mt-1" style={{ color: '#CE9A16' }} />
            <div>
              <div className="font-head uppercase tracking-widest text-xs" style={{ color: '#CE9A16' }}>Tip dello Staff</div>
              <p className="mt-2 text-sm italic leading-relaxed" style={{ color: '#f5efe0' }}>{RULES_INTRO.tip}</p>
            </div>
          </div>

          {/* Rules sections */}
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-head"
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
                        className="font-retro text-base shrink-0 pt-0.5"
                        style={{ color: '#CE9A16', minWidth: '34px' }}
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

          {/* Footer note */}
          <div
            className="mt-10 p-5 rounded-xl flex items-start gap-4"
            style={{ background: 'rgba(206,22,22,0.08)', border: '1px solid #CE1616' }}
          >
            <AlertTriangle className="shrink-0 mt-1" style={{ color: '#CE1616' }} />
            <p className="text-sm" style={{ color: '#f5efe0' }}>{RULES_FOOTER}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
