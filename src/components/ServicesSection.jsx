import React from 'react';
import { 
  Truck, 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  HeartPulse, 
  CalendarSync,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, BRAND_INFO } from '../data/pharmacyData';

const iconMap = {
  Truck: Truck,
  Stethoscope: Stethoscope,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  HeartPulse: HeartPulse,
  CalendarSync: CalendarSync,
};

export default function ServicesSection({ onOpenPrescription, onOpenQuiz }) {
  const handleServiceClick = (service) => {
    if (service.id === 'prescription-delivery') {
      onOpenPrescription();
    } else if (service.id === 'clinical-consultation' || service.id === 'chronic-refill') {
      window.open(`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent(`Hello Sun Pharmacy, I would like to inquire about ${service.title}.`)}`, '_blank');
    } else if (service.id === 'dermo-skin-bar') {
      onOpenQuiz();
    } else {
      const el = document.getElementById('branches');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#008f82]" />
            <span>Full-Spectrum Healthcare Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Pharmacy & Wellness Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            From emergency midnight prescription fulfillment to bespoke clinical skincare consultations, Sun Pharmacy delivers hospital-grade precision with personalized concierge warmth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Stethoscope;
            return (
              <div
                key={service.id}
                className="group p-7 rounded-3xl bg-[#F8FAF9] border border-slate-200/80 hover:border-[#008f82]/50 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-white p-3 shadow-md shadow-slate-900/5 group-hover:scale-110 group-hover:bg-[#008f82] group-hover:text-white transition-all text-[#008f82] border border-slate-100">
                      <Icon className="w-full h-full" />
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Arabic */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#008f82] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-arabic text-emerald-800 mt-0.5 mb-3">
                    {service.arabicTitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#008f82] hover:text-[#006b61] group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>{service.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cold-Chain Guarantee Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0b1b2a] to-slate-900 p-8 text-white relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#58a738]">
                UAE Climate Assurance Standard
              </span>
              <h3 className="text-xl sm:text-2xl font-black">
                100% Temperature-Regulated Cold Chain Fleet
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl">
                Given the Middle East climate, delicate biologicals, insulins, probiotics, and dermo-cosmetic serums lose efficacy in heat. All Sun Pharmacy dispatch vehicles maintain calibrated 15°C–25°C ambient and 2°C–8°C refrigerated zones monitored by digital dataloggers.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center items-start md:items-end">
              <button
                onClick={onOpenPrescription}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#008f82] hover:bg-[#00766b] text-white font-bold text-xs shadow-lg shadow-[#008f82]/30 cursor-pointer"
              >
                Dispatch Medication Now
              </button>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <CheckCircle2 className="w-4 h-4 text-[#58a738]" />
                <span>Dubai & Sharjah Fast Track</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
