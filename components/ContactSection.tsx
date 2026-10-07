import React, { useState, useEffect } from 'react';
import { ASSETS } from '../data/mockData';
import { MessageSquare, Mail, Camera, Send, CheckCircle2, MapPin, Clock, Sun, CloudRain } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2 Guests (Couple)');
  const [interest, setInterest] = useState('Full Island Highlights Grand Expedition (7-14 Days)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sri Lanka Local Time (GMT+5:30)
  const [slTime, setSlTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Colombo timezone
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setSlTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/94778084913?text=${encodeURIComponent(
    `Hello Unknown Traveler Concierge! My name is ${name || 'Guest'}. I am planning a private tour for ${guests} around ${date || 'upcoming dates'}. Interested in: ${interest}. Notes: ${notes || 'None'}`
  )}`;

  return (
    <section className="w-full py-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12" id="contact-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Concierge Info, Time & Island Route Map */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center gap-2">
              <span className="w-6 h-px bg-[#f2ca50]" /> Private Concierge Desk
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#e0e2ea] mt-1 font-medium">
              Let's Shape Your Itinerary
            </h2>
            <p className="text-xs sm:text-sm text-[#d0c5af] mt-2 leading-relaxed">
              Connect with our local expedition directors directly. We accommodate bespoke flight arrival transfers, VIP helicopter island transits, and private security upon request.
            </p>
          </div>

          {/* Colombo Live Local Time Card */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#181c21] border border-[#d4af37]/25 shadow-sm">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#f2ca50]" />
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#99907c] tracking-wider block">
                  Sri Lanka Island Time (GMT +5:30)
                </span>
                <span className="font-mono text-base font-bold text-[#e0e2ea] tracking-wider">
                  {slTime || '11:30 AM'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#f2ca50] bg-[#f2ca50]/10 px-2.5 py-1 rounded-full border border-[#f2ca50]/20">
              <Sun className="w-3.5 h-3.5" />
              <span>Tropical 29°C</span>
            </div>
          </div>

          {/* Concierge Channels */}
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/94778084913"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#181c21] border border-[#d4af37]/15 hover:border-[#f2ca50] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50] group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#99907c]">
                  WhatsApp Direct (Fastest)
                </span>
                <span className="text-sm font-semibold text-[#e0e2ea] group-hover:text-[#f2ca50] transition-colors">
                  +94 77 808 4913 (Instant Reply)
                </span>
              </div>
            </a>

            <a
              href="mailto:info@unknowntraveler.lk"
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[#181c21] border border-[#d4af37]/15 hover:border-[#f2ca50] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50] group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#99907c]">
                  Email Inquiry Desk
                </span>
                <span className="text-sm font-semibold text-[#e0e2ea] group-hover:text-[#f2ca50] transition-colors">
                  info@unknowntraveler.lk
                </span>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#181c21] border border-[#d4af37]/15">
              <div className="w-10 h-10 rounded-full bg-[#f2ca50]/10 flex items-center justify-center text-[#f2ca50]">
                <Camera className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#99907c]">
                  Instagram Concierge
                </span>
                <span className="text-sm font-semibold text-[#e0e2ea]">
                  @unknowntraveler
                </span>
              </div>
            </div>
          </div>

          {/* Stylized Island Route Map Visual */}
          <div
            className="w-full h-56 rounded-2xl bg-[#1c2025] overflow-hidden relative border border-[#d4af37]/20 flex flex-col justify-end p-4 shadow-inner"
            style={{
              backgroundImage: `url('${ASSETS.routeMap}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-[#0a0e13]/80 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <MapPin className="w-8 h-8 text-[#f2ca50] animate-pulse" />
                <span className="text-[11px] font-semibold text-[#e0e2ea] uppercase tracking-widest">
                  Active Waypoints Across Sri Lanka
                </span>
                <span className="text-xs text-[#f2ca50] font-medium max-w-sm">
                  Colombo • Sigiriya • Kandy • Nuwara Eliya • Ella • Yala • Galle
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7 bg-[#181c21] border border-[#d4af37]/25 rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-2xl text-[#e0e2ea] font-medium mb-1">
              Direct Expedition Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#d0c5af] mb-6 leading-relaxed">
              Fill out this quick dossier and we will prepare a tailored itinerary with confirmed hotel rates.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#e0e2ea] block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Lord / Lady / Mr / Ms..."
                      className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#e0e2ea] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@domain.com"
                      className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#e0e2ea] block mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+Country Code"
                      className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#e0e2ea] block mb-1">
                      Approx. Travel Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#e0e2ea] block mb-1">
                      Total Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option>1 Guest (Solo)</option>
                      <option>2 Guests (Couple)</option>
                      <option>3-4 Guests (Small Group)</option>
                      <option>5+ Guests (Family / Entourage)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#e0e2ea] block mb-1">
                    Primary Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option>Full Island Highlights Grand Expedition (7-14 Days)</option>
                    <option>Cultural Triangle &amp; Sigiriya Heritage Exploration</option>
                    <option>Highlands Tea Estates &amp; Scenic Rail Escape</option>
                    <option>Yala Safari &amp; South Coast Beach Retreat</option>
                    <option>Cinematic Photography &amp; Honeymoon Tour (Unknown Studio)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#e0e2ea] block mb-1">
                    Custom Notes / Special Desires
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us any specific requirements: dietary wishes, favorite boutique hotel brands, preferred pace..."
                    className="w-full bg-[#1c2025] border border-[#d4af37]/20 rounded-xl px-4 py-2.5 text-[#e0e2ea] text-xs sm:text-sm focus:border-[#f2ca50] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] text-xs font-semibold tracking-widest uppercase shadow-[0_12px_32px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
                >
                  <span>Send Private Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-8 rounded-2xl bg-[#1c2025] border border-[#f2ca50]/40 text-center flex flex-col items-center gap-3 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#f2ca50]" />
                <h4 className="font-serif text-2xl text-[#e0e2ea] font-medium">
                  Inquiry Received With Honor
                </h4>
                <p className="text-sm text-[#d0c5af] leading-relaxed max-w-md">
                  Thank you, <strong className="text-[#f2ca50]">{name}</strong>. Our senior Ceylon travel specialist will review your request and get back to you at <strong className="text-[#e0e2ea]">{email}</strong> within 3 hours.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full justify-center">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#f2ca50] text-[#3c2f00] text-xs font-semibold uppercase tracking-wider shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#262a30] text-[#e0e2ea] text-xs font-semibold uppercase tracking-wider hover:bg-[#31353b]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
