"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("services-offered");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#151515] border-t border-[#C9A45C]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-3">
            GUEST INFORMATION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E8] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed">
            Everything you need to know about preparing for your luxury spa experience in Banani, Dhaka.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#0B0B0B] border border-[#C9A45C]/20 hover:border-[#C9A45C]/50 rounded-sm transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:bg-[#151515]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-serif text-lg sm:text-xl font-normal text-[#F5F1E8] hover:text-[#C9A45C] transition-colors">
                    {faq.question}
                  </span>
                  <span className="ml-4 p-1.5 rounded-full bg-[#151515] text-[#C9A45C]">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed border-t border-[#C9A45C]/10"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
