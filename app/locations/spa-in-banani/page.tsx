import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";
import { CheckCircle2, Clock, MapPin, Phone, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Navigation } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Spa in Banani, Dhaka | Relaxing Spa Dhaka",
  description:
    "Looking for a luxury spa in Banani, Dhaka? Relaxing Spa Dhaka on Kamal Ataturk Avenue provides authentic Thai massage, body oil therapies & private suites near Gulshan.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/locations/spa-in-banani/",
  },
  openGraph: {
    title: "Spa in Banani, Dhaka | Relaxing Spa Dhaka",
    description:
      "Looking for a luxury spa in Banani, Dhaka? Relaxing Spa Dhaka on Kamal Ataturk Avenue provides authentic Thai massage, body oil therapies & private suites near Gulshan.",
    url: "https://relaxingspadhaka.com/locations/spa-in-banani/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Spa in Banani Dhaka - Relaxing Spa Dhaka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Banani, Dhaka | Relaxing Spa Dhaka",
    description:
      "Looking for a luxury spa in Banani, Dhaka? Relaxing Spa Dhaka on Kamal Ataturk Avenue provides authentic Thai massage.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function SpaInBananiPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Locations", url: "https://relaxingspadhaka.com/locations/" },
    { name: "Spa in Banani", url: "https://relaxingspadhaka.com/locations/spa-in-banani/" },
  ];

  const bananiFaqs = [
    {
      question: "Where is Relaxing Spa Dhaka located in Banani?",
      answer: "Our physical sanctuary is located on Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh. We are centrally positioned on the main avenue with convenient access.",
    },
    {
      question: "How far is the Banani location from Gulshan?",
      answer: "Our Banani location on Kamal Ataturk Avenue is situated directly adjacent to Gulshan, taking only 5 to 10 minutes by car or rickshaw from Gulshan 1 or Gulshan 2.",
    },
    {
      question: "What massage therapies are offered at the Banani spa?",
      answer: "We offer Traditional Thai Massage, Aroma Oil Massage, Deep Tissue Therapy, Relaxation Massage, Hot Stone Massage, Thai Foot Reflexology, and VIP Couple Spa packages.",
    },
    {
      question: "Do you have private suites for individuals and couples?",
      answer: "Yes, every therapy takes place in a fully private, quiet, climate-controlled suite. We also feature spacious dual suites designed for couples.",
    },
    {
      question: "What are your operating hours in Banani?",
      answer: "We are open 7 days a week from 10:00 AM to 11:00 PM. Reservations can be made online via WhatsApp or phone.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/locations/spa-in-banani/"
        title="Spa in Banani, Dhaka | Relaxing Spa Dhaka"
        description="Looking for a luxury spa in Banani, Dhaka? Relaxing Spa Dhaka on Kamal Ataturk Avenue provides authentic Thai massage, body oil therapies & private suites near Gulshan."
        breadcrumbs={breadcrumbs}
        serviceName="Luxury Spa & Massage Services in Banani"
        serviceDescription="Authentic Thai massages, aroma oil therapies, deep tissue bodywork, and private VIP couples suites in Banani, Dhaka."
        faqs={bananiFaqs}
      />
      <Navbar />

      <SubpageHero
        title="Spa in Banani, Dhaka"
        subtitle="PRIMARY BANANI WELLNESS SANCTUARY"
        description="Relaxing Spa Dhaka is Banani's premier wellness center located on Kamal Ataturk Avenue. Offering authentic Thai bodywork, organic aroma oil massages, and private relaxation suites for guests in Banani and nearby Gulshan."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Main Content Body */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Detailed Content */}
            <div className="lg:col-span-7 space-y-8">
              
              <div>
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
                  BENCHMARK BANANI SPA
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] mb-4">
                  Relaxing Spa Dhaka in Banani
                </h2>
                <p className="text-base text-[#A8A8A8] font-light leading-relaxed mb-4">
                  Whether you are seeking relief after an intense workday or dedicating time to personal self-care, finding a trusted <strong className="text-[#F5F1E8] font-medium">spa in Banani</strong> is essential for maintaining physical vitality and mental calm. Relaxing Spa Dhaka provides a peaceful, quiet haven shielded from urban noise.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Located directly on <strong className="text-[#F5F1E8]">Kamal Ataturk Avenue</strong>, our facility combines Eastern therapeutic bodywork traditions with modern luxury, ensuring every guest experiences complete privacy, pristine hygiene, and personal attention.
                </p>
              </div>

              {/* Thai Massage in Banani */}
              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Thai Massage in Banani
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Our authentic <strong className="text-[#F5F1E8]">Thai massage in Banani</strong> integrates rhythmic compression, Sen energy line balancing, and gentle assisted stretching. Delivered by certified specialists, this session relieves chronic muscle stiffness and restores natural posture.
                </p>
              </div>

              {/* Body Massage in Banani */}
              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Body Massage in Banani
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Experience a serene <strong className="text-[#F5F1E8]">body massage in Banani</strong> using botanical oil blends, gentle thermotherapy, and continuous fluid strokes designed to soothe mental strain and revive tired body tissues.
                </p>
              </div>

              {/* Services Available */}
              <div className="bg-[#151515] p-6 sm:p-8 rounded-sm border border-[#C9A45C]/20 space-y-4">
                <h2 className="font-serif text-2xl text-[#F5F1E8]">
                  Our Spa Services
                </h2>
                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                  Every treatment at our Banani center is delivered by skilled, background-verified specialists using organic oils and clean, sterilized linens:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">Traditional Thai Massage</h3>
                    <p className="text-xs text-[#A8A8A8]">Assisted yoga stretching, Sen line acupressure, and deep energy line balancing.</p>
                    <Link href="/services/thai-massage/" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C9A45C] mt-3 hover:underline">
                      <span>Explore Thai Massage Banani</span> <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">Professional Body Massage</h3>
                    <p className="text-xs text-[#A8A8A8]">Flowing oil strokes tailored to release muscle fatigue and promote deep rest.</p>
                    <Link href="/body-massage-banani/" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C9A45C] mt-3 hover:underline">
                      <span>Explore Body Massage Banani</span> <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">Aroma Oil Massage</h3>
                    <p className="text-xs text-[#A8A8A8]">Gentle full body session using botanical essential oils to soothe mental strain.</p>
                    <Link href="/aroma-oil-massage-dhaka/" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C9A45C] mt-3 hover:underline">
                      <span>Explore Aroma Oil Massage</span> <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">VIP Couple Spa Suite</h3>
                    <p className="text-xs text-[#A8A8A8]">Side-by-side treatments in our spacious dual suite with organic herbal tea.</p>
                    <Link href="/couple-spa-banani/" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C9A45C] mt-3 hover:underline">
                      <span>Explore Couple Spa Banani</span> <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Why Choose Us in Banani */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Why Choose Relaxing Spa Dhaka in Banani?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#A8A8A8] font-light">
                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5">
                    <strong className="text-[#F5F1E8] block mb-1">100% Private Suites</strong>
                    <span>Individual climate-controlled rooms ensuring complete personal quietude.</span>
                  </div>
                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5">
                    <strong className="text-[#F5F1E8] block mb-1">Hospital-Grade Sanitation</strong>
                    <span>Laundered organic linens and disinfected treatment tables between sessions.</span>
                  </div>
                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5">
                    <strong className="text-[#F5F1E8] block mb-1">Certified Specialists</strong>
                    <span>Trained practitioners with years of experience in therapeutic bodywork.</span>
                  </div>
                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5">
                    <strong className="text-[#F5F1E8] block mb-1">Prime Banani Location</strong>
                    <span>Located on main Kamal Ataturk Avenue with parking and easy access.</span>
                  </div>
                </div>
              </div>

              {/* Our Banani Location & Directions */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Our Banani Location & How to Reach
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Located directly on Kamal Ataturk Avenue, our Banani center is easily reachable from all key Dhaka hubs:
                </p>
                <ul className="space-y-2.5 text-xs text-[#A8A8A8] font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>From Airport Road / Chairmanbari:</strong> Head East onto Kamal Ataturk Avenue toward Banani 11 intersection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>From Gulshan 2 Circle:</strong> Travel West along Kamal Ataturk Avenue across the Banani bridge into Banani commercial area.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>From Gulshan 1 Circle:</strong> Take Gulshan Avenue North, turn onto Kamal Ataturk Avenue into Banani.</span>
                  </li>
                </ul>
              </div>

              {/* Proximity to Gulshan */}
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 space-y-3">
                <h2 className="font-serif text-2xl text-[#F5F1E8]">
                  Spa Near Gulshan and Nearby Areas
                </h2>
                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                  Our Banani facility serves as a convenient nearby sanctuary for residents and corporate professionals visiting from Gulshan, Baridhara, Mohakhali, Badda, and Bashundhara.
                </p>
                <Link
                  href="/locations/spa-in-gulshan/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A45C] hover:underline"
                >
                  <span>Explore Travel Guide for Gulshan Visitors</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>

            {/* Right Column: Quick Contact & FAQ */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              
              {/* Banani NAP Card */}
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 shadow-2xl space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8] border-b border-[#C9A45C]/20 pb-3">
                  Banani Location Details
                </h3>

                <div className="space-y-3 text-xs text-[#A8A8A8]">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#F5F1E8] font-medium block">Physical Address</span>
                      <span>Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#C9A45C] shrink-0" />
                    <div>
                      <span className="text-[#F5F1E8] font-medium block">Phone Reservations</span>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#C9A45C] transition-colors">{BUSINESS_INFO.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-[#C9A45C] shrink-0" />
                    <div>
                      <span className="text-[#F5F1E8] font-medium block">Opening Hours</span>
                      <span>10:00 AM – 11:00 PM (Monday – Sunday)</span>
                    </div>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a session at your Banani spa.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-md"
                >
                  <MessageSquare size={16} />
                  <span>Book Your Spa Experience in Banani</span>
                </a>
              </div>

              {/* Nearby Hub Directory */}
              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/20 space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A45C] font-semibold block">
                  NEARBY TRAVEL GUIDES
                </span>
                <div className="space-y-2 text-xs">
                  <Link href="/locations/spa-in-gulshan/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Spa Near Gulshan →
                  </Link>
                  <Link href="/locations/spa-near-baridhara/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Spa Near Baridhara →
                  </Link>
                  <Link href="/locations/spa-near-mohakhali/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Spa Near Mohakhali →
                  </Link>
                  <Link href="/locations/spa-near-badda/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Spa Near Badda →
                  </Link>
                  <Link href="/locations/" className="block text-[#C9A45C] font-semibold pt-1 transition-colors">
                    View All Location Hub Guides →
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Guest FAQ Section */}
      <section className="py-16 bg-[#151515] border-b border-[#C9A45C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.3em] text-[#C9A45C] uppercase font-semibold block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl text-[#F5F1E8]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {bananiFaqs.map((faq, idx) => (
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
