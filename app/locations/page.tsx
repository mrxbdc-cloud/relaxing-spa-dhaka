import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";
import { MapPin, ArrowRight, ShieldCheck, Sparkles, Navigation, Clock, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Spa Locations & Nearby Areas in Dhaka | Relaxing Spa Dhaka",
  description:
    "Explore Relaxing Spa Dhaka's physical sanctuary on Kamal Ataturk Avenue, Banani, and discover convenient travel guides for guests visiting from Gulshan, Baridhara, Badda, Mohakhali, Uttara, and across Dhaka.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/locations/",
  },
  openGraph: {
    title: "Spa Locations & Nearby Areas in Dhaka | Relaxing Spa Dhaka",
    description:
      "Our physical sanctuary is located on Kamal Ataturk Avenue, Banani. Convenient access and travel guides for guests from Gulshan, Badda, Baridhara, Bashundhara, Mohakhali, and Uttara.",
    url: "https://relaxingspadhaka.com/locations/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Spa Locations in Dhaka - Relaxing Spa Dhaka Banani",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Locations & Nearby Areas in Dhaka | Relaxing Spa Dhaka",
    description:
      "Physical sanctuary in Banani on Kamal Ataturk Avenue. Serving guests from Gulshan, Baridhara, Badda, Mohakhali, and across Dhaka.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function LocationsHubPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Locations", url: "https://relaxingspadhaka.com/locations/" },
  ];

  const primaryLocations = [
    {
      title: "Spa in Banani, Dhaka",
      subtitle: "PRIMARY PHYSICAL SANCTUARY",
      href: "/locations/spa-in-banani/",
      desc: "Our verified physical spa center located on Kamal Ataturk Avenue in Banani. Featuring private treatment suites, authentic Thai massage, and luxury aroma oil therapies.",
      isPhysical: true,
      tag: "Verified Physical Branch",
    },
    {
      title: "Spa in Gulshan, Dhaka",
      subtitle: "ADJACENT GULSHAN HUB",
      href: "/locations/spa-in-gulshan/",
      desc: "Direct 5-10 minute commute across the Banani lake bridge serving guests in Gulshan 1, Gulshan 2, and the Diplomatic Zone.",
      isPhysical: false,
      tag: "Primary Strategic Location",
    },
    {
      title: "Spa in Dhaka",
      subtitle: "METROPOLITAN SPA HUB",
      href: "/locations/spa-in-dhaka/",
      desc: "Comprehensive guide for guests seeking a benchmark luxury Thai spa in Dhaka city, operating from our central Banani facility.",
      isPhysical: false,
      tag: "Metropolitan Hub Guide",
    },
  ];

  const nearbyLocations = [
    {
      title: "Spa Near Badda",
      area: "Middle Badda & Merul Badda",
      href: "/locations/spa-near-badda/",
      dist: "12-18 mins via Gulshan Link Rd",
      desc: "Easily reachable from Middle Badda and Merul Badda via the Gulshan-Badda link road directly to our Banani sanctuary.",
    },
    {
      title: "Spa Near Baridhara",
      area: "Baridhara Diplomatic Zone & DOHS",
      href: "/locations/spa-near-baridhara/",
      dist: "8-12 mins via Pragati Sarani / Gulshan 2",
      desc: "Direct access for guests in Baridhara Diplomatic Zone and Baridhara DOHS seeking serene Thai massage and private suites.",
    },
    {
      title: "Spa Near Mohakhali",
      area: "Mohakhali Commercial Area & DOHS",
      href: "/locations/spa-near-mohakhali/",
      dist: "7-12 mins via Wireless / Airport Rd",
      desc: "Conveniently situated just North of Mohakhali Wireless and Mohakhali DOHS along Kamal Ataturk Avenue.",
    },
    {
      title: "Spa Near Bashundhara",
      area: "Bashundhara R/A & 300 Feet",
      href: "/locations/spa-near-bashundhara/",
      dist: "15-22 mins via Pragati Sarani / Kuril",
      desc: "Direct route from Bashundhara Residential Area via Kuril flyover and Pragati Sarani into Banani.",
    },
    {
      title: "Spa Near Nikunja",
      area: "Nikunja 1 & Nikunja 2",
      href: "/locations/spa-near-nikunja/",
      dist: "12-18 mins via Airport Road",
      desc: "Located straight down Airport Road from Nikunja, offering executive wellness for travelers and corporate guests.",
    },
    {
      title: "Spa Near Khilkhet",
      area: "Khilkhet & Kuril Flyover",
      href: "/locations/spa-near-khilkhet/",
      dist: "15-20 mins via Airport Road",
      desc: "Easy access along the primary North-South Dhaka artery connecting Khilkhet directly to Kamal Ataturk Avenue, Banani.",
    },
    {
      title: "Spa Near Uttara",
      area: "Uttara Model Town Sectors 1-14",
      href: "/locations/spa-near-uttara/",
      dist: "20-30 mins via Dhaka-Mymensingh Hwy",
      desc: "A direct drive down Dhaka-Mymensingh Highway for Uttara residents seeking an established luxury Thai spa experience.",
    },
    {
      title: "Spa Near Vatara",
      area: "Vatara & Naya Nagar",
      href: "/locations/spa-near-vatara/",
      dist: "12-16 mins via Madani Ave / Pragati Sarani",
      desc: "Quick access from Vatara and Madani Avenue connecting through Gulshan 2 directly to our Banani facility.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/locations/"
        title="Spa Locations & Nearby Areas in Dhaka | Relaxing Spa Dhaka"
        description="Explore Relaxing Spa Dhaka's physical sanctuary on Kamal Ataturk Avenue, Banani, and discover travel guides for nearby areas."
        breadcrumbs={breadcrumbs}
      />
      <Navbar />

      <SubpageHero
        title="Spa Locations & Nearby Areas"
        subtitle="LOCATION DIRECTORY & TRAVEL GUIDES"
        description="Relaxing Spa Dhaka's verified physical sanctuary is located on Kamal Ataturk Avenue, Banani. Explore detailed location guides for guests visiting from Gulshan, Baridhara, Badda, Mohakhali, Bashundhara, Uttara, and surrounding Dhaka areas."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Primary Physical Location Section */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
              PRIMARY STRATEGIC LOCATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8]">
              Primary Strategic Location Guides
            </h2>
            <p className="text-sm text-[#A8A8A8] font-light mt-3">
              Relaxing Spa Dhaka operates from one physical spa sanctuary on Kamal Ataturk Avenue in Banani, serving Banani, Gulshan, and greater Dhaka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {primaryLocations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-[#151515] p-8 rounded-sm border border-[#C9A45C]/40 hover:border-[#C9A45C] transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] tracking-[0.2em] text-[#C9A45C] uppercase font-bold px-2.5 py-1 bg-[#0B0B0B] border border-[#C9A45C]/30 rounded-sm">
                      {loc.tag}
                    </span>
                    {loc.isPhysical && (
                      <span className="flex items-center gap-1 text-[11px] text-[#C9A45C]">
                        <MapPin size={14} /> Banani 1213
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl text-[#F5F1E8] mb-2">{loc.title}</h3>
                  <p className="text-xs text-[#A8A8A8] font-light leading-relaxed mb-6">
                    {loc.desc}
                  </p>
                </div>

                <Link
                  href={loc.href}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-semibold tracking-wider text-[#C9A45C] hover:text-[#E2C889] transition-colors"
                >
                  <span>VIEW FULL LOCATION PAGE</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Nearby Area Travel Guides */}
      <section className="py-16 md:py-24 bg-[#151515] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
              SEARCH INTENT & PROXIMITY GUIDES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8]">
              Spa Near Nearby Neighborhoods
            </h2>
            <p className="text-sm text-[#A8A8A8] font-light mt-3">
              Looking for a <Link href="/spa-near-me/" className="text-[#C9A45C] hover:underline font-normal">spa near me in Dhaka</Link> or near your neighborhood? Discover travel times, route directions, and service availability to our central Banani location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyLocations.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#C9A45C] font-semibold uppercase tracking-wider mb-2">
                    <Navigation size={12} />
                    <span>{item.dist}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <span className="text-[11px] text-[#A8A8A8]/70 block mb-3 font-light">
                    Target Area: {item.area}
                  </span>
                  <p className="text-xs text-[#A8A8A8] font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C9A45C] hover:underline"
                >
                  <span>Read Travel Guide & Services</span>
                  <ArrowRight size={14} />
                </Link>
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
