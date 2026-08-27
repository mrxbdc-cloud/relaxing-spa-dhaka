"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";
import { THERAPISTS } from "@/data/therapists";

export default function Therapists() {
  return (
    <section id="therapists" className="relative py-24 sm:py-32 bg-[#0B0B0B] border-t border-[#C9A45C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-3"
          >
            EXPERT TEAM
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E8] mb-6 leading-tight"
          >
            Meet Our Wellness Specialists
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed"
          >
            Our compassionate practitioners bring authentic technique, intuitive care, and dedicated professionalism to every session.
          </motion.p>
        </div>

        {/* Therapist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {THERAPISTS.map((therapist, index) => (
            <motion.div
              key={therapist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group bg-[#151515] border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 rounded-sm overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-lg"
            >
              {/* Portrait Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={therapist.image}
                  alt={`${therapist.name} - ${therapist.specialty} at Relaxing Spa Banani Dhaka`}
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 bg-[#0B0B0B]/80 backdrop-blur-md border border-[#C9A45C]/30 px-3 py-1 rounded-sm flex items-center gap-1.5">
                  <Award size={12} className="text-[#C9A45C]" />
                  <span className="text-[10px] font-semibold tracking-wider text-[#F5F1E8] uppercase">
                    {therapist.experience}
                  </span>
                </div>
              </div>

              {/* Therapist Details */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-normal text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-1 tracking-wider">
                  {therapist.name}
                </h3>
                <span className="text-xs text-[#C9A45C] font-medium tracking-wide block mb-3 uppercase">
                  {therapist.specialty}
                </span>
                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                  {therapist.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
