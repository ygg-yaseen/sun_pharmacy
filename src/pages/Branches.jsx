import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BRANCHES, BRAND_INFO } from '../data/pharmacyData';

export default function Branches() {
  const [filter, setFilter] = useState('all');

  const filteredBranches = filter === 'all' 
    ? BRANCHES 
    : BRANCHES.filter(b => b.emirate.toLowerCase() === filter.toLowerCase());

  return (
    <div className="space-y-16 pb-20">
      
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#F7FAF8] via-white to-[#F9FCFA] border-b border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="eyebrow mb-3">
            <Link to="/" className="hover:underline text-slate-500">Home</Link>
            <span>/</span>
            <span>Our Branches</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c2b27] tracking-tight">
            Our Branches
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-2xl">
            Explore our retail pharmacies across Dubai and Sharjah. Visit in person or contact your nearest branch for cold-chain home delivery.
          </p>
        </div>
      </section>

      {/* Main Filter & Branches Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-100">
          <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-medium">
            Filter by Emirate:
          </div>

          <div className="flex items-center gap-2 bg-[#F1F5F3] p-1.5 rounded-full border border-slate-200 self-start sm:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === 'all' ? 'bg-[#008f82] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('dubai')}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === 'dubai' ? 'bg-[#008f82] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dubai
            </button>
            <button
              onClick={() => setFilter('sharjah')}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === 'sharjah' ? 'bg-[#008f82] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sharjah
            </button>
          </div>
        </div>

        {/* Branches Detailed Cards (alnahdams.com style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-corporate hover:border-[#008f82]/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Dark Monospace Code Bar (alnahdams.com style) */}
                <div className="branch-code-bar">
                  <span className="font-semibold uppercase tracking-wider">
                    {branch.area}, {branch.emirate}
                  </span>
                  <span className="text-emerald-300 font-mono text-[10px]">
                    OPEN DAILY
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 leading-snug">
                      {branch.name}
                    </h2>
                    <div className="text-xs font-arabic text-emerald-800 mt-0.5">
                      {branch.arabicName}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {branch.description}
                  </p>

                  {/* Address & Hours */}
                  <div className="py-3 border-y border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#008f82] shrink-0 mt-0.5" />
                      <span>{branch.address}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#58a738] shrink-0" />
                      <span><strong>Hours:</strong> {branch.hours}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        <strong>Direct Contact:</strong>{' '}
                        <a href={`tel:${branch.phone}`} className="text-[#008f82] font-bold hover:underline">
                          {branch.phone}
                        </a>
                      </span>
                    </div>
                  </div>

                  {/* Features Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {branch.features.map((feat, idx) => (
                      <span key={idx} className="text-[11px] font-mono bg-[#F8FAF9] text-slate-600 border border-slate-200 px-2.5 py-0.5 rounded-md">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 grid grid-cols-3 gap-2 text-xs font-semibold">
                <a
                  href={`tel:${branch.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl transition-colors border border-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Call</span>
                </a>

                <a
                  href={`https://wa.me/${branch.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hello ${branch.name}, I would like to inquire about medication availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl transition-colors border border-emerald-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#008f82] hover:bg-[#00766b] text-white rounded-xl transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Map</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Prescription Dispatch Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="manifest-box flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-emerald-50 text-[#008f82] shrink-0 border border-emerald-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm sm:text-base">
                Central Prescription Dispatch Across Dubai & Sharjah
              </div>
              <p className="text-xs text-slate-500 mt-1 max-w-xl leading-relaxed">
                Send your paper or digital doctor's prescription directly via WhatsApp. Our clinical pharmacists will verify the dosage and coordinate dispatch from the nearest branch.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent('Hello Sun Pharmacy, I would like to order my prescription.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#008f82] hover:bg-[#00766b] text-white text-xs font-bold shadow-md transition-all whitespace-nowrap"
          >
            Dispatch on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
