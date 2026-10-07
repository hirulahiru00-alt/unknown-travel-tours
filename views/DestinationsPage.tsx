import React, { useState } from 'react';
import { Destination } from '../types/travel';
import { DESTINATIONS } from '../data/mockData';
import { MapPin, Sparkles, ChevronRight, Compass } from 'lucide-react';

interface DestinationsPageProps {
  onSelectDestination: (dest: Destination) => void;
  onPlanTripToDest: (destName: string) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  onSelectDestination,
  onPlanTripToDest,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'Cultural Triangle', 'Highlands', 'Tea Country', 'Safari Wilds', 'Coastal Haven'];

  const filtered =
    selectedRegion === 'All'
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.region === selectedRegion);

  return (
    <div className="w-full py-12 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 animate-in fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-[#f2ca50]" /> Geographic Dossiers{' '}
          <span className="w-6 h-px bg-[#f2ca50]" />
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#e0e2ea] mt-2 font-normal">
          Explore Sri Lanka's Iconic Landscapes
        </h1>
        <p className="text-sm sm:text-base text-[#d0c5af] mt-2 leading-relaxed">
          From ancient sky-citadels to misty high-country tea estates and sun-drenched colonial shorelines. Discover what makes each enclave unique.
        </p>
      </div>

      {/* Region Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
              selectedRegion === region
                ? 'bg-[#d4af37] text-[#3c2f00]'
                : 'bg-[#181c21] text-[#d0c5af] hover:text-[#e0e2ea] border border-[#d4af37]/20'
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination(dest)}
            className="group relative rounded-2xl overflow-hidden bg-[#181c21] border border-[#d4af37]/20 hover:border-[#f2ca50] transition-all duration-500 flex flex-col justify-end min-h-[480px] shadow-xl cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                alt={dest.name}
                src={dest.imageUrl}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101419] via-[#101419]/65 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0a0e13]/85 border border-[#f2ca50]/30 text-[#f2ca50] text-[11px] font-semibold uppercase tracking-wider">
                  {dest.region}
                </span>
                <span className="text-xs font-semibold text-[#d0c5af]">
                  {dest.elevation}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#e0e2ea] font-medium group-hover:text-[#f2ca50] transition-colors">
                {dest.name}
              </h3>

              <p className="text-xs text-[#f2ca50] font-medium italic">
                {dest.tagline}
              </p>

              <p className="text-xs text-[#d0c5af] line-clamp-2 leading-relaxed">
                {dest.description}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-[#d4af37]/20 mt-1">
                <span className="text-[11px] font-semibold text-[#f2ca50] uppercase tracking-wider">
                  Private Guided Ascent
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#e0e2ea] group-hover:text-[#f2ca50] transition-colors uppercase">
                  Explore Dossier <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
