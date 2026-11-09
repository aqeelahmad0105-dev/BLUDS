import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = '923099489168'; // Aqeel Ahmad: 03099489168
  const defaultMessage = 'Hello Aqeel, I am interested in discussing a project with BLUDS Agency.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Aqeel Ahmad on WhatsApp (03099489168)"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black shadow-lg shadow-black/70 hover:scale-110 active:scale-95 transition-all duration-200"
      >
        {/* Subtle pulsing online beacon */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-black" />
        </span>

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-black shrink-0 transition-transform duration-200 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.39C16.32 14.27 15.1 13.67 14.87 13.58C14.64 13.5 14.48 13.46 14.31 13.7C14.15 13.95 13.68 14.51 13.53 14.67C13.39 14.84 13.25 14.86 13 14.74C12.75 14.61 11.95 14.35 11 13.51C10.26 12.85 9.77 12.04 9.62 11.79C9.48 11.55 9.61 11.41 9.73 11.29C9.84 11.18 9.98 11 10.1 10.86C10.23 10.72 10.27 10.62 10.35 10.45C10.43 10.29 10.39 10.15 10.33 10.02C10.27 9.9 9.8 8.74 9.6 8.27C9.41 7.81 9.22 7.87 9.07 7.86L8.62 7.85C8.45 7.85 8.19 7.91 7.96 8.16C7.73 8.41 7.09 9.01 7.09 10.24C7.09 11.47 7.99 12.65 8.11 12.82C8.24 12.98 9.88 15.51 12.38 16.59C12.97 16.85 13.44 17 13.8 17.11C14.4 17.3 14.94 17.27 15.37 17.21C15.85 17.14 16.85 16.6 17.06 16.02C17.26 15.45 17.26 14.96 17.2 14.86C17.15 14.75 16.82 14.52 16.57 14.39Z"/>
        </svg>

        {/* Non-intrusive hover tooltip */}
        <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 px-3 py-1.5 rounded-lg bg-[#0c0c0c] border border-[#262626] text-white text-[11px] font-medium whitespace-nowrap shadow-xl flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>WhatsApp: 03099489168 • Replies in ~15m</span>
        </span>
      </a>
    </div>
  );
};
