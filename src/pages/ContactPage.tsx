import React, { useState } from 'react';
import { EXPERIENCE_CENTERS, FAQ_DATA } from '../data/interiorData';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronDown, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { BhkType } from '../types/interior';
import { submitInteriorInquiry } from '../services/inquiryService';

interface ContactPageProps {
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenConsultation }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCity, setFormCity] = useState('Hyderabad');
  const [formBhk, setFormBhk] = useState<BhkType>('3 BHK');
  const [plotMeasurements, setPlotMeasurements] = useState('');
  const [budgetEstimation, setBudgetEstimation] = useState('₹10L – ₹18L (Standard Complete)');
  const [locality, setLocality] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitInteriorInquiry({
        name: formName,
        phone: formPhone,
        city: formCity,
        bhk: formBhk,
        plotMeasurements,
        budgetEstimation,
        locality,
        formType: 'experience_center_visit',
      });
    } catch (err) {
      console.error('Error saving contact inquiry:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);

      const text = `*New Experience Center Appointment*%0A` +
        `*Name:* ${formName}%0A` +
        `*Phone:* ${formPhone}%0A` +
        `*City:* ${formCity}%0A` +
        `*Property Size:* ${formBhk}%0A` +
        `*Plot Measurements / Area:* ${plotMeasurements || 'Not specified'}%0A` +
        `*Budget Estimation:* ${budgetEstimation}%0A` +
        (locality ? `*Locality / Community:* ${locality}%0A` : '') + `%0A` +
        `I would like to book an appointment to visit your experience center.`;

      const whatsappUrl = `https://wa.me/918143678491?text=${text}`;

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setSubmitted(false);
        setFormName('');
        setFormPhone('');
        setPlotMeasurements('');
        setLocality('');
      }, 1200);
    }
  };

  return (
    <div className="pt-24 pb-24 bg-[#faf8f5] text-[#111111]">
      {/* Header */}
      <section className="py-20 text-center relative overflow-hidden border-b border-[#e8e2d9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#8c6b38] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-[#8c6b38]" />
            <span>Walk-In Design Lounges</span>
          </div>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111]">
            Visit Our Experience Centers
          </h1>
          <p className="text-[#555555] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Touch and feel live modular mockups, inspect Italian marble waterfall islands, and consult directly with our senior interior architects in Hyderabad & Bangalore.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* Experience Centers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EXPERIENCE_CENTERS.map((center) => (
            <div
              key={center.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#e8e2d9] hover:border-[#8c6b38] shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                    {center.city}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#111111]">
                      {center.name}
                    </h3>
                    <p className="text-xs text-[#8c6b38] font-semibold mt-0.5">
                      {center.area}, {center.city}
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs text-[#555555]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#8c6b38] shrink-0 mt-0.5" />
                      <span>{center.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#8c6b38] shrink-0" />
                      <span>{center.timing}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#8c6b38] shrink-0" />
                      <a href={`tel:${center.phone}`} className="hover:text-black text-[#555555]">
                        {center.phone}
                      </a>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-[#e8e2d9] space-y-1.5">
                    <div className="text-[10px] uppercase font-bold text-[#777777] tracking-wider">
                      Center Highlights:
                    </div>
                    {center.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#444444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/918143678491?text=${encodeURIComponent(`Hi JS GALLOR, I would like to visit the ${center.name} in ${center.city}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8c6b38] via-[#c5a880] to-[#8c6b38] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:brightness-105 transition-all cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book Center Visit</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form & Contact Details Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#e8e2d9] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/30 text-[#8c6b38] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#8c6b38]" />
              <span>Direct Concierge</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#111111]">
              Schedule an Architect Consultation
            </h2>
            <p className="text-[#555555] text-sm leading-relaxed font-light">
              Prefer an in-person meeting or a virtual 3D walkthrough? Fill out this quick form or reach out directly via WhatsApp for an immediate response.
            </p>

            <div className="space-y-4 pt-2 text-xs text-[#555555]">
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8e2d9] flex items-start gap-3 shadow-sm">
                <Phone className="w-5 h-5 text-[#8c6b38] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111111]">Central Helpline</div>
                  <a href="tel:+918143678491" className="text-[#8c6b38] font-semibold text-sm">
                    +91 81436 78491
                  </a>
                  <div className="text-[#777777] text-[11px] mt-0.5">Available Mon–Sun: 9:00 AM – 9:00 PM</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8e2d9] flex items-start gap-3 shadow-sm">
                <Mail className="w-5 h-5 text-[#8c6b38] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-[#111111]">Official Correspondence</div>
                  <a href="mailto:info@jsgallor.com" className="text-[#8c6b38] font-semibold">
                    info@jsgallor.com
                  </a>
                  <div className="text-[#777777] text-[11px] mt-0.5">Corporate & Design Inquiries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 bg-[#faf8f5] text-[#111111] p-8 sm:p-10 rounded-3xl shadow-md border border-[#e8e2d9]">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="font-serif-luxury text-3xl font-bold text-[#111111]">Appointment Requested!</h3>
                <p className="text-xs text-[#555555]">
                  Redirecting you to our official WhatsApp helpline...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <h3 className="font-serif-luxury text-2xl font-bold text-[#111111] mb-2">
                  Request Free 3D Design Session
                </h3>

                <div>
                  <label className="block text-[#333333] font-medium mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Sharma"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e2d9] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#8c6b38] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#333333] font-medium mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      required
                      placeholder="e.g. 8143678491"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e2d9] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#8c6b38] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#333333] font-medium mb-1">Preferred City</label>
                    <select
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e2d9] text-[#111111] focus:outline-none focus:border-[#8c6b38] transition-all"
                    >
                      <option value="Hyderabad" className="bg-white text-[#111111]">Hyderabad</option>
                      <option value="Bangalore" className="bg-white text-[#111111]">Bangalore</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#333333] font-medium mb-1">Floorplan Size</label>
                    <select
                      value={formBhk}
                      onChange={(e) => setFormBhk(e.target.value as BhkType)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e2d9] text-[#111111] focus:outline-none focus:border-[#8c6b38] transition-all"
                    >
                      <option value="1 BHK" className="bg-white text-[#111111]">1 BHK</option>
                      <option value="2 BHK" className="bg-white text-[#111111]">2 BHK</option>
                      <option value="3 BHK" className="bg-white text-[#111111]">3 BHK</option>
                      <option value="4 BHK" className="bg-white text-[#111111]">4 BHK</option>
                      <option value="Villa / Penthouse" className="bg-white text-[#111111]">Villa / Penthouse</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#333333] font-medium mb-1">Plot Measurements / Area</label>
                    <input
                      type="text"
                      placeholder="e.g. 1,500 sq.ft / 30x50 ft"
                      value={plotMeasurements}
                      onChange={(e) => setPlotMeasurements(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e2d9] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#8c6b38] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#333333] font-medium mb-1">Budget Estimation</label>
                    <select
                      value={budgetEstimation}
                      onChange={(e) => setBudgetEstimation(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e2d9] text-[#111111] focus:outline-none focus:border-[#8c6b38] transition-all"
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
                    <label className="block text-[#333333] font-medium mb-1">Project Locality / Area</label>
                    <input
                      type="text"
                      placeholder="e.g. Kokapet / Gachibowli"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e2d9] text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#8c6b38] transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#8c6b38] via-[#c5a880] to-[#8c6b38] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#c5a880]/30 hover:brightness-105 active:scale-95 transition-all mt-4 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scheduling Appointment...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Confirm & Connect on WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8c6b38]">
              Clear Answers
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#111111]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#e8e2d9] overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#111111]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8c6b38] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#e8e2d9] pt-3 font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
