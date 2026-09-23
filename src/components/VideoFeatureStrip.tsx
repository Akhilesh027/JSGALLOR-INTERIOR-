import React, { useState } from 'react';
import kitchenVideo from '../assets/videos/furniture Banner Landscape (1).mp4';
import { Sparkles, ArrowRight, Utensils, Sofa, BedDouble, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface VideoFeatureStripProps {
  onOpenConsultation: () => void;
}

export const VideoFeatureStrip: React.FC<VideoFeatureStripProps> = ({ onOpenConsultation }) => {
  const { navigate } = useRouter();
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      title: 'Bespoke Culinary Architecture',
      spec: '18mm Quartz Waterfall • Blum Servo-Drive • PUR Waterproof',
      desc: 'Factory-engineered modular kitchen islands with seamless 45-degree waterfall miter joints, integrated concealed pantries, and lifetime-warranted Blum soft-close hardware.',
      icon: <Utensils className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Acoustic Living Lounges & Media Suites',
      spec: 'Italian Marble • Fluted Charcoal Panels • Cove Dimmers',
      desc: 'Bookmatched Italian Calacatta and Statuario natural marble backdrops, precision CNC fluted acoustic louvers, and concealed magnetic track ambient channels.',
      icon: <Sofa className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Master Walk-In Dressing Suites',
      spec: 'Tinted Glass Profiles • Sensor Recessed LEDs • Velvet Liners',
      desc: 'Floor-to-ceiling anodized aluminum glass wardrobes with automated proximity sensor lighting, concealed soft hinges, and customized velvet vanity organizers.',
      icon: <BedDouble className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-[#090a0f] text-white border-b border-white/10">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
        >
          <source src={kitchenVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a0f]/85 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f]/75 via-transparent to-[#090a0f]/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/20 border border-[#c5a880]/30 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Haute Living & Turnkey Craftsmanship</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white">
            Architectural Living &{' '}
            <span className="gold-gradient-text italic block sm:inline">
              Bespoke Millwork.
            </span>
          </h2>

          {/* Right Sub-copy */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            Curated residential interiors engineered with in-house factory precision, tactile natural stone, and seamless turnkey execution.
          </p>

          {/* 3 Interactive Feature Selectors */}
          <div className="space-y-3.5 pt-1">
            {features.map((feat, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-md ${activeFeature === idx
                    ? 'bg-white/10 border-[#c5a880] shadow-2xl shadow-[#c5a880]/15'
                    : 'bg-black/40 border-white/10 hover:bg-white/5 hover:border-white/20'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-white">{feat.title}</h4>
                      <p className="text-[11px] text-[#c5a880] font-mono mt-0.5">{feat.spec}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${activeFeature === idx ? 'text-[#c5a880]' : 'text-gray-500'}`}>
                    0{idx + 1}
                  </span>
                </div>

                {activeFeature === idx && (
                  <div className="mt-3.5 pt-3.5 border-t border-white/10 text-xs sm:text-sm text-gray-300 leading-relaxed font-light animate-in fade-in">
                    {feat.desc}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3 Verification Metric Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-gray-300">
            <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-[11px]">Factory Pre-Fabricated</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10">
              <Cpu className="w-4 h-4 text-[#c5a880] shrink-0" />
              <span className="text-[11px]">0.1mm Precision CNC Fit</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-xl border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#c5a880] shrink-0" />
              <span className="text-[11px]">10-Year Bond Warranty</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/portfolio')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c5a880] via-[#d4ba96] to-[#b8976b] text-[#090a0f] font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-[#c5a880]/30 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>Explore Portfolio Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all cursor-pointer"
            >
              Book 3D Design Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
