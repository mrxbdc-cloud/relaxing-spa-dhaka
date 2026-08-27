"use client";

import { motion } from "framer-motion";
import { Sparkles, UserCheck, ShieldCheck, Heart, MapPin, Feather } from "lucide-react";

const FEATURES = [
  {
    icon: Feather,
    title: "AUTHENTIC THAI-INSPIRED EXPERIENCE",
    description: "Centuries of traditional bodywork techniques refined to deliver maximum tranquility and physical release.",
  },
  {
    icon: UserCheck,
    title: "PROFESSIONAL THERAPISTS",
    description: "Our certified practitioners possess years of dedicated expertise in anatomy, pressure points, and aromatherapy.",
  },
  {
    icon: ShieldCheck,
    title: "PRIVATE & PEACEFUL ROOMS",
    description: "Every session is conducted in individual, quiet treatment suites equipped with custom lighting and soundscapes.",
  },
  {
    icon: Sparkles,
    title: "PREMIUM HYGIENE STANDARDS",
    description: "We strictly enforce hospital-grade sanitation, fresh laundered organic linens, and single-use supplies for every guest.",
  },
  {
    icon: Heart,
    title: "PERSONALIZED TREATMENTS",
    description: "We consult with you prior to each session to tailor pressure levels, focus zones, and essential oil preferences.",
  },
  {
    icon: MapPin,
    title: "CONVENIENT BANANI LOCATION",
    description: "Situated on Kamal Ataturk Avenue, offering easy access, discrete entry, and a calm retreat in central Dhaka.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#151515] border-t border-[#C9A45C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-3"
          >
            OUR DISTINCTION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E8] mb-6 leading-tight"
          >
            Why Relaxing Spa Dhaka
          </motion.h2>
          <div className="w-16 h-[1px] bg-[#C9A45C]/60 mx-auto" />
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-8 bg-[#0B0B0B] border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 rounded-sm transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#151515] border border-[#C9A45C]/30 flex items-center justify-center mb-6 group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C]/10 transition-all duration-300">
                  <Icon size={22} className="text-[#C9A45C]" />
                </div>

                <h3 className="font-serif text-xl font-normal text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-3 leading-snug">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
