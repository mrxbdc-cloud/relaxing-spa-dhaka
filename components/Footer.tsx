"use client";

import Link from "next/link";
import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#C9A45C]/30 text-[#A8A8A8] pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & NAP */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors">
                RELAXING SPA
              </span>
              <span className="block text-[10px] tracking-[0.35em] text-[#C9A45C] uppercase font-light -mt-1">
                DHAKA • BANANI
              </span>
            </Link>
            <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
              Premier Thai-inspired luxury spa and wellness sanctuary in Banani, Dhaka. Serving guests in Banani, Gulshan, and across Dhaka with authentic bodywork, private suites, and personal renewal.
            </p>
            <div className="pt-2 text-xs font-light text-[#C9A45C]">
              <p>Physical Location: Banani, Dhaka 1213</p>
              <p className="text-[11px] text-[#A8A8A8] mt-0.5">5-10 mins away from Gulshan 1 & Gulshan 2</p>
            </div>
          </div>

          {/* Column 2: Quick Links & Information */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5F1E8] mb-4">
              SANCTUARY PAGES
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#C9A45C] transition-colors font-light tracking-wider">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-[#C9A45C] transition-colors font-light tracking-wider">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/" className="hover:text-[#C9A45C] transition-colors font-light tracking-wider">
                  Services & Pricing Hub
                </Link>
              </li>
              <li>
                <Link href="/locations/" className="hover:text-[#C9A45C] transition-colors font-light tracking-wider">
                  Spa Locations Hub
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="hover:text-[#C9A45C] transition-colors font-light tracking-wider">
                  Spa Suite Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="hover:text-[#C9A45C] transition-colors font-light tracking-wider">
                  Guest FAQ
                </Link>
              </li>
              <li>
                <Link href="/spa-near-me/" className="hover:text-[#C9A45C] transition-colors font-light tracking-wider">
                  Spa Near Me Guide
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-[#C9A45C] transition-colors font-light tracking-wider">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Primary Strategic Locations & Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5F1E8] mb-4">
              LOCATIONS & TREATMENTS
            </h3>
            <ul className="space-y-2 text-xs font-light tracking-wide">
              <li><Link href="/locations/spa-in-banani/" className="hover:text-[#C9A45C] transition-colors font-semibold text-[#F5F1E8]">Spa in Banani (Primary Branch)</Link></li>
              <li><Link href="/locations/spa-in-gulshan/" className="hover:text-[#C9A45C] transition-colors font-semibold text-[#F5F1E8]">Spa in Gulshan (5-10 mins)</Link></li>
              <li><Link href="/locations/spa-in-dhaka/" className="hover:text-[#C9A45C] transition-colors font-semibold text-[#F5F1E8]">Spa in Dhaka (Metropolitan)</Link></li>
              <li className="pt-2 border-t border-white/5"><Link href="/services/thai-massage/" className="hover:text-[#C9A45C] transition-colors">Thai Massage (৳4,500)</Link></li>
              <li><Link href="/services/oil-massage/" className="hover:text-[#C9A45C] transition-colors">Oil Massage (৳5,500)</Link></li>
              <li><Link href="/services/hot-stone-massage/" className="hover:text-[#C9A45C] transition-colors">Hot Stone Massage (৳6,500)</Link></li>
              <li><Link href="/services/aroma-body-massage/" className="hover:text-[#C9A45C] transition-colors">Aroma Body Massage (৳7,500)</Link></li>
              <li><Link href="/services/deep-tissue-massage/" className="hover:text-[#C9A45C] transition-colors">Deep Tissue Massage (৳8,000)</Link></li>
              <li><Link href="/services/couple-massage/" className="hover:text-[#C9A45C] transition-colors">Couple Massage (৳16,500)</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5F1E8] mb-4">
              CONTACT & HOURS
            </h3>
            <div className="space-y-3 text-xs font-light">
              <p className="flex items-start space-x-2">
                <MapPin size={14} className="text-[#C9A45C] shrink-0 mt-0.5" />
                <span>Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone size={14} className="text-[#C9A45C] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#C9A45C] transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <MessageSquare size={14} className="text-[#C9A45C] shrink-0" />
                <a
                  href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a spa session.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A45C] transition-colors"
                >
                  WhatsApp Booking Available
                </a>
              </p>
              <p className="flex items-center space-x-2 pt-1 border-t border-white/5 text-[#C9A45C]">
                <Clock size={14} className="shrink-0" />
                <span>Opening Hours: {BUSINESS_INFO.openingHours}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8A8A8]/80 font-light gap-4">
          <p>© 2026 Relaxing Spa Dhaka. All Rights Reserved. Banani, Dhaka, Bangladesh.</p>
          <div className="flex space-x-6">
            <Link href="/contact/" className="hover:text-[#C9A45C] transition-colors">Contact</Link>
            <Link href="/faq/" className="hover:text-[#C9A45C] transition-colors">FAQ</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
