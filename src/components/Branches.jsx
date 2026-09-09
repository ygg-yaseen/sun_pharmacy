import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Building2 } from 'lucide-react';
import { BRANCHES } from '../data/pharmacyData';

export default function Branches() {
  const [filter, setFilter] = useState('all');

  const filteredBranches = filter === 'all' 
    ? BRANCHES 
    : BRANCHES.filter(b => b.emirate.toLowerCase() === filter.toLowerCase());

  return (
    <section id="branches" className="py-16 sm:py-20 bg-[#F8FAF9] border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#008f82] block mb-2">
              Our Locations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Branches
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Visit your nearest Sun Pharmacy branch for in-person consultations, prescription fulfillment, or arrange direct home delivery across Dubai and Sharjah.
            </p>
          </div>

          {/* Simple Filter Pills */}
          <div className="flex items-center gap-1.5 self-start md:self-end bg-white p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'all' ? 'bg-[#008f82] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('dubai')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'dubai' ? 'bg-[#008f82] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dubai
            </button>
            <button
              onClick={() => setFilter('sharjah')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'sharjah' ? 'bg-[#008f82] text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sharjah
            </button>
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-[#008f82]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with name and 24/7 status */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900">
                        {branch.name}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {branch.emirate}
                      </span>
                    </div>
                    <div className="text-xs font-arabic text-emerald-800 mt-0.5">
                      {branch.arabicName}
                    </div>
                  </div>

                  {branch.is247 ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full whitespace-nowrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      24/7 OPEN
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                      Open Daily
                    </span>
                  )}
                </div>

                {/* Address */}
                <div className="py-4 space-y-2.5">
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <MapPin className="w-4 h-4 text-[#008f82] shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Clock className="w-4 h-4 text-[#58a738] shrink-0" />
                    <span><strong>Hours:</strong> {branch.hours}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 pb-4">
                  {branch.features.map((f, idx) => (
                    <span key={idx} className="text-[11px] bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-0.5 rounded-md">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-xs font-semibold">
                <a
                  href={`tel:${branch.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl transition-colors border border-slate-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>

                <a
                  href={`https://wa.me/${branch.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hello Sun Pharmacy (${branch.name}), I would like to inquire about medicine availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl transition-colors border border-emerald-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2 bg-[#008f82] hover:bg-[#00766b] text-white rounded-xl transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Map</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
