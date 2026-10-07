import React from 'react';
import { Destination } from '../types/travel';
import { X, MapPin, Compass, Camera, Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface DestinationDetailModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanTrip: (destName: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  onPlanTrip,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#181c21] border border-[#d4af37]/35 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto">
        
        {/* Visual Hero */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            alt={destination.name}
            src={destination.imageUrl}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181c21] via-[#181c21]/60 to-transparent" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#0a0e13]/80 border border-[#d4af37]/30 text-[#e0e2ea] hover:text-[#f2ca50] transition-colors cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Region */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-0.5 rounded-full bg-[#0a0e13]/85 border border-[#f2ca50]/30 text-[#f2ca50] text-[11px] font-semibold uppercase tracking-wider inline-block mb-1">
              {destination.region}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#e0e2ea] font-medium leading-tight">
              {destination.name}
            </h3>
            <p className="text-xs text-[#f2ca50] font-medium mt-0.5">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Quick Facts Ledger Bar */}
        <div className="px-6 py-3 bg-[#101419] border-b border-[#31353b] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#d0c5af] shrink-0">
          <div>
            <span className="text-[10px] text-[#99907c] uppercase font-semibold block">
              Elevation
            </span>
            <span className="text-[#e0e2ea] font-medium">{destination.elevation}</span>
          </div>
          <div>
            <span className="text-[10px] text-[#99907c] uppercase font-semibold block">
              Distance from Colombo
            </span>
            <span className="text-[#e0e2ea] font-medium truncate block">
              {destination.distanceFromColombo}
            </span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-[10px] text-[#99907c] uppercase font-semibold block">
              Prime Season
            </span>
            <span className="text-[#f2ca50] font-medium">{destination.bestTimeToVisit}</span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-[#d0c5af]">
          <div>
            <h4 className="font-serif text-lg text-[#e0e2ea] mb-2 font-medium">
              Regional Narrative
            </h4>
            <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
              {destination.longDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-serif text-lg text-[#e0e2ea] mb-3 flex items-center gap-2 font-medium">
              <Sparkles className="w-4 h-4 text-[#f2ca50]" />
              <span>Curated Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.highlights.map((hl, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#1c2025] border border-[#d4af37]/15 text-xs text-[#e0e2ea] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photography Spots */}
          <div>
            <h4 className="font-serif text-lg text-[#e0e2ea] mb-3 flex items-center gap-2 font-medium">
              <Camera className="w-4 h-4 text-[#f2ca50]" />
              <span>Prime Cine &amp; Photo Vantage Points</span>
            </h4>
            <div className="space-y-2">
              {destination.photoSpots.map((spot, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#1c2025] border border-[#d4af37]/15 text-xs text-[#d0c5af] flex items-start gap-2.5"
                >
                  <MapPin className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
                  <span>{spot}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Senior Concierge Insider Tip */}
          <div className="p-4 rounded-2xl bg-[#1c2025] border border-[#f2ca50]/40 flex items-start gap-3">
            <Compass className="w-5 h-5 text-[#f2ca50] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-wider block">
                Concierge Insider Secret
              </span>
              <p className="text-xs text-[#e0e2ea] mt-1 leading-relaxed italic">
                "{destination.insiderTip}"
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 sm:p-6 bg-[#101419] border-t border-[#31353b] flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-full border border-[#31353b] text-[#d0c5af] hover:text-[#e0e2ea] text-xs font-semibold uppercase tracking-wider"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onPlanTrip(destination.name);
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e7c35a] to-[#d4af37] text-[#3c2f00] text-xs font-semibold uppercase tracking-wider shadow-lg hover:scale-102 transition-transform cursor-pointer"
          >
            <span>Plan Trip To {destination.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
