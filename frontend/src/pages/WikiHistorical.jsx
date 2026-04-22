import React from 'react';
import { Landmark, MapPin, Music2, Users2, TrendingUp } from 'lucide-react';
import { HISTORICAL, IMAGES } from '../mock';
import { PageHeader } from './Rules';

const iconFor = (id) => {
  switch (id) {
    case 'fondazione': return Landmark;
    case 'anni80': return TrendingUp;
    case 'quartieri': return MapPin;
    case 'economia': return Users2;
    case 'cultura': return Music2;
    default: return Landmark;
  }
};

export default function WikiHistorical() {
  return (
    <div>
      <PageHeader
        icon={Landmark}
        title="Introduzione Storica"
        subtitle="Dalla fondazione mineraria alle luci al neon: la storia di Rust Valley dal 1887 al 1985."
        image={IMAGES.valley}
      />

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative pl-10">
            <div
              className="absolute left-3 top-0 bottom-0 w-[2px]"
              style={{ background: 'linear-gradient(180deg, #CE9A16 0%, #13887F 50%, #CE1616 100%)' }}
            />

            {HISTORICAL.map((h, idx) => {
              const Icon = iconFor(h.id);
              return (
                <article key={h.id} className="relative mb-10">
                  <div
                    className="absolute -left-10 top-1 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: '#CE9A16', color: '#043935', boxShadow: '0 0 0 4px #022623' }}
                  >
                    <Icon size={16} />
                  </div>
                  <div
                    className="p-6 rounded-2xl transition-transform duration-300 hover:translate-x-1"
                    style={{ background: 'rgba(4,57,53,0.75)', border: '1px solid rgba(19,136,127,0.5)' }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-retro text-lg" style={{ color: '#CE9A16' }}>
                        &gt; CAPITOLO {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="font-head uppercase tracking-widest text-xl md:text-2xl" style={{ color: '#f5efe0' }}>
                      {h.title}
                    </h2>
                    <p className="mt-3 leading-relaxed" style={{ color: '#d9e9e7' }}>{h.content}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
