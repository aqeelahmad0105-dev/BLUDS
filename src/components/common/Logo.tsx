import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  variant?: 'default' | 'dark' | 'light' | 'mono';
  format?: 'svg' | 'png' | 'webp' | 'avif';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = false,
  variant = 'dark',
  format = 'svg',
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-2xl',
  };

  const getLogoSrc = () => {
    if (format === 'avif') return '/bluds-logo.avif';
    if (format === 'webp') return '/bluds-logo.webp';
    if (format === 'png') return '/bluds-logo.png';
    switch (variant) {
      case 'light':
        return '/bluds-logo-light.svg';
      case 'mono':
        return '/bluds-logo-mono.svg';
      case 'default':
        return '/bluds-logo.svg';
      case 'dark':
      default:
        return '/bluds-logo-dark.svg';
    }
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Scalable Vector & WebP/AVIF Stylish B Logo */}
      <div className={`relative ${sizeClasses[size]} shrink-0 flex items-center justify-center`}>
        <picture>
          <source type="image/avif" srcSet="/bluds-logo.avif" />
          <source type="image/webp" srcSet="/bluds-logo.webp" />
          <img
            src={getLogoSrc()}
            alt="BLUDS Logo"
            width={size === 'xl' ? 64 : size === 'lg' ? 48 : size === 'md' ? 40 : 32}
            height={size === 'xl' ? 64 : size === 'lg' ? 48 : size === 'md' ? 40 : 32}
            className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(37,99,235,0.35)] hover:drop-shadow-[0_4px_14px_rgba(37,99,235,0.6)] transition-all duration-200"
          />
        </picture>
      </div>

      {/* Optional Wordmark */}
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
