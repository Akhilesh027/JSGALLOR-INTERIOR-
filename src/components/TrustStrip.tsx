import React from 'react';
import { Home, Clock, ShieldCheck, Factory, Star, Award, Sparkles, CheckCircle2, ArrowDown, Compass } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const telemetryMetrics = [
    {
      metric: '1,450+',
      label: 'Residences Handed Over',
      subtext: 'Turnkey execution in HYD & BLR',
      icon: Home
    },
    {
      metric: '40 Days',
      label: 'Guaranteed Handover',
      subtext: '₹1,000/day delay penalty clause',
      icon: Clock
    },
    {
      metric: '10–12 Yrs',
      label: 'Structural Warranty',
      subtext: 'IS:710 Marine BWP & calibrated core',
      icon: ShieldCheck
    },
    {
      metric: '1,00,000 sq.ft',
      label: 'In-House CNC Facility',
      subtext: 'Homag automated factory floor',
      icon: Factory
    },
    {
      metric: '4.9 ★',
      label: 'Client Audit Rating',
      subtext: '450+ verified handover reviews',
      icon: Star
    }
  ];

  const scrollToFactory = () => {
    const el = document.getElementById('craft');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-30 -mt-10 lg:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating Frosted Glass Telemetry Dock */}
      <div className="bg-white/95 rounded-3xl shadow-xl border border-[#e8e2d9] p-6 sm:p-8 backdrop-blur-2xl relative overflow-hidden group">
        {/* Subtle interior glow */}
        <div className="absolute top-0 right-0 w-80 h-32 bg-[#c5a880]/10 blur-[90px] pointer-events-none rounded-full" />

        {/* Top Header Horizon */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#e8e2d9] text-[11px] font-mono tracking-widest text-gray-500">
          <div className="flex items-center gap-2 text-[#8c6b38] font-bold uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>[ ARCHITECTURAL TELEMETRY DOCK ]</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-gray-500">
            <span>ISO 9001:2015 CERTIFIED</span>
            <span>•</span>
            <span className="text-gray-900 font-bold">HYDERABAD & BANGALORE ATELIERS</span>
          </div>
        </div>

        {/* 5 Precision Telemetry Metric Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#e8e2d9]">
          {telemetryMetrics.map((item, index) => {
            const Icon = item.icon;
            const isStar = item.icon === Star;

            return (
              <div
                key={index}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  index > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] flex items-center justify-center mb-2.5 text-[#8c6b38]">
                  <Icon className={`w-4 h-4 ${isStar ? 'text-amber-500 fill-amber-500' : ''}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#111111] font-mono tracking-tight">
                  {item.metric}
                </div>
                <div className="text-xs font-bold text-gray-800 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-gray-500 font-normal mt-0.5">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Legal Assurance & Smooth Scroll Trigger */}
        <div className="mt-8 pt-5 border-t border-[#e8e2d9] flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span><strong className="text-gray-900">100% In-House Factory Built:</strong> Zero carpenter delays.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span><strong className="text-gray-900">Fixed-Price Turnkey Deed:</strong> Zero escalation guarantee.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span><strong className="text-gray-900">Delay Indemnity:</strong> ₹1,000/day contract penalty.</span>
            </div>
          </div>

          <button
            onClick={scrollToFactory}
            className="text-[11px] font-mono text-[#8c6b38] hover:text-black uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 font-bold"
          >
            <span>Inspect In-House CNC Facility</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

