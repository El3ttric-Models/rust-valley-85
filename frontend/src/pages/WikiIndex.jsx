import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Landmark, ArrowRight } from 'lucide-react';
import { IMAGES } from '../mock';
import { PageHeader } from './Rules';

const items = [
  {
    to: '/wiki/background-guide',
    title: 'Guida Background',
    desc: "Linee guida complete per costruire un personaggio credibile: etnie, religione, ruoli e storia.",
    Icon: BookOpen,
  },
  {
    to: '/wiki/historical',
    title: 'Introduzione Storica',
    desc: "L'ambientazione di Rust Valley: geografia, storia e dinamiche sociali del 1985.",
    Icon: Landmark,
  },
];

export default function WikiIndex() {
  return (
    <div>
      <PageHeader
        icon={BookOpen}
        title="Wiki"
        subtitle="Tutto quello che ti serve per entrare a Rust Valley. Scegli la sezione che vuoi esplorare."
        image={IMAGES.wiki}
      />

      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {items.map(({ to, title, desc, Icon }) => (
            <Link
              key={to}
              to={to}
              className="group relative p-7 rounded-2xl transition-transform duration-300 hover:-translate-y-1 block"
              style={{
                background: 'linear-gradient(180deg, rgba(19,136,127,0.12) 0%, rgba(4,57,53,0.75) 100%)',
                border: '1px solid rgba(206,154,22,0.4)',
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200 group-hover:bg-[#CE9A16]"
                style={{ background: '#13887F', color: '#043935' }}
              >
                <Icon size={24} />
              </div>
              <h2 className="font-head uppercase tracking-widest text-xl" style={{ color: '#f5efe0' }}>
                {title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: '#c2d8d5' }}>
                {desc}
              </p>
              <div
                className="mt-6 inline-flex items-center gap-2 font-head uppercase tracking-widest text-xs"
                style={{ color: '#CE9A16' }}
              >
                Apri sezione <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
