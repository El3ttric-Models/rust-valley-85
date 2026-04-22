import React from 'react';

export default function Logo({ size = 'md', showSubtitle = false }) {
  const sizes = {
    sm: { main: 'text-xl', sub: 'text-[9px]' },
    md: { main: 'text-2xl', sub: 'text-[10px]' },
    lg: { main: 'text-5xl md:text-6xl', sub: 'text-xs md:text-sm' },
    xl: { main: 'text-6xl md:text-8xl', sub: 'text-sm md:text-base' },
  };
  const s = sizes[size] || sizes.md;
  return (
    <div className="inline-flex flex-col items-center leading-none select-none" data-editable-logo>
      <span
        className={`font-display ${s.main} chrome-text tracking-wider`}
        style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.6))' }}
      >
        RUST VALLEY
      </span>
      <span
        className={`font-head ${s.sub} mt-1 px-3 py-0.5 rounded-sm`}
        style={{
          background: 'linear-gradient(90deg, #CE1616 0%, #CE9A16 100%)',
          color: '#043935',
          letterSpacing: '0.35em',
        }}
      >
        85&rsquo;S · FIVEM RP
      </span>
      {showSubtitle && (
        <span className="font-retro mt-3 text-lg" style={{ color: '#13887F' }}>
          &gt; EST. 1985 &lt;
        </span>
      )}
    </div>
  );
}
