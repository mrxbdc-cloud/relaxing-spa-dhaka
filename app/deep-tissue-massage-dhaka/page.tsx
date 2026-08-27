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
  title: "Deep Tissue Massage in Dhaka | Relaxing Spa Dhaka",
  description:
    "Target chronic muscle knots, severe tightness, and back strain with deep tissue massage in Dhaka at Relaxing Spa Dhaka, located on Kamal Ataturk Avenue, Banani.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/deep-tissue-massage-dhaka/",
  },
  openGraph: {
    title: "Deep Tissue Massage in Dhaka | Relaxing Spa Dhaka",
    description:
      "Target chronic muscle knots, severe tightness, and back strain with deep tissue massage in Dhaka at Relaxing Spa Dhaka, located on Kamal Ataturk Avenue, Banani.",
    url: "https://relaxingspadhaka.com/deep-tissue-massage-dhaka/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Deep Tissue Massage in Dhaka - Relaxing Spa Dhaka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Tissue Massage in Dhaka | Relaxing Spa Dhaka",
    description:
      "Target chronic muscle knots, severe tightness, and back strain with deep tissue massage in Dhaka at Relaxing Spa Dhaka.",
    images: ["https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function DeepTissueMassageDhakaPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Spa in Dhaka", url: "https://relaxingspadhaka.com/locations/spa-in-dhaka/" },
    { name: "Deep Tissue Massage", url: "https://relaxingspadhaka.com/deep-tissue-massage-dhaka/" },
  ];

  const deepTissueFaqs = [
    {
      question: "What is Deep Tissue Massage?",
      answer: "Deep Tissue Massage uses focused, slow strokes and intense pressure targeted at sub-layer muscle fibers and connective tissues to release chronic knots.",
    },
    {
      question: "Where in Banani is the deep tissue session performed?",
      answer: "Sessions take place in our private, climate-controlled suites at Kamal Ataturk Avenue, Banani, Dhaka 1213.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/deep-tissue-massage-dhaka/"
        title="Deep Tissue Massage in Dhaka | Relaxing Spa Dhaka"
        description="Target chronic muscle knots, severe tightness, and back strain with deep tissue massage in Dhaka at Relaxing Spa Dhaka, located on Kamal Ataturk Avenue, Banani."
        breadcrumbs={breadcrumbs}
        serviceName="Deep Tissue Massage Therapy"
        serviceDescription="Targeted firm pressure aimed at deep sub-layer muscles and connective tissues to release chronic knots and postural tension in Banani, Dhaka."
        faqs={deepTissueFaqs}
      />
      <Navbar />

      <SubpageHero
        title="Deep Tissue Massage in Dhaka"
        subtitle="INTENSIVE MUSCLE RECOVERY"
        description="Designed for individuals needing deep, firm pressure to break down chronic muscle knots, back tightness, and postural strain. Performed by expert specialists on Kamal Ataturk Avenue, Banani."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Content Body */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
                  INTENSE MUSCLE RELIEF IN DHAKA
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] mb-4">
                  Firm Pressure & Muscle Recovery
                </h2>
                <p className="text-base text-[#A8A8A8] font-light leading-relaxed mb-4">
                  If you suffer from persistent back pain, neck stiffness, or muscle knots, our <strong className="text-[#F5F1E8] font-medium">Deep Tissue Massage in Dhaka</strong> delivers firm, focused pressure where your body needs it most.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Located on <strong className="text-[#F5F1E8]">Kamal Ataturk Avenue in Banani</strong>, our sanctuary provides private treatment rooms for individuals seeking serious posture relief.
                </p>
              </div>

              {/* Pricing */}
              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/30 space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8]">
                  Deep Tissue Massage Price
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center p-3 bg-[#151515] rounded-sm border border-[#C9A45C]/30">
                    <span className="font-medium text-[#F5F1E8]">60 MIN SESSION</span>
                    <span className="font-serif text-lg text-[#C9A45C]">৳8,000</span>
                  </div>
                </div>
                <p className="text-xs text-[#A8A8A8] font-light">
                  Conducted in a private, climate-controlled suite at our Banani sanctuary. No hidden charges.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 shadow-2xl space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8] border-b border-[#C9A45C]/20 pb-3">
                  Book Deep Tissue Massage
                </h3>
                <p className="text-xs text-[#A8A8A8]">
                  Kamal Ataturk Avenue, Banani, Dhaka 1213. Phone: {BUSINESS_INFO.phone}
                </p>

                <a
                  href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a Deep Tissue Massage in Dhaka.")}
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
                  <Link href="/services/thai-massage/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Thai Massage in Dhaka →
                  </Link>
                  <Link href="/body-massage-dhaka/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Body Massage in Dhaka →
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
