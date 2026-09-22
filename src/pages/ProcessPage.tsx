import React from 'react';
import { PROCESS_STEPS } from '../data/interiorData';
import { ProcessJourney } from '../components/ProcessJourney';
import { Factory, ShieldCheck, Clock, Check, Award, Flame, Sparkles } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface ProcessPageProps {
  onOpenConsultation: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenConsultation }) => {
  const { navigate } = useRouter();

  return (
    <div className="pt-24 pb-24 bg-[#faf8f5] text-[#111111]">
      {/* Header Banner */}
      <section className="py-20 text-center relative overflow-hidden border-b border-[#e8e2d9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#8c6b38] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-[#8c6b38]" />
            <span>Turnkey Engineering Protocol</span>
          </div>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111]">
            The 40-Day Delivery Precision Journey
          </h1>
          <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            How we eliminate traditional contractor delays through in-house factory pre-fabrication, milestone tracking, and strict quality control.
          </p>
        </div>
      </section>

      {/* Main Process Timeline Component */}
      <ProcessJourney />

      {/* Experience Centre & Material Atelier Showcase for Client Visits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#e8e2d9] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#8c6b38] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#8c6b38]" />
              <span>Experience Centres & Material Ateliers</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#111111] leading-tight">
              Visit Our Experience Centres.{' '}
              <span className="gold-gradient-text italic block sm:inline">
                Modular & Carpentry Finishes In Action.
              </span>
            </h2>

            <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-light">
              Experience our full-scale residential mockups before finalizing your blueprint. Walk through live modular kitchens, explore handcrafted carpentry finishes, feel tactile veneers and PU lacquers, and test heavy-duty hardware in person with our principal architects.
            </p>

            {/* 4 Key Experience Highlights for Client Visits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8e2d9] space-y-1 shadow-sm">
                <h4 className="text-xs font-bold text-[#8c6b38]">Live Modular Mockups</h4>
                <p className="text-[11px] text-[#666666] leading-snug">Full-scale modular kitchens, island bars, and walk-in dressing suites with Blum & Hafele hardware.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8e2d9] space-y-1 shadow-sm">
                <h4 className="text-xs font-bold text-[#8c6b38]">Carpentry Finishes Lab</h4>
                <p className="text-[11px] text-[#666666] leading-snug">Touch and compare natural veneers, PU & Duco lacquers, acrylics, fluted louvers, and tinted glass.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8e2d9] space-y-1 shadow-sm">
                <h4 className="text-xs font-bold text-[#8c6b38]">Motion & Hardware Testing</h4>
                <p className="text-[11px] text-[#666666] leading-snug">Test 65,000-cycle certified soft-close drawers, hydraulic beds, and proximity sensor LEDs.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8e2d9] space-y-1 shadow-sm">
                <h4 className="text-xs font-bold text-[#8c6b38]">1-on-1 Architect Session</h4>
                <p className="text-[11px] text-[#666666] leading-snug">Review your floor plan live on wide BIM screens and receive an itemized material cost sheet.</p>
              </div>
            </div>

            {/* Studio Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#8c6b38] via-[#c5a880] to-[#8c6b38] text-white font-bold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-[#c5a880]/30 transition-all cursor-pointer text-center"
              >
                Book VIP Experience Centre Visit
              </button>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#faf8f5] hover:bg-gray-100 border border-[#e8e2d9] text-[#111111] font-semibold text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Get Studio Directions</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-96 sm:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-[#e8e2d9] group">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                alt="JS GALLOR Experience Centre Walkthrough"
                className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Overlay Atelier Information */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-[#c5a880] text-xs font-mono font-bold uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Flagship Studios Open 7 Days • 10:00 AM – 8:30 PM</span>
                </div>
                <div className="font-bold text-base text-white font-serif-luxury">
                  Hyderabad (Madhapur & Uppal) • Bangalore (Indiranagar)
                </div>
                <div className="text-gray-300 text-xs">
                  Physical swatches, full-scale kitchens, and customized carpentry samples ready for live client inspection.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10-Year Warranty & Compensation Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 text-[#111111] grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-xl border border-[#e8e2d9]">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury text-3xl font-bold text-[#111111]">
              10-Year Comprehensive Warranty Card
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-light">
              Every JS GALLOR handover comes with a formally registered physical and digital warranty certificate protecting your core BWP woodwork against water ingress, pest attacks, and hardware delamination.
            </p>
          </div>

          <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#e8e2d9] space-y-4 text-xs text-[#444444] shadow-sm">
            <div className="font-bold text-[#8c6b38] uppercase tracking-wider text-xs">
              The Written Handover Guarantee:
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Strict 40-Day Turnkey Timeline</strong> guaranteed in your master agreement.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>₹1,000/day delay compensation</strong> paid if we miss our deadline without client changes.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>2 Complimentary post-move service checks</strong> in Months 6 and 12.</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8c6b38] to-[#c5a880] text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all cursor-pointer shadow-md"
              >
                Schedule Experience Center Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
