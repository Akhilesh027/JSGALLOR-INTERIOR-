import React from 'react';
import { Sparkles, ArrowRight, Layers, Palette, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

import { BackgroundVideo } from './BackgroundVideo';

interface FactoryCraftVideoSectionProps {
  onOpenConsultation: () => void;
}

export const FactoryCraftVideoSection: React.FC<FactoryCraftVideoSectionProps> = ({ onOpenConsultation }) => {
  const { navigate } = useRouter();

  return (
    <section id="craft" className="relative py-28 overflow-hidden bg-[#090a0f] text-white border-y border-white/10">
      {/* Background Video Layer without any player buttons or loading flash */}
      <BackgroundVideo
        videoId="PZ0qH-7wsbs"
        title="Carpentry Finishes Showcase Video"
        brightness={0.72}
        contrast={1.08}
        overlayOpacity="bg-black/25"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/20 border border-[#c5a880]/30 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Carpentry Finishes</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
            Beautiful finishes.{' '}
            <span className="gold-gradient-text italic block sm:inline">
              Exceptional craftsmanship.
            </span>
          </h2>

          {/* Clean Editorial Paragraph Copy */}
          <div className="space-y-4 text-gray-200 text-base sm:text-lg font-light leading-relaxed">
            <p>
              Discover our curated collection of premium carpentry finishes designed to transform every interior into a distinctive living experience. From the natural warmth of wood veneers and sophisticated matte laminates to elegant PU, Duco, acrylic, glass and metallic finishes, every material is carefully selected to complement your style.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Explore our finishes including <strong className="text-white font-medium">Premium Laminates</strong> in matte, high-gloss, textured, wood-grain, and marble for kitchens, wardrobes, and custom furniture; <strong className="text-white font-medium">Natural Veneers</strong> crafted in walnut, oak, teak, and ash; <strong className="text-white font-medium">PU & Duco Finishes</strong> in seamless subtle neutrals and statement colours; <strong className="text-white font-medium">Acrylic Finishes</strong> for contemporary cabinetry; <strong className="text-white font-medium">Decorative & Fluted Finishes</strong> adding architectural depth; and <strong className="text-white font-medium">Glass & Metallic Accents</strong> featuring tinted and fluted glass complemented by champagne gold and brass profiles.
            </p>
          </div>

          {/* 3 Crisp Technical Highlight Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-amber-400 font-mono font-bold text-lg">Veneers & PU</div>
              <div className="text-xs text-gray-300 font-medium mt-0.5">Walnut, Teak & Seamless Duco</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-amber-400 font-mono font-bold text-lg">Laminates & Acrylic</div>
              <div className="text-xs text-gray-300 font-medium mt-0.5">Silk Matte & High-Gloss</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-amber-400 font-mono font-bold text-lg">Fluted & Metallic</div>
              <div className="text-xs text-gray-300 font-medium mt-0.5">3D Louvers & Champagne Gold</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-3 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/collections')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c5a880] via-[#d4ba96] to-[#b8976b] text-[#0a0b0d] font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-[#c5a880]/30 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>Explore Collections</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
            >
              Book Design Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};




