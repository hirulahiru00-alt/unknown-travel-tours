import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <aside className="fixed bottom-6 right-6 z-40 flex items-center">
      <a
        href="https://wa.me/94778084913?text=Ayubowan%20Unknown%20Traveler!%20I%20would%20like%20to%20plan%20a%20luxury%20private%20tour."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#262a30]/90 hover:bg-[#31353b]/95 border border-[#d4af37]/40 hover:border-[#d4af37] backdrop-blur-xl px-4 py-2 rounded-full shadow-[0_12px_32px_-8px_rgba(212,175,55,0.25)] transition-all hover:-translate-y-0.5"
      >
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f2ca50] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f2ca50]" />
        </span>

        <div className="flex flex-col text-left">
          <span className="text-[10px] font-semibold text-[#f2ca50] uppercase tracking-wider leading-none">
            Chat with Us
          </span>
          <span className="text-xs font-semibold text-[#e0e2ea] tracking-tight">
            +94 77 808 4913
          </span>
        </div>

        <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#3c2f00] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
          <MessageSquare className="w-4 h-4" />
        </div>
      </a>
    </aside>
  );
};
