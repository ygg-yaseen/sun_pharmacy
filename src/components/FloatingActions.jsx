import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/pharmacyData';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent('Hello Sun Pharmacy, I would like to make an inquiry.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-lg shadow-emerald-600/30 transition-all transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
}
