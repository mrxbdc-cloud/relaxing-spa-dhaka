import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";
import { CheckCircle2, Clock, MapPin, Phone, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Aroma Oil Massage in Dhaka | Relaxing Spa Dhaka",
  description:
    "Indulge in an aroma oil massage in Dhaka at Relaxing Spa Dhaka in Banani. Soothing essential botanical oils, gentle full body strokes, and private sanctuary suites.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/aroma-oil-massage-dhaka/",
  },
  openGraph: {
    title: "Aroma Oil Massage in Dhaka | Relaxing Spa Dhaka",
    description:
      "Indulge in an aroma oil massage in Dhaka at Relaxing Spa Dhaka in Banani. Soothing essential botanical oils, gentle full body strokes, and private sanctuary suites.",
    url: "https://relaxingspadhaka.com/aroma-oil-massage-dhaka/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Aroma Oil Massage in Dhaka - Relaxing Spa Dhaka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aroma Oil Massage in Dhaka | Relaxing Spa Dhaka",
    description:
      "Indulge in an aroma oil massage in Dhaka at Relaxing Spa Dhaka in Banani.",
    images: ["https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function AromaOilMassageDhakaPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Spa in Dhaka", url: "https://relaxingspadhaka.com/locations/spa-in-dhaka/" },
    { name: "Aroma Oil Massage", url: "https://relaxingspadhaka.com/aroma-oil-massage-dhaka/" },
  ];

  const aromaFaqs = [
    {
      question: "What essential oils are used for Aroma Oil Massage?",
      answer: "We use organic botanical essential oils including lavender, eucalyptus, bergamot, and sweet almond oils blended for relaxation and skin nourishment.",
    },
    {
      question: "Where in Dhaka is the aroma oil session conducted?",
      answer: "Our physical spa sanctuary is located on Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/aroma-oil-massage-dhaka/"
        title="Aroma Oil Massage in Dhaka | Relaxing Spa Dhaka"
        description="Indulge in an aroma oil massage in Dhaka at Relaxing Spa Dhaka in Banani. Soothing essential botanical oils, gentle full body strokes, and private sanctuary suites."
        breadcrumbs={breadcrumbs}
        serviceName="Aroma Oil Massage Therapy"
        serviceDescription="Full body aromatherapy session using customized essential oils to calm the nervous system and relieve muscular tightness in Banani, Dhaka."
        faqs={aromaFaqs}
      />
      <Navbar />

      <SubpageHero
        title="Aroma Oil Massage in Dhaka"
        subtitle="ESSENTIAL BOTANICAL THERAPY"
        description="Immerse your senses in custom-blended botanical essential oils. Gentle, fluid strokes combined with warm aromatic steam calm your nervous system and nourish skin in Banani."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Content Body */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
                  AROMATHERAPY WELLNESS IN DHAKA
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] mb-4">
                  Soothe Mind & Body with Aroma Oil Massage
                </h2>
                <p className="text-base text-[#A8A8A8] font-light leading-relaxed mb-4">
                  Our <strong className="text-[#F5F1E8] font-medium">Aroma Oil Massage in Dhaka</strong> combines soft to medium bodywork strokes with pure plant-extracted essential oils.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Conducted in quiet private suites on <strong className="text-[#F5F1E8]">Kamal Ataturk Avenue in Banani</strong>, this therapy is ideal for calming mental stress, easing tension, and encouraging deep sleep.
                </p>
              </div>

              {/* Pricing */}
              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/30 space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8]">
                  Aroma Oil Massage Price
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center p-3 bg-[#151515] rounded-sm border border-[#C9A45C]/30">
                    <span className="font-medium text-[#F5F1E8]">60 MIN SESSION</span>
                    <span className="font-serif text-lg text-[#C9A45C]">৳7,500</span>
                  </div>
                </div>
                <p className="text-xs text-[#A8A8A8] font-light">
                  Session conducted in a private, climate-controlled suite at our Banani sanctuary. No hidden charges.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 shadow-2xl space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8] border-b border-[#C9A45C]/20 pb-3">
                  Book Aroma Oil Massage
                </h3>
                <p className="text-xs text-[#A8A8A8]">
                  Kamal Ataturk Avenue, Banani, Dhaka 1213. Phone: {BUSINESS_INFO.phone}
                </p>

                <a
                  href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book an Aroma Oil Massage in Dhaka.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-md"
                >
                  <MessageSquare size={16} />
                  <span>BOOK VIA WHATSAPP</span>
                </a>
              </div>

              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/20 space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A45C] font-semibold block">
                  RELATED SERVICES
                </span>
                <div className="space-y-2 text-xs">
                  <Link href="/body-massage-dhaka/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Body Massage in Dhaka →
                  </Link>
                  <Link href="/hot-stone-massage-dhaka/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Hot Stone Massage in Dhaka →
                  </Link>
                  <Link href="/locations/spa-in-dhaka/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 transition-colors">
                    Spa in Dhaka Hub →
                  </Link>
                </div>
              </div>
            </div>

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
