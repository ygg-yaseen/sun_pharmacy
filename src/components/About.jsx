import React from 'react';
import { ShieldCheck, HeartHandshake, Award, Clock } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Licensed Pharmaceutical Care",
      desc: "Every prescription is dispensed and reviewed by DHA and MOHAP licensed pharmacists to ensure complete safety and therapeutic compliance."
    },
    {
      icon: Clock,
      title: "Around-the-Clock Reliability",
      desc: "Our flagship branches in Al Barsha (Dubai) and Al Nahda (Sharjah) remain open 24 hours a day, 7 days a week, ready for emergency patient needs."
    },
    {
      icon: Award,
      title: "100% Genuine Clinical Products",
      desc: "All medications, vitamins, pediatric formulas, and dermo-cosmetic products are strictly acquired from authorized UAE pharmaceutical agencies."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008f82] block mb-2">
            Company Profile
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            About Sun Pharmacy
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Sun Pharmacy is a premier community healthcare provider in the United Arab Emirates. Operating strategically placed branches in Dubai and Sharjah, we bridge modern clinical standards with warm, accessible patient service.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-[#F8FAF9] border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#008f82] mb-4 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
