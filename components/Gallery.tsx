"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop";

export default function Gallery() {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [imageErrorMap, setImageErrorMap] = useState<{ [key: string]: boolean }>({});

  const handleNext = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex + 1) % GALLERY_ITEMS.length);
    }
  }, [activeItemIndex]);

  const handlePrev = useCallback(() => {
    if (activeItemIndex !== null) {
      setActiveItemIndex((activeItemIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  }, [activeItemIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === "Escape") setActiveItemIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [activeItemIndex, handleNext, handlePrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (activeItemIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeItemIndex, handleKeyDown]);

  const handleImageError = (itemId: string) => {
    setImageErrorMap((prev) => ({ ...prev, [itemId]: true }));
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#151515] border-t border-[#C9A45C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-3"
          >
            VISUAL ATMOSPHERE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E8] mb-6 leading-tight"
          >
            Sanctuary Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed"
          >
            Take a visual tour through our tranquil treatment suites, soothing aromatics, and pristine Thai spa environment.
          </motion.p>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, idx) => {
            const hasError = imageErrorMap[item.id];
            const imgSrc = hasError ? FALLBACK_IMAGE : item.image;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setActiveItemIndex(idx)}
                className="group relative h-64 sm:h-72 w-full rounded-sm overflow-hidden border border-[#C9A45C]/20 hover:border-[#C9A45C] cursor-pointer shadow-md"
              >
                <Image
                  src={imgSrc}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  onError={() => handleImageError(item.id)}
                />

                {/* Hover Dark Overlay & Icon */}
                <div className="absolute inset-0 bg-[#0B0B0B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#C9A45C] text-[#0B0B0B] flex items-center justify-center mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 size={18} />
                  </div>
                  <span className="font-serif text-lg text-[#F5F1E8]">{item.title}</span>
                  <span className="text-[10px] tracking-[0.2em] text-[#C9A45C] uppercase mt-1">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8"
          >
            {/* Top Bar: Counter & Close Button */}
            <div className="w-full max-w-6xl flex items-center justify-between z-50 pt-2 pb-4">
              <div className="text-xs tracking-[0.25em] text-[#C9A45C] uppercase font-semibold">
                IMAGE {activeItemIndex + 1} OF {GALLERY_ITEMS.length}
              </div>
              <button
                onClick={() => setActiveItemIndex(null)}
                className="p-3 text-[#F5F1E8] hover:text-[#C9A45C] bg-white/10 hover:bg-white/20 rounded-full transition-all focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close fullscreen view"
              >
                <X size={24} />
              </button>
            </div>

            {/* Middle Container: Image & Nav Buttons */}
            <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center min-h-0 my-auto">
              
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-50 p-3 text-[#F5F1E8] hover:text-[#C9A45C] bg-black/60 hover:bg-black/80 border border-[#C9A45C]/30 rounded-full transition-all focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Lightbox Image Box */}
              <div className="relative w-full h-full max-h-[65vh] sm:max-h-[75vh] flex items-center justify-center px-12 sm:px-16">
                <Image
                  key={GALLERY_ITEMS[activeItemIndex].id}
                  src={
                    imageErrorMap[GALLERY_ITEMS[activeItemIndex].id]
                      ? FALLBACK_IMAGE
                      : GALLERY_ITEMS[activeItemIndex].image
                  }
                  alt={GALLERY_ITEMS[activeItemIndex].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 85vw"
                  className="object-contain max-h-full max-w-full rounded-sm"
                  priority
                  onError={() => handleImageError(GALLERY_ITEMS[activeItemIndex].id)}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-50 p-3 text-[#F5F1E8] hover:text-[#C9A45C] bg-black/60 hover:bg-black/80 border border-[#C9A45C]/30 rounded-full transition-all focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="w-full max-w-4xl text-center z-50 pt-4 pb-2">
              <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E8] font-normal">
                {GALLERY_ITEMS[activeItemIndex].title}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#C9A45C] tracking-[0.2em] uppercase mt-1">
                {GALLERY_ITEMS[activeItemIndex].category}
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
