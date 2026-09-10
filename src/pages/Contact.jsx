import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, MessageCircle, ArrowRight, MapPin, Send, HelpCircle, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';
import { BRAND_INFO, BRANCHES, FAQS } from '../data/pharmacyData';

export default function Contact() {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formBranch, setFormBranch] = useState('General Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const message = `*NEW WEBSITE INQUIRY - SUN PHARMACY UAE*\n` +
      `--------------------------------\n` +
      `👤 *Name:* ${formName || 'Customer'}\n` +
      `📞 *Phone:* ${formPhone || 'Not provided'}\n` +
      `📍 *Regarding:* ${formBranch}\n` +
      `💬 *Message:* ${formMessage || 'General inquiry'}\n` +
      `--------------------------------\n` +
      `_Sent via sunpharmacy.ae contact form_`;

    const waUrl = `https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <div className="space-y-16 pb-24">
      
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-[#F7FAF8] via-white to-[#F9FCFA] border-b border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="eyebrow mb-3">
            <Link to="/" className="hover:underline text-slate-500">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0c2b27] tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-2xl">
            Have questions regarding prescription delivery, insurance coverage, or branch hours? Reach out to our central concierge or contact your nearest branch directly.
          </p>
        </div>
      </section>

      {/* 3 Contact Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* WhatsApp */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-corporate flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">WhatsApp Concierge</h3>
              <p className="text-xs text-slate-500 mb-4">Fast responses for prescriptions, orders, and inquiries.</p>
              <div className="font-mono text-sm font-bold text-slate-900">{BRAND_INFO.centralWhatsApp}</div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent('Hello Sun Pharmacy, I would like to inquire about a prescription or medicine.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone & Email */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-corporate flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#008f82] flex items-center justify-center border border-teal-100 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Central Phone & Email</h3>
              <p className="text-xs text-slate-500 mb-4">Customer support desk and administrative line.</p>
              <div className="font-mono text-sm font-bold text-slate-900">{BRAND_INFO.centralPhone}</div>
              <div className="text-xs text-slate-500 mt-1">{BRAND_INFO.email}</div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <a
                href={`tel:${BRAND_INFO.centralPhone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#083832] hover:bg-slate-900 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Call Central Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-corporate flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-100 mb-4">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Official Instagram</h3>
              <p className="text-xs text-slate-500 mb-4">Follow for health tips, wellness advice, and updates.</p>
              <div className="font-mono text-sm font-bold text-slate-900">{BRAND_INFO.instagramHandle}</div>
              <div className="text-xs text-[#008f82] font-semibold mt-1">{BRAND_INFO.domain}</div>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-100">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white text-xs font-semibold hover:opacity-95 shadow-xs transition-opacity"
              >
                <span>Follow on Instagram</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Inquiry Form & Direct Branch Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-9 border border-slate-200 shadow-corporate">
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Send an Inquiry</h3>
            <p className="text-xs text-slate-500 mb-6">Connect directly with our dispatch and pharmaceutical care team.</p>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <div className="text-sm font-bold text-slate-900">Inquiry Prepared</div>
                <p className="text-xs text-slate-600">Opening WhatsApp with your inquiry details.</p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 px-5 py-2 bg-slate-900 text-white text-xs font-semibold rounded-full"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-mono uppercase tracking-wider text-slate-700 mb-1.5 text-[11px] font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Al-Mansoor"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008f82] outline-none text-xs"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase tracking-wider text-slate-700 mb-1.5 text-[11px] font-semibold">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="054 307 6979"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008f82] outline-none text-xs"
                  />
                </div>

                <div>
                  <label className="block font-mono uppercase tracking-wider text-slate-700 mb-1.5 text-[11px] font-semibold">
                    Relevant Branch / Topic
                  </label>
                  <select
                    value={formBranch}
                    onChange={(e) => setFormBranch(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008f82] outline-none text-xs bg-white"
                  >
                    <option value="General Inquiry">General Healthcare Inquiry</option>
                    {BRANCHES.map(b => (
                      <option key={b.id} value={b.name}>{b.name} ({b.emirate})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-mono uppercase tracking-wider text-slate-700 mb-1.5 text-[11px] font-semibold">
                    Message / Prescription Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="How can our pharmacists assist you?"
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#008f82] outline-none text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#008f82] hover:bg-[#00766b] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp Concierge</span>
                </button>
              </form>
            )}
          </div>

          {/* Complete Branches Contact Directory */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Direct Branch Directory</h3>
            <p className="text-xs text-slate-500">Contact any of our retail branches directly for in-store inquiries, prescription fulfillment, and local delivery:</p>

            <div className="space-y-3">
              {BRANCHES.map(b => (
                <div key={b.id} className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs bg-white">
                  <div className="branch-code-bar py-2 px-4 text-[11px]">
                    <span>{b.area}, {b.emirate}</span>
                    <span className="text-emerald-300 font-bold">OPEN DAILY</span>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-slate-900 text-sm">{b.name}</div>
                      <div className="text-xs text-slate-500">{b.hours}</div>
                    </div>
                    <div className="text-xs text-slate-600">{b.address}</div>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                      <a href={`tel:${b.phone}`} className="font-bold text-[#008f82] hover:underline flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" />
                        <span>{b.phone}</span>
                      </a>
                      <a 
                        href={`https://wa.me/${b.whatsapp.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:underline font-semibold flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
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

    </div>
  );
}
