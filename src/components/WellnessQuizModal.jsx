import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  Check, 
  RotateCcw, 
  MessageCircle, 
  CheckCircle2,
  Heart,
  ShieldAlert
} from 'lucide-react';
import { BRAND_INFO, FEATURED_PRODUCTS } from '../data/pharmacyData';

export default function WellnessQuizModal({ isOpen, onClose, onAddToCart }) {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [skinType, setSkinType] = useState('');
  const [preference, setPreference] = useState('');

  if (!isOpen) return null;

  const resetQuiz = () => {
    setStep(1);
    setGoal('');
    setSkinType('');
    setPreference('');
  };

  const goals = [
    { id: 'dermo', title: 'Luxury Dermo Skincare & Anti-Aging', desc: 'Medical serums, hyperpigmentation & collagen support' },
    { id: 'energy', title: 'Daily Vitality, Focus & Immunity', desc: 'Combating fatigue, active lifestyle & antioxidants' },
    { id: 'stress', title: 'Deep Sleep & Stress Resilience', desc: 'Magnesium bisglycinate, calming botanicals & nervous system' },
    { id: 'family', title: 'Mother, Baby & Pediatric Care', desc: 'Gentle hydration, prenatal vitamins & newborn essentials' }
  ];

  const skinTypes = [
    { id: 'sensitive', title: 'Sensitive / Redness / Barrier Impaired', desc: 'Needs fragrance-free soothing formulas' },
    { id: 'oily', title: 'Oily / Combination / Humidity Prone', desc: 'Mattifying lightweight fluid & pore clarity' },
    { id: 'dry', title: 'Dry / Sun Damaged / Mature', desc: 'Deep ceramide restoration and antioxidant shield' },
    { id: 'normal', title: 'Balanced Maintenance', desc: 'Preventative daily clinical regimen' }
  ];

  const preferences = [
    { id: 'medical-topical', title: 'Topical Medical Serums & Creams' },
    { id: 'pure-softgels', title: 'High-Purity Arctic Softgels / Supplements' },
    { id: 'clinical-combo', title: 'Complete Inside-Out Synergy Kit' }
  ];

  // Recommended products based on goal
  const recommendedProducts = goal === 'dermo' 
    ? [FEATURED_PRODUCTS[0], FEATURED_PRODUCTS[1]] // SkinCeuticals & La Roche-Posay
    : goal === 'family' 
    ? [FEATURED_PRODUCTS[5], FEATURED_PRODUCTS[3]] // Mustela & CeraVe
    : [FEATURED_PRODUCTS[2], FEATURED_PRODUCTS[7]]; // Nordic Naturals & Bioderma

  const handleShareOnWhatsApp = () => {
    const text = `*SUN PHARMACY WELLNESS ASSESSMENT RESULT*\n` +
      `--------------------------------\n` +
      `🎯 *Goal:* ${goal}\n` +
      `🌿 *Profile:* ${skinType}\n` +
      `💊 *Preference:* ${preference}\n` +
      `--------------------------------\n` +
      `Hello Sun Pharmacy Pharmacist, please advise on the recommended regimen for my profile.`;
    window.open(`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-slate-100 text-left">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#008f82] to-[#58a738] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-emerald-100 text-xs font-bold uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Sun Vitality & Skincare Diagnostic</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            Personalized Clinical Health Profile
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1">
            Answer 3 quick questions to receive a pharmacist-curated wellness and dermatological protocol.
          </p>

          {/* Step Progress Bar */}
          <div className="flex gap-2 mt-4">
            <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-white' : 'bg-white/30'}`} />
            <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-white' : 'bg-white/30'}`} />
            <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-white' : 'bg-white/30'}`} />
            <div className={`h-1.5 flex-1 rounded-full ${step >= 4 ? 'bg-white' : 'bg-white/30'}`} />
          </div>
        </div>

        {/* Step 1: Goal */}
        {step === 1 && (
          <div className="p-6 sm:p-8 space-y-4">
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
              Step 1 of 3: What is your primary wellness or skincare objective?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {goals.map((g) => (
                <button
                  key={g.id}
                  onClick={() => { setGoal(g.id); setStep(2); }}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    goal === g.id 
                      ? 'border-[#008f82] bg-emerald-50/70 ring-2 ring-[#008f82]/30' 
                      : 'border-slate-200 hover:border-[#008f82] hover:bg-slate-50'
                  }`}
                >
                  <div className="text-sm font-bold text-slate-900">{g.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{g.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Skin/Body Profile */}
        {step === 2 && (
          <div className="p-6 sm:p-8 space-y-4">
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
              Step 2 of 3: How would you describe your skin / metabolic sensitivity?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skinTypes.map((st) => (
                <button
                  key={st.id}
                  onClick={() => { setSkinType(st.id); setStep(3); }}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    skinType === st.id 
                      ? 'border-[#008f82] bg-emerald-50/70 ring-2 ring-[#008f82]/30' 
                      : 'border-slate-200 hover:border-[#008f82] hover:bg-slate-50'
                  }`}
                >
                  <div className="text-sm font-bold text-slate-900">{st.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{st.desc}</div>
                </button>
              ))}
            </div>
            <div className="flex justify-between pt-2">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                ← Back
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Formulation Preference */}
        {step === 3 && (
          <div className="p-6 sm:p-8 space-y-4">
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
              Step 3 of 3: How do you prefer to take your regimen?
            </h4>
            <div className="space-y-2.5">
              {preferences.map((p) => (
                <button
                  key={p.id}
                  onClick={() => { setPreference(p.id); setStep(4); }}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                    preference === p.id 
                      ? 'border-[#008f82] bg-emerald-50/70 ring-2 ring-[#008f82]/30' 
                      : 'border-slate-200 hover:border-[#008f82] hover:bg-slate-50'
                  }`}
                >
                  <span className="text-sm font-bold text-slate-900">{p.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#008f82]" />
                </button>
              ))}
            </div>
            <div className="flex justify-between pt-2">
              <button
                onClick={() => setStep(2)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                ← Back
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Results & Recommendation */}
        {step === 4 && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4 text-[#008f82]" />
                <span>Your Personalized Protocol Ready</span>
              </div>
              <p className="text-xs text-emerald-900 mt-1">
                Based on your focus on <strong className="capitalize">{goal}</strong> and your climate-specific profile, our clinical team recommends this synergistic routine:
              </p>
            </div>

            {/* Recommended Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommendedProducts.map((prod) => (
                <div key={prod.id} className="p-3.5 rounded-2xl border border-slate-200 flex items-center gap-3 bg-white">
                  <img src={prod.image} alt={prod.name} className="w-14 h-14 object-cover rounded-xl bg-slate-50 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold text-[#008f82] uppercase block">{prod.brand}</span>
                    <h5 className="text-xs font-bold text-slate-900 truncate">{prod.name}</h5>
                    <div className="text-xs font-bold text-slate-900 mt-1">AED {prod.price}</div>
                  </div>
                  <button
                    onClick={() => onAddToCart(prod)}
                    className="p-2 bg-[#008f82] hover:bg-[#00766b] text-white rounded-xl text-xs font-bold shrink-0"
                    title="Add to Bag"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleShareOnWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/30 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Review Protocol with Pharmacist</span>
              </button>

              <button
                onClick={resetQuiz}
                className="px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
