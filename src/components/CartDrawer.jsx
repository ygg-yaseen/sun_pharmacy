import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  MessageCircle, 
  ArrowRight, 
  Truck, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { BRAND_INFO, BRANCHES } from '../data/pharmacyData';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart 
}) {
  const [selectedBranch, setSelectedBranch] = useState('al-barsha');
  const [deliveryNotes, setDeliveryNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const isFreeDelivery = subtotal >= BRAND_INFO.freeDeliveryThreshold;
  const deliveryFee = isFreeDelivery || subtotal === 0 ? 0 : 15;
  const grandTotal = subtotal + deliveryFee;
  const freeDeliveryRemaining = Math.max(0, BRAND_INFO.freeDeliveryThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / BRAND_INFO.freeDeliveryThreshold) * 100);

  const handleWhatsAppCheckout = () => {
    const branchObj = BRANCHES.find(b => b.id === selectedBranch);
    const branchName = branchObj ? branchObj.name : 'Nearest Sun Pharmacy';
    const targetWhatsApp = (branchObj && branchObj.whatsapp) 
      ? branchObj.whatsapp 
      : BRAND_INFO.centralWhatsApp;

    let itemsText = items.map((item, i) => 
      `${i + 1}. *${item.name}* (${item.brand})\n   Qty: ${item.quantity} × AED ${item.price} = AED ${item.quantity * item.price}`
    ).join('\n\n');

    const message = `*NEW ORDER - SUN PHARMACY UAE BAG*\n` +
      `--------------------------------\n` +
      `📍 *Preferred Branch:* ${branchName}\n` +
      `--------------------------------\n` +
      `*ORDER ITEMS:*\n${itemsText}\n\n` +
      `--------------------------------\n` +
      `Subtotal: AED ${subtotal}\n` +
      `Delivery Fee: ${deliveryFee === 0 ? 'FREE' : `AED ${deliveryFee}`}\n` +
      `*Total Payable:* AED ${grandTotal}\n` +
      `--------------------------------\n` +
      `Notes: ${deliveryNotes || 'None'}\n` +
      `Please confirm stock and delivery ETA. Thank you!`;

    const waUrl = `https://wa.me/${targetWhatsApp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200">
          
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-[#008f82]/10 rounded-xl text-[#008f82]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Your Shopping Bag</h3>
                <p className="text-xs text-slate-500">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Delivery Meter */}
          {items.length > 0 && (
            <div className="px-6 py-3 bg-emerald-50/70 border-b border-emerald-100/80">
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-900 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#008f82]" />
                  {isFreeDelivery ? (
                    <span className="font-bold text-emerald-700">Congratulations! You get FREE Express Delivery!</span>
                  ) : (
                    <span>Add <strong className="text-[#008f82]">AED {freeDeliveryRemaining.toFixed(0)}</strong> more for FREE delivery</span>
                  )}
                </span>
                <span>{progressPercent.toFixed(0)}%</span>
              </div>
              <div className="w-full h-1.5 bg-emerald-200/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#008f82] to-[#58a738] transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Your bag is empty</h4>
                <p className="text-xs text-slate-500 max-w-xs mt-1">
                  Discover our dermo-cosmetics, vitamins, and healthcare range curated for the UAE climate.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-5 py-2.5 rounded-xl bg-[#008f82] hover:bg-[#00766b] text-white text-xs font-bold shadow-md shadow-[#008f82]/25"
                >
                  Explore Catalog
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-3.5 p-3.5 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 shadow-xs transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl bg-slate-50 border border-slate-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-slate-400 hover:text-rose-500 p-0.5 transition-colors"
                          title="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-[#008f82] font-semibold uppercase">
                        {item.brand}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-1">
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-slate-100 text-slate-600 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-slate-100 text-slate-600 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-xs font-bold text-slate-900">
                        AED {item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & WhatsApp Checkout */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-slate-100 bg-slate-50/80 space-y-4">
              {/* Branch Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#008f82]" />
                  <span>Fulfill from Sun Pharmacy Branch:</span>
                </label>
                <select
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-800 outline-none focus:border-[#008f82]"
                >
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name} ({b.emirate}) {b.isOpen247 ? '• 24/7' : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Order Calculation */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">AED {subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Express Delivery (UAE)</span>
                  <span className="font-semibold text-emerald-700">
                    {deliveryFee === 0 ? 'FREE' : `AED ${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="text-[#008f82]">AED {grandTotal}</span>
                </div>
              </div>

              {/* Checkout WhatsApp Action */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant WhatsApp Checkout (AED {grandTotal})</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pay via Apple Pay, Card, or Cash on Delivery</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
