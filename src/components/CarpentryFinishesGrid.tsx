import React from 'react';
import { Sparkles, Layers, Palette, Paintbrush, Sliders, Gem, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CarpentryFinishesGridProps {
  onOpenConsultation?: () => void;
}

export const CARPENTRY_FINISHES = [
  {
    id: 'laminates',
    title: 'Premium Laminates',
    tagline: 'Versatile & Ultra-Durable',
    desc: 'Elegant matte, high-gloss, textured, wood-grain, marble and contemporary finishes for kitchens, wardrobes and custom furniture.',
    spec: '0.8mm – 1.5mm Thickness • Anti-Scratch • Heat Resistant',
    icon: Layers,
    color: '#8c7853',
    swatches: ['Matte Solid', 'Oak Grain', 'Calacatta Marble']
  },
  {
    id: 'veneers',
    title: 'Natural Veneers',
    tagline: 'Timeless Organic Luxury',
    desc: 'Beautifully crafted walnut, oak, teak, ash and other natural wood veneers for sophisticated luxury interiors.',
    spec: '0.6mm Natural Flitch • 5-Coat PU Polish • Bookmatched Grains',
    icon: Palette,
    color: '#5c3a21',
    swatches: ['American Walnut', 'Smoked Oak', 'Burma Teak']
  },
  {
    id: 'pu-duco',
    title: 'PU & Duco Finishes',
    tagline: 'Seamless Architectural Lacquer',
    desc: 'Seamless premium finishes available in an extensive range of colours, from subtle neutrals to statement shades.',
    spec: 'Multi-Layer Spray Booth • Non-Yellowing • Infinite RAL Shades',
    icon: Paintbrush,
    color: '#343840',
    swatches: ['Silk Supermatte', 'Gloss Lacquer', 'Deep Charcoal']
  },
  {
    id: 'acrylic',
    title: 'Acrylic Finishes',
    tagline: 'Mirror-Like Contemporary Sheen',
    desc: 'Contemporary high-gloss and matte surfaces ideal for modern kitchens, wardrobes and cabinetry.',
    spec: '1.5mm European Solid Acrylic • 95+ GU Gloss • Anti-Fingerprint',
    icon: Sparkles,
    color: '#1e293b',
    swatches: ['Ultra High-Gloss', 'Soft Touch Matte', 'Metallic Pearl']
  },
  {
    id: 'fluted',
    title: 'Decorative & Fluted Finishes',
    tagline: 'Tactile Architectural 3D Relief',
    desc: 'Architectural textures and fluted detailing that add depth, rhythm and character to feature furniture and wall elements.',
    spec: 'Precision CNC Louvers • Acoustic Sound Dampening • Teak & Charcoal',
    icon: Sliders,
    color: '#c5a880',
    swatches: ['Fluted Louver', 'Scalloped Bead', 'Wave Panel']
  },
  {
    id: 'glass-metallic',
    title: 'Glass & Metallic Accents',
    tagline: 'Haute Reflections & Precious Profiles',
    desc: 'Tinted, fluted and lacquered glass complemented by champagne gold, brass, bronze and contemporary metal profiles.',
    spec: 'Toughened Tinted Glass • Anodized Aluminum • Champagne PVD',
    icon: Gem,
    color: '#b8976b',
    swatches: ['Bronze Tint Glass', 'Champagne Gold', 'Brushed Brass']
  }
];

export const CarpentryFinishesGrid: React.FC<CarpentryFinishesGridProps> = ({ onOpenConsultation }) => {
  return (
    <section className="p-8 sm:p-12 rounded-3xl bg-white border border-[#e8e2d9] space-y-8 shadow-xl relative overflow-hidden">
      {/* Subtle interior glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#e8e2d9]">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#8c6b38] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#8c6b38]" />
            <span>Carpentry Finishes Palette</span>
          </div>
          <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#111111]">
            Explore Our 6 Curated Finishes
          </h3>
          <p className="text-[#555555] text-xs sm:text-sm font-light leading-relaxed">
            From the natural warmth of wood veneers and sophisticated matte laminates to elegant PU, Duco, acrylic, glass and metallic finishes, every material is carefully selected to complement your style.
          </p>
        </div>

        {onOpenConsultation && (
          <button
            onClick={onOpenConsultation}
            className="self-start md:self-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#8c6b38] via-[#c5a880] to-[#8c6b38] text-white font-bold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-[#c5a880]/30 transition-all cursor-pointer inline-flex items-center gap-2 shrink-0"
          >
            <span>Request Swatch Samples</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 6 Finishes Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CARPENTRY_FINISHES.map((finish, idx) => {
          const Icon = finish.icon;
          return (
            <div
              key={finish.id}
              className="p-6 rounded-2xl bg-[#faf8f5] hover:bg-white border border-[#e8e2d9] hover:border-[#8c6b38]/60 transition-all duration-300 flex flex-col justify-between group space-y-5 shadow-sm hover:shadow-md"
            >
              <div className="space-y-3.5">
                {/* Top Row: Icon + Index */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#e8e2d9] flex items-center justify-center text-[#8c6b38] group-hover:bg-[#c5a880]/20 transition-colors shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#8c6b38] bg-white px-2.5 py-1 rounded-md border border-[#e8e2d9] shadow-sm">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h4 className="font-serif-luxury text-xl font-bold text-[#111111] group-hover:text-[#8c6b38] transition-colors">
                    {finish.title}
                  </h4>
                  <span className="text-[11px] font-mono text-[#8c6b38] uppercase tracking-wider font-semibold">
                    {finish.tagline}
                  </span>
                </div>

                {/* Detailed Description */}
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
                  {finish.desc}
                </p>
              </div>

              {/* Technical Spec & Swatch Tags */}
              <div className="pt-3 border-t border-[#e8e2d9] space-y-2 text-[11px]">
                <div className="text-[#666666] font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{finish.spec}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {finish.swatches.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-white border border-[#e8e2d9] text-[10px] text-[#444444] font-mono shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
