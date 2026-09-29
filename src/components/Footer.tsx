import React from 'react';
import { Phone, Mail, MessageSquare, ShieldCheck, Clock, Award, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

import brandLogo from '../assets/images/JSGALORE.png';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const { navigate } = useRouter();
  const whatsappNumber = "918143678491";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi JS GALLOR Interiors team, I would like an interior design consultation.")}`;

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/jsgallor/',
      hover: 'hover:text-[#E4405F]'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@JSGALLOR',
      hover: 'hover:text-[#FF0000]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/jsgallor',
      hover: 'hover:text-[#0A66C2]'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61586448690693',
      hover: 'hover:text-[#1877F2]'
    }
  ];

  return (
    <footer className="bg-[#f7f5f0] text-[#1a1a1a] pt-20 pb-12 border-t border-[#e8e2d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-[#e8e2d9]">
          {/* Brand Col */}
          <div className="space-y-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-left cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-2xl bg-black border border-[#c5a880]/50 p-1.5 shadow-md flex items-center justify-center transition-all duration-300 group-hover:border-[#8c6b38] group-hover:scale-105 shrink-0">
                <img
                  src={brandLogo}
                  alt="JS GALLOR Original Brand Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
              <div>
                <div className="font-serif-luxury text-2xl font-bold tracking-tight text-[#111111]">
                  JSGALLOR
                </div>
                <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-semibold mt-0.5">
                  <span className="text-gray-600">JAGHSORA LUXORE</span>
                  <span className="text-[#8c6b38] font-bold">INTERIORS</span>
                </div>
              </div>
            </button>

            <p className="text-xs text-gray-600 leading-relaxed max-w-sm">
              Premium residential interior architecture, factory modular craftsmanship, and turnkey civil execution for discerning homeowners in Hyderabad, Bangalore & Pan-India.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-gray-700">
              <a href="tel:+918143678491" className="flex items-center gap-2 hover:text-[#8c6b38] transition-colors">
                <Phone className="w-4 h-4 text-[#8c6b38]" />
                <span>+91 81436 78491 / +91 70758 48516</span>
              </a>
              <a href="mailto:info@jsgallor.com" className="flex items-center gap-2 hover:text-[#8c6b38] transition-colors">
                <Mail className="w-4 h-4 text-[#8c6b38]" />
                <span>info@jsgallor.com</span>
              </a>
            </div>

            {/* Experience Center */}
            <div className="pt-2 border-t border-[#e8e2d9] space-y-2 text-xs text-gray-600">
              <div className="font-bold text-[#8c6b38] uppercase tracking-wider text-[10px]">
                Experience Center & Office:
              </div>
              <div>
                <span className="text-[11px] leading-relaxed block text-gray-800">
                  Road No 1, Bagayath layout, 3rd floor, Plot 288, Uppal, Hyderabad, Telangana 500039
                </span>
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className={`w-8 h-8 rounded-full bg-white border border-[#e8e2d9] flex items-center justify-center text-gray-600 ${social.hover} hover:border-[#8c6b38] transition-all shadow-sm`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Design Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8c6b38]">
              Interior Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-black transition-colors cursor-pointer text-left">
                  Modular Kitchens & Pantries
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-black transition-colors cursor-pointer text-left">
                  Living & Dining Lounges
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-black transition-colors cursor-pointer text-left">
                  Master & Bedroom Suites
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-black transition-colors cursor-pointer text-left">
                  Civil & Structural Restructuring
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-black transition-colors cursor-pointer text-left">
                  Smart Home Automation & IoT
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-black transition-colors cursor-pointer text-left">
                  Architectural Lighting & Ceilings
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-black transition-colors cursor-pointer text-left">
                  Curtains, Blinds, Wallpapers & Wall Panels
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8c6b38]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <button onClick={() => navigate('/')} className="hover:text-black transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/portfolio')} className="hover:text-black transition-colors cursor-pointer text-left text-[#8c6b38] font-semibold">
                  Portfolio Gallery
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/collections')} className="hover:text-black transition-colors cursor-pointer text-left">
                  3-Tier Collections
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/services')} className="hover:text-black transition-colors cursor-pointer text-left">
                  What We Do
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="hover:text-black transition-colors cursor-pointer text-left">
                  Experience Centers & Contact
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-black transition-colors cursor-pointer text-left text-[#8c6b38] font-medium">
                  Book 3D Design Session
                </button>
              </li>
            </ul>
          </div>

          {/* Warranties & Assurance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8c6b38]">
              Our Commitments
            </h4>
            <div className="space-y-2 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Turnkey On-Time Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>10-Year Material Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Hidden Cost Guarantee</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#c5a880] to-[#b8976b] text-black text-xs font-bold uppercase tracking-wider hover:brightness-105 transition-all cursor-pointer shadow-md"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} JS GALLOR (Jaghsora Luxore Pvt Ltd). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800">Terms of Handover</a>
            <a href="#" className="hover:text-gray-800">Warranty Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
