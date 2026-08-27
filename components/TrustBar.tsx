"use client";

import { UserCheck, ShieldCheck, Sparkles, Heart, MapPin, Navigation } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: UserCheck,
    title: "PROFESSIONAL THERAPISTS",
    desc: "Skilled specialists",
  },
  {
    icon: ShieldCheck,
    title: "PRIVATE TREATMENT ROOMS",
    desc: "100% serene privacy",
  },
  {
    icon: Sparkles,
    title: "PREMIUM HYGIENE",
    desc: "Sanitized & organic",
  },
  {
    icon: Heart,
    title: "PERSONALIZED EXPERIENCE",
    desc: "Tailored to your needs",
  },
  {
    icon: MapPin,
    title: "BANANI, DHAKA",
    desc: "Kamal Ataturk Ave",
  },
  {
    icon: Navigation,
    title: "SERVING DHAKA",
    desc: "Banani • Gulshan • Dhaka",
  },
];

export default function TrustBar() {
  return (
    <section className="relative z-20 bg-[#151515] border-y border-[#C9A45C]/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-center justify-between">
          {TRUST_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center group py-2 px-1 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#0B0B0B] border border-[#C9A45C]/30 flex items-center justify-center mb-3 group-hover:border-[#C9A45C] group-hover:scale-110 transition-all duration-300">
                  <Icon size={18} className="text-[#C9A45C]" />
                </div>
                <h3 className="text-[11px] font-semibold tracking-[0.18em] text-[#F5F1E8] uppercase group-hover:text-[#C9A45C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#A8A8A8] font-light mt-0.5 tracking-wider">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
