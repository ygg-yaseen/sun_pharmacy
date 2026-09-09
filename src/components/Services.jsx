import React from 'react';
import { Truck, Stethoscope, Sparkles, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/pharmacyData';

const icons = [Truck, Stethoscope, Sparkles, ShieldCheck];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008f82] block mb-2">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Healthcare Services
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Sun Pharmacy provides integrated pharmacy solutions for individuals and families across Dubai and Sharjah.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, idx) => {
            const Icon = icons[idx] || Stethoscope;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAF9] border border-slate-200/80 hover:border-[#008f82]/50 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#008f82] shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <div className="text-xs font-arabic text-emerald-700 mt-0.5 mb-2">
                    {s.arabicTitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
