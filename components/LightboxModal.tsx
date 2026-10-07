import React from 'react';
import { X, MapPin } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  location: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  location,
}) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center cursor-default"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-[#d0c5af] hover:text-[#f2ca50] transition-colors cursor-pointer"
          aria-label="Close image preview"
        >
          <X className="w-6 h-6" />
        </button>

        <img
          alt={title}
          src={imageUrl}
          className="max-h-[75vh] w-auto object-contain rounded-2xl border border-[#d4af37]/30 shadow-2xl"
        />

        <div className="mt-4 text-center">
          <h4 className="font-serif text-xl sm:text-2xl text-[#e0e2ea] font-medium">
            {title}
          </h4>
          <p className="text-xs text-[#f2ca50] flex items-center justify-center gap-1.5 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
