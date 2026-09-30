import React from 'react';
import { ShieldCheck, Award, Layers, Cpu, Sparkles, CheckCircle2, Compass, ArrowUpRight } from 'lucide-react';

interface PartnerItem {
  name: string;
  category: string;
  origin: string;
  icon: React.ElementType;
  image: string;
  spec: string;
}

export const MaterialBrands: React.FC = () => {
  const partners: PartnerItem[] = [
    {
      name: 'HÄFELE',
      category: 'Tandem Drawers & Runners',
      origin: 'International',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80',
      spec: 'Matrix Box P Series'
    },
    {
      name: 'BLUM',
      category: 'Servo Electric Lifts',
      origin: 'Austria',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80',
      spec: 'Aventos Touch-to-Open'
    },
    {
      name: 'HETTICH',
      category: 'Precision Hinges',
      origin: 'International',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
      spec: 'Sensys 200k Cycles'
    },
    {
      name: 'CENTURYPLY',
      category: 'IS:710 Marine BWP',
      origin: 'India',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80',
      spec: 'Boiling Waterproof Core'
    },
    {
      name: 'DUROPLY',
      category: 'IS:710 BWP & Veneers',
      origin: 'India',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80',
      spec: 'Forest-Grade Marine Ply'
    },
    {
      name: 'ADVANCE LAMINATES',
      category: 'Decorative Laminates',
      origin: 'India',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80',
      spec: '1mm Silk & Matt Series'
    },
    {
      name: 'GREENLAM',
      category: 'Silk Matte Acrylics',
      origin: 'Global',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80',
      spec: 'Anti-Bacterial 1.2mm'
    },
    {
      name: 'QUANTRA QUARTZ',
      category: 'Engineered Quartz Surfaces',
      origin: 'Global',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=400&q=80',
      spec: 'Non-Porous Calacatta'
    },
    {
      name: "MITTAL'S FABRICS",
      category: 'Curtains & Drapes',
      origin: 'India',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80',
      spec: 'Luxury Sheer & Blackout'
    },
    {
      name: 'DARPAN FABRICS',
      category: 'Furnishings & Upholstery',
      origin: 'India',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80',
      spec: 'Bespoke Velvets & Linens'
    },
    {
      name: 'SAINT-GOBAIN',
      category: 'Fluted Glass Louvers',
      origin: 'France',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=400&q=80',
      spec: 'Acoustic Tinted Series'
    },
    {
      name: 'ASIAN PAINTS',
      category: 'Royale Luxury Satin',
      origin: 'India',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80',
      spec: 'Teflon Micro-Cement'
    }
  ];

  return (
    <section id="materials" className="py-14 sm:py-16 bg-[#faf8f5] border-b border-[#e8e2d9] text-[#1a1a1a] relative overflow-hidden">
      {/* Subtle ambient lighting aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-[#c5a880]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#e8e2d9] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 text-[#8c6b38] text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md mb-3">
              <ShieldCheck className="w-4 h-4 text-[#8c6b38]" />
              <span>Certified Grade-A Sourcing</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              Our Brand Partners.{' '}
              <span className="gold-gradient-text italic">Certified Global & Indian Ateliers.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-600 font-normal max-w-lg leading-relaxed self-start md:self-end">
            100% factory-machined with authentic European fittings, barcode-verified BWP marine plywood, designer soft furnishings, and manufacturer warranties.
          </p>
        </div>

        {/* Crisp Light-Themed Material Atelier Cards - Clean, Bright, No Darkness */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {partners.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border-2 border-[#e8e2d9] hover:border-[#8c6b38] bg-white transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* Visual Image Showcase - Bright & Natural Real Colors (No Dark Filters) */}
                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover filter brightness-100 contrast-[1.02] group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-40" />

                  {/* Top Floating Badge & Icon */}
                  <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10">
                    <div className="w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md border border-[#e8e2d9] flex items-center justify-center text-[#8c6b38] shadow-sm group-hover:bg-[#8c6b38] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono text-gray-800 font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md border border-[#e8e2d9] shadow-sm">
                      {p.origin}
                    </span>
                  </div>
                </div>

                {/* Bottom Card Content - High Contrast & Larger Fonts */}
                <div className="p-3.5 sm:p-4 bg-white flex flex-col justify-between flex-1 space-y-2 border-t border-[#f0ece4]">
                  <div>
                    <h4 className="font-serif-luxury text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#8c6b38] transition-colors leading-snug tracking-wide">
                      {p.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium leading-snug mt-1 line-clamp-1">
                      {p.category}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs font-mono text-[#8c6b38] font-bold truncate">
                      {p.spec}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sleek Quality Protocol Strip with Increased Font Size */}
        <div className="mt-8 pt-6 border-t border-[#e8e2d9] flex flex-wrap items-center justify-between gap-5 text-sm sm:text-base text-gray-700 font-medium">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-gray-900 font-semibold">100% Genuine Barcoded OEM Hardware</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#8c6b38] shrink-0" />
            <span className="text-gray-900 font-semibold">European Homag PUR Edge-Banding</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#8c6b38] shrink-0" />
            <span className="text-gray-900 font-semibold">10-Year Comprehensive Replacement Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
};



