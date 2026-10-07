import React from 'react';
import { TourPackage, Currency } from '../types/travel';
import { TOURS, USD_TO_LKR_RATE } from '../data/mockData';
import { CheckCircle2, Car, Hotel, Train, Camera, ConciergeBell, Sparkles, ArrowRight } from 'lucide-react';

interface PopularToursSectionProps {
  currency: Currency;
  onSelectTour: (tour: TourPackage) => void;
  onBookTour: (tour: TourPackage) => void;
  onViewAllTours?: () => void;
}

export const PopularToursSection: React.FC<PopularToursSectionProps> = ({
  currency,
  onSelectTour,
  onBookTour,
  onViewAllTours,
}) => {
  const formatPrice = (usdPrice: number) => {
    if (currency === 'LKR') {
      const lkrPrice = Math.round(usdPrice * USD_TO_LKR_RATE);
      return `LKR Rs. ${lkrPrice.toLocaleString()}`;
    }
    return `USD $${usdPrice.toLocaleString()}`;
  };

  return (
    <section className="w-full py-20 bg-[#0a0e13] border-y border-[#d4af37]/15" id="popular-tours">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header with Currency Notice */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center gap-2">
              <span className="w-6 h-px bg-[#f2ca50]" /> Signature Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#e0e2ea] mt-1">
              Handcrafted Private Journeys
            </h2>
          </div>
          <div className="flex items-center gap-2.5 bg-[#181c21] px-4 py-2 rounded-full border border-[#d4af37]/20">
            <Sparkles className="w-4 h-4 text-[#f2ca50]" />
            <span className="text-xs text-[#d0c5af]">
              All prices customizable based on group size &amp; bespoke hotel tier
            </span>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TOURS.map((tour) => (
            <div
              key={tour.id}
              className="group bg-[#181c21]/70 backdrop-blur-xl border border-[#d4af37]/25 hover:border-[#f2ca50]/50 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
            >
              <div className="flex flex-col gap-4">
                {/* Visual Header */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden cursor-pointer" onClick={() => onSelectTour(tour)}>
                  <img
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={tour.imageUrl}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-[#0a0e13]/85 backdrop-blur-md border border-[#f2ca50]/30 text-[#f2ca50] text-[11px] font-semibold tracking-wider uppercase">
                      {tour.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#0a0e13]/85 backdrop-blur-md border border-[#f2ca50]/20 text-[#e0e2ea] text-[11px] font-semibold tracking-wider uppercase">
                      PRIVATE CHAUFFEUR
                    </span>
                  </div>
                </div>

                {/* Tour Info */}
                <div>
                  <div className="flex items-center flex-wrap gap-1.5 text-xs font-semibold text-[#f2ca50] mb-1">
                    {tour.route.map((stop, idx) => (
                      <React.Fragment key={idx}>
                        <span>{stop}</span>
                        {idx < tour.route.length - 1 && (
                          <span className="text-[#99907c]">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <h3
                    onClick={() => onSelectTour(tour)}
                    className="font-serif text-2xl text-[#e0e2ea] cursor-pointer hover:text-[#f2ca50] transition-colors font-medium"
                  >
                    {tour.title}
                  </h3>

                  <p className="text-sm text-[#d0c5af] mt-2 leading-relaxed">
                    {tour.description}
                  </p>
                </div>

                {/* Badges / Inclusions Preview */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-[#d0c5af] text-xs">
                    <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span className="truncate">VIP entrance passes included</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#d0c5af] text-xs">
                    <Car className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span className="truncate">{tour.vehicle.split('/')[0]}</span>
                  </div>
                </div>
              </div>

              {/* Price & Action Row */}
              <div className="pt-4 mt-6 border-t border-[#d4af37]/20 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-[#99907c] uppercase font-semibold block tracking-wider">
                    Starting From
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-[#f2ca50] font-semibold">
                    {formatPrice(tour.startingPriceUSD)}{' '}
                    <span className="text-xs font-sans text-[#d0c5af] font-normal">/ guest</span>
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectTour(tour)}
                    className="px-4 py-2 rounded-full bg-[#262a30] border border-[#d4af37]/30 hover:border-[#f2ca50] text-[#e0e2ea] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onBookTour(tour)}
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-[#e7c35a] to-[#d4af37] text-[#3c2f00] text-xs font-semibold uppercase tracking-wider shadow-[0_4px_16px_rgba(212,175,55,0.3)] hover:scale-102 transition-transform cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {onViewAllTours && (
          <div className="mt-12 text-center">
            <button
              onClick={onViewAllTours}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#181c21] border border-[#d4af37]/40 text-[#f2ca50] text-xs uppercase tracking-widest font-semibold hover:bg-[#262a30] transition-colors cursor-pointer"
            >
              <span>Explore All Tour Itineraries &amp; Filter By Region</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
