import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, HeartHandshake, Building2, CheckCircle2, Clock, Truck } from 'lucide-react';
import { BRAND_INFO, COMPANY_VALUES } from '../data/pharmacyData';

export default function About() {
  return (
    <div className="space-y-20 pb-24">
      
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#F7FAF8] via-white to-[#F9FCFA] border-b border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="eyebrow mb-3">
            <Link to="/" className="hover:underline text-slate-500">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c2b27] tracking-tight">
            About Sun Pharmacy Group
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-2xl">
            A trusted UAE community healthcare network dedicated to clinical precision, genuine medicines, and compassionate patient care across Dubai and Sharjah.
          </p>
        </div>
      </section>

      {/* Who We Are & Story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="eyebrow mb-1">
              <span>Foundation & Ethos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2b27]">
              Committed to Everyday Health in the United Arab Emirates
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sun Pharmacy (<span className="font-arabic font-medium text-emerald-800">صيدلية صن</span>) was established with a singular objective: to provide individuals and families in the UAE with transparent, professional, and accessible pharmaceutical care.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              With retail branches across high-density residential and commercial districts in Dubai (Al Barsha 1, Al Ghurair Deira, Warsan 4) and Sharjah (Al Nahda, Muwailih Commercial), we serve thousands of residents every week. From emergency 24/7 prescription dispensation to specialized pediatric formulas and high-grade dermo-cosmetics, we ensure every customer receives accredited guidance from licensed pharmacists.
            </p>
          </div>

          <div className="lg:col-span-5 manifest-box space-y-4">
            <div className="font-mono text-xs uppercase tracking-wider text-[#008f82] font-semibold pb-2 border-b border-slate-100 flex items-center justify-between">
              <span>Corporate Accreditation</span>
              <span className="text-[10px] text-slate-400">UAE-REG</span>
            </div>
            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-sans">Entity:</span>
                <span className="font-bold text-slate-900">Sun Pharmacy LLC</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-sans">Licensing:</span>
                <span className="font-bold text-slate-900">MOHAP & DHA Approved</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-sans">Emirates:</span>
                <span className="font-bold text-[#008f82]">Dubai & Sharjah</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500 font-sans">Fleet Standard:</span>
                <span className="font-bold text-slate-900">Cold Chain Calibrated</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500 font-sans">Official Domain:</span>
                <span className="font-bold text-[#008f82]">sunpharmacy.ae</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission (2-column cards) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-corporate space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#008f82] flex items-center justify-center border border-emerald-100">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be recognized as the most trusted and patient-focused community pharmacy network across the UAE, renowned for therapeutic safety, verified product authenticity, and compassionate care.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-corporate space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#008f82] flex items-center justify-center border border-teal-100">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To enhance everyday wellness by providing strictly authentic clinical medicines, personalized pharmacist consultations, and swift temperature-regulated delivery, making superior healthcare accessible to all.
            </p>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow mb-2">
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2b27]">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_VALUES.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#FAFBFB] border border-slate-200/90 shadow-xs">
              <div className="font-mono text-xs text-[#008f82] font-bold mb-2">0{idx + 1}.</div>
              <h4 className="text-base font-bold text-slate-900 mb-2">{val.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Storage & Cold-Chain Standards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="manifest-box space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#008f82]">
            <ShieldCheck className="w-4 h-4" />
            <span>UAE Pharmaceutical Cold-Chain Standard</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Uncompromising Safety in the Middle East Climate
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            In compliance with UAE Ministry of Health and Prevention (MOHAP) and Dubai Health Authority (DHA) protocols, all medications, biologicals, insulins, probiotics, and sensitive active serums are maintained within dedicated 15°C–25°C ambient and 2°C–8°C refrigerated zones. Our fleet is equipped with digital temperature monitoring dataloggers to guarantee that medicine potency remains intact during delivery.
          </p>
        </div>
      </section>

    </div>
  );
}
