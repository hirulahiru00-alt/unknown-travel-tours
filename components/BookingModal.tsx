import React, { useState } from 'react';
import { TourPackage, Currency } from '../types/travel';
import { TOURS, USD_TO_LKR_RATE, PHOTOGRAPHY_PACKAGES } from '../data/mockData';
import { X, Calendar, Users, CheckCircle2, MessageSquare, ShieldCheck, Sparkles, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  initialTourId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialTourId,
}) => {
  const [selectedTourId, setSelectedTourId] = useState<string>(
    initialTourId || TOURS[0].id
  );
  const [travelDate, setTravelDate] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [hotelTier, setHotelTier] = useState<'Ultra-Luxury' | 'Boutique' | 'Comfort'>('Ultra-Luxury');
  const [includePhotography, setIncludePhotography] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [confirmed, setConfirmed] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentTour = TOURS.find((t) => t.id === selectedTourId) || TOURS[0];

  // Dynamic price calculation
  const calculateTotalUSD = () => {
    let base = currentTour.startingPriceUSD * guests;
    if (hotelTier === 'Ultra-Luxury') base += 80 * currentTour.durationDays * guests;
    if (includePhotography) base += 580; // Gold Unknown Studio package
    return base;
  };

  const totalUSD = calculateTotalUSD();
  const displayTotal =
    currency === 'LKR'
      ? `LKR Rs. ${(totalUSD * USD_TO_LKR_RATE).toLocaleString()}`
      : `USD $${totalUSD.toLocaleString()}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Ayubowan! I am booking the ${currentTour.title} (${currentTour.durationLabel})\n` +
      `• Date: ${travelDate || 'Flexible'}\n` +
      `• Guests: ${guests}\n` +
      `• Hotel Tier: ${hotelTier}\n` +
      `• Unknown Studio Photography: ${includePhotography ? 'YES' : 'No'}\n` +
      `• Total Estimate: ${displayTotal}\n` +
      `• Lead Guest: ${fullName || 'Guest'}\n` +
      `Please confirm my luxury reservation.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#181c21] border border-[#d4af37]/35 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto">
        
        {/* Header */}
        <div className="p-6 bg-[#101419] border-b border-[#31353b] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-semibold text-[#f2ca50] tracking-widest block">
              Direct Reservation
            </span>
            <h3 className="font-serif text-2xl text-[#e0e2ea] font-medium">
              Bespoke Tour Booking
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#1c2025] text-[#d0c5af] hover:text-[#f2ca50] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!confirmed ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto max-h-[75vh]">
            
            {/* Tour Selection */}
            <div>
              <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider block mb-1.5">
                Select Private Itinerary
              </label>
              <select
                value={selectedTourId}
                onChange={(e) => setSelectedTourId(e.target.value)}
                className="w-full bg-[#1c2025] border border-[#d4af37]/25 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors cursor-pointer"
              >
                {TOURS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.title} ({t.durationLabel})
                  </option>
                ))}
              </select>
            </div>

            {/* Travel Date & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider block mb-1.5">
                  Travel Date *
                </label>
                <input
                  type="date"
                  required
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-[#1c2025] border border-[#d4af37]/25 rounded-xl px-4 py-2 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider block mb-1.5">
                  Number of Guests
                </label>
                <div className="flex items-center bg-[#1c2025] border border-[#d4af37]/25 rounded-xl p-1">
                  {[1, 2, 3, 4, 6].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        guests === num
                          ? 'bg-[#d4af37] text-[#3c2f00]'
                          : 'text-[#d0c5af] hover:text-[#e0e2ea]'
                      }`}
                    >
                      {num === 6 ? '6+' : num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hotel Tier */}
            <div>
              <label className="text-xs font-semibold text-[#e0e2ea] uppercase tracking-wider block mb-1.5">
                Preferred Hotel Tier
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'Ultra-Luxury', label: '5-Star Villas' },
                  { id: 'Boutique', label: 'Boutique Design' },
                  { id: 'Comfort', label: 'Heritage Comfort' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setHotelTier(tier.id as any)}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all text-center cursor-pointer ${
                      hotelTier === tier.id
                        ? 'border-[#f2ca50] bg-[#f2ca50]/15 text-[#f2ca50]'
                        : 'border-[#31353b] bg-[#1c2025] text-[#d0c5af]'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Unknown Studio Photography Toggle */}
            <div className="p-3.5 rounded-xl bg-[#1c2025] border border-[#d4af37]/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#f2ca50]" />
                <div>
                  <span className="text-xs font-semibold text-[#e0e2ea] block">
                    Include Unknown Studio 4K Cine &amp; Drone Shoot
                  </span>
                  <span className="text-[11px] text-[#99907c]">
                    Adds dedicated drone pilot &amp; editorial travel reel
                  </span>
                </div>
              </div>
              <input
                type="checkbox"
                checked={includePhotography}
                onChange={(e) => setIncludePhotography(e.target.checked)}
                className="w-4 h-4 accent-[#f2ca50] cursor-pointer"
              />
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] font-semibold uppercase text-[#e0e2ea] block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Primary Traveler"
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-3 py-2 text-[#e0e2ea] text-xs focus:border-[#f2ca50] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase text-[#e0e2ea] block mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="guest@mail.com"
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-3 py-2 text-[#e0e2ea] text-xs focus:border-[#f2ca50] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase text-[#e0e2ea] block mb-1">
                  WhatsApp / Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+Country Code"
                  className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-3 py-2 text-[#e0e2ea] text-xs focus:border-[#f2ca50] focus:outline-none"
                />
              </div>
            </div>

            {/* Price Preview */}
            <div className="p-4 rounded-2xl bg-[#101419] border border-[#d4af37]/30 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase font-semibold text-[#99907c] block">
                  Estimated Total ({guests} Guests)
                </span>
                <span className="font-serif text-2xl text-[#f2ca50] font-semibold">
                  {displayTotal}
                </span>
              </div>
              <span className="text-[11px] text-[#d0c5af] text-right">
                All taxes, dedicated chauffeur &amp; entries included
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] text-xs font-semibold tracking-widest uppercase shadow-lg hover:scale-101 transition-transform flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Confirm &amp; Transmit Booking Dossier</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          /* Confirmation Success State */
          <div className="p-8 text-center flex flex-col items-center gap-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#f2ca50]/20 flex items-center justify-center text-[#f2ca50]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="font-serif text-2xl text-[#e0e2ea] font-medium">
              Reservation Transmitted
            </h4>

            <p className="text-xs sm:text-sm text-[#d0c5af] max-w-md leading-relaxed">
              Ayubowan <strong className="text-[#f2ca50]">{fullName}</strong>! Your reservation dossier for{' '}
              <strong className="text-[#e0e2ea]">{currentTour.title}</strong> has been secured in our private concierge ledger. A booking director will contact you via WhatsApp (+94 77 808 4913) within 3 hours.
            </p>

            <div className="p-3 bg-[#101419] rounded-xl border border-[#d4af37]/20 text-xs text-[#d0c5af] w-full max-w-sm">
              Estimated Total: <strong className="text-[#f2ca50]">{displayTotal}</strong>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/94778084913?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#f2ca50] text-[#3c2f00] text-xs font-semibold uppercase tracking-wider shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#262a30] text-[#e0e2ea] text-xs font-semibold uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
