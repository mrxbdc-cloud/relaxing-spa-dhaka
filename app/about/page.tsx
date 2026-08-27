import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Therapists from "@/components/Therapists";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Heart, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Relaxing Spa Dhaka | Premium Wellness Sanctuary in Banani",
  description:
    "Learn about Relaxing Spa Dhaka, Banani's premier spa and Thai wellness sanctuary located on Kamal Ataturk Avenue. Discover our philosophy, private suites, and experienced therapists.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/about/",
  },
  openGraph: {
    title: "About Relaxing Spa Dhaka | Premium Wellness Sanctuary in Banani",
    description:
      "Learn about Relaxing Spa Dhaka, Banani's premier spa and Thai wellness sanctuary located on Kamal Ataturk Avenue. Discover our philosophy, private suites, and experienced therapists.",
    url: "https://relaxingspadhaka.com/about/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "About Relaxing Spa Dhaka Sanctuary in Banani",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Relaxing Spa Dhaka | Premium Wellness Sanctuary in Banani",
    description:
      "Learn about Relaxing Spa Dhaka, Banani's premier spa and Thai wellness sanctuary located on Kamal Ataturk Avenue.",
    images: ["https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "About Us", url: "https://relaxingspadhaka.com/about/" },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/about/"
        title="About Relaxing Spa Dhaka | Premium Wellness Sanctuary in Banani"
        description="Learn about Relaxing Spa Dhaka, Banani's premier spa and Thai wellness sanctuary located on Kamal Ataturk Avenue."
        breadcrumbs={breadcrumbs}
      />
      <Navbar />

      <SubpageHero
        title="About Relaxing Spa Dhaka"
        subtitle="OUR PHILOSOPHY & SANCTUARY"
        description="Relaxing Spa Dhaka was established to provide an authentic, serene Thai wellness retreat in Banani, Dhaka. Located on Kamal Ataturk Avenue, our private spa suites cater to guests seeking physical rejuvenation and mental quietude."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop"
      />

      <About />
      <WhyChooseUs />
      <Therapists />

      {/* Local Context Section */}
      <section className="py-20 bg-[#151515] border-t border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[11px] tracking-[0.3em] text-[#C9A45C] uppercase font-semibold block mb-3">
                BANANI & NEAR GULSHAN RELEVANCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F5F1E8] mb-6 leading-tight">
                Convenient Location for Banani & Nearby Gulshan Residents
              </h2>
              <p className="text-sm text-[#A8A8A8] font-light leading-relaxed mb-4">
                Positioned conveniently on Kamal Ataturk Avenue in Banani, Relaxing Spa Dhaka provides easy access for residents and working professionals from Banani, Gulshan 1, Gulshan 2, and surrounding Dhaka commercial zones.
              </p>
              <p className="text-sm text-[#A8A8A8] font-light leading-relaxed mb-8">
                Our tranquil environment guarantees full privacy, serene ambience, and dedicated bodywork therapies tailored to combat daily stress and physical fatigue.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/locations/spa-in-banani/"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0B0B0B] bg-[#C9A45C] px-5 py-3 rounded-sm hover:bg-[#E2C889] transition-colors"
                >
                  <span>EXPLORE BANANI SPA HUB</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/locations/spa-in-dhaka/"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#F5F1E8] border border-[#C9A45C]/40 px-5 py-3 rounded-sm hover:border-[#C9A45C] transition-colors"
                >
                  <span>EXPLORE DHAKA SPA HUB</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="bg-[#0B0B0B] p-8 rounded-sm border border-[#C9A45C]/30 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C9A45C]/10 rounded-sm border border-[#C9A45C]/30 text-[#C9A45C]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#F5F1E8]">Physical Location</h3>
                  <p className="text-xs text-[#A8A8A8] mt-1">Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C9A45C]/10 rounded-sm border border-[#C9A45C]/30 text-[#C9A45C]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#F5F1E8]">Pristine Standards</h3>
                  <p className="text-xs text-[#A8A8A8] mt-1">Strict hygiene, private single & couple suites, sterilized linens, organic botanical oils.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C9A45C]/10 rounded-sm border border-[#C9A45C]/30 text-[#C9A45C]">
                  <Heart size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#F5F1E8]">Professional Therapists</h3>
                  <p className="text-xs text-[#A8A8A8] mt-1">Trained practitioners specializing in authentic Thai acupressure and custom oil massage.</p>
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
