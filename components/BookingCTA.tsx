"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, Calendar } from "lucide-react";
import { getWhatsAppUrl, BUSINESS_INFO } from "@/lib/utils";

export default function BookingCTA() {
  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#0B0B0B] overflow-hidden border-t border-[#C9A45C]/20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop"
          alt="Relaxing Spa Dhaka Luxury Interior on Kamal Ataturk Avenue Banani"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-[#0B0B0B]/80 to-[#0B0B0B]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-4"
        >
          RESERVE YOUR SESSION
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F1E8] mb-6 leading-tight"
        >
          Your Time To Relax Starts Here
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-[#A8A8A8] font-light leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Step away from the everyday and discover a calmer, more comfortable experience in Banani, Dhaka.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-[0_0_30px_rgba(201,164,92,0.4)] hover:-translate-y-0.5"
          >
            BOOK YOUR EXPERIENCE
          </button>
          <a
            href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a spa session.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#F5F1E8] bg-white/5 hover:bg-white/10 border border-[#C9A45C]/40 hover:border-[#C9A45C] transition-all rounded-sm backdrop-blur-sm"
          >
            <MessageSquare size={16} className="text-[#C9A45C]" />
            WHATSAPP US
          </a>
        </motion.div>
      </div>
    </section>
  );
}
