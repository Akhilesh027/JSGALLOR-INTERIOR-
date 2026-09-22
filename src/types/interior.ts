export type TierLevel = 'affordable' | 'mid_luxury' | 'bespoke_luxury';

export interface TierPackage {
  id: TierLevel;
  name: string;
  tagline: string;
  badge: string;
  tierDescriptor: string;
  scopeHighlight: string;
  priceRange: string;
  startingPrice: number;
  deliveryDays: number;
  warrantyYears: number;
  highlightColor: string;
  badgeBg: string;
  summary: string;
  idealFor: string;
  materials: {
    core: string;
    finish: string;
    hardware: string;
    countertop?: string;
  };
  inclusions: string[];
  sampleImage: string;
  popular?: boolean;
}

export type BhkType = '1 BHK' | '2 BHK' | '3 BHK' | '4 BHK' | 'Villa / Penthouse';

export interface RoomOption {
  id: string;
  name: string;
  description: string;
  iconName: string;
  baseCost: {
    affordable: number;
    mid_luxury: number;
    bespoke_luxury: number;
  };
  includedByDefault: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'All' | 'Kitchen' | 'Living' | 'Bedroom' | 'Villa' | 'Automation';
  tier: TierLevel;
  tierName: string;
  locality: string;
  city: string;
  sqft: string;
  duration: string;
  scope: string;
  image: string;
  galleryImages?: string[];
  features: string[];
  description?: string;
  materialsUsed?: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  locality: string;
  propertyType: string;
  tierName: string;
  projectScope: string;
  rating: number;
  quote: string;
  handoverDate: string;
  avatar: string;
  verified: boolean;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface InteriorService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  highlights: string[];
  capabilities: string[];
  idealFor: string;
}

export interface ExperienceCenter {
  id: string;
  name: string;
  city: string;
  area: string;
  address: string;
  phone: string;
  email: string;
  timing: string;
  image: string;
  mapsUrl: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Process' | 'Materials' | 'Pricing' | 'Warranty';
}
