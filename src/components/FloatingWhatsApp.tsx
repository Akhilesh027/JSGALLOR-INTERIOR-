import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappNumber = "918143678491";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi JS GALLOR team, I am on your website and would like an interior consultation.")}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#090a0f]/95 text-white text-xs font-semibold shadow-2xl border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-md">
        Chat with Senior Designer
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-[#25D366]/20"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white" />
        {/* Subtle ping pulse */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200"></span>
        </span>
      </a>
    </aside>
  );
};
