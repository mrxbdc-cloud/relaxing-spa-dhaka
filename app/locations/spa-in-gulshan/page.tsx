import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";
import { CheckCircle2, Clock, MapPin, Phone, MessageSquare, ArrowRight, Navigation, Sparkles } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Spa in Gulshan, Dhaka | Relaxing Spa Dhaka",
  description:
    "Looking for a premium spa in Gulshan, Dhaka? Relaxing Spa Dhaka on Kamal Ataturk Avenue is located just 5-10 mins away from Gulshan 1 & 2. Authentic Thai massage, aroma oil & private suites.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/locations/spa-in-gulshan/",
  },
  openGraph: {
    title: "Spa in Gulshan, Dhaka | Relaxing Spa Dhaka",
    description:
      "Looking for a premium spa in Gulshan, Dhaka? Relaxing Spa Dhaka on Kamal Ataturk Avenue is located just 5-10 mins away from Gulshan 1 & 2. Authentic Thai massage, aroma oil & private suites.",
    url: "https://relaxingspadhaka.com/locations/spa-in-gulshan/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Spa in Gulshan Dhaka - Relaxing Spa Dhaka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa in Gulshan, Dhaka | Relaxing Spa Dhaka",
    description:
      "Luxury spa experience for Gulshan residents & diplomats. Located 5-10 mins away on Kamal Ataturk Avenue, Banani.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function SpaInGulshanPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Locations", url: "https://relaxingspadhaka.com/locations/" },
    { name: "Spa in Gulshan", url: "https://relaxingspadhaka.com/locations/spa-in-gulshan/" },
  ];

  const gulshanFaqs = [
    {
      question: "Where is Relaxing Spa Dhaka located relative to Gulshan 1 and Gulshan 2?",
      answer: "Our physical spa sanctuary is located on Kamal Ataturk Avenue in Banani, positioned directly adjacent to Gulshan 1 and Gulshan 2—just a 5 to 10 minute drive across the Banani lake bridge.",
    },
    {
      question: "How do I drive from Gulshan 2 Circle to the spa?",
      answer: "From Gulshan 2 Circle, travel West along Kamal Ataturk Avenue for less than 1.5 km across the Banani bridge directly to our spa center on Kamal Ataturk Avenue.",
    },
    {
      question: "What treatments are recommended for Gulshan business executives and diplomats?",
      answer: "Gulshan executives, diplomats, and international guests frequently reserve our Traditional Thai Massage, Aroma Oil Therapy, Deep Tissue Therapy, and private VIP Couple Spa packages.",
    },
    {
      question: "Can I reserve a private suite session on WhatsApp before traveling from Gulshan?",
      answer: "Yes, you can reserve your session directly via WhatsApp at +8801604516489 to ensure instant access to a climate-controlled private suite upon arrival.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/locations/spa-in-gulshan/"
        title="Spa in Gulshan, Dhaka | Relaxing Spa Dhaka"
        description="Looking for a premium spa in Gulshan, Dhaka? Relaxing Spa Dhaka on Kamal Ataturk Avenue is located just 5-10 mins away from Gulshan 1 & 2."
        breadcrumbs={breadcrumbs}
        serviceName="Luxury Spa & Massage for Gulshan Residents & Visitors"
        serviceDescription="Authentic Thai massages, aroma oil therapies, deep tissue bodywork, and private VIP couples suites serving Gulshan 1 & 2."
        faqs={gulshanFaqs}
      />
      <Navbar />

      <SubpageHero
        title="Spa in Gulshan, Dhaka"
        subtitle="5-10 MINUTES FROM GULSHAN 1, GULSHAN 2 & DIPLOMATIC ZONE"
        description="Seeking an exceptional spa experience in Gulshan? Relaxing Spa Dhaka is located right next door on Kamal Ataturk Avenue in Banani. Enjoy authentic Thai bodywork, organic aromatherapy, and complete privacy just 5-10 minutes away."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              
              <div>
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
                  GULSHAN WELLNESS DESTINATION
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] mb-6 leading-tight">
                  Spa in Gulshan, Dhaka
                </h2>
                <p className="text-base text-[#A8A8A8] font-light leading-relaxed mb-4">
                  Residents, corporate executives, diplomats, and international visitors in <strong className="text-[#F5F1E8] font-medium">Gulshan 1 and Gulshan 2</strong> searching for a premier <strong className="text-[#F5F1E8] font-medium">spa in Gulshan</strong> can access our facility on Kamal Ataturk Avenue in just 5 to 10 minutes.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Positioned right across the Banani bridge from Gulshan 2, Relaxing Spa Dhaka provides absolute privacy, soundproofed climate-controlled suites, organic oils, and background-verified Thai specialists.
                </p>
              </div>

              {/* Geographic Clarity Box */}
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#C9A45C] text-xs font-semibold uppercase tracking-wider">
                  <Navigation size={16} />
                  <span>TRANSPARENT LOCATION INFORMATION</span>
                </div>
                <h2 className="font-serif text-2xl text-[#F5F1E8]">
                  Serving Gulshan from Adjacent Banani
                </h2>
                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                  Relaxing Spa Dhaka operates from one physical sanctuary on Kamal Ataturk Avenue in Banani. Because Kamal Ataturk Avenue directly connects Gulshan 2 Circle to Banani across the lake bridge, our spa serves as the primary wellness sanctuary for guests in Gulshan 1, Gulshan 2, and the Diplomatic Zone.
                </p>
              </div>

              {/* Thai Massage Gulshan */}
              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Thai Massage Gulshan
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Enjoy authentic <strong className="text-[#F5F1E8]">Thai massage in Gulshan</strong> featuring Sen line acupressure, passive yoga stretching, and postural tension relief designed to melt away corporate stress.
                </p>
              </div>

              {/* Body Massage Gulshan */}
              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Massage Services for Gulshan Clients
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Our massage sessions pair organic essential oils, customized pressure work, and quiet private suites to restore mental rest and physical energy.
                </p>
              </div>

              {/* Getting Here from Gulshan */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Convenient Commute from Gulshan
                </h2>
                <ul className="space-y-2.5 text-xs text-[#A8A8A8] font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>From Gulshan 2 Circle:</strong> Travel West along Kamal Ataturk Avenue across the Banani lake bridge (1.2 km / 5 mins).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>From Gulshan 1 Circle:</strong> Take Gulshan Avenue North to Gulshan 2 or cross Road 11 into Banani (2.5 km / 8-10 mins).</span>
                  </li>
                </ul>
              </div>

              {/* Available Services */}
              <div className="bg-[#151515] p-6 sm:p-8 rounded-sm border border-[#C9A45C]/20 space-y-4">
                <h2 className="font-serif text-2xl text-[#F5F1E8]">
                  Available Services & Exact 60-Minute Pricing
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">Thai Massage</h3>
                    <p className="text-xs text-[#A8A8A8]">60 MIN — <span className="text-[#C9A45C] font-semibold">৳4,500</span></p>
                  </div>
                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">Dry Massage</h3>
                    <p className="text-xs text-[#A8A8A8]">60 MIN — <span className="text-[#C9A45C] font-semibold">৳5,000</span></p>
                  </div>
                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">Aroma Body Massage</h3>
                    <p className="text-xs text-[#A8A8A8]">60 MIN — <span className="text-[#C9A45C] font-semibold">৳7,500</span></p>
                  </div>
                  <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm">
                    <h3 className="font-serif text-lg text-[#F5F1E8] mb-1">Deep Tissue Massage</h3>
                    <p className="text-xs text-[#A8A8A8]">60 MIN — <span className="text-[#C9A45C] font-semibold">৳8,000</span></p>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="/services/" className="text-xs text-[#C9A45C] hover:underline font-semibold">
                    View Complete Services Catalog & All Verified Prices →
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Column: Physical Address Card & Internal Links */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 shadow-2xl space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8] border-b border-[#C9A45C]/20 pb-3">
                  Physical Address
                </h3>

                <div className="space-y-3 text-xs text-[#A8A8A8]">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#F5F1E8] font-medium block">Physical Location</span>
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
                  href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I am visiting from Gulshan and would like to book a session.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-md"
                >
                  <MessageSquare size={16} />
                  <span>BOOK SESSION FROM GULSHAN</span>
                </a>
              </div>

              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/20 space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A45C] font-semibold block">
                  RECOMMENDED LOCATION LINKS
                </span>
                <div className="space-y-2 text-xs">
                  <Link href="/locations/spa-in-banani/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors font-semibold">
                    Primary Physical Spa in Banani →
                  </Link>
                  <Link href="/locations/spa-in-dhaka/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors font-semibold">
                    Spa in Dhaka Metropolitan Guide →
                  </Link>
                  <Link href="/services/thai-massage/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Thai Massage Details →
                  </Link>
                  <Link href="/locations/" className="block text-[#C9A45C] font-semibold pt-1 transition-colors">
                    View All Nearby Location Guides →
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
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
            {gulshanFaqs.map((faq, idx) => (
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
