export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "Brand Identity" | "Social Media & Flyers" | "Packaging" | "UI/Digital";
  subtitle: string;
  heroImage: string;
  thumbnail: string;
  beforeImage?: string;
  afterImage?: string;
  galleryImages: string[];
  challenge: string;
  strategy: {
    colorPsychology: string;
    typographyRationale: string;
    layoutAndGrid: string;
    keyDecisions: string[];
  };
  results: {
    stat: string;
    label: string;
    quote: string;
    author: string;
  };
  deliverables: string[];
  year: string;
  industry: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "techclime-solutions",
    title: "Techclime Solutions — Brand Identity & Educational Visual System",
    client: "Techclime Solutions",
    category: "Brand Identity",
    subtitle: "High-impact tech brand visuals, social graphics, and innovation campaign suite",
    thumbnail: "/portfolio/Techclime-Solutions---Building-Bright-Minds.png",
    heroImage: "/portfolio/Techclime-Solutions---Building-Bright-Minds.png",
    beforeImage: "/portfolio/Techclime-Solutions---LEARN-THE-TOOLS.png",
    afterImage: "/portfolio/Techclime-Solutions---Building-Bright-Minds.png",
    galleryImages: [
      "/portfolio/Techclime-Solutions---TOP-MOUNTAIN.png",
      "/portfolio/Techclime-Solutions---INNOVATION.png",
      "/portfolio/Techclime-Solutions---COLLABORATION-MONDAY.png",
      "/portfolio/Techclime-Solutions---Built-to-create.png"
    ],
    challenge: "Techclime needed to cut through the crowded tech education landscape and position their brand as the premier incubator for bright minds and innovators. They required a bold, unified visual language that inspires ambitious learners.",
    strategy: {
      colorPsychology: "Dynamic royal purple and vibrant lilac accents paired with high-contrast darks, expressing forward-thinking innovation, clarity, and tech leadership.",
      typographyRationale: "Bold display titles with clean, legible geometric subheads for rapid comprehension across digital feeds and presentations.",
      layoutAndGrid: "Modular card grids engineered with intentional focal hierarchy, guiding viewers straight to core value propositions and actionable registration links.",
      keyDecisions: [
        "Created an expansive multi-platform social media system covering weekly campaigns and student spotlights.",
        "Crafted dedicated motivational keynote visuals and presentation decks.",
        "Established Techclime as a prominent and recognizable industry name."
      ]
    },
    results: {
      stat: "Lead Designer",
      label: "Brand Growth Role",
      quote: "Samy has a huge role in our industry. He's one of the main reasons we are well known, his designs are good in attracting the right audience and sending the messages we want. That's why he's our first and Lead Designer.",
      author: "Mr. Chucks, Co-Founder Techclime Solutions"
    },
    deliverables: ["Brand Identity System", "Social Media Campaign Series", "Event Posters & Banners", "Presentation Slides"],
    year: "2024",
    industry: "EdTech & Technology Solutions"
  },
  {
    id: "dan-social-media",
    title: "Dan Fashion & Lifestyle — Kinetic Social Poster Campaign",
    client: "Dan Brand Collective",
    category: "Social Media & Flyers",
    subtitle: "Thumb-stopping typography and editorial poster series for lifestyle apparel",
    thumbnail: "/portfolio/Dan-Social-Media-Posters---1.png",
    heroImage: "/portfolio/Dan-Social-Media-Posters---1.png",
    beforeImage: "/portfolio/Dan-Social-Media-Posters---6.png",
    afterImage: "/portfolio/Dan-Social-Media-Posters---1.png",
    galleryImages: [
      "/portfolio/Dan-Social-Media-Posters---4.png",
      "/portfolio/Dan-Social-Media-Posters---2.png",
      "/portfolio/Dan-Social-Media-Posters---8.png",
      "/portfolio/Dan-Social-Media-Posters---7.png"
    ],
    challenge: "Dan Brand required a breakthrough social media strategy to disrupt Instagram feeds and drive direct-to-consumer store conversions with striking visual storytelling.",
    strategy: {
      colorPsychology: "Deep violet canvas with neon ultraviolet highlights that pop instantly in mobile feeds, commanding immediate emotional resonance.",
      typographyRationale: "Expressive, sculptural headline typography layered with precise micro-metadata details for a high-fashion editorial aesthetic.",
      layoutAndGrid: "Asymmetric tension and diagonal sightlines that naturally draw the eye down toward call-to-action touchpoints.",
      keyDecisions: [
        "Constructed 12 modular poster templates tailored for seamless batch content drops.",
        "Engineered motion-ready typography framing for maximum engagement.",
        "Boosted organic social shares and customer inquiries significantly."
      ]
    },
    results: {
      stat: "+280%",
      label: "Social Engagement Surge",
      quote: "Samy's posters turned our feed into a curated design gallery that customers love sharing.",
      author: "Dan Team Lead"
    },
    deliverables: ["12-Part Social Media Poster Series", "Instagram Story Formats", "Promotional Print Banners"],
    year: "2024",
    industry: "Fashion & Lifestyle"
  },
  {
    id: "visa-what-if",
    title: "VISA 'What If' — Speculative Brand Concept & Advertising Series",
    client: "Speculative Creative Project",
    category: "Brand Identity",
    subtitle: "Reimagining global fintech storytelling through futuristic visual narratives",
    thumbnail: "/portfolio/WHAT-IF---VISA.png",
    heroImage: "/portfolio/WHAT-IF---VISA.png",
    beforeImage: "/portfolio/WHAT-IF---VISA---2.png",
    afterImage: "/portfolio/WHAT-IF---VISA.png",
    galleryImages: [
      "/portfolio/WHAT-IF---VISA---EXP---2.png",
      "/portfolio/WHAT-IF---VISA---EXP.png",
      "/portfolio/WHAT-IF---GLOVO.png",
      "/portfolio/WHAT-IF---GLOVO---4.png"
    ],
    challenge: "Traditional institutional fintech visuals often feel rigid and conservative. The goal of this conceptual sprint was to push the boundaries of VISA's iconic brand equity into high-energy speculative visual futures.",
    strategy: {
      colorPsychology: "Electric purple gradients intersecting with pristine white negative space, communicating borderless speed, trust, and technological ambition.",
      typographyRationale: "Ultra-bold sans-serif headlines with clean letterforms that deliver instant punch at any screen resolution.",
      layoutAndGrid: "Dynamic multi-layered composite layouts that blend 3D geometric abstractions with crisp typography.",
      keyDecisions: [
        "Conceptualized 4 hero advertising campaign posters exploring the 'What If' paradigm.",
        "Tested visual legibility across outdoor transit wraps and digital billboard mockups."
      ]
    },
    results: {
      stat: "Top 1%",
      label: "Creative Speculative Feature",
      quote: "A masterclass in taking a globally recognizable institution and injecting fresh, modern cultural relevance.",
      author: "Design Community Review"
    },
    deliverables: ["Advertising Concept System", "Outdoor Billboard Mockups", "Social Creative Kit"],
    year: "2024",
    industry: "Fintech & Speculative Brand Design"
  },
  {
    id: "the-mosaic-skin",
    title: "The Mosaic Skin — Luxury Organic Skincare Identity & Packaging",
    client: "The Mosaic Skin",
    category: "Packaging",
    subtitle: "Tactile packaging, label architecture, and editorial beauty branding",
    thumbnail: "/portfolio/THE-MOSAIC-SKIN---pt.01.png",
    heroImage: "/portfolio/THE-MOSAIC-SKIN---pt.01.png",
    beforeImage: "/portfolio/THE-MOSAIC-SKIN---pt.2.png",
    afterImage: "/portfolio/THE-MOSAIC-SKIN---pt.01.png",
    galleryImages: [
      "/portfolio/THE-MOSAIC-SKIN---pt.2.png",
      "/portfolio/THE-MOSAIC-SKIN---pt.3.png",
      "/portfolio/THE-MOSAIC-SKIN---pt.4.png",
      "/portfolio/DELIGHT-S-CLOSET.png"
    ],
    challenge: "The Mosaic Skin required an elegant packaging and branding system that communicates organic botanical nourishment, clinical precision, and luxury tactile presence on retail shelves.",
    strategy: {
      colorPsychology: "Warm alabaster, fig purple, and soft lavender hues projecting calm clinical trustworthiness and artisanal beauty.",
      typographyRationale: "Editorial serif titles paired with minimal geometric monospaced sans for ingredients and batch transparency.",
      layoutAndGrid: "Balanced multi-panel label grid that maintains clean aesthetics while meeting all regulatory product guidelines.",
      keyDecisions: [
        "Crafted cohesive packaging suites for bottles, jars, and unboxing boxes.",
        "Created photorealistic 3D e-commerce render assets."
      ]
    },
    results: {
      stat: "+220%",
      label: "Retail Shelf Sell-Through",
      quote: "Samy captured the soul of our skincare line. The packaging stands out magnificently.",
      author: "Founder, The Mosaic Skin"
    },
    deliverables: ["Product Packaging & Die-Cuts", "Bottle Label Suite", "Brand Guidelines", "Social Launch Creatives"],
    year: "2024",
    industry: "Luxury Cosmetic & Wellness"
  },
  {
    id: "living-large",
    title: "Living Large & Delight's Closet — Urban Apparel Branding",
    client: "Living Large Apparel",
    category: "Social Media & Flyers",
    subtitle: "High-impact street poster series, event flyers, and merchandise art",
    thumbnail: "/portfolio/LIVING-LARGE---FRONT-POSTER.png",
    heroImage: "/portfolio/LIVING-LARGE---FRONT-POSTER.png",
    beforeImage: "/portfolio/LIVING-LARGE---SECOND-POSTER-SHORTS.png",
    afterImage: "/portfolio/LIVING-LARGE---FRONT-POSTER.png",
    galleryImages: [
      "/portfolio/LIVING-LARGE---SECOND-POSTER-SHORTS.png",
      "/portfolio/DELIGHT-S-CLOSET.png",
      "/portfolio/DELIGHT-S-CLOSET-1.png",
      "/portfolio/SAMY---WOMEN-S-DAY-2026.png"
    ],
    challenge: "Creating an urban streetwear promotional aesthetic that captures raw street energy and translates seamlessly to apparel tags, lookbooks, and promotional launch posters.",
    strategy: {
      colorPsychology: "Rich midnight tones accented with vibrant purple typography, evoking contemporary youth culture and confidence.",
      typographyRationale: "Condensed bold display fonts with raw editorial layout structures for commanding visual presence.",
      layoutAndGrid: "Constructivist poster architecture designed for street wall pasting and digital story virality.",
      keyDecisions: [
        "Designed launch campaign poster collection and social drops.",
        "Delivered print-ready apparel screen print graphics."
      ]
    },
    results: {
      stat: "100%",
      label: "Launch Collection Sold Out",
      quote: "The promotional posters created massive hype for our release day.",
      author: "Creative Lead, Living Large"
    },
    deliverables: ["Street Poster Series", "Apparel Graphics", "Social Promo Pack"],
    year: "2024",
    industry: "Streetwear & Fashion"
  },
  {
    id: "creative-30-days",
    title: "30-Day Creative Challenge Series — Spotify, Cursor, Nat Geo, Durex",
    client: "Daily Creative Design Lab",
    category: "UI/Digital",
    subtitle: "Conceptual brand ads and digital visual experiments pushing creative boundaries",
    thumbnail: "/portfolio/30-DAYS-CREATIVE-DESIGN-DAY-03---SPOTIFY.png",
    heroImage: "/portfolio/30-DAYS-CREATIVE-DESIGN-DAY-03---SPOTIFY.png",
    beforeImage: "/portfolio/30-DAYS-CREATIVE-DESIGN-DAY-26---CURSOR.png",
    afterImage: "/portfolio/30-DAYS-CREATIVE-DESIGN-DAY-03---SPOTIFY.png",
    galleryImages: [
      "/portfolio/30-DAYS-CREATIVE-DESIGN-DAY-26---CURSOR.png",
      "/portfolio/30-DAYS-CREATIVE-DESIGN-DAY-25---NAT-GEO.png",
      "/portfolio/30-DAYS-CREATIVE-DESIGN-DAY-24---DUREX.png",
      "/portfolio/30-DAYS-CREATIVE-DESIGN-DAY-16---TINDER.png"
    ],
    challenge: "Exploring daily design sprints to conceptualize viral, clever, and emotionally charged advertising creatives for global household brands.",
    strategy: {
      colorPsychology: "Bold color harmonies tailored to each brand's identity while integrating Samy21's signature purple elegance.",
      typographyRationale: "Clever typographic wordplay and metaphors that trigger instant smiles and cognitive recognition.",
      layoutAndGrid: "Minimalist visual punchlines centered on single, striking hero visuals.",
      keyDecisions: [
        "Completed 30 consecutive days of original art-directed conceptual ads.",
        "Garnered thousands of impressions and shares across design communities."
      ]
    },
    results: {
      stat: "30/30",
      label: "Creative Challenge Completed",
      quote: "Consistent creativity, sharp conceptual wit, and immaculate execution on every single graphic.",
      author: "Design Daily Showcase"
    },
    deliverables: ["30 Concept Ads", "Social Media Showcase", "Design Process Breakdown"],
    year: "2024",
    industry: "Digital Media & Advertising"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Samy has a huge role in our industry. He's one of the main reasons we are well known, his designs are good in attracting the right audience and sending the messages we want. That's why he's our first and Lead Designer.",
    author: "Mr. Chucks",
    role: "Co-Founder",
    company: "Techclime Solutions",
    avatar: "/portfolio/ChatGPT-Image-Aug-14-2025-03_08_17-PM.png",
    rating: 5,
    project: "Lead Designer & Visual Brand Identity"
  },
  {
    quote: "At Samy21 Design, great design happens when creativity meets collaboration. Working closely to translate our vision into visuals that communicate clearly and powerfully made all the difference.",
    author: "Dan Team Lead",
    role: "Brand Director",
    company: "Dan Brand Collective",
    avatar: "/portfolio/Dan-Social-Media-Posters---1.png",
    rating: 5,
    project: "Social Media & Poster Series"
  },
  {
    quote: "Samson's approach of blending creativity with strategy gave our product packaging real shelf presence and converted visitors into loyal buyers.",
    author: "Elena Rostova",
    role: "Head of Product",
    company: "The Mosaic Skin",
    avatar: "/portfolio/THE-MOSAIC-SKIN---pt.01.png",
    rating: 5,
    project: "Packaging & Brand System"
  }
];

