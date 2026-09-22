import React from 'react';
import { Compass, Factory, Hammer, ShieldCheck, Check, Calendar, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/interiorData';

export const ProcessJourney: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6 text-[#8c6b38]" />,
    Factory: <Factory className="w-6 h-6 text-[#8c6b38]" />,
    Hammer: <Hammer className="w-6 h-6 text-[#8c6b38]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />
  };

  return (
    <section id="process" className="py-24 bg-[#faf8f5] text-[#111111] relative border-b border-[#e8e2d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#8c6b38] text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Guaranteed 40-Day Handover Timeline</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold tracking-tight text-[#111111]">
            Precision Orchestration from Blueprint to Key Handover
          </h2>
          <p className="text-[#555555] text-base sm:text-lg">
            No endless delays or unverified sub-contractors. Every milestone is tracked on your dedicated customer dashboard and logged with daily video proofs.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e8e2d9] relative flex flex-col justify-between group hover:border-[#8c6b38]/60 transition-all duration-300 shadow-xl"
            >
              {/* Step Number Top Badge */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif-luxury text-4xl font-bold text-[#8c6b38]/30 group-hover:text-[#8c6b38] transition-colors">
                    {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#faf8f5] border border-[#e8e2d9] text-[#8c6b38] font-semibold">
                    {step.duration}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#faf8f5] border border-[#e8e2d9] flex items-center justify-center mb-4 shadow-sm">
                  {iconMap[step.icon]}
                </div>

                <h3 className="font-serif-luxury text-2xl font-bold text-[#111111] mb-3">
                  {step.title}
                </h3>

                <p className="text-xs text-[#555555] leading-relaxed mb-6 font-light">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Box */}
              <div className="pt-4 border-t border-[#e8e2d9] space-y-2">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#8c6b38]">
                  Milestone Deliverables:
                </div>
                {step.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#666666]">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Penalty Assurance Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#c5a880]/40 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#444444] shadow-md">
          <Sparkles className="w-5 h-5 text-[#8c6b38] shrink-0" />
          <span>
            <strong>The JS GALLOR Handover Guarantee:</strong> If we exceed our agreed completion date without approved client changes, we pay you <strong>₹1,000 for every day of delay</strong>, guaranteed in writing in your master agreement.
          </span>
        </div>
      </div>
    </section>
  );
};
