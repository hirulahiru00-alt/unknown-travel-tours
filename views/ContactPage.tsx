import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ContactSection } from '../components/ContactSection';
import { ChevronDown, HelpCircle, Phone, Mail, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full py-12 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 animate-in fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
          <span className="w-6 h-px bg-[#f2ca50]" /> Concierge Desk{' '}
          <span className="w-6 h-px bg-[#f2ca50]" />
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#e0e2ea] mt-2 font-normal">
          Connect With Our Private Travel Specialists
        </h1>
        <p className="text-sm sm:text-base text-[#d0c5af] mt-2 leading-relaxed">
          From flight arrival coordination to bespoke villa reservations and private security escorts, our Colombo senior concierge desk is at your disposal 24/7.
        </p>
      </div>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Frequently Asked Questions */}
      <div className="mt-20 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#f2ca50]" />
            <span>Voyager Inquiries</span>
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#e0e2ea] mt-1 font-normal">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-[#d4af37]/20 rounded-2xl overflow-hidden bg-[#181c21]"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-[#262a30]/50 transition-colors cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg text-[#e0e2ea] font-medium pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#f2ca50] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#d0c5af] leading-relaxed border-t border-[#31353b] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
