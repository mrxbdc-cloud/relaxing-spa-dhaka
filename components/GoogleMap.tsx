"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/utils";

export default function GoogleMap() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[400px] sm:h-[480px] bg-[#0B0B0B] border-t border-[#C9A45C]/20 overflow-hidden"
    >
      {/* Location Badge Banner */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10 bg-[#0B0B0B]/90 backdrop-blur-md border border-[#C9A45C]/40 px-6 py-2.5 rounded-full shadow-2xl flex items-center space-x-2 text-xs text-[#F5F1E8]">
        <MapPin size={16} className="text-[#C9A45C]" />
        <span className="font-medium tracking-wide">
          {BUSINESS_INFO.name} • {BUSINESS_INFO.shortAddress}
        </span>
      </div>

      {isVisible ? (
        <iframe
          title="Relaxing Spa Dhaka - Banani Heaven Location Map"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7080776290477!2d90.40492827389416!3d23.793407487126668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72082f69c33%3A0x5617b6a2678fe7ad!2sRelaxing%20Spa%20Dhaka%20-%20Banani%20Heaven!5e0!3m2!1sen!2sbd!4v1787388453682!5m2!1sen!2sbd"
        />
      ) : (
        <div className="w-full h-full bg-[#0B0B0B] animate-pulse flex items-center justify-center text-xs text-[#A8A8A8] tracking-widest uppercase">
          Loading Location Map...
        </div>
      )}
    </section>
  );
}
