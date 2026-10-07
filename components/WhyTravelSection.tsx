import React from 'react';
import { Compass, KeyRound, Film, Headset } from 'lucide-react';

export const WhyTravelSection: React.FC = () => {
  const pillars = [
    {
      icon: <Compass className="w-6 h-6 text-[#f2ca50]" />,
      title: 'Local Experience',
      desc: 'Discover authentic Sri Lanka far beyond ordinary tourist corridors. Enjoy private access to monastic ruins and secret Ceylon estates.',
    },
    {
      icon: <KeyRound className="w-6 h-6 text-[#f2ca50]" />,
      title: 'Private & Flexible',
      desc: 'Your private vehicle and licensed English chauffeur-guide stay dedicated strictly to you. Stop whenever you wish with zero rush.',
    },
    {
      icon: <Film className="w-6 h-6 text-[#f2ca50]" />,
      title: 'Cinematic Memories',
      desc: 'Partnered directly with UNKNOWN STUDIO to document your voyage through high-end drone footage, editorial photography, and film.',
    },
    {
      icon: <Headset className="w-6 h-6 text-[#f2ca50]" />,
      title: 'Personal Service',
      desc: 'White-glove concierge coverage from your Bandaranaike VIP lounge arrival until your departure flight home.',
    },
  ];

  return (
    <section className="w-full py-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-[#f2ca50]" /> The Unknown Traveler Standard{' '}
          <span className="w-6 h-px bg-[#f2ca50]" />
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#e0e2ea] mt-2 font-normal">
          Crafted For Discerning Travelers
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#181c21] border border-[#d4af37]/20 hover:border-[#d4af37] transition-all flex flex-col gap-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1c2025] flex items-center justify-center text-[#f2ca50] group-hover:bg-[#d4af37] group-hover:text-[#3c2f00] transition-colors">
              {item.icon}
            </div>
            <h3 className="font-serif text-xl text-[#e0e2ea] font-medium">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
