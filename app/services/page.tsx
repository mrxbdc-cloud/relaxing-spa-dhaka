import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";
import { Clock, ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/services";
import { getServiceWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Spa Services & Verified Pricing | Relaxing Spa Dhaka",
  description:
    "Explore Relaxing Spa Dhaka's official service catalog and verified pricing in Banani. Traditional Thai massage (৳4,500), Aroma oil (৳7,500), Deep Tissue (৳8,000), Couple massage (৳16,500). All sessions 60 mins.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/services/",
  },
  openGraph: {
    title: "Spa Services & Verified Pricing | Relaxing Spa Dhaka",
    description:
      "Explore Relaxing Spa Dhaka's official service catalog and verified pricing in Banani. Traditional Thai massage, Aroma oil, Deep Tissue, Couple massage. All sessions 60 mins.",
    url: "https://relaxingspadhaka.com/services/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Relaxing Spa Dhaka Verified Spa Services Catalog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Services & Verified Pricing | Relaxing Spa Dhaka",
    description:
      "Official spa service catalog & verified pricing in Banani. Thai, Oil, Hot Stone, Deep Tissue, Couple sessions.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function ServicesHubPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Services", url: "https://relaxingspadhaka.com/services/" },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/services/"
        title="Spa Services & Verified Pricing | Relaxing Spa Dhaka"
        description="Explore Relaxing Spa Dhaka's official service catalog and verified pricing in Banani."
        breadcrumbs={breadcrumbs}
      />
      <Navbar />

      <SubpageHero
        title="Verified Spa Services & Pricing"
        subtitle="FULL WELLNESS CATALOG • 60-MINUTE SESSIONS"
        description="Browse Relaxing Spa Dhaka's official catalog of authentic Thai bodywork, organic oil therapies, hot stone sessions, multi-hand rituals, and private couple packages in Banani."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Main Service List Section */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
              VERIFIED PRICING DIRECTORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8]">
              All Services Are 60 Minutes
            </h2>
            <p className="text-sm text-[#A8A8A8] font-light mt-3">
              We maintain complete pricing transparency across our entire service offering. Every session is conducted in a private, quiet climate-controlled suite.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const serviceUrl = `/services/${service.slug}/`;
              const whatsappUrl = getServiceWhatsAppUrl(service.name, "60 minutes");

              return (
                <div
                  key={service.id}
                  className="group bg-[#151515] rounded-sm border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.name} at Relaxing Spa Dhaka`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-2xl text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-2">
                        {service.name}
                      </h3>
                      <p className="text-xs text-[#A8A8A8] font-light leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div>
                      <div className="mb-6 pt-4 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-[#A8A8A8] bg-[#0B0B0B] px-3 py-1.5 rounded-sm border border-white/5 font-medium">
                          <Clock size={14} className="text-[#C9A45C]" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-[#A8A8A8] uppercase tracking-wider block font-light">EXACT PRICE</span>
                          <span className="font-serif text-2xl font-bold text-[#C9A45C]">
                            {service.price}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <Link
                          href={serviceUrl}
                          className="inline-flex items-center justify-center gap-1 px-4 py-2.5 text-[11px] font-semibold tracking-wider uppercase text-[#F5F1E8] bg-[#0B0B0B] hover:bg-white/10 border border-[#C9A45C]/30 hover:border-[#C9A45C] transition-all rounded-sm text-center"
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
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <BookingCTA />
      <Footer />
      <WhatsAppButton />
      <MobileBookingBar />
    </main>
  );
}
