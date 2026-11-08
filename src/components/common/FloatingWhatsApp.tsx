import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const phoneNumber = '923099489168'; // Aqeel Ahmad: 03099489168
  const defaultMessage = 'Hello Aqeel, I am interested in discussing a project with BLUDS Agency.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Interactive Tooltip Card (collapsible) */}
      {isOpen && (
        <div className="hidden sm:flex items-center gap-2 p-2.5 rounded-xl bg-[#0c0c0c]/95 border border-[#262626] text-white shadow-2xl backdrop-blur-md animate-fade-in max-w-xs">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0 ml-1" />
          <div className="text-[11px] leading-tight flex-1">
            <span className="font-semibold text-white block">Aqeel Ahmad is Online</span>
            <span className="text-neutral-400">Chat directly on WhatsApp: 03099489168</span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-1 text-neutral-400 hover:text-white rounded-md transition-colors"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Pill */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs transition-all shadow-xl shadow-emerald-950/50 hover:scale-105 active:scale-95"
        aria-label="Chat with Aqeel Ahmad on WhatsApp (03099489168)"
      >
        <MessageSquare className="w-4 h-4 fill-black shrink-0" />
        <span className="font-bold tracking-tight">Chat on WhatsApp</span>
        <span className="hidden md:inline font-mono text-[11px] bg-black/15 px-1.5 py-0.5 rounded text-black/90">
          03099489168
        </span>
      </a>
    </div>
  );
};

