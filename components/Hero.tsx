"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, MessageSquare } from "lucide-react";
import { getWhatsAppUrl, BUSINESS_INFO } from "@/lib/utils";

export default function Hero() {
  const scrollToAbout = () => {
    const aboutElem = document.getElementById("about");
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=75&w=1600&auto=format&fit=crop"
          alt="Luxury Thai Massage Suite & Spa Sanctuary in Banani Dhaka"
          fill
          priority
          fetchPriority="high"
          decoding="sync"
          sizes="100vw"
          className="object-cover object-center animate-slow-zoom brightness-[0.45]"
        />
        {/* Dark Cinematic Vignette & Radial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-[#0B0B0B]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,11,11,0.85)_100%)]" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16">
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-3 mb-4 px-4 py-1.5 rounded-full border border-[#C9A45C]/30 bg-[#0B0B0B]/40 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#C9A45C]">
            PREMIUM WELLNESS EXPERIENCE
          </span>
        </div>

        {/* Main H1 Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5F1E8] mb-6 leading-[1.12]">
          Relaxing Spa Dhaka <br />
          <span className="italic font-light text-[#C9A45C] text-2xl sm:text-4xl md:text-5xl">
            Thai Massage & Spa in Banani, Dhaka
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#A8A8A8] max-w-2xl font-light leading-relaxed mb-8 tracking-wide">
          Experience a premium Thai-inspired spa and wellness journey in the heart of Banani, Dhaka.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all duration-300 rounded-sm shadow-[0_0_30px_rgba(201,164,92,0.35)] hover:shadow-[0_0_40px_rgba(201,164,92,0.6)] transform hover:-translate-y-0.5"
          >
            BOOK YOUR EXPERIENCE
          </button>
          <a
            href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a spa session.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#F5F1E8] bg-white/5 hover:bg-white/10 border border-[#C9A45C]/40 hover:border-[#C9A45C] transition-all duration-300 rounded-sm backdrop-blur-sm"
          >
            <MessageSquare size={16} className="text-[#C9A45C]" />
            WHATSAPP US
          </a>
        </div>

        {/* Location Label */}
        <div className="flex items-center justify-center space-x-2 text-[11px] sm:text-xs text-[#A8A8A8] tracking-[0.25em] uppercase font-light">
          <MapPin size={13} className="text-[#C9A45C]" />
          <span>KAMAL ATATURK AVENUE • BANANI • DHAKA</span>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center space-y-2 text-[#A8A8A8] hover:text-[#C9A45C] transition-colors focus:outline-none"
        aria-label="Scroll down to About section"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-light">EXPLORE</span>
        <ChevronDown size={18} className="animate-bounce text-[#C9A45C]" />
      </motion.button>
    </section>
  );
}
