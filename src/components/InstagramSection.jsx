import React from 'react';
import { 
  Heart, 
  MessageCircle, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BRAND_INFO, INSTAGRAM_POSTS } from '../data/pharmacyData';

export default function InstagramSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200/80 text-xs font-bold text-pink-700 uppercase tracking-wider mb-2.5">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Connect on Instagram</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Follow {BRAND_INFO.instagramHandle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Daily skincare regimens, pharmacist health advice, new luxury arrivals, and wellness tips tailored for life in Dubai and Sharjah.
            </p>
          </div>

          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer self-start md:self-end"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @sunpharmacy.ae</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Instagram Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-3xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              <img
                src={post.imageUrl}
                alt="Sun Pharmacy Instagram"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <InstagramIcon className="w-4 h-4 text-white" />
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-white/95 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs font-bold text-white/90 pt-2 border-t border-white/20">
                    <span className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 text-white/80" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Verified Community Strip */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#008f82]" />
            <span className="font-semibold text-slate-700">Official Instagram Channel for Sun Pharmacy UAE</span>
          </div>
          <a
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#008f82] hover:underline font-bold"
          >
            Visit instagram.com/sunpharmacy.ae →
          </a>
        </div>

      </div>
    </section>
  );
}
