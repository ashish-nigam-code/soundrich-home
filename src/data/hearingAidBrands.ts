export type BrandPriceTier = {
  segment: string;
  price: string;
  note?: string;
};

export type BrandFeature = {
  title: string;
  description: string;
};

export type HearingAidBrand = {
  slug: string;
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  logo: string;
  accentColor: string;
  priceSection: {
    title: string;
    intro: string;
    tiers: BrandPriceTier[];
    emi: string[];
  };
  aboutTitle: string;
  aboutParagraphs: string[];
  whyBrandTitle: string;
  whyBrandText: string;
  whyBrandPoints: BrandFeature[];
  whySoundrichTitle: string;
  whySoundrichPoints: string[];
  ctaTitle: string;
  ctaText: string;
};

const SOUND_RICH_POINTS = (brand: string): string[] => [
  `Wide range of ${brand} hearing aids to suit all needs and budgets`,
  "Expert advice and guidance from experienced audiologists",
  "Free hearing test and consultation",
  "Flexible EMI and financing options",
  "Comprehensive warranty on every device",
  "After-sales service — repairs, cleaning and adjustments",
];

export const hearingAidBrands: Record<string, HearingAidBrand> = {
  signia: {
    slug: "signia-hearing-aid",
    name: "Signia",
    tagline: "German engineering. Iconic sound.",
    metaTitle: "Buy Signia Hearing Aids in Delhi | Signia Hearing Aid Price | Soundrich Hearing",
    metaDescription:
      "Signia hearing aid price in India 2026 starts from ₹20,990 per ear. Explore basic to premium Signia hearing aids with EMI options at Soundrich Hearing, Delhi NCR.",
    heroTitle: "Signia Hearing Aids",
    heroDescription:
      "Discover clearer sound with Signia — cutting-edge German hearing technology combining innovation, comfort and superior sound quality. Authorised supply and expert fitting at Soundrich Hearing.",
    heroImage: "/assets/images/signia-n-bnr.jpg",
    logo: "/assets/images/signialogo-n-e1743074660359.png.bv.webp",
    accentColor: "#e6007e",
    priceSection: {
      title: "Signia Hearing Aid Price in India 2026",
      intro:
        "Signia hearing aid prices in India start from ₹20,990 per ear, with options for every hearing loss level — from essential digital aids to the flagship Premium IX series.",
      tiers: [
        { segment: "Basic Digital", price: "₹20,990 – ₹41,990", note: "Per ear / per pair" },
        { segment: "Mid Range", price: "₹65,000 – ₹1,50,000", note: "Per pair" },
        { segment: "Advanced", price: "₹1,80,000 – ₹3,00,000", note: "Per pair" },
        { segment: "Premium IX Series", price: "₹3,25,000 – ₹7,99,990", note: "Per pair" },
      ],
      emi: ["EMI from ₹1,800/month", "6–24 months EMI available"],
    },
    aboutTitle: "Discover Clearer Sound with Signia",
    aboutParagraphs: [
      "Soundrich Hearing is a leading provider of hearing aids in India and an authorised supplier of Signia hearing aids — one of the most advanced and innovative hearing aid brands in the world.",
      "Signia is renowned for its cutting-edge hearing aids that combine innovation, comfort and superior sound quality. These devices are designed to enhance your auditory experience and improve your overall quality of life — with state-of-the-art features including noise reduction, speech enhancement and connectivity that integrates with your digital lifestyle.",
    ],
    whyBrandTitle: "Why Choose Signia?",
    whyBrandText:
      "Signia hearing aids deliver excellent speech clarity in every environment, with rechargeable and Bluetooth models that keep you connected to the people and moments that matter.",
    whyBrandPoints: [
      {
        title: "Excellent Speech Clarity",
        description:
          "Advanced sound processing keeps speech clear and natural — even in challenging listening environments.",
      },
      {
        title: "Rechargeable & Bluetooth Models",
        description:
          "Stream calls, music and TV directly to your hearing aids, free from the hassle of batteries.",
      },
      {
        title: "Advanced Technology",
        description:
          "State-of-the-art noise reduction and speech enhancement, designed in Germany.",
      },
    ],
    whySoundrichTitle: "Why Buy Signia from Soundrich Hearing?",
    whySoundrichPoints: SOUND_RICH_POINTS("Signia"),
    ctaTitle: "Ready to Experience Signia?",
    ctaText:
      "Call Soundrich Hearing for the best Signia hearing aid price. Book a free hearing test and trial today.",
  },

  oticon: {
    slug: "oticon-hearing-aid",
    name: "Oticon",
    tagline: "BrainHearing™ technology from Denmark.",
    metaTitle: "Oticon Hearing Aid Price in India 2026 | Soundrich Hearing Delhi",
    metaDescription:
      "Oticon hearing aid price in India 2026 starts from ₹32,000 per pair. Explore BrainHearing™ technology hearing aids with EMI options at Soundrich Hearing, Delhi NCR.",
    heroTitle: "Oticon Hearing Aids",
    heroDescription:
      "Experience natural, fatigue-free listening with Oticon's BrainHearing™ technology — innovative Danish hearing aids designed to support the way your brain makes sense of sound.",
    heroImage: "/assets/images/oticon-hh-bnr.jpg",
    logo: "/assets/images/oticonlogo-n-e1743074687949.png.bv.webp",
    accentColor: "#0b2d5c",
    priceSection: {
      title: "Oticon Hearing Aid Price in India 2026",
      intro:
        "Oticon hearing aid prices in India range from ₹32,000 for entry-level pairs to ₹4,25,000 for premium models with full BrainHearing™ technology.",
      tiers: [
        { segment: "Entry Level", price: "₹32,000 – ₹70,000", note: "Per pair" },
        { segment: "Mid Range", price: "₹85,000 – ₹1,90,000", note: "Per pair" },
        { segment: "Premium", price: "₹2,55,000 – ₹4,25,000", note: "Per pair" },
      ],
      emi: ["EMI starting from ₹2,000/month", "Up to 24 months EMI available"],
    },
    aboutTitle: "The Oticon Difference",
    aboutParagraphs: [
      "Oticon is a globally recognised leader in hearing aid technology, renowned for its innovation, performance and user-centric designs. With a legacy of over a century, Oticon has consistently pushed the boundaries of hearing aid development — including the Oticon Opn S, Oticon More and Oticon Xceed ranges.",
      "Their BrainHearing™ technology is designed for natural and fatigue-free listening, helping your brain make sense of sound with less effort — so you can comfortably follow conversations, even in noise.",
    ],
    whyBrandTitle: "Why Choose Oticon?",
    whyBrandText:
      "Oticon's brain-focused sound processing delivers comfortable listening in noise, so conversations feel easier and days feel less tiring.",
    whyBrandPoints: [
      {
        title: "Brain-Focused Sound Processing",
        description:
          "BrainHearing™ technology supports the way your brain naturally understands sound.",
      },
      {
        title: "Comfortable Listening in Noise",
        description:
          "Advanced noise handling keeps speech front and centre in busy environments.",
      },
      {
        title: "Danish Innovation",
        description:
          "Over a century of Danish engineering leadership in hearing care.",
      },
    ],
    whySoundrichTitle: "Why Buy Oticon from Soundrich Hearing?",
    whySoundrichPoints: SOUND_RICH_POINTS("Oticon"),
    ctaTitle: "Ready to Experience Oticon?",
    ctaText:
      "Call Soundrich Hearing for the best Oticon offers. Book a free hearing test and consultation today.",
  },

  resound: {
    slug: "resound-hearing-aid",
    name: "ReSound",
    tagline: "Connect to every moment.",
    metaTitle: "ReSound Hearing Aids in Delhi | ReSound Price & Trial | Soundrich Hearing",
    metaDescription:
      "ReSound hearing aids with advanced technology, comfortable fit and Bluetooth connectivity. Authorised supply, free hearing test and EMI options at Soundrich Hearing, Delhi NCR.",
    heroTitle: "ReSound Hearing Aids",
    heroDescription:
      "Pioneering hearing technology that seamlessly integrates with your lifestyle — exceptional sound quality, wireless connectivity and personalised settings from ReSound.",
    heroImage: "/assets/images/tresound-bnr.jpg",
    logo: "/assets/images/resound-logo-n-e1743074806172.png.bv.webp",
    accentColor: "#00a0af",
    priceSection: {
      title: "ReSound Hearing Aid Price in India 2026",
      intro:
        "ReSound hearing aids are available across every budget — from essential digital models to premium Bluetooth-connected aids. Contact us for the latest price list and best offers.",
      tiers: [
        { segment: "Basic Digital", price: "₹22,000 – ₹60,000", note: "Per pair" },
        { segment: "Mid Range", price: "₹80,000 – ₹1,80,000", note: "Per pair" },
        { segment: "Premium", price: "₹2,00,000 – ₹4,00,000+", note: "Per pair" },
      ],
      emi: ["EMI options available", "Flexible tenure to fit your budget"],
    },
    aboutTitle: "ReSound: Technology That Fits Your Life",
    aboutParagraphs: [
      "Soundrich Hearing is proud to supply ReSound hearing aids — a world-renowned brand offering a wide range of hearing aids to suit all needs and budgets.",
      "ReSound has earned its reputation for pioneering hearing aid technology that seamlessly integrates with your lifestyle. Their cutting-edge designs combine comfort, durability and exceptional sound quality — with features like wireless connectivity, personalised settings and background noise reduction for a hearing experience that feels natural and immersive.",
    ],
    whyBrandTitle: "Why Choose ReSound?",
    whyBrandText:
      "From Bluetooth connectivity to noise cancellation, ReSound hearing aids offer a wide range of features to suit your individual needs — designed to feel natural and immersive.",
    whyBrandPoints: [
      {
        title: "Advanced Technology",
        description:
          "The latest technology delivers clear, natural sound quality in every environment.",
      },
      {
        title: "Comfortable Fit",
        description:
          "Designed to be comfortable to wear, even for long periods of time.",
      },
      {
        title: "Easy to Use",
        description:
          "Simple controls you can operate with just your fingertips, plus app connectivity.",
      },
    ],
    whySoundrichTitle: "Why Buy ReSound from Soundrich Hearing?",
    whySoundrichPoints: SOUND_RICH_POINTS("ReSound"),
    ctaTitle: "Ready to Experience ReSound?",
    ctaText:
      "Contact Soundrich Hearing today to schedule your free hearing test and ReSound consultation.",
  },

  widex: {
    slug: "widex-hearing-aid",
    name: "Widex",
    tagline: "Pure, natural sound — the Danish way.",
    metaTitle: "Widex Hearing Aids in Delhi | Widex Price & Trial | Soundrich Hearing",
    metaDescription:
      "Widex hearing aids with world-famous pure, natural sound quality. Authorised supply, expert fitting, free hearing test and EMI options at Soundrich Hearing, Delhi NCR.",
    heroTitle: "Widex Hearing Aids",
    heroDescription:
      "Experience crystal-clear, natural sound with Widex — hearing aids renowned for exceptional performance whether you're in a noisy environment, enjoying a conversation or indulging in your favourite music.",
    heroImage: "/assets/images/widex-.jpg",
    logo: "/assets/images/widex-logo-n-e1743074623324.png.bv.webp",
    accentColor: "#d4001f",
    priceSection: {
      title: "Widex Hearing Aid Price in India 2026",
      intro:
        "Widex hearing aids are available for all needs and budgets — from discreet daily-wear models to premium AI-powered aids. Contact us for the latest price list and best offers.",
      tiers: [
        { segment: "Basic Digital", price: "₹22,000 – ₹65,000", note: "Per pair" },
        { segment: "Mid Range", price: "₹90,000 – ₹1,90,000", note: "Per pair" },
        { segment: "Premium", price: "₹2,10,000 – ₹4,25,000+", note: "Per pair" },
      ],
      emi: ["EMI options available", "Flexible plans for every budget"],
    },
    aboutTitle: "Experience Clearer Hearing with Widex",
    aboutParagraphs: [
      "Widex Hearing Aids are renowned for their innovative technology and exceptional performance. Crafted to deliver superior sound quality personalised to your hearing needs, they bring out the detail in every conversation and every song.",
      "Soundrich Hearing is an authorised supplier of Widex hearing aids — one of the most trusted brands in the world. Every device is fitted by experienced professionals who help you find the right solution for your hearing loss.",
    ],
    whyBrandTitle: "Why Choose Widex?",
    whyBrandText:
      "Widex hearing aids are crafted to deliver superior, natural sound quality — personalised to your hearing needs and your lifestyle.",
    whyBrandPoints: [
      {
        title: "Pure, Natural Sound",
        description:
          "Widex's signature sound quality brings remarkable detail and richness to everyday listening.",
      },
      {
        title: "Innovative Technology",
        description:
          "Smart features that adapt automatically to your surroundings.",
      },
      {
        title: "Trusted Worldwide",
        description:
          "One of the most trusted hearing aid brands in the world, made in Denmark.",
      },
    ],
    whySoundrichTitle: "Why Buy Widex from Soundrich Hearing?",
    whySoundrichPoints: SOUND_RICH_POINTS("Widex"),
    ctaTitle: "Ready to Experience Widex?",
    ctaText:
      "Contact Soundrich Hearing today to learn more about Widex hearing aids and schedule your free consultation.",
  },

  phonak: {
    slug: "phonak-hearing-aid",
    name: "Phonak",
    tagline: "Swiss precision. Life is on.",
    metaTitle: "Phonak Hearing Aid Price in India 2026 | Soundrich Hearing Delhi NCR",
    metaDescription:
      "Phonak hearing aid price in India 2026 starts from ₹29,750 per ear. Explore reliable Swiss hearing technology with EMI options at Soundrich Hearing, Delhi NCR.",
    heroTitle: "Phonak Hearing Aids",
    heroDescription:
      "Discover the ultimate hearing solution with Phonak — reliable Swiss technology renowned for crystal-clear sound, strong noise reduction and power for mild to profound hearing loss.",
    heroImage: "/assets/images/phonak-n-bnr.jpg",
    logo: "/assets/images/phonak.webp",
    accentColor: "#002139",
    priceSection: {
      title: "Phonak Hearing Aid Price in India 2026",
      intro:
        "Phonak hearing aid prices in India start from ₹29,750 per ear, with solutions for mild to profound hearing loss across every technology level.",
      tiers: [
        { segment: "Basic Digital", price: "₹29,750 – ₹59,500", note: "Per ear / per pair" },
        { segment: "Mid Range", price: "₹1,10,000 – ₹2,00,000", note: "Per pair" },
        { segment: "Advanced", price: "₹2,20,000 – ₹3,50,000", note: "Per pair" },
        { segment: "Premium", price: "₹3,80,000 – ₹6,50,000+", note: "Per pair" },
      ],
      emi: ["EMI from ₹2,500/month", "Flexible EMI tenure available"],
    },
    aboutTitle: "The Phonak Promise",
    aboutParagraphs: [
      "Phonak, a global leader in hearing technology, is renowned for its innovation, quality and commitment to better hearing. Their cutting-edge hearing aids are designed to cater to various hearing needs, ensuring crystal-clear sound, comfort and discretion.",
      "As a leading supplier of Phonak hearing aids in Delhi NCR, Soundrich Hearing offers the full Phonak range — fitted by experienced audiologists who work with you to find the perfect match for your individual hearing loss.",
    ],
    whyBrandTitle: "Why Choose Phonak?",
    whyBrandText:
      "Phonak hearing aids deliver strong noise reduction and reliable Swiss technology — trusted worldwide for performance in every listening situation.",
    whyBrandPoints: [
      {
        title: "Strong Noise Reduction",
        description:
          "Proprietary technology keeps speech clear while cutting unwanted background noise.",
      },
      {
        title: "Reliable Swiss Technology",
        description:
          "Precision engineering and proven durability from Switzerland.",
      },
      {
        title: "For Every Hearing Loss",
        description:
          "Solutions for mild to profound hearing loss, including powerful SuperPower models.",
      },
    ],
    whySoundrichTitle: "Why Buy Phonak from Soundrich Hearing?",
    whySoundrichPoints: SOUND_RICH_POINTS("Phonak"),
    ctaTitle: "Ready to Experience Phonak?",
    ctaText:
      "Contact Soundrich Hearing for the best Phonak price. Schedule a consultation with one of our experienced audiologists.",
  },
};

export const brandList = Object.values(hearingAidBrands);
