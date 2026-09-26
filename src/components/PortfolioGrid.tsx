import React, { useState } from 'react';
import { MapPin, Clock, ArrowRight, Sparkles, Compass, Eye, Layers, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/interiorData';
import { PortfolioItem } from '../types/interior';
import { useRouter } from '../context/RouterContext';

interface PortfolioGridProps {
  onOpenConsultation: () => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const { navigate } = useRouter();

  const categories = ['All', 'Villa', 'Living', 'Kitchen', 'Bedroom', 'Automation'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  // Safe active project
  const masterProject = filteredProjects[activeProjectIndex] || filteredProjects[0] || PORTFOLIO_PROJECTS[0];

  // Satellite secondary projects (exclude currently active from satellites if possible, or show next 3)
  const satelliteProjects = filteredProjects.filter((p) => p.id !== masterProject.id).slice(0, 3);
  
  // Supplementary gallery items
  const supplementaryGallery = PORTFOLIO_PROJECTS.filter(
    (p) => p.id !== masterProject.id && !satelliteProjects.some((s) => s.id === p.id)
  ).slice(0, 4);

  return (
    <section id="portfolio" className="py-28 bg-[#faf8f5] text-[#1a1a1a] border-b border-[#e8e2d9] relative overflow-hidden">
      {/* Subtle ambient lighting aura */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[#c5a880]/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Editorial Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-8 border-b border-[#e8e2d9] gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 text-[#8c6b38] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#8c6b38]" />
              <span>Curated Living Portfolio</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              Real Residences.{' '}
              <span className="gold-gradient-text italic block sm:inline">Delivered on Time.</span>
            </h2>
            <p className="text-gray-600 text-base font-normal leading-relaxed">
              Explore bespoke turnkey living environments executed across Hyderabad and Bangalore’s premier enclaves. Select any residence to inspect architectural details.
            </p>
          </div>

          {/* Minimalist Locality / Category Horizon */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveProjectIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#c5a880] text-black shadow-md'
                    : 'bg-white text-gray-700 hover:text-black hover:bg-gray-50 border border-[#e8e2d9] shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ASYMMETRICAL ARCHITECTURAL EXHIBITION STAGE (Master Spotlight + Satellite Wall) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          {/* Master Spotlight Showcase (7 Cols on Desktop) - Brighter & Real Images */}
          <div className="lg:col-span-7 relative min-h-[500px] sm:min-h-[580px] rounded-3xl overflow-hidden border-2 border-[#c5a880]/60 shadow-2xl group flex flex-col justify-between p-7 sm:p-10 bg-neutral-900">
            {/* Cinematic Background Image - Bright & Crystal Clear */}
            <img
              key={masterProject.id}
              src={masterProject.image}
              alt={masterProject.title}
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Lighter, softer overlay so the real room image remains bright and clearly visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

            {/* Top HUD: Index, Locality & Tier */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs text-[#fae19c] font-bold tracking-widest px-3 py-1.5 rounded-full bg-black/60 border border-[#c5a880]/50 backdrop-blur-md shadow-md">
                  RESIDENCE 0{activeProjectIndex + 1}
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-[#fae19c] border border-white/20 font-bold shadow-sm">
                  {masterProject.tierName}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full border border-white/20 text-white backdrop-blur-md shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#fae19c]" />
                  {masterProject.locality}
                </span>
                <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full border border-white/20 text-emerald-300 font-bold backdrop-blur-md shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  {masterProject.duration}
                </span>
              </div>
            </div>

            {/* Bottom Content Dossier */}
            <div className="relative z-10 space-y-4 pt-16">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#fae19c] font-bold block mb-1 drop-shadow-sm">
                  {masterProject.category} Architectural Curation
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
                  {masterProject.title}
                </h3>
                <p className="text-gray-100 text-xs sm:text-sm font-normal mt-2 max-w-xl leading-relaxed line-clamp-2 drop-shadow-sm">
                  {masterProject.description}
                </p>
              </div>

              {/* Master Specs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/20 text-xs text-gray-100">
                <div className="bg-black/55 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
                  <div className="text-[10px] text-gray-300 uppercase font-mono font-bold">Area</div>
                  <div className="font-bold text-white text-sm">{masterProject.sqft}</div>
                </div>
                <div className="bg-black/55 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
                  <div className="text-[10px] text-gray-300 uppercase font-mono font-bold">Typology</div>
                  <div className="font-bold text-white text-sm">{masterProject.category}</div>
                </div>
                <div className="bg-black/55 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
                  <div className="text-[10px] text-gray-300 uppercase font-mono font-bold">Handover</div>
                  <div className="font-bold text-emerald-300 text-sm">{masterProject.duration}</div>
                </div>
                <div className="bg-black/55 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
                  <div className="text-[10px] text-gray-300 uppercase font-mono font-bold">Status</div>
                  <div className="font-bold text-[#fae19c] text-sm">Handed Over</div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate('/portfolio')}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#c5a880] via-[#e2cfb4] to-[#b8976b] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-xl"
                >
                  <span>Explore In Full Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs uppercase tracking-wider border border-white/30 backdrop-blur-md transition-all cursor-pointer shadow-md"
                >
                  Inquire Similar
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Satellite Stack (5 Cols on Desktop) - Brighter & Crisper */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {satelliteProjects.map((sat, idx) => (
              <div
                key={sat.id}
                onClick={() => {
                  const targetIdx = filteredProjects.findIndex((p) => p.id === sat.id);
                  if (targetIdx >= 0) setActiveProjectIndex(targetIdx);
                }}
                className="group relative flex-1 min-h-[160px] rounded-3xl overflow-hidden border border-[#e2d8ca] hover:border-[#c5a880] cursor-pointer transition-all duration-500 flex flex-col justify-between p-5 bg-neutral-900 shadow-md hover:shadow-2xl"
              >
                <img
                  src={sat.image}
                  alt={sat.title}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] group-hover:brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#fae19c] font-bold px-2.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
                    SATELLITE 0{idx + 1}
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold text-white bg-black/60 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
                    {sat.category}
                  </span>
                </div>

                {/* Bottom Details on hover */}
                <div className="relative z-10 w-full flex items-end justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#fae19c] transition-colors drop-shadow-md">
                      {sat.title}
                    </h4>
                    <p className="text-xs text-gray-100 flex items-center gap-1.5 mt-0.5 drop-shadow-sm font-medium">
                      <MapPin className="w-3 h-3 text-[#fae19c]" />
                      <span>{sat.locality}</span>
                      <span>•</span>
                      <span>{sat.sqft}</span>
                    </p>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#fae19c] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex items-center gap-1 shrink-0 bg-black/60 px-3 py-1 rounded-full border border-[#c5a880]/50 backdrop-blur-md">
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* COMPLEMENTARY SPATIAL GALLERY STRIP (Hover-Activated Architectural Tiles) */}
        {/* ========================================================================= */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-600 font-bold">
              Architectural Room Studies & Spatial Details
            </span>
            <span className="text-xs text-gray-500">
              Hover to reveal monograph coordinates
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supplementaryGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => navigate('/portfolio')}
                className="relative h-60 rounded-2xl overflow-hidden border border-[#e8e2d9] hover:border-[#8c6b38] cursor-pointer group transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-[0.6] group-hover:brightness-[0.9] group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Minimalist Floating Tag (Always subtle, vibrant on hover) */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-[#fae19c] font-bold">
                  SPACE 0{idx + 1}
                </div>

                {/* Hover Reveal Title Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
                  <h5 className="font-serif-luxury text-base font-bold text-white group-hover:text-[#fae19c] transition-colors leading-snug">
                    {item.title}
                  </h5>
                  <div className="flex items-center justify-between text-[11px] text-gray-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{item.locality}</span>
                    <span className="text-[#fae19c] font-mono font-bold">{item.sqft}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Monograph Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#e8e2d9] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-luxury text-xl font-bold text-[#111111]">
              Seeking Room-by-Room CAD Floorplans & High-Res Lookbooks?
            </h4>
            <p className="text-xs text-gray-600 font-normal">
              Explore 18+ documented turnkey residences with material schedules, before-after journeys, and live spatial radar.
            </p>
          </div>

          <button
            onClick={() => navigate('/portfolio')}
            className="px-7 py-3.5 rounded-2xl bg-gray-100 hover:bg-[#8c6b38] text-gray-900 hover:text-white border border-gray-200 hover:border-[#8c6b38] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-md shrink-0 cursor-pointer"
          >
            <span>Enter Complete Portfolio Monograph</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
