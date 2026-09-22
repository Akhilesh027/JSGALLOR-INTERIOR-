import React, { useState } from 'react';
import { 
  MapPin, Clock, Sparkles, Check, ArrowRight, ArrowLeft, 
  Layers, Compass, Home, ShieldCheck, Factory, 
  MessageSquare, ChevronLeft, ChevronRight, CheckCircle2
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface PortfolioPageProps {
  onOpenConsultation: () => void;
}

interface SpatialRoom {
  id: string;
  name: string;
  tag: string;
  image: string;
  specs: string[];
  materials: string[];
  pinX: number; // Percentage on CAD floor plan
  pinY: number; // Percentage on CAD floor plan
}

interface GalleryItem {
  id: string;
  title: string;
  space: string;
  image: string;
  caption: string;
}

interface ResidenceProject {
  id: string;
  title: string;
  subtitle: string;
  community: string;
  city: 'Hyderabad' | 'Bangalore';
  typology: 'Villa' | 'Penthouse' | 'Apartment';
  tierName: string;
  tierBadge: string;
  sqft: string;
  duration: string;
  scope: string;
  coverImage: string;
  narrative: string;
  verifiedSpecs: { label: string; value: string }[];
  materialDNA: { name: string; origin: string; color: string }[];
  rooms: SpatialRoom[];
  gallery: GalleryItem[];
}

const RESIDENCE_PROJECTS: ResidenceProject[] = [
  {
    id: 'res-1',
    title: 'The Alabaster Haven',
    subtitle: 'Contemporary 3BHK Penthouse with Acoustic Fluted Millwork',
    community: 'My Home Bhooja, Kokapet',
    city: 'Hyderabad',
    typology: 'Penthouse',
    tierName: 'Signature Spaces',
    tierBadge: 'Turnkey Luxury',
    sqft: '2,450 sq.ft',
    duration: '48 Days Handover',
    scope: 'Complete Turnkey Penthouse Curation (Civil + Modular + Curtains, Blinds & Wall Paneling)',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    narrative: 'Engineered for a senior technology director at Kokapet. The client requested an open-concept great room with acoustic fluted wall panels, motorized sheer curtains, textured wallpapers, and seamless concealed storage.',
    verifiedSpecs: [
      { label: 'Turnaround', value: '48 Calendar Days' },
      { label: 'Tolerance', value: '0.1mm Homag CNC' },
      { label: 'Structural Warranty', value: '10-Year Certified' },
      { label: 'Quality Audit', value: '140-Point Zero-Snag' }
    ],
    materialDNA: [
      { name: 'Premium Quartz & Onyx', origin: '18mm Calacatta & Onyx', color: '#e5e0d8' },
      { name: 'Charcoal Acoustic Louvers', origin: 'CNC Fluted Polymer', color: '#2b2d35' },
      { name: 'Hafele Matrix Drawers', origin: 'Tested 65k Cycles', color: '#718096' },
      { name: 'Warm 3000K Magnetic Track', origin: 'Low-Voltage 24V', color: '#fae19c' }
    ],
    rooms: [
      {
        id: 'r1',
        name: 'Grand Living & Media Salon',
        tag: 'Social Sanctuary',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
        specs: ['Floating TV console with concealed wire raceways', 'Acoustic fluted wall paneling with brass inlays', 'Perimeter warm cove illumination (3000K)'],
        materials: ['Italian Natural Marble', 'Acoustic Charcoal Felt', 'BWP Marine Core'],
        pinX: 32,
        pinY: 42
      },
      {
        id: 'r2',
        name: 'Island Gourmet Kitchen & Pantry',
        tag: 'Precision Millwork',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
        specs: ['Seamless mitred waterfall quartz island', 'Blum soft-close pull-outs with 65,000 opening test', 'PUR zero-joint laser edge sealing on all carcasses'],
        materials: ['Premium Quartz & Onyx Stone', 'Century IS:710 Marine Ply', 'Blum Servo-Drive'],
        pinX: 72,
        pinY: 30
      },
      {
        id: 'r3',
        name: 'Master Sanctuary & Dressing Suite',
        tag: 'Private Quarters',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
        specs: ['Floor-to-ceiling tinted bronze glass wardrobes', 'Concealed magnetic proximity LED vertical channels', 'Hydraulic bed platform with acoustic bouclé headboard'],
        materials: ['Saint-Gobain Fluted Glass', 'Anodized Champagne Aluminum', 'Belgian Bouclé'],
        pinX: 78,
        pinY: 74
      },
      {
        id: 'r4',
        name: 'Architectural Dining & Bar Nook',
        tag: 'Entertainment',
        image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80',
        specs: ['8-seater custom teakwood dining table', 'Concealed bar with touch-to-open mirrored backdrop', 'Integrated anti-glare downlights with 95+ CRI'],
        materials: ['Smoked Teakwood', 'Bronze Mirror', 'Osram Architectural LED'],
        pinX: 38,
        pinY: 78
      }
    ],
    gallery: [
      {
        id: 'g1-1',
        title: 'Grand Living Salon & Media Console',
        space: 'Living Room',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
        caption: 'Full-height acoustic charcoal louvers with backlit natural marble entertainment console.'
      },
      {
        id: 'g1-2',
        title: 'Island Gourmet Kitchen & Prep Zone',
        space: 'Kitchen',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
        caption: '18mm Premium Quartz & Onyx Stone waterfall island with under-mount stainless sink and Blum hardware.'
      },
      {
        id: 'g1-3',
        title: 'Master Bedroom & Glass Wardrobe',
        space: 'Master Suite',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
        caption: 'Floor-to-ceiling tinted bronze glass sliding wardrobe with proximity sensor vertical LEDs.'
      },
      {
        id: 'g1-4',
        title: 'Custom Teakwood Dining & Credenza',
        space: 'Dining Area',
        image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80',
        caption: 'Natural smoked teakwood dining suite paired with fluted glass credenza and concealed bar.'
      },
      {
        id: 'g1-5',
        title: 'Architectural Joinery & Louvers Detail',
        space: 'Millwork Detail',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
        caption: 'Homag CNC PUR edge-banding showing zero-joint finish and flush acoustic alignments.'
      },
      {
        id: 'g1-6',
        title: 'Entrance Foyer & Breathing Shoe Bay',
        space: 'Foyer',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
        caption: 'Concealed footwear ventilation louvers with brass inlays and smart welcome scene lighting.'
      }
    ]
  },
  {
    id: 'res-2',
    title: 'Minimalist Monolith Villa',
    subtitle: 'Multi-Level Private Villa with Structural Re-Engineering & IoT',
    community: 'Jubilee Hills, Road No. 36',
    city: 'Hyderabad',
    typology: 'Villa',
    tierName: 'Celestia Living',
    tierBadge: 'Haute Living',
    sqft: '4,800 sq.ft',
    duration: '65 Days Handover',
    scope: 'Structural Civil Demolition, Italian Marble, Lutron Automated Drapery & Wall Paneling',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    narrative: 'An uncompromising architectural residence featuring massive double-height bookmatched Italian Statuario marble wall panels, Lutron motorized curtains & blackout blinds, European wallpapers, and solid smoked oak joinery.',
    verifiedSpecs: [
      { label: 'Turnaround', value: '65 Calendar Days' },
      { label: 'Tolerance', value: '0.1mm Homag CNC' },
      { label: 'Structural Warranty', value: '12-Year Certified' },
      { label: 'Quality Audit', value: '140-Point Zero-Snag' }
    ],
    materialDNA: [
      { name: 'Imported Statuario', origin: 'Carrara Bookmatched', color: '#f0ede6' },
      { name: 'Smoked Oak Veneer', origin: 'Natural 5-Coat PU', color: '#3d2e24' },
      { name: 'Lutron IoT Keypads', origin: 'Palladiom Glass', color: '#171923' },
      { name: 'Aviation Aluminum Trim', origin: 'Anodized Obsidian', color: '#2d3748' }
    ],
    rooms: [
      {
        id: 'r1',
        name: 'Monolithic Great Room & Salon',
        tag: 'Architectural Anchor',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
        specs: ['18-foot double height bookmatched Statuario wall', 'Concealed motorized floor-to-ceiling drapery', 'Integrated floor recessed low-glare accent lighting'],
        materials: ['Italian Statuario Marble', 'Smoked European Oak', 'Lutron Controls'],
        pinX: 28,
        pinY: 38
      },
      {
        id: 'r2',
        name: 'Chef’s Gourmet Island & Wine Display',
        tag: 'Culinary Masterpiece',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=80',
        specs: ['Calacatta Gold mitred island with embedded induction', 'Climate-controlled integrated wine display behind tinted glass', 'Blum Servo-Drive electric touch-to-open cabinets'],
        materials: ['Calacatta Gold Marble', 'Blum Servo-Drive', 'Matte Black Aluminum'],
        pinX: 74,
        pinY: 34
      },
      {
        id: 'r3',
        name: 'Skyline Penthouse Master Chamber',
        tag: 'Ultra-Luxury Suite',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1400&q=80',
        specs: ['Walk-in dressing sanctuary with jewelry island console', 'Smart motorized sheer curtains synced to circadian rhythm', 'Acoustic micro-cement headboard feature'],
        materials: ['Smoked Oak Veneer', 'Velvet Trays', 'Micro-Cement'],
        pinX: 70,
        pinY: 76
      },
      {
        id: 'r4',
        name: 'Private Acoustic Dolby Theater',
        tag: 'Cinema Lounge',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
        specs: ['7.2.4 Dolby Atmos in-wall architectural speakers', 'High-density Rockwool acoustic fabric wall panels', 'One-touch Lutron Cinema scene dimming'],
        materials: ['Acoustic Rockwool', 'Sound-Transparent Fabric', 'Lutron IoT'],
        pinX: 30,
        pinY: 76
      }
    ],
    gallery: [
      {
        id: 'g2-1',
        title: 'Double-Height Bookmatched Marble Great Room',
        space: 'Great Room',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
        caption: '18-foot imported Italian Statuario bookmatched marble feature wall with low-voltage track lighting.'
      },
      {
        id: 'g2-2',
        title: 'Chef Gourmet Island & Cellar Nook',
        space: 'Gourmet Kitchen',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=80',
        caption: 'Mitred Calacatta island with touch-to-open Blum Servo-Drive overheads and temperature-controlled cellar.'
      },
      {
        id: 'g2-3',
        title: 'Master Chamber & Dressing Island',
        space: 'Master Suite',
        image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef2?auto=format&fit=crop&w=1400&q=80',
        caption: 'Walk-in wardrobe sanctuary with smoked oak veneers, velvet-lined accessory drawers, and LED sensors.'
      },
      {
        id: 'g2-4',
        title: 'Acoustic Dolby Atmos Cinema Lounge',
        space: 'Cinema Lounge',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
        caption: 'Fabric-wrapped acoustic panels with recessed ceiling surround channels and one-touch dimming.'
      },
      {
        id: 'g2-5',
        title: 'Architectural Staircase & Glass Balustrade',
        space: 'Stairwell',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
        caption: 'Cantilevered oak steps with under-tread concealed linear glow and 12mm laminated glass.'
      },
      {
        id: 'g2-6',
        title: 'Sunset Terrace & Outdoor Lounge',
        space: 'Terrace',
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
        caption: 'Weatherproof exterior millwork and flush composite deck integrating landscape cove lights.'
      }
    ]
  },
  {
    id: 'res-3',
    title: 'The Fluted Symphony Suite',
    subtitle: 'Curated 4BHK Apartment with Bronze Glass Closets & Cove Lighting',
    community: 'Financial District, Gachibowli',
    city: 'Hyderabad',
    typology: 'Apartment',
    tierName: 'Signature Spaces',
    tierBadge: 'Contemporary Living',
    sqft: '2,900 sq.ft',
    duration: '52 Days Handover',
    scope: 'Bespoke Millwork, Full False Ceiling, Curtains, Blinds & Master Walk-in Closet',
    coverImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
    narrative: 'A sophisticated family residence in the heart of Gachibowli. Characterized by warm 3000K recessed indirect illumination, custom fluted glass partitions, motorized sheer curtains & zebra blinds, imported textured wallpapers, and seamless BWP modular wardrobes.',
    verifiedSpecs: [
      { label: 'Turnaround', value: '52 Calendar Days' },
      { label: 'Tolerance', value: '0.1mm Homag CNC' },
      { label: 'Structural Warranty', value: '10-Year Certified' },
      { label: 'Quality Audit', value: '140-Point Zero-Snag' }
    ],
    materialDNA: [
      { name: 'Bronze Fluted Glass', origin: 'Saint-Gobain 8mm', color: '#594939' },
      { name: 'Silk Supermatte Acrylic', origin: 'Merino 1.2mm', color: '#1f242d' },
      { name: 'Calibrated Marine Ply', origin: 'Century IS:710', color: '#8b5a2b' },
      { name: 'Brushed Brass PVD', origin: 'Anodized Profile', color: '#b8976b' }
    ],
    rooms: [
      {
        id: 'r1',
        name: 'Executive Lounge & Balcony Salon',
        tag: 'Skyline View',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
        specs: ['Large-format seamless marble flooring', 'Frameless bronze glass sliding partition', 'Warm perimeter false ceiling cove'],
        materials: ['Italian Bottochino', 'Saint-Gobain Glass', 'Gyproc System'],
        pinX: 30,
        pinY: 40
      },
      {
        id: 'r2',
        name: 'Parallel Ergonomic Chef Kitchen',
        tag: 'Culinary Efficiency',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
        specs: ['Parallel workspace with Golden Triangle ergonomics', 'Pantry tall unit with internal stainless steel pull-outs', 'Anti-stain quartz countertop'],
        materials: ['Premium Quartz & Onyx Stone', 'BWP Marine Ply', 'Hafele Hardware'],
        pinX: 75,
        pinY: 32
      },
      {
        id: 'r3',
        name: 'The Fluted Glass Master Suite',
        tag: 'Restorative Rest',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
        specs: ['Floor-to-ceiling walk-in closet with internal lighting', 'Padded upholstered acoustic headboard with side ledges', 'Vanity station with fog-free LED smart mirror'],
        materials: ['Fluted Glass', 'Merino Silk Acrylic', 'Belgian Velvet'],
        pinX: 72,
        pinY: 75
      }
    ],
    gallery: [
      {
        id: 'g3-1',
        title: 'Executive Lounge & Panoramic View',
        space: 'Living Lounge',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
        caption: 'Polished Bottochino marble flooring framed with bronze glass partitions overlooking Gachibowli.'
      },
      {
        id: 'g3-2',
        title: 'Parallel Ergonomic Modular Kitchen',
        space: 'Kitchen',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
        caption: 'BWP marine grade carcasses paired with anti-scratch matte acrylic and built-in tandem carousels.'
      },
      {
        id: 'g3-3',
        title: 'Fluted Glass Master Sliding Closets',
        space: 'Master Suite',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80',
        caption: 'Tinted acoustic fluted glass shutters featuring silent air-dampened soft closing mechanisms.'
      },
      {
        id: 'g3-4',
        title: 'Dressing Vanity & Smart Sensor Mirror',
        space: 'Dressing Area',
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=80',
        caption: 'Backlit defogging cosmetic mirror with velvet-lined jewelry drawers and brass metal edge pulls.'
      },
      {
        id: 'g3-5',
        title: 'Balcony Sunset Deck & Coffee Nook',
        space: 'Balcony',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=80',
        caption: 'Composite wood deck tile flooring with weather-resistant outdoor credenza and warm plant lights.'
      }
    ]
  },
  {
    id: 'res-4',
    title: 'Urban Scandinavian Haven',
    subtitle: 'High-Efficiency Turnkey 2BHK Rental & Primary Home',
    community: 'Whitefield, Bangalore',
    city: 'Bangalore',
    typology: 'Apartment',
    tierName: 'Essential Living',
    tierBadge: 'Smart Value',
    sqft: '1,450 sq.ft',
    duration: '38 Days Handover',
    scope: 'Precision Factory Modular Kitchen, Wardrobes, Curtains & False Ceiling',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
    narrative: 'Delivered in a record 38 days with 100% factory pre-fabrication in our Homag CNC facility. Includes custom window blinds, accent wallpapers, and guaranteed 10-year durability for modern urban living.',
    verifiedSpecs: [
      { label: 'Turnaround', value: '38 Calendar Days' },
      { label: 'Tolerance', value: '0.1mm Homag CNC' },
      { label: 'Structural Warranty', value: '10-Year Certified' },
      { label: 'Quality Audit', value: '140-Point Zero-Snag' }
    ],
    materialDNA: [
      { name: 'BWP Marine Plywood', origin: 'Century Calibrated', color: '#8b5a2b' },
      { name: 'Merino Anti-Scratch', origin: 'High-Gloss Acrylic', color: '#e2e8f0' },
      { name: 'Hettich Soft-Close', origin: 'ISO Certified', color: '#718096' },
      { name: 'Jet Black Granite', origin: 'Pre-Polished Bevel', color: '#1a202c' }
    ],
    rooms: [
      {
        id: 'r1',
        name: 'Modular High-Efficiency Kitchen',
        tag: 'Optimized Workflow',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
        specs: ['100% boiling waterproof BWP marine carcasses', 'Hettich soft-close tandem drawers', 'Jet black granite with under-mount SS sink'],
        materials: ['Century BWP Ply', 'Merino Acrylic', 'Hettich Hinges'],
        pinX: 70,
        pinY: 35
      },
      {
        id: 'r2',
        name: 'Minimalist Scandinavian Salon',
        tag: 'Airy Living',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
        specs: ['Floating TV credenza with oak laminate accent', 'Minimalist warm false ceiling with recessed spots', 'Clean neutral paint palette with washable finish'],
        materials: ['Natural Oak Laminate', 'Asian Paints Royale', 'LED Downlights'],
        pinX: 30,
        pinY: 45
      },
      {
        id: 'r3',
        name: 'Master Suite with Loft Storage',
        tag: 'Maximized Capacity',
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=80',
        specs: ['Full-height 9-foot wardrobes with concealed lofts', 'Integrated study ledge and bookshelf', 'Smooth sliding mechanism with anti-jump track'],
        materials: ['Merino Silk Laminate', 'Hettich Slider', 'Soft Warm LEDs'],
        pinX: 72,
        pinY: 76
      }
    ],
    gallery: [
      {
        id: 'g4-1',
        title: 'Modular High-Efficiency BWP Kitchen',
        space: 'Kitchen',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80',
        caption: 'Pre-machined plumbing ports, SS 304 baskets, and pre-polished jet black granite counters.'
      },
      {
        id: 'g4-2',
        title: 'Minimalist Scandinavian Living Lounge',
        space: 'Living Room',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
        caption: 'Floating Scandinavian media unit in bleached oak laminate paired with warm 3000K downlights.'
      },
      {
        id: 'g4-3',
        title: 'Full Height Loft Sliding Wardrobes',
        space: 'Master Bedroom',
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=80',
        caption: 'Anti-scratch silk matte acrylic shutters offering floor-to-ceiling dust-free vertical storage.'
      },
      {
        id: 'g4-4',
        title: 'Integrated Workstation & Book Ledge',
        space: 'Study Nook',
        image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1400&q=80',
        caption: 'Ergonomic floating work desk with wire management and warm under-shelf task light.'
      },
      {
        id: 'g4-5',
        title: 'Compact Scandinavian Dining Corner',
        space: 'Dining Nook',
        image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80',
        caption: 'Space-conscious 4-seater dining solution with mirror paneling to amplify natural daylight.'
      }
    ]
  },
  {
    id: 'res-5',
    title: 'Opulent Classical Villa Estate',
    subtitle: 'Bespoke Private Villa with Solid Teak Carvings & Onyx Bar',
    community: 'Gandipet Lake Front, Hyderabad',
    city: 'Hyderabad',
    typology: 'Villa',
    tierName: 'Celestia Living',
    tierBadge: 'Bespoke Estate',
    sqft: '5,600 sq.ft',
    duration: '70 Days Handover',
    scope: 'Full Villa Turnkey Architectural Millwork, Civil Marble & Landscaping',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    narrative: 'A grand lake-facing estate in Gandipet blending European classical architecture with cutting-edge precision joinery. Features backlit Iranian onyx bar consoles and handcrafted solid teakwood paneling.',
    verifiedSpecs: [
      { label: 'Turnaround', value: '70 Calendar Days' },
      { label: 'Tolerance', value: '0.1mm Homag CNC' },
      { label: 'Structural Warranty', value: '12-Year Certified' },
      { label: 'Quality Audit', value: '140-Point Zero-Snag' }
    ],
    materialDNA: [
      { name: 'Backlit Iranian Onyx', origin: 'Translucent Natural', color: '#d4af37' },
      { name: 'Burma Teakwood', origin: '100% Solid Seasoned', color: '#654321' },
      { name: 'Italian Botticino', origin: 'High Gloss Diamond', color: '#ded7c5' },
      { name: 'PVD Antique Brass', origin: 'Hand-Finished Trim', color: '#997a3d' }
    ],
    rooms: [
      {
        id: 'r1',
        name: 'Grand Classical Salon & Salon',
        tag: 'Palatial Curation',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
        specs: ['12-foot high ceiling with ornate plaster molding', 'Bespoke solid Burma teakwood media paneling', 'Hand-polished Italian marble with perimeter brass inlay'],
        materials: ['Solid Teakwood', 'Italian Marble', 'Brass Trim'],
        pinX: 30,
        pinY: 42
      },
      {
        id: 'r2',
        name: 'Translucent Backlit Onyx Bar Lounge',
        tag: 'Evening Sanctuary',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
        specs: ['Diffused 2700K backlight behind translucent onyx slab', 'Tempered fluted glass stemware cabinet', 'Integrated silent ice maker & wine refrigeration'],
        materials: ['Natural Onyx', 'Tempered Glass', 'Concealed LEDs'],
        pinX: 74,
        pinY: 74
      }
    ],
    gallery: [
      {
        id: 'g5-1',
        title: 'Grand Classical Salon & Plaster Moldings',
        space: 'Grand Salon',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
        caption: 'Handcrafted Burma teak media console set against Italian Botticino marble with brass inlays.'
      },
      {
        id: 'g5-2',
        title: 'Translucent Backlit Onyx Bar Credenza',
        space: 'Bar Lounge',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
        caption: 'Natural Iranian golden onyx slab illuminated with 2700K high-CRI diffused LED matrices.'
      },
      {
        id: 'g5-3',
        title: 'Gourmet Classical Island Kitchen',
        space: 'Gourmet Kitchen',
        image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=80',
        caption: '5-coat polyurethane satin lacquer cabinetry with antique brass handles and natural stone waterfall.'
      },
      {
        id: 'g5-4',
        title: 'Palatial Lakeview Master Sanctuary',
        space: 'Master Suite',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
        caption: 'Full-bleed lakefront glazing paired with custom upholstered velvet headboard and automated sheer tracks.'
      },
      {
        id: 'g5-5',
        title: 'Formal 12-Seater Dining Pavilion',
        space: 'Dining Hall',
        image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=80',
        caption: 'Solid single-slab seasoned teakwood table accompanied by custom crystal chandelier.'
      }
    ]
  }
];

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenConsultation }) => {
  const { navigate } = useRouter();

  // Selected residence & active room inside walkthrough
  const [selectedResidenceIndex, setSelectedResidenceIndex] = useState<number>(0);
  const [activeRoomIndex, setActiveRoomIndex] = useState<number>(0);

  const currentResidence = RESIDENCE_PROJECTS[selectedResidenceIndex];
  const currentRoom = currentResidence.rooms[activeRoomIndex] || currentResidence.rooms[0];

  const handleSelectResidence = (index: number) => {
    setSelectedResidenceIndex(index);
    setActiveRoomIndex(0);
    window.scrollTo({ top: 340, behavior: 'smooth' });
  };

  const handleNextRoom = () => {
    setActiveRoomIndex((prev) => (prev + 1) % currentResidence.rooms.length);
  };

  const handlePrevRoom = () => {
    setActiveRoomIndex((prev) => (prev - 1 + currentResidence.rooms.length) % currentResidence.rooms.length);
  };

  return (
    <div className="pt-24 pb-28 bg-[#faf8f5] text-[#1a1a1a] selection:bg-[#c5a880]/30 selection:text-black min-h-screen">
      
      {/* Editorial Header */}
      <section className="py-16 md:py-20 relative overflow-hidden text-center bg-white border-b border-[#e8e2d9] shadow-xs">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c5a880]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5a880]/15 border border-[#c5a880]/40 text-[#8c6b38] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[#8c6b38]" />
            <span>Interactive Spatial Portfolio & Residence Monograph</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
            Curated Living Works.{' '}
            <span className="gold-gradient-text italic block sm:inline">Room-by-Room Spatial Tour.</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg font-normal leading-relaxed max-w-3xl mx-auto">
            Experience real completed homes through our interactive spatial blueprint radar. Step into living salons, culinary islands, and master sanctuaries with verified factory execution data.
          </p>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="space-y-10 animate-in fade-in duration-500">
            
          {/* Horizontal Landmark Residence Switcher Filmstrip */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#8c6b38] px-1 font-bold">
              <span>Select Landmark Residence:</span>
              <span className="text-gray-500 font-sans font-medium">0{selectedResidenceIndex + 1} of 0{RESIDENCE_PROJECTS.length} Landmarks</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {RESIDENCE_PROJECTS.map((res, idx) => {
                const isSelected = selectedResidenceIndex === idx;
                return (
                  <div
                    key={res.id}
                    onClick={() => handleSelectResidence(idx)}
                    className={`relative h-28 rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 group select-none ${
                      isSelected
                        ? 'border-[#8c6b38] ring-2 ring-[#8c6b38]/40 shadow-xl shadow-[#8c6b38]/20 scale-[1.02]'
                        : 'border-[#e8e2d9] hover:border-[#8c6b38]/50 opacity-85 hover:opacity-100 shadow-xs'
                    }`}
                  >
                    <img
                      src={res.coverImage}
                      alt={res.title}
                      className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-95 group-hover:scale-105 transition-all"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                    
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        isSelected ? 'bg-[#8c6b38] text-white shadow-sm' : 'bg-black/70 text-gray-200'
                      }`}>
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-xs font-bold text-white truncate leading-snug">{res.title}</h4>
                      <p className="text-[10px] text-gray-300 truncate">{res.community.split(',')[0]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Residence Headline Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#e8e2d9] pb-6 pt-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-[#c5a880]/20 text-[#8c6b38] font-bold border border-[#c5a880]/40">
                  {currentResidence.tierBadge}
                </span>
                <span className="text-gray-600 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#8c6b38]" />
                  {currentResidence.community}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 font-medium">{currentResidence.sqft}</span>
                <span className="text-gray-400">•</span>
                <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  {currentResidence.duration}
                </span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111]">
                {currentResidence.title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base font-normal max-w-3xl leading-relaxed">
                {currentResidence.narrative}
              </p>
            </div>

            {/* Room Prev/Next Controls */}
            <div className="flex items-center gap-3 self-start lg:self-auto bg-white p-2 rounded-2xl border border-[#e8e2d9] shadow-sm">
              <div className="text-right px-2 hidden sm:block">
                <div className="text-[10px] uppercase font-mono text-gray-500 font-bold">Active Space:</div>
                <div className="text-xs font-bold text-[#8c6b38]">0{activeRoomIndex + 1} of 0{currentResidence.rooms.length}</div>
              </div>
              <button
                onClick={handlePrevRoom}
                className="p-3 rounded-xl bg-gray-100 hover:bg-[#8c6b38] hover:text-white text-gray-700 transition-colors cursor-pointer border border-gray-200"
                title="Previous Space"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextRoom}
                className="p-3 rounded-xl bg-gray-100 hover:bg-[#8c6b38] hover:text-white text-gray-700 transition-colors cursor-pointer border border-gray-200"
                title="Next Space"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SPATIAL NAVIGATION TABS */}
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {currentResidence.rooms.map((room, rIdx) => {
              const isActive = activeRoomIndex === rIdx;
              return (
                <button
                  key={room.id}
                  onClick={() => setActiveRoomIndex(rIdx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#c5a880] to-[#b8976b] text-black border-[#8c6b38] shadow-md scale-105'
                      : 'bg-white text-gray-700 hover:text-black border-[#e8e2d9] hover:bg-gray-50 shadow-xs'
                  }`}
                >
                  <span className="font-mono text-[10px]">0{rIdx + 1}</span>
                  <span>{room.name}</span>
                </button>
              );
            })}
          </div>

          {/* MAIN SPATIAL THEATER: STAGE (8 COLS) + CAD RADAR & DOSSIER (4 COLS) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left: Spatial High-Resolution Stage (8 Cols) */}
            <div className="lg:col-span-8 relative h-[440px] sm:h-[520px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group bg-black">
              <img
                src={currentRoom.image}
                alt={currentRoom.name}
                className="w-full h-full object-cover filter brightness-[0.9] transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />

              {/* Floating Room Tag Pill */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                <span className="px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-[#fae19c] text-xs font-bold uppercase tracking-wider border border-white/20">
                  {currentRoom.tag}
                </span>
                <span className="hidden sm:inline px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-[11px] text-gray-200 border border-white/10 font-mono">
                  Space 0{activeRoomIndex + 1} // {currentResidence.title}
                </span>
              </div>

              {/* Bottom Overlay: Room Title & In-Space Specifications */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3 text-white">
                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-md">
                    {currentRoom.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {currentRoom.materials.map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-[11px] text-[#fae19c] font-medium"
                      >
                        ✦ {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Room Key Engineering Bullet Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-white/20 text-xs text-gray-200">
                  {currentRoom.specs.map((sp, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-1.5 bg-black/70 p-2 rounded-xl border border-white/15">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[11px] leading-snug">{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Architectural CAD Floor Plan Radar & Execution Proof (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              
              {/* CAD 2D FLOOR PLAN RADAR */}
              <div className="bg-[#081326] p-6 rounded-3xl border border-cyan-500/30 relative overflow-hidden font-mono shadow-xl">
                {/* Grid Lines */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #00ffff 1px, transparent 1px), linear-gradient(to bottom, #00ffff 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Blueprint Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-cyan-400/30 pb-3 mb-3">
                  <div className="text-[10px] text-cyan-400 tracking-widest uppercase flex items-center gap-1.5 font-bold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>CAD Spatial Radar Map</span>
                  </div>
                  <span className="text-[10px] text-cyan-300/80">SCALE 1:50</span>
                </div>

                {/* Floor Plan Schematic Box with Clickable Room Pins */}
                <div className="relative z-10 h-48 rounded-2xl bg-cyan-950/40 border border-cyan-400/40 p-3 overflow-hidden flex flex-col justify-between">
                  {/* Simulated Architectural Floor Walls */}
                  <div className="absolute inset-4 border border-cyan-400/40 border-dashed rounded-lg pointer-events-none">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px border-r border-cyan-400/30 border-dashed" />
                    <div className="absolute top-1/2 left-0 right-0 h-px border-b border-cyan-400/30 border-dashed" />
                  </div>

                  {/* Pulsing Radar Pins for Each Room */}
                  {currentResidence.rooms.map((room, rIdx) => {
                    const isSelectedPin = activeRoomIndex === rIdx;
                    return (
                      <button
                        key={room.id}
                        onClick={() => setActiveRoomIndex(rIdx)}
                        style={{ left: `${room.pinX}%`, top: `${room.pinY}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group/pin transition-all ${
                          isSelectedPin ? 'scale-125 z-30' : 'hover:scale-110'
                        }`}
                        title={room.name}
                      >
                        <div className={`relative w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          isSelectedPin
                            ? 'bg-[#c5a880] text-[#090a0f] shadow-[0_0_15px_#c5a880]'
                            : 'bg-cyan-900 text-cyan-300 border border-cyan-400/60 hover:bg-cyan-700'
                        }`}>
                          {isSelectedPin && (
                            <span className="w-full h-full rounded-full bg-[#c5a880] animate-ping absolute inset-0 opacity-75" />
                          )}
                          <span className="relative z-10">0{rIdx + 1}</span>
                        </div>
                      </button>
                    );
                  })}

                  <div className="relative z-10 text-[9px] text-cyan-300/80 self-start">
                    BLDR: {currentResidence.community.split(',')[0]}
                  </div>
                  <div className="relative z-10 text-[9px] text-cyan-400 self-end font-bold">
                    CLICK RADAR PIN TO SWITCH ROOM
                  </div>
                </div>

                {/* Active Pin Details */}
                <div className="relative z-10 mt-3 pt-2 border-t border-cyan-400/30 text-xs text-cyan-200 flex items-center justify-between">
                  <span className="text-[11px]">Pin 0{activeRoomIndex + 1}: {currentRoom.name}</span>
                  <span className="text-[#c5a880] font-bold text-[10px] uppercase">Live Active</span>
                </div>
              </div>

              {/* VERIFIED EXECUTION DOSSIER */}
              <div className="bg-white p-6 rounded-3xl border border-[#e8e2d9] space-y-4 shadow-xl flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] uppercase font-mono tracking-widest text-[#8c6b38] font-bold mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verified Turnkey Execution Proof</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {currentResidence.verifiedSpecs.map((v, vIdx) => (
                      <div key={vIdx} className="p-2.5 rounded-xl bg-[#f9f8f6] border border-[#e8e2d9] text-xs">
                        <div className="text-gray-500 text-[10px] uppercase font-mono font-medium">{v.label}</div>
                        <div className="font-bold text-[#111111] mt-0.5">{v.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Material DNA Swatches for this residence */}
                  <div className="mt-4 pt-3 border-t border-[#e8e2d9] space-y-2">
                    <div className="text-[10px] font-mono uppercase text-gray-500 font-semibold">Specified Material DNA:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {currentResidence.materialDNA.map((mat, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-1.5 rounded-lg bg-[#f9f8f6] border border-[#e8e2d9] text-xs">
                          <span 
                            className="w-3.5 h-3.5 rounded-full border border-gray-300 shrink-0 shadow-xs" 
                            style={{ backgroundColor: mat.color }} 
                          />
                          <div className="truncate">
                            <div className="font-semibold text-gray-900 text-[11px] truncate">{mat.name}</div>
                            <div className="text-[9px] text-gray-500 truncate">{mat.origin}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 space-y-2">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#c5a880] via-[#d4ba96] to-[#b8976b] text-black font-bold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-[#c5a880]/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Inquire Similar Residence</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/918143678491?text=${encodeURIComponent(`Hi JS GALLOR team, I was reviewing ${currentResidence.title} (${currentResidence.community}) in your portfolio and would like to consult on my floor plan.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Floor Plan</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* FULL PROJECT GALLERY: ASYMMETRICAL EDITORIAL ARCHIVE (HOVER TITLE ONLY)   */}
          {/* ========================================================================= */}
          <div className="mt-16 pt-10 border-t border-[#e8e2d9] space-y-6">
            <div className="flex items-center justify-between border-b border-[#e8e2d9] pb-4">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#111111]">
                Full Project Gallery:{' '}
                <span className="gold-gradient-text italic">{currentResidence.title}</span>
              </h3>
              <span className="text-xs font-mono text-[#8c6b38] tracking-wider uppercase font-bold">
                {currentResidence.gallery.length} Plates
              </span>
            </div>

            {/* Asymmetrical Architectural Gallery Grid (No regular identical boxes) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {currentResidence.gallery.map((item, gIdx) => {
                let spanClass = 'md:col-span-4 h-[360px]';
                if (currentResidence.gallery.length === 6) {
                  if (gIdx === 0) spanClass = 'md:col-span-8 h-[460px]';
                  else if (gIdx === 1) spanClass = 'md:col-span-4 h-[460px]';
                  else if (gIdx === 2) spanClass = 'md:col-span-4 h-[350px]';
                  else if (gIdx === 3) spanClass = 'md:col-span-4 h-[350px]';
                  else if (gIdx === 4) spanClass = 'md:col-span-4 h-[350px]';
                  else if (gIdx === 5) spanClass = 'md:col-span-12 h-[380px]';
                } else if (currentResidence.gallery.length === 5) {
                  if (gIdx === 0) spanClass = 'md:col-span-7 h-[440px]';
                  else if (gIdx === 1) spanClass = 'md:col-span-5 h-[440px]';
                  else if (gIdx === 2) spanClass = 'md:col-span-4 h-[350px]';
                  else if (gIdx === 3) spanClass = 'md:col-span-4 h-[350px]';
                  else if (gIdx === 4) spanClass = 'md:col-span-4 h-[350px]';
                }

                return (
                  <div
                    key={item.id}
                    className={`group relative rounded-3xl overflow-hidden border border-[#e8e2d9] hover:border-[#8c6b38] shadow-lg hover:shadow-2xl transition-all duration-700 bg-black select-none ${spanClass}`}
                  >
                    {/* Pure High-Res Photo (Zero overlay text by default) */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-[0.9] group-hover:brightness-105 group-hover:scale-105 transition-all duration-700"
                    />

                    {/* ONLY Show Title & Space on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#fae19c] font-bold">
                        {item.space}
                      </span>
                      <h4 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mt-1 leading-snug drop-shadow-md">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