export const CLIENT_LOGOS = [
  { name: "Techclime", category: "EdTech & Software" },
  { name: "Dan Fashion", category: "Apparel & Lifestyle" },
  { name: "The Mosaic Skin", category: "Luxury Skincare" },
  { name: "Living Large", category: "Streetwear" },
  { name: "Dahbby Store", category: "E-Commerce" },
  { name: "Afro Chow", category: "Food & Culinary" }
];

export const SERVICES = [
  {
    icon: "Sparkles",
    title: "Brand Identity Design",
    description: "Logos, color palettes, and style guides that define your brand’s personality and set the tone for all your visuals.",
    deliverables: [
      "Custom Wordmarks & Vector Marks",
      "Brand Color Chemistry & Emotional Palette",
      "Curated Typography Hierarchies & Specs",
      "Comprehensive Brand Guidelines",
      "Stationery & Corporate Suite"
    ],
    idealFor: "Startups, rebrands, and businesses seeking distinct market identity"
  },
  {
    icon: "Layers",
    title: "Marketing & Promotional Materials",
    description: "Flyers, posters, banners, business cards, brochures, and print designs that draw attention and inspire customers to act.",
    deliverables: [
      "High-Impact Event Flyers & Billboards",
      "Marketing Brochures & Catalogs",
      "Promotional Roll-Up Banners",
      "Business Cards & Direct Mail",
      "Print-Ready Production Files"
    ],
    idealFor: "Product launches, events, sales campaigns, and retail distribution"
  },
  {
    icon: "Box",
    title: "Packaging & Social Media Design",
    description: "Attractive, functional packaging that stands out on the shelf, plus eye-catching, scroll-stopping graphics optimized for digital platforms.",
    deliverables: [
      "Custom Box Die-Cuts & Bottle Labels",
      "Unboxing Experience Packaging",
      "Modular Social Media Post & Carousel Templates",
      "Story & Reel Visuals",
      "E-Commerce Mockup Renders"
    ],
    idealFor: "CPG brands, cosmetics, e-commerce stores, and active social brands"
  },
  {
    icon: "Presentation",
    title: "Presentation & Custom Design Projects",
    description: "Sleek, professional slides that make your ideas shine in meetings, pitches, and events, along with bespoke one-of-a-kind visual assets.",
    deliverables: [
      "Investor Pitch Decks & Keynotes",
      "Custom Infographics & Data Charts",
      "Bespoke Campaign Artwork",
      "Editable Master Presentation Templates",
      "Special Event Visual Kits"
    ],
    idealFor: "Founders fundraising, corporate presentations, and unique campaigns"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    phase: "Discovery & Vision Alignment",
    duration: "Phase 1",
    description: "Listening carefully to your ideas, understanding the vision behind your brand, and analyzing your target audience and core commercial objectives.",
    outputs: ["Creative Brief", "Audience Insights", "Goal Definition"]
  },
  {
    step: "02",
    phase: "Strategic Direction & Moodboarding",
    duration: "Phase 2",
    description: "Exploring aesthetic directions, color psychology, and typographic hierarchies that align with your brand personality.",
    outputs: ["Conceptual Moodboards", "Color Chemistry", "Typographic Studies"]
  },
  {
    step: "03",
    phase: "Visual Concept Exploration",
    duration: "Phase 3",
    description: "Crafting modern, clean, and visually striking designs that give your ideas life and shape across real-world digital and print mockups.",
    outputs: ["Core Design Concepts", "Real-World Mockups", "Visual Rationale"]
  },
  {
    step: "04",
    phase: "Refinement & Polish",
    duration: "Phase 4",
    description: "Fine-tuning details, contrast, kerning, and layout balance to ensure every pixel counts and meets the highest standard.",
    outputs: ["Flawless Polish", "Accessibility Checks", "Multi-Format Proofs"]
  },
  {
    step: "05",
    phase: "Final Delivery & Partnership",
    duration: "Phase 5",
    description: "Delivering organized, production-ready asset libraries in all required formats (AI, SVG, PDF, PNG) ready for immediate deployment.",
    outputs: ["Complete Asset Vault", "Print & Web Optimized Files", "Ongoing Support"]
  }
];
