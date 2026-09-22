import React, { useState } from 'react';
import { ChefHat, Sofa, BedDouble, Hammer, Cpu, Lightbulb, CheckCircle2, ArrowRight, ArrowLeft, X, Sparkles, Layers, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { SERVICES_DATA } from '../data/interiorData';
import { InteriorService } from '../types/interior';
import { useRouter } from '../context/RouterContext';

interface WhatWeDoSectionProps {
  onOpenConsultation: () => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ onOpenConsultation }) => {
  const { navigate } = useRouter();
  const [activeExpandedId, setActiveExpandedId] = useState<string | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    ChefHat: <ChefHat className="w-5 h-5 text-amber-400" />,
    Sofa: <Sofa className="w-5 h-5 text-amber-400" />,
    BedDouble: <BedDouble className="w-5 h-5 text-amber-400" />,
    Hammer: <Hammer className="w-5 h-5 text-amber-400" />,
    Cpu: <Cpu className="w-5 h-5 text-amber-400" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-amber-400" />
  };

  const activeServiceIndex = activeExpandedId
    ? SERVICES_DATA.findIndex((s) => s.id === activeExpandedId)
    : -1;
  const activeService = activeServiceIndex >= 0 ? SERVICES_DATA[activeServiceIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeServiceIndex >= 0) {
      const nextIndex = (activeServiceIndex + 1) % SERVICES_DATA.length;
      setActiveExpandedId(SERVICES_DATA[nextIndex].id);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeServiceIndex >= 0) {
      const prevIndex = (activeServiceIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length;
      setActiveExpandedId(SERVICES_DATA[prevIndex].id);
    }
  };

  return (
    <section id="what-we-do" className="py-12 sm:py-14 bg-[#faf8f5] text-[#1a1a1a] border-b border-[#e8e2d9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 text-[#8c6b38] text-[11px] font-bold uppercase tracking-wider backdrop-blur-md">
            <Layers className="w-3 h-3 text-[#8c6b38]" />
            <span>Turnkey Multi-Disciplinary Practice</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
            What We Do.{' '}
            <span className="gold-gradient-text italic block sm:inline">
              Interactive Architectural Showcase.
            </span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
            {activeService
              ? 'Inspecting full-width engineering specifications. Use controls to navigate or return to all disciplines.'
              : 'Click any visual discipline below to transform the image into an expansive full-width architectural experience.'}
          </p>
        </div>

        {/* STATE 1: PURE IMAGE SHOWCASE (FITS COMPACTLY ON SCREEN) */}
        {!activeService && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-in fade-in duration-500">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                onClick={() => setActiveExpandedId(service.id)}
                className="group relative h-[210px] sm:h-[230px] rounded-2xl overflow-hidden cursor-pointer border border-[#e8e2d9] hover:border-[#8c6b38] shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.015] select-none"
              >
                {/* Full-Bleed Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.8] group-hover:brightness-95"
                />

                {/* Dark Luxury Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:via-black/20 transition-all duration-500" />

                {/* Top Number & Icon Pill */}
                <div className="absolute top-3.5 left-4 right-4 flex justify-between items-center">
                  <span className="w-8 h-8 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-xs font-mono text-[#fae19c] font-bold">
                    0{index + 1}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#fae19c]">
                    {iconMap[service.icon]}
                  </div>
                </div>

                {/* Bottom Overlay Info & Interactive Click Prompt */}
                <div className="absolute bottom-3.5 left-4 right-4 space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#fae19c] font-semibold block truncate">
                    {service.idealFor.split('&')[0]}
                  </span>
                  <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-white group-hover:text-[#fae19c] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Subtle Hover Callout */}
                  <div className="pt-1 flex items-center gap-1.5 text-[11px] text-gray-200 opacity-90 group-hover:opacity-100 group-hover:text-amber-200 transition-all">
                    <span>Expand Experience</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STATE 2: FULL-WIDTH TRANSFORMED EXPERIENCE (COMPACT & FITS SCREEN) */}
        {activeService && (
          <div className="animate-in fade-in zoom-in-95 duration-500 space-y-4">
            {/* Top Navigation Bar in Full-Width Mode */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-sm">
              <button
                onClick={() => setActiveExpandedId(null)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-gray-200"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#8c6b38]" />
                <span>← Back to All Disciplines</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-600 font-mono hidden sm:inline">
                  Discipline <strong className="text-[#8c6b38]">0{activeServiceIndex + 1}</strong> of 0{SERVICES_DATA.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-[#8c6b38] hover:text-white text-gray-700 transition-colors cursor-pointer border border-gray-200"
                    title="Previous Discipline"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-[#8c6b38] hover:text-white text-gray-700 transition-colors cursor-pointer border border-gray-200"
                    title="Next Discipline"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveExpandedId(null)}
                    className="p-2 rounded-xl bg-rose-50 hover:bg-rose-500 text-rose-600 hover:text-white transition-colors cursor-pointer border border-rose-200"
                    title="Close Full Width View"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* FULL-WIDTH TRANSFORMED STAGE (COMPACT HEIGHT) */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#e8e2d9] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Visual (Left / Top) */}
              <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[300px] lg:min-h-[440px] overflow-hidden">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover filter brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:to-white/40" />

                {/* Floating Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[11px] text-[#fae19c] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>{activeService.idealFor}</span>
                </div>
              </div>

              {/* Transformed Content Panel (Right) */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  {/* Discipline Badge & Number */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] flex items-center justify-center shrink-0 text-[#8c6b38]">
                      {iconMap[activeService.icon]}
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-[#8c6b38] font-bold">
                        Discipline 0{activeServiceIndex + 1}
                      </span>
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#111111] leading-tight">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-[#8c6b38] font-mono font-semibold">
                    {activeService.subtitle}
                  </p>

                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-normal line-clamp-3">
                    {activeService.description}
                  </p>

                  {/* Engineering Standards Checklist */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-600">
                      Key Engineering Standards & Millwork:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeService.highlights.slice(0, 4).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-800 bg-[#faf8f5] p-2.5 rounded-xl border border-[#e8e2d9]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-normal leading-tight text-[11px]">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Factory Capabilities */}
                  <div className="pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {activeService.capabilities.map((cap, i) => (
                        <span key={i} className="text-[10px] px-2.5 py-1 rounded-full bg-[#c5a880]/15 text-[#8c6b38] border border-[#c5a880]/40 font-semibold">
                          ✓ {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary Actions */}
                <div className="pt-4 border-t border-[#e8e2d9] flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onOpenConsultation}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#c5a880] via-[#d4ba96] to-[#b8976b] text-black font-bold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-[#c5a880]/30 transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Consult Architect on {activeService.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/918143678491?text=${encodeURIComponent(`Hi JS GALLOR, I would like to inquire about ${activeService.title} for my home.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Quick-Switch Thumbnail Strip (Compact) */}
            <div className="p-3 rounded-2xl bg-white border border-[#e8e2d9] shadow-sm">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {SERVICES_DATA.map((s, idx) => {
                  const isCurrent = s.id === activeExpandedId;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveExpandedId(s.id)}
                      className={`relative h-14 sm:h-16 rounded-xl overflow-hidden border transition-all text-left group cursor-pointer ${
                        isCurrent
                          ? 'border-[#8c6b38] ring-2 ring-[#8c6b38]/40 shadow-md scale-105'
                          : 'border-[#e8e2d9] hover:border-[#8c6b38]/50 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover filter brightness-[0.75] group-hover:brightness-90 transition-all"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute bottom-1.5 left-2 right-2 text-white">
                        <div className="text-[9px] text-[#fae19c] font-mono font-bold">0{idx + 1}</div>
                        <div className="text-[11px] font-bold truncate leading-tight">{s.title.split(' ')[0]}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
