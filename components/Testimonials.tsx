"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0B0B] border-t border-[#C9A45C]/20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-3">
            GUEST FEEDBACK
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E8] mb-4">
            What Our Guests Say
          </h2>
          <div className="w-16 h-[1px] bg-[#C9A45C]/60 mx-auto" />
        </div>

        {/* Carousel Container */}
        <div className="relative bg-[#151515] border border-[#C9A45C]/30 rounded-sm p-8 sm:p-14 text-center shadow-2xl min-h-[320px] flex flex-col justify-between">
          <Quote size={40} className="text-[#C9A45C]/20 absolute top-6 left-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center my-auto"
            >
              {/* Star Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#C9A45C] text-[#C9A45C]" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#F5F1E8] italic leading-relaxed mb-6 max-w-3xl">
                "{activeTestimonial.comment}"
              </p>

              {/* Guest Details */}
              <span className="text-sm font-semibold tracking-widest text-[#C9A45C] uppercase block">
                {activeTestimonial.name}
              </span>
              <span className="text-xs text-[#A8A8A8] font-light tracking-wide mt-0.5">
                {activeTestimonial.location} • {activeTestimonial.treatment}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-[#C9A45C]/20 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 text-[#A8A8A8] hover:text-[#C9A45C] transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? "w-6 bg-[#C9A45C]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 text-[#A8A8A8] hover:text-[#C9A45C] transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
