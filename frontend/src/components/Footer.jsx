import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import { BRAND } from '../mock';

export default function Footer() {
  return (
    <footer
      className="relative mt-20"
      style={{
        background: 'linear-gradient(180deg, #022623 0%, #011816 100%)',
        borderTop: '1px solid #13887F',
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col gap-3">
          <div className="font-head uppercase tracking-[0.3em] text-xs" style={{ color: '#CE9A16' }}>
            {BRAND.mainPhrase}
          </div>
          <div className="font-head uppercase tracking-widest text-xl" style={{ color: '#f5efe0' }}>
            {BRAND.name}
          </div>
          <p className="text-sm max-w-xs mt-1 italic" style={{ color: '#9fbfbb' }}>
            &ldquo;{BRAND.secondaryPhrase}&rdquo;
          </p>
        </div>
        <div>
          <h4 className="font-head uppercase tracking-widest mb-4" style={{ color: '#CE9A16' }}>Navigazione</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/rules" className="hover:text-[#CE9A16] transition-colors" style={{ color: '#f5efe0' }}>Regole</Link></li>
            <li><Link to="/wiki" className="hover:text-[#CE9A16] transition-colors" style={{ color: '#f5efe0' }}>Wiki</Link></li>
            <li><Link to="/wiki/background-guide" className="hover:text-[#CE9A16] transition-colors" style={{ color: '#f5efe0' }}>Wiki · Background Guide</Link></li>
            <li><Link to="/wiki/historical" className="hover:text-[#CE9A16] transition-colors" style={{ color: '#f5efe0' }}>Wiki · Introduzione Storica</Link></li>
            <li><Link to="/character-sheet" className="hover:text-[#CE9A16] transition-colors" style={{ color: '#f5efe0' }}>Scheda Personaggio</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-head uppercase tracking-widest mb-4" style={{ color: '#CE9A16' }}>Seguici</h4>
          <SocialIcons variant="footer" />
          <p className="text-xs mt-6" style={{ color: '#6f8f8b' }}>
            © {new Date().getFullYear()} {BRAND.name} — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
