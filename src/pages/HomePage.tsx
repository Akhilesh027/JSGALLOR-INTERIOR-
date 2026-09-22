import React from 'react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { FactoryCraftVideoSection } from '../components/FactoryCraftVideoSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection';
import { VideoFeatureStrip } from '../components/VideoFeatureStrip';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { TierComparison } from '../components/TierComparison';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { MaterialBrands } from '../components/MaterialBrands';
import { Testimonials } from '../components/Testimonials';
import { TierLevel } from '../types/interior';
import { useRouter } from '../context/RouterContext';

interface HomePageProps {
  selectedTier: TierLevel;
  onSelectTier: (tier: TierLevel) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  selectedTier,
  onSelectTier,
  onOpenConsultation
}) => {
  const { navigate } = useRouter();

  return (
    <div className="space-y-0 bg-[#faf8f5] text-[#1a1a1a]">
      {/* 1. Full-Bleed Cinematic Background Video Hero */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. Turnkey Architectural Precision Trust Metrics */}
      <TrustStrip />

      {/* 3. Carpentry Finishes & Craftsmanship Showcase */}
      <FactoryCraftVideoSection onOpenConsultation={onOpenConsultation} />

      {/* 4. WHAT WE DO: Interactive Architectural Showcase (Placed immediately AFTER Factory Section) */}
      <WhatWeDoSection onOpenConsultation={onOpenConsultation} />

      {/* 5. Haute Culinary & Living Architecture Background Video Section */}
      <VideoFeatureStrip onOpenConsultation={onOpenConsultation} />

      {/* 6. Visual Transformation Engine (Interactive Split Slider) */}
      <BeforeAfterSlider />

      {/* 7. Calibrated Three-Tier Architecture (With Website Links & No Pricing) */}
      <TierComparison
        onSelectTier={onSelectTier}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 8. Curated Signature Portfolio Gallery */}
      <PortfolioGrid onOpenConsultation={onOpenConsultation} />

      {/* 9. Certified Sourcing & Material Hardware Partners */}
      <MaterialBrands />

      {/* 10. Verified Homeowner Reviews */}
      <Testimonials onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
