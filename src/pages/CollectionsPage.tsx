import React, { useState } from 'react';
import { TIERS_DATA } from '../data/interiorData';
import { TierLevel } from '../types/interior';
import { 
  Sparkles, Check, Clock, ShieldCheck, ArrowRight, Layers, 
  ExternalLink, MessageSquare, Compass, Factory, CheckCircle2,
  Sliders, ArrowUpRight
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { CarpentryFinishesGrid } from '../components/CarpentryFinishesGrid';

interface CollectionsPageProps {
  onSelectTier: (tier: TierLevel) => void;
  onOpenConsultation: () => void;
}

const TIER_PORTALS: Record<string, { url: string; display: string }> = {
  affordable: {
    url: 'https://essentialstudio.jsgallor.com',
    display: 'essentialstudio.jsgallor.com'
  },
  mid_luxury: {
    url: 'https://signaturespaces.jsgallor.com',
    display: 'signaturespaces.jsgallor.com'
  },
  bespoke_luxury: {
    url: 'https://celestialiving.jsgallor.com',
    display: 'celestialiving.jsgallor.com'
  }
};

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onSelectTier,
  onOpenConsultation
}) => {
  const { navigate } = useRouter();
  const [activeTierIndex, setActiveTierIndex] = useState<number>(1); // Default to Signature Spaces (index 1)

  const activeTier = TIERS_DATA[activeTierIndex];
  const portalInfo = TIER_PORTALS[activeTier.id] || TIER_PORTALS['mid_luxury'];

  return (
    <div className="pt-24 pb-28 bg-[#faf8f5] text-[#111111] selection:bg-[#c5a880]/30 selection:text-black min-h-screen">
      
      {/* Editorial Header */}
      <section className="py-16 md:py-20 relative overflow-hidden text-center border-b border-[#e8e2d9]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c5a880]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#8c6b38] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-[#8c6b38]" />
            <span>Three Calibrated Architectural Living Standards</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
            Curated Living Collections.{' '}
            <span className="gold-gradient-text italic block sm:inline">Calibrated Engineering.</span>
          </h1>

          <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed max-w-3xl mx-auto">
            Engineered for distinct residential lifestyles. Select any collection below to inspect live architectural specifications, material grades, room-by-room inclusions, and dedicated portal websites.
          </p>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* ========================================================================= */}
        {/* THREE PILLARS / TRIPTYCH INTERACTIVE SELECTOR                             */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS_DATA.map((tier, idx) => {
            const isActive = activeTierIndex === idx;
            const portal = TIER_PORTALS[tier.id];
            return (
              <div
                key={tier.id}
                onClick={() => setActiveTierIndex(idx)}
                className={`group relative rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-500 border flex flex-col justify-between select-none ${
                  isActive
                    ? 'bg-[#f7f5f0] border-[#8c6b38] shadow-xl scale-[1.02] ring-1 ring-[#8c6b38]/40'
                    : 'bg-white border-[#e8e2d9] hover:border-[#8c6b38]/50 hover:bg-[#faf8f5]'
                }`}
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] flex items-center justify-center font-mono text-xs text-[#8c6b38] font-bold">
                      0{idx + 1}
                    </span>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#8c6b38] via-[#c5a880] to-[#8c6b38] text-white border-[#8c6b38]' 
                        : 'bg-[#c5a880]/15 text-[#8c6b38] border-[#c5a880]/30'
                    }`}>
                      {tier.badge}
                    </span>
                  </div>

                  {/* Image Plate */}
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-5 border border-[#e8e2d9] group-hover:border-[#8c6b38]/50 transition-colors">
                    <img
                      src={tier.sampleImage}
                      alt={tier.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-white">
                      <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        <Clock className="w-3 h-3 text-[#c5a880]" />
                        {tier.deliveryDays} Days
                      </span>
                      <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        {tier.warrantyYears}-Yr Warranty
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#8c6b38] font-bold block mb-1">
                    {tier.tierDescriptor}
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#111111] group-hover:text-[#8c6b38] transition-colors">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#666666] font-light mt-1 line-clamp-2">
                    {tier.tagline}
                  </p>
                </div>

                {/* Bottom Active Indicator / Portal link */}
                <div className="mt-6 pt-4 border-t border-[#e8e2d9] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#8c6b38] text-[11px] font-semibold truncate mr-2">
                    {portal.display}
                  </span>
                  <span className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shrink-0 ${
                    isActive ? 'text-[#8c6b38]' : 'text-[#666666] group-hover:text-black'
                  }`}>
                    {isActive ? 'Active View' : 'Inspect Tier'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* ACTIVE TIER SHOWCASE & ARCHITECTURAL DOSSIER STAGE                        */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e8e2d9] shadow-xl space-y-10 animate-in fade-in duration-500">
          
          {/* Header Bar of Active Stage */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#e8e2d9] pb-8">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-[#c5a880]/20 text-[#8c6b38] font-bold border border-[#c5a880]/40">
                  {activeTier.badge}
                </span>
                <span className="text-[#666666] font-mono">Collection 0{activeTierIndex + 1} of 03</span>
                <span className="text-[#cccccc]">•</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeTier.deliveryDays} Calendar Days Turnaround
                </span>
                <span className="text-[#cccccc]">•</span>
                <span className="text-[#8c6b38] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {activeTier.warrantyYears}-Year Structural Warranty
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
                {activeTier.name}
              </h2>
              <p className="text-[#8c6b38] text-sm sm:text-base font-medium">
                {activeTier.scopeHighlight}
              </p>
              <p className="text-[#555555] text-sm sm:text-base font-light max-w-3xl leading-relaxed pt-1">
                {activeTier.summary}
              </p>
            </div>

            {/* Direct Portal External Link Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 self-start lg:self-auto">
              <a
                href={portalInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8c6b38] via-[#c5a880] to-[#8c6b38] text-white text-xs font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-[#c5a880]/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg whitespace-nowrap"
              >
                <span>Visit {portalInfo.display}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  onSelectTier(activeTier.id);
                  onOpenConsultation();
                }}
                className="px-6 py-3.5 rounded-xl bg-[#faf8f5] hover:bg-gray-100 text-[#111111] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border border-[#e8e2d9] whitespace-nowrap"
              >
                Book 3D Design Session
              </button>
            </div>
          </div>

          {/* Panoramic Image Stage */}
          <div className="relative h-[380px] sm:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden border border-[#e8e2d9] shadow-xl bg-gray-100">
            <img
              src={activeTier.sampleImage}
              alt={activeTier.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-white text-xs">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 max-w-xl">
                <span className="text-[10px] font-mono text-[#c5a880] uppercase tracking-wider font-bold block">
                  Ideal Typology:
                </span>
                <span className="text-gray-200 text-xs font-light">{activeTier.idealFor}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-[11px] font-mono text-emerald-300">
                  ✓ Homag CNC Precision Pre-Drilled
                </span>
                <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-[11px] font-mono text-amber-300">
                  ✓ PUR Laser Edge-Bonding
                </span>
              </div>
            </div>
          </div>

          {/* Specifications & Inclusions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Material Specifications (6 Cols) */}
            <div className="lg:col-span-6 bg-[#faf8f5] p-6 sm:p-8 rounded-3xl border border-[#e8e2d9] space-y-4">
              <div className="text-xs uppercase font-mono tracking-widest text-[#8c6b38] font-bold flex items-center gap-2">
                <Factory className="w-4 h-4 text-[#8c6b38]" />
                <span>Certified Material Standards:</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white border border-[#e8e2d9] space-y-1 shadow-sm">
                  <div className="text-[#777777] font-mono text-[10px] uppercase">Core Carcass Substrate:</div>
                  <div className="font-bold text-[#111111] text-sm">{activeTier.materials.core}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#e8e2d9] space-y-1 shadow-sm">
                  <div className="text-[#777777] font-mono text-[10px] uppercase">Surface Finish & Facades:</div>
                  <div className="font-bold text-[#111111] text-sm">{activeTier.materials.finish}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-[#e8e2d9] space-y-1 shadow-sm">
                  <div className="text-[#777777] font-mono text-[10px] uppercase">Hardware Mechanisms & Hinges:</div>
                  <div className="font-bold text-[#111111] text-sm">{activeTier.materials.hardware}</div>
                </div>

                {activeTier.materials.countertop && (
                  <div className="p-3.5 rounded-2xl bg-white border border-[#e8e2d9] space-y-1 shadow-sm">
                    <div className="text-[#777777] font-mono text-[10px] uppercase">Countertop Surface:</div>
                    <div className="font-bold text-[#111111] text-sm">{activeTier.materials.countertop}</div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Turnkey Inclusions Checklist (6 Cols) */}
            <div className="lg:col-span-6 bg-[#faf8f5] p-6 sm:p-8 rounded-3xl border border-[#e8e2d9] space-y-4">
              <div className="text-xs uppercase font-mono tracking-widest text-[#8c6b38] font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Standard Turnkey Inclusions:</span>
              </div>

              <div className="space-y-2.5">
                {activeTier.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#e8e2d9] text-xs text-[#333333] shadow-sm">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-normal leading-snug">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* CARPENTRY FINISHES PALETTE (6 CURATED MATERIALITIES)                     */}
        {/* ========================================================================= */}
        <CarpentryFinishesGrid onOpenConsultation={onOpenConsultation} />

        {/* ========================================================================= */}
        {/* COMPREHENSIVE ARCHITECTURAL BENCHMARK MATRIX                              */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e8e2d9] shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8c6b38] font-bold">
              Engineering Benchmark Matrix
            </span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#111111]">
              Side-by-Side Architectural Comparison
            </h3>
            <p className="text-xs sm:text-sm text-[#666666] font-light">
              Clear material specifications across all three tiers. Zero ambiguity, factory transparent standards.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#e8e2d9] text-[#777777] uppercase font-mono text-[11px]">
                  <th className="py-4 px-4 font-bold text-[#111111]">Specification</th>
                  <th className="py-4 px-4 font-bold text-sky-700">01. Essential Living</th>
                  <th className="py-4 px-4 font-bold text-[#8c6b38]">02. Signature Spaces</th>
                  <th className="py-4 px-4 font-bold text-amber-800">03. Celestia Living</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e8e2d9] text-[#444444]">
                <tr>
                  <td className="py-4 px-4 font-bold text-[#111111] font-mono">Dedicated Portal</td>
                  <td className="py-4 px-4">
                    <a href="https://essentialstudio.jsgallor.com" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline flex items-center gap-1 font-mono font-semibold">
                      essentialstudio.jsgallor.com <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="py-4 px-4">
                    <a href="https://signaturespaces.jsgallor.com" target="_blank" rel="noopener noreferrer" className="text-[#8c6b38] hover:underline flex items-center gap-1 font-mono font-semibold">
                      signaturespaces.jsgallor.com <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="py-4 px-4">
                    <a href="https://celestialiving.jsgallor.com" target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:underline flex items-center gap-1 font-mono font-semibold">
                      celestialiving.jsgallor.com <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#111111] font-mono">Turnkey Timeline</td>
                  <td className="py-4 px-4 font-semibold text-[#111111]">40 Calendar Days</td>
                  <td className="py-4 px-4 font-semibold text-[#111111]">50 Calendar Days</td>
                  <td className="py-4 px-4 font-semibold text-[#111111]">65 Calendar Days</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#111111] font-mono">Structural Warranty</td>
                  <td className="py-4 px-4 text-emerald-700 font-semibold">10-Year Certified</td>
                  <td className="py-4 px-4 text-emerald-700 font-semibold">10-Year Certified</td>
                  <td className="py-4 px-4 text-emerald-700 font-semibold">12-Year Certified</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#111111] font-mono">Carcass Core Substrate</td>
                  <td className="py-4 px-4">IS:710 Boiling Waterproof (BWP) Marine Ply</td>
                  <td className="py-4 px-4">Calibrated Marine Ply + High-Density HDMR</td>
                  <td className="py-4 px-4">Imported Birch Plywood + Solid Teak Framing</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#111111] font-mono">Surface Finish & Facades</td>
                  <td className="py-4 px-4">0.8mm - 1.0mm Anti-Scratch Acrylic</td>
                  <td className="py-4 px-4">1.2mm Silk Supermatte & PU Polish Accents</td>
                  <td className="py-4 px-4">Natural Smoked Oak/Teak Veneer (5-Coat PU)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#111111] font-mono">Hardware & Drawer Systems</td>
                  <td className="py-4 px-4">Hettich / Ebco Precision Soft-Close</td>
                  <td className="py-4 px-4">Hafele Matrix Box Slim Double-Wall Drawers</td>
                  <td className="py-4 px-4">Blum Aventos Servo-Drive (Electric Touch)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#111111] font-mono">Kitchen Countertop</td>
                  <td className="py-4 px-4">Jet Black Granite / Engineered Quartz</td>
                  <td className="py-4 px-4">18mm Premium Quartz & Onyx Stone with Beveled Mitre</td>
                  <td className="py-4 px-4">Imported Italian Statuario / Onyx Backlit</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#111111] font-mono">Civil Re-engineering</td>
                  <td className="py-4 px-4 text-gray-400">Not Included (Modular Only)</td>
                  <td className="py-4 px-4 text-[#555555]">Basic Civil & Electrical Shifting</td>
                  <td className="py-4 px-4 text-[#111111] font-semibold">Full Structural Alterations & Drywalls</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#111111] font-mono">Curtains, Blinds & Wallpapers</td>
                  <td className="py-4 px-4">Custom Zebra / Roller Blinds & Accent Wallpaper</td>
                  <td className="py-4 px-4">Motorized Sheer Curtains, Imported Wallpapers & Fluted Wall Panels</td>
                  <td className="py-4 px-4">Lutron Automated Drapery, European Wallpapers & Full Wall Paneling</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[#111111] font-mono">Home IoT Automation</td>
                  <td className="py-4 px-4 text-gray-400">Optional Add-on</td>
                  <td className="py-4 px-4 text-[#555555]">Smart Touch Keypads & Mood Scene</td>
                  <td className="py-4 px-4 text-[#111111] font-semibold">Full Lutron Palladiom & Motorized Drapes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
