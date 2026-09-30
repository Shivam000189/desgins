import React from 'react';

// Highly detailed, stylized SVG portraits representing the real people from the Wispr Flow landing page:
// Steven Bartlett, Dave Gilboa, Chelcie Taylor, Deedy Das, Chi-Hua Chien, Natasha, and Stephen.

export const StevenBartlettAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="steven_bg" x1="0" y1="0" x2="240" y2="240" gradientUnits="userSpaceOnUse">
        <stop stopColor="#e2d9f3" />
        <stop offset="1" stopColor="#cec2e5" />
      </linearGradient>
      <linearGradient id="steven_skin" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#af7856" />
        <stop offset="1" stopColor="#8d5639" />
      </linearGradient>
    </defs>
    <rect width="240" height="240" rx="12" fill="url(#steven_bg)" />
    {/* Body / Black Crewneck */}
    <path d="M40 240 C40 190, 80 170, 120 170 C160 170, 200 190, 200 240 Z" fill="#18181b" />
    <path d="M96 170 C96 182, 144 182, 144 170 Z" fill="#27272a" />
    {/* Neck */}
    <path d="M102 135 L102 172 C102 178, 138 178, 138 172 L138 135 Z" fill="#8d5639" />
    {/* Head / Jaw */}
    <path d="M78 88 C78 45, 162 45, 162 88 C162 132, 148 152, 120 152 C92 152, 78 132, 78 88 Z" fill="url(#steven_skin)" />
    {/* Buzzcut Hair */}
    <path d="M80 75 C80 42, 160 42, 160 75 C160 62, 145 48, 120 48 C95 48, 80 62, 80 75 Z" fill="#18181b" />
    {/* Stubble / Beard */}
    <path d="M86 112 C88 144, 152 144, 154 112 C150 148, 90 148, 86 112 Z" fill="#2d1b13" opacity="0.65" />
    {/* Eyes & Eyebrows */}
    <path d="M92 78 Q104 74 112 78" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
    <path d="M128 78 Q136 74 148 78" stroke="#1c1917" strokeWidth="3" strokeLinecap="round" />
    <circle cx="102" cy="88" r="4.5" fill="#18181b" />
    <circle cx="138" cy="88" r="4.5" fill="#18181b" />
    {/* Nose & Smile */}
    <path d="M120 86 L117 108 L123 108" stroke="#683d25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M106 122 Q120 130 134 122" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

export const DaveGilboaAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="dave_bg" x1="0" y1="0" x2="240" y2="240" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f3efe6" />
        <stop offset="1" stopColor="#e5ded0" />
      </linearGradient>
    </defs>
    <rect width="240" height="240" rx="12" fill="url(#dave_bg)" />
    {/* White linen shirt */}
    <path d="M35 240 C35 185, 75 168, 120 168 C165 168, 205 185, 205 240 Z" fill="#ffffff" />
    <path d="M105 168 L120 195 L135 168" stroke="#e2e8f0" strokeWidth="2" fill="none" />
    {/* Neck */}
    <path d="M104 135 L104 170 C104 176, 136 176, 136 170 L136 135 Z" fill="#e0a98b" />
    {/* Head */}
    <path d="M80 88 C80 48, 160 48, 160 88 C160 132, 146 150, 120 150 C94 150, 80 132, 80 88 Z" fill="#f0be9f" />
    {/* Hair (neat styled brown) */}
    <path d="M78 82 C76 48, 110 38, 135 40 C155 42, 164 55, 162 78 C158 55, 140 46, 120 46 C95 46, 82 60, 78 82 Z" fill="#5c3826" />
    {/* Eyebrows & Eyes */}
    <path d="M92 78 Q103 75 112 78" stroke="#4a2e1f" strokeWidth="2.8" strokeLinecap="round" />
    <path d="M128 78 Q137 75 148 78" stroke="#4a2e1f" strokeWidth="2.8" strokeLinecap="round" />
    <circle cx="102" cy="87" r="4" fill="#2d3748" />
    <circle cx="138" cy="87" r="4" fill="#2d3748" />
    {/* Nose & Big friendly smile */}
    <path d="M120 86 L118 106 L124 106" stroke="#c98a6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M104 118 Q120 130 136 118" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M102 117 Q120 132 138 117" stroke="#991b1b" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />
  </svg>
);

