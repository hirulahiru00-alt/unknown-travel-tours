import React, { useState } from 'react';
import { TourPackage, Currency } from '../types/travel';
import { TOURS, USD_TO_LKR_RATE } from '../data/mockData';
import { Compass, CheckCircle2, Car, Calendar, ArrowRight, Filter } from 'lucide-react';

interface ToursPageProps {
  currency: Currency;
  onSelectTour: (tour: TourPackage) => void;
  onBookTour: (tour: TourPackage) => void;
  onPlanCustomTrip: () => void;
}

export const ToursPage: React.FC<ToursPageProps> = ({
  currency,
  onSelectTour,
  onBookTour,
  onPlanCustomTrip,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const formatPrice = (usd: number) => {
    if (currency === 'LKR') {
      return `LKR Rs. ${(usd * USD_TO_LKR_RATE).toLocaleString()}`;
    }
    return `USD $${usd.toLocaleString()}`;
  };

  const filteredTours = TOURS.filter((tour) => {
    const matchesCategory =
      filterCategory === 'all' || tour.category === filterCategory;
    const matchesQuery =
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.route.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full py-12 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 animate-in fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-[#f2ca50]" /> Bespoke Catalog{' '}
          <span className="w-6 h-px bg-[#f2ca50]" />
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#e0e2ea] mt-2 font-normal">
          Handcrafted Private Expeditions
        </h1>
        <p className="text-sm sm:text-base text-[#d0c5af] mt-2 leading-relaxed">
          Every tour is 100% private and accompanied by a dedicated English-speaking chauffeur-guide. Choose a signature route or let us customize every detail.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#181c21] border border-[#d4af37]/20 mb-10">
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {[
            { id: 'all', label: 'All Tours' },
            { id: 'day-tour', label: 'Day Intensive' },
            { id: 'highland', label: 'Highlands & Tea' },
            { id: 'wildlife', label: 'Wildlife & Safari' },
            { id: 'grand-expedition', label: 'Flagship 7-Day' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                filterCategory === cat.id
                  ? 'bg-[#d4af37] text-[#3c2f00]'
                  : 'bg-[#1c2025] text-[#d0c5af] hover:text-[#e0e2ea]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-64">
          <input
            type="text"
            placeholder="Search by city or landmark..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2 text-xs text-[#e0e2ea] placeholder-[#99907c] focus:outline-none focus:border-[#f2ca50]"
          />
        </div>
      </div>

      {/* Tours Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredTours.map((tour) => (
          <div
            key={tour.id}
            className="group bg-[#181c21]/80 backdrop-blur-xl border border-[#d4af37]/25 hover:border-[#f2ca50]/50 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <div
                className="relative w-full h-64 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => onSelectTour(tour)}
              >
                <img
                  alt={tour.title}
                  src={tour.imageUrl}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#0a0e13]/85 backdrop-blur-md border border-[#f2ca50]/30 text-[#f2ca50] text-[10px] font-semibold tracking-wider uppercase">
                    {tour.badge}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#0a0e13]/85 backdrop-blur-md border border-[#f2ca50]/20 text-[#e0e2ea] text-[10px] font-semibold tracking-wider uppercase">
                    PRIVATE CHAUFFEUR
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center flex-wrap gap-1.5 text-xs font-semibold text-[#f2ca50] mb-1">
                  {tour.route.map((node, i) => (
                    <React.Fragment key={i}>
                      <span>{node}</span>
                      {i < tour.route.length - 1 && <span className="text-[#99907c]">→</span>}
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

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#31353b]">
                <div className="flex items-center gap-2 text-xs text-[#d0c5af]">
                  <Car className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                  <span className="truncate">{tour.vehicle}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#d0c5af]">
                  <Calendar className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                  <span>{tour.durationLabel}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#d4af37]/20 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-[#99907c] uppercase font-semibold block">
                  Starting Rate
                </span>
                <span className="font-serif text-2xl text-[#f2ca50] font-semibold">
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
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-[#e7c35a] to-[#d4af37] text-[#3c2f00] text-xs font-semibold uppercase tracking-wider shadow-md hover:scale-102 transition-transform cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Tailor-Made Banner */}
      <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#181c21] via-[#1c2025] to-[#181c21] border border-[#d4af37]/30 text-center flex flex-col items-center gap-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#e0e2ea]">
          Have a Custom Ceylon Route in Mind?
        </h3>
        <p className="text-xs sm:text-sm text-[#d0c5af] max-w-xl leading-relaxed">
          From tea estates to secret surfing bays and wildlife sanctuaries, we craft 100% tailor-made itineraries around your preferred dates and rhythm.
        </p>
        <button
          onClick={onPlanCustomTrip}
          className="mt-2 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#f2ca50] text-[#3c2f00] text-xs font-semibold uppercase tracking-widest shadow-lg hover:bg-[#ffe088] transition-colors cursor-pointer"
        >
          <span>Open Custom Trip Builder</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
