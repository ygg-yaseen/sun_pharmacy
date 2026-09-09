import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  FileText, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  Phone,
  AlertCircle
} from 'lucide-react';
import { BRAND_INFO, BRANCHES, ACCEPTED_INSURANCES } from '../data/pharmacyData';

export default function PrescriptionModal({ isOpen, onClose }) {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('fastest');
  const [deliveryType, setDeliveryType] = useState('delivery');
  const [address, setAddress] = useState('');
  const [insurance, setInsurance] = useState('None (Self Pay)');
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [insuranceFile, setInsuranceFile] = useState(null);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'prescription') setPrescriptionFile(file);
      if (type === 'insurance') setInsuranceFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const branchName = selectedBranch === 'fastest' 
      ? 'Nearest Available Branch (Dubai/Sharjah)' 
      : BRANCHES.find(b => b.id === selectedBranch)?.name || 'Sun Pharmacy';

    const message = `*NEW PRESCRIPTION ORDER - SUN PHARMACY UAE*\n` +
      `--------------------------------\n` +
      `👤 *Patient:* ${patientName || 'Not specified'}\n` +
      `📞 *Phone:* ${phone || 'Not specified'}\n` +
      `📍 *Branch Preferred:* ${branchName}\n` +
      `🚚 *Service:* ${deliveryType === 'delivery' ? 'Express Home Delivery' : 'Branch Pickup'}\n` +
      `🏠 *Address/Area:* ${address || 'Not specified'}\n` +
      `💳 *Insurance:* ${insurance}\n` +
      `📝 *Prescription Attached:* ${prescriptionFile ? prescriptionFile.name : 'Photo will be sent via WhatsApp chat'}\n` +
      `🪪 *Insurance Card Attached:* ${insuranceFile ? insuranceFile.name : 'None / Sent via WhatsApp'}\n` +
      `💬 *Notes:* ${notes || 'None'}\n` +
      `--------------------------------\n` +
      `_Sent via sunpharmacy.ae portal_`;

    const branchObj = BRANCHES.find(b => b.id === selectedBranch);
    const targetWhatsApp = (branchObj && branchObj.whatsapp) 
      ? branchObj.whatsapp 
      : BRAND_INFO.centralWhatsApp;

    const waUrl = `https://wa.me/${targetWhatsApp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    
    // Automatically open WhatsApp after brief confirmation
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-slate-100">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#008f82] to-[#005a52] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <UploadCloud className="w-6 h-6 text-emerald-200" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-200">
                MOHAP & DHA Licensed Dispensation
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Upload Doctor's Prescription
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-emerald-100 mt-2">
            Order your prescribed medicines with optional insurance direct billing. Delivered in cold-storage fleet within 45–90 minutes.
          </p>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-[#008f82] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Prescription Order Dispatched!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Connecting you directly with the licensed pharmacist on WhatsApp to verify dosage and arrange express 45-minute delivery to your address.
            </p>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold max-w-md mx-auto">
              If WhatsApp doesn't open automatically, tap below:
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-slate-900 hover:bg-black text-white text-sm font-semibold rounded-xl"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 text-left">
            
            {/* Patient Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maryam Al-Nuaimi"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#008f82] focus:ring-2 focus:ring-[#008f82]/20 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  UAE Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#008f82] focus:ring-2 focus:ring-[#008f82]/20 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* Branch Preference & Service Mode */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Fulfilling Branch
                </label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#008f82] focus:ring-2 focus:ring-[#008f82]/20 text-sm outline-none transition-all bg-white"
                >
                  <option value="fastest">⚡ Nearest Branch (Fastest Delivery)</option>
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name} ({b.emirate}) {b.isOpen247 ? '• 24/7' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Delivery Method
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('delivery')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      deliveryType === 'delivery'
                        ? 'border-[#008f82] bg-emerald-50 text-[#008f82] ring-1 ring-[#008f82]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    🚀 Express Home Delivery
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('pickup')}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      deliveryType === 'pickup'
                        ? 'border-[#008f82] bg-emerald-50 text-[#008f82] ring-1 ring-[#008f82]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    🏪 Curbside Pickup
                  </button>
                </div>
              </div>
            </div>

            {/* Delivery Address if delivery */}
            {deliveryType === 'delivery' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Delivery Address / Building / Area (Dubai or Sharjah) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Al Barsha 1, Villa 12 / Al Nahda Sharjah, Al Sondos Tower"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#008f82] focus:ring-2 focus:ring-[#008f82]/20 text-sm outline-none transition-all"
                />
              </div>
            )}

            {/* Insurance Provider */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Health Insurance Provider
              </label>
              <select
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#008f82] focus:ring-2 focus:ring-[#008f82]/20 text-sm outline-none transition-all bg-white"
              >
                <option value="None (Self-Pay / Credit Card / Cash)">Self-Pay (Cash / Credit Card / Tabby)</option>
                {ACCEPTED_INSURANCES.map((ins, idx) => (
                  <option key={idx} value={ins.name}>
                    {ins.name} ({ins.tier})
                  </option>
                ))}
              </select>
            </div>

            {/* File Upload Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              
              {/* Prescription File */}
              <div className="border-2 border-dashed border-slate-200 hover:border-[#008f82] rounded-2xl p-4 text-center transition-colors">
                <input
                  type="file"
                  id="prescription-upload"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, 'prescription')}
                />
                <label htmlFor="prescription-upload" className="cursor-pointer block">
                  <FileText className="w-6 h-6 text-[#008f82] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">
                    {prescriptionFile ? prescriptionFile.name : 'Upload Prescription (Photo/PDF)'}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Click to browse from phone or device
                  </span>
                </label>
              </div>

              {/* Insurance Card File */}
              <div className="border-2 border-dashed border-slate-200 hover:border-[#008f82] rounded-2xl p-4 text-center transition-colors">
                <input
                  type="file"
                  id="insurance-upload"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, 'insurance')}
                />
                <label htmlFor="insurance-upload" className="cursor-pointer block">
                  <ShieldCheck className="w-6 h-6 text-[#58a738] mx-auto mb-1" />
                  <span className="text-xs font-bold text-slate-800 block">
                    {insuranceFile ? insuranceFile.name : 'Insurance / Emirates ID (Optional)'}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Required for direct insurance billing
                  </span>
                </label>
              </div>

            </div>

            {/* Special Instructions / Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Special Instructions, Allergies, or Brand Preferences
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please send generic or branded medicine, call before arriving..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-[#008f82] focus:ring-2 focus:ring-[#008f82]/20 text-xs outline-none transition-all"
              />
            </div>

            {/* Privacy notice */}
            <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Your health data is confidential and strictly handled by licensed pharmacists in accordance with UAE MOHAP healthcare privacy regulations.
              </span>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-[#008f82] hover:bg-[#00766b] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#008f82]/30 hover:shadow-[#008f82]/40 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Submit & Dispatch via WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
