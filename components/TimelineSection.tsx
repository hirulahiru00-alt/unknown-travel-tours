import React from 'react';

export const TimelineSection: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: 'Tell Us Your Plan',
      desc: 'Share your dates, traveler count, preferred rhythm, and must-see island dream landmarks.',
    },
    {
      num: 2,
      title: 'We Design It',
      desc: 'Our local travel designers build a tailored day-by-day itinerary with boutique stays and private access.',
    },
    {
      num: 3,
      title: 'Confirm Booking',
      desc: 'Review transparent pricing in USD or LKR, adjust details seamlessly, and secure your voyage with peace of mind.',
    },
    {
      num: 4,
      title: 'Explore Sri Lanka',
      desc: 'Touch down in Colombo, meet your dedicated chauffeur-guide, and immerse yourself in pure island serenity.',
    },
  ];

  return (
    <section className="w-full py-20 bg-[#0a0e13] border-y border-[#d4af37]/15">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#f2ca50]" /> Four Steps to Paradise{' '}
            <span className="w-6 h-px bg-[#f2ca50]" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e0e2ea] mt-2 font-normal">
            The Journey Architecture
          </h2>
        </div>

        {/* Timeline Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-[#f2ca50]/10 via-[#f2ca50]/40 to-[#f2ca50]/10 z-0" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="relative z-10 bg-[#181c21] border border-[#d4af37]/20 rounded-2xl p-6 flex flex-col items-start gap-3 shadow-lg hover:border-[#f2ca50]/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#d4af37] text-[#3c2f00] font-serif text-lg font-bold flex items-center justify-center shadow-md">
                {step.num}
              </div>
              <h4 className="font-serif text-xl text-[#e0e2ea] font-medium">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#d0c5af] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
