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
  title: "Spa in Dhaka | Relaxing Spa Dhaka – Banani",
  description:
    "Discover Relaxing Spa Dhaka, a benchmark luxury spa in Banani, Dhaka. Authentic Thai massage, aromatic oil therapies, and private relaxation suites serving guests across Dhaka city.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/locations/spa-in-dhaka/",
  },
  openGraph: {
    title: "Spa in Dhaka | Relaxing Spa Dhaka – Banani",
    description:
      "Discover Relaxing Spa Dhaka, a benchmark luxury spa in Banani, Dhaka. Authentic Thai massage, aromatic oil therapies, and private relaxation suites serving guests across Dhaka city.",
    url: "https://relaxingspadhaka.com/locations/spa-in-dhaka/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Spa in Dhaka City - Relaxing Spa Dhaka Banani",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Dhaka | Relaxing Spa Dhaka – Banani",
    description:
      "Benchmark luxury spa in Banani, Dhaka. Authentic Thai massage and private suites serving guests across Dhaka city.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function SpaInDhakaPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Locations", url: "https://relaxingspadhaka.com/locations/" },
    { name: "Spa in Dhaka", url: "https://relaxingspadhaka.com/locations/spa-in-dhaka/" },
  ];

  const dhakaFaqs = [
    {
      question: "Where is Relaxing Spa Dhaka physically located?",
      answer: "Relaxing Spa Dhaka operates from one central physical sanctuary located on Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh. We do not operate multiple branches.",
    },
    {
      question: "Which areas in Dhaka do you serve?",
      answer: "While our physical spa is situated in Banani, we serve guests from across Dhaka including Gulshan, Baridhara, Badda, Mohakhali, Bashundhara, Nikunja, Khilkhet, and Uttara.",
    },
    {
      question: "What makes Relaxing Spa Dhaka a benchmark spa in Dhaka?",
      answer: "We offer authentic Thai-trained techniques, 100% private climate-controlled suites, organic botanical essential oils, and strict hospital-grade hygiene standards.",
    },
    {
      question: "How do I book a spa session in Dhaka?",
      answer: "Reservations can be placed instantly online via WhatsApp at +8801604516489 or by phone. Advance booking is recommended for peak weekend and evening hours.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/locations/spa-in-dhaka/"
        title="Spa in Dhaka | Relaxing Spa Dhaka – Banani"
        description="Discover Relaxing Spa Dhaka, a benchmark luxury spa in Banani, Dhaka. Authentic Thai massage, aromatic oil therapies, and private relaxation suites serving guests across Dhaka city."
        breadcrumbs={breadcrumbs}
        serviceName="Luxury Spa & Thai Massage in Dhaka"
        serviceDescription="Authentic Thai massages, aroma oil therapies, deep tissue bodywork, and private VIP couples suites in Banani, Dhaka."
        faqs={dhakaFaqs}
      />
      <Navbar />

      <SubpageHero
        title="Spa in Dhaka"
        subtitle="METROPOLITAN WELLNESS GUIDE"
        description="Relaxing Spa Dhaka is a benchmark wellness sanctuary located centrally on Kamal Ataturk Avenue in Banani, Dhaka. We provide authentic Thai bodywork, organic aroma therapies, and private suites for guests from all parts of Dhaka city."
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
                  DHAKA CITY WELLNESS SANCTUARY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] mb-4">
                  Relaxing Spa Dhaka – A Spa in Banani, Dhaka
                </h2>
                <p className="text-base text-[#A8A8A8] font-light leading-relaxed mb-4">
                  Navigating the fast-paced energy of metropolitan Dhaka requires dedicated moments of physical renewal and quietude. If you are searching for a high-quality <strong className="text-[#F5F1E8] font-medium">spa in Dhaka</strong>, Relaxing Spa Dhaka delivers a peaceful sanctuary designed to international standards.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  <strong className="text-[#F5F1E8]">Important Business Note:</strong> Relaxing Spa Dhaka operates from one central physical branch on <strong className="text-[#F5F1E8]">Kamal Ataturk Avenue in Banani, Dhaka</strong>. We welcome guests commuting from all major commercial and residential neighborhoods across the city.
                </p>
              </div>

              {/* Thai Massage in Dhaka */}
              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Thai Massage in Dhaka
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed mb-3">
                  Our flagship <Link href="/services/thai-massage/" className="text-[#C9A45C] hover:underline font-medium">Thai massage in Dhaka</Link> brings centuries of Eastern healing traditions directly to Banani. Combining Sen energy line compression, acupressure point release, and gentle passive stretching, this treatment restores joint flexibility and relieves deep postural fatigue.
                </p>
              </div>

              {/* Body Massage in Dhaka */}
              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Body Massage in Dhaka
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed mb-3">
                  Looking for a professional <Link href="/body-massage-dhaka/" className="text-[#C9A45C] hover:underline font-medium">body massage in Dhaka</Link>? Our practitioners customize pressure levels, warm herbal compresses, and organic botanical oils to ease muscular tension and restore peaceful mental equilibrium.
                </p>
              </div>

              {/* Spa and Massage Services */}
              <div className="bg-[#151515] p-6 sm:p-8 rounded-sm border border-[#C9A45C]/20 space-y-4">
                <h2 className="font-serif text-2xl text-[#F5F1E8]">
                  Spa and Massage Services
                </h2>
                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                  Explore our complete catalog of signature wellness treatments, available daily in Banani:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">Traditional Thai Massage</h3>
                    <p className="text-xs text-[#A8A8A8]">Rhythmic compression and assisted stretching in private suites.</p>
                    <Link href="/services/thai-massage/" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C9A45C] mt-2 hover:underline">
                      <span>Thai Massage Guide</span> <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">Aroma Oil Therapy</h3>
                    <p className="text-xs text-[#A8A8A8]">Organic essential oil massage to relieve mental stress.</p>
                    <Link href="/aroma-oil-massage-dhaka/" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C9A45C] mt-2 hover:underline">
                      <span>Aroma Oil Guide</span> <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">Deep Tissue Relief</h3>
                    <p className="text-xs text-[#A8A8A8]">Firm muscle pressure targeting chronic postural tension.</p>
                    <Link href="/deep-tissue-massage-dhaka/" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C9A45C] mt-2 hover:underline">
                      <span>Deep Tissue Guide</span> <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">Hot Stone Therapy</h3>
                    <p className="text-xs text-[#A8A8A8]">Warmed volcanic basalt stones for deep thermal muscle relief.</p>
                    <Link href="/hot-stone-massage-dhaka/" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C9A45C] mt-2 hover:underline">
                      <span>Hot Stone Guide</span> <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Why Visit a Spa in Dhaka */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Why Visit a Spa in Dhaka?
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Modern urban lifestyle in Dhaka involves long commuting hours, sedentary desk work, and daily stress. Regular spa therapy promotes blood circulation, improves sleep quality, releases shoulder and back strain, and offers a quiet sanctuary for mental reset.
                </p>
              </div>

              {/* Serving Customers Across Dhaka */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Serving Customers Across Dhaka
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Our central Banani location on Kamal Ataturk Avenue provides direct, convenient connectivity to guests visiting from:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#F5F1E8]">
                  <Link href="/locations/spa-in-banani/" className="p-3 bg-[#151515] border border-white/10 rounded-sm hover:border-[#C9A45C]">
                    📍 Banani (Physical Branch)
                  </Link>
                  <Link href="/locations/spa-in-gulshan/" className="p-3 bg-[#151515] border border-white/10 rounded-sm hover:border-[#C9A45C]">
                    🚘 Gulshan 1 & 2 (5-10 mins)
                  </Link>
                  <Link href="/locations/spa-near-baridhara/" className="p-3 bg-[#151515] border border-white/10 rounded-sm hover:border-[#C9A45C]">
                    🚘 Baridhara (8-12 mins)
                  </Link>
                  <Link href="/locations/spa-near-mohakhali/" className="p-3 bg-[#151515] border border-white/10 rounded-sm hover:border-[#C9A45C]">
                    🚘 Mohakhali (7-12 mins)
                  </Link>
                  <Link href="/locations/spa-near-bashundhara/" className="p-3 bg-[#151515] border border-white/10 rounded-sm hover:border-[#C9A45C]">
                    🚘 Bashundhara (15-22 mins)
                  </Link>
                  <Link href="/locations/spa-near-uttara/" className="p-3 bg-[#151515] border border-white/10 rounded-sm hover:border-[#C9A45C]">
                    🚘 Uttara (20-30 mins)
                  </Link>
                </div>
              </div>

              {/* How to Reach & Driving Directions */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  How to Reach Relaxing Spa Dhaka
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Our facility is situated on main Kamal Ataturk Avenue in Banani. Ample valet and street parking is available, and major ride-sharing apps drop off directly in front of our entrance.
                </p>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B0B0B] bg-[#C9A45C] px-5 py-2.5 rounded-sm hover:bg-[#E2C889] transition-colors"
                >
                  <span>Contact Page & Full Driving Map</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

            </div>

            {/* Right Column: Physical Location Card */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 shadow-2xl space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8] border-b border-[#C9A45C]/20 pb-3">
                  Our Banani Location
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
                      <span className="text-[#F5F1E8] font-medium block">Reservations</span>
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#C9A45C] transition-colors">{BUSINESS_INFO.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-[#C9A45C] shrink-0" />
                    <div>
                      <span className="text-[#F5F1E8] font-medium block">Opening Hours</span>
                      <span>10:00 AM – 11:00 PM (Daily)</span>
                    </div>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a session.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-md"
                >
                  <MessageSquare size={16} />
                  <span>BOOK A SESSION ON WHATSAPP</span>
                </a>
              </div>

              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/20 space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A45C] font-semibold block">
                  KEY LOCATION LINKS
                </span>
                <div className="space-y-2 text-xs">
                  <Link href="/locations/spa-in-banani/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors font-semibold">
                    Spa in Banani Primary Branch →
                  </Link>
                  <Link href="/locations/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    All Nearby Location Guides →
                  </Link>
                  <Link href="/services/thai-massage/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Thai Massage Dhaka →
                  </Link>
                  <Link href="/body-massage-dhaka/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 transition-colors">
                    Body Massage Dhaka →
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
            {dhakaFaqs.map((faq, idx) => (
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
