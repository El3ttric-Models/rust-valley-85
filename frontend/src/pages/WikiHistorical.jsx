import React from 'react';
import { Landmark } from 'lucide-react';
import { HISTORICAL, IMAGES } from '../mock';
import { PageHeader } from './Rules';

export default function WikiHistorical() {
  return (
    <div>
      <PageHeader
        icon={Landmark}
        title="Introduzione Storica"
        subtitle="La storia e l'ambientazione di Rust Valley."
        image={IMAGES.valley}
      />
      <section className="relative py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {HISTORICAL.map((s) => (
            <article
              key={s.id}
              className="p-7 rounded-2xl"
              style={{ background: 'rgba(4,57,53,0.7)', border: '1px solid rgba(19,136,127,0.5)' }}
            >
              <h2 className="font-head uppercase tracking-widest text-lg mb-3" style={{ color: '#CE9A16' }}>{s.title}</h2>
              {s.content && <p className="leading-relaxed" style={{ color: '#e6ede9' }}>{s.content}</p>}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
