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
  title: "Body Massage in Banani, Dhaka | Relaxing Spa Dhaka",
  description:
    "Book a body massage in Banani, Dhaka at Relaxing Spa Dhaka. Offering oil relaxation, full body muscle strain release, and private suites on Kamal Ataturk Avenue.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/body-massage-banani/",
  },
  openGraph: {
    title: "Body Massage in Banani, Dhaka | Relaxing Spa Dhaka",
    description:
      "Book a body massage in Banani, Dhaka at Relaxing Spa Dhaka. Offering oil relaxation, full body muscle strain release, and private suites on Kamal Ataturk Avenue.",
    url: "https://relaxingspadhaka.com/body-massage-banani/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Body Massage in Banani Dhaka - Relaxing Spa Dhaka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Massage in Banani, Dhaka | Relaxing Spa Dhaka",
    description:
      "Book a body massage in Banani, Dhaka at Relaxing Spa Dhaka. Offering oil relaxation and private suites.",
    images: ["https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function BodyMassageBananiPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Spa in Banani", url: "https://relaxingspadhaka.com/locations/spa-in-banani/" },
    { name: "Body Massage Banani", url: "https://relaxingspadhaka.com/body-massage-banani/" },
  ];

  const bodyBananiFaqs = [
    {
      question: "What is included in a Body Massage in Banani?",
      answer: "A full body massage session includes smooth, flowing strokes from head to toe using warm essential oils in a private, climate-controlled suite on Kamal Ataturk Avenue.",
    },
    {
      question: "Can I choose my preferred pressure level?",
      answer: "Yes! Our specialists adjust pressure according to your preference—ranging from light relaxation to medium therapeutic force.",
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book directly via WhatsApp at +8801604516489 or call our Banani reception team.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/body-massage-banani/"
        title="Body Massage in Banani, Dhaka | Relaxing Spa Dhaka"
        description="Book a body massage in Banani, Dhaka at Relaxing Spa Dhaka. Offering oil relaxation, full body muscle strain release, and private suites."
        breadcrumbs={breadcrumbs}
        serviceName="Full Body Massage in Banani"
        serviceDescription="Comprehensive full body massage sessions tailored for muscle relaxation, circulation, and stress relief in Banani, Dhaka."
        faqs={bodyBananiFaqs}
      />
      <Navbar />

      <SubpageHero
        title="Body Massage in Banani, Dhaka"
        subtitle="BANANI FULL BODY RELAXATION"
        description="Indulge in a full body massage session in Banani. Smooth rhythmic strokes paired with botanical essential oils melt away physical fatigue and mental stress on Kamal Ataturk Avenue."
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
                  FULL BODY RELAXATION IN BANANI
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] mb-4">
                  Restorative Body Massage Therapy in Banani
                </h2>
                <p className="text-base text-[#A8A8A8] font-light leading-relaxed mb-4">
                  Searching for a professional <strong className="text-[#F5F1E8] font-medium">body massage in Banani</strong>? Relaxing Spa Dhaka delivers full body oil therapies crafted to ease back tightness, shoulder knots, and daily fatigue.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Situated conveniently on <strong className="text-[#F5F1E8]">Kamal Ataturk Avenue in Banani</strong>, our sanctuary features private VIP suites designed for complete guest quietude and privacy.
                </p>
              </div>

              {/* What to Expect */}
              <div className="bg-[#151515] p-6 sm:p-8 rounded-sm border border-[#C9A45C]/20 space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8]">
                  What You Can Expect During Your Session
                </h3>
                <div className="space-y-3 text-xs text-[#A8A8A8] font-light">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Full Body Coverage:</strong> Systematic focus on shoulders, upper back, lower back, arms, legs, and feet.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Pure Botanical Oils:</strong> Non-greasy organic essential oils that nourish skin while relaxing muscles.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Private Treatment Suites:</strong> Climate-controlled rooms with soft ambient lighting and soothing acoustics.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Gulshan Proximity:</strong> Located in central Banani, situated just 5-10 minutes from Gulshan 1 and 2.</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/30 space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8]">
                  Body Massage Pricing
                </h3>
                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                  Pricing varies depending on the specific body massage type selected. All sessions are 60 minutes. Contact us via WhatsApp at {BUSINESS_INFO.phone} or view our <Link href="/services/" className="text-[#C9A45C] hover:underline">full services page</Link> for exact prices.
                </p>
              </div>

            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 shadow-2xl space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8] border-b border-[#C9A45C]/20 pb-3">
                  Book Body Massage Banani
                </h3>
                <p className="text-xs text-[#A8A8A8]">
                  Kamal Ataturk Avenue, Banani, Dhaka 1213. Phone: {BUSINESS_INFO.phone}
                </p>

                <a
                  href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a Body Massage in Banani.")}
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
                  <Link href="/locations/spa-in-banani/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Spa in Banani Primary Hub →
                  </Link>
                  <Link href="/body-massage-dhaka/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Body Massage in Dhaka Hub →
                  </Link>
                  <Link href="/couple-spa-banani/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Couple Spa in Banani →
                  </Link>
                  <Link href="/contact/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 transition-colors">
                    Contact & Driving Directions →
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
            Body Massage Banani FAQ
          </h3>
          <div className="space-y-4">
            {bodyBananiFaqs.map((faq, idx) => (
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
