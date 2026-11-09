import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = false,
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

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* The Stylish B Logo from the file */}
      <div className={`relative ${sizeClasses[size]} shrink-0 flex items-center justify-center`}>
        <img
          src="/bluds-logo.png"
          alt="BLUDS Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(37,99,235,0.35)] hover:drop-shadow-[0_4px_14px_rgba(37,99,235,0.6)] transition-all duration-200"
        />
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
