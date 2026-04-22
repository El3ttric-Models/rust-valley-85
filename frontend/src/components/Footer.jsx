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
        <div className="flex flex-col gap-4">
          <img
            src={BRAND.logoSecondaryUrl}
            alt="Rust Valley 85's Dev's"
            className="h-16 md:h-20 w-auto"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.6))' }}
            data-editable-logo
          />
          <p className="text-sm max-w-xs" style={{ color: '#9fbfbb' }}>
            {BRAND.secondaryPhrase}
          </p>
        </div>
        <div>
          <h4 className="font-head uppercase tracking-widest mb-4" style={{ color: '#CE9A16' }}>Navigazione</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link to="/rules" className="hover:text-[#CE9A16] transition-colors" style={{ color: '#f5efe0' }}>Regole</Link></li>
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
