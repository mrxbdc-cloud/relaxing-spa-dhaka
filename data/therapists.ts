export interface Therapist {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  description: string;
}

export const THERAPISTS: Therapist[] = [
  {
    id: "malee",
    name: "MALEE",
    specialty: "Traditional Thai Massage Specialist",
    experience: "Senior Therapist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    description: "Specializes in traditional Thai acupressure techniques including Sen line pressure therapy, assisted posture stretching, and full-body alignment.",
  },
  {
    id: "sunisa",
    name: "SUNISA",
    specialty: "Aroma Therapy & Botanical Wellness Practitioner",
    experience: "Experienced Therapist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    description: "Skilled in custom essential oil blending, soothing massage, and Swedish-Thai fusion techniques tailored for deep mental relaxation.",
  },
  {
    id: "kanya",
    name: "KANYA",
    specialty: "Deep Tissue & Muscular Relief Specialist",
    experience: "Experienced Therapist",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop",
    description: "Focuses on deep friction bodywork, trigger point tension release, and relieving chronic shoulder and back strain for guests with postural fatigue.",
  },
  {
    id: "siriporn",
    name: "SIRIPORN",
    specialty: "Hot Stone & Thermal Therapy Practitioner",
    experience: "Experienced Therapist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    description: "Specialized in thermal volcanic basalt stone therapy, using warm continuous strokes to dissolve deep muscular stiffness and restore physical comfort.",
  },
  {
    id: "anong",
    name: "ANONG",
    specialty: "Thai Foot Reflexology & Herbal Therapy Practitioner",
    experience: "Experienced Therapist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    description: "Dedicated to traditional Thai foot reflexology and organic herbal therapies that relieve lower limb fatigue and promote overall relaxation.",
  },
  {
    id: "arunya",
    name: "ARUNYA",
    specialty: "VIP Couple Spa & Holistic Bodywork Practitioner",
    experience: "Senior Therapist",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop",
    description: "Skilled in orchestrating tranquil couple wellness sessions and multi-therapist treatments in private luxury suites.",
  },
];
