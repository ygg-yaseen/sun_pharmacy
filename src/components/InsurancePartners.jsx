import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle, 
  MessageCircle, 
  HelpCircle,
  FileCheck2
} from 'lucide-react';
import { ACCEPTED_INSURANCES, BRAND_INFO } from '../data/pharmacyData';

export default function InsurancePartners({ onOpenPrescription }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInsurances = ACCEPTED_INSURANCES.filter(ins => 
    ins.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ins.tier.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInsuranceWhatsApp = () => {
    const text = "Hello Sun Pharmacy, I want to check my health insurance coverage and co-pay for my prescription.";
    window.open(`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="insurance" className="py-16 sm:py-20 bg-[#F8FAF9] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#008f82] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>UAE Direct Billing Accepted</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Seamless Direct Insurance Coverage Across Dubai & Sharjah
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Skip lengthy reimbursement paperwork. Sun Pharmacy integrates directly with major UAE health insurance platforms for instant electronic pre-approvals and zero-friction copay settlements.
              </p>

              <div className="pt-2 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#58a738]" />
                  <span>Instant digital approvals on Dubai & Sharjah prescriptions</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#58a738]" />
                  <span>Chronic disease approval assistance (Daman, Thiqa, Nextcare)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-[#58a738]" />
                  <span>Co-pay transparent calculations before dispatch</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <button
                  onClick={onOpenPrescription}
                  className="px-5 py-3 rounded-xl bg-[#008f82] hover:bg-[#00766b] text-white font-bold text-xs shadow-md shadow-[#008f82]/25 cursor-pointer"
                >
                  Submit Insurance Card
                </button>
                <button
                  onClick={handleInsuranceWhatsApp}
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Check Policy via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Insurance Grid & Search */}
            <div className="lg:col-span-7">
              {/* Quick Search */}
              <div className="relative mb-5">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type your insurance company name (e.g. Daman, Metlife, Nextcare)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-[#008f82] transition-colors"
                />
              </div>

              {/* Insurance Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {filteredInsurances.map((ins, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-[#F8FAF9] border border-slate-200/60 hover:border-[#008f82]/40 hover:bg-white transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-[#008f82] block">
                        {ins.logo}
                      </span>
                      <div className="text-xs font-bold text-slate-900 mt-1 line-clamp-1">
                        {ins.name}
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 mt-2 font-medium">
                      {ins.tier}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Don't see your card listed? We also process reimbursement receipts and secondary TPAs.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
