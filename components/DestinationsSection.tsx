import React from 'react';
import { Destination } from '../types/travel';
import { DESTINATIONS } from '../data/mockData';
import { ChevronRight } from 'lucide-react';

interface DestinationsSectionProps {
  onSelectDestination: (dest: Destination) => void;
  onViewAllDestinations: () => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
  onViewAllDestinations,
}) => {
  return (
    <section className="w-full py-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12" id="destinations">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center gap-2">
            <span className="w-6 h-px bg-[#f2ca50]" /> Iconic Landscapes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#e0e2ea] leading-tight">
            Curated Destinations Across The <br className="hidden sm:inline" />
            <span className="italic text-[#f2ca50]">Pearl Of The Indian Ocean</span>
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2">
          <p className="text-sm sm:text-[15px] text-[#d0c5af] max-w-md">
            From ancient sky-citadels to misty high-country tea estates and sun-drenched colonial shorelines.
          </p>
          <button
            onClick={onViewAllDestinations}
            className="text-xs uppercase tracking-wider text-[#f2ca50] hover:underline flex items-center gap-1 cursor-pointer font-medium"
          >
            <span>View All Regional Dossiers</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 6 Luxury Destination Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESTINATIONS.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination(dest)}
            className="group relative rounded-2xl overflow-hidden bg-[#181c21] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-500 flex flex-col justify-end min-h-[460px] shadow-[0_16px_36px_-8px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={dest.imageUrl}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101419] via-[#101419]/60 to-transparent" />
            </div>

            {/* Content Ledger */}
            <div className="relative z-10 p-6 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0a0e13]/85 border border-[#f2ca50]/30 text-[#f2ca50] text-[11px] font-semibold uppercase tracking-wider">
                  {dest.region}
                </span>
                <span className="text-xs font-semibold text-[#d0c5af]/80">
                  {dest.elevation}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#e0e2ea] tracking-wide font-normal group-hover:text-[#f2ca50] transition-colors">
                {dest.name}
              </h3>

              <p className="text-xs sm:text-[13px] text-[#d0c5af] line-clamp-2 leading-relaxed">
                {dest.description}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-[#d4af37]/20 mt-1">
                <span className="text-[11px] font-semibold text-[#f2ca50] uppercase tracking-wider">
                  Private Guided Ascent
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#e0e2ea] group-hover:text-[#f2ca50] transition-colors uppercase">
                  Explore <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
