import React, { useState } from 'react';
import { 
  UploadCloud, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Truck,
  Building2,
  HeartHandshake
} from 'lucide-react';
import { BRAND_INFO, BRANCHES } from '../data/pharmacyData';
import logoImg from '../assets/logo_sun_pharmacy.png';

export default function HeroSection({ onOpenPrescription, onSelectBranch }) {
  const [selectedBranchQuick, setSelectedBranchQuick] = useState('al-barsha');

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5FAF8] to-white pt-6 pb-16 lg:py-20 border-b border-slate-100">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#008f82]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#58a738]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top UAE Luxury Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#008f82] animate-ping" />
            <span className="font-bold tracking-wide uppercase">UAE Premier Community Pharmacy</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 text-xs font-medium text-slate-700">
            <Building2 className="w-3.5 h-3.5 text-[#008f82]" />
            <span>5 Locations in Dubai & Sharjah</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100/90 text-xs font-medium text-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-[#58a738]" />
            <span>MOHAP & DHA Licensed</span>
          </div>
        </div>

        {/* Grid: Main Headline + Quick Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Elevating Healthcare, <br />
              <span className="bg-gradient-to-r from-[#008f82] via-[#006b61] to-[#4da42b] bg-clip-text text-transparent">
                Longevity & Clinical Beauty
              </span> <br />
              in the UAE.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Welcome to <span className="font-semibold text-slate-900">Sun Pharmacy</span> (<span className="font-arabic font-medium text-[#008f82]">صيدلية صن</span>). 
              With 5 premier locations across <span className="text-slate-900 font-medium">Dubai (Al Barsha, Al Ghurair, Warsan)</span> and <span className="text-slate-900 font-medium">Sharjah (Al Nahda, Muwaila)</span>, 
              we combine licensed pharmaceutical precision with high-end dermo-cosmetics and fast, climate-controlled home delivery.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenPrescription}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#008f82] hover:bg-[#00766b] text-white font-semibold text-base shadow-lg shadow-[#008f82]/30 hover:shadow-xl hover:shadow-[#008f82]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <UploadCloud className="w-5 h-5" />
                <span>Upload Prescription</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-80" />
              </button>

              <a
                href={`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent('Hello Sun Pharmacy, I would like to order medication or ask for advice.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-[#008f82]/40 font-semibold text-base shadow-sm hover:shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Pharmacist</span>
              </a>

              <a
                href="#branches"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-4 rounded-2xl text-slate-600 hover:text-[#008f82] font-semibold text-sm transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#008f82]" />
                <span>Find a Branch</span>
              </a>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-6 border-t border-slate-200/80">
              <div className="p-3 rounded-xl bg-white/70 border border-slate-100 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#008f82]">5</div>
                <div className="text-xs font-semibold text-slate-800">UAE Branches</div>
                <div className="text-[11px] text-slate-500">Dubai & Sharjah</div>
              </div>

              <div className="p-3 rounded-xl bg-white/70 border border-slate-100 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#58a738]">45-90m</div>
                <div className="text-xs font-semibold text-slate-800">Fast Delivery</div>
                <div className="text-[11px] text-slate-500">Cold-chain fleet</div>
              </div>

              <div className="p-3 rounded-xl bg-white/70 border border-slate-100 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#008f82]">24/7</div>
                <div className="text-xs font-semibold text-slate-800">Open Branches</div>
                <div className="text-[11px] text-slate-500">Al Barsha & Al Nahda</div>
              </div>

              <div className="p-3 rounded-xl bg-white/70 border border-slate-100 shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#58a738]">100%</div>
                <div className="text-xs font-semibold text-slate-800">Authentic Care</div>
                <div className="text-[11px] text-slate-500">MOHAP Certified</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Luxury Branch & Prescription Gateway Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden">
              
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-[#008f82] to-[#4da42b] text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-sm">
                Instant UAE Dispatch
              </div>

              {/* Card Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#008f82] to-[#4da42b] p-0.5 shadow-md shadow-[#008f82]/20">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center p-1.5">
                    <img src={logoImg} alt="Sun Pharmacy" className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Direct Pharmacy Counter</h3>
                  <p className="text-xs text-slate-500">Choose your nearest Sun Pharmacy branch</p>
                </div>
              </div>

              {/* Branch Selector Pill Tabs */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Branch for Instant Service:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BRANCHES.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBranchQuick(b.id)}
                      className={`text-left p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        selectedBranchQuick === b.id 
                          ? 'border-[#008f82] bg-[#008f82]/5 text-[#008f82] ring-1 ring-[#008f82]' 
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold truncate">{b.neighborhood}</span>
                        {b.isOpen247 && (
                          <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">
                            24/7
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-500 font-normal mt-0.5">
                        {b.emirate}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Branch Details Box */}
              {(() => {
                const branch = BRANCHES.find(b => b.id === selectedBranchQuick) || BRANCHES[0];
                return (
                  <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3 mb-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-[#008f82]" />
                          <span>{branch.name}</span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                          {branch.address}
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {branch.hours}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/60">
                      <span className="text-slate-500">Pharmacist In-Charge:</span>
                      <span className="font-semibold text-slate-800">{branch.manager}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href={`https://wa.me/${branch.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hello Sun Pharmacy (${branch.name}), I would like to order or ask about medication availability.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Branch WhatsApp</span>
                      </a>

                      <a
                        href={`tel:${branch.phone}`}
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold text-xs transition-colors"
                      >
                        <span>Call Branch</span>
                      </a>
                    </div>
                  </div>
                );
              })()}

              {/* Fast Prescription Drop Action */}
              <div 
                onClick={onOpenPrescription}
                className="group border-2 border-dashed border-[#008f82]/40 hover:border-[#008f82] rounded-2xl p-4 text-center bg-[#008f82]/5 hover:bg-[#008f82]/10 transition-all cursor-pointer"
              >
                <UploadCloud className="w-7 h-7 text-[#008f82] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-bold text-slate-800">
                  Have a doctor's prescription or insurance card?
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Click here to upload & dispatch for 45-min delivery
                </div>
              </div>

              {/* Insurance logos ticker mini */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Direct billing accepted:</span>
                <span className="font-semibold text-slate-600">Daman • Thiqa • MetLife • NextCare • Sukoon</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
