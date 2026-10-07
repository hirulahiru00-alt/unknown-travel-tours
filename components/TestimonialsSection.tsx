import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#0a0e13] border-y border-[#d4af37]/15">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#f2ca50]" /> Guest Memoirs{' '}
            <span className="w-6 h-px bg-[#f2ca50]" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e0e2ea] mt-2 font-normal">
            Words From Our Private Voyagers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#181c21] border border-[#d4af37]/20 rounded-2xl p-6 flex flex-col justify-between gap-6 hover:border-[#d4af37]/50 transition-colors shadow-lg"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1 text-[#f2ca50]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f2ca50] text-[#f2ca50]" />
                  ))}
                </div>

                <p className="text-sm sm:text-[15px] text-[#e0e2ea] italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#d4af37]/15">
                <h5 className="font-serif text-lg text-[#e0e2ea] font-medium">
                  {item.author}
                </h5>
                <span className="text-xs text-[#f2ca50] font-semibold block mt-0.5">
                  {item.origin} • {item.tourName}
                </span>
                <span className="text-[11px] text-[#99907c] block mt-0.5">
                  Travel Date: {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
