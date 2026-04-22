import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, Shield, User } from 'lucide-react';
import SocialIcons from './SocialIcons';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [wikiOpen, setWikiOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setWikiOpen(false);
  }, [location.pathname]);

  const linkBase =
    'inline-flex items-center gap-2 px-4 py-2 rounded-full font-head text-sm uppercase tracking-widest transition-colors duration-200';

  const styleInactive = {
    color: '#f5efe0',
    background: 'rgba(4, 57, 53, 0.55)',
    border: '1px solid #13887F',
  };
  const styleActive = {
    color: '#043935',
    background: '#CE9A16',
    border: '1px solid #CE9A16',
  };

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(2, 38, 35, 0.95)' : 'linear-gradient(180deg, rgba(2,38,35,0.95) 0%, rgba(2,38,35,0.75) 100%)',
        borderBottom: `1px solid ${scrolled ? '#CE9A16' : 'rgba(19,136,127,0.5)'}`,
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0">
          <Logo size="sm" />
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          <NavLink to="/rules" style={({ isActive }) => (isActive ? styleActive : styleInactive)} className={linkBase}>
            <Shield size={14} /> Regole
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setWikiOpen(true)}
            onMouseLeave={() => setWikiOpen(false)}
          >
            <button
              className={linkBase}
              style={location.pathname.startsWith('/wiki') ? styleActive : styleInactive}
              aria-haspopup="true"
              aria-expanded={wikiOpen}
            >
              <BookOpen size={14} /> Wiki <ChevronDown size={14} />
            </button>
            {wikiOpen && (
              <div
                className="absolute left-0 top-full mt-2 min-w-[260px] rounded-xl overflow-hidden shadow-2xl"
                style={{ background: '#043935', border: '1px solid #CE9A16' }}
              >
                <Link
                  to="/wiki/background-guide"
                  className="block px-5 py-3 font-head text-sm uppercase tracking-widest hover:bg-[#13887F]/30 border-b border-[#13887F]/40"
                  style={{ color: '#f5efe0' }}
                >
                  Background Guide
                </Link>
                <Link
                  to="/wiki/historical"
                  className="block px-5 py-3 font-head text-sm uppercase tracking-widest hover:bg-[#13887F]/30"
                  style={{ color: '#f5efe0' }}
                >
                  Introduzione Storica
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/character-sheet" style={({ isActive }) => (isActive ? styleActive : styleInactive)} className={linkBase}>
            <User size={14} /> Scheda Personaggio
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <SocialIcons />
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 rounded-full border"
          style={{ borderColor: '#CE9A16', color: '#CE9A16' }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t" style={{ borderColor: '#13887F', background: '#022623' }}>
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            <NavLink to="/rules" className="px-4 py-3 rounded-lg font-head uppercase text-sm tracking-widest" style={{ background: '#043935', color: '#f5efe0' }}>Regole</NavLink>
            <NavLink to="/wiki/background-guide" className="px-4 py-3 rounded-lg font-head uppercase text-sm tracking-widest" style={{ background: '#043935', color: '#f5efe0' }}>Wiki · Background Guide</NavLink>
            <NavLink to="/wiki/historical" className="px-4 py-3 rounded-lg font-head uppercase text-sm tracking-widest" style={{ background: '#043935', color: '#f5efe0' }}>Wiki · Introduzione Storica</NavLink>
            <NavLink to="/character-sheet" className="px-4 py-3 rounded-lg font-head uppercase text-sm tracking-widest" style={{ background: '#CE9A16', color: '#043935' }}>Scheda Personaggio</NavLink>
            <div className="pt-3"><SocialIcons variant="footer" /></div>
          </div>
        </div>
      )}
    </header>
  );
}
