import React, { useState, useEffect } from 'react';
import { Phone, Sparkles, Menu, X, ArrowRight, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { WhatsAppIcon } from './WhatsAppIcon';

import brandLogo from '../../../Mid_range/src/Image/JSGALORE.png';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "918143678491";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi JS GALLOR team, I would like to consult on luxury bespoke interiors for my residence.")}`;

  // Social Links
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/jsgallor/',
      hoverColor: 'hover:text-[#E4405F]'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@JSGALLOR',
      hoverColor: 'hover:text-[#FF0000]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/jsgallor',
      hoverColor: 'hover:text-[#0A66C2]'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61586448690693',
      hoverColor: 'hover:text-[#1877F2]'
    }
  ];

  // 5 Explicit Navbar Links: Home, What We Do, Portfolio, Collections, Contact
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'What We Do', path: '/services' },
    { label: 'Portfolio', path: '/portfolio', highlight: true },
    { label: 'Collections', path: '/collections' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isLightNav = currentPath !== '/' || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isLightNav
          ? 'bg-white/95 backdrop-blur-md py-3.5 shadow-md border-b border-[#e8e2d9] text-[#111111]'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Original Brand Logo & Icon */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-black border border-[#c5a880]/50 p-1.5 shadow-md flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:border-[#8c6b38] group-hover:shadow-[0_0_20px_rgba(197,168,128,0.3)] shrink-0">
            <img
              src={brandLogo}
              alt="JS GALLOR Original Brand Icon"
              className="w-full h-full object-contain filter drop-shadow group-hover:rotate-6 transition-transform duration-500"
            />
          </div>
          <div>
            <div className={`font-serif-luxury text-2xl sm:text-3xl font-bold tracking-tight leading-none ${isLightNav ? 'text-[#111111]' : 'text-white'}`}>
              JSGALLOR
            </div>
            <div className="flex items-center gap-1.5 mt-0.5 text-[9px] sm:text-[10px] tracking-wider uppercase font-semibold">
              <span className={isLightNav ? 'text-gray-600' : 'text-gray-300'}>JAGHSORA LUXORE</span>
              <span className="text-[#8c6b38] font-bold tracking-wider">INTERIORS</span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation - EXACTLY 5 LINKS */}
        <nav className="hidden lg:flex items-center gap-7 text-xs xl:text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`relative transition-all duration-200 cursor-pointer flex items-center gap-1.5 py-1 ${
                  isActive
                    ? 'text-[#8c6b38] font-bold'
                    : isLightNav
                    ? 'text-gray-700 hover:text-[#8c6b38]'
                    : link.highlight
                    ? 'text-amber-300 hover:text-white'
                    : 'text-gray-200 hover:text-[#c5a880]'
                }`}
              >
                {link.highlight && <Sparkles className="w-3.5 h-3.5 text-[#8c6b38]" />}
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8c6b38] rounded-full shadow-[0_0_8px_#8c6b38]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA, Social Links & Quick Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Social Profiles */}
          <div className={`flex items-center gap-1 border-r pr-3 ${isLightNav ? 'border-gray-200' : 'border-white/20'}`}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={`Official ${social.name}`}
                  className={`p-1.5 rounded-full transition-all duration-200 ${
                    isLightNav
                      ? `text-gray-500 ${social.hoverColor} hover:bg-gray-100`
                      : `text-gray-300 ${social.hoverColor} hover:bg-white/10`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-[#25D366]/40 text-emerald-700 bg-emerald-50/80 hover:bg-emerald-100 transition-colors backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold text-black bg-gradient-to-r from-[#c5a880] via-[#e2cfb4] to-[#b8976b] hover:shadow-xl hover:shadow-[#c5a880]/30 transition-all active:scale-95 cursor-pointer shadow-md"
          >
            <span>Book 3D</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2.5">
          <button
            onClick={onOpenConsultation}
            className="px-3 py-1.5 rounded-full text-xs font-bold text-black bg-[#c5a880]"
          >
            Book 3D
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg cursor-pointer ${isLightNav ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-[#e8e2d9] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 backdrop-blur-2xl shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`block w-full text-left py-2 text-base font-medium transition-colors ${
                currentPath === link.path
                  ? 'text-[#8c6b38] font-bold border-l-2 border-[#8c6b38] pl-3'
                  : 'text-gray-700 hover:text-black pl-1'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Mobile Social Links */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Follow JS GALLOR:</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`p-2 rounded-full bg-gray-100 text-gray-600 ${social.hoverColor} transition-colors`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-gray-200 flex flex-col gap-3">
            <a
              href="tel:+918143678491"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-800"
            >
              <Phone className="w-4 h-4 text-[#8c6b38]" />
              Call +91 81436 78491
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold shadow-lg transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
