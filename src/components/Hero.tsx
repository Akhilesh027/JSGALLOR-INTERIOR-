import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const { navigate } = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#090a0f] text-white">
      {/* Full-Bleed Background Video with YouTube Embed (0 controls, autoplay, loop) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/e7jF7aGMZHw?autoplay=1&mute=1&loop=1&playlist=e7jF7aGMZHw&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1"
          title="Hero Architectural Showcase Video"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '180vw',
            height: '180vh',
            minWidth: '100%',
            minHeight: '100%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            pointerEvents: 'none',
            filter: 'brightness(0.72) contrast(1.08)'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />

        {/* Soft Vignette Overlays with Reduced Opacity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f]/80 via-transparent to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Luxury Cinematic Live Indicator */}
      <div className="absolute top-28 right-6 sm:right-12 z-20 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/15 backdrop-blur-md text-[11px] font-medium tracking-wider text-gray-300">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
        <span>Live 4K Showcase</span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        {/* Ambient Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold tracking-widest uppercase text-amber-300 shadow-2xl">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Haute Living & Turnkey Craftsmanship</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-2xl">
          Architectural Precision.{' '}
          <span className="gold-gradient-text italic font-medium block sm:inline">
            Bespoke Luxury.
          </span>
        </h1>

        {/* Crisp Sub-copy */}
        <p className="text-gray-200 text-base sm:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Curated residential interiors engineered with in-house factory precision, tactile natural stone, and seamless turnkey execution.
        </p>

        {/* High-Impact CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <button
            onClick={() => navigate('/portfolio')}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#c5a880] via-[#e2cfb4] to-[#b8976b] text-[#090a0f] font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-2xl hover:shadow-[#c5a880]/50 hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center gap-2.5"
          >
            <span>Explore Portfolio Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all active:scale-95 cursor-pointer hover:border-white/40"
          >
            <span>Book 3D Design Session</span>
          </button>
        </div>

        {/* Minimal Bottom Trust Pill: Turnkey Project Execution | 10-Year Material Warranty | Advanced CNC Precision */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-300 font-medium">
          <div className="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
            <span>Turnkey Project Execution</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
            <span>10-Year Material Warranty</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
            <span>Advanced CNC Precision</span>
          </div>
        </div>
      </div>
    </section>
  );
};
