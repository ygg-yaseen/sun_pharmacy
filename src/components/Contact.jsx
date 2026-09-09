import React from 'react';
import { Phone, Mail, Globe, MessageCircle, ArrowRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BRAND_INFO, BRANCHES } from '../data/pharmacyData';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#FAFBFB] border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008f82] block mb-2">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Connect with Sun Pharmacy
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Have questions about prescription delivery, insurance approvals, or product availability? Our team is at your service.
          </p>
        </div>

        {/* 3 Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* WhatsApp Direct */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 text-center flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                WhatsApp Concierge
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Fast responses for prescriptions, orders, and inquiries.
              </p>
              <div className="text-sm font-semibold text-slate-800">
                {BRAND_INFO.centralWhatsApp}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent('Hello Sun Pharmacy, I would like to inquire about a prescription or medicine.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone & Email */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 text-center flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#008f82] flex items-center justify-center mx-auto mb-4 border border-teal-100">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Direct Call & Email
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Central line or email for corporate & customer inquiries.
              </p>
              <div className="text-sm font-semibold text-slate-800">
                {BRAND_INFO.centralPhone}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {BRAND_INFO.email}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`tel:${BRAND_INFO.centralPhone}`}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold transition-colors"
              >
                <span>Call Central Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Official Instagram & Web */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 text-center flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mx-auto mb-4 border border-pink-100">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Official Instagram
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Follow our official social page for updates & tips.
              </p>
              <div className="text-sm font-semibold text-slate-800">
                {BRAND_INFO.instagramHandle}
              </div>
              <div className="text-xs text-[#008f82] font-semibold mt-1">
                {BRAND_INFO.domain}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-95 text-white text-xs font-semibold transition-opacity"
              >
                <span>Follow on Instagram</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
