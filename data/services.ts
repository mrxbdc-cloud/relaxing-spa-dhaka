export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  duration: string; // Always "60 MIN"
  price: string;    // Exact verified price e.g. "৳4,500"
  featured?: boolean;
  homepageOrder?: number; // 1-10 for homepage, undefined for secondary
  seoKeywords: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "thai-massage",
    slug: "thai-massage",
    name: "Thai Massage",
    shortDescription: "Traditional Thai-inspired massage focused on relaxation, mobility and a refreshing wellness experience.",
    fullDescription: "Rooted in centuries-old Eastern wellness traditions, our Thai Massage combines rhythmic acupressure with gentle assisted stretching. Performed in a serene private suite by skilled specialists in Banani, this treatment reduces body tension, improves flexibility, and restores physical vitality.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳4,500",
    featured: true,
    homepageOrder: 1,
    seoKeywords: ["thai massage Banani", "thai massage Dhaka", "thai massage in Banani"],
    faqs: [
      {
        question: "What is included in a 60-minute Thai Massage session?",
        answer: "A 60-minute Thai Massage session includes full-body Sen line acupressure, gentle assisted yoga stretching, and postural tension release conducted in a private suite.",
      },
      {
        question: "What should I wear during a Thai Massage?",
        answer: "Loose, comfortable spa attire is provided for your session to allow full freedom of movement during assisted stretching.",
      },
    ],
  },
  {
    id: "dry-massage",
    slug: "dry-massage",
    name: "Dry Massage",
    shortDescription: "Oil-free pressure therapy targeting deep muscle stiffness, joint mobility, and total body relief.",
    fullDescription: "Our Dry Massage is an intensive oil-free body therapy designed for individuals seeking deep muscle relaxation without oils or lotions. Focused palm pressure, thumb compression, and joint manipulation release stubborn knots and restore physical lightness.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳5,000",
    homepageOrder: 2,
    seoKeywords: ["dry massage Banani", "dry massage Dhaka"],
    faqs: [
      {
        question: "How does Dry Massage differ from Oil Massage?",
        answer: "Dry Massage is performed without oils or lotions, focusing purely on firm acupressure compression and joint mobilization over light spa garments.",
      },
    ],
  },
  {
    id: "oil-massage",
    slug: "oil-massage",
    name: "Oil Massage",
    shortDescription: "Classic full-body relaxation therapy using warm botanical oils to melt stress and ease fatigue.",
    fullDescription: "Unwind with our classic Oil Massage in Banani. Smooth, continuous strokes combined with warm organic botanical oils nourish your skin while releasing muscular tightness and mental strain after a demanding day.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳5,500",
    homepageOrder: 3,
    seoKeywords: ["oil massage Banani", "oil massage Dhaka"],
    faqs: [
      {
        question: "What kind of oil is used in the session?",
        answer: "We use premium organic, hypoallergenic botanical oils that leave your skin soft, hydrated, and pleasantly refreshed.",
      },
    ],
  },
  {
    id: "hot-oil-massage",
    slug: "hot-oil-massage",
    name: "Hot Oil Massage",
    shortDescription: "Therapeutic massage utilizing gently heated organic oils for deep muscular warmth and serenity.",
    fullDescription: "Experience deep relaxation with our Hot Oil Massage. Warm, fragrant botanical oil is applied with long, soothing strokes, penetrating deep into muscle layers to relieve chronic stiffness and induce a profound state of calm.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳6,000",
    homepageOrder: 4,
    seoKeywords: ["hot oil massage Banani", "hot oil massage Dhaka"],
    faqs: [
      {
        question: "Is the hot oil safe and comfortable for sensitive skin?",
        answer: "Yes, our oils are warmed to a perfectly soothing, safe temperature that relaxes muscles without causing skin irritation.",
      },
    ],
  },
  {
    id: "hot-stone-massage",
    slug: "hot-stone-massage",
    name: "Hot Stone Massage",
    shortDescription: "Smooth volcanic basalt stones heated to perfection to melt away stubborn muscle tension.",
    fullDescription: "Smooth heated volcanic basalt stones are strategically placed along key relaxation meridians and used to massage tight muscles. The gentle thermal heat penetrates deeply into tissues, dissolving stress and restoring inner equilibrium.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳6,500",
    homepageOrder: 5,
    seoKeywords: ["hot stone massage Banani", "hot stone massage Dhaka"],
    faqs: [
      {
        question: "What are the benefits of Hot Stone Massage?",
        answer: "Penetrating warmth from heated basalt stones improves blood circulation, releases deep muscle spasms, and promotes restful sleep.",
      },
    ],
  },
  {
    id: "aroma-body-massage",
    slug: "aroma-body-massage",
    name: "Aroma Body Massage",
    shortDescription: "Sensory aromatherapy body treatment designed to calm the nervous system and refresh the mind.",
    fullDescription: "Immerse your senses in custom-blended aromatic essential oils. Our Aroma Body Massage pairs gentle, rhythmic bodywork with therapeutic plant essences to soothe mental anxiety and uplift your overall well-being.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳7,500",
    homepageOrder: 6,
    seoKeywords: ["aroma body massage Banani", "aroma body massage Dhaka"],
    faqs: [
      {
        question: "Can I choose my preferred essential oil blend?",
        answer: "Yes, our wellness specialists consult with you prior to your treatment to select the ideal aroma blend for your mood and goals.",
      },
    ],
  },
  {
    id: "deep-tissue-massage",
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    shortDescription: "Targeted firm pressure targeting deep muscle layers, chronic knots, and postural fatigue.",
    fullDescription: "Designed for individuals suffering from chronic back strain, tight shoulders, or intense physical fatigue. Deep Tissue Massage employs slow, deliberate friction and firm pressure to release deep muscular tightness.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳8,000",
    homepageOrder: 7,
    seoKeywords: ["deep tissue massage Banani", "deep tissue massage Dhaka"],
    faqs: [
      {
        question: "Is Deep Tissue Massage suitable for desk workers?",
        answer: "Absolutely. It is ideal for relieving neck, shoulder, and lower back tension resulting from long hours at a computer.",
      },
    ],
  },
  {
    id: "body-to-body-massage",
    slug: "body-to-body-massage",
    name: "Body To Body Massage",
    shortDescription: "Sensory full-body relaxation session focusing on continuous rhythmic contact and deep calm.",
    fullDescription: "A specialized 60-minute sensory relaxation ritual combining fluid strokes, warm aromatic oils, and continuous contact to deliver total mental reset and physical pampering in full privacy.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳9,000",
    seoKeywords: ["body to body massage Banani", "body to body massage Dhaka"],
    faqs: [
      {
        question: "Are all sessions conducted in private suites?",
        answer: "Yes, every treatment takes place in a fully private, tranquil, climate-controlled suite with ensuite facilities.",
      },
    ],
  },
  {
    id: "nuru-massage",
    slug: "nuru-massage",
    name: "Nuru Massage",
    shortDescription: "Smooth, gliding massage therapy using ultra-hydrating natural seaweed gel for pure relaxation.",
    fullDescription: "Our Nuru Massage utilizes a slippery, clear, odorless natural seaweed gel to deliver frictionless, gliding body strokes that soothe sensitive skin and induce profound muscular relaxation.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳8,500",
    seoKeywords: ["nuru massage Banani", "nuru massage Dhaka"],
    faqs: [
      {
        question: "What gel is used in Nuru Massage?",
        answer: "We use organic, water-based Nuru gel enriched with seaweed minerals that easily rinses off, leaving your skin soft and refreshed.",
      },
    ],
  },
  {
    id: "four-hand-massage",
    slug: "four-hand-massage",
    name: "Four Hand Massage",
    shortDescription: "Synchronized dual-therapist massage delivering twice the relaxation and muscle tension relief.",
    fullDescription: "Two therapists work in seamless harmony, executing synchronized strokes across your body. The dual movement tricks your mind into letting go of control, producing an unmatched sense of stillness.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳12,500",
    homepageOrder: 8,
    seoKeywords: ["four hand massage Banani", "four hand massage Dhaka"],
    faqs: [
      {
        question: "How does a Four Hand Massage work?",
        answer: "Two experienced therapists perform synchronized massage movements simultaneously, doubling the relaxation impact in a 60-minute session.",
      },
    ],
  },
  {
    id: "six-hand-massage",
    slug: "six-hand-massage",
    name: "Six Hand Massage",
    shortDescription: "Ultimate luxury ritual featuring three therapists working in perfect rhythm for total sensory surrender.",
    fullDescription: "An extraordinary VIP spa experience. Three skilled specialists choreograph continuous rhythmic movements over your body simultaneously, delivering an opulent 60-minute wellness journey.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳14,500",
    homepageOrder: 9,
    seoKeywords: ["six hand massage Banani", "six hand massage Dhaka"],
    faqs: [
      {
        question: "Do I need to book a Six Hand Massage in advance?",
        answer: "Yes, because three dedicated therapists are assigned to your session, advance booking via WhatsApp or phone is required.",
      },
    ],
  },
  {
    id: "couple-massage",
    slug: "couple-massage",
    name: "Couple Massage",
    shortDescription: "Side-by-side relaxation session in our luxury VIP dual suite for couples or companions.",
    fullDescription: "Share a peaceful sanctuary with your partner or friend. Enjoy side-by-side 60-minute massages in our spacious VIP dual suite, accompanied by soothing herbal tea and ambient lighting.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    duration: "60 MIN",
    price: "৳16,500",
    homepageOrder: 10,
    seoKeywords: ["couple massage Banani", "couple massage Dhaka"],
    faqs: [
      {
        question: "Can we choose different massage types for the Couple Massage?",
        answer: "Yes, each person in the VIP dual suite can select their preferred massage style (e.g. one Thai massage, one Aroma Oil massage).",
      },
    ],
  },
];
