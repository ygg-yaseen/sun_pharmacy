import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Stethoscope, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICES, BRAND_INFO } from '../data/pharmacyData';

const icons = {
  "prescription-dispensation": Truck,
  "pharmacist-consultation": Stethoscope,
  "dermatology-wellness": Sparkles,
  "insurance-billing": ShieldCheck,
};

export default function Services() {
  return (
    <div className="space-y-16 pb-24">
      
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#F7FAF8] via-white to-[#F9FCFA] border-b border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="eyebrow mb-3">
            <Link to="/" className="hover:underline text-slate-500">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c2b27] tracking-tight">
            Our Healthcare Services
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-2xl">
            Sun Pharmacy provides integrated clinical, dispensary, and wellness solutions designed to meet the rigorous standards of UAE healthcare.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {SERVICES.map((s, idx) => {
            const Icon = icons[s.id] || Stethoscope;
            return (
              <div
                key={s.id}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-corporate hover:border-[#008f82]/50 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#008f82] flex items-center justify-center border border-emerald-100">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                        {s.tag}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 pt-1">
                      {s.title}
                    </h2>
                    <div className="text-xs font-arabic text-emerald-800 font-medium">
                      {s.arabicTitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      {s.desc}
                    </p>

                    <div className="pt-3">
                      <a
                        href={`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent(`Hello Sun Pharmacy, I would like to inquire about ${s.title}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#008f82] hover:text-[#00766b] transition-colors"
                      >
                        <span>Inquire about this service on WhatsApp</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-[#FAFBFB] p-6 sm:p-7 rounded-2xl border border-slate-200/80 space-y-3">
                    <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
                      Standard Protocols & Care
                    </div>
                    <ul className="space-y-2.5">
                      {s.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#58a738] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cold Chain Guarantee Manifest */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="manifest-box space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#008f82]">
            <Truck className="w-4 h-4" />
            <span>UAE Pharmaceutical Cold-Chain Logistics</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Climate-Controlled Transportation Fleet
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            In compliance with UAE Ministry of Health and Prevention (MOHAP) Good Pharmacy Practice (GPP), all our home deliveries are packaged in insulated, temperature-controlled containers and dispatched in climate-monitored vehicles to ensure strict compliance between 15°C–25°C ambient and 2°C–8°C chilled for delicate injectables.
          </p>
        </div>
      </section>

    </div>
  );
}
