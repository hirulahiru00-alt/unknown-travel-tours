import React, { useState } from 'react';
import { TourPackage, Currency } from '../types/travel';
import { USD_TO_LKR_RATE } from '../data/mockData';
import { X, Check, MapPin, Calendar, Users, Car, Sparkles, Clock, Utensils, Hotel, ArrowRight } from 'lucide-react';

interface TourDetailModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  currency: Currency;
  onBookNow: (tour: TourPackage) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  onClose,
  currency,
  onBookNow,
}) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'vehicle'>('itinerary');
  const [expandedDay, setExpandedDay] = useState<number>(1);

  if (!tour) return null;

  const formatPrice = (usd: number) => {
    if (currency === 'LKR') {
      return `LKR Rs. ${(usd * USD_TO_LKR_RATE).toLocaleString()}`;
    }
    return `USD $${usd.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#181c21] border border-[#d4af37]/35 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto">
        
        {/* Header Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            alt={tour.title}
            src={tour.imageUrl}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181c21] via-[#181c21]/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#0a0e13]/80 border border-[#d4af37]/30 text-[#e0e2ea] hover:text-[#f2ca50] transition-colors cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges & Title */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#0a0e13]/85 border border-[#f2ca50]/30 text-[#f2ca50] text-[11px] font-semibold uppercase tracking-wider">
                {tour.badge}
              </span>
              <span className="text-xs text-[#d0c5af] font-semibold">
                {tour.durationLabel}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#e0e2ea] font-medium leading-tight">
              {tour.title}
            </h3>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 py-3 bg-[#101419] border-b border-[#31353b] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'itinerary'
                  ? 'bg-[#d4af37] text-[#3c2f00]'
                  : 'text-[#d0c5af] hover:text-[#e0e2ea]'
              }`}
            >
              Day-by-Day Itinerary
            </button>

            <button
              onClick={() => setActiveTab('inclusions')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'inclusions'
                  ? 'bg-[#d4af37] text-[#3c2f00]'
                  : 'text-[#d0c5af] hover:text-[#e0e2ea]'
              }`}
            >
              Inclusions &amp; Passes
            </button>

            <button
              onClick={() => setActiveTab('vehicle')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'vehicle'
                  ? 'bg-[#d4af37] text-[#3c2f00]'
                  : 'text-[#d0c5af] hover:text-[#e0e2ea]'
              }`}
            >
              Vehicle &amp; Chauffeur
            </button>
          </div>

          <div className="hidden sm:block text-right">
            <span className="text-[10px] uppercase font-semibold text-[#99907c] block">
              Per Guest
            </span>
            <span className="font-serif text-lg text-[#f2ca50] font-semibold">
              {formatPrice(tour.startingPriceUSD)}
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-[#d0c5af]">
          
          {/* Tab 1: Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                {tour.longDescription}
              </p>

              {/* Waypoints Strip */}
              <div className="p-3.5 rounded-xl bg-[#1c2025] border border-[#d4af37]/20 flex items-center gap-2 overflow-x-auto text-xs text-[#e0e2ea]">
                <MapPin className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span className="font-semibold text-[#f2ca50]">Route:</span>
                {tour.route.map((node, i) => (
                  <React.Fragment key={i}>
                    <span>{node}</span>
                    {i < tour.route.length - 1 && <span className="text-[#99907c]">→</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* Day Accordions */}
              <div className="space-y-3 pt-2">
                {tour.itinerary.map((day) => {
                  const isExpanded = expandedDay === day.day;
                  return (
                    <div
                      key={day.day}
                      className="border border-[#d4af37]/20 rounded-2xl overflow-hidden bg-[#1c2025]"
                    >
                      <button
                        onClick={() => setExpandedDay(isExpanded ? 0 : day.day)}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-[#262a30]/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                            D{day.day}
                          </span>
                          <div>
                            <h4 className="font-serif text-base text-[#e0e2ea] font-medium">
                              {day.title}
                            </h4>
                            <span className="text-xs text-[#99907c]">
                              {day.location}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs text-[#f2ca50] uppercase font-semibold">
                          {isExpanded ? 'Collapse −' : 'Details +'}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-5 pt-2 border-t border-[#31353b] space-y-3 text-xs leading-relaxed text-[#d0c5af]">
                          <p>{day.description}</p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#181c21]">
                              <Utensils className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                              <span>Meals: {day.mealsIncluded}</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 rounded-lg bg-[#181c21]">
                              <Hotel className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                              <span>Stays: {day.accommodationType}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {day.highlights.map((hl, hIdx) => (
                              <span
                                key={hIdx}
                                className="px-2 py-0.5 rounded bg-[#181c21] border border-[#d4af37]/20 text-[#f2ca50] text-[10px] font-semibold"
                              >
                                {hl}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 2: Inclusions & Passes */}
          {activeTab === 'inclusions' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg text-[#e0e2ea] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#f2ca50]" />
                  <span>Complimentary Luxury Inclusions</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tour.inclusions.map((inc, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#1c2025] border border-[#d4af37]/15 flex items-start gap-2.5"
                    >
                      <Check className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#e0e2ea]">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-lg text-[#e0e2ea] mb-3">
                  Not Included
                </h4>
                <div className="space-y-1.5">
                  {tour.exclusions.map((exc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#99907c]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#99907c]" />
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Vehicle & Chauffeur */}
          {activeTab === 'vehicle' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#1c2025] border border-[#d4af37]/25 flex flex-col sm:flex-row items-center gap-4">
                <Car className="w-12 h-12 text-[#f2ca50] shrink-0" />
                <div>
                  <h4 className="font-serif text-lg text-[#e0e2ea] font-semibold">
                    {tour.vehicle}
                  </h4>
                  <p className="text-xs text-[#d0c5af] mt-1 leading-relaxed">
                    Air-conditioned luxury transportation with private dedicated licensed English-speaking chauffeur-guide. Unlimited mileage, all expressway tolls, fuel, vehicle passenger insurance, and chauffeur lodging covered in full.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#181c21] border border-[#31353b]">
                  <span className="text-[10px] text-[#99907c] uppercase font-semibold block">
                    Chauffeur Accreditation
                  </span>
                  <span className="text-xs font-semibold text-[#e0e2ea]">
                    SLTDA Licensed English Chauffeur
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#181c21] border border-[#31353b]">
                  <span className="text-[10px] text-[#99907c] uppercase font-semibold block">
                    Cabin Refreshments
                  </span>
                  <span className="text-xs font-semibold text-[#e0e2ea]">
                    Bottled Spring Water &amp; Chilled Towels
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#181c21] border border-[#31353b]">
                  <span className="text-[10px] text-[#99907c] uppercase font-semibold block">
                    Connectivity
                  </span>
                  <span className="text-xs font-semibold text-[#e0e2ea]">
                    High-Speed 4G Mobile Wi-Fi Hotspot
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#101419] border-t border-[#31353b] flex items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-[11px] text-[#99907c] uppercase font-semibold block">
              Pricing From
            </span>
            <span className="font-serif text-xl sm:text-2xl text-[#f2ca50] font-semibold">
              {formatPrice(tour.startingPriceUSD)}{' '}
              <span className="text-xs font-sans text-[#d0c5af] font-normal">/ guest</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full border border-[#31353b] text-[#d0c5af] hover:text-[#e0e2ea] text-xs font-semibold uppercase tracking-wider"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onBookNow(tour);
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e7c35a] to-[#d4af37] text-[#3c2f00] text-xs font-semibold uppercase tracking-wider shadow-lg hover:scale-102 transition-transform cursor-pointer"
            >
              <span>Book This Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
