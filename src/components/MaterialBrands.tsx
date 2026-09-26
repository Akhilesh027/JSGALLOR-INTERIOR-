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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#e8e2d9] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 text-[#8c6b38] text-[11px] font-bold uppercase tracking-wider backdrop-blur-md mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8c6b38]" />
              <span>Certified Grade-A Sourcing</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Our Brand Partners.{' '}
              <span className="gold-gradient-text italic">Certified Global & Indian Ateliers.</span>
            </h2>
          </div>

          <p className="text-xs text-gray-600 font-normal max-w-md leading-relaxed self-start md:self-end">
            100% factory-machined with authentic European fittings, barcode-verified BWP marine plywood, designer soft furnishings, and manufacturer warranties.
          </p>
        </div>

        {/* Compact 12-Item Material Cards with Images & Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {partners.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="relative h-44 rounded-2xl overflow-hidden border border-[#e8e2d9] hover:border-[#8c6b38] group transition-all duration-300 flex flex-col justify-between p-3 bg-white shadow-sm hover:shadow-lg"
              >
                {/* Background Material Image */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] group-hover:brightness-[0.45] group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                {/* Top: Icon & Country Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-7 h-7 rounded-lg bg-black/60 border border-white/15 flex items-center justify-center text-[#fae19c] group-hover:bg-[#c5a880] group-hover:text-black transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9px] font-mono text-gray-300 uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/60 border border-white/10">
                    {p.origin}
                  </span>
                </div>

                {/* Bottom: Brand Logo Typography & Spec */}
                <div className="relative z-10 space-y-1">
                  <h4 className="font-serif-luxury text-xs sm:text-sm font-bold text-white group-hover:text-[#fae19c] transition-colors leading-tight tracking-wide">
                    {p.name}
                  </h4>
                  <p className="text-[10px] text-gray-200 font-medium truncate">
                    {p.category}
                  </p>
                  <p className="text-[9px] font-mono text-[#fae19c] truncate font-bold">
                    {p.spec}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sleek Quality Protocol Strip */}
        <div className="mt-6 pt-4 border-t border-[#e8e2d9] flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="text-gray-800 font-medium">100% Genuine Barcoded OEM Hardware</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8c6b38]" />
            <span className="text-gray-800 font-medium">European Homag PUR Edge-Banding</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8c6b38]" />
            <span className="text-gray-800 font-medium">10-Year Comprehensive Replacement Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
};


