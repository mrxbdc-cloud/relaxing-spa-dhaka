"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl, BUSINESS_INFO } from "@/lib/utils";

const PRIMARY_NAV = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about/" },
  { name: "SERVICES", href: "/services/" },
  { name: "LOCATIONS", href: "/locations/" },
  { name: "GALLERY", href: "/gallery/" },
  { name: "FAQ", href: "/faq/" },
  { name: "CONTACT", href: "/contact/" },
];

const SERVICE_NAV = [
  { name: "Spa in Banani (Branch)", href: "/locations/spa-in-banani/" },
  { name: "Spa in Gulshan (5-10m)", href: "/locations/spa-in-gulshan/" },
  { name: "Spa in Dhaka (City)", href: "/locations/spa-in-dhaka/" },
  { name: "Services Catalog & Prices", href: "/services/" },
  { name: "Thai Massage (৳4,500)", href: "/services/thai-massage/" },
  { name: "Aroma Oil Massage (৳7,500)", href: "/services/aroma-body-massage/" },
  { name: "Deep Tissue Massage (৳8,000)", href: "/services/deep-tissue-massage/" },
  { name: "Couple Massage (৳16,500)", href: "/services/couple-massage/" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-4 shadow-2xl bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#C9A45C]/20"
            : "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LEFT: Logo Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none"
            aria-label="Relaxing Spa Dhaka Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors duration-300">
              RELAXING SPA
            </span>
            <span className="text-[10px] tracking-[0.35em] text-[#C9A45C] font-light uppercase -mt-1">
              DHAKA • BANANI • GULSHAN
            </span>
          </Link>

          {/* CENTER: Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7" aria-label="Main Navigation">
            <Link
              href="/"
              className={`relative text-xs tracking-[0.18em] font-medium transition-colors duration-300 py-1 group ${
                pathname === "/" ? "text-[#C9A45C]" : "text-[#F5F1E8]/90 hover:text-[#C9A45C]"
              }`}
            >
              HOME
              <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A45C] transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>

            <Link
              href="/about/"
              className={`relative text-xs tracking-[0.18em] font-medium transition-colors duration-300 py-1 group ${
                pathname === "/about/" ? "text-[#C9A45C]" : "text-[#F5F1E8]/90 hover:text-[#C9A45C]"
              }`}
            >
              ABOUT
              <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A45C] transition-all duration-300 ${pathname === "/about/" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>

            <Link
              href="/services/"
              className={`relative text-xs tracking-[0.18em] font-medium transition-colors duration-300 py-1 group ${
                pathname.startsWith("/services") ? "text-[#C9A45C]" : "text-[#F5F1E8]/90 hover:text-[#C9A45C]"
              }`}
            >
              SERVICES
              <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A45C] transition-all duration-300 ${pathname.startsWith("/services") ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>

            {/* LOCATIONS Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link
                href="/locations/"
                className="flex items-center gap-1 text-xs tracking-[0.18em] font-medium text-[#F5F1E8]/90 hover:text-[#C9A45C] transition-colors duration-300 py-1 group"
                aria-expanded={isServicesDropdownOpen}
              >
                LOCATIONS
                <ChevronDown size={14} className={`text-[#C9A45C] transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
              </Link>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-[#111111] border border-[#C9A45C]/30 rounded-sm shadow-2xl py-3 z-50 backdrop-blur-xl"
                  >
                    <div className="px-4 py-1.5 text-[10px] tracking-[0.25em] text-[#C9A45C] uppercase font-semibold border-b border-[#C9A45C]/20 mb-1">
                      KEY LOCATIONS & SERVICES
                    </div>
                    {SERVICE_NAV.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-xs text-[#F5F1E8]/80 hover:text-[#C9A45C] hover:bg-[#C9A45C]/10 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/gallery/"
              className={`relative text-xs tracking-[0.18em] font-medium transition-colors duration-300 py-1 group ${
                pathname === "/gallery/" ? "text-[#C9A45C]" : "text-[#F5F1E8]/90 hover:text-[#C9A45C]"
              }`}
            >
              GALLERY
              <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A45C] transition-all duration-300 ${pathname === "/gallery/" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>

            <Link
              href="/contact/"
              className={`relative text-xs tracking-[0.18em] font-medium transition-colors duration-300 py-1 group ${
                pathname === "/contact/" ? "text-[#C9A45C]" : "text-[#F5F1E8]/90 hover:text-[#C9A45C]"
              }`}
            >
              CONTACT
              <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C9A45C] transition-all duration-300 ${pathname === "/contact/" ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          </nav>

          {/* RIGHT: Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a spa session.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(201,164,92,0.3)] hover:shadow-[0_0_25px_rgba(201,164,92,0.5)] transform hover:-translate-y-0.5"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile Right Controls: Call Button & Hamburger Menu */}
          <div className="flex items-center space-x-1 md:hidden">
            {/* Minimal Gold Phone Call Button */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              aria-label="Call Relaxing Spa Dhaka"
              className="p-2 text-[#C9A45C] hover:text-[#E2C889] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C9A45C]/50 rounded-sm"
            >
              <Phone size={22} className="text-[#C9A45C]" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#F5F1E8] hover:text-[#C9A45C] focus:outline-none focus:ring-1 focus:ring-[#C9A45C]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0B0B0B] flex flex-col justify-between px-6 pt-24 pb-10 overflow-y-auto md:hidden"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A45C] font-semibold">
                SANCTUARY NAVIGATION
              </span>
              <div className="w-12 h-[1px] bg-[#C9A45C]/40" />

              <nav className="flex flex-col space-y-3 w-full max-w-sm" aria-label="Mobile Navigation">
                {PRIMARY_NAV.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-xl tracking-[0.15em] text-[#F5F1E8] hover:text-[#C9A45C] transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="pt-3 border-t border-white/10 w-full text-left">
                  <span className="text-[10px] tracking-[0.25em] text-[#C9A45C] uppercase font-semibold block mb-2 text-center">
                    PRIMARY LOCATIONS & SERVICES
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-[#A8A8A8] text-center">
                    {SERVICE_NAV.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="py-1 hover:text-[#C9A45C] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </div>

            <div className="flex flex-col items-center space-y-4 pt-6 border-t border-[#C9A45C]/20">
              <a
                href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a spa session.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-lg"
              >
                BOOK NOW
              </a>
              <div className="flex items-center justify-center space-x-6 text-xs text-[#A8A8A8] tracking-wider pt-1">
                <span className="flex items-center gap-1.5">
                  <Phone size={14} className="text-[#C9A45C]" /> {BUSINESS_INFO.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageSquare size={14} className="text-[#C9A45C]" /> WhatsApp
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
