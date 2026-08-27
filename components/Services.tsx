"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageSquare } from "lucide-react";
import { SERVICES } from "@/data/services";
import { getServiceWhatsAppUrl } from "@/lib/utils";

export default function Services() {
  // Filter and sort the 10 main homepage services by homepageOrder
  const homepageServices = SERVICES.filter((s) => s.homepageOrder !== undefined).sort(
    (a, b) => (a.homepageOrder || 0) - (b.homepageOrder || 0)
  );

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#151515] border-t border-[#C9A45C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-3"
          >
            WELLNESS RITUALS & PRICING
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E8] mb-6 leading-tight"
          >
            Signature Spa Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed"
          >
            Thoughtfully designed treatments created to help you slow down, unwind and feel renewed. All sessions are 60 minutes of pure tranquility.
          </motion.p>
        </div>

        {/* 10 Homepage Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homepageServices.map((service, index) => {
            const serviceUrl = `/services/${service.slug}/`;
            const whatsappUrl = getServiceWhatsAppUrl(service.name, "60 minutes");

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-[#0B0B0B] rounded-sm border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_10px_30px_rgba(201,164,92,0.15)]"
              >
                {/* Service Image */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} Treatment in Banani Dhaka at Relaxing Spa Dhaka`}
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                  
                  {service.featured && (
                    <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] font-semibold uppercase bg-[#C9A45C] text-[#0B0B0B] px-3 py-1 rounded-sm shadow-md">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-3">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div>
                    {/* Duration Badge & Price Display */}
                    <div className="mb-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-[#A8A8A8] font-medium bg-[#151515] px-3 py-1.5 rounded-sm border border-white/5">
                        <Clock size={14} className="text-[#C9A45C]" />
                        <span>{service.duration}</span>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-[#A8A8A8] uppercase tracking-wider block font-light">PRICE</span>
                        <span className="font-serif text-2xl font-semibold text-[#C9A45C]">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons: Discover & Book Now */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <Link
                        href={serviceUrl}
                        className="inline-flex items-center justify-center gap-1 px-4 py-2.5 text-[11px] font-semibold tracking-wider uppercase text-[#F5F1E8] bg-[#151515] hover:bg-white/10 border border-[#C9A45C]/30 hover:border-[#C9A45C] transition-all rounded-sm text-center"
                      >
                        <span>DISCOVER</span>
                        <ArrowRight size={12} />
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 px-4 py-2.5 text-[11px] font-semibold tracking-wider uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm text-center shadow-md"
                      >
                        <span>BOOK NOW</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Hub CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#F5F1E8] bg-[#0B0B0B] border border-[#C9A45C]/40 hover:border-[#C9A45C] hover:text-[#C9A45C] transition-all rounded-sm"
          >
            <span>VIEW ALL SPA SERVICES CATALOG</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
