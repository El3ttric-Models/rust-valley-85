import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, FileText } from 'lucide-react';
import Logo from '../components/Logo';
import SocialIcons from '../components/SocialIcons';
import { IMAGES, BRAND } from '../mock';

export default function Home() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: 'calc(100vh - 74px)' }}>
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${IMAGES.hero}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(2,38,35,0.55) 0%, rgba(2,38,35,0.85) 100%)',
        }}
      />

      {/* Minimal centered content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: 'calc(100vh - 74px)' }}
      >
        <div className="float-up">
          <Logo size="xl" />
        </div>

        <p
          className="mt-6 max-w-xl text-base md:text-lg float-up"
          style={{ color: '#e7ebdd', animationDelay: '0.15s' }}
        >
          {BRAND.subtitle}
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

        <div className="mt-12 float-up" style={{ animationDelay: '0.45s' }}>
          <SocialIcons variant="footer" />
        </div>
      </div>
    </section>
  );
}
