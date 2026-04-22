import React from 'react';
import { Youtube, Instagram, MessageCircle } from 'lucide-react';
import { SOCIAL } from '../mock';

// Inline TikTok icon (lucide does not include official TikTok)
const TikTokIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.01a8.16 8.16 0 0 0 4.77 1.52V7.08a4.85 4.85 0 0 1-1.84-.39z" />
  </svg>
);

const DiscordIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a14.25 14.25 0 0 0-.67 1.378 18.27 18.27 0 0 0-5.487 0A12.6 12.6 0 0 0 9.728 3 19.8 19.8 0 0 0 5.966 4.372C2.5 9.527 1.59 14.555 2.05 19.5a19.93 19.93 0 0 0 6.032 3.05c.49-.666.927-1.375 1.3-2.118a12.9 12.9 0 0 1-2.048-.982c.172-.126.34-.257.501-.39a14.19 14.19 0 0 0 12.33 0c.163.134.33.265.503.39-.655.39-1.343.719-2.05.983.373.743.81 1.451 1.3 2.117a19.89 19.89 0 0 0 6.035-3.05c.54-5.75-.92-10.732-3.635-15.131ZM8.52 16.5c-1.18 0-2.15-1.082-2.15-2.41 0-1.328.948-2.41 2.15-2.41s2.17 1.082 2.15 2.41c0 1.328-.948 2.41-2.15 2.41Zm6.96 0c-1.18 0-2.15-1.082-2.15-2.41 0-1.328.948-2.41 2.15-2.41s2.17 1.082 2.15 2.41c0 1.328-.948 2.41-2.15 2.41Z"/>
  </svg>
);

const items = [
  { href: SOCIAL.youtube, label: 'YouTube', Icon: Youtube },
  { href: SOCIAL.instagram, label: 'Instagram', Icon: Instagram },
  { href: SOCIAL.tiktok, label: 'TikTok', Icon: TikTokIcon },
  { href: SOCIAL.discord, label: 'Discord', Icon: DiscordIcon },
];

export default function SocialIcons({ variant = 'header' }) {
  const isHeader = variant === 'header';
  return (
    <div className="flex items-center gap-2">
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className={`inline-flex items-center justify-center rounded-full border transition-colors duration-200 ${
            isHeader ? 'w-9 h-9' : 'w-11 h-11'
          }`}
          style={{
            borderColor: '#13887F',
            color: '#f5efe0',
            background: 'rgba(4, 57, 53, 0.65)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#13887F';
            e.currentTarget.style.color = '#043935';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(4, 57, 53, 0.65)';
            e.currentTarget.style.color = '#f5efe0';
          }}
        >
          <Icon size={isHeader ? 16 : 18} />
        </a>
      ))}
    </div>
  );
}
