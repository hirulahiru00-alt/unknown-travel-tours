import React, { useState } from 'react';
import { TourPackage, Currency } from '../types/travel';
import { TOURS, FLEET_VEHICLES, USD_TO_LKR_RATE, CONCIERGE_WHATSAPP_NUMBER } from '../data/mockData';
import {
  Car,
  Compass,
  ShieldCheck,
  Plane,
  Clock,
  CheckCircle2,
  Calendar,
  Users,
  Luggage,
  Sparkles,
  PhoneCall,
  ArrowRight,
  Filter,
  MapPin,
  Fuel,
  Award
} from 'lucide-react';

interface UnknownTravelAndToursPageProps {
  currency: Currency;
  onSelectTour: (tour: TourPackage) => void;
  onBookTour: (tour: TourPackage) => void;
  onPlanCustomTrip: () => void;
}

interface TransferRoute {
  from: string;
  to: string;
  distanceKm: number;
  durationHours: string;
  sedanUSD: number;
  suvUSD: number;
  vanUSD: number;
}

const POPULAR_TRANSFER_ROUTES: TransferRoute[] = [
  {
    from: 'Bandaranaike Airport (CMB)',
    to: 'Colombo City Centre',
    distanceKm: 35,
    durationHours: '45 mins (Expressway)',
    sedanUSD: 45,
    suvUSD: 65,
    vanUSD: 60,
  },
  {
    from: 'Bandaranaike Airport (CMB)',
    to: 'Galle / Mirissa (South Coast)',
    distanceKm: 155,
    durationHours: '2 hrs (Southern Expressway)',
    sedanUSD: 110,
    suvUSD: 155,
    vanUSD: 140,
  },
  {
    from: 'Bandaranaike Airport (CMB)',
    to: 'Kandy (Cultural Hill Capital)',
    distanceKm: 115,
    durationHours: '3 hrs (Central Scenic Route)',
    sedanUSD: 95,
    suvUSD: 135,
    vanUSD: 125,
  },
  {
    from: 'Bandaranaike Airport (CMB)',
    to: 'Sigiriya / Dambulla (Cultural Triangle)',
    distanceKm: 150,
    durationHours: '3.5 hrs (Central Highway)',
    sedanUSD: 120,
    suvUSD: 165,
    vanUSD: 150,
  },
  {
    from: 'Kandy',
    to: 'Nuwara Eliya / Ella (Tea Country)',
    distanceKm: 80,
    durationHours: '2.5 hrs (Mountain Road)',
    sedanUSD: 85,
    suvUSD: 120,
    vanUSD: 110,
  },
  {
    from: 'Ella / Nuwara Eliya',
    to: 'Yala National Park',
    distanceKm: 95,
    durationHours: '2.5 hrs (Descent to Lowlands)',
    sedanUSD: 90,
    suvUSD: 130,
    vanUSD: 120,
  },
];

