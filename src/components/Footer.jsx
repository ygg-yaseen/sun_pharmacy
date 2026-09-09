import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BRAND_INFO, BRANCHES } from '../data/pharmacyData';

export default function Footer() {
  return (
    <footer className="bg-[#FAFBFB] text-slate-600 pt-14 pb-10 border-t border-slate-200 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link to="/" className="inline-block">
              <img 
                src="/logo_sun_pharmacy.png" 
                alt="Sun Pharmacy UAE" 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Sun Pharmacy (صيدلية صن) is a premier community healthcare group in the United Arab Emirates, operating modern retail pharmacies across Dubai and Sharjah committed to genuine medicines, patient care, and express delivery.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-pink-300 hover:text-pink-600 flex items-center justify-center text-slate-600 transition-colors shadow-xs"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 hover:text-emerald-600 flex items-center justify-center text-slate-600 transition-colors shadow-xs"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 hover:border-[#008f82] hover:text-[#008f82] flex items-center justify-center text-slate-600 transition-colors shadow-xs"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Quick Links
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#008f82] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#008f82] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/branches" className="hover:text-[#008f82] transition-colors">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#008f82] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#008f82] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 & 4: Our Branches Directory */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Our Branches
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BRANCHES.map((b) => (
                <div key={b.id} className="p-2.5 rounded-xl bg-white border border-slate-200/70">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{b.name}</span>
                    {b.is247 && (
                      <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">
                        24/7
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 truncate">{b.area}, {b.emirate}</div>
                  <a 
                    href={`tel:${b.phone}`}
                    className="text-[11px] text-[#008f82] font-semibold hover:underline mt-1 block"
                  >
                    {b.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom row: Legal & Regulatory */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Licensed Community Pharmacy Group • MOHAP & DHA Compliant</span>
          </div>

          <div>
            © {new Date().getFullYear()} Sun Pharmacy LLC ({BRAND_INFO.domain}). All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
