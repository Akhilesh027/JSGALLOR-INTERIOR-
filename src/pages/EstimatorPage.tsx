import React from 'react';
import { CostEstimator } from '../components/CostEstimator';
import { TierLevel } from '../types/interior';
import { Calculator, ShieldCheck, Clock, CheckCircle2, Award } from 'lucide-react';

interface EstimatorPageProps {
  selectedTier: TierLevel;
  onTierChange: (tier: TierLevel) => void;
  onOpenConsultation: () => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({
  selectedTier,
  onTierChange,
  onOpenConsultation
}) => {
  return (
    <div className="pt-24 pb-24 bg-[#faf8f5] text-[#111111]">
      {/* Editorial Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#8c6b38] text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          <span>Transparent Pricing Architecture</span>
        </div>
        <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111]">
          Instant Turnkey Home Cost Estimator
        </h1>
        <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          No inflated hidden charges, no sudden on-site escalations. Select your floor plan, choose your tier, and view your itemized estimate backed by in-house factory manufacturing.
        </p>

        {/* Guarantees Bar */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-xs text-[#444444]">
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-[#e8e2d9] shadow-sm">
            <Clock className="w-4 h-4 text-[#8c6b38]" />
            <span>Guaranteed 40-Day Handover</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-[#e8e2d9] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#8c6b38]" />
            <span>10-Year Comprehensive Warranty</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white border border-[#e8e2d9] shadow-sm">
            <Award className="w-4 h-4 text-[#8c6b38]" />
            <span>100% Price Lock Policy</span>
          </div>
        </div>
      </section>

      {/* Embedded Estimator Engine */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostEstimator
          selectedTier={selectedTier}
          onTierChange={onTierChange}
          onOpenConsultation={onOpenConsultation}
        />
      </div>

      {/* Pricing FAQ & Policy */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#e8e2d9] space-y-6 shadow-xl">
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#111111]">
            How Our Pricing Model Protects Homeowners
          </h3>
          <div className="space-y-4 text-xs sm:text-sm text-[#555555] leading-relaxed">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#111111]">Direct Factory Cut:</strong> By manufacturing in our own 1,00,000 sq.ft facility with advanced CNC machinery, we eliminate retail middleman commissions and cut material wastage by 18%.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#111111]">Fixed-Price Master BOQ:</strong> Every hinge, channel, laminate code, and quartz thickness is itemized in your pre-contract bill of quantities. You never receive unapproved surprise invoices.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#111111]">Milestone Payment Security:</strong> Payments are linked strictly to verified completion stages (Design Approval → Factory Dispatch → Site Assembly → Final Handover).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
