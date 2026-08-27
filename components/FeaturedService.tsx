"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, MessageSquare, ArrowRight, Clock } from "lucide-react";
import { getServiceWhatsAppUrl } from "@/lib/utils";

export default function FeaturedService() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0B0B] overflow-hidden border-t border-[#C9A45C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles size={14} className="text-[#C9A45C]" />
              <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold">
                SIGNATURE EXPERIENCE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E8] mb-6 leading-tight">
              Thai Massage
            </h2>

            <div className="w-16 h-[1px] bg-[#C9A45C]/60 mb-6" />

            <p className="text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed mb-6">
              Our flagship wellness treatment brings centuries of ancient Thai bodywork tradition directly to Banani. Combining rhythmic compression, palm presses, and passive full-body stretching, this session restores flexibility, reduces physical fatigue, and encourages deep mental tranquility.
            </p>

            {/* Highlights list */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3 text-xs sm:text-sm text-[#F5F1E8] font-light">
                <span className="w-5 h-5 rounded-full bg-[#C9A45C]/20 text-[#C9A45C] flex items-center justify-center text-xs">
                  <Check size={12} />
                </span>
                <span>Assisted body stretching & energy line palm compression</span>
              </li>
              <li className="flex items-center space-x-3 text-xs sm:text-sm text-[#F5F1E8] font-light">
                <span className="w-5 h-5 rounded-full bg-[#C9A45C]/20 text-[#C9A45C] flex items-center justify-center text-xs">
                  <Check size={12} />
                </span>
                <span>Conducted in quiet, private, climate-controlled suites</span>
              </li>
              <li className="flex items-center space-x-3 text-xs sm:text-sm text-[#F5F1E8] font-light">
                <span className="w-5 h-5 rounded-full bg-[#C9A45C]/20 text-[#C9A45C] flex items-center justify-center text-xs">
                  <Check size={12} />
                </span>
                <span>Performed by certified, highly trained wellness specialists</span>
              </li>
            </ul>

            {/* Duration & Price Bar */}
            <div className="flex items-center justify-between mb-10 p-4 bg-[#151515] border border-[#C9A45C]/20 rounded-sm">
              <div className="flex items-center gap-2 text-xs text-[#A8A8A8] font-medium">
                <Clock size={16} className="text-[#C9A45C]" />
                <span className="uppercase tracking-wider">DURATION: 60 MIN</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#A8A8A8] uppercase tracking-wider block font-light">VERIFIED PRICE</span>
                <span className="font-serif text-2xl font-bold text-[#C9A45C]">৳4,500</span>
              </div>
            </div>

            {/* CTAs: Discover & Book */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getServiceWhatsAppUrl("Thai Massage", "60 minutes")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-[0_0_25px_rgba(201,164,92,0.3)] hover:-translate-y-0.5"
              >
                <MessageSquare size={16} />
                <span>BOOK THIS EXPERIENCE</span>
              </a>

              <Link
                href="/services/thai-massage/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#F5F1E8] bg-[#151515] hover:bg-white/10 border border-[#C9A45C]/30 hover:border-[#C9A45C] transition-all rounded-sm"
              >
                <span>DISCOVER DETAILS</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-sm overflow-hidden border border-[#C9A45C]/30 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=75&w=800&auto=format&fit=crop"
                alt="Authentic Thai Massage Treatment Suite in Banani Dhaka"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B0B]/80 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
