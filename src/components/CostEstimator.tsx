import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, MessageSquare, Sparkles, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { BhkType, TierLevel } from '../types/interior';
import { ROOM_OPTIONS, TIERS_DATA } from '../data/interiorData';

interface CostEstimatorProps {
  selectedTier: TierLevel;
  onTierChange: (tier: TierLevel) => void;
  onOpenConsultation: () => void;
}

const BHK_MULTIPLIERS: Record<BhkType, { factor: number; defaultRooms: string[] }> = {
  '1 BHK': { factor: 0.75, defaultRooms: ['kitchen', 'master_bedroom', 'living_dining'] },
  '2 BHK': { factor: 1.0, defaultRooms: ['kitchen', 'master_bedroom', 'living_dining', 'guest_kids_room'] },
  '3 BHK': { factor: 1.35, defaultRooms: ['kitchen', 'master_bedroom', 'living_dining', 'guest_kids_room', 'false_ceiling_lighting', 'curtains_blinds_wallpapers'] },
  '4 BHK': { factor: 1.75, defaultRooms: ['kitchen', 'master_bedroom', 'living_dining', 'guest_kids_room', 'false_ceiling_lighting', 'smart_automation', 'curtains_blinds_wallpapers'] },
  'Villa / Penthouse': { factor: 2.35, defaultRooms: ['kitchen', 'master_bedroom', 'living_dining', 'guest_kids_room', 'false_ceiling_lighting', 'smart_automation', 'curtains_blinds_wallpapers'] }
};

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  selectedTier,
  onTierChange,
  onOpenConsultation
}) => {
  const [bhk, setBhk] = useState<BhkType>('3 BHK');
  const [selectedRooms, setSelectedRooms] = useState<string[]>(BHK_MULTIPLIERS['3 BHK'].defaultRooms);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  // Handle BHK change
  const handleBhkChange = (newBhk: BhkType) => {
    setBhk(newBhk);
    // keep or supplement rooms
    const defaults = BHK_MULTIPLIERS[newBhk].defaultRooms;
    setSelectedRooms((prev) => Array.from(new Set([...prev, ...defaults])));
  };

  // Toggle Room
  const toggleRoom = (roomId: string) => {
    setSelectedRooms((prev) =>
      prev.includes(roomId) ? prev.filter((id) => id !== roomId) : [...prev, roomId]
    );
  };

  // Compute live price
  const calculation = useMemo(() => {
    const tier = TIERS_DATA.find((t) => t.id === selectedTier) || TIERS_DATA[1];
    const multiplier = BHK_MULTIPLIERS[bhk].factor;

    let baseSubtotal = 0;
    ROOM_OPTIONS.forEach((room) => {
      if (selectedRooms.includes(room.id)) {
        baseSubtotal += room.baseCost[selectedTier];
      }
    });

    const calculatedTotal = Math.round(baseSubtotal * multiplier);
    const minEstimate = Math.round(calculatedTotal * 0.95);
    const maxEstimate = Math.round(calculatedTotal * 1.08);

    // Approximate EMI per month (5-year tenure at 9.0% p.a.)
    const monthlyRate = 0.09 / 12;
    const tenureMonths = 60;
    const emi = Math.round(
      (calculatedTotal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1)
    );

    return {
      tier,
      calculatedTotal,
      minEstimate,
      maxEstimate,
      emi,
      deliveryDays: tier.deliveryDays,
      warrantyYears: tier.warrantyYears
    };
  }, [bhk, selectedTier, selectedRooms]);

  // Format currency in Indian Rupees
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // WhatsApp dispatch message
  const handleWhatsAppQuote = () => {
    const tierName = calculation.tier.name;
    const roomNames = ROOM_OPTIONS.filter((r) => selectedRooms.includes(r.id))
      .map((r) => r.name)
      .join(', ');

    const text = `*New Interior Estimate Inquiry from Website*%0A` +
      `*Name:* ${customerName ? customerName : 'Homeowner'}%0A` +
      `*Phone:* ${customerPhone ? customerPhone : 'Not provided'}%0A` +
      `*Property Size:* ${bhk}%0A` +
      `*Selected Tier:* ${tierName}%0A` +
      `*Included Spaces:* ${roomNames}%0A` +
      `*Estimated Budget:* ${formatINR(calculation.minEstimate)} – ${formatINR(calculation.maxEstimate)}%0A` +
      `*Handover Target:* ${calculation.deliveryDays} Days%0A%0A` +
      `Please share the itemized quotation breakdown and 3D layout options for this configuration.`;

    const whatsappUrl = `https://wa.me/918143678491?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="estimator" className="py-24 bg-[#faf8f5] text-[#111111] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c5a880]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#8c6b38] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Live Pricing Engine</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            Calculate Your Home Interior Cost in 30 Seconds
          </h2>
          <p className="text-[#555555] text-base sm:text-lg">
            No guesswork, zero hidden markups. Tailor your floor plan, choose your tier, and view instantaneous factory-backed costs.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Selectors */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-[#e8e2d9] shadow-xl">
            {/* Step 1: BHK Selection */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8c6b38] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#8c6b38] text-white inline-flex items-center justify-center text-xs font-bold">1</span>
                  Select Floorplan Configuration
                </label>
                <span className="text-xs text-[#777777]">{bhk} selected</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                {(Object.keys(BHK_MULTIPLIERS) as BhkType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleBhkChange(type)}
                    className={`py-3 px-2 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                      bhk === type
                        ? 'bg-gradient-to-r from-[#8c6b38] to-[#c5a880] text-white border-[#8c6b38] shadow-md scale-105'
                        : 'bg-[#faf8f5] text-[#444444] border-[#e8e2d9] hover:bg-white hover:border-[#8c6b38]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tier Selection */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8c6b38] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#8c6b38] text-white inline-flex items-center justify-center text-xs font-bold">2</span>
                  Select Finish & Material Tier
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIERS_DATA.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => onTierChange(t.id)}
                    className={`p-4 rounded-2xl text-left transition-all border relative cursor-pointer ${
                      selectedTier === t.id
                        ? 'bg-[#faf8f5] border-[#8c6b38] shadow-md ring-1 ring-[#8c6b38]'
                        : 'bg-white border-[#e8e2d9] hover:bg-[#faf8f5]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#111111] mb-1 flex items-center justify-between">
                      <span>{t.name}</span>
                      {selectedTier === t.id && (
                        <Check className="w-4 h-4 text-[#8c6b38]" />
                      )}
                    </div>
                    <div className="text-[11px] text-[#8c6b38] font-semibold mb-1 line-clamp-1">
                      {t.tierDescriptor}
                    </div>
                    <div className="text-[11px] text-[#777777] line-clamp-1">
                      {t.deliveryDays} Days Handover
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Room Selection */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#8c6b38] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#8c6b38] text-white inline-flex items-center justify-center text-xs font-bold">3</span>
                  Customise Included Spaces & Modules
                </label>
                <span className="text-xs text-[#777777]">{selectedRooms.length} of {ROOM_OPTIONS.length} selected</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ROOM_OPTIONS.map((room) => {
                  const isChecked = selectedRooms.includes(room.id);
                  const roomCost = Math.round(room.baseCost[selectedTier] * BHK_MULTIPLIERS[bhk].factor);

                  return (
                    <div
                      key={room.id}
                      onClick={() => toggleRoom(room.id)}
                      className={`p-3.5 rounded-xl cursor-pointer transition-all border flex items-start justify-between gap-3 ${
                        isChecked
                          ? 'bg-[#faf8f5] border-[#8c6b38] shadow-sm'
                          : 'bg-white border-[#e8e2d9] opacity-75 hover:opacity-100 hover:border-gray-300'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="text-xs font-semibold text-[#111111] flex items-center gap-2">
                          <span className={`w-3.5 h-3.5 rounded flex items-center justify-center border ${
                            isChecked ? 'bg-[#8c6b38] border-[#8c6b38] text-white' : 'border-gray-300'
                          }`}>
                            {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </span>
                          <span>{room.name}</span>
                        </div>
                        <p className="text-[11px] text-[#666666] pl-5.5 leading-snug">
                          {room.description}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono font-bold text-[#8c6b38]">
                          {formatINR(roomCost)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Price Card & Immediate Action */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#c5a880]/40 shadow-xl relative overflow-hidden">
              {/* Shimmer line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8c6b38] to-transparent" />

              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-[#8c6b38]">
                  Live Estimated Quotation
                </span>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  100% Price Lock
                </span>
              </div>

              {/* Main Price Output */}
              <div className="mb-6">
                <div className="text-3xl sm:text-4xl font-bold font-mono text-[#111111] tracking-tight">
                  {formatINR(calculation.minEstimate)}
                  <span className="text-[#777777] text-lg font-light"> to </span>
                  <br className="sm:hidden" />
                  {formatINR(calculation.maxEstimate)}
                </div>
                <div className="pt-2 text-center text-[11px] text-[#666666]">
                  Inclusive of material, precision factory fabrication, transport, installation & taxes.
                </div>
              </div>

              {/* Specs pill row */}
              <div className="grid grid-cols-2 gap-3 mb-6 bg-[#faf8f5] p-4 rounded-2xl border border-[#e8e2d9] text-xs">
                <div>
                  <div className="text-[#777777] text-[11px]">Guaranteed Handover</div>
                  <div className="font-bold text-[#111111] flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#8c6b38]" />
                    <span>{calculation.deliveryDays} Days</span>
                  </div>
                </div>
                <div>
                  <div className="text-[#777777] text-[11px]">Comprehensive Warranty</div>
                  <div className="font-bold text-[#111111] flex items-center gap-1.5 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8c6b38]" />
                    <span>{calculation.warrantyYears} Years</span>
                  </div>
                </div>
                <div className="col-span-2 pt-2 border-t border-[#e8e2d9] flex justify-between items-center">
                  <span className="text-[#777777] text-[11px]">Easy EMI Options:</span>
                  <span className="font-mono text-[#8c6b38] font-bold">From {formatINR(calculation.emi)} / month</span>
                </div>
              </div>

              {/* Instant WhatsApp Lead Capture */}
              <div className="space-y-3 pt-2">
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] text-xs text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#8c6b38] transition-all"
                  />
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={10}
                    placeholder="Mobile Number (e.g. 8143678491)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] text-xs text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#8c6b38] transition-all"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 transition-all active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Get Itemized PDF on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-2xl bg-[#faf8f5] hover:bg-gray-100 text-[#111111] border border-[#e8e2d9] text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                >
                  Book Free In-Person / 3D Walkthrough
                </button>
              </div>

              <div className="text-[11px] text-[#777777] text-center mt-4">
                ★ No spam guarantee. We share instant estimates directly via official WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
