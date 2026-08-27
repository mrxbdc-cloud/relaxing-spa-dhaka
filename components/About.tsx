"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl font-normal text-[#C9A45C]">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vertical Image with Gold Framing Detail */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden border border-[#C9A45C]/30 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=75&w=800&auto=format&fit=crop"
                alt="Serene Thai Massage Treatment Suite at Relaxing Spa Dhaka Banani"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />
            </div>
            
            {/* Subtle Gold Accent Box Overlay */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col justify-center p-6 bg-[#151515] border border-[#C9A45C]/40 rounded-sm shadow-xl max-w-[200px]">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A45C] font-semibold">
                TRADITIONAL HEALING
              </span>
              <p className="text-xs text-[#F5F1E8] font-light mt-1">
                Authentic Thai techniques tailored for modern wellness.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold mb-3">
              ABOUT RELAXING SPA DHAKA
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E8] mb-6 leading-[1.15]">
              A Sanctuary Away From <br className="hidden sm:inline" />
              <span className="italic font-light text-[#C9A45C]">The Everyday</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed mb-10">
              <p>
                Welcome to <strong className="text-[#F5F1E8] font-medium">Relaxing Spa Dhaka</strong>, Banani’s premier sanctuary dedicated to the art of peaceful restoration. Designed to shield you from the fast-paced energy of urban life, our center offers a quiet haven where mind, body, and spirit align in harmony.
              </p>
              <p>
                Rooted in authentic Thai-inspired wellness principles, our treatments integrate gentle rhythmic pressure, therapeutic aromatherapy oils, and mindful bodywork. Every session takes place in a warm, pristine private room, providing you with full comfort, quietude, and personalized care.
              </p>
              <p>
                Whether you seek to release physical tension after work or simply dedicate time to personal self-care, our professional specialists are committed to delivering an unsurpassed luxury experience.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#C9A45C]/20">
              <div className="flex flex-col">
                <Counter end={10} suffix="+" />
                <span className="text-[11px] text-[#A8A8A8] uppercase tracking-wider font-medium mt-1">
                  Signature Experiences
                </span>
              </div>
              <div className="flex flex-col">
                <Counter end={12} suffix="+" />
                <span className="text-[11px] text-[#A8A8A8] uppercase tracking-wider font-medium mt-1">
                  Treatments
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#C9A45C]">
                  Expert
                </span>
                <span className="text-[11px] text-[#A8A8A8] uppercase tracking-wider font-medium mt-1">
                  Therapists
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#C9A45C]">
                  Private
                </span>
                <span className="text-[11px] text-[#A8A8A8] uppercase tracking-wider font-medium mt-1">
                  Treatment Suites
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
