import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Navigation, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  Building2,
  Copy,
  ExternalLink,
  Check
} from 'lucide-react';
import { BRANCHES, BRAND_INFO } from '../data/pharmacyData';

export default function BranchLocator() {
  const [filterEmirate, setFilterEmirate] = useState('all');
  const [selectedBranchId, setSelectedBranchId] = useState('al-barsha');
  const [copiedId, setCopiedId] = useState(null);

  const filteredBranches = filterEmirate === 'all' 
    ? BRANCHES 
    : BRANCHES.filter(b => b.emirate.toLowerCase() === filterEmirate.toLowerCase());

  const selectedBranch = BRANCHES.find(b => b.id === selectedBranchId) || BRANCHES[0];

  const handleCopyAddress = (branch) => {
    navigator.clipboard.writeText(`${branch.name} - ${branch.address}`);
    setCopiedId(branch.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="branches" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#008f82]" />
            <span>5 Premier Locations in the UAE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find Your Nearest Sun Pharmacy
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Strategically located across key neighborhoods in Dubai and Sharjah to bring certified healthcare, luxury skincare, and express delivery right to your doorstep.
          </p>

          {/* Filter Pills (All / Dubai / Sharjah) */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setFilterEmirate('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterEmirate === 'all'
                  ? 'bg-[#008f82] text-white shadow-md shadow-[#008f82]/25'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All 5 Branches
            </button>
            <button
              onClick={() => setFilterEmirate('dubai')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterEmirate === 'dubai'
                  ? 'bg-[#008f82] text-white shadow-md shadow-[#008f82]/25'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Dubai Branches (3)
            </button>
            <button
              onClick={() => setFilterEmirate('sharjah')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filterEmirate === 'sharjah'
                  ? 'bg-[#008f82] text-white shadow-md shadow-[#008f82]/25'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              Sharjah Branches (2)
            </button>
          </div>
        </div>

        {/* Branch Cards & Interactive Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Branch List */}
          <div className="lg:col-span-5 space-y-3.5 max-h-[750px] overflow-y-auto pr-1">
            {filteredBranches.map((branch) => {
              const isSelected = branch.id === selectedBranch.id;
              return (
                <div
                  key={branch.id}
                  id={`branch-${branch.id}`}
                  onClick={() => setSelectedBranchId(branch.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'border-[#008f82] bg-gradient-to-r from-emerald-50/50 to-white shadow-lg shadow-[#008f82]/10 ring-1 ring-[#008f82]'
                      : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900">
                          {branch.name}
                        </h3>
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          {branch.emirate}
                        </span>
                      </div>
                      <div className="text-xs font-arabic text-emerald-800 mt-0.5">
                        {branch.arabicName}
                      </div>
                    </div>

                    {branch.isOpen247 ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        24/7 OPEN
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                        Open Daily
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {branch.address}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1 text-slate-700 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#008f82]" />
                      {branch.hours}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[#008f82] font-semibold">
                      {branch.features[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Selected Branch Spotlight with Interactive Map & Direct Actions */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-slate-900/20 overflow-hidden relative">
              
              {/* Subtle accent background glow */}
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#008f82]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#58a738]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Branch Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-bold tracking-widest text-[#58a738]">
                      {selectedBranch.emirate} Location
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-xs text-white/70">
                      {selectedBranch.highlight}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {selectedBranch.name}
                  </h3>
                  <div className="text-sm font-arabic text-emerald-300 mt-0.5">
                    {selectedBranch.arabicName}
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-1">
                  {selectedBranch.isOpen247 ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      24/7 OPEN NOW
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-500/20 px-3 py-1 rounded-full">
                      Open: {selectedBranch.hours}
                    </span>
                  )}
                  <span className="text-[11px] text-white/50">
                    Lead: {selectedBranch.manager}
                  </span>
                </div>
              </div>

              {/* Address & Quick Copy */}
              <div className="py-4 space-y-2">
                <div className="flex items-start justify-between gap-3 bg-white/5 rounded-2xl p-3.5 border border-white/10">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-[#58a738] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-white/50 font-medium">Physical Address</div>
                      <div className="text-sm text-white/90 font-medium mt-0.5">
                        {selectedBranch.address}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopyAddress(selectedBranch)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Address"
                  >
                    {copiedId === selectedBranch.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/80" />
                    )}
                  </button>
                </div>
              </div>

              {/* Branch Highlights Checkmarks */}
              <div className="py-2">
                <div className="text-xs font-bold uppercase tracking-wider text-white/50 mb-2.5">
                  Branch Amenities & Services
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedBranch.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-white/85">
                      <CheckCircle2 className="w-4 h-4 text-[#58a738] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Google Map Preview */}
              <div className="mt-5 rounded-2xl overflow-hidden border border-white/10 h-52 relative shadow-inner">
                <iframe
                  title={`Map of ${selectedBranch.name}`}
                  src={selectedBranch.googleMapsEmbed}
                  className="w-full h-full border-0 filter contrast-95 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-2 right-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedBranch.name + ' ' + selectedBranch.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold hover:bg-black transition-colors shadow-lg"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#008f82]" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-white/60" />
                  </a>
                </div>
              </div>

              {/* Contact Actions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                <a
                  href={`https://wa.me/${selectedBranch.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hello Sun Pharmacy (${selectedBranch.name}), I would like to place an order or ask for medication delivery.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#008f82] hover:bg-[#00766b] text-white font-semibold text-sm transition-all shadow-lg shadow-[#008f82]/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp This Branch</span>
                </a>

                <a
                  href={`tel:${selectedBranch.phone}`}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {selectedBranch.phone}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
