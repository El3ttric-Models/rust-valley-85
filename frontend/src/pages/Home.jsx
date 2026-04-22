import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Users, Shield, Calendar, Play, ArrowRight, ChevronDown, Film, Disc3, Gauge } from 'lucide-react';
import Logo from '../components/Logo';
import { HIGHLIGHTS, STATS, IMAGES, BRAND } from '../mock';

const iconMap = { Radio, Users, Shield, Calendar };

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden scanlines" style={{ minHeight: '92vh' }}>
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
              'linear-gradient(180deg, rgba(2,38,35,0.65) 0%, rgba(2,38,35,0.85) 60%, #022623 100%)',
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center" style={{ minHeight: '92vh' }}>
          <div className="float-up">
            <span
              className="inline-block px-4 py-1 rounded-full font-head uppercase text-xs tracking-[0.4em] mb-6"
              style={{ background: 'rgba(206, 154, 22, 0.15)', color: '#CE9A16', border: '1px solid #CE9A16' }}
            >
              1985 · FiveM Roleplay
            </span>
          </div>
          <div className="float-up" style={{ animationDelay: '0.12s' }}>
            <Logo size="xl" showSubtitle />
          </div>
          <p
            className="mt-8 max-w-2xl text-lg md:text-xl float-up"
            style={{ color: '#d9e9e7', animationDelay: '0.2s' }}
          >
            {BRAND.tagline}{' '}
            <span style={{ color: '#CE9A16' }} className="font-semibold">
              Neon, cassette e storie che non finiscono mai.
            </span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 float-up" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/character-sheet"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-head uppercase tracking-widest text-sm pulse-gold"
              style={{ background: '#CE9A16', color: '#043935' }}
            >
              <Play size={16} /> Crea il tuo personaggio
            </Link>
            <Link
              to="/rules"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-head uppercase tracking-widest text-sm transition-colors duration-200"
              style={{ background: 'rgba(4,57,53,0.7)', color: '#f5efe0', border: '1px solid #13887F' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#13887F'; e.currentTarget.style.color = '#043935'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(4,57,53,0.7)'; e.currentTarget.style.color = '#f5efe0'; }}
            >
              <Shield size={16} /> Leggi le regole <ArrowRight size={14} />
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flicker" style={{ color: '#13887F' }}>
            <ChevronDown size={28} />
          </div>
        </div>
      </section>

      {/* STATS MARQUEE */}
      <section className="relative" style={{ background: '#043935', borderTop: '1px solid #13887F', borderBottom: '1px solid #13887F' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl md:text-5xl chrome-text">{s.value}</div>
              <div className="mt-2 font-head uppercase text-xs tracking-[0.25em]" style={{ color: '#9fbfbb' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-6xl chrome-text">Benvenuto nel 1985</h2>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: '#9fbfbb' }}>
              Un'esperienza roleplay completa, costruita per chi ama gli anni '80 senza compromessi.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((h, idx) => {
              const Icon = iconMap[h.icon] || Radio;
              return (
                <div
                  key={h.title}
                  className="relative p-6 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(180deg, rgba(19,136,127,0.12) 0%, rgba(4,57,53,0.6) 100%)',
                    border: '1px solid rgba(19,136,127,0.5)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: idx % 2 === 0 ? '#CE9A16' : '#13887F', color: '#043935' }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-head uppercase tracking-widest text-lg" style={{ color: '#f5efe0' }}>{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: '#c2d8d5' }}>{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${IMAGES.city}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(2,38,35,0.95) 0%, rgba(2,38,35,0.7) 100%)',
          }}
        />
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="font-retro text-2xl" style={{ color: '#CE9A16' }}>&gt; INIZIA LA TUA STORIA</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl chrome-text leading-tight">
              Invia il tuo Background
            </h2>
            <p className="mt-4" style={{ color: '#d9e9e7' }}>
              Accedi con Discord e compila la scheda del tuo personaggio. Lo staff la esaminerà prima dell'approvazione nel server.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/character-sheet"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm"
                style={{ background: '#5865F2', color: '#fff' }}
              >
                <Disc3 size={16} /> Accedi con Discord
              </Link>
              <Link
                to="/wiki/background-guide"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-head uppercase tracking-widest text-sm"
                style={{ background: 'transparent', color: '#CE9A16', border: '1px solid #CE9A16' }}
              >
                <Film size={16} /> Leggi la guida
              </Link>
            </div>
          </div>
          <div
            className="rounded-2xl p-8 relative"
            style={{
              background: 'rgba(4, 57, 53, 0.8)',
              border: '1px solid #CE9A16',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Gauge style={{ color: '#CE9A16' }} />
              <span className="font-head uppercase tracking-widest text-sm" style={{ color: '#CE9A16' }}>Server Status</span>
            </div>
            <div className="font-display text-3xl chrome-text mb-2">ONLINE</div>
            <div className="font-retro text-xl" style={{ color: '#13887F' }}>
              &gt; 87/128 cittadini connessi
            </div>
            <div className="mt-6 space-y-2 text-sm" style={{ color: '#c2d8d5' }}>
              <div className="flex justify-between"><span>Ping medio</span><span style={{ color: '#CE9A16' }}>24ms</span></div>
              <div className="flex justify-between"><span>Uptime mensile</span><span style={{ color: '#CE9A16' }}>99.8%</span></div>
              <div className="flex justify-between"><span>Prossimo evento</span><span style={{ color: '#CE9A16' }}>Sab 21:00</span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
