import React from 'react';
import { MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/pharmacyData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFBFB] via-white to-[#F8FAF9] pt-12 pb-16 sm:py-20 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-800 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#008f82]" />
          <span>UAE Community Healthcare Group • صيدلية صن</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Dedicated Healthcare, Clinical Excellence & Everyday Wellness.
        </h1>

        {/* Refined Subtitle without counts */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Welcome to <strong className="text-slate-900">Sun Pharmacy</strong>. With established branches across <strong className="text-slate-900">Dubai</strong> and <strong className="text-slate-900">Sharjah</strong>, we provide hospital-grade prescription dispensation, verified clinical skincare, and dedicated patient care.
        </p>

        {/* Direct Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#branches"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#008f82] hover:bg-[#00766b] text-white text-sm font-semibold shadow-sm transition-all"
          >
            <MapPin className="w-4 h-4" />
            <span>Our Branches</span>
            <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
          </a>

          <a
            href={`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent('Hello Sun Pharmacy, I would like to make an inquiry.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-sm font-semibold transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Contact on WhatsApp</span>
          </a>
        </div>

        {/* Simple Clean Metrics Bar without counts */}
        <div className="mt-14 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
          <div className="p-3">
            <div className="text-2xl font-black text-[#008f82]">Dubai & Sharjah</div>
            <div className="text-xs text-slate-500 mt-0.5">Prime Branch Locations</div>
          </div>

          <div className="p-3">
            <div className="text-2xl font-black text-slate-900">24/7 Care</div>
            <div className="text-xs text-slate-500 mt-0.5">Al Barsha & Al Nahda</div>
          </div>

          <div className="p-3">
            <div className="text-2xl font-black text-[#58a738]">100% Genuine</div>
            <div className="text-xs text-slate-500 mt-0.5">MOHAP & DHA Licensed</div>
          </div>

          <div className="p-3">
            <div className="text-2xl font-black text-slate-900">Cold Chain</div>
            <div className="text-xs text-slate-500 mt-0.5">Safe UAE Delivery Fleet</div>
          </div>
        </div>

      </div>
    </section>
  );
}
