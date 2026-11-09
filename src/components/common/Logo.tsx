import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Modern Geometric BLUDS Emblem */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Background Badge with subtle border */}
          <rect
            width="40"
            height="40"
            rx="10"
            fill="#0c0e14"
            stroke="#1f293d"
            strokeWidth="1.5"
          />

          {/* Precision Geometric 'B' Monogram */}
          {/* Vertical Spine */}
          <path
            d="M12 9H17C20.5 9 23 11 23 14C23 16.2 21.5 18 19 18.5V18.7C22.2 19.3 24 21.5 24 24.5C24 28 21 31 17 31H12V9Z"
            fill="#1e293b"
          />

          {/* Top Loop Accent */}
          <path
            d="M14 11.5H17C19.5 11.5 21 12.8 21 14.5C21 16.2 19.5 17.5 17 17.5H14V11.5Z"
            fill="#3b82f6"
          />

          {/* Bottom Loop Core (Cobalt Blue) */}
          <path
            d="M14 19.5H17.5C20.2 19.5 22 21.2 22 23.8C22 26.5 20.2 28.5 17.5 28.5H14V19.5Z"
            fill="#2563eb"
          />

          {/* Forward-leaning Precision Slash (Energy & Growth) */}
          <path
            d="M26 12L28 9H31L29 12H26Z"
            fill="#60a5fa"
          />
          <path
            d="M23 20L25 17H28L26 20H23Z"
            fill="#3b82f6"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-bold tracking-tight text-white ${textSizes[size]}`}>
              BLUDS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mt-0.5">
            AGENCY
          </span>
        </div>
      )}
    </div>
  );
};

