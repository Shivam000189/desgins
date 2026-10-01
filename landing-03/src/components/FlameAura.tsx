import React from 'react';

interface FlameAuraProps {
  variant?: 'hero' | 'center' | 'horizon';
  className?: string;
}

export const FlameAura: React.FC<FlameAuraProps> = ({
  variant = 'hero',
  className = '',
}) => {
  if (variant === 'hero') {
    return (
      <div
        className={`absolute inset-y-0 right-0 w-full md:w-3/5 pointer-events-none overflow-hidden select-none z-0 ${className}`}
        aria-hidden="true"
      >
        {/* Soft back aura */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full opacity-60 blur-[120px]"
          style={{
            background: 'radial-gradient(circle at 60% 50%, rgba(255, 60, 0, 0.45) 0%, rgba(180, 20, 0, 0.25) 45%, rgba(0, 0, 0, 0) 80%)',
          }}
        />

        {/* Vertical flame soundwave light curtains mimicking the exact video streaks */}
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[90%] w-[100%] max-w-[650px] opacity-85"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="flame-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="18" result="blur" />
            </filter>
            <filter id="soft-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="35" result="blur" />
            </filter>
            <linearGradient id="streak-grad-1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A0200" stopOpacity="0" />
              <stop offset="25%" stopColor="#C91800" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#FF4A00" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#FFA600" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#300000" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="streak-grad-2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="30%" stopColor="#A81200" stopOpacity="0.8" />
              <stop offset="55%" stopColor="#FF3300" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#FF8500" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="intense-core" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF2A00" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#FF7700" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FF2A00" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Broad atmospheric red haze */}
          <ellipse cx="380" cy="300" rx="160" ry="240" fill="url(#streak-grad-1)" filter="url(#soft-blur)" opacity="0.6" />

          {/* Vertical light streaks of fluctuating heights */}
          <g filter="url(#flame-blur)" className="mix-blend-screen">
            <rect x="230" y="200" width="18" height="200" rx="9" fill="url(#streak-grad-2)" opacity="0.5" />
            <rect x="255" y="160" width="22" height="270" rx="11" fill="url(#streak-grad-1)" opacity="0.65" />
            <rect x="285" y="130" width="28" height="340" rx="14" fill="url(#streak-grad-1)" opacity="0.8" />
            <rect x="320" y="90" width="36" height="420" rx="18" fill="url(#streak-grad-1)" opacity="0.95" />
            
            {/* Luminous dense core column */}
            <rect x="365" y="70" width="55" height="460" rx="26" fill="url(#streak-grad-1)" opacity="1" />
            <rect x="375" y="140" width="34" height="320" rx="17" fill="url(#intense-core)" opacity="0.9" />

            <rect x="430" y="100" width="38" height="400" rx="19" fill="url(#streak-grad-1)" opacity="0.9" />
            <rect x="475" y="150" width="30" height="310" rx="15" fill="url(#streak-grad-2)" opacity="0.75" />
            <rect x="515" y="210" width="20" height="200" rx="10" fill="url(#streak-grad-2)" opacity="0.5" />
          </g>

          {/* Warm filament glow line */}
          <path
            d="M 220 300 Q 360 270 520 310"
            stroke="rgba(255, 140, 0, 0.4)"
            strokeWidth="30"
            filter="url(#flame-blur)"
          />
        </svg>

        {/* Vignette overlay to fade seamlessly into pure black on edges */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
      </div>
    );
  }

  if (variant === 'center') {
    return (
      <div
        className={`absolute inset-x-0 bottom-0 top-10 pointer-events-none overflow-hidden select-none z-0 flex items-center justify-center ${className}`}
        aria-hidden="true"
      >
        {/* Soft triangular red spire glow from the about section */}
        <div
          className="w-[500px] h-[500px] rounded-full opacity-40 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(230, 40, 0, 0.5) 0%, rgba(120, 10, 0, 0.25) 50%, rgba(0, 0, 0, 0) 80%)',
          }}
        />
        <div
          className="w-[200px] h-[400px] opacity-25 blur-[60px]"
          style={{
            background: 'linear-gradient(to top, rgba(255, 77, 0, 0.6), rgba(200, 0, 0, 0))',
          }}
        />
      </div>
    );
  }

  // Horizon / Pre-footer variant
  return (
    <div
      className={`absolute inset-x-0 top-0 h-[380px] pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-x-0 top-0 h-full opacity-55 blur-[100px]"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(255, 55, 0, 0.55) 0%, rgba(180, 20, 0, 0.25) 50%, rgba(0,0,0,0) 80%)',
        }}
      />
      {/* Light crest wave */}
      <div
        className="absolute inset-x-0 top-16 h-28 opacity-40 blur-[40px]"
        style={{
          background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255, 80, 0, 0.7) 50%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
    </div>
  );
};
