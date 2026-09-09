import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ShoppingBag, 
  MessageCircle, 
  Star, 
  Sparkles, 
  Check, 
  Info, 
  ArrowRight,
  Filter,
  CheckCircle2,
  X
} from 'lucide-react';
import { FEATURED_PRODUCTS, CATEGORIES, BRAND_INFO } from '../data/pharmacyData';

export default function ProductCatalog({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [addedItemNotice, setAddedItemNotice] = useState(null);

  const filteredProducts = useMemo(() => {
    return FEATURED_PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAdd = (product, e) => {
    if (e) e.stopPropagation();
    onAddToCart(product);
    setAddedItemNotice(product.id);
    setTimeout(() => setAddedItemNotice(null), 1800);
  };

  const handleWhatsAppOrderProduct = (product, e) => {
    if (e) e.stopPropagation();
    const text = `Hello Sun Pharmacy, I want to order "${product.name}" (${product.brand}) for AED ${product.price}. Please confirm stock at nearest branch and delivery timeline.`;
    window.open(`https://wa.me/${BRAND_INFO.centralWhatsApp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-[#F8FAF9] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-[#008f82] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Pharmaceutical & Beauty Range</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Clinical Dermo & Longevity Essentials
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              100% authentic dermatological treatments, longevity supplements, and family health essentials sourced directly from authorized UAE agents.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xs">
            Free Express Delivery in UAE on orders above <span className="text-[#008f82] font-bold">AED 100</span>
          </div>
        </div>

        {/* Filter & Search Bar Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 mb-8 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, ingredients..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 focus:border-[#008f82] focus:ring-2 focus:ring-[#008f82]/20 text-sm outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <span className="text-xs text-slate-500 font-semibold whitespace-nowrap">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:border-[#008f82] outline-none"
              >
                <option value="featured">Featured Selections</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#008f82] text-white shadow-sm shadow-[#008f82]/30'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">No matching products found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try searching with different keywords or chat with our pharmacist on WhatsApp for unlisted items.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-4 py-2 bg-[#008f82] text-white text-xs font-semibold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setActiveModalProduct(product)}
                className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#008f82]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer relative"
              >
                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#008f82] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Product Image */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Product Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Brand & Volume */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span className="font-bold uppercase tracking-wide text-[#008f82]">
                        {product.brand}
                      </span>
                      <span className="text-[11px] bg-slate-100 px-2 py-0.5 rounded-md">
                        {product.volume}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008f82] transition-colors line-clamp-2 leading-snug">
                      {product.name}
                    </h3>

                    {/* Ratings */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex items-center text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <span className="text-xs font-bold text-slate-800">{product.rating}</span>
                      <span className="text-[11px] text-slate-400">({product.reviewsCount})</span>
                    </div>

                    {/* Indications tags */}
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {product.indications.slice(0, 2).map((ind, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA Buttons */}
                  <div className="pt-4 mt-3 border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-3">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-base sm:text-lg font-black text-slate-900">
                          AED {product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-xs text-slate-400 line-through">
                            AED {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        Save AED {product.originalPrice - product.price}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={(e) => handleAdd(product, e)}
                        className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          addedItemNotice === product.id
                            ? 'bg-emerald-600 text-white shadow-inner'
                            : 'bg-slate-900 hover:bg-[#008f82] text-white shadow-sm'
                        }`}
                      >
                        {addedItemNotice === product.id ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add to Bag</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={(e) => handleWhatsAppOrderProduct(product, e)}
                        className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl border border-emerald-200 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 text-xs font-semibold transition-colors cursor-pointer"
                        title="Order this directly on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Order WA</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-slate-100 text-left">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="aspect-square bg-slate-50 p-6 flex items-center justify-center">
                <img
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  className="w-full h-full object-cover rounded-2xl shadow-sm"
                />
              </div>

              <div className="p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#008f82] bg-emerald-50 px-2.5 py-1 rounded-full">
                    {activeModalProduct.brand}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                    {activeModalProduct.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-black text-slate-900">
                      AED {activeModalProduct.price}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      AED {activeModalProduct.originalPrice}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">({activeModalProduct.volume})</span>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {activeModalProduct.description}
                  </p>

                  <div className="mt-4">
                    <div className="text-xs font-bold text-slate-800 mb-1.5">Key Indications:</div>
                    <div className="space-y-1">
                      {activeModalProduct.indications.map((ind, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#58a738]" />
                          <span>{ind}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(activeModalProduct);
                      setActiveModalProduct(null);
                    }}
                    className="flex-1 py-3 bg-[#008f82] hover:bg-[#00766b] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md shadow-[#008f82]/25"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag (AED {activeModalProduct.price})</span>
                  </button>
                  <button
                    onClick={() => handleWhatsAppOrderProduct(activeModalProduct)}
                    className="p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-xl"
                    title="Order via WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
