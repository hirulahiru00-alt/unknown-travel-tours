import React from 'react';
import { ASSETS, BRAND_LOGOS } from '../data/mockData';
import { Phone, Mail, Camera, PlayCircle, Instagram, Globe, Youtube, Shield, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#070a0e] border-t border-[#d4af37]/25 pt-16 pb-12 text-[#e0e2ea]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* 3 LOGOS DIVISION SHOWCASE (PAGE LAST) */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#14181d] via-[#101419] to-[#14181d] border border-[#d4af37]/30 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#31353b]/60">
            <div>
              <span className="text-[10px] sm:text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] block">
                The Unknown Collective
              </span>
              <h3 className="font-serif text-xl sm:text-3xl text-[#e0e2ea] mt-1 font-normal">
                Three Distinct Divisions. One Standard of Excellence.
              </h3>
            </div>
            <span className="text-xs text-[#99907c] max-w-xs sm:text-right">
              Explore our full ecosystem of cinematic media, private journeys, and luxury chauffeur transport.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Division 1: Unknown Studio */}
            <div
              onClick={() => {
                onNavigate('photography');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-5 rounded-2xl bg-[#181c21] border border-[#31353b]/60 hover:border-[#f2ca50] transition-all cursor-pointer group flex items-start gap-4 shadow-md"
            >
              <img
                src={BRAND_LOGOS.studio}
                alt="Unknown Studio Logo"
                referrerPolicy="no-referrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-[#f2ca50]/50 p-1 bg-[#0a0e13] shadow-md group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#e0e2ea] group-hover:text-[#f2ca50] transition-colors truncate">
                    Unknown Studio
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-[#99907c] group-hover:text-[#f2ca50] transition-colors shrink-0" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#f2ca50] block mt-0.5">
                  Cine &amp; Photography
                </span>
                <p className="text-xs text-[#99907c] mt-2 line-clamp-2 leading-relaxed">
                  Editorial 8K cinema, aerial drone flights, and fine-art heirloom photography across Sri Lanka.
                </p>
              </div>
            </div>

            {/* Division 2: Unknown Traveler */}
            <div
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-5 rounded-2xl bg-[#181c21] border border-[#31353b]/60 hover:border-[#f2ca50] transition-all cursor-pointer group flex items-start gap-4 shadow-md"
            >
              <img
                src={BRAND_LOGOS.traveler}
                alt="Unknown Traveler Logo"
                referrerPolicy="no-referrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-[#f2ca50]/50 p-1 bg-[#0a0e13] shadow-md group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#e0e2ea] group-hover:text-[#f2ca50] transition-colors truncate">
                    Unknown Traveler
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-[#99907c] group-hover:text-[#f2ca50] transition-colors shrink-0" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#f2ca50] block mt-0.5">
                  Luxury Private Expeditions
                </span>
                <p className="text-xs text-[#99907c] mt-2 line-clamp-2 leading-relaxed">
                  “Collect moments, not things.” Handcrafted multi-day luxury island circuits and private villa stays.
                </p>
              </div>
            </div>

            {/* Division 3: Unknown Travels & Tours */}
            <div
              onClick={() => {
                onNavigate('tours');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-5 rounded-2xl bg-[#181c21] border border-[#f2ca50]/40 ring-1 ring-[#f2ca50]/30 hover:border-[#f2ca50] transition-all cursor-pointer group flex items-start gap-4 shadow-md"
            >
              <img
                src={BRAND_LOGOS.travelsAndTours}
                alt="Unknown Travels & Tours Logo"
                referrerPolicy="no-referrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-[#f2ca50] p-1 bg-[#0a0e13] shadow-md group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-base sm:text-lg font-semibold text-[#e0e2ea] group-hover:text-[#f2ca50] transition-colors truncate">
                    Unknown Travels &amp; Tours
                  </h4>
                  <ArrowUpRight className="w-4 h-4 text-[#f2ca50] shrink-0" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#f2ca50] block mt-0.5">
                  Chauffeur Fleet &amp; Transfers
                </span>
                <p className="text-xs text-[#99907c] mt-2 line-clamp-2 leading-relaxed">
                  Explore • Experience • Discover. SLTDA licensed private chauffeur fleet, airport transfers &amp; island itineraries.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#d4af37]/15">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Unknown Travels & Tours Logo"
                className="h-10 w-10 rounded-full object-cover border border-[#f2ca50]/60 shadow-md"
                src={BRAND_LOGOS.travelsAndTours}
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-xl uppercase tracking-wider text-[#e0e2ea] font-semibold">
                Unknown Travels <span className="text-[#f2ca50]">&amp;</span> Tours
              </span>
            </div>
            <p className="text-sm text-[#d0c5af] max-w-sm leading-relaxed">
              Sri Lanka Private Tours &amp; Travel Experiences. Bespoke expeditions curated for discerning travelers seeking discreet island luxury.
            </p>
            <p className="font-serif text-lg italic text-[#f2ca50]">
              Discover Sri Lanka Your Way
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-widest">
              Quick Links
            </span>
            <nav className="flex flex-col gap-2.5">
              {[
                { id: 'home', label: 'Home' },
                { id: 'tours', label: 'Unknown Travel & Tours' },
                { id: 'destinations', label: 'Destinations' },
                { id: 'photography', label: 'Unknown Studio' },
                { id: 'about-us', label: 'About Us' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left text-sm text-[#d0c5af] hover:text-[#f2ca50] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Col 3: Private Concierge & Enquiries */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-widest">
              Private Concierge &amp; Enquiries
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#d0c5af]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>WhatsApp: +94 77 808 4913</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>info@unknowntraveler.lk</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>@unknowntraveler</span>
              </div>
              <div className="flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>Unknown Traveler Cine</span>
              </div>
            </div>

            {/* Social Ledgers */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#99907c] block mb-2 font-medium">
                Expedition Social Ledgers
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#181c21] border border-[#d4af37]/20 flex items-center justify-center text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#f2ca50] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://unknowntraveler.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#181c21] border border-[#d4af37]/20 flex items-center justify-center text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#f2ca50] transition-all"
                  aria-label="Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#181c21] border border-[#d4af37]/20 flex items-center justify-center text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#f2ca50] transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-[#99907c]">
            © {new Date().getFullYear()} Unknown Travels &amp; Tours. All Rights Reserved. Private Tours, Chauffeur Fleet &amp; Bespoke Journeys Sri Lanka.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#99907c]">
            <button
              onClick={() => alert('Privacy Policy: All guest itineraries, passport details, and travel manifests are handled under strict confidentiality.')}
              className="hover:text-[#f2ca50] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-[#d4af37]/40">•</span>
            <button
              onClick={() => alert('Terms of Service: Private chauffeur-guide services include full insurance coverage and SLTDA compliance.')}
              className="hover:text-[#f2ca50] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