export const ChelcieTaylorAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="chelcie_bg" x1="0" y1="0" x2="240" y2="240" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3f3f46" />
        <stop offset="1" stopColor="#18181b" />
      </linearGradient>
    </defs>
    <rect width="240" height="240" rx="12" fill="url(#chelcie_bg)" />
    {/* Dark elegant blazer */}
    <path d="M30 240 C30 185, 75 165, 120 165 C165 165, 210 185, 210 240 Z" fill="#09090b" />
    <path d="M100 165 L120 205 L140 165" fill="#27272a" />
    {/* Neck */}
    <path d="M104 135 L104 168 C104 174, 136 174, 136 168 L136 135 Z" fill="#71452e" />
    {/* Hair (flowing dark sleek hair) */}
    <path d="M68 95 C68 45, 172 45, 172 95 C172 150, 168 190, 155 200 C150 180, 158 130, 158 95 C158 55, 82 55, 82 95 C82 130, 90 180, 85 200 C72 190, 68 150, 68 95 Z" fill="#18181b" />
    {/* Face */}
    <path d="M84 90 C84 52, 156 52, 156 90 C156 132, 144 148, 120 148 C96 148, 84 132, 84 90 Z" fill="#8c583c" />
    {/* Eyes */}
    <path d="M94 82 Q104 79 112 82" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M128 82 Q136 79 146 82" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="103" cy="90" r="4.2" fill="#18181b" />
    <circle cx="137" cy="90" r="4.2" fill="#18181b" />
    {/* Confident smile */}
    <path d="M106 120 Q120 131 134 120" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const DeedyDasAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="deedy_bg" x1="0" y1="0" x2="240" y2="240" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f5f5f4" />
        <stop offset="1" stopColor="#e7e5e4" />
      </linearGradient>
    </defs>
    <rect width="240" height="240" rx="12" fill="url(#deedy_bg)" />
    {/* Dark navy pullover */}
    <path d="M35 240 C35 185, 75 168, 120 168 C165 168, 205 185, 205 240 Z" fill="#1e293b" />
    {/* Neck */}
    <path d="M104 135 L104 170 C104 176, 136 176, 136 170 L136 135 Z" fill="#a46d49" />
    {/* Head */}
    <path d="M80 88 C80 48, 160 48, 160 88 C160 132, 146 150, 120 150 C94 150, 80 132, 80 88 Z" fill="#be855f" />
    {/* Dark wavy hair */}
    <path d="M78 78 C76 40, 120 35, 140 40 C162 45, 164 65, 162 82 C158 55, 135 48, 120 48 C95 48, 82 60, 78 78 Z" fill="#1c1917" />
    {/* Glasses */}
    <rect x="92" y="80" width="22" height="16" rx="4" stroke="#09090b" strokeWidth="2.5" fill="none" />
    <rect x="126" y="80" width="22" height="16" rx="4" stroke="#09090b" strokeWidth="2.5" fill="none" />
    <path d="M114 88 L126 88" stroke="#09090b" strokeWidth="2.5" />
    <circle cx="103" cy="88" r="3.5" fill="#1c1917" />
    <circle cx="137" cy="88" r="3.5" fill="#1c1917" />
    {/* Warm smile */}
    <path d="M106 120 Q120 130 134 120" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const ChiHuaAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="chihua_bg" x1="0" y1="0" x2="240" y2="240" gradientUnits="userSpaceOnUse">
        <stop stopColor="#047857" />
        <stop offset="1" stopColor="#065f46" />
      </linearGradient>
    </defs>
    <rect width="240" height="240" rx="12" fill="url(#chihua_bg)" />
    {/* Casual blue gingham/checked shirt */}
    <path d="M35 240 C35 185, 75 168, 120 168 C165 168, 205 185, 205 240 Z" fill="#38bdf8" />
    <path d="M75 185 L165 185 M85 205 L155 205 M120 168 L120 240" stroke="#0284c7" strokeWidth="3" opacity="0.4" />
    {/* Neck */}
    <path d="M104 135 L104 170 C104 176, 136 176, 136 170 L136 135 Z" fill="#d99f7d" />
    {/* Head */}
    <path d="M82 88 C82 48, 158 48, 158 88 C158 132, 146 150, 120 150 C94 150, 82 132, 82 88 Z" fill="#e8b594" />
    {/* Hair */}
    <path d="M80 75 C80 42, 160 42, 160 75 C158 55, 140 45, 120 45 C95 45, 82 58, 80 75 Z" fill="#18181b" />
    {/* Eyes & Smile */}
    <path d="M94 82 Q104 80 112 82" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M128 82 Q136 80 146 82" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="103" cy="89" r="3.8" fill="#18181b" />
    <circle cx="137" cy="89" r="3.8" fill="#18181b" />
    <path d="M106 120 Q120 130 134 120" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const NatashaAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="60" cy="60" r="60" fill="#fde68a" />
    {/* Headset arc */}
    <path d="M30 60 C30 35, 90 35, 90 60" stroke="#374151" strokeWidth="4" strokeLinecap="round" fill="none" />
    <rect x="25" y="55" width="8" height="15" rx="4" fill="#1f2937" />
    <rect x="87" y="55" width="8" height="15" rx="4" fill="#1f2937" />
    <path d="M30 68 C35 80, 48 85, 55 83" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <circle cx="56" cy="83" r="3" fill="#111827" />
    {/* Body */}
    <path d="M22 120 C22 95, 42 85, 60 85 C78 85, 98 95, 98 120 Z" fill="#d97706" />
    {/* Face */}
    <circle cx="60" cy="58" r="24" fill="#fbcfe8" />
    {/* Hair */}
    <path d="M38 52 C38 32, 82 32, 82 52 C82 40, 72 32, 60 32 C48 32, 38 40, 38 52 Z" fill="#451a03" />
    {/* Eyes & Smile */}
    <circle cx="53" cy="56" r="2.5" fill="#1e1b4b" />
    <circle cx="67" cy="56" r="2.5" fill="#1e1b4b" />
    <path d="M54 67 Q60 72 66 67" stroke="#be185d" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

export const StephenAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="60" cy="60" r="60" fill="#fed7aa" />
    {/* Body */}
    <path d="M20 120 C20 95, 40 85, 60 85 C80 85, 100 95, 100 120 Z" fill="#78350f" />
    {/* Face */}
    <circle cx="60" cy="58" r="24" fill="#ffedd5" />
    {/* Short hair */}
    <path d="M38 50 C38 34, 82 34, 82 50 C80 38, 70 34, 60 34 C50 34, 40 38, 38 50 Z" fill="#292524" />
    {/* Beard stubble */}
    <path d="M46 65 C48 76, 72 76, 74 65 C70 78, 50 78, 46 65 Z" fill="#78716c" opacity="0.4" />
    {/* Eyes & smile */}
    <circle cx="53" cy="56" r="2.5" fill="#1c1917" />
    <circle cx="67" cy="56" r="2.5" fill="#1c1917" />
    <path d="M54 67 Q60 71 66 67" stroke="#1c1917" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>
);
