import React, { useState } from 'react';
import { Currency } from '../types/travel';
import { ASSETS, BRAND_LOGOS } from '../data/mockData';
import { Menu, X, PhoneCall, CalendarCheck } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  onOpenBooking: (tourId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  currency,
  setCurrency,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'tours', label: 'Travel & Tours' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'photography', label: 'Unknown Studio' },
    { id: 'about-us', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e13]/95 backdrop-blur-md border-b border-[#d4af37]/20 transition-all duration-300">
        
        {/* TOP BLACK BAR */}
        <div className="w-full bg-[#05070a] border-b border-[#31353b]/60 text-xs">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-8 sm:h-9 flex items-center justify-between gap-4">
            
            {/* Upper Left Side: 3 Small Ecosystem Logos */}
            <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase overflow-x-auto whitespace-nowrap scrollbar-none py-1">
              
              {/* Logo 1: Unknown Studio */}
              <button
                type="button"
                onClick={() => handleNavClick('photography')}
                className={`transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'photography'
                    ? 'text-[#f2ca50] font-bold'
                    : 'text-[#e0e2ea] hover:text-[#f2ca50]'
                }`}
                title="Unknown Studio - Cinematography & Aerial Drone Media"
              >
                <img
                  src={BRAND_LOGOS.studio}
                  alt="Unknown Studio Logo"
                  referrerPolicy="no-referrer"
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full object-cover border border-[#f2ca50]/50 shadow-sm shrink-0"
                />
                <span className="hidden xs:inline">UNKNOWN STUDIO</span>
              </button>

              <span className="text-[#f2ca50]/60 select-none font-bold">\</span>

              {/* Logo 2: Unknown Traveler */}
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                className={`transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'home'
                    ? 'text-[#f2ca50] font-bold'
                    : 'text-[#d0c5af] hover:text-[#f2ca50]'
                }`}
                title="Unknown Traveler - Luxury Private Tours"
              >
                <img
                  src={BRAND_LOGOS.traveler}
                  alt="Unknown Traveler Logo"
                  referrerPolicy="no-referrer"
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full object-cover border border-[#f2ca50]/50 shadow-sm shrink-0"
                />
                <span className="hidden xs:inline">UNKNOWN TRAVELER</span>
              </button>

              <span className="text-[#f2ca50]/60 select-none font-bold">\</span>

              {/* Logo 3: Unknown Travels & Tours */}
              <button
                type="button"
                onClick={() => handleNavClick('tours')}
                className={`transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'tours'
                    ? 'text-[#f2ca50] font-bold'
                    : 'text-[#d0c5af] hover:text-[#f2ca50]'
                }`}
                title="Unknown Travels & Tours - Chauffeur Fleet & Itineraries"
              >
                <img
                  src={BRAND_LOGOS.travelsAndTours}
                  alt="Unknown Travels & Tours Logo"
                  referrerPolicy="no-referrer"
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full object-cover border border-[#f2ca50]/50 shadow-sm shrink-0"
                />
                <span className="hidden xs:inline text-[#f2ca50]">TRAVELS &amp; TOURS</span>
              </button>
            </div>

            {/* Upper Right Side: Concierge Hotline */}
            <div className="hidden md:flex items-center gap-3 text-[10px] sm:text-[11px] text-[#d0c5af]">
              <span className="text-[#99907c]">SLTDA Licensed Private Expeditions</span>
              <span className="text-[#31353b]">|</span>
              <a
                href="https://wa.me/94778084913?text=Ayubowan%20Unknown%20Travels%20%26%20Tours!%20I%20would%20like%20to%20inquire%20about%20a%20private%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f2ca50] font-semibold hover:text-[#ffe088] transition-colors flex items-center gap-1.5"
              >
                <span>Concierge Hotline:</span>
                <span className="text-[#e0e2ea] hover:text-[#f2ca50]">+94 77 808 4913</span>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div className="h-18 sm:h-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          
          {/* Brand Wordmark Title: Unknown Travels & Tours */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group cursor-pointer py-1"
          >
            <img
              src={BRAND_LOGOS.travelsAndTours}
              alt="Unknown Travels & Tours Logo"
              referrerPolicy="no-referrer"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-[#f2ca50]/60 shadow-md group-hover:scale-105 transition-transform shrink-0"
            />
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-[#e0e2ea] uppercase group-hover:text-[#f2ca50] transition-colors leading-tight">
              Unknown Travels <span className="text-[#f2ca50] font-normal">&amp;</span> Tours
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[13px] tracking-wider uppercase py-1.5 transition-all cursor-pointer font-medium ${
                    isActive
                      ? 'text-[#f2ca50] border-b-2 border-[#f2ca50]'
                      : 'text-[#d0c5af] hover:text-[#f2ca50]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: Currency Toggle, Book CTA, Mobile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Currency Selector */}
            <div className="flex items-center bg-[#181c21] border border-[#d4af37]/30 rounded-full p-0.5 shadow-inner">
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#d4af37] text-[#3c2f00] shadow-sm'
                    : 'text-[#d0c5af] hover:text-[#e0e2ea]'
                }`}
              >
                USD $
              </button>
              <button
                type="button"
                onClick={() => setCurrency('LKR')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider transition-all cursor-pointer ${
                  currency === 'LKR'
                    ? 'bg-[#d4af37] text-[#3c2f00] shadow-sm'
                    : 'text-[#d0c5af] hover:text-[#e0e2ea]'
                }`}
              >
                LKR Rs.
              </button>
            </div>

            {/* Book Now Primary Button */}
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-br from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] font-semibold text-[11px] tracking-widest shadow-[0_8px_24px_-4px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-4px_rgba(212,175,55,0.5)] transition-all uppercase cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>

            {/* Fast Concierge WhatsApp Link */}
            <a
              href="https://wa.me/94778084913?text=Ayubowan%20Unknown%20Traveler,%20I%20would%20like%20to%20inquire%20about%20a%20private%20luxury%20tour."
              target="_blank"
              rel="noopener noreferrer"
              title="Direct Concierge WhatsApp (+94 77 808 4913)"
              className="w-8 h-8 rounded-full bg-[#f2ca50] flex items-center justify-center shrink-0 text-[#3c2f00] hover:scale-105 transition-transform"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#d0c5af] hover:text-[#f2ca50] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0e13]/95 backdrop-blur-xl xl:hidden pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] uppercase tracking-widest text-[#f2ca50] font-semibold">
              Bespoke Navigation
            </span>
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-lg font-serif tracking-wide py-2.5 border-b border-[#31353b] transition-colors cursor-pointer ${
                    isActive ? 'text-[#f2ca50] pl-2 font-semibold' : 'text-[#e0e2ea]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#e7c35a] via-[#d4af37] to-[#896c00] text-[#3c2f00] text-center font-semibold text-xs tracking-widest uppercase shadow-lg"
            >
              Book Bespoke Tour
            </button>
            <p className="text-center text-xs text-[#99907c]">
              24/7 Private Concierge: +94 77 808 4913
            </p>
          </div>
        </div>
      )}
    </>
  );
};
