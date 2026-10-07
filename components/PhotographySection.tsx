import React, { useState } from 'react';
import { Currency, PhotographyPackage } from '../types/travel';
import { ASSETS, PHOTOGRAPHY_PACKAGES, USD_TO_LKR_RATE } from '../data/mockData';
import { Video, Award, Plane, Film, Heart, Check, Camera, Sparkles } from 'lucide-react';

interface PhotographySectionProps {
  currency: Currency;
  onAddPhotographyPackage?: (pkg: PhotographyPackage) => void;
  onOpenBooking?: () => void;
}

export const PhotographySection: React.FC<PhotographySectionProps> = ({
  currency,
  onAddPhotographyPackage,
  onOpenBooking,
}) => {
  const [selectedPkg, setSelectedPkg] = useState<PhotographyPackage | null>(null);

  const formatPrice = (usd: number) => {
    if (currency === 'LKR') {
      return `LKR Rs. ${(usd * USD_TO_LKR_RATE).toLocaleString()}`;
    }
    return `USD $${usd.toLocaleString()}`;
  };

  return (
    <section className="w-full py-20 bg-[#0a0e13] border-y border-[#d4af37]/20" id="photography">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Editorial Description */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#181c21] border border-[#d4af37]/30 w-fit">
              <Video className="w-4 h-4 text-[#f2ca50]" />
              <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-widest">
                Unknown Studio Partnership
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#e0e2ea] tracking-tight leading-tight">
              “TRAVEL. CAPTURE. <br />
              <span className="italic text-[#f2ca50]">REMEMBER.”</span>
            </h2>

            <p className="text-base sm:text-lg text-[#d0c5af] font-light leading-relaxed">
              Turn your Sri Lankan expedition into cinematic memories that last generations. We pair you with professional fine-art photographers and certified drone cinematographers.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-col gap-2.5 pt-1">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181c21]/70 border border-[#d4af37]/15">
                <Award className="w-5 h-5 text-[#f2ca50] shrink-0" />
                <span className="text-xs sm:text-sm text-[#e0e2ea]">
                  Fine-art travel portraiture &amp; private heirloom albums
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181c21]/70 border border-[#d4af37]/15">
                <Plane className="w-5 h-5 text-[#f2ca50] shrink-0" />
                <span className="text-xs sm:text-sm text-[#e0e2ea]">
                  Cinematic 4K/8K aerial drone footage across Sigiriya &amp; coastlines
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181c21]/70 border border-[#d4af37]/15">
                <Film className="w-5 h-5 text-[#f2ca50] shrink-0" />
                <span className="text-xs sm:text-sm text-[#e0e2ea]">
                  Social media reels, high-resolution stories &amp; editorial short films
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#181c21]/70 border border-[#d4af37]/15">
                <Heart className="w-5 h-5 text-[#f2ca50] shrink-0" />
                <span className="text-xs sm:text-sm text-[#e0e2ea]">
                  Honeymoon, proposal &amp; family documentary sessions
                </span>
              </div>
            </div>

            {/* Cine Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-[#d0c5af] text-xs font-semibold">
              <span className="px-2.5 py-1 rounded bg-[#1c2025] border border-[#d4af37]/20">
                SONY FX CINEMA LINE
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1c2025] border border-[#d4af37]/20">
                DJI CINE PRO
              </span>
              <span className="px-2.5 py-1 rounded bg-[#1c2025] border border-[#d4af37]/20">
                LEICA GLASS
              </span>
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#trip-planner"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e7c35a] to-[#d4af37] text-[#3c2f00] text-xs font-semibold uppercase tracking-widest shadow-[0_8px_24px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 transition-all"
              >
                <Camera className="w-4 h-4" />
                <span>Add Photography to My Tour</span>
              </a>

              {onOpenBooking && (
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1c2025] border border-[#d4af37]/30 text-[#e0e2ea] text-xs font-semibold uppercase tracking-widest hover:border-[#f2ca50] transition-colors"
                >
                  <span>Book Studio Package</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Visual Showcase Mosaic */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 group">
                <img
                  alt="Ella Rail Cinematic Capture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={ASSETS.ella}
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0a0e13]/85 text-[10px] font-semibold text-[#f2ca50] uppercase tracking-wider backdrop-blur-sm">
                  Nine Arches • 8K Cine
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-44 group">
                <img
                  alt="Yala Elephant Wildlife Cinematic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={ASSETS.yala}
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0a0e13]/85 text-[10px] font-semibold text-[#f2ca50] uppercase tracking-wider backdrop-blur-sm">
                  Yala Wilds • 600mm Prime
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-44 group">
                <img
                  alt="Sigiriya Fortress Dawn Light"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={ASSETS.sigiriya}
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0a0e13]/85 text-[10px] font-semibold text-[#f2ca50] uppercase tracking-wider backdrop-blur-sm">
                  Sigiriya • Sunrise Flight
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 group">
                <img
                  alt="Galle Beach Sunset Toast"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={ASSETS.galle}
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0a0e13]/85 text-[10px] font-semibold text-[#f2ca50] uppercase tracking-wider backdrop-blur-sm">
                  South Coast • Golden Hour
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Studio Packages Showcase */}
        <div className="mt-16 pt-12 border-t border-[#d4af37]/20">
          <div className="text-center mb-8">
            <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em]">
              Dedicated Packages
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#e0e2ea] mt-1">
              Select Your Cinematic Studio Tier
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PHOTOGRAPHY_PACKAGES.map((pkg) => {
              const isSelected = selectedPkg?.id === pkg.id;
              return (
                <div
                  key={pkg.id}
                  className={`p-6 rounded-2xl bg-[#181c21] border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#f2ca50] shadow-[0_8px_24px_rgba(212,175,55,0.2)]'
                      : 'border-[#d4af37]/20 hover:border-[#d4af37]/50'
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-semibold text-[#f2ca50] tracking-wider">
                        {pkg.popularFor}
                      </span>
                      {pkg.id === 'gold-unknown-studio' && (
                        <span className="px-2 py-0.5 rounded-full bg-[#f2ca50]/20 text-[#f2ca50] text-[10px] font-bold">
                          MOST POPULAR
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif text-xl text-[#e0e2ea] font-medium">
                      {pkg.name}
                    </h4>

                    <div className="text-2xl font-serif text-[#f2ca50] font-semibold">
                      {formatPrice(pkg.priceUSD)}
                    </div>

                    <p className="text-xs text-[#99907c] font-medium">
                      Gear: {pkg.gear}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#31353b]">
                      {pkg.deliverables.map((del, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#d0c5af]">
                          <Check className="w-3.5 h-3.5 text-[#f2ca50] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setSelectedPkg(pkg);
                        if (onAddPhotographyPackage) onAddPhotographyPackage(pkg);
                      }}
                      className={`w-full py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#f2ca50] text-[#3c2f00]'
                          : 'bg-[#262a30] text-[#e0e2ea] hover:bg-[#31353b]'
                      }`}
                    >
                      {isSelected ? 'Package Selected ✓' : 'Select This Tier'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
