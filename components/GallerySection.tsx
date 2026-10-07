import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { ExternalLink, Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (imageUrl: string, title: string, location: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Cultural', 'Highlands', 'Wildlife', 'Coast'];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full py-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12" id="gallery">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.2em] flex items-center gap-2">
            <span className="w-6 h-px bg-[#f2ca50]" /> Visual Ledgers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e0e2ea] mt-1">
            Moments Captured Across The Island
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#f2ca50] text-xs uppercase tracking-wider hover:underline font-semibold"
          >
            <span>Follow @unknowntraveler</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#d4af37] text-[#3c2f00] shadow-sm'
                : 'bg-[#181c21] text-[#d0c5af] hover:text-[#e0e2ea] border border-[#d4af37]/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onOpenLightbox(item.imageUrl, item.title, item.location)}
            className="group relative h-80 rounded-2xl overflow-hidden bg-[#1c2025] cursor-pointer shadow-lg border border-transparent hover:border-[#f2ca50]/40 transition-all duration-300"
          >
            <img
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              src={item.imageUrl}
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101419] via-[#101419]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
              <div className="self-end p-2 rounded-full bg-[#0a0e13]/80 backdrop-blur-md text-[#f2ca50]">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div>
                <span className="text-[11px] font-semibold text-[#f2ca50] uppercase tracking-wider block">
                  {item.subtitle}
                </span>
                <span className="font-serif text-lg text-[#e0e2ea] font-medium block">
                  {item.title}
                </span>
                <span className="text-xs text-[#99907c] block mt-0.5">
                  {item.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
