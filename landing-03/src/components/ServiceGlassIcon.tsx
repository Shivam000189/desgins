import React from 'react';

interface ServiceGlassIconProps {
  type: 'ribbon' | 'hemisphere' | 'starburst' | 'clover';
  className?: string;
  size?: number;
}

export const ServiceGlassIcon: React.FC<ServiceGlassIconProps> = ({
  type,
  className = '',
  size = 140,
}) => {
  if (type === 'ribbon') {
    // 01 Branding: Curved translucent glass ribbon arch
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-500 group-hover:scale-105 ${className}`}
      >
        <defs>
          <linearGradient id="ribbon-g1" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFA439" />
            <stop offset="45%" stopColor="#FF4A00" />
            <stop offset="100%" stopColor="#A81500" />
          </linearGradient>
          <linearGradient id="ribbon-g2" x1="140" y1="20" x2="20" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="60%" stopColor="#E62E00" />
            <stop offset="100%" stopColor="#570900" />
          </linearGradient>
          <filter id="ribbon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#FF3C00" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Ambient back glow */}
        <circle cx="80" cy="80" r="55" fill="#FF3300" opacity="0.18" filter="blur(16px)" />

        {/* Back loop */}
        <path
          d="M 35 110 C 25 70, 50 30, 95 30 C 135 30, 145 65, 135 105"
          stroke="url(#ribbon-g2)"
          strokeWidth="18"
          strokeLinecap="round"
          filter="url(#ribbon-glow)"
          opacity="0.85"
        />

        {/* Front crossing loop */}
        <path
          d="M 50 40 C 75 40, 125 70, 115 125 C 105 145, 65 140, 45 115"
          stroke="url(#ribbon-g1)"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Glass specular light edge */}
        <path
          d="M 40 100 C 35 70, 55 42, 90 40"
          stroke="#FFE5C4"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M 70 52 C 95 72, 118 90, 108 120"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    );
  }

  if (type === 'hemisphere') {
    // 02 Web Design: Concentric sliced glass hemisphere / lens shells
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-500 group-hover:scale-105 ${className}`}
      >
        <defs>
          <radialGradient id="hemi-g1" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFA742" />
            <stop offset="50%" stopColor="#FF4A00" />
            <stop offset="100%" stopColor="#7A0E00" />
          </radialGradient>
          <radialGradient id="hemi-g2" cx="30%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFD18C" />
            <stop offset="40%" stopColor="#FF5500" />
            <stop offset="100%" stopColor="#8C1000" />
          </radialGradient>
          <filter id="hemi-glow">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#FF3C00" floodOpacity="0.4" />
          </filter>
        </defs>

        <circle cx="80" cy="80" r="50" fill="#FF3300" opacity="0.2" filter="blur(16px)" />

        {/* Outer slice */}
        <path
          d="M 30 115 A 60 60 0 0 1 135 75 A 60 60 0 0 0 30 115 Z"
          fill="url(#hemi-g1)"
          opacity="0.8"
          filter="url(#hemi-glow)"
        />

        {/* Middle slice */}
        <path
          d="M 45 125 A 48 48 0 0 1 125 50 A 48 48 0 0 0 45 125 Z"
          fill="url(#hemi-g2)"
          opacity="0.9"
        />

        {/* Small front disc slice */}
        <ellipse cx="65" cy="95" rx="28" ry="18" fill="#FF3A00" opacity="0.75" />
        <ellipse cx="65" cy="95" rx="24" ry="14" fill="url(#hemi-g1)" />

        {/* Specular edge curves */}
        <path
          d="M 50 115 A 45 45 0 0 1 118 55"
          stroke="#FFF0D6"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M 35 110 A 58 58 0 0 1 128 72"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    );
  }

  if (type === 'starburst') {
    // 03 Web development: Spiky 3D geometric radial bloom / crystalline star
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12 ${className}`}
      >
        <defs>
          <linearGradient id="star-g" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFAE42" />
            <stop offset="45%" stopColor="#FF4D00" />
            <stop offset="100%" stopColor="#8A0C00" />
          </linearGradient>
          <filter id="star-glow">
            <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#FF3C00" floodOpacity="0.45" />
          </filter>
        </defs>

        <circle cx="80" cy="80" r="50" fill="#FF3300" opacity="0.22" filter="blur(18px)" />

        {/* Multiple ray spokes with tapered points */}
        <g transform="translate(80, 80)" filter="url(#star-glow)">
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            const isLong = i % 2 === 0;
            const length = isLong ? 58 : 42;
            const width = isLong ? 5.5 : 4;
            return (
              <g key={i} transform={`rotate(${angle})`}>
                <polygon
                  points={`0,-${length} -${width},0 0,6 ${width},0`}
                  fill="url(#star-g)"
                  opacity={isLong ? 0.95 : 0.75}
                />
                <line
                  x1="0"
                  y1={`-${length - 3}`}
                  x2="0"
                  y2="0"
                  stroke="#FFEAC2"
                  strokeWidth={isLong ? 1.5 : 1}
                  strokeLinecap="round"
                  opacity={0.7}
                />
              </g>
            );
          })}
          {/* Core center bead */}
          <circle cx="0" cy="0" r="10" fill="#FF2600" />
          <circle cx="0" cy="0" r="7" fill="#FFA53B" />
          <circle cx="-2" cy="-2" r="2.5" fill="#FFFFFF" opacity="0.9" />
        </g>
      </svg>
    );
  }

  // 04 E-commerce: 4-petal glass clover loops / torus
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-500 group-hover:scale-105 ${className}`}
    >
      <defs>
        <radialGradient id="clover-g" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="50%" stopColor="#FF4900" />
          <stop offset="100%" stopColor="#7E0D00" />
        </radialGradient>
        <filter id="clover-glow">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#FF3C00" floodOpacity="0.4" />
        </filter>
      </defs>

      <circle cx="80" cy="80" r="50" fill="#FF3300" opacity="0.2" filter="blur(16px)" />

      {/* 4 interlocking glass petal loops */}
      <g filter="url(#clover-glow)">
        {/* Top petal */}
        <circle cx="80" cy="58" r="24" stroke="url(#clover-g)" strokeWidth="12" fill="none" opacity="0.9" />
        {/* Bottom petal */}
        <circle cx="80" cy="102" r="24" stroke="url(#clover-g)" strokeWidth="12" fill="none" opacity="0.85" />
        {/* Left petal */}
        <circle cx="58" cy="80" r="24" stroke="url(#clover-g)" strokeWidth="12" fill="none" opacity="0.88" />
        {/* Right petal */}
        <circle cx="102" cy="80" r="24" stroke="url(#clover-g)" strokeWidth="12" fill="none" opacity="0.92" />
      </g>

      {/* Glass highlights */}
      <path
        d="M 72 44 A 20 20 0 0 1 96 52"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M 94 72 A 20 20 0 0 1 114 88"
        stroke="#FFF4E0"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="80" cy="80" r="4" fill="#FF4700" />
    </svg>
  );
};
