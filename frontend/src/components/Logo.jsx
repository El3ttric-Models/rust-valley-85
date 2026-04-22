import React from 'react';

// To replace the logo later, put a new file at /public/assets/logo.png (same path).
export default function Logo({ size = 'md', className = '' }) {
  const sizes = {
    xs: 'h-8',
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-24 md:h-32',
    xl: 'h-40 md:h-56',
  };
  const h = sizes[size] || sizes.md;
  return (
    <img
      src="/assets/logo.png"
      alt="Rust Valley 85's Roleplay"
      className={`${h} w-auto select-none ${className}`}
      style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.55))' }}
      draggable="false"
      data-editable-logo
    />
  );
}
