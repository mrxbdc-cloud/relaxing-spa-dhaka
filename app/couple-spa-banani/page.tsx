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
  title: "Couple Spa in Banani, Dhaka | Relaxing Spa Dhaka",
  description:
    "Share a peaceful couples spa session in Banani, Dhaka at Relaxing Spa Dhaka. Private VIP dual suite, side-by-side massages, and tranquil atmosphere on Kamal Ataturk Avenue.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/couple-spa-banani/",
  },
  openGraph: {
    title: "Couple Spa in Banani, Dhaka | Relaxing Spa Dhaka",
    description:
      "Share a peaceful couples spa session in Banani, Dhaka at Relaxing Spa Dhaka. Private VIP dual suite, side-by-side massages, and tranquil atmosphere on Kamal Ataturk Avenue.",
    url: "https://relaxingspadhaka.com/couple-spa-banani/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Couple Spa in Banani Dhaka - Relaxing Spa Dhaka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Couple Spa in Banani, Dhaka | Relaxing Spa Dhaka",
    description:
      "Share a peaceful couples spa session in Banani, Dhaka at Relaxing Spa Dhaka. Private VIP dual suite.",
    images: ["https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function CoupleSpaBananiPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Spa in Banani", url: "https://relaxingspadhaka.com/locations/spa-in-banani/" },
    { name: "Couple Spa Banani", url: "https://relaxingspadhaka.com/couple-spa-banani/" },
  ];

  const coupleFaqs = [
    {
      question: "What is included in the Couple Spa Package in Banani?",
      answer: "The couple package features side-by-side massages in our spacious VIP dual private suite, customizable oil/Thai treatments, soft ambient lighting, and complimentary organic herbal tea.",
    },
    {
      question: "Where in Banani is the couple suite located?",
      answer: "At our primary physical location on Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/couple-spa-banani/"
        title="Couple Spa in Banani, Dhaka | Relaxing Spa Dhaka"
        description="Share a peaceful couples spa session in Banani, Dhaka at Relaxing Spa Dhaka. Private VIP dual suite, side-by-side massages, and tranquil atmosphere."
        breadcrumbs={breadcrumbs}
        serviceName="Luxury Couple Spa Package"
        serviceDescription="A romantic and peaceful side-by-side massage session in a private VIP dual suite with custom aromatherapy in Banani, Dhaka."
        faqs={coupleFaqs}
      />
      <Navbar />

      <SubpageHero
        title="Couple Spa in Banani, Dhaka"
        subtitle="VIP PRIVATE DUAL SUITE EXPERIENCE"
        description="Share a sanctuary of stillness with a partner or companion in our spacious VIP dual suite. Side-by-side massages accompanied by soothing herbal tea on Kamal Ataturk Avenue."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Content Body */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
                  EXCLUSIVE BANANI COUPLES SUITE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] mb-4">
                  Luxury Side-by-Side Couple Spa Package
                </h2>
                <p className="text-base text-[#A8A8A8] font-light leading-relaxed mb-4">
                  Our <strong className="text-[#F5F1E8] font-medium">Couple Spa in Banani, Dhaka</strong> is designed for couples seeking a shared retreat of relaxation and calm.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Conducted in our VIP dual suite on <strong className="text-[#F5F1E8]">Kamal Ataturk Avenue in Banani</strong>, two therapists work simultaneously so you and your partner enjoy side-by-side bodywork.
                </p>
              </div>

              {/* Pricing */}
              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/30 space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8]">
                  Couple Massage Price
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center p-3 bg-[#151515] rounded-sm border border-[#C9A45C]/30">
                    <span className="font-medium text-[#F5F1E8]">60 MIN DUAL SESSION</span>
                    <span className="font-serif text-lg text-[#C9A45C]">৳16,500</span>
                  </div>
                </div>
                <p className="text-xs text-[#A8A8A8] font-light">
                  Side-by-side sessions in our spacious VIP dual suite. Each person may choose their preferred massage style. No hidden charges.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 shadow-2xl space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8] border-b border-[#C9A45C]/20 pb-3">
                  Book Couple Spa Banani
                </h3>
                <p className="text-xs text-[#A8A8A8]">
                  Kamal Ataturk Avenue, Banani, Dhaka 1213. Phone: {BUSINESS_INFO.phone}
                </p>

                <a
                  href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a Couple Spa session in Banani.")}
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
                  <Link href="/locations/spa-in-banani/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Spa in Banani Primary Hub →
                  </Link>
                  <Link href="/aroma-oil-massage-dhaka/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Aroma Oil Massage in Dhaka →
                  </Link>
                  <Link href="/contact/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 transition-colors">
                    Directions & Contact →
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
