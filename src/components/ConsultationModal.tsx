import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import { BhkType, TierLevel } from '../types/interior';
import { WhatsAppIcon } from './WhatsAppIcon';

import brandLogo from '../assets/images/JSGALORE.png';

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
  defaultTier?: TierLevel;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  open,
  onClose
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [bhk, setBhk] = useState<BhkType>('3 BHK');
  const [plotMeasurements, setPlotMeasurements] = useState('');
  const [budgetEstimation, setBudgetEstimation] = useState('₹10L – ₹18L (Standard Complete)');
  const [locality, setLocality] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*New 3D Design Session Booking*%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Email:* ${email || 'Not provided'}%0A` +
      `*Property Layout:* ${bhk}%0A` +
      `*Plot Measurements / Area:* ${plotMeasurements || 'Not specified'}%0A` +
      `*Budget Estimation:* ${budgetEstimation}%0A` +
      `*City/Locality:* ${locality || 'Hyderabad'}%0A%0A` +
      `Please confirm my free 3D design consultation appointment.`;

    const whatsappUrl = `https://wa.me/918143678491?text=${text}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#e8e2d9] shadow-2xl relative text-[#111111] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-luxury text-2xl font-bold text-[#111111]">
              Consultation Scheduled!
            </h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Redirecting you to our official WhatsApp line to connect with your allocated architect...
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a880]/15 text-[#8c6b38] text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Complimentary 3D Consultation</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                Book Design Session
              </h3>
              <p className="text-xs text-gray-600">
                Meet our senior architect at our Experience Center or via a personalized Virtual 3D screen share session.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#333333] font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Varma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#8c6b38] focus:bg-white transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#333333] font-semibold mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={10}
                    required
                    placeholder="e.g. 8143678491"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#8c6b38] focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#333333] font-semibold mb-1">Email (Optional)</label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#8c6b38] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#333333] font-semibold mb-1">Property Layout</label>
                  <select
                    value={bhk}
                    onChange={(e) => setBhk(e.target.value as BhkType)}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] text-[#111111] focus:outline-none focus:border-[#8c6b38] focus:bg-white transition-all"
                  >
                    <option value="1 BHK" className="bg-white text-[#111111]">1 BHK</option>
                    <option value="2 BHK" className="bg-white text-[#111111]">2 BHK</option>
                    <option value="3 BHK" className="bg-white text-[#111111]">3 BHK</option>
                    <option value="4 BHK" className="bg-white text-[#111111]">4 BHK</option>
                    <option value="Villa / Penthouse" className="bg-white text-[#111111]">Villa / Penthouse</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#333333] font-semibold mb-1">Plot Measurements / Area</label>
                  <input
                    type="text"
                    placeholder="e.g. 1,500 sq.ft / 30x50 ft"
                    value={plotMeasurements}
                    onChange={(e) => setPlotMeasurements(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#8c6b38] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#333333] font-semibold mb-1">Budget Estimation</label>
                  <select
                    value={budgetEstimation}
                    onChange={(e) => setBudgetEstimation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] text-[#111111] focus:outline-none focus:border-[#8c6b38] focus:bg-white transition-all"
                  >
                    <option value="₹5L – ₹10L (Essential Modular)" className="bg-white text-[#111111]">₹5L – ₹10L (Essential Modular)</option>
                    <option value="₹10L – ₹18L (Standard Complete)" className="bg-white text-[#111111]">₹10L – ₹18L (Standard Complete)</option>
                    <option value="₹18L – ₹30L (Premium Designer)" className="bg-white text-[#111111]">₹18L – ₹30L (Premium Designer)</option>
                    <option value="₹30L – ₹50L (Luxury Signature)" className="bg-white text-[#111111]">₹30L – ₹50L (Luxury Signature)</option>
                    <option value="₹50L+ (Bespoke Villa / Estate)" className="bg-white text-[#111111]">₹50L+ (Bespoke Villa / Estate)</option>
                    <option value="Flexible / Need Consultation" className="bg-white text-[#111111]">Flexible / Need Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#333333] font-semibold mb-1">Project Locality / Community</label>
                  <input
                    type="text"
                    placeholder="e.g. Kokapet / Jubilee Hills"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d9] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#8c6b38] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#8c6b38] via-[#c5a880] to-[#8c6b38] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/30 hover:brightness-105 active:scale-95 transition-all mt-4 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Confirm & Connect on WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

