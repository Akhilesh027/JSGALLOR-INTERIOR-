import { 
  TierPackage, 
  RoomOption, 
  PortfolioItem, 
  TestimonialItem, 
  ProcessStep,
  InteriorService,
  ExperienceCenter,
  FaqItem
} from '../types/interior';

export const TIERS_DATA: TierPackage[] = [
  {
    id: 'affordable',
    name: 'Essential Living',
    tagline: 'Factory-Crafted Smart Living with Precision Turnkey Handover',
    badge: 'Smart Value • Factory Modular',
    tierDescriptor: 'High-Efficiency Modular Turnkey',
    scopeHighlight: 'Precision Factory Modular & Functional Storage',
    priceRange: 'Value-Engineered Turnkey',
    startingPrice: 450000,
    deliveryDays: 40,
    warrantyYears: 10,
    highlightColor: '#2563EB',
    badgeBg: 'bg-blue-600/10 text-blue-700 border-blue-200',
    summary: 'Direct factory-manufactured modular interiors with advanced machinery precision, 100% moisture-resistant BWP marine grade plywood, custom window blinds, accent wallpapers, wall paneling, and seamless 40-day installation.',
    idealFor: '1BHK & 2BHK rental assets, first-time home buyers, and smart budget-conscious homeowners.',
    materials: {
      core: 'IS:710 Grade Boiling Waterproof (BWP) Plywood & High Density MDF',
      finish: '0.8mm - 1mm Anti-Scratch High-Gloss & Matte Acrylic Laminates (Merino / Century)',
      hardware: 'Hettich / Ebco Soft-Close Precision Hinges & Telescopic Channels',
      countertop: 'Jet Black Granite / Premium Pre-Polished Engineered Quartz'
    },
    inclusions: [
      'Modular L-Shape or Straight Kitchen with SS 304 baskets',
      'Floor-to-Ceiling Master Wardrobes with loft storage',
      'Minimalist TV Entertainment Unit & floating console with wall paneling',
      'Custom window blinds (roller/zebra) & textured accent wallpapers',
      'Basic designer false ceiling with warm white LED cob lights',
      'Anti-termite and borer protection certified for 10 years',
      'Dedicated JS GALLOR site supervisor & daily WhatsApp progress logs'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    popular: false
  },
  {
    id: 'mid_luxury',
    name: 'Signature Spaces',
    tagline: 'Contemporary Elegance, Fluted Textures & Architectural Lighting',
    badge: 'Most Popular Choice',
    tierDescriptor: 'Curated Designer Living',
    scopeHighlight: 'Fluted Textures, Cove Lighting & Engineered Quartz',
    priceRange: 'Contemporary Luxury Edition',
    startingPrice: 950000,
    deliveryDays: 50,
    warrantyYears: 10,
    highlightColor: '#D97706',
    badgeBg: 'bg-amber-500/10 text-amber-700 border-amber-300',
    summary: 'A curated balance of designer sophistication and functional luxury. Features cove magnetic track lighting, acoustic fluted charcoal wall panels, imported luxury wallpapers, custom sheer curtains & blinds, and premium quartz finishes.',
    idealFor: '3BHK & 4BHK gated community apartments (e.g. My Home, Aparna, Rajapushpa, Prestige).',
    materials: {
      core: 'Calibrated Marine Grade BWP Plywood + High Density Moisture Resistant (HDMR)',
      finish: '1.2mm Acrylic / Anti-Fingerprint Silk Supermatte & PU Polish Accents',
      hardware: 'Hafele Soft-Close Tandem Boxes, Hydraulic Flap Stays & Corner Carousels',
      countertop: 'Premium Quartz & Onyx Stone 18mm with Beveled Edge'
    },
    inclusions: [
      'Parallel or Island Modular Kitchen with built-in pantry tall unit',
      'Master suite walk-in wardrobe with tinted fluted glass sliding shutters & warm LED sensors',
      'Living room acoustic fluted wall paneling with back-lit floating stone marble TV console',
      'Floor-to-ceiling motorized curtains, designer sheer blinds & textured wallpapers',
      'Full home designer false ceiling with magnetic track & ambient perimeter cove lighting',
      'Custom upholstered master bed with hydraulic lift-up storage',
      'Designer bar cabinet / crockery console with brass metal frame highlights'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    popular: true
  },
  {
    id: 'bespoke_luxury',
    name: 'Celestia Living',
    tagline: 'Boutique Architectural Craft, Natural Stone, Teak Veneer & Automation',
    badge: 'Ultra-Luxury & Bespoke',
    tierDescriptor: 'Haute Architectural Living',
    scopeHighlight: 'Civil Re-Engineering, Italian Marble & Full IoT Automation',
    priceRange: 'Custom Architectural Commission',
    startingPrice: 2200000,
    deliveryDays: 65,
    warrantyYears: 12,
    highlightColor: '#0F172A',
    badgeBg: 'bg-stone-900 text-amber-300 border-amber-500/40',
    summary: 'Inspired by boutique design ateliers (Studio Origin aesthetic). Complete structural re-engineering, Italian Statuario marble bookmatched slabs, natural smoked teak veneers, Lutron automated drapery & blinds, bespoke acoustic wall paneling, and integrated smart home automation.',
    idealFor: 'Luxury duplexes, penthouses, bespoke private villas (Jubilee Hills, Kokapet, Financial District).',
    materials: {
      core: 'Imported Birch Plywood, Solid Teakwood & Aviation-Grade Aluminium Profiles',
      finish: 'Natural Smoked Oak / Teak Veneer with 5-Coat PU Satin Polish & Fluted Lacquer',
      hardware: 'Blum Aventos Servo-Drive (Electric Touch-to-Open) & Concealed Sugatsune Pivots',
      countertop: 'Imported Italian Statuario / Onyx Backlit Quartz with Waterfall Mitred Edges'
    },
    inclusions: [
      'Complete civil layout modification, dry wall partition & pocket door installations',
      'Italian Statuario bookmatched marble & natural smoked veneer architectural wall paneling',
      'Full home Lutron / Tuya IoT automation (voice, ambient mood scenes, motorized curtains & blinds)',
      'Floor-to-ceiling motorized blackout curtains, sheer drapery & imported European wallpapers',
      'Floor-to-ceiling rimless flush doors with magnetic mortise locks',
      'Handcrafted bespoke sofa, marble dining table & custom acoustic theater room',
      'Landscape balcony terrace with vertical green wall & weather-resistant deck wood'
    ],
    sampleImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    popular: false
  }
];

export const SERVICES_DATA: InteriorService[] = [
  {
    id: 'modular-kitchens',
    title: 'Precision Modular Kitchens',
    subtitle: 'Ergonomic Golden Work Triangle & Advanced Soft-Close Mechanisms',
    description: 'Custom engineered kitchens tailored to Indian culinary lifestyles with boiling-waterproof BWP carcasses, heat-resistant quartz countertops, and Blum/Hafele hardware.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    icon: 'ChefHat',
    highlights: [
      'Parallel, Island, L-Shape & U-Shape Configurations',
      'Soft-close tandem drawers rated for 65,000 opening cycles',
      'Concealed pantry tall-units & pull-out spice organizers',
      'Anti-bacterial Premium Quartz & Onyx Stone & seamless under-mount sinks'
    ],
    capabilities: ['3D Ergonomic Simulation', 'Factory Pre-Drilled Plumbing Ports', 'Zero-Joint PUR Edge-Banding'],
    idealFor: 'Villas, 2BHK/3BHK Apartments & Luxury Penthouses'
  },
  {
    id: 'living-dining',
    title: 'Living & Dining Lounges',
    subtitle: 'Acoustic Fluted Wall Panels, Luxury Wallpapers, Curtains & Stone TV Consoles',
    description: 'The social soul of your home. We craft focal media consoles with backlit Italian stone, acoustic charcoal wall panels, imported European wallpapers, designer sheer curtains, motorized blinds, mood lighting, and bespoke bar displays.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    icon: 'Sofa',
    highlights: [
      'Floating marble-clad entertainment consoles with hidden cable channels',
      'Acoustic fluted charcoal wall panels, wallpapers & bronze metallic inlays',
      'Floor-to-ceiling motorized curtains, sheer drapes & motorized blinds',
      'Custom bar cabinets with tempered fluted glass & touch sensor lighting',
      'Designer foyer shoe consoles with concealed breathing louvers'
    ],
    capabilities: ['Concealed Wiring Architecture', 'Acoustic Wall Panels & Wallpapers', 'Curtains & Blinds Automation'],
    idealFor: 'Apartment Lounges, Duplex Salons & Formal Entertainment Areas'
  },
  {
    id: 'master-suites',
    title: 'Master & Bedroom Suites',
    subtitle: 'Floor-to-Ceiling Wardrobes & Walk-In Glass Dressing Closets',
    description: 'Private sanctuaries designed for restorative rest. Floor-to-ceiling sliding wardrobes with air-cushioned dampening, integrated sensor LEDs, and hydraulic beds.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
    icon: 'BedDouble',
    highlights: [
      'Floor-to-ceiling walk-in wardrobes with slim aluminium profiles',
      'Tinted bronze/grey fluted glass shutters with auto-dim sensor lighting',
      'Custom upholstered headboards with integrated brass reading lamps',
      'Vanity dressers with fog-free LED mirrors and velvet-lined jewelry drawers'
    ],
    capabilities: ['Full Height Loft Engineering', 'Hydraulic Lift-Up Storage', 'Moisture Proof Core'],
    idealFor: 'Master Suites, Childrens Study Rooms & Guest Suites'
  },
  {
    id: 'civil-renovations',
    title: 'Civil & Turnkey Structural Works',
    subtitle: 'End-to-End Civil Restructuring, Dry Walls & Premium Flooring',
    description: 'Beyond carpentry. We take complete turnkey responsibility for wall knockdowns, Italian marble flooring, electrical rewiring, plumbing, and micro-cement textures.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    icon: 'Hammer',
    highlights: [
      'Space-planning structural alterations & drywall partition installations',
      'Large-format Italian Statuario & Bottochino marble laying with diamond polish',
      'Concealed conduit electrical replanning with Schneider/Legrand switches',
      'Asian Paints Royale luxury emulsion, lime-wash textures & micro-cement'
    ],
    capabilities: ['Structural Engineer Approvals', 'Dust-Controlled Demolition', 'Zero Leakage Guarantee'],
    idealFor: 'Older Home Renovations, Bare Shell Handover Apartments & Villas'
  },
  {
    id: 'smart-automation',
    title: 'Smart Home Automation & IoT',
    subtitle: 'Lutron & Tuya Scene Lighting, Motorized Drapes & Acoustic Theaters',
    description: 'Effortless control of your living environment. Program welcome home scenes, motorized sheer curtains, surround audio, and smartphone-controlled climate.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    icon: 'Cpu',
    highlights: [
      'Smart touch glass switchboards compatible with Apple HomeKit & Alexa',
      'Silent motorized drapery tracks automated to sunrise and sunset schedules',
      'Dolby Atmos home theater acoustic planning with acoustic fabric walls',
      'Smart biometric access locks with video intercom integration'
    ],
    capabilities: ['Wireless / Wired IoT Protocols', 'Custom Mood Scene Curation', 'App & Voice Command'],
    idealFor: 'Luxury Penthouses, Modern Apartments & Private Villas'
  },
  {
    id: 'lighting-ceiling',
    title: 'Architectural Lighting & Ceilings',
    subtitle: 'Magnetic Track Channels, Ambient Cove & Zero-Glare Diffusers',
    description: 'Lighting defines the emotional resonance of space. We design perimeter cove lighting, recessed magnetic track lights, and warm 3000K accent luminaires.',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80',
    icon: 'Lightbulb',
    highlights: [
      'Gypsum Saint-Gobain false ceilings with fiberglass anti-crack joint tape',
      'Modular magnetic track lighting channels with movable spotlights',
      'Concealed warm white 3000K profile strip lights in 24V flicker-free drivers',
      'Architectural downlights with 95+ CRI for true natural color rendering'
    ],
    capabilities: ['Lux Level Calculations', 'Zero-Glare Honeycomb Louvers', 'Dual-Circuit Switching'],
    idealFor: 'Full Home Interiors & Commercial Workspaces'
  }
];

export const ROOM_OPTIONS: RoomOption[] = [
  {
    id: 'kitchen',
    name: 'Modular Kitchen & Pantry',
    description: 'BWP cabinets, soft-close drawers, cutlery trays, corner pull-outs & quartz top.',
    iconName: 'ChefHat',
    baseCost: {
      affordable: 165000,
      mid_luxury: 320000,
      bespoke_luxury: 680000
    },
    includedByDefault: true
  },
  {
    id: 'master_bedroom',
    name: 'Master Bedroom Suite',
    description: 'Wardrobe with lofts, dresser with LED mirror, bed back paneling & bedside consoles.',
    iconName: 'BedDouble',
    baseCost: {
      affordable: 140000,
      mid_luxury: 280000,
      bespoke_luxury: 550000
    },
    includedByDefault: true
  },
  {
    id: 'living_dining',
    name: 'Living & Dining Lounge',
    description: 'TV unit, wall panelling, shoe rack, prayer/mandir unit, and crockery partition.',
    iconName: 'Sofa',
    baseCost: {
      affordable: 110000,
      mid_luxury: 240000,
      bespoke_luxury: 520000
    },
    includedByDefault: true
  },
  {
    id: 'guest_kids_room',
    name: 'Secondary / Kids Bedroom',
    description: 'Study desk with library ledge, sliding wardrobe, and accent headboard.',
    iconName: 'Sparkles',
    baseCost: {
      affordable: 85000,
      mid_luxury: 180000,
      bespoke_luxury: 360000
    },
    includedByDefault: false
  },
  {
    id: 'false_ceiling_lighting',
    name: 'False Ceiling & Designer Lighting',
    description: 'Gypsum ceiling with anti-crack tape, magnetic track lights, profile LEDs & dimmers.',
    iconName: 'Lightbulb',
    baseCost: {
      affordable: 60000,
      mid_luxury: 145000,
      bespoke_luxury: 320000
    },
    includedByDefault: false
  },
  {
    id: 'smart_automation',
    name: 'Smart Home Automation & Security',
    description: 'Touch scene switches, smartphone curtain motors, digital door lock & mood lighting.',
    iconName: 'Cpu',
    baseCost: {
      affordable: 35000,
      mid_luxury: 95000,
      bespoke_luxury: 240000
    },
    includedByDefault: false
  },
  {
    id: 'curtains_blinds_wallpapers',
    name: 'Curtains, Blinds, Wallpapers & Wall Panels',
    description: 'Motorized blackout drapes, sheer curtains, zebra blinds, imported textured wallpapers & fluted acoustic wall panels.',
    iconName: 'Sparkles',
    baseCost: {
      affordable: 35000,
      mid_luxury: 85000,
      bespoke_luxury: 190000
    },
    includedByDefault: false
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'The Alabaster Haven - 3BHK Residence',
    category: 'Living',
    tier: 'mid_luxury',
    tierName: 'Signature Spaces',
    locality: 'Kokapet, Hyderabad',
    city: 'Hyderabad',
    sqft: '2,450 sq.ft',
    duration: '48 Days Handover',
    scope: 'Complete Turnkey 3BHK Curation',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Fluted Charcoal TV Unit', 'Magnetic Track Lights', 'Integrated Wine Rack', 'Italian Quartz Counter'],
    description: 'Designed for a young tech family at Kokapet. The focus was on an open-concept living and dining experience with seamless acoustic wall paneling and concealed storage.',
    materialsUsed: ['Premium Quartz & Onyx Stone', 'Calibrated BWP Plywood', 'Hafele Soft-Close Hardware', 'Asian Paints Royale Luxury']
  },
  {
    id: 'proj-2',
    title: 'Minimalist Monolith Villa',
    category: 'Villa',
    tier: 'bespoke_luxury',
    tierName: 'Celestia Living',
    locality: 'Jubilee Hills, Road No. 36',
    city: 'Hyderabad',
    sqft: '4,800 sq.ft',
    duration: '65 Days Handover',
    scope: 'Full Villa Civil & Smart Automation',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Statuario Marble Wall', 'Lutron IoT Lighting', 'Smoked Teak Veneer', 'Concealed Pivot Doors'],
    description: 'A bespoke multi-level villa in Jubilee Hills characterized by monolithic bookmatched Italian marble, natural smoked teak veneers, and automated scene controls.',
    materialsUsed: ['Imported Italian Statuario', 'Natural Smoked Oak Veneer', 'Blum Servo-Drive', 'Lutron Automation']
  },
  {
    id: 'proj-3',
    title: 'Urban Scandinavian 2BHK',
    category: 'Kitchen',
    tier: 'affordable',
    tierName: 'Essential Living',
    locality: 'Whitefield, Bangalore',
    city: 'Bangalore',
    sqft: '1,250 sq.ft',
    duration: '38 Days Handover',
    scope: 'High-Efficiency Modular Suite',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    features: ['BWP Modular Kitchen', 'Floor-to-Ceiling Acrylic Wardrobes', 'Floating Console', '10-Yr Warranty'],
    description: 'An optimized rental asset in Whitefield delivered on Day 38 with factory-calibrated BWP modular kitchen and acrylic wardrobes designed for tenant longevity.',
    materialsUsed: ['Century IS:710 Marine Ply', 'Merino Anti-Scratch Acrylic', 'Hettich Hinges', 'Jet Black Granite']
  },
  {
    id: 'proj-4',
    title: 'The Fluted Symphony Suite',
    category: 'Bedroom',
    tier: 'mid_luxury',
    tierName: 'Signature Spaces',
    locality: 'Financial District, Gachibowli',
    city: 'Hyderabad',
    sqft: '2,100 sq.ft',
    duration: '45 Days Handover',
    scope: 'Master Suite & Paneling Curation',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    features: ['Tinted Glass Wardrobe', 'Warm Sensor Profiles', 'Hydraulic Storage Bed', 'Acoustic Headboard'],
    description: 'A contemporary master bedroom featuring floor-to-ceiling tinted fluted glass sliding wardrobes, motion-sensor LED profiles, and a hydraulic king storage bed.',
    materialsUsed: ['Saint-Gobain Fluted Glass', 'Hafele Sliding Systems', 'BWP Plywood', 'PU Polish Accents']
  },
  {
    id: 'proj-5',
    title: 'Neo-Classical Gourmet Kitchen',
    category: 'Kitchen',
    tier: 'bespoke_luxury',
    tierName: 'Celestia Living',
    locality: 'Banjara Hills, Hyderabad',
    city: 'Hyderabad',
    sqft: '3,200 sq.ft',
    duration: '58 Days Handover',
    scope: 'Bespoke Gourmet Kitchen Suite',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
    features: ['Blum Servo-Drive Lift-ups', 'Calacatta Marble Waterfall', 'In-built Miele Appliances', 'PU Finish'],
    description: 'An island kitchen with electric touch-to-open lift units, a Calacatta marble mitred waterfall island, and custom brass mesh cabinet accents.',
    materialsUsed: ['Calacatta Gold Marble', 'Blum Servo-Drive', '5-Coat PU Satin Lacquer', 'Brass Profiles']
  },
  {
    id: 'proj-6',
    title: 'Skyline Penthouse Automation Lounge',
    category: 'Automation',
    tier: 'bespoke_luxury',
    tierName: 'Celestia Living',
    locality: 'Hitec City, Madhapur',
    city: 'Hyderabad',
    sqft: '3,900 sq.ft',
    duration: '60 Days Handover',
    scope: 'Smart Living & Acoustic Theater',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    features: ['Smart Scene Controls', 'Motorized Sheer Curtains', 'Dolby Atmos Integration', 'Brass Metal Inlays'],
    description: 'Integrated smart penthouse overlooking the Hitec City skyline with acoustic theater walls, motorized blackout drapes, and single-touch entertainment modes.',
    materialsUsed: ['Tuya IoT Ecosystem', 'Acoustic Rockwool Paneling', 'Smoked Teak Wood', 'Concealed Wiring']
  },
  {
    id: 'proj-7',
    title: 'Boutique Minimalist Dining Room',
    category: 'Living',
    tier: 'mid_luxury',
    tierName: 'Signature Spaces',
    locality: 'Indiranagar, Bangalore',
    city: 'Bangalore',
    sqft: '1,800 sq.ft',
    duration: '42 Days Handover',
    scope: 'Dining & Crockery Lounge Curation',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80',
    features: ['Custom Teak Dining Table', 'Concealed Bar Cabinet', 'Magnetic Spotlight', 'Fluted Glass Partitions'],
    description: 'Clean Scandinavian-inspired dining space with an 8-seater custom teakwood table, floating credenza, and tinted fluted glass partition.',
    materialsUsed: ['Solid Teakwood', 'Fluted Glass', 'Warm White Lighting', 'PU Matte Polish']
  },
  {
    id: 'proj-8',
    title: 'Zen Guest Suite & Workstation',
    category: 'Bedroom',
    tier: 'affordable',
    tierName: 'Essential Living',
    locality: 'Nallagandla, Hyderabad',
    city: 'Hyderabad',
    sqft: '1,500 sq.ft',
    duration: '35 Days Handover',
    scope: 'Compact Workstation & Storage',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    features: ['Floating Study Desk', 'Overhead Book Library', 'Soft-Close Wardrobe', 'Neutral Palette'],
    description: 'A multi-functional hybrid bedroom and study space with built-in library shelves, ergonomic workstation, and 3-door sliding wardrobe.',
    materialsUsed: ['BWP Plywood', 'Merino Silk Matte Laminate', 'Hettich Soft-Close', 'LED Strip']
  },
  {
    id: 'proj-9',
    title: 'Opulent Classical Villa Lounge',
    category: 'Villa',
    tier: 'bespoke_luxury',
    tierName: 'Celestia Living',
    locality: 'Gandipet Lake Front, Hyderabad',
    city: 'Hyderabad',
    sqft: '5,600 sq.ft',
    duration: '70 Days Handover',
    scope: 'Lakefront Villa Complete Turnkey',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Double Height Ceiling Paneling', 'Onyx Backlit Bar', 'Custom Velvet Loungers', 'Brass Inlays'],
    description: 'Grand double-height living room featuring 22-foot wood veneer fluted wall panels, bookmatched onyx bar counter, and custom statement chandelier lighting.',
    materialsUsed: ['Backlit Iranian Onyx', 'Burma Teak Veneer', 'Hafele Concealed Hinges', 'Italian Brass Inlays']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discovery & Interactive 3D Walkthrough',
    duration: 'Days 1 – 4',
    icon: 'Compass',
    description: 'Meet our senior interior architect for in-depth space planning, lifestyle mapping, and photorealistic 3D virtual walkthroughs before spending a single rupee on production.',
    deliverables: ['Accurate 3D Renders', 'Detailed Itemized Cost Sheet', 'Material Moodboard & Samples']
  },
  {
    stepNumber: '02',
    title: 'In-House Factory CNC Production',
    duration: 'Days 5 – 25',
    icon: 'Factory',
    description: 'Precision components manufactured with automated Homag CNC machinery in our own ISO-certified factory. Zero manual carpenter errors, zero bubbling, and 100% edge-banding perfection.',
    deliverables: ['Pre-drilled BWP Cabinets', 'Pur-Glue Seamless Edgebanding', '14-Point Factory Quality Audit']
  },
  {
    stepNumber: '03',
    title: 'Site Execution & Turnkey Civil Works',
    duration: 'Days 26 – 38',
    icon: 'Hammer',
    description: 'Clean, dust-controlled on-site assembly by certified technicians alongside false ceiling, electrical conduits, designer tiling, and painting overseen by a dedicated project manager.',
    deliverables: ['Daily WhatsApp Video Updates', 'Civil & Electrical Milestones', 'Dust-Free Tool Assembly']
  },
  {
    stepNumber: '04',
    title: 'Deep Sanitization & Handover with 10-Yr Warranty',
    duration: 'Days 39 – 40',
    icon: 'ShieldCheck',
    description: 'Professional deep cleaning, 100-point joint inspection, and formal handover ceremony with your registered 10-year warranty card and dedicated post-move maintenance concierge.',
    deliverables: ['10-Year Warranty Certificate', 'Care & Maintenance Guidebook', '2 Free Yearly Servicing Checks']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Dr. Rajesh & Sunita Reddy',
    locality: 'Aparna Sarovar Zenith, Nallagandla',
    propertyType: '3 BHK (2,050 sq.ft)',
    tierName: 'Signature Spaces',
    projectScope: 'Complete 3BHK Turnkey Interior',
    rating: 5,
    quote: 'We compared D\'LIFE and local contractors before choosing JS GALLOR. Their 40-day delivery commitment was not a marketing gimmick — they delivered on Day 39 with flawless factory finish. The fluted wall panelling and cove lighting changed our entire living room vibe!',
    handoverDate: 'Delivered January 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verified: true
  },
  {
    id: 'test-2',
    clientName: 'Vikramaditya Rao',
    locality: 'Jubilee Hills, Road 45',
    propertyType: '4 BHK Duplex Penthouse',
    tierName: 'Celestia Living',
    projectScope: '4BHK Architectural Commission',
    rating: 5,
    quote: 'Studio Origin level bespoke aesthetics at a significantly more transparent price point. The Italian marble bookmatching and concealed rimless doors look straight out of Architectural Digest. Their factory precision is unmatched in Hyderabad.',
    handoverDate: 'Delivered February 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    verified: true
  },
  {
    id: 'test-3',
    clientName: 'Priya & Aniket Deshmukh',
    locality: 'My Home Bhooja, Hitec City',
    propertyType: '2 BHK Rental Asset',
    tierName: 'Essential Living',
    projectScope: '2BHK Asset Curation',
    rating: 5,
    quote: 'We wanted a clean, durable, tenant-proof interior that wouldn\'t break the bank. JS GALLOR\'s Essential package delivered high-gloss acrylic modular kitchen and wardrobes with 10-year warranty in exactly 35 days. Tenant signed the lease within 48 hours of handover.',
    handoverDate: 'Delivered December 2025',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    verified: true
  }
];

export const EXPERIENCE_CENTERS: ExperienceCenter[] = [
  {
    id: 'ec-banjara',
    name: 'Banjara Hills Flagship Showroom & Design Lounge',
    city: 'Hyderabad',
    area: 'Road No. 12, Banjara Hills',
    address: 'Road No. 12, Banjara Hills, Hyderabad, Telangana – 500034',
    phone: '+91 81436 78491',
    email: 'sales@jsgallor.com',
    timing: 'Mon – Sun: 10:30 AM – 8:30 PM',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    mapsUrl: 'https://maps.google.com/?q=Road+No+12+Banjara+Hills+Hyderabad',
    features: ['Curated Luxury Furniture Gallery', 'Italian Marble & Veneer Atelier', 'Private Architect Consultation Suites']
  },
  {
    id: 'ec-madhapur',
    name: 'Corporate HQ & Interior Architecture Studio',
    city: 'Hyderabad',
    area: 'Jubilee Enclave, Madhapur',
    address: 'WorkFlo Bizness Square, 4th Floor, Jubilee Enclave, HITEC City, Madhapur, Hyderabad, Telangana – 500081',
    phone: '+91 81436 78491',
    email: 'corporate@jsgallor.com',
    timing: 'Mon – Sat: 9:00 AM – 8:00 PM',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    mapsUrl: 'https://maps.google.com/?q=WorkFlo+Bizness+Square+Madhapur+Hyderabad',
    features: ['Turnkey Interior Design HQ', 'Virtual VR 3D Walkthrough Studio', 'Lighting & Smart Home Automation Lab']
  },
  {
    id: 'ec-uppal',
    name: 'Central Experience Center & Showroom / Warehouse',
    city: 'Hyderabad',
    area: 'Uppal',
    address: 'JS GALLOR Experience Center & Central Warehouse, Main Road, Near Metro Station Pillar 812, Uppal, Hyderabad, Telangana – 500039',
    phone: '+91 81436 78491',
    email: 'uppal@jsgallor.com',
    timing: 'Mon – Sun: 10:00 AM – 8:30 PM',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    mapsUrl: 'https://maps.google.com/?q=Uppal+Hyderabad+Telangana',
    features: ['Live Modular Kitchen & Wardrobe Mockups', 'Solid Wood & Sofa Furniture Display', 'Live Hardware Rig (Hafele, Hettich & Blum)']
  },
  {
    id: 'ec-indiranagar',
    name: 'Indiranagar Experience Pavilion & Studio',
    city: 'Bangalore',
    area: 'Indiranagar',
    address: '840, 100ft Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka – 560038',
    phone: '+91 81436 78491',
    email: 'bangalore@jsgallor.com',
    timing: 'Tue – Sun: 10:00 AM – 8:00 PM',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    mapsUrl: 'https://maps.google.com/?q=Indiranagar+Bengaluru+Karnataka',
    features: ['Contemporary Modular & Furniture Systems', 'Acoustic Louvers & Lighting Booth', 'Senior Architect Consultations']
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'Warranty',
    question: 'What is covered under the 10-Year Comprehensive Warranty?',
    answer: 'Our 10-year warranty covers all structural core plywood against boiling water degradation, termite/borer infestation, delamination of edge-bands, and hardware functionality across all Hettich and Hafele mechanisms. (Important Note: Warranty does NOT include coverage for natural disasters or force majeure events such as fire accidents, external wall water seepage / water sephaze, earthquakes, flooding, structural building cracks, or unauthorized customer alterations).'
  },
  {
    category: 'Process',
    question: 'How is JS GALLOR different from local interior contractors?',
    answer: 'Unlike traditional interior contractors who rely on manual carpentry on-site, 85% of your interiors (including modular kitchens, wardrobes, wall panels, and finishes) are precision-machined in our 60,000 sq.ft ISO-certified factory using automated Homag CNC routers. When materials arrive at your site, they are pre-drilled and flat-packed for rapid, dust-free assembly within 12–15 days.'
  },
  {
    category: 'Materials',
    question: 'What core materials, soft furnishings and hardware brands do you utilize?',
    answer: 'We exclusively source IS:710 Marine Grade Boiling Waterproof (BWP) plywood, calibrated high-density moisture-resistant (HDMR) boards, authentic European hardware from Hafele, Hettich, and Blum Austria, plus premium motorized curtains, blinds, European wallpapers, and acoustic wall panels. Every panel has a traceable QR code.'
  },
  {
    category: 'Pricing',
    question: 'Are there hidden costs or price escalations after signing?',
    answer: 'No. JS GALLOR operates on a fixed-price turnkey agreement. Once 3D drawings and itemized BOQs (including woodwork, false ceiling, curtains, blinds, wallpapers, and electricals) are approved by you, the price is legally locked. If there are no client-requested changes, you pay exactly what is in your master quotation.'
  },
  {
    category: 'Process',
    question: 'Can I visit the factory or see materials before confirming?',
    answer: 'Absolutely. We encourage homeowners to visit our Corporate Office in Madhapur (Workflo Bizness Square), Uppal Showroom, or Indiranagar Atelier (Bangalore) to feel the hardware, fluted panels, curtains/blinds fabrics, wallpapers, and quartz tops, or tour our automated factory to see our CNC machinery in action.'
  },
  {
    category: 'Pricing',
    question: 'Do you offer flexible EMI payment options?',
    answer: 'Yes, we provide flexible financial support and EMI solutions in partnership with FinFocus Vision Pvt. Ltd. as well as leading banking institutions (HDFC, ICICI, Bajaj Finserv), offering low-interest and zero-cost EMI payment schemes split seamlessly across your project milestones.'
  }
];

export const TRUST_METRICS = [
  { metric: '1,450+', label: 'Homes Delivered On Time', icon: 'Home' },
  { metric: '60,000 sq.ft', label: 'In-House Automated Factory', icon: 'Factory' },
  { metric: '10 Yrs', label: 'Structural Warranty', icon: 'ShieldCheck' },
  { metric: '4.9 ★', label: 'Client Satisfaction', icon: 'Star' },
  { metric: '₹1,000', label: 'Daily Delay Penalty Clause', icon: 'Clock' }
];

export const TRUSTED_BRANDS = [
  { name: 'Hafele Hardware', category: 'Fittings & Hinges', logo: 'HÄFELE' },
  { name: 'Hettich', category: 'Precision Hardware', logo: 'Hettich' },
  { name: 'Blum Austria', category: 'Servo Lift Systems', logo: 'blum' },
  { name: 'Century Ply', category: 'IS:710 Marine Plywood', logo: 'CENTURYPLY' },
  { name: 'DuroPly', category: 'IS:710 BWP Plywood & Veneers', logo: 'DUROPLY' },
  { name: 'Advance Laminates', category: 'Decorative & Acrylic Laminates', logo: 'ADVANCE LAMINATES' },
  { name: 'Greenlam', category: 'Architectural Laminates', logo: 'GREENLAM' },
  { name: 'Quantra Quartz', category: 'Engineered Quartz Surfaces', logo: 'QUANTRA QUARTZ' },
  { name: 'Premium Quartz & Onyx', category: 'Engineered & Exotic Stone', logo: 'QUARTZ & ONYX' },
  { name: 'Mittal\'s Fabrics', category: 'Curtains & Drapes Furnishings', logo: 'MITTAL\'S FABRICS' },
  { name: 'Darpan Fabrics', category: 'Luxury Furnishings & Upholstery', logo: 'DARPAN FABRICS' },
  { name: 'Saint-Gobain', category: 'Tinted & Fluted Glass', logo: 'SAINT-GOBAIN' },
  { name: 'Asian Paints', category: 'Royale Luxury Emulsion', logo: 'ASIAN PAINTS' }
];