export const UnknownTravelAndToursPage: React.FC<UnknownTravelAndToursPageProps> = ({
  currency,
  onSelectTour,
  onBookTour,
  onPlanCustomTrip,
}) => {
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);
  const [selectedVehicleType, setSelectedVehicleType] = useState<'sedan' | 'suv' | 'van'>('suv');
  const [customDays, setCustomDays] = useState(3);
  const [activeCatalogTab, setActiveCatalogTab] = useState<string>('all');
  const [guestCount, setGuestCount] = useState<number>(2);

  const formatPrice = (usd: number) => {
    if (currency === 'LKR') {
      return `LKR Rs. ${(usd * USD_TO_LKR_RATE).toLocaleString()}`;
    }
    return `USD $${usd.toLocaleString()}`;
  };

  const currentRoute = POPULAR_TRANSFER_ROUTES[selectedRouteIndex];
  const routePriceUSD =
    selectedVehicleType === 'sedan'
      ? currentRoute.sedanUSD
      : selectedVehicleType === 'suv'
      ? currentRoute.suvUSD
      : currentRoute.vanUSD;

  const vehicleName =
    selectedVehicleType === 'sedan'
      ? 'Mercedes-Benz E/S-Class Executive'
      : selectedVehicleType === 'suv'
      ? 'Toyota Land Cruiser Prado TX-L 4x4'
      : 'Toyota HiAce High-Roof VIP Luxury Van';

  const transferWhatsAppMessage = encodeURIComponent(
    `Ayubowan Unknown Travel & Tours! I would like to book a private transfer/chauffeur:\n` +
      `• Route: ${currentRoute.from} ➔ ${currentRoute.to}\n` +
      `• Vehicle: ${vehicleName}\n` +
      `• Estimated Distance: ${currentRoute.distanceKm} km (${currentRoute.durationHours})\n` +
      `• Price Estimate: ${formatPrice(routePriceUSD)}\n` +
      `• Guests: ${guestCount}\n` +
      `Please confirm driver availability.`
  );

  const filteredTours = TOURS.filter((tour) => {
    if (activeCatalogTab === 'all') return true;
    return tour.category === activeCatalogTab;
  });

  return (
    <div className="w-full py-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 animate-in fade-in">
      
      {/* Brand Division Header Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#181c21] via-[#101419] to-[#181c21] border border-[#d4af37]/35 p-8 sm:p-12 mb-16 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f2ca50]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#262a30] border border-[#d4af37]/30 mb-4">
            <Car className="w-4 h-4 text-[#f2ca50]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f2ca50]">
              Official Chauffeur &amp; Itinerary Division
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#e0e2ea] tracking-tight font-normal">
            Unknown Travel <span className="text-[#f2ca50] italic">&amp;</span> Tours
          </h1>

          <p className="text-base sm:text-lg text-[#d0c5af] mt-4 leading-relaxed font-light">
            Premier private chauffeur expeditions, luxury island transfers, and bespoke Sri Lankan travel itineraries. Every mile is steered by SLTDA licensed professional chauffeur-guides with unrestricted island mileage, fuel inclusions, and zero hidden surcharges.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#31353b]/60">
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-[#f2ca50] font-semibold">100%</span>
              <span className="text-xs text-[#99907c] uppercase tracking-wider mt-1">Private &amp; Tailored</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-[#f2ca50] font-semibold">Top 5%</span>
              <span className="text-xs text-[#99907c] uppercase tracking-wider mt-1">SLTDA Chauffeurs</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-[#f2ca50] font-semibold">0 km</span>
              <span className="text-xs text-[#99907c] uppercase tracking-wider mt-1">Mileage Limits</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-[#f2ca50] font-semibold">24 / 7</span>
              <span className="text-xs text-[#99907c] uppercase tracking-wider mt-1">Live Concierge</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: Interactive Island Transfer & Fare Estimator */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#f2ca50]" /> Instant Island Transit Fare Guide <span className="w-6 h-px bg-[#f2ca50]" />
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#e0e2ea] mt-2 font-normal">
            Private Airport &amp; Inter-City Transfers
          </h2>
          <p className="text-xs sm:text-sm text-[#d0c5af] mt-2">
            Select your corridor and vehicle tier for transparent, all-inclusive private chauffeur rates (toll fees, fuel, driver allowances included).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Route Selector List */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#99907c]">
              Select Signature Transfer Corridor:
            </label>

            {POPULAR_TRANSFER_ROUTES.map((route, idx) => {
              const isSelected = idx === selectedRouteIndex;
              return (
                <button
                  key={`${route.from}-${route.to}`}
                  type="button"
                  onClick={() => setSelectedRouteIndex(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-[#181c21] border-[#f2ca50] shadow-md ring-1 ring-[#f2ca50]/50'
                      : 'bg-[#14181d] border-[#31353b]/60 hover:border-[#d4af37]/40 text-[#d0c5af]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? 'bg-[#f2ca50] text-[#3c2f00]' : 'bg-[#262a30] text-[#99907c]'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#e0e2ea] flex items-center gap-2">
                        <span>{route.from}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#f2ca50]" />
                        <span>{route.to}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#99907c] mt-1">
                        <span>{route.distanceKm} km</span>
                        <span>•</span>
                        <span>{route.durationHours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right sm:self-center shrink-0">
                    <span className="text-[10px] text-[#99907c] block uppercase">From</span>
                    <span className="text-sm font-bold text-[#f2ca50]">
                      {formatPrice(route.sedanUSD)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Fare Calculator Card */}
          <div className="lg:col-span-5 bg-[#181c21] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl sticky top-28">
            <div className="border-b border-[#31353b]/60 pb-4">
              <span className="text-[10px] uppercase font-semibold text-[#f2ca50] tracking-widest block">
                Selected Transfer Corridor
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-[#e0e2ea] mt-1">
                {currentRoute.from} <span className="text-[#f2ca50]">➔</span> {currentRoute.to}
              </h3>
              <p className="text-xs text-[#99907c] mt-1">
                {currentRoute.distanceKm} km • Est. {currentRoute.durationHours}
              </p>
            </div>

            {/* Vehicle Tier Toggle */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#99907c]">
                Select Vehicle Class:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedVehicleType('sedan')}
                  className={`py-2 px-2 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                    selectedVehicleType === 'sedan'
                      ? 'bg-[#d4af37] text-[#3c2f00] border-[#d4af37] font-semibold'
                      : 'bg-[#262a30] text-[#d0c5af] border-[#31353b] hover:text-[#e0e2ea]'
                  }`}
                >
                  Sedan
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVehicleType('suv')}
                  className={`py-2 px-2 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                    selectedVehicleType === 'suv'
                      ? 'bg-[#d4af37] text-[#3c2f00] border-[#d4af37] font-semibold'
                      : 'bg-[#262a30] text-[#d0c5af] border-[#31353b] hover:text-[#e0e2ea]'
                  }`}
                >
                  Prado SUV
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedVehicleType('van')}
                  className={`py-2 px-2 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                    selectedVehicleType === 'van'
                      ? 'bg-[#d4af37] text-[#3c2f00] border-[#d4af37] font-semibold'
                      : 'bg-[#262a30] text-[#d0c5af] border-[#31353b] hover:text-[#e0e2ea]'
                  }`}
                >
                  VIP Van
                </button>
              </div>
            </div>

            {/* Vehicle Specs Breakdown */}
            <div className="p-3.5 rounded-xl bg-[#101419] border border-[#31353b]/60 flex flex-col gap-2 text-xs">
              <span className="font-semibold text-[#e0e2ea]">{vehicleName}</span>
              <div className="flex items-center gap-4 text-[#99907c]">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#f2ca50]" />
                  {selectedVehicleType === 'sedan' ? '2-3 Passengers' : selectedVehicleType === 'suv' ? '3-4 Passengers' : '6-8 Passengers'}
                </span>
                <span className="flex items-center gap-1.5">
                  <Luggage className="w-3.5 h-3.5 text-[#f2ca50]" />
                  {selectedVehicleType === 'sedan' ? '2 Bags' : selectedVehicleType === 'suv' ? '4 Large Bags' : '8 Bags'}
                </span>
              </div>
            </div>

            {/* Price Output */}
            <div className="flex items-baseline justify-between pt-2 border-t border-[#31353b]/60">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#99907c] block">
                  All-Inclusive Chauffeur Fare
                </span>
                <span className="text-2xl font-serif font-bold text-[#f2ca50]">
                  {formatPrice(routePriceUSD)}
                </span>
              </div>
              <span className="text-[10px] text-[#99907c] text-right">
                Tolls, Fuel &amp; Driver Included
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${transferWhatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] text-center font-semibold text-xs tracking-widest uppercase shadow-lg hover:scale-101 transition-transform flex items-center justify-center gap-2"
              >
                <span>Book Via WhatsApp</span>
                <PhoneCall className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onPlanCustomTrip}
                className="w-full py-3 rounded-full bg-[#262a30] text-[#e0e2ea] hover:text-[#f2ca50] text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Build Multi-Day Circuit Instead
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Luxury Chauffeur Fleet Showcase */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#f2ca50]" /> The Chauffeur Fleet <span className="w-6 h-px bg-[#f2ca50]" />
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#e0e2ea] mt-2 font-normal">
            Pristine Vehicles For Island Terrain
          </h2>
          <p className="text-xs sm:text-sm text-[#d0c5af] mt-2">
            Air-conditioned, impeccably detailed before every departure, and outfitted with chilled water, cool towels, and high-speed Wi-Fi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FLEET_VEHICLES.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-[#181c21] rounded-2xl border border-[#d4af37]/25 overflow-hidden flex flex-col justify-between group hover:border-[#f2ca50] transition-all shadow-md"
            >
              <div>
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    alt={vehicle.model}
                    src={vehicle.imageUrl}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#101419]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#f2ca50]/30 text-[10px] font-semibold text-[#f2ca50] uppercase">
                    {vehicle.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-lg text-[#e0e2ea] font-medium">
                    {vehicle.model}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-[#99907c] mt-3 pb-3 border-b border-[#31353b]/50">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#f2ca50]" />
                      {vehicle.passengers}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Luggage className="w-3.5 h-3.5 text-[#f2ca50]" />
                      {vehicle.luggage}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-[10px] uppercase font-semibold text-[#f2ca50] tracking-wider">
                      Onboard Comforts:
                    </span>
                    <ul className="text-xs text-[#d0c5af] space-y-1.5">
                      {vehicle.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={onPlanCustomTrip}
                  className="w-full py-2.5 rounded-full bg-[#262a30] hover:bg-[#31353b] text-[#e0e2ea] hover:text-[#f2ca50] text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Reserve with Chauffeur
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Signature Curated Itineraries by Unknown Travel & Tours */}
      <section className="mb-20" id="tour-catalog">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#f2ca50]" /> Signature Circuits <span className="w-6 h-px bg-[#f2ca50]" />
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#e0e2ea] mt-2 font-normal">
            Turnkey Private Island Tours
          </h2>
          <p className="text-xs sm:text-sm text-[#d0c5af] mt-2">
            Handcrafted travel packages featuring 5-star colonial &amp; wild luxury stays, chauffeur transport, and exclusive excursions.
          </p>
        </div>

        {/* Catalog Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Packages' },
            { id: 'day-tour', label: 'Day Excursions' },
            { id: 'highland', label: 'Highlands & Tea' },
            { id: 'wildlife', label: 'Wildlife Safaris' },
            { id: 'grand-expedition', label: 'Grand Multi-Day Circuits' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCatalogTab(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeCatalogTab === cat.id
                  ? 'bg-[#d4af37] text-[#3c2f00] shadow-md'
                  : 'bg-[#181c21] text-[#d0c5af] border border-[#31353b]/60 hover:border-[#d4af37]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-[#181c21] rounded-2xl border border-[#d4af37]/20 overflow-hidden flex flex-col justify-between group hover:border-[#f2ca50] transition-all shadow-md"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    alt={tour.title}
                    src={tour.imageUrl}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#101419]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#f2ca50]/30 text-[10px] font-semibold text-[#f2ca50] uppercase">
                    {tour.durationLabel}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl text-[#e0e2ea] font-medium">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-[#d0c5af] mt-2 line-clamp-2">
                    {tour.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#31353b]/50">
                    <span className="text-[10px] uppercase font-semibold text-[#f2ca50] tracking-wider block mb-1">
                      Route Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tour.route.map((stop, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 rounded bg-[#101419] text-[#d0c5af] border border-[#31353b]/60"
                        >
                          {stop}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#31353b]/40 mt-4">
                <div>
                  <span className="text-[10px] text-[#99907c] block uppercase">From</span>
                  <span className="text-lg font-bold text-[#f2ca50]">
                    {formatPrice(tour.startingPriceUSD)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectTour(tour)}
                    className="px-3.5 py-2 rounded-full bg-[#262a30] text-[#e0e2ea] hover:text-[#f2ca50] text-xs font-semibold tracking-wider transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => onBookTour(tour)}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] text-xs font-semibold tracking-wider uppercase shadow hover:scale-102 transition-transform"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: VIP Airport Fast-Track Welcome */}
      <section className="bg-gradient-to-b from-[#181c21] to-[#101419] rounded-3xl border border-[#d4af37]/30 p-8 sm:p-12 mb-16 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center gap-2">
              <Plane className="w-4 h-4 text-[#f2ca50]" /> Bandaranaike International Airport (CMB)
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#e0e2ea] font-medium">
              VIP Runway Arrival &amp; Fast-Track Chauffeur Escort
            </h3>
            <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
              Step off your long-haul flight into effortless luxury. Our private ground handler greets you upon landing, assists with priority immigration formalities and baggage claims, and escorts you directly to your waiting chauffeur with iced Ceylon king coconut refreshments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#d0c5af]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>Flight Delay Monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>Personalized Nameboard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>Luggage Porterage Included</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#101419] rounded-2xl border border-[#d4af37]/20 text-center gap-4">
            <span className="text-xs text-[#99907c] uppercase tracking-wider">
              24/7 Airport Dispatch Desk
            </span>
            <span className="text-lg font-serif font-bold text-[#f2ca50]">
              +94 77 808 4913
            </span>
            <a
              href={`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=Ayubowan%20Unknown%20Travel%20%26%20Tours!%20I%20would%20like%20to%20arrange%20an%20airport%20VIP%20arrival%20transfer.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#f2ca50] text-[#3c2f00] text-xs font-semibold uppercase tracking-wider hover:bg-[#ffe088] transition-colors shadow"
            >
              Request Airport Transfer
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
