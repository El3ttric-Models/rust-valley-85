import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, XCircle, ArrowRight, ScrollText } from 'lucide-react';
import { BACKGROUND_GUIDE, IMAGES } from '../mock';
import { PageHeader } from './Rules';

export default function WikiBackgroundGuide() {
  return (
    <div>
      <PageHeader
        icon={BookOpen}
        title="Background Guide"
        subtitle="Come costruire un personaggio credibile, coerente e pronto a vivere le notti di Rust Valley."
        image={IMAGES.wiki}
      />

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[220px_1fr] gap-10">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="font-head uppercase text-xs tracking-[0.3em] mb-4" style={{ color: '#CE9A16' }}>Indice</div>
              <ul className="space-y-2 text-sm">
                {BACKGROUND_GUIDE.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block px-3 py-2 rounded-lg border hover:bg-[#13887F]/20 transition-colors"
                      style={{ borderColor: 'rgba(19,136,127,0.4)', color: '#c2d8d5' }}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="space-y-10">
            {BACKGROUND_GUIDE.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="p-7 rounded-2xl scroll-mt-24"
                style={{ background: 'rgba(4,57,53,0.7)', border: '1px solid rgba(19,136,127,0.5)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <ScrollText style={{ color: '#CE9A16' }} />
                  <h2 className="font-head uppercase tracking-widest text-xl" style={{ color: '#f5efe0' }}>{s.title}</h2>
                </div>
                {s.content && (
                  <p className="leading-relaxed" style={{ color: '#d9e9e7' }}>{s.content}</p>
                )}
                {s.bullets && (
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {s.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg"
                        style={{ background: 'rgba(19,136,127,0.08)' }}
                      >
                        {s.id === 'donts' ? (
                          <XCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#CE1616' }} />
                        ) : (
                          <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: '#13887F' }} />
                        )}
                        <span className="text-sm" style={{ color: '#e6ede9' }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            <div
              className="p-8 rounded-2xl text-center"
              style={{ background: 'linear-gradient(180deg, rgba(206,154,22,0.12), rgba(4,57,53,0.6))', border: '1px solid #CE9A16' }}
            >
              <h3 className="font-display text-2xl md:text-3xl chrome-text">Pronto a scrivere la tua storia?</h3>
              <p className="mt-3" style={{ color: '#d9e9e7' }}>Compila la scheda personaggio e proponi il tuo background allo staff.</p>
              <Link
                to="/character-sheet"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm"
                style={{ background: '#CE9A16', color: '#043935' }}
              >
                Vai alla Scheda Personaggio <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
