import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SlidersHorizontal, Sparkles, ArrowLeftRight, CheckCircle2, ShieldCheck, Clock, Sofa, ChefHat, BedDouble, MapPin } from 'lucide-react';

import livingBefore from '../assets/images/living_room_before_1788753582838.jpg';
import livingAfter from '../assets/images/living_room_after_1788753554413.jpg';

import kitchenBefore from '../assets/images/kitchen_before_1788758148885.jpg';
import kitchenAfter from '../assets/images/kitchen_after_1788758005217.jpg';

import bedroomBefore from '../assets/images/bedroom_before_1788758196368.jpg';
import bedroomAfter from '../assets/images/bedroom_after_1788758169274.jpg';

interface TransformationCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  roomTitle: string;
  locality: string;
  handoverDays: string;
  scopeHighlight: string;
  beforeImg: string;
  afterImg: string;
  guarantees: {
    title: string;
    description: string;
  }[];
}

export const BeforeAfterSlider: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('living');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const categories: TransformationCategory[] = [
    {
      id: 'living',
      name: 'Living Sanctum',
      icon: Sofa,
      roomTitle: 'Grand High-Rise Penthouse Living Sanctum',
      locality: 'Jubilee Hills, Hyderabad',
      handoverDays: '40 Days Strict',
      scopeHighlight: 'Italian Statuario Marble, Acoustic Fluted Wall & Concealed Ambient Coves',
      beforeImg: livingBefore,
      afterImg: livingAfter,
      guarantees: [
        {
          title: 'Zero On-Site Cutting',
          description: '85% of woodwork digitally machined in our 60,000 sq.ft precision CNC unit for silent, dust-free installation.'
        },
        {
          title: 'Calacatta Marble & Fluted Louvers',
          description: 'Seamless acoustic sub-paneling, concealed LED cove channels, and genuine bookmatched Italian marble.'
        },
        {
          title: '10-Year Physical Warranty',
          description: 'IS:710 Marine Grade BWP Plywood protected against boiling water, pests, and PUR edge-banding delamination.'
        }
      ]
    },
    {
      id: 'kitchen',
      name: 'Culinary Island',
      icon: ChefHat,
      roomTitle: 'Bespoke Haute Culinary & Waterfall Quartz Island',
      locality: 'Financial District, Hyderabad',
      handoverDays: '45 Days Strict',
      scopeHighlight: 'Italian Calacatta Waterfall Island, Smoked Oak & Charcoal Cabinetry, Built-in Miele Appliances',
      beforeImg: kitchenBefore,
      afterImg: kitchenAfter,
      guarantees: [
        {
          title: 'Precision PUR Zero-Joint Edge Bonding',
          description: 'Waterproof polyurethane edge bonding withstands boiling steam, moisture, and high heat.'
        },
        {
          title: '18mm Calacatta Quartz Waterfall',
          description: 'CNC-cut 45° mitred edge waterfall island with anti-stain antimicrobial seal.'
        },
        {
          title: 'Hafele / Blum Motion Hardware',
          description: 'Soft-close tandem drawers rated for 65,000 opening cycles with concealed electric touch-open.'
        }
      ]
    },
    {
      id: 'bedroom',
      name: 'Master Suite',
      icon: BedDouble,
      roomTitle: 'Executive Master Bedroom & Acoustic Suite',
      locality: 'Kokapet Golden Mile, Hyderabad',
      handoverDays: '42 Days Strict',
      scopeHighlight: 'Acoustic Fluted Headboard, Floating Marble Nightstands, Herringbone Smoked Oak & Ambient IoT',
      beforeImg: bedroomBefore,
      afterImg: bedroomAfter,
      guarantees: [
        {
          title: 'Acoustic Charcoal Fluted Wall',
          description: 'Pre-fabricated sound-dampening fluted panels with integrated warm LED perimeter cove illumination.'
        },
        {
          title: 'Herringbone Smoked Oak Flooring',
          description: 'European high-density moisture-resistant core with anti-scratch UV lacquer top coat.'
        },
        {
          title: 'Integrated IoT Ambient Control',
          description: 'Concealed pre-routed wiring channels for Lutron voice, mood scenes, and automated drapery motors.'
        }
      ]
    }
  ];

  const activeCategory = categories.find(c => c.id === activeCategoryId) || categories[0];

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pct);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    updatePosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      isDragging.current = true;
      updatePosition(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging.current || !e.touches[0]) return;
      updatePosition(e.touches[0].clientX);
    };

    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchmove', handleGlobalTouchMove);
    window.addEventListener('touchend', handleGlobalMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchmove', handleGlobalTouchMove);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, [updatePosition]);

  return (
    <section id="transformation" className="py-20 sm:py-24 bg-[#faf8f5] text-[#1a1a1a] border-b border-[#e8e2d9] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c5a880]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 text-[#8c6b38] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#8c6b38]" />
            <span>Visual Transformation Engine</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
            Witness the Metamorphosis:{' '}
            <span className="gold-gradient-text italic block sm:inline">Raw Shell to Bespoke Sanctum</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-normal leading-relaxed">
            Select any residential space below and drag the golden handle to inspect the millimeter-precise spatial transition from bare concrete construction to finished turnkey luxury.
          </p>
        </div>

        {/* 3 Categories Switcher Dock */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#e8e2d9] shadow-md">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategoryId === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategoryId(category.id);
                    setSliderPosition(50);
                  }}
                  className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#c5a880] to-[#b8976b] text-black shadow-md'
                      : 'text-gray-600 hover:text-black hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Space Meta Pill */}
        <div className="max-w-5xl mx-auto mb-4 flex flex-col sm:flex-row sm:items-center justify-between px-2 gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <div>
              <span className="font-serif-luxury text-base sm:text-xl font-bold text-[#111111] tracking-wide block">
                {activeCategory.roomTitle}
              </span>
              <span className="text-gray-500 text-[11px] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#8c6b38]" />
                {activeCategory.locality} • <span className="text-gray-700 font-normal">{activeCategory.scopeHighlight}</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e8e2d9] text-[#8c6b38] font-semibold self-start sm:self-center shrink-0 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#8c6b38]" />
            <span>Turnkey Handover: <strong className="text-gray-900">{activeCategory.handoverDays}</strong></span>
          </div>
        </div>

        {/* INTERACTIVE SPLIT SLIDER */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="relative h-[380px] sm:h-[480px] md:h-[580px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-[#e8e2d9] touch-none group bg-gray-900"
          >
            {/* 1. AFTER Image (Base Layer) */}
            <img
              src={activeCategory.afterImg}
              alt={`AFTER: JS GALLOR ${activeCategory.roomTitle}`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-[1.02] transition-opacity duration-300"
            />

            {/* 2. BEFORE Image (Clipped Layer - Exactly matching room geometry) */}
            <img
              src={activeCategory.beforeImg}
              alt={`BEFORE: Bare Concrete ${activeCategory.roomTitle}`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none filter contrast-110 transition-opacity duration-300"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
              }}
            />

            {/* 3. Golden Divider Line & Drag Handle */}
            <div
              className="absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#e2cfb4] via-[#c5a880] to-[#b8976b] shadow-[0_0_25px_#c5a880] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-[#8c6b38] text-black flex items-center justify-center shadow-[0_0_30px_rgba(197,168,128,0.7)] group-hover:scale-110 transition-transform">
                <ArrowLeftRight className="w-5 h-5 text-[#8c6b38]" />
              </div>
            </div>

            {/* Overlay Labels */}
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
              <span className="px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/25 shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>BEFORE: Raw Concrete Shell</span>
              </span>
            </div>

            <div className="absolute top-6 right-6 z-10 pointer-events-none">
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#c5a880] via-[#e2cfb4] to-[#b8976b] text-black text-xs font-bold uppercase tracking-wider shadow-2xl flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>AFTER: JS GALLOR {activeCategory.handoverDays} Handover</span>
              </span>
            </div>

            {/* Bottom Quick Drag Indicator */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 pointer-events-none bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] text-gray-200 border border-white/10 hidden sm:block">
              ← Drag slider left or right to reveal transformation →
            </div>
          </div>

          {/* Dynamic Technical Guarantees for the Active Category - Increased Font Size */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {activeCategory.guarantees.map((guarantee, i) => (
              <div 
                key={i} 
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e2d8ca] shadow-md hover:shadow-lg hover:border-[#c5a880] transition-all flex items-start gap-4 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#c5a880]/15 border border-[#c5a880]/30 flex items-center justify-center text-[#8c6b38] shrink-0 mt-0.5 group-hover:bg-[#c5a880] group-hover:text-black transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#111111] tracking-tight">
                    {guarantee.title}
                  </h4>
                  <p className="text-sm sm:text-[15px] text-gray-700 mt-2 font-normal leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
