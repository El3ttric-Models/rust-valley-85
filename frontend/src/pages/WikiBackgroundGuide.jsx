import React from 'react';
import { BookOpen, CheckCircle2, ListChecks, Info, Users, HeartHandshake, Target, Compass, UserCheck, History, Gavel, ShieldAlert } from 'lucide-react';
import { BACKGROUND_GUIDE, IMAGES } from '../mock';
import { PageHeader } from './Rules';

const iconFor = (id) => ({
  general: Info,
  ethnicities: Users,
  immigrants: Compass,
  'ethnicity-details': Users,
  religion: HeartHandshake,
  personality: UserCheck,
  aspirations: Target,
  presence: Compass,
  roles: ListChecks,
  story: History,
  convictions: Gavel,
}[id] || BookOpen);

export default function WikiBackgroundGuide() {
  return (
    <div>
      <PageHeader
        icon={BookOpen}
        title="Background Guide"
        subtitle="Tutte le linee guida per costruire un personaggio credibile per Rust Valley."
        image={IMAGES.wiki}
      />

      <section className="relative py-16 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[240px_1fr] gap-10">
          {/* TOC */}
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

          <div className="space-y-6">
            {BACKGROUND_GUIDE.map((s) => {
              const Icon = iconFor(s.id);
              return (
                <article
                  key={s.id}
                  id={s.id}
                  className="p-7 rounded-2xl scroll-mt-24"
                  style={{ background: 'rgba(4,57,53,0.7)', border: '1px solid rgba(19,136,127,0.5)' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon style={{ color: '#CE9A16' }} />
                    <h2 className="font-head uppercase tracking-widest text-lg md:text-xl" style={{ color: '#f5efe0' }}>{s.title}</h2>
                  </div>

                  {s.paragraphs && s.paragraphs.map((p, i) => (
                    <p key={i} className="mb-3 leading-relaxed" style={{ color: '#e6ede9' }}>{p}</p>
                  ))}

                  {s.bullets && (
                    <ul className="space-y-2 mt-4">
                      {s.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="shrink-0 mt-1" style={{ color: '#13887F' }} />
                          <span className="text-sm" style={{ color: '#e6ede9' }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.groups && (
                    <div className="grid md:grid-cols-2 gap-3 mt-4">
                      {s.groups.map((g, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-lg"
                          style={{ background: 'rgba(19,136,127,0.08)', border: '1px solid rgba(19,136,127,0.3)' }}
                        >
                          <div className="font-head uppercase tracking-widest text-xs mb-2" style={{ color: '#CE9A16' }}>{g.name}</div>
                          <div className="text-sm" style={{ color: '#e6ede9' }}>{g.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {s.note && (
                    <div
                      className="mt-5 p-3 rounded-lg flex items-start gap-2 text-xs"
                      style={{ background: 'rgba(206,154,22,0.08)', border: '1px solid rgba(206,154,22,0.4)' }}
                    >
                      <ShieldAlert size={14} className="shrink-0 mt-0.5" style={{ color: '#CE9A16' }} />
                      <span style={{ color: '#f5efe0' }}>{s.note}</span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
