import React, { useState } from 'react';
import { Sparkles, Clock, ShieldCheck, ArrowRight, Layers, CheckCircle2, ExternalLink, Globe, ChevronRight, Compass } from 'lucide-react';
import { TierLevel } from '../types/interior';
import { useRouter } from '../context/RouterContext';

interface TierComparisonProps {
  onSelectTier: (tier: TierLevel) => void;
  onOpenConsultation: () => void;
}

interface LouverTier {
  id: TierLevel;
  code: string;
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  philosophy: string;
  websiteUrl: string;
  displayUrl: string;
  duration: string;
  warranty: string;
  image: string;
  specs: {
    label: string;
    detail: string;
  }[];
}

export const TierComparison: React.FC<TierComparisonProps> = ({ onSelectTier, onOpenConsultation }) => {
  const [activeTierId, setActiveTierId] = useState<TierLevel>('mid_luxury');
  const { navigate } = useRouter();

  const tiers: LouverTier[] = [
    {
      id: 'affordable',
      code: 'TIER 01',
      name: 'Essentials Studio',
      badge: 'Smart Value Modular',
      tagline: 'Factory-Crafted Modular Living',
      philosophy: 'Direct factory-engineered modular precision with zero structural compromise.',
      websiteUrl: 'https://essentialstudio.jsgallor.com',
      displayUrl: 'essentialstudio.jsgallor.com',
      duration: '40-Day Handover',
      warranty: '10-Yr Warranty',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
      specs: [
        { label: 'Core Substrate', detail: '100% IS:710 Marine Grade Boiling Waterproof (BWP) Plywood' },
        { label: 'Exterior Shutter', detail: 'Anti-scratch European High-Gloss & Silk Matte Acrylic' },
        { label: 'Motion Hardware', detail: 'Hettich soft-close hinges & telescopic channels' },
        { label: 'Ceiling & Lighting', detail: 'Designer false ceiling with warm LED spots & perimeter cove lights' },
        { label: 'Kitchen & Storage', detail: 'L/Parallel modular kitchen with SS 304 wire pull-out baskets' }
      ]
    },
    {
      id: 'mid_luxury',
      code: 'TIER 02',
      name: 'Signature Spaces',
      badge: 'Most Selected Curation',
      popular: true,
      tagline: 'Contemporary Architectural Elegance',
      philosophy: 'A curated balance of designer sophistication, acoustic textures, and architectural lighting.',
      websiteUrl: 'https://signaturespaces.jsgallor.com',
      displayUrl: 'signaturespaces.jsgallor.com',
      duration: '50-Day Handover',
      warranty: '10-Yr Warranty',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      specs: [
        { label: 'Core Substrate', detail: 'Calibrated Marine Grade BWP Plywood + HDMR High-Density Paneling' },
        { label: 'Acoustic Elements', detail: 'CNC fluted charcoal louvers & backlit stone marble feature wall' },
        { label: 'Drawer Systems', detail: 'Häfele soft-close tandem boxes & hydraulic upward flap stays' },
        { label: 'Countertop Stone', detail: '18mm Premium Quartz & Onyx stone island with beveled edges' },
        { label: 'Wardrobe & Glass', detail: 'Tinted fluted glass sliding wardrobes with integrated sensor LEDs' }
      ]
    },
    {
      id: 'bespoke_luxury',
      code: 'TIER 03',
      name: 'Celestia Living',
      badge: 'Haute Villa Commission',
      tagline: 'Bespoke Haute Villa Commissions',
      philosophy: 'Complete architectural re-engineering with natural smoked veneers, Italian marble, and full IoT.',
      websiteUrl: 'https://celestialiving.jsgallor.com',
      displayUrl: 'celestialiving.jsgallor.com',
      duration: '65-Day Bespoke Schedule',
      warranty: '12-Yr Warranty',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
      specs: [
        { label: 'Core & Veneer', detail: 'Imported Birch Ply, solid teakwood & natural smoked oak veneer' },
        { label: 'Natural Stone', detail: 'Bookmatched Italian Statuario marble cladding on primary feature walls' },
        { label: 'Electric Cabinetry', detail: 'Blum Aventos Servo-Drive (electric touch-to-open motion systems)' },
        { label: 'Smart Automation', detail: 'Full home Lutron / Tuya IoT scenes (voice, drapes & ambient lighting)' },
        { label: 'Door Architecture', detail: 'Floor-to-ceiling rimless flush doors with magnetic mortise locks' }
      ]
    }
  ];

  const activeTier = tiers.find(t => t.id === activeTierId) || tiers[1];

  return (
    <section id="tiers" className="py-16 sm:py-20 bg-[#faf8f5] text-[#1a1a1a] border-b border-[#e8e2d9] relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c5a880]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#e8e2d9] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 text-[#8c6b38] text-xs font-bold uppercase tracking-wider backdrop-blur-md mb-2.5">
              <Layers className="w-3.5 h-3.5 text-[#8c6b38]" />
              <span>Calibrated Three-Tier Architecture</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              Three Living Philosophies.{' '}
              <span className="gold-gradient-text italic">Tailored Execution.</span>
            </h2>
          </div>

          {/* Quick Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-[#e8e2d9] shadow-sm self-start md:self-end">
            {tiers.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTierId(t.id);
                  onSelectTier(t.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                  activeTierId === t.id
                    ? 'bg-[#c5a880] text-black shadow-md'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                <span>{t.name}</span>
                {t.popular && <span className="w-1.5 h-1.5 rounded-full bg-amber-900" />}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DYNAMIC EXPANDING LOUVER PAVILION (BRIGHT & LUMINOUS LUXURY STYLING)      */}
        {/* ========================================================================= */}
        <div className="hidden lg:flex min-h-[520px] gap-4 items-stretch mb-8">
          {tiers.map((t) => {
            const isActive = activeTierId === t.id;

            if (isActive) {
              return (
                <div
                  key={t.id}
                  className="flex-[3.2] relative rounded-3xl overflow-hidden border-2 border-[#c5a880] shadow-2xl transition-all duration-500 flex flex-col justify-between p-8 lg:p-9 group ring-2 ring-[#c5a880]/40 bg-neutral-900"
                >
                  {/* Background Cinematic Image - Brighter & Clearer */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.05] scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Lighter, softer overlay to preserve image brightness while keeping text ultra-readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />

                  {/* Top Bar: Code & Badges */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#fae19c] font-bold px-3 py-1 rounded-full bg-black/60 border border-[#c5a880]/50 backdrop-blur-md shadow-md">
                        {t.code}
                      </span>
                      {t.badge && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#c5a880] to-[#b8976b] text-black text-[11px] font-bold uppercase tracking-wider shadow-md">
                          <Sparkles className="w-3 h-3 text-black" />
                          <span>{t.badge}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 text-xs font-medium">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#fae19c] border border-white/20 text-xs font-mono shadow-sm">
                        <Clock className="w-3.5 h-3.5 text-[#fae19c]" />
                        {t.duration}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-emerald-300 border border-white/20 text-xs font-mono shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        {t.warranty}
                      </span>
                    </div>
                  </div>

                  {/* Middle Content: Title, Philosophy & Rich Specs Grid */}
                  <div className="relative z-10 my-6 space-y-5">
                    <div>
                      <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                        {t.name}
                      </h3>
                      <p className="text-[#fae19c] text-xs uppercase tracking-widest font-bold mt-1 drop-shadow-sm">
                        {t.tagline}
                      </p>
                      <p className="text-gray-100 text-xs sm:text-sm font-normal mt-2 max-w-2xl leading-relaxed drop-shadow-sm">
                        {t.philosophy}
                      </p>
                    </div>

                    {/* Rich Architectural Specifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                      {t.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/20 hover:border-[#c5a880]/60 text-xs backdrop-blur-md shadow-sm transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <div className="space-y-0.5">
                            <span className="text-[10px] font-mono text-[#fae19c] uppercase tracking-wider block font-bold">
                              {spec.label}
                            </span>
                            <span className="text-gray-100 font-normal leading-snug block">
                              {spec.detail}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/25">
                    {/* Dedicated Standalone Portal Launcher */}
                    <a
                      href={t.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/70 hover:bg-[#c5a880] text-white hover:text-black border border-[#c5a880]/60 hover:border-[#c5a880] backdrop-blur-md transition-all text-xs font-mono shadow-sm"
                    >
                      <Globe className="w-3.5 h-3.5 text-[#fae19c] group-hover/link:text-black" />
                      <span>{t.displayUrl}</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                    </a>

                    {/* Book 3D Walkthrough CTA */}
                    <button
                      onClick={() => {
                        onSelectTier(t.id);
                        onOpenConsultation();
                      }}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#c5a880] via-[#d4ba96] to-[#b8976b] text-black font-bold text-xs uppercase tracking-wider shadow-xl hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Select Tier & Book 3D Session</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            }

            // Inactive Compressed Louver Blade - Brighter & More Inviting
            return (
              <div
                key={t.id}
                onClick={() => {
                  setActiveTierId(t.id);
                  onSelectTier(t.id);
                }}
                className="flex-1 relative rounded-3xl overflow-hidden border border-[#e2d8ca] hover:border-[#c5a880] bg-neutral-900 cursor-pointer transition-all duration-500 flex flex-col justify-between p-6 group hover:shadow-xl shadow-md"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.65] group-hover:brightness-[0.8] contrast-[1.05] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/85" />

                {/* Top: Code & Popular Indicator */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-white group-hover:text-[#fae19c] font-bold px-2 py-0.5 rounded bg-black/50 border border-white/15">
                    {t.code}
                  </span>
                  {t.popular && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880] shadow-[0_0_10px_#c5a880]" />
                  )}
                </div>

                {/* Center: Vertical Aesthetic Title & Tagline */}
                <div className="relative z-10 my-auto text-center space-y-2">
                  <h4 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#fae19c] transition-colors leading-tight drop-shadow-md">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#fae19c] font-mono uppercase tracking-wider font-bold">
                    {t.duration}
                  </p>
                  <p className="text-[11px] text-gray-200 font-normal truncate max-w-[130px] mx-auto drop-shadow-sm">
                    {t.tagline}
                  </p>
                </div>

                {/* Bottom: Click to Expand */}
                <div className="relative z-10 pt-3 border-t border-white/20 text-center">
                  <span className="text-[11px] text-gray-100 group-hover:text-[#fae19c] uppercase tracking-widest font-bold flex items-center justify-center gap-1 transition-colors drop-shadow-sm">
                    <span>Unfold</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE / TABLET VIEW: REFINED BRIGHT INTERACTIVE CARD                     */}
        {/* ========================================================================= */}
        <div className="lg:hidden space-y-4 mb-8">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#c5a880] shadow-xl p-6 sm:p-7 bg-neutral-900">
            <img
              src={activeTier.image}
              alt={activeTier.name}
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#fae19c] font-bold px-3 py-1 rounded-full bg-black/60 border border-[#c5a880]/50">
                  {activeTier.code}
                </span>
                <span className="text-xs text-[#fae19c] font-semibold font-mono flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-[#fae19c]" />
                  {activeTier.duration}
                </span>
              </div>

              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-white drop-shadow-md">
                  {activeTier.name}
                </h3>
                <p className="text-xs text-[#fae19c] uppercase tracking-wider font-bold mt-0.5">
                  {activeTier.tagline}
                </p>
                <p className="text-xs text-gray-100 font-normal mt-1.5">
                  {activeTier.philosophy}
                </p>
              </div>

              <div className="space-y-2">
                {activeTier.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-black/60 border border-white/20 text-xs backdrop-blur-md">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono text-[#fae19c] uppercase block font-bold">{spec.label}</span>
                      <span className="text-gray-100">{spec.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/20 space-y-2.5">
                <a
                  href={activeTier.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-black/70 border border-[#c5a880]/50 text-white text-xs font-mono flex items-center justify-center gap-2"
                >
                  <Globe className="w-3.5 h-3.5 text-[#fae19c]" />
                  <span>Visit {activeTier.displayUrl}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  onClick={() => {
                    onSelectTier(activeTier.id);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#b8976b] text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Select & Book 3D Walkthrough</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Engineering Benchmark Ribbon */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#e8e2d9] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-700">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Compass className="w-4 h-4 text-[#8c6b38] shrink-0 hidden sm:block" />
            <span><strong className="text-gray-900">Engineering Benchmark:</strong> 100% Precision CNC cut IS:710 Marine BWP plywood. Zero particle board policy.</span>
          </div>

          <button
            onClick={() => navigate('/collections')}
            className="text-xs font-bold text-[#8c6b38] hover:text-black uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer shrink-0"
          >
            <span>Full Specs Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
