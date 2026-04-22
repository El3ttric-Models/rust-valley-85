import React from 'react';
import { Landmark, FileDown, ExternalLink } from 'lucide-react';
import { HISTORICAL, IMAGES, HISTORICAL_GUIDE_URL } from '../mock';
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

          {/* CTA button to external guide */}
          <div
            className="p-8 rounded-2xl text-center"
            style={{ background: 'linear-gradient(180deg, rgba(206,154,22,0.12), rgba(4,57,53,0.6))', border: '1px solid #CE9A16' }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <FileDown size={22} style={{ color: '#CE9A16' }} />
              <h3 className="font-head uppercase tracking-widest text-lg" style={{ color: '#f5efe0' }}>Guida Ufficiale Completa</h3>
            </div>
            <p className="mb-6 text-sm" style={{ color: '#d9e9e7' }}>
              Apri il documento completo con l'introduzione storica e l'ambientazione dettagliata di Rust Valley.
            </p>
            <a
              href={HISTORICAL_GUIDE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm"
              style={{ background: '#CE9A16', color: '#043935' }}
            >
              Apri il documento <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
