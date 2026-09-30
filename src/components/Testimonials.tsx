import React, { useState } from 'react';
import { Star, CheckCircle, Quote, MessageSquare, ArrowRight, ShieldCheck, Clock, Award, Building2, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/interiorData';
import { TestimonialItem } from '../types/interior';

interface TestimonialsProps {
  onOpenConsultation: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenConsultation }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeTestimonial: TestimonialItem = TESTIMONIALS_DATA[activeIndex] || TESTIMONIALS_DATA[0];

  return (
    <section id="testimonials" className="py-28 bg-[#faf8f5] text-[#111111] border-b border-[#e8e2d9] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[450px] bg-[#c5a880]/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#e8e2d9] gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#8c6b38] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Star className="w-3.5 h-3.5 text-[#8c6b38] fill-[#8c6b38]" />
              <span>Verified Homeowner Feedback</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              Lived Experiences.{' '}
              <span className="gold-gradient-text italic block sm:inline">Flawless Handovers.</span>
            </h2>
            <p className="text-[#555555] text-base font-light leading-relaxed">
              Read verified handover records from clients across Hyderabad & Bangalore who commissioned our turnkey interiors, from compact rental assets to private villas.
            </p>
          </div>

          {/* Quick Rating Badge */}
          <div className="p-4 rounded-2xl bg-white border border-[#e8e2d9] shadow-sm self-start lg:self-end flex items-center gap-4">
            <div className="text-right">
              <div className="text-xl font-bold font-mono text-[#111111]">4.9 / 5.0</div>
              <div className="text-[11px] text-[#777777]">Verified Client Rating</div>
            </div>
            <div className="flex gap-1 text-[#8c6b38]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE EDITORIAL HANDOVER MONOGRAPH (Master Spotlight + Client Ledger) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Master Spotlight Card (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-white border border-[#c5a880]/40 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Watermark Quote Icon */}
            <Quote className="absolute -top-6 -right-6 w-36 h-36 text-black/[0.04] pointer-events-none" />

            <div>
              {/* Top Handover Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8c6b38] uppercase tracking-wider font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>RECORD ARCHIVE 0{activeIndex + 1}</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Turnkey Handover</span>
                </div>
              </div>

              {/* Editorial Quote */}
              <blockquote className="font-serif-luxury text-xl sm:text-2xl lg:text-2xl leading-relaxed text-[#111111] font-normal mb-8 italic">
                "{activeTestimonial.quote}"
              </blockquote>
            </div>

            {/* Client Profile & Project Specs Footer */}
            <div className="pt-6 border-t border-[#e8e2d9] space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.clientName}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[#8c6b38] shadow-md"
                />
                <div>
                  <h4 className="font-serif-luxury text-xl font-bold text-[#111111]">
                    {activeTestimonial.clientName}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#666666] mt-1">
                    <span className="flex items-center gap-1 text-[#444444]">
                      <MapPin className="w-3.5 h-3.5 text-[#8c6b38]" />
                      <span>{activeTestimonial.locality}</span>
                    </span>
                    <span>•</span>
                    <span className="text-[#8c6b38] font-medium">{activeTestimonial.propertyType}</span>
                  </div>
                </div>
              </div>

              {/* Handover Data Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#faf8f5] border border-[#e8e2d9] text-xs">
                <div>
                  <div className="text-[#777777] text-[11px]">Collection Tier:</div>
                  <div className="font-bold text-[#111111] mt-0.5">{activeTestimonial.tierName}</div>
                </div>
                <div>
                  <div className="text-[#777777] text-[11px]">Handover Timeline:</div>
                  <div className="font-bold text-[#8c6b38] mt-0.5">{activeTestimonial.handoverDate}</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="text-[#777777] text-[11px]">Execution Scope:</div>
                  <div className="font-medium text-[#333333] mt-0.5 truncate">{activeTestimonial.projectScope}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Handover Ledger Stack (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between px-2 text-xs font-mono uppercase tracking-widest text-[#8c6b38] font-semibold">
              <span>Resident Ledger Index</span>
              <span className="text-[#777777]">Select to Read</span>
            </div>

            {TESTIMONIALS_DATA.map((client, idx) => {
              const isCurrent = activeIndex === idx;

              return (
                <div
                  key={client.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white border-[#8c6b38] shadow-lg scale-[1.01]'
                      : 'bg-white/60 border-[#e8e2d9] hover:border-[#8c6b38]/50 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#8c6b38] font-bold">
                        0{idx + 1}
                      </span>
                      <h4 className="font-serif-luxury text-base font-bold text-[#111111]">
                        {client.clientName}
                      </h4>
                    </div>

                    <div className="flex gap-0.5 text-[#8c6b38]">
                      {[...Array(client.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-[#555555] line-clamp-2 font-light leading-relaxed mb-3">
                    "{client.quote}"
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-[#666666] pt-2 border-t border-[#e8e2d9]">
                    <span className="text-[#444444] truncate max-w-[200px]">{client.locality}</span>
                    <span className="text-[#8c6b38] font-mono font-semibold">{client.tierName}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Handover Protocol Trust Metrics Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-[#e8e2d9] shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5a880]/15 border border-[#c5a880]/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#8c6b38]" />
            </div>
            <div>
              <div className="font-mono text-lg font-bold text-[#111111]">40 to 50 Days</div>
              <div className="text-xs text-[#666666]">Fixed penalty-backed turnkey handover guarantee</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#e8e2d9] shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5a880]/15 border border-[#c5a880]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#8c6b38]" />
            </div>
            <div>
              <div className="font-mono text-lg font-bold text-[#111111]">10 to 12 Years</div>
              <div className="text-xs text-[#666666]">Comprehensive warranty on marine BWP plywood & runners</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#e8e2d9] shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c5a880]/15 border border-[#c5a880]/30 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-[#8c6b38]" />
            </div>
            <div>
              <div className="font-mono text-lg font-bold text-[#111111]">60,000 sq.ft</div>
              <div className="text-xs text-[#666666]">In-house automated CNC manufacturing hub</div>
            </div>
          </div>
        </div>

        {/* Bottom VIP CTA Box */}
        <div className="bg-white border border-[#c5a880]/40 rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a880]/10 blur-[100px] pointer-events-none rounded-full" />

          <span className="text-xs font-mono uppercase tracking-widest text-[#8c6b38] font-bold">
            [ NEXT GENERATION ARCHITECTURAL LIVING ]
          </span>

          <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
            Ready to Build Your Bespoke Residence?
          </h3>

          <p className="text-[#555555] text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Reserve a complimentary 3D virtual walkthrough and space-planning workshop with our senior interior architects in Hyderabad or Bangalore.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-9 py-4 rounded-full bg-gradient-to-r from-[#8c6b38] via-[#c5a880] to-[#8c6b38] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-[#c5a880]/40 hover:brightness-105 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Book 3D Design Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/917075848516"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#faf8f5] hover:bg-gray-100 border border-[#e8e2d9] text-[#111111] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp an Architect</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
