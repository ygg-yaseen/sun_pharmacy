import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Truck, 
  Award, 
  Phone, 
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { BRAND_INFO, BRANCHES, SERVICES, FAQS } from '../data/pharmacyData';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      
      {/* 2-Column Hero Section (alnahdams.com style) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FAF8] via-white to-[#F9FCFA] pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow Badge */}
              <div className="eyebrow">
                <span className="w-2 h-2 rounded-full bg-[#008f82] animate-pulse" />
                <span>Community Pharmacy Group · UAE</span>
              </div>

              {/* Main Display Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#0c2b27] leading-[1.12] tracking-tight">
                Dedicated Healthcare, Clinical Excellence & Everyday Wellness.
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Welcome to <strong className="text-slate-900">Sun Pharmacy</strong> (<span className="font-arabic font-medium text-emerald-800">صيدلية صن</span>). Operating retail branches across <strong className="text-slate-900">Dubai</strong> and <strong className="text-slate-900">Sharjah</strong>, we deliver hospital-grade prescription dispensation, verified clinical skincare, and dedicated patient care.
              </p>

              {/* Pill Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/branches"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#008f82] hover:bg-[#00766b] text-white text-sm font-semibold shadow-lg shadow-[#008f82]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Our Branches</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 opacity-80" />
                </Link>

                <a
                  href={`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent('Hello Sun Pharmacy, I would like to make an inquiry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-sm font-semibold transition-all hover:border-slate-300"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Contact on WhatsApp</span>
                </a>
              </div>

              {/* Trust badges footer */}
              <div className="flex items-center gap-6 pt-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-[#008f82]" />
                  MOHAP & DHA Licensed
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Truck className="w-4 h-4 text-[#58a738]" />
                  Cold-Chain Delivery Fleet
                </span>
              </div>

            </div>

            {/* Right Column: Clinical Healthcare Manifest Box (alnahdams.com style) */}
            <div className="lg:col-span-5">
              <div className="manifest-box relative space-y-5">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-[#008f82] font-semibold flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Accreditation Manifest</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    UAE #SP-REG
                  </span>
                </div>

                {/* Main Body */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Network Entity:</span>
                    <span className="font-bold text-slate-900">Sun Pharmacy Group</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Retail Footprint:</span>
                    <span className="font-bold text-[#008f82]">Dubai & Sharjah Hubs</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Accredited Care:</span>
                    <span className="font-bold text-slate-900">DHA & MOHAP Licensed</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Product Authenticity:</span>
                    <span className="font-bold text-emerald-700">100% Genuine MOHAP</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Delivery Fleet:</span>
                    <span className="font-bold text-slate-900">Calibrated Cold Storage</span>
                  </div>
                </div>

                {/* Direct Prescription WhatsApp Action inside Manifest */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent('Hello Sun Pharmacy, I would like to order my prescription.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Direct WhatsApp Concierge: 054 307 6979</span>
                  </a>
                </div>

                <div className="text-[11px] text-slate-400 text-center font-mono">
                  Official Domain: sunpharmacy.ae
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segmented Stat Strip Box (alnahdams.com style) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="stat-strip-box shadow-corporate">
          <div className="stat-cell">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#0c2b27]">Dubai & Sharjah</div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mt-1">Prime Retail Locations</div>
          </div>
          <div className="stat-cell">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#008f82]">Licensed Care</div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mt-1">DHA & MOHAP Pharmacists</div>
          </div>
          <div className="stat-cell">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#58a738]">100% Genuine</div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mt-1">MOHAP & DHA Licensed</div>
          </div>
          <div className="stat-cell">
            <div className="font-display text-2xl sm:text-3xl font-bold text-[#0c2b27]">Cold Chain</div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 mt-1">Safe Delivery Fleet</div>
          </div>
        </div>
      </section>

      {/* Corporate Overview Teaser */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAFBFB] rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-corporate">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="eyebrow">
                <span>About Our Group</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2b27]">
                A Trusted Healthcare Partner for UAE Communities
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sun Pharmacy (<span className="font-arabic font-medium text-emerald-800">صيدلية صن</span>) delivers accredited prescription services, pharmaceutical care, and verified wellness products to residents across Dubai and Sharjah. We combine modern clinical standards with personalized pharmacist counsel and prompt temperature-controlled home delivery.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008f82] hover:text-[#00766b] transition-colors"
                >
                  <span>Learn more about our story, vision & standards</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <ShieldCheck className="w-6 h-6 text-[#008f82] mb-2" />
                <div className="text-sm font-bold text-slate-900">Licensed Pharmacists</div>
                <div className="text-xs text-slate-500 mt-0.5">DHA & MOHAP accredited care</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <Truck className="w-6 h-6 text-[#58a738] mb-2" />
                <div className="text-sm font-bold text-slate-900">Cold Chain Logistics</div>
                <div className="text-xs text-slate-500 mt-0.5">15°C–25°C & 2°C–8°C regulated fleet</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Branches Section (with alnahdams.com .branch-code-bar styling) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-2">
              <span>Locations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2b27]">
              Our Branches
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Convenient retail pharmacies across key residential and shopping hubs in Dubai and Sharjah.
            </p>
          </div>
          <Link
            to="/branches"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008f82] hover:underline self-start sm:self-auto"
          >
            <span>View complete branch directory</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Branches Grid with stylish header bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHES.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-corporate hover:border-[#008f82]/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Dark Code Bar (alnahdams.com style) */}
                <div className="branch-code-bar">
                  <span className="font-semibold uppercase tracking-wider">{branch.area}, {branch.emirate}</span>
                  <span className="text-emerald-300 text-[10px]">
                    OPEN DAILY
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {branch.name}
                    </h3>
                    <div className="text-xs font-arabic text-emerald-800 mt-0.5">
                      {branch.arabicName}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {branch.address}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">Direct Phone:</span>
                    <a href={`tel:${branch.phone}`} className="font-bold text-[#008f82] hover:underline">
                      {branch.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${branch.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors"
                >
                  <span>Map</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Services Grid Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="eyebrow mb-2">
              <span>Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2b27]">
              Our Healthcare Services
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Integrated pharmacy solutions delivering clinical excellence across the UAE.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008f82] hover:underline self-start sm:self-auto"
          >
            <span>Explore all services</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200 shadow-corporate hover:border-[#008f82]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block mb-3.5">
                  {s.tag}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <div className="text-xs font-arabic text-emerald-800 mt-0.5 mb-2.5">{s.arabicTitle}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#008f82] hover:text-[#00766b]"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="eyebrow mb-2">
            <span>Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2b27]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                >
                  <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                  <span className="p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#083832] rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 max-w-xl relative z-10">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-300">
              Direct Community Care
            </span>
            <h3 className="text-xl sm:text-3xl font-bold">
              Need medication advice or express prescription delivery?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Our certified pharmacists are on duty across Dubai and Sharjah to answer questions, verify prescriptions, and dispatch orders promptly.
            </p>
          </div>
          <a
            href={`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent('Hello Sun Pharmacy, I would like to speak with a pharmacist.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-[#58a738] hover:bg-[#488f2c] text-white font-bold text-xs sm:text-sm shadow-lg transition-all whitespace-nowrap relative z-10"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
