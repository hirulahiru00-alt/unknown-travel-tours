import React from 'react';
import { ASSETS } from '../data/mockData';
import { Sparkles, ArrowRight, Compass, Star, Sliders, Car, Camera, ChevronDown } from 'lucide-react';

interface HeroProps {
  onPlanTripClick: () => void;
  onExploreToursClick: () => void;
  onScrollToDestinations: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onPlanTripClick,
  onExploreToursClick,
  onScrollToDestinations,
}) => {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden -mt-28 pt-28 sm:pt-32 bg-[#0a0e13]">
      {/* Atmospheric Visual Backing */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Sigiriya Sunrise Aerial Fortress"
          className="w-full h-full object-cover object-center scale-105 transform duration-1000 ease-out"
          src={ASSETS.sigiriya}
          loading="eager"
        />
        {/* Cinematic Vignettes & Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101419] via-[#101419]/65 to-[#0a0e13]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#101419]/40 to-[#101419]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e13]/70 via-transparent to-[#101419]" />
      </div>

      {/* Hero Content Ledger */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-16 text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0e13]/80 backdrop-blur-xl border border-[#f2ca50]/30 shadow-[0_4px_20px_rgba(212,175,55,0.18)] mb-6">
          <Sparkles className="w-4 h-4 text-[#f2ca50]" />
          <span className="text-[11px] font-semibold tracking-[0.22em] text-[#f2ca50] uppercase">
            Exclusive Private Expeditions • Sri Lanka
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl max-w-4xl text-[#e0e2ea] tracking-tight leading-[1.1] mb-4 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] font-normal">
          DISCOVER SRI LANKA <br className="hidden sm:inline" />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#ffe088] via-[#f2ca50] to-[#d4af37]">
            YOUR WAY
          </span>
        </h1>

        {/* Elegant Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-[#d0c5af] max-w-2xl mx-auto mb-8 font-light drop-shadow leading-relaxed">
          Private tours, authentic local experiences, and unforgettable journeys across the island with private chauffeur-guides and bespoke itineraries.
        </p>

        {/* Action CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onPlanTripClick}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-br from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] text-xs font-semibold tracking-widest uppercase shadow-[0_12px_32px_-4px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-4px_rgba(212,175,55,0.55)] transition-all cursor-pointer"
          >
            <span>Plan Your Trip</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreToursClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#262a30]/70 hover:bg-[#31353b]/90 border border-[#d4af37]/40 hover:border-[#d4af37] backdrop-blur-xl text-[#e0e2ea] text-xs font-semibold tracking-widest uppercase transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#f2ca50]" />
            <span>Explore Tours</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={onScrollToDestinations}
          className="mt-12 inline-flex flex-col items-center gap-1.5 text-[#d0c5af]/80 hover:text-[#f2ca50] transition-colors group cursor-pointer"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">
            Scroll to Explore
          </span>
          <ChevronDown className="w-5 h-5 text-[#f2ca50] animate-bounce" />
        </button>
      </div>

      {/* Floating Trust Bar */}
      <div className="absolute bottom-0 inset-x-0 w-full bg-[#0a0e13]/85 backdrop-blur-2xl border-t border-[#d4af37]/20 py-3 z-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-wrap items-center justify-center md:justify-between gap-y-2 gap-x-6 text-center text-xs sm:text-[13px] text-[#d0c5af]">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#f2ca50] fill-[#f2ca50]" />
            <span className="text-[#e0e2ea] font-semibold">4.9/5 Guest Rating</span>
            <span className="text-[#99907c] text-xs">(1,240+ Ledgers)</span>
          </div>

          <div className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#d4af37]/40" />

          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#f2ca50]" />
            <span>100% Tailor-Made Itineraries</span>
          </div>

          <div className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#d4af37]/40" />

          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-[#f2ca50]" />
            <span>Dedicated Chauffeur-Guides</span>
          </div>

          <div className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#d4af37]/40" />

          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#f2ca50]" />
            <span className="text-[#ffe088]">Unknown Studio Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};
