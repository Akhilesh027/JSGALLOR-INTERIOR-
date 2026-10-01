import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/interiorData';
import { 
  ChefHat, Sofa, BedDouble, Cpu, Lightbulb, 
  CheckCircle2, ArrowRight, ArrowLeft, Sparkles, ShieldCheck, 
  Clock, Factory, MessageSquare, Eye, Maximize2, 
  Layers, Sliders, ChevronLeft, ChevronRight, Check
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface ServicesPageProps {
  onOpenConsultation: () => void;
}

// Architectural Hotspots per discipline
const HOTSPOTS_DATA: Record<string, { x: number; y: number; label: string; desc: string }[]> = {
  'modular-kitchens': [
    { x: 35, y: 65, label: '18mm Quartz & Onyx Island', desc: 'Premium Quartz & Onyx Stone pre-polished seamless waterfall miter joints with zero-chip bevelling.' },
    { x: 68, y: 38, label: 'Blum Servo-Drive', desc: 'Electric touch-to-open soft-close drawer system calibrated for 65,000 cycles.' },
    { x: 22, y: 32, label: 'PUR Zero-Joint Bonding', desc: 'Waterproof polyurethane edge sealing at 150°C prevents moisture ingress permanently.' }
  ],
  'living-dining': [
    { x: 50, y: 45, label: 'Italian Statuario Feature', desc: 'Hand-selected bookmatched natural marble slab with perimeter recessed 3000K warm LED.' },
    { x: 20, y: 55, label: 'Acoustic Charcoal Louvers', desc: 'CNC fluted wall panels engineered for residential cinema sound dampening.' },
    { x: 75, y: 30, label: 'Magnetic Architectural Track', desc: 'Recessed low-voltage 24V magnetic channels with interchangeable spotlights.' }
  ],
  'master-suites': [
    { x: 42, y: 48, label: 'Tinted Bronze Glass Profiles', desc: 'Anodized slim aluminium sliding frames with air-cushioned silent soft-stops.' },
    { x: 72, y: 58, label: 'Concealed Proximity LEDs', desc: 'Automatic vertical profile channels inside wardrobe bays triggering upon door slide.' },
    { x: 24, y: 72, label: 'Hydraulic Storage Platform', desc: 'Dual heavy-duty hydraulic gas struts supporting upholstered acoustic headboard.' }
  ],
  'smart-automation': [
    { x: 46, y: 36, label: 'Lutron Scene Keypads', desc: 'One-touch Welcome, Dine, Cinema, and Rest architectural presets.' },
    { x: 26, y: 64, label: 'Motorized Drapery Motors', desc: 'Whisper-quiet automated curtain tracks synced to sunrise/sunset schedules.' },
    { x: 76, y: 68, label: 'Architectural In-Ceiling Audio', desc: 'Flush magnetic architectural speakers with discrete subwoofer channel.' }
  ],
  'lighting-ceiling': [
    { x: 50, y: 25, label: 'Anti-Crack Gypsum System', desc: 'Saint-Gobain false ceiling reinforced with fiberglass mesh joint tape.' },
    { x: 25, y: 32, label: 'Deep Anti-Glare COBs', desc: 'Recessed architectural downlights with 95+ Color Rendering Index (CRI).' },
    { x: 75, y: 35, label: 'Continuous Indirect Cove', desc: 'High-density 24V flicker-free LED architectural strips producing unbroken warm glow.' }
  ]
};

// Material Swatches per discipline
const MATERIAL_SWATCHES: Record<string, { name: string; origin: string; type: string; color: string }[]> = {
  'modular-kitchens': [
    { name: 'Premium Quartz & Onyx Stone', origin: '18mm Engineered & Exotic', type: 'Anti-Stain Top', color: '#e5e0d8' },
    { name: 'Smoked European Oak', origin: 'Natural Veneer', type: 'PU Matt Polish', color: '#4a3b32' },
    { name: 'Brushed Brass PVD', origin: 'Anodized Profile', type: 'Handleless Gola', color: '#b8976b' },
    { name: 'BWP Marine Ply (IS:710)', origin: 'Century Calibrated', type: 'Core Carcass', color: '#8b5a2b' }
  ],
  'living-dining': [
    { name: 'Statuario Marble', origin: 'Imported Italian', type: 'Bookmatched Slab', color: '#f0ede6' },
    { name: 'Charcoal Acoustic Felt', origin: 'High-Density Polymer', type: 'Sound Louvers', color: '#2b2d35' },
    { name: 'Warm 3000K Diffusers', origin: 'Osram Architectural', type: 'Linear Cove', color: '#fae19c' },
    { name: 'Bronze Tinted Glass', origin: 'Saint-Gobain 8mm', type: 'Tempered Display', color: '#594939' }
  ],
  'master-suites': [
    { name: 'Belgian Bouclé Fabric', origin: 'Textured Upholstery', type: 'Acoustic Headboard', color: '#d9d2c7' },
    { name: 'Anti-Scratch Silk Acrylic', origin: 'Merino 1.2mm', type: 'Wardrobe Shutters', color: '#1f242d' },
    { name: 'Champagne Metal Trim', origin: 'Aviation Aluminum', type: 'Door Extrusions', color: '#c5a880' },
    { name: 'Velvet Jewelry Lining', origin: 'Plush Microfiber', type: 'Accessory Trays', color: '#3b2426' }
  ],
  'smart-automation': [
    { name: 'Lutron Glass Keypad', origin: 'Architectural Touch', type: '4-Scene Presets', color: '#0f1115' },
    { name: 'Somfy Silent Motors', origin: 'Decibel-Dampened', type: 'Drapery Automation', color: '#4a5568' },
    { name: 'Bespoke Perforated Mesh', origin: 'Sound-Transparent', type: 'Acoustic Theaters', color: '#1a202c' },
    { name: 'Biometric Smart Lock', origin: 'Zinc Alloy + Glass', type: 'Encrypted Access', color: '#2d3748' }
  ],
  'lighting-ceiling': [
    { name: 'Saint-Gobain Gyproc', origin: 'Fiber-Reinforced', type: 'Anti-Sag Ceiling', color: '#f7fafc' },
    { name: 'Magnetic Track Rail', origin: 'Matte Obsidian', type: 'Low-Voltage 24V', color: '#171923' },
    { name: 'Honeycomb Glare Filter', origin: 'Aluminum Hexagonal', type: 'UGR < 16 Glare-Free', color: '#2d3748' },
    { name: '95+ CRI Warm LED', origin: 'High Color Fidelity', type: 'Natural Rendering', color: '#fbd38d' }
  ]
};

// Alternative angle photography
const PERSPECTIVE_ANGLES: Record<string, string[]> = {
  'modular-kitchens': [
    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=80'
  ],
  'living-dining': [
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80'
  ],
  'master-suites': [
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=80'
  ],
  'smart-automation': [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1400&q=80'
  ],
  'lighting-ceiling': [
    'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80'
  ]
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const { navigate } = useRouter();

  // State: null means pure image lookbook grid; string ID means transformed full-width atelier
  const [activeExpandedId, setActiveExpandedId] = useState<string | null>(null);
  
  // Sub-states inside the transformed atelier
  const [activeTab, setActiveTab] = useState<'render' | 'blueprint' | 'materials'>('render');
  const [selectedPerspective, setSelectedPerspective] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    ChefHat: <ChefHat className="w-5 h-5 text-amber-400" />,
    Sofa: <Sofa className="w-5 h-5 text-amber-400" />,
    BedDouble: <BedDouble className="w-5 h-5 text-amber-400" />,
    Cpu: <Cpu className="w-5 h-5 text-amber-400" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-amber-400" />
  };

  const activeIndex = activeExpandedId
    ? SERVICES_DATA.findIndex((s) => s.id === activeExpandedId)
    : -1;
  const current = activeIndex >= 0 ? SERVICES_DATA[activeIndex] : null;

  const currentHotspots = current ? (HOTSPOTS_DATA[current.id] || []) : [];
  const currentSwatches = current ? (MATERIAL_SWATCHES[current.id] || []) : [];
  const currentPerspectives = current ? (PERSPECTIVE_ANGLES[current.id] || [current.image]) : [];

  const handleSelectDiscipline = (id: string) => {
    setActiveExpandedId(id);
    setActiveTab('render');
    setSelectedPerspective(0);
    setActiveHotspot(null);
    window.scrollTo({ top: 340, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (activeIndex >= 0) {
      const nextIndex = (activeIndex + 1) % SERVICES_DATA.length;
      handleSelectDiscipline(SERVICES_DATA[nextIndex].id);
    }
  };

  const handlePrev = () => {
    if (activeIndex >= 0) {
      const prevIndex = (activeIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length;
      handleSelectDiscipline(SERVICES_DATA[prevIndex].id);
    }
  };

  return (
    <div className="pt-24 pb-28 bg-[#faf8f5] text-[#111111] selection:bg-[#c5a880]/30 selection:text-black min-h-screen">
      
      {/* Studio Master Header */}
      <section className="py-16 md:py-20 relative overflow-hidden text-center border-b border-[#e8e2d9]">
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c5a880]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
            Five Specialized Disciplines.{' '}
            <span className="gold-gradient-text italic block sm:inline">Turnkey Architectural Execution.</span>
          </h1>

          <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed max-w-3xl mx-auto">
            {activeExpandedId
              ? 'Inspecting the Architectural Atelier & Engineering Dossier. Toggle between 4K renders, technical CAD blueprints, and material swatches.'
              : 'Click any visual discipline below to transform the image into an expansive full-width architectural atelier with live hotspots, CAD blueprints, and material tactile swatches.'}
          </p>

          {/* Quick Indicator Strip */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-[#666666] font-mono">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 10-Year Structural Warranty
            </span>
            <span className="flex items-center gap-2">
              <Factory className="w-4 h-4 text-[#8c6b38]" /> In-House CNC Factory
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-600" /> 40–65 Day Handover
            </span>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* ========================================================================= */}
        {/* STATE 1: PURE IMAGE ARCHITECTURAL EXHIBITION LOOKBOOK (NO EXPANDED STATE) */}
        {/* Distinctive Asymmetrical Luxury Magazine / Atelier Grid Layout */}
        {/* ========================================================================= */}
        {!activeExpandedId && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between border-b border-[#e8e2d9] pb-4">
              <div className="text-xs uppercase font-bold tracking-widest text-[#8c6b38] flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Architectural Exhibition Lookbook • 5 Disciplines</span>
              </div>
              <span className="text-xs text-[#777777] font-mono">
                Click any image to expand full-width atelier
              </span>
            </div>

            {/* Asymmetrical High-Impact Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Card 01: Hero Feature (Modular Kitchens) - 7 Cols */}
              <div 
                onClick={() => handleSelectDiscipline('modular-kitchens')}
                className="md:col-span-7 group relative h-[440px] sm:h-[480px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#c5a880] shadow-2xl transition-all duration-700 select-none bg-black"
              >
                <img 
                  src={SERVICES_DATA[0].image} 
                  alt={SERVICES_DATA[0].title}
                  className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#c5a880]/30 text-amber-300 text-xs font-mono font-bold">
                    01 // Bespoke Culinary Engineering
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center">
                    {iconMap['ChefHat']}
                  </div>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#c5a880] font-mono">
                    Zero-Joint PUR Edge-Banding • Blum Servo-Drive
                  </span>
                  <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white group-hover:text-[#c5a880] transition-colors">
                    {SERVICES_DATA[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 font-light max-w-xl">
                    {SERVICES_DATA[0].description}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Click Image to Open Architectural Atelier & Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card 02: Living & Dining Lounges - 5 Cols */}
              <div 
                onClick={() => handleSelectDiscipline('living-dining')}
                className="md:col-span-5 group relative h-[440px] sm:h-[480px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#c5a880] shadow-2xl transition-all duration-700 select-none bg-black"
              >
                <img 
                  src={SERVICES_DATA[1].image} 
                  alt={SERVICES_DATA[1].title}
                  className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#c5a880]/30 text-amber-300 text-xs font-mono font-bold">
                    02 // Architectural Salons
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center">
                    {iconMap['Sofa']}
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#c5a880] font-mono">
                    Bookmatched Statuario • Fluted Acoustics
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white group-hover:text-[#c5a880] transition-colors">
                    {SERVICES_DATA[1].title}
                  </h3>
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Click Image to Transform</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card 03: Master & Bedroom Suites - 6 Cols */}
              <div 
                onClick={() => handleSelectDiscipline('master-suites')}
                className="md:col-span-6 group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#c5a880] shadow-2xl transition-all duration-700 select-none bg-black"
              >
                <img 
                  src={SERVICES_DATA[2].image} 
                  alt={SERVICES_DATA[2].title}
                  className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#c5a880]/30 text-amber-300 text-[11px] font-mono font-bold">
                    03 // Private Sanctuaries
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center">
                    {iconMap['BedDouble']}
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 space-y-1.5">
                  <span className="text-[11px] uppercase tracking-widest text-[#c5a880] font-mono">
                    Walk-In Glass • Soft Damping
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white group-hover:text-[#c5a880] transition-colors">
                    {SERVICES_DATA[2].title}
                  </h3>
                  <div className="pt-1 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Click to Expand</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card 04: Smart Automation - 6 Cols */}
              <div 
                onClick={() => handleSelectDiscipline('smart-automation')}
                className="md:col-span-6 group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#c5a880] shadow-2xl transition-all duration-700 select-none bg-black"
              >
                <img 
                  src={SERVICES_DATA[3].image} 
                  alt={SERVICES_DATA[3].title}
                  className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />
                
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#c5a880]/30 text-amber-300 text-[11px] font-mono font-bold">
                    04 // IoT & Intelligence
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center">
                    {iconMap['Cpu']}
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 space-y-1.5">
                  <span className="text-[11px] uppercase tracking-widest text-[#c5a880] font-mono">
                    Lutron Scenes • Motorized Drapes
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white group-hover:text-[#c5a880] transition-colors">
                    {SERVICES_DATA[3].title}
                  </h3>
                  <div className="pt-1 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Click to Expand</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card 05: Architectural Lighting & Ceilings - Full 12 Cols Panoramic Banner */}
              <div 
                onClick={() => handleSelectDiscipline('lighting-ceiling')}
                className="md:col-span-12 group relative h-[320px] sm:h-[360px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#c5a880] shadow-2xl transition-all duration-700 select-none bg-black"
              >
                <img 
                  src={SERVICES_DATA[4].image} 
                  alt={SERVICES_DATA[4].title}
                  className="w-full h-full object-cover filter brightness-[0.8] group-hover:brightness-95 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent" />
                
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#c5a880]/30 text-amber-300 text-xs font-mono font-bold">
                    05 // Luminous Architecture & False Ceilings
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center">
                    {iconMap['Lightbulb']}
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 max-w-2xl space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#c5a880] font-mono">
                    Saint-Gobain Anti-Crack • 95+ CRI Magnetic Tracks
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white group-hover:text-[#c5a880] transition-colors">
                    {SERVICES_DATA[4].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-light hidden sm:block">
                    {SERVICES_DATA[4].description}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
                    <span>Click Image to Open Architectural Atelier & Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STATE 2: TRANSFORMED FULL-WIDTH ARCHITECTURAL ATELIER (OTHERS HIDDEN)     */}
        {/* Highly Effective, Multi-Layered Console with 4K / CAD / Swatches / Hotspots */}
        {/* ========================================================================= */}
        {activeExpandedId && current && (
          <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            
            {/* Atelier Command Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#e8e2d9] shadow-sm">
              <button
                onClick={() => setActiveExpandedId(null)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#faf8f5] hover:bg-gray-100 text-[#111111] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#e8e2d9] hover:border-[#8c6b38]"
              >
                <ArrowLeft className="w-4 h-4 text-[#8c6b38]" />
                <span>← Return to Exhibition Lookbook</span>
              </button>

              {/* Center Discipline Switcher Ribbon */}
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
                {SERVICES_DATA.map((s, idx) => {
                  const isCurrent = s.id === activeExpandedId;
                  return (
                    <button
                      key={s.id}
                      onClick={() => handleSelectDiscipline(s.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        isCurrent
                          ? 'bg-[#8c6b38] text-white shadow-md'
                          : 'bg-[#faf8f5] hover:bg-gray-100 text-[#666666] hover:text-black border border-[#e8e2d9]'
                      }`}
                    >
                      <span>0{idx + 1}</span>
                      <span className="hidden sm:inline">{s.title.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-[#faf8f5] hover:bg-[#8c6b38] hover:text-white text-[#111111] transition-colors cursor-pointer border border-[#e8e2d9]"
                  title="Previous Discipline"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-[#faf8f5] hover:bg-[#8c6b38] hover:text-white text-[#111111] transition-colors cursor-pointer border border-[#e8e2d9]"
                  title="Next Discipline"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Discipline Headline & Meta Tag */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#e8e2d9] pb-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8c6b38] font-bold mb-2">
                  <span>Discipline 0{activeIndex + 1} of 0{SERVICES_DATA.length}</span>
                  <span>•</span>
                  <span>{current.idealFor}</span>
                </div>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
                  {current.title}
                </h2>
                <p className="text-[#8c6b38] text-sm sm:text-base font-medium mt-1">
                  {current.subtitle}
                </p>
              </div>

              {/* Mode Switcher Buttons */}
              <div className="flex items-center gap-2 bg-[#faf8f5] p-1.5 rounded-2xl border border-[#e8e2d9] self-start md:self-auto">
                <button
                  onClick={() => setActiveTab('render')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    activeTab === 'render'
                      ? 'bg-gradient-to-r from-[#8c6b38] to-[#c5a880] text-white shadow-md'
                      : 'text-[#666666] hover:text-black'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>4K Render & Hotspots</span>
                </button>
                <button
                  onClick={() => setActiveTab('blueprint')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    activeTab === 'blueprint'
                      ? 'bg-gradient-to-r from-[#8c6b38] to-[#c5a880] text-white shadow-md'
                      : 'text-[#666666] hover:text-black'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>CAD Blueprint Mode</span>
                </button>
                <button
                  onClick={() => setActiveTab('materials')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                    activeTab === 'materials'
                      ? 'bg-gradient-to-r from-[#8c6b38] to-[#c5a880] text-white shadow-md'
                      : 'text-[#666666] hover:text-black'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Material Swatches</span>
                </button>
              </div>
            </div>

            {/* THE VISUAL STAGE */}
            <div className="relative h-[440px] sm:h-[540px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl border border-[#e8e2d9] group bg-black">
              
              {/* VIEW 1: 4K RENDER WITH INTERACTIVE HOTSPOTS */}
              {activeTab === 'render' && (
                <div className="relative w-full h-full animate-in fade-in duration-300">
                  <img
                    src={currentPerspectives[selectedPerspective] || current.image}
                    alt={current.title}
                    className="w-full h-full object-cover filter brightness-[0.9] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Hotspots */}
                  {currentHotspots.map((hs, i) => {
                    const isOpen = activeHotspot === i;
                    return (
                      <div
                        key={i}
                        style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                        className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveHotspot(isOpen ? null : i)}
                          className="relative w-9 h-9 rounded-full bg-[#8c6b38] text-white font-bold text-sm flex items-center justify-center shadow-[0_0_20px_#8c6b38] hover:scale-125 transition-transform cursor-pointer"
                        >
                          <span className="w-full h-full rounded-full bg-[#c5a880] animate-ping absolute inset-0 opacity-75" />
                          <span className="relative z-10">+</span>
                        </button>

                        {/* Hotspot Popover Detail */}
                        {isOpen && (
                          <div className="absolute left-11 top-1/2 -translate-y-1/2 w-72 p-4 rounded-2xl bg-black/95 backdrop-blur-xl border border-[#c5a880] shadow-2xl text-xs text-white z-30 animate-in fade-in zoom-in-95">
                            <div className="font-bold text-amber-300 flex items-center gap-2 mb-1.5 text-sm">
                              <Sparkles className="w-4 h-4 text-amber-400" />
                              <span>{hs.label}</span>
                            </div>
                            <p className="text-xs text-gray-300 font-light leading-relaxed">{hs.desc}</p>
                            <div className="mt-2 pt-2 border-t border-white/10 text-[10px] text-gray-400 font-mono flex items-center justify-between">
                              <span>TOLERANCE: 0.1mm</span>
                              <span className="text-[#c5a880]">HOMAG CNC</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Perspective Angle Switcher Pills at Bottom Left */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/70 backdrop-blur-md p-1.5 rounded-2xl border border-white/15">
                    <span className="text-[10px] uppercase font-mono text-gray-400 px-2 font-bold hidden sm:inline">
                      View Angle:
                    </span>
                    {currentPerspectives.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedPerspective(idx)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          selectedPerspective === idx
                            ? 'bg-[#c5a880] text-[#090a0f]'
                            : 'text-gray-400 hover:text-white bg-white/5'
                        }`}
                      >
                        Angle 0{idx + 1}
                      </button>
                    ))}
                  </div>

                  {/* Hotspot Helper Indicator */}
                  <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#c5a880]/40 text-[11px] text-amber-300 font-mono">
                    <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
                    <span>Click pulse (+) pins to inspect millimetric specs</span>
                  </div>
                </div>
              )}

              {/* VIEW 2: CAD ARCHITECTURAL BLUEPRINT MODE */}
              {activeTab === 'blueprint' && (
                <div className="relative w-full h-full bg-[#081326] p-8 flex flex-col justify-between animate-in fade-in duration-300 overflow-hidden font-mono border-2 border-dashed border-cyan-500/30">
                  {/* Blueprint Grid Lines Overlay */}
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #00ffff 1px, transparent 1px), linear-gradient(to bottom, #00ffff 1px, transparent 1px)',
                      backgroundSize: '40px 40px'
                    }}
                  />

                  {/* Blueprint Title Block Header */}
                  <div className="relative z-10 flex flex-wrap justify-between items-start gap-4 border-b border-cyan-400/30 pb-4">
                    <div>
                      <div className="text-cyan-400 text-xs tracking-widest uppercase">
                        JS GALLOR ARCHITECTURAL CAD ATELIER // DWG 2026-X
                      </div>
                      <h4 className="text-white text-xl sm:text-2xl font-bold tracking-wider uppercase font-serif-luxury mt-1">
                        {current.title} — TECHNICAL ELEVATION & SCHEMATIC
                      </h4>
                    </div>
                    <div className="text-right text-[11px] text-cyan-300/80 space-y-0.5">
                      <div>SCALE: 1:20 METRIC</div>
                      <div>TOLERANCE: +/- 0.10mm</div>
                      <div>PROJECTION: 3D BIM ORTHOGRAPHIC</div>
                    </div>
                  </div>

                  {/* Blueprint Central Architectural Wireframe Box */}
                  <div className="relative z-10 my-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-400/40 space-y-2">
                      <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" /> Core Carcass Calibrations
                      </div>
                      <ul className="text-xs text-cyan-200/90 space-y-1.5 font-light">
                        <li>• 18mm Boiling Water Proof (BWP) IS:710 Marine Grade Core</li>
                        <li>• 0.8mm interior balancing liner pressed at 180°C</li>
                        <li>• Homag AirTec / PUR laser-fused zero-joint edge banding</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-400/40 space-y-2">
                      <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" /> Hardware & Mechanisms
                      </div>
                      <ul className="text-xs text-cyan-200/90 space-y-1.5 font-light">
                        <li>• Blum Austria Aventos HF Bi-fold lift system</li>
                        <li>• Hafele Matrix Box Slim double-wall drawers (65k cycles)</li>
                        <li>• Concealed Sugatsune 3-way adjustable hinges</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-400/40 space-y-2">
                      <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" /> Conduit & Electrical Routing
                      </div>
                      <ul className="text-xs text-cyan-200/90 space-y-1.5 font-light">
                        <li>• Pre-routed CNC cable raceways with heat dissipation air channels</li>
                        <li>• 24V Class-2 drivers isolated in fire-rated enclosures</li>
                        <li>• Proximity magnetic door triggers wired to LED channels</li>
                      </ul>
                    </div>
                  </div>

                  {/* Blueprint Footer Stamp */}
                  <div className="relative z-10 flex flex-wrap justify-between items-center text-[10px] text-cyan-400/70 border-t border-cyan-400/30 pt-3">
                    <div>CERTIFIED ARCHITECTURAL SPECIFICATION • VERIFIED FOR TURNKEY EXECUTION</div>
                    <div>STATUS: PRODUCTION READY (FACTORY HOMAG AUTOMATED CELL)</div>
                  </div>
                </div>
              )}

              {/* VIEW 3: TACTILE MATERIAL SWATCHES */}
              {activeTab === 'materials' && (
                <div className="relative w-full h-full bg-[#faf8f5] p-6 sm:p-10 flex flex-col justify-between animate-in fade-in duration-300 overflow-y-auto">
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#8c6b38] font-bold">
                      Tactile Material Library
                    </span>
                    <h4 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#111111]">
                      Curated Surface Materials for {current.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#555555] font-light max-w-2xl">
                      Each surface is pre-conditioned, tested for thermal & humidity resilience, and inspected under 3000K & 4000K architectural lighting.
                    </p>
                  </div>

                  {/* Swatches Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
                    {currentSwatches.map((swatch, idx) => (
                      <div 
                        key={idx}
                        className="p-5 rounded-2xl bg-white border border-[#e8e2d9] hover:border-[#8c6b38] shadow-sm hover:shadow-md transition-all space-y-3 group/swatch"
                      >
                        {/* Swatch Color Preview Pill */}
                        <div 
                          className="w-full h-24 rounded-xl border border-[#e8e2d9] shadow-inner group-hover/swatch:scale-105 transition-transform"
                          style={{ backgroundColor: swatch.color }}
                        />
                        <div>
                          <span className="text-[10px] font-mono text-[#8c6b38] uppercase tracking-wider block font-semibold">
                            {swatch.type}
                          </span>
                          <h5 className="font-bold text-sm text-[#111111]">{swatch.name}</h5>
                          <span className="text-xs text-[#666666] font-light">{swatch.origin}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#e8e2d9] shadow-sm flex items-center justify-between text-xs text-[#555555]">
                    <span>Authentic samples can be physically touched and inspected at our Experience Centers.</span>
                    <span className="text-[#8c6b38] font-bold font-mono">100% Sourced & Inspected</span>
                  </div>
                </div>
              )}
            </div>

            {/* TECHNICAL SPECIFICATION & SCOPE DOSSIER (BELOW THE STAGE) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Scope & Method Statement (7 Cols) */}
              <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#e8e2d9] shadow-xl space-y-6">
                <div>
                  <h4 className="text-xs uppercase font-bold text-[#8c6b38] tracking-wider mb-2 font-mono">
                    Architectural Method Statement:
                  </h4>
                  <p className="text-[#444444] text-sm sm:text-base font-light leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Highlights Grid */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#777777] font-mono">
                    Turnkey Engineering Standards:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#333333] bg-[#faf8f5] p-3.5 rounded-2xl border border-[#e8e2d9]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-light leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Factory Machinery Badges */}
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#777777] mb-2 font-mono">
                    Factory & Machinery Automation:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.capabilities.map((cap, i) => (
                      <span key={i} className="text-xs px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 text-[#8c6b38] border border-[#c5a880]/30 font-medium">
                        ✓ {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Turnkey Direct Booking & VIP Consultation (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-[#c5a880]/40 shadow-xl space-y-6">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase font-mono tracking-widest text-[#8c6b38] font-bold">
                      Direct Atelier Consultation
                    </span>
                    <h4 className="font-serif-luxury text-2xl font-bold text-[#111111]">
                      Commission {current.title}
                    </h4>
                    <p className="text-xs text-[#666666] font-light leading-relaxed">
                      Collaborate directly with our principal architects and master factory engineers. We review your architectural floor plan and provide accurate 3D renders with itemized bill of quantities (BOQ).
                    </p>
                  </div>

                  {/* Guarantee Points */}
                  <div className="space-y-2.5 text-xs text-[#444444] border-y border-[#e8e2d9] py-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>10-Year Comprehensive Warranty Certificate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sky-700" />
                      <span>Guaranteed Turnkey Timeline with Penalty Clause</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Factory className="w-4 h-4 text-[#8c6b38]" />
                      <span>Direct Factory Homag Machinery Pricing (Zero Middlemen)</span>
                    </div>
                  </div>

                  {/* Primary CTAs */}
                  <div className="space-y-3">
                    <button
                      onClick={onOpenConsultation}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#8c6b38] via-[#c5a880] to-[#8c6b38] text-white font-bold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-[#c5a880]/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Book 3D Design Session for {current.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://wa.me/917075848516?text=${encodeURIComponent(`Hi JS GALLOR team, I would like to explore ${current.title} for my residence.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 rounded-xl bg-[#faf8f5] hover:bg-gray-100 text-[#111111] border border-[#e8e2d9] font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Principal Architect</span>
                    </a>
                  </div>
                </div>

                {/* Return Button */}
                <button
                  onClick={() => setActiveExpandedId(null)}
                  className="w-full py-3 rounded-2xl bg-[#faf8f5] hover:bg-gray-100 text-[#444444] hover:text-black text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-[#e8e2d9] flex items-center justify-center gap-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to All Disciplines</span>
                </button>
              </div>

            </div>
          </div>
        )}



      </div>
    </div>
  );
};
