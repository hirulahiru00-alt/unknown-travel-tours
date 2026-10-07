import React, { useState } from 'react';
import { Currency } from '../types/travel';
import { USD_TO_LKR_RATE } from '../data/mockData';
import { Sparkles, Send, CheckCircle, MessageSquare, ShieldCheck, Clock, Calculator } from 'lucide-react';

interface TripPlannerSectionProps {
  currency: Currency;
  initialTourTitle?: string;
}

export const TripPlannerSection: React.FC<TripPlannerSectionProps> = ({
  currency,
  initialTourTitle,
}) => {
  const [duration, setDuration] = useState<string>('7 Days');
  const [style, setStyle] = useState<'Ultra-Luxury' | 'Boutique Comfort' | 'Curated Explorer'>('Ultra-Luxury');
  const [inclusions, setInclusions] = useState<string[]>([
    'Beaches & Galle',
    'Wildlife Safaris',
    'Heritage & Culture',
    'Ceylon Gastronomy',
    'Unknown Studio Media',
  ]);
  const [guests, setGuests] = useState<number>(2);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [travelDate, setTravelDate] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const durationOptions = ['3 Days', '5 Days', '7 Days', '10 Days', '14+ Days'];

  const allInclusions = [
    'Beaches & Galle',
    'Wildlife Safaris',
    'Mountain Treks',
    'Heritage & Culture',
    'Adventure & Hiking',
    'Ceylon Gastronomy',
    'Unknown Studio Media',
    'Hidden Gems',
  ];

  const toggleInclusion = (item: string) => {
    if (inclusions.includes(item)) {
      setInclusions(inclusions.filter((i) => i !== item));
    } else {
      setInclusions([...inclusions, item]);
    }
  };

  // Dynamic estimate calculation
  const getEstimatedPriceUSD = () => {
    let basePerDay = 180;
    if (style === 'Ultra-Luxury') basePerDay = 240;
    if (style === 'Curated Explorer') basePerDay = 150;

    let days = 7;
    if (duration === '3 Days') days = 3;
    if (duration === '5 Days') days = 5;
    if (duration === '7 Days') days = 7;
    if (duration === '10 Days') days = 10;
    if (duration === '14+ Days') days = 14;

    let total = basePerDay * days * guests;
    if (inclusions.includes('Unknown Studio Media')) total += 450;
    if (inclusions.includes('Wildlife Safaris')) total += 120 * guests;
    return total;
  };

  const estimatedUSD = getEstimatedPriceUSD();
  const displayEstimate =
    currency === 'LKR'
      ? `LKR Rs. ${(estimatedUSD * USD_TO_LKR_RATE).toLocaleString()}`
      : `USD $${estimatedUSD.toLocaleString()}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Ayubowan Unknown Traveler Concierge! I just designed a bespoke trip:\n` +
      `• Duration: ${duration}\n` +
      `• Style: ${style}\n` +
      `• Guests: ${guests}\n` +
      `• Highlights: ${inclusions.join(', ')}\n` +
      `• Name: ${fullName || 'Guest'}\n` +
      `• Est. Budget: ${displayEstimate}\n` +
      `Please connect with my custom proposal.`
  );

  return (
    <section className="w-full py-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12" id="trip-planner">
      <div className="relative bg-[#181c21]/80 backdrop-blur-2xl border border-[#d4af37]/30 rounded-3xl p-6 sm:p-10 md:p-14 overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)]">
        
        {/* Ambient Glow Orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#f2ca50]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#e7c35a]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="relative z-10 max-w-3xl mx-auto text-center mb-10">
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#f2ca50]" /> Bespoke Travel Curation{' '}
            <span className="w-6 h-px bg-[#f2ca50]" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#e0e2ea] mt-2 font-normal">
            “YOUR TRIP. YOUR WAY.”
          </h2>
          <p className="text-sm sm:text-base text-[#d0c5af] mt-2 leading-relaxed">
            Select your travel rhythm and desires. Our senior concierge crafts a personalized proposal within 3 hours.
          </p>

          {initialTourTitle && (
            <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-[#f2ca50]/15 border border-[#f2ca50]/40 text-[#f2ca50] text-xs font-semibold">
              Configuring itinerary based on: {initialTourTitle}
            </div>
          )}
        </div>

        {/* Form Container */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="relative z-10 max-w-4xl mx-auto flex flex-col gap-8">
            
            {/* 1. Duration Selector */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider">
                  1. Expedition Duration
                </label>
                <span className="text-[11px] text-[#f2ca50] font-medium">Flexible pacing</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {durationOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setDuration(opt)}
                    className={`p-3 rounded-xl text-center text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                      duration === opt
                        ? 'border border-[#f2ca50] bg-[#f2ca50]/15 text-[#f2ca50] shadow-sm'
                        : 'bg-[#1c2025] border border-[#d4af37]/20 text-[#e0e2ea] hover:border-[#f2ca50]/40'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Travel Style */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider">
                2. Hospitality &amp; Experience Style
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div
                  onClick={() => setStyle('Ultra-Luxury')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                    style === 'Ultra-Luxury'
                      ? 'border-[#f2ca50] bg-[#f2ca50]/10 shadow-[0_4px_20px_rgba(212,175,55,0.15)]'
                      : 'bg-[#1c2025] border-[#d4af37]/20 hover:border-[#d4af37]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg text-[#f2ca50] font-semibold">
                      Ultra-Luxury
                    </span>
                    <Sparkles className="w-4 h-4 text-[#f2ca50]" />
                  </div>
                  <span className="text-xs text-[#d0c5af] leading-relaxed">
                    5-star historic villas, tea bungalows, private chauffeur-concierge
                  </span>
                </div>

                <div
                  onClick={() => setStyle('Boutique Comfort')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                    style === 'Boutique Comfort'
                      ? 'border-[#f2ca50] bg-[#f2ca50]/10 shadow-[0_4px_20px_rgba(212,175,55,0.15)]'
                      : 'bg-[#1c2025] border-[#d4af37]/20 hover:border-[#d4af37]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg text-[#e0e2ea] font-semibold">
                      Boutique Comfort
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#d0c5af]" />
                  </div>
                  <span className="text-xs text-[#d0c5af] leading-relaxed">
                    Intimate design hotels, eco-lodges, curated regional authenticity
                  </span>
                </div>

                <div
                  onClick={() => setStyle('Curated Explorer')}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                    style === 'Curated Explorer'
                      ? 'border-[#f2ca50] bg-[#f2ca50]/10 shadow-[0_4px_20px_rgba(212,175,55,0.15)]'
                      : 'bg-[#1c2025] border-[#d4af37]/20 hover:border-[#d4af37]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg text-[#e0e2ea] font-semibold">
                      Curated Explorer
                    </span>
                    <Clock className="w-4 h-4 text-[#d0c5af]" />
                  </div>
                  <span className="text-xs text-[#d0c5af] leading-relaxed">
                    High flexibility, scenic trekking, photography-focused routing
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Desired Highlights & Inclusions */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider">
                3. Desired Highlights &amp; Inclusions
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {allInclusions.map((item) => {
                  const isChecked = inclusions.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInclusion(item)}
                      className={`flex items-center gap-2 p-3 rounded-xl border transition-all text-left cursor-pointer ${
                        isChecked
                          ? 'border-[#f2ca50] bg-[#f2ca50]/15 text-[#f2ca50]'
                          : 'bg-[#1c2025] border-[#d4af37]/15 text-[#e0e2ea] hover:border-[#f2ca50]/40'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="rounded w-3.5 h-3.5 accent-[#f2ca50] cursor-pointer shrink-0"
                      />
                      <span className={`text-xs ${item === 'Unknown Studio Media' ? 'font-semibold text-[#f2ca50]' : ''}`}>
                        {item}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Travelers & Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Lord / Lady / Mr / Ms..."
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="concierge@private.com"
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider block mb-1">
                  WhatsApp / Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+44 7000 000000"
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider block mb-1">
                  Total Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value={1}>1 Guest (Solo Traveler)</option>
                  <option value={2}>2 Guests (Couple)</option>
                  <option value={3}>3 Guests (Small Group)</option>
                  <option value={4}>4 Guests (Family)</option>
                  <option value={6}>6+ Guests (VIP Entourage)</option>
                </select>
              </div>
            </div>

            {/* Travel Date & Special Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider block mb-1">
                  Target Travel Date
                </label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider block mb-1">
                  Specific Requests (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Anniversary celebration, tea bungalow stay, vegetarian..."
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Dynamic Estimated Quotation Banner */}
            <div className="p-4 rounded-2xl bg-[#1c2025] border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-5 h-5 text-[#f2ca50]" />
                <div>
                  <span className="text-[11px] text-[#99907c] uppercase font-semibold block">
                    Estimated Custom Expedition Rate ({guests} Guests)
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-[#f2ca50] font-semibold">
                    {displayEstimate}
                  </span>
                </div>
              </div>
              <span className="text-xs text-[#d0c5af] text-center sm:text-right">
                Includes private chauffeur, fuel, luxury accommodation &amp; selected highlights
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] text-xs font-semibold tracking-widest uppercase shadow-[0_12px_32px_rgba(212,175,55,0.35)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get My Custom Itinerary</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* Planner Success State */
          <div className="p-8 sm:p-12 rounded-2xl bg-[#1c2025] text-center flex flex-col items-center gap-4 border border-[#f2ca50]/40 max-w-2xl mx-auto animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50]">
              <CheckCircle className="w-9 h-9" />
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#e0e2ea] font-medium">
              Your Request Is With Our Senior Concierge
            </h3>

            <p className="text-sm text-[#d0c5af] max-w-lg leading-relaxed">
              Ayubowan {fullName || 'Valued Guest'}! Our private travel designer has received your{' '}
              <strong className="text-[#f2ca50]">{duration} {style}</strong> inquiry ({guests} guests). We are curating your day-by-day itinerary and will connect with you via WhatsApp and email within 3 hours.
            </p>

            <div className="p-3 bg-[#101419] rounded-xl border border-[#d4af37]/20 text-xs text-[#d0c5af] w-full">
              Estimated Budget Guide: <strong className="text-[#f2ca50]">{displayEstimate}</strong>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center pt-2">
              <a
                href={`https://wa.me/94778084913?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#f2ca50] text-[#3c2f00] text-xs font-semibold uppercase tracking-wider hover:bg-[#ffe088] transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Fast-Track Via WhatsApp (+94 77 808 4913)</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-full bg-[#262a30] text-[#e0e2ea] text-xs font-semibold uppercase tracking-wider hover:bg-[#31353b] transition-colors"
              >
                Modify Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
