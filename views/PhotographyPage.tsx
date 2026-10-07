import React from 'react';
import { Currency, PhotographyPackage } from '../types/travel';
import { ASSETS, PHOTOGRAPHY_PACKAGES, USD_TO_LKR_RATE } from '../data/mockData';
import { Video, Award, Plane, Film, Heart, Check, Camera, Sparkles, Instagram } from 'lucide-react';

interface PhotographyPageProps {
  currency: Currency;
  onOpenBooking: () => void;
  onOpenLightbox: (imageUrl: string, title: string, location: string) => void;
}

export const PhotographyPage: React.FC<PhotographyPageProps> = ({
  currency,
  onOpenBooking,
  onOpenLightbox,
}) => {
  const formatPrice = (usd: number) => {
    if (currency === 'LKR') {
      return `LKR Rs. ${(usd * USD_TO_LKR_RATE).toLocaleString()}`;
    }
    return `USD $${usd.toLocaleString()}`;
  };

  return (
    <div className="w-full py-12 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 animate-in fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#181c21] border border-[#d4af37]/30 mb-3">
          <Video className="w-4 h-4 text-[#f2ca50]" />
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-widest">
            Unknown Studio Partnership
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#e0e2ea] mt-1 font-normal">
          “TRAVEL. CAPTURE. <span className="italic text-[#f2ca50]">REMEMBER.”</span>
        </h1>
        <p className="text-sm sm:text-base text-[#d0c5af] mt-3 leading-relaxed">
          Elevate your journey with dedicated fine-art photographers and certified commercial drone cinematographers documenting every majestic landmark.
        </p>
      </div>

      {/* Visual Feature Mosaic */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
        <div
          onClick={() => onOpenLightbox(ASSETS.sigiriya, 'Sigiriya Rock Dawn Flight', 'Sigiriya, Sri Lanka')}
          className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
        >
          <img
            alt="Sigiriya Dawn"
            src={ASSETS.sigiriya}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
            <span className="text-[10px] text-[#f2ca50] font-semibold uppercase">Aerial 4K Drone</span>
            <span className="font-serif text-lg text-white">Sigiriya Fortress</span>
          </div>
        </div>

        <div
          onClick={() => onOpenLightbox(ASSETS.ella, 'Demodara Nine Arches Viaduct', 'Ella, Highlands')}
          className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
        >
          <img
            alt="Nine Arches"
            src={ASSETS.ella}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
            <span className="text-[10px] text-[#f2ca50] font-semibold uppercase">8K Cine Line</span>
            <span className="font-serif text-lg text-white">Nine Arches Ella</span>
          </div>
        </div>

        <div
          onClick={() => onOpenLightbox(ASSETS.yala, 'Wild Tusker at Patanangala', 'Yala National Park')}
          className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
        >
          <img
            alt="Yala Wildlife"
            src={ASSETS.yala}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
            <span className="text-[10px] text-[#f2ca50] font-semibold uppercase">600mm Prime Wildlife</span>
            <span className="font-serif text-lg text-white">Yala Wilds</span>
          </div>
        </div>

        <div
          onClick={() => onOpenLightbox(ASSETS.galle, 'Sunset Toast on South Coast', 'Mirissa & Galle')}
          className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
        >
          <img
            alt="South Coast Sunset"
            src={ASSETS.galle}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
            <span className="text-[10px] text-[#f2ca50] font-semibold uppercase">Leica 35mm Editorial</span>
            <span className="font-serif text-lg text-white">South Coast Sunset</span>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em]">
            Studio Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e0e2ea] mt-1">
            Choose Your Cinematic Package
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHOTOGRAPHY_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="p-8 rounded-3xl bg-[#181c21] border border-[#d4af37]/25 hover:border-[#f2ca50] transition-all flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-semibold text-[#f2ca50] tracking-wider">
                    {pkg.popularFor}
                  </span>
                  {pkg.id === 'gold-unknown-studio' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] text-[10px] font-bold">
                      RECOMMENDED
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl text-[#e0e2ea] font-medium">
                  {pkg.name}
                </h3>

                <div className="font-serif text-3xl text-[#f2ca50] font-semibold">
                  {formatPrice(pkg.priceUSD)}
                </div>

                <p className="text-xs text-[#99907c] font-medium">
                  Equipment: {pkg.gear}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#31353b]">
                  {pkg.deliverables.map((del, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#d0c5af]">
                      <Check className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#e7c35a] to-[#d4af37] text-[#3c2f00] text-xs font-semibold uppercase tracking-wider shadow-lg hover:scale-102 transition-transform cursor-pointer"
                >
                  Book Photography Tier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Production Standards Box */}
      <div className="p-8 rounded-3xl bg-[#181c21] border border-[#d4af37]/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-serif text-xl text-[#e0e2ea] font-semibold">
            Licensed Commercial Aerial Operations
          </h4>
          <p className="text-xs sm:text-sm text-[#d0c5af] mt-1 max-w-xl">
            Drone flights across archaeological zones in Sri Lanka require statutory Ministry of Defence (MOD) and Civil Aviation Authority (CAA) clearance. Unknown Studio holds official commercial licenses, securing legal flight permissions ahead of your arrival.
          </p>
        </div>
        <button
          onClick={onOpenBooking}
          className="px-6 py-3 rounded-full bg-[#262a30] border border-[#d4af37]/30 text-[#e0e2ea] text-xs font-semibold uppercase tracking-wider hover:border-[#f2ca50] shrink-0"
        >
          Inquire Drone Permits
        </button>
      </div>
    </div>
  );
};
