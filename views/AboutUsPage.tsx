import React from 'react';
import { FLEET_VEHICLES, ASSETS } from '../data/mockData';
import { ShieldCheck, Award, HeartHandshake, Compass, Users, Check, ArrowRight } from 'lucide-react';

interface AboutUsPageProps {
  onPlanTrip: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onPlanTrip }) => {
  return (
    <div className="w-full py-12 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 animate-in fade-in">
      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-[#f2ca50]" /> The Unknown Traveler Standard{' '}
          <span className="w-6 h-px bg-[#f2ca50]" />
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#e0e2ea] mt-2 font-normal">
          Private Ceylon Travel, Reimagined
        </h1>
        <p className="text-sm sm:text-base text-[#d0c5af] mt-3 leading-relaxed">
          Founded on the principle that the most profound travel experiences happen when you are completely unhurried, privately guided, and deeply connected to local island soul.
        </p>
      </div>

      {/* Story & Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#e0e2ea] font-medium leading-tight">
            Beyond the Ordinary Tour Bus: The Private Chauffeur Culture
          </h2>
          <p className="text-sm text-[#d0c5af] leading-relaxed">
            In Sri Lanka, a private chauffeur-guide is more than a driver—they are your cultural interlocutor, naturalist, friend, and logistical protector. At Unknown Traveler, we select only the top 5% of licensed SLTDA chauffeur-guides who embody discretion, intellectual curiosity, and impeccable hospitality.
          </p>
          <p className="text-sm text-[#d0c5af] leading-relaxed">
            Whether navigating mountain cloud passes to hidden tea planter bungalows or timing your arrival at Sigiriya to avoid crowded queues, our team ensures every minute feels effortlessly orchestrated.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <div className="p-4 rounded-xl bg-[#181c21] border border-[#d4af37]/20">
              <span className="text-2xl font-serif text-[#f2ca50] font-bold block">100%</span>
              <span className="text-xs text-[#d0c5af]">Private Expeditions (Zero Strangers)</span>
            </div>
            <div className="p-4 rounded-xl bg-[#181c21] border border-[#d4af37]/20">
              <span className="text-2xl font-serif text-[#f2ca50] font-bold block">24/7</span>
              <span className="text-xs text-[#d0c5af]">Senior Travel Concierge On-Call</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl h-[420px] border border-[#d4af37]/25">
          <img
            alt="Sigiriya Sunrise"
            src={ASSETS.sigiriya}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e13]/85 via-transparent to-transparent flex flex-col justify-end p-8">
            <span className="text-xs font-semibold text-[#f2ca50] uppercase tracking-wider">
              Discreet Ceylon Luxury
            </span>
            <span className="font-serif text-2xl text-white font-medium">
              Your Journey. Your Rhythm. Your Memories.
            </span>
          </div>
        </div>
      </div>

      {/* Chauffeur Code of Standards */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em]">
            Professional Rigor
          </span>
          <h2 className="font-serif text-3xl text-[#e0e2ea] mt-1">
            Our Chauffeur-Guide Code of Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Award className="w-5 h-5 text-[#f2ca50]" />,
              title: 'SLTDA Certified',
              desc: 'Every chauffeur is officially licensed by the Sri Lanka Tourism Development Authority and continuously trained in defensive driving.',
            },
            {
              icon: <Compass className="w-5 h-5 text-[#f2ca50]" />,
              title: 'Fluent & Articulate',
              desc: 'Effortless English communication with deep knowledge of Sri Lanka’s 2,500-year history, flora, fauna, and local lore.',
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-[#f2ca50]" />,
              title: 'Absolute Discretion',
              desc: 'Trained to anticipate guest needs while offering serene privacy for couples, families, and high-profile travelers.',
            },
            {
              icon: <HeartHandshake className="w-5 h-5 text-[#f2ca50]" />,
              title: 'Zero Shopping Pressure',
              desc: 'Unlike conventional tours, our guides never force visits to tourist shops or commission traps. Your itinerary is purely for you.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#181c21] border border-[#d4af37]/20 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1c2025] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg text-[#e0e2ea] font-medium">
                {item.title}
              </h3>
              <p className="text-xs text-[#d0c5af] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fleet Showcase */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em]">
            The Vehicles
          </span>
          <h2 className="font-serif text-3xl text-[#e0e2ea] mt-1">
            The Private Executive Fleet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FLEET_VEHICLES.map((v) => (
            <div
              key={v.id}
              className="p-6 rounded-2xl bg-[#181c21] border border-[#d4af37]/25 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#f2ca50] tracking-wider block mb-1">
                  {v.category}
                </span>
                <h3 className="font-serif text-xl text-[#e0e2ea] font-medium mb-3">
                  {v.model}
                </h3>

                <div className="space-y-1.5 text-xs text-[#d0c5af] mb-4">
                  <div>Capacity: <strong className="text-[#e0e2ea]">{v.passengers}</strong></div>
                  <div>Luggage: <strong className="text-[#e0e2ea]">{v.luggage}</strong></div>
                </div>

                <div className="space-y-2 pt-3 border-t border-[#31353b]">
                  {v.amenities.map((am, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#d0c5af]">
                      <Check className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                      <span>{am}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={onPlanTrip}
                  className="w-full py-2.5 rounded-full bg-[#262a30] hover:bg-[#31353b] text-[#e0e2ea] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Request This Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#181c21] border border-[#f2ca50]/30 text-center flex flex-col items-center gap-4">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#e0e2ea]">
          Ready to Begin Your Private Voyage?
        </h3>
        <p className="text-xs sm:text-sm text-[#d0c5af] max-w-lg leading-relaxed">
          Tell our travel designers your ideal travel dates and wishlist. We will prepare your proposal with luxury vehicle allocation within 3 hours.
        </p>
        <button
          onClick={onPlanTrip}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#f2ca50] text-[#3c2f00] text-xs font-semibold uppercase tracking-widest hover:bg-[#ffe088] transition-colors cursor-pointer shadow-lg"
        >
          <span>Plan My Private Tour</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
