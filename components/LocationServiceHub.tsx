import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Clock, MapPin, Phone, MessageSquare, ArrowRight, Shield, Star, Award } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/lib/utils";

export interface RelevantLink {
  title: string;
  href: string;
  badge?: string;
}

export interface HubProps {
  h1Title: string;
  heroTagline: string;
  leadParagraph: string;
  detailedContent: string[];
  pricingOptions?: { duration: string; price: string; highlight?: boolean }[];
  keyBenefits: string[];
  relevantLinks: RelevantLink[];
  imageSrc: string;
  imageAlt: string;
  primaryLocationText?: string;
  nearGulshanText?: string;
  bookingMessage?: string;
}

export default function LocationServiceHub({
  h1Title,
  heroTagline,
  leadParagraph,
  detailedContent,
  pricingOptions,
  keyBenefits,
  relevantLinks,
  imageSrc,
  imageAlt,
  primaryLocationText = "Located at Kamal Ataturk Avenue, Banani, Dhaka 1213",
  nearGulshanText = "Conveniently situated just minutes from Gulshan 1 & Gulshan 2.",
  bookingMessage,
}: HubProps) {
  const whatsappUrl = getWhatsAppUrl(bookingMessage || `Hello Relaxing Spa Dhaka, I would like to book a session for ${h1Title}.`);

  return (
    <div className="bg-[#0B0B0B] text-[#F5F1E8]">
      {/* Editorial Content Section */}
      <section className="py-16 md:py-24 border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Main Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
                  {heroTagline}
                </span>
                <p className="text-base sm:text-lg text-[#F5F1E8] font-medium leading-relaxed mb-6">
                  {leadParagraph}
                </p>
              </div>

              {/* Main Image for mobile/desktop flow */}
              <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-[#C9A45C]/30 shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />
              </div>

              {/* Detailed Content Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed">
                {detailedContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Highlights / Benefits */}
              <div className="bg-[#151515] p-6 sm:p-8 rounded-sm border border-[#C9A45C]/20">
                <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E8] mb-4">
                  Why Choose Relaxing Spa Dhaka
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#A8A8A8]">
                  {keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column: Pricing & Booking */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              {/* Pricing & Duration Card */}
              {pricingOptions && pricingOptions.length > 0 && (
                <div className="bg-[#151515] p-6 sm:p-8 rounded-sm border border-[#C9A45C]/30 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-[#C9A45C]/20 pb-4 mb-6">
                    <div>
                      <span className="text-[10px] tracking-[0.25em] text-[#C9A45C] uppercase font-semibold block">
                        SESSION OPTIONS
                      </span>
                      <h3 className="font-serif text-2xl text-[#F5F1E8]">Rates & Duration</h3>
                    </div>
                    <Clock size={22} className="text-[#C9A45C]" />
                  </div>

                  <div className="space-y-3 mb-6">
                    {pricingOptions.map((option, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between p-3.5 rounded-sm border transition-all ${
                          option.highlight
                            ? "bg-[#C9A45C]/10 border-[#C9A45C]"
                            : "bg-[#0B0B0B] border-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-[#C9A45C]" />
                          <span className="text-xs font-semibold tracking-wider text-[#F5F1E8]">
                            {option.duration}
                          </span>
                        </div>
                        <span className="font-serif text-xl font-semibold text-[#C9A45C]">
                          {option.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-[0_0_20px_rgba(201,164,92,0.3)]"
                  >
                    <MessageSquare size={16} />
                    <span>BOOK VIA WHATSAPP</span>
                  </a>

                  <p className="text-[11px] text-[#A8A8A8] text-center mt-3 font-light">
                    Direct confirmation via WhatsApp • Private Suite Guaranteed
                  </p>
                </div>
              )}

              {/* Verified Location Box */}
              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/20 space-y-4">
                <div className="flex items-center gap-2 text-[#C9A45C] text-xs font-semibold uppercase tracking-wider">
                  <MapPin size={16} />
                  <span>VERIFIED LOCATION</span>
                </div>
                <p className="text-xs text-[#F5F1E8] font-medium leading-relaxed">
                  {BUSINESS_INFO.name}
                </p>
                <p className="text-xs text-[#A8A8A8] font-light">
                  {primaryLocationText}
                </p>
                <p className="text-[11px] text-[#C9A45C]/90 font-light border-t border-white/5 pt-2">
                  {nearGulshanText}
                </p>
                <div className="pt-2 text-xs text-[#A8A8A8] flex items-center justify-between border-t border-white/5">
                  <span>Phone: {BUSINESS_INFO.phone}</span>
                  <span>Hours: 10 AM – 11 PM</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contextual Internal Links Section */}
      {relevantLinks && relevantLinks.length > 0 && (
        <section className="py-16 bg-[#151515] border-b border-[#C9A45C]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] tracking-[0.3em] text-[#C9A45C] uppercase font-semibold block mb-2">
                EXPLORE RELATED SERVICES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                Related Therapies & Local Hubs
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relevantLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group bg-[#0B0B0B] p-5 rounded-sm border border-[#C9A45C]/20 hover:border-[#C9A45C] transition-all flex items-center justify-between"
                >
                  <div>
                    {link.badge && (
                      <span className="text-[9px] tracking-[0.2em] font-semibold text-[#C9A45C] uppercase block mb-1">
                        {link.badge}
                      </span>
                    )}
                    <span className="font-serif text-lg text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors">
                      {link.title}
                    </span>
                  </div>
                  <ArrowRight size={16} className="text-[#C9A45C] group-hover:translate-x-1 transition-transform shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
