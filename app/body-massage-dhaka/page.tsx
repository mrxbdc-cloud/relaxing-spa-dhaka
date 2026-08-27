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
  title: "Body Massage in Dhaka | Relaxing Spa Dhaka",
  description:
    "Looking for a full body massage in Dhaka? Relaxing Spa Dhaka in Banani offers oil relaxation, deep tissue muscle relief, and private VIP suites across Dhaka.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/body-massage-dhaka/",
  },
  openGraph: {
    title: "Body Massage in Dhaka | Relaxing Spa Dhaka",
    description:
      "Looking for a full body massage in Dhaka? Relaxing Spa Dhaka in Banani offers oil relaxation, deep tissue muscle relief, and private VIP suites across Dhaka.",
    url: "https://relaxingspadhaka.com/body-massage-dhaka/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Body Massage in Dhaka - Relaxing Spa Dhaka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Massage in Dhaka | Relaxing Spa Dhaka",
    description:
      "Looking for a full body massage in Dhaka? Relaxing Spa Dhaka in Banani offers oil relaxation.",
    images: ["https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function BodyMassageDhakaPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Spa in Dhaka", url: "https://relaxingspadhaka.com/locations/spa-in-dhaka/" },
    { name: "Body Massage Dhaka", url: "https://relaxingspadhaka.com/body-massage-dhaka/" },
  ];

  const bodyDhakaFaqs = [
    {
      question: "Where is the body massage center located in Dhaka?",
      answer: "Our physical spa sanctuary is located on Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh.",
    },
    {
      question: "What types of full body massages are available?",
      answer: "We offer Relaxation Oil Massage, Aroma Essential Oil Massage, Deep Tissue Muscle Therapy, and Hot Stone Massage.",
    },
    {
      question: "Are private treatment rooms guaranteed?",
      answer: "Yes, every session is conducted in a private, soundproofed, climate-controlled treatment suite.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/body-massage-dhaka/"
        title="Body Massage in Dhaka | Relaxing Spa Dhaka"
        description="Looking for a full body massage in Dhaka? Relaxing Spa Dhaka in Banani offers oil relaxation, deep tissue muscle relief, and private VIP suites."
        breadcrumbs={breadcrumbs}
        serviceName="Full Body Massage Services in Dhaka"
        serviceDescription="Rejuvenating full body massage treatments tailored for physical fatigue, strain relief, and deep relaxation across Dhaka."
        faqs={bodyDhakaFaqs}
      />
      <Navbar />

      <SubpageHero
        title="Body Massage in Dhaka"
        subtitle="DHAKA CITY BODYWORK DESTINATION"
        description="Experience full body massage therapy in Dhaka. Located centrally in Banani on Kamal Ataturk Avenue, delivering customized oil therapies, deep muscle relaxation, and private suites."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Main Content Body */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
                  DHAKA FULL BODY WELLNESS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] mb-4">
                  Full Body Massage & Oil Therapy in Dhaka
                </h2>
                <p className="text-base text-[#A8A8A8] font-light leading-relaxed mb-4">
                  A professional <strong className="text-[#F5F1E8] font-medium">body massage in Dhaka</strong> is an effective way to relieve physical exhaustion, improve vascular circulation, and quiet mental stress.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Situated centrally on <strong className="text-[#F5F1E8]">Kamal Ataturk Avenue in Banani, Dhaka</strong>, Relaxing Spa Dhaka welcomes visitors from across the city to experience customized bodywork therapies delivered in quiet private suites.
                </p>
              </div>

              {/* Banani Location Clarification */}
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/20 space-y-3">
                <div className="flex items-center gap-2 text-[#C9A45C] text-xs font-semibold uppercase tracking-wider">
                  <MapPin size={16} />
                  <span>LOCATION CLARIFICATION</span>
                </div>
                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                  Relaxing Spa Dhaka is physically located on <strong>Kamal Ataturk Avenue, Banani, Dhaka 1213</strong>. All sessions take place at our Banani sanctuary. We do not operate secondary branch locations elsewhere in Dhaka.
                </p>
              </div>

              {/* Pricing */}
              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/30 space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8]">
                  Body Massage Pricing
                </h3>
                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                  Pricing varies depending on the specific body massage treatment selected. All sessions are 60 minutes. View our <Link href="/services/" className="text-[#C9A45C] hover:underline">complete services catalog</Link> for verified prices, or contact us via WhatsApp to confirm your preferred treatment.
                </p>
              </div>

            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 shadow-2xl space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8] border-b border-[#C9A45C]/20 pb-3">
                  Book Body Massage Dhaka
                </h3>
                <p className="text-xs text-[#A8A8A8]">
                  Kamal Ataturk Avenue, Banani, Dhaka 1213. Phone: {BUSINESS_INFO.phone}
                </p>

                <a
                  href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a Body Massage session in Dhaka.")}
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
                  INTERNAL NAVIGATION LINKS
                </span>
                <div className="space-y-2 text-xs">
                  <Link href="/body-massage-banani/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Body Massage in Banani →
                  </Link>
                  <Link href="/aroma-oil-massage-dhaka/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Aroma Oil Massage in Dhaka →
                  </Link>
                  <Link href="/locations/spa-in-dhaka/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Spa in Dhaka Hub →
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

      {/* FAQ */}
      <section className="py-16 bg-[#151515] border-b border-[#C9A45C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-3xl text-[#F5F1E8] text-center mb-8">
            Body Massage Dhaka FAQ
          </h3>
          <div className="space-y-4">
            {bodyDhakaFaqs.map((faq, idx) => (
              <div key={idx} className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/20">
                <h3 className="font-serif text-lg text-[#F5F1E8] mb-2">{faq.question}</h3>
                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
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
