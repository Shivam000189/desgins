import React from 'react';

interface BrandEmblemProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export const BrandEmblem: React.FC<BrandEmblemProps> = ({
  className = '',
  size = 22,
  animate = false,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${animate ? 'transition-transform duration-700 hover:rotate-90' : ''} ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="expance-emblem-grad" cx="50%" cy="50%" r="50%" fx="40%" fy="35%">
          <stop offset="0%" stopColor="#FF7A00" />
          <stop offset="60%" stopColor="#FF4400" />
          <stop offset="100%" stopColor="#E62E00" />
        </radialGradient>
      </defs>
      {/* 10 organic spiral vortex blades radiating from center */}
      <g fill="url(#expance-emblem-grad)">
        {Array.from({ length: 10 }).map((_, index) => {
          const angle = index * 36;
          return (
            <path
              key={index}
              transform={`rotate(${angle} 50 50)`}
              d="M 50 50 
                 C 53 43, 62 38, 70 34 
                 C 80 29, 87 28, 92 34 
                 C 96 40, 92 48, 83 50 
                 C 73 52, 63 50, 50 50 Z"
            />
          );
        })}
        {/* Core circle anchor */}
        <circle cx="50" cy="50" r="14" fill="#FF4D00" />
      </g>
    </svg>
  );
};
