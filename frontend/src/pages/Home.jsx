import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, FileText } from 'lucide-react';
import Logo from '../components/Logo';
import SocialIcons from '../components/SocialIcons';
import { IMAGES, BRAND } from '../mock';

export default function Home() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 74px)' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${IMAGES.hero}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(2,38,35,0.55) 0%, rgba(2,38,35,0.9) 100%)',
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16"
        style={{ minHeight: 'calc(100vh - 74px)' }}
      >
        <div className="float-up">
          <Logo size="xl" />
        </div>

        <div className="mt-8 float-up" style={{ animationDelay: '0.12s' }}>
          <span
            className="inline-block px-4 py-1 rounded-full font-head uppercase text-xs tracking-[0.4em]"
            style={{ background: 'rgba(206,154,22,0.15)', color: '#CE9A16', border: '1px solid #CE9A16' }}
          >
            {BRAND.mainPhrase}
          </span>
        </div>

        <p
          className="mt-6 max-w-2xl text-lg md:text-2xl float-up italic"
          style={{ color: '#f5efe0', animationDelay: '0.2s', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, letterSpacing: '0.04em' }}
        >
          “{BRAND.secondaryPhrase}”
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 float-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Link
            to="/character-sheet"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm transition-colors duration-200"
            style={{ background: '#CE9A16', color: '#043935' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f0b730'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#CE9A16'; }}
          >
            <FileText size={16} /> Scheda Personaggio
          </Link>
          <Link
            to="/rules"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm transition-colors duration-200"
            style={{ background: 'rgba(4,57,53,0.65)', color: '#f5efe0', border: '1px solid #13887F' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#13887F'; e.currentTarget.style.color = '#043935'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(4,57,53,0.65)'; e.currentTarget.style.color = '#f5efe0'; }}
          >
            <Shield size={16} /> Regolamento
          </Link>
          <Link
            to="/wiki/background-guide"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm transition-colors duration-200"
            style={{ background: 'rgba(4,57,53,0.65)', color: '#f5efe0', border: '1px solid #13887F' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#13887F'; e.currentTarget.style.color = '#043935'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(4,57,53,0.65)'; e.currentTarget.style.color = '#f5efe0'; }}
          >
            <BookOpen size={16} /> Wiki
          </Link>
        </div>

        <div className="mt-10 float-up" style={{ animationDelay: '0.45s' }}>
          <SocialIcons variant="footer" />
        </div>

        {/* Description at the bottom */}
        <div
          className="mt-16 max-w-3xl float-up"
          style={{ animationDelay: '0.55s' }}
        >
          <div
            className="relative p-7 rounded-2xl text-left"
            style={{
              background: 'rgba(4,57,53,0.78)',
              border: '1px solid rgba(206,154,22,0.5)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <span
              className="absolute -top-3 left-5 px-3 py-1 rounded-full font-head uppercase text-[10px] tracking-[0.3em]"
              style={{ background: '#CE9A16', color: '#043935' }}
            >
              La Valle
            </span>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: '#e6ede9' }}>
              {BRAND.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
