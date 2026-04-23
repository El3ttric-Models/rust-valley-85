import React from 'react';

// Logo component: supports two variants
//   - variant="home" → uses /assets/logo4.png (larger, home hero)
//   - default → uses /assets/logo3.png (navbar & other pages)
// To replace, overwrite the files in /public/assets/ (same filenames).
export default function Logo({ size = 'md', variant = 'default', className = '' }) {
  const sizes = {
    xs: 'h-8',
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-24 md:h-32',
    xl: 'h-40 md:h-56',
  };
  const h = sizes[size] || sizes.md;
  const src = variant === 'home' ? '/assets/logo4.png' : '/assets/logo3.png';
  return (
    <img
      src={src}
      alt="Rust Valley 85's Roleplay"
      className={`${h} w-auto select-none ${className}`}
      style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.55))' }}
      draggable="false"
      data-editable-logo
    />
  );
}
