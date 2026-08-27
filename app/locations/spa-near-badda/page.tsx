import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";
import { CheckCircle2, Clock, MapPin, Phone, MessageSquare, ArrowRight, Navigation } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Spa Near Badda, Dhaka | Relaxing Spa Dhaka",
  description:
    "Searching for a spa near Badda, Dhaka? Relaxing Spa Dhaka on Kamal Ataturk Avenue, Banani is just 12-18 mins away via Gulshan Link Road. Private suites & authentic Thai massage.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/locations/spa-near-badda/",
  },
  openGraph: {
    title: "Spa Near Badda, Dhaka | Relaxing Spa Dhaka",
    description:
      "Searching for a spa near Badda, Dhaka? Relaxing Spa Dhaka on Kamal Ataturk Avenue, Banani is just 12-18 mins away via Gulshan Link Road. Private suites & authentic Thai massage.",
    url: "https://relaxingspadhaka.com/locations/spa-near-badda/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Spa Near Badda Dhaka - Relaxing Spa Dhaka Banani",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Near Badda, Dhaka | Relaxing Spa Dhaka",
    description:
      "Luxury spa near Badda. Located just 12-18 mins away on Kamal Ataturk Avenue, Banani.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function SpaNearBaddaPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Locations", url: "https://relaxingspadhaka.com/locations/" },
    { name: "Spa Near Badda", url: "https://relaxingspadhaka.com/locations/spa-near-badda/" },
  ];

  const baddaFaqs = [
    {
      question: "Is Relaxing Spa Dhaka located in Badda?",
      answer: "No, our physical spa facility is located on Kamal Ataturk Avenue in Banani. However, Badda residents can reach us quickly in 12 to 18 minutes via the Gulshan-Badda link road.",
    },
    {
      question: "How do I drive from Middle Badda to the spa?",
      answer: "From Middle Badda or Merul Badda, take the Gulshan-Badda link road toward Gulshan 1, head North to Gulshan 2, and turn West onto Kamal Ataturk Avenue into Banani.",
    },
    {
      question: "What treatments are recommended for visitors from Badda?",
      answer: "We recommend our Traditional Thai Massage, Aroma Oil Therapy, Deep Tissue Massage, and VIP Couples Suites.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/locations/spa-near-badda/"
        title="Spa Near Badda, Dhaka | Relaxing Spa Dhaka"
        description="Searching for a spa near Badda, Dhaka? Relaxing Spa Dhaka on Kamal Ataturk Avenue, Banani is just 12-18 mins away via Gulshan Link Road."
        breadcrumbs={breadcrumbs}
        serviceName="Luxury Spa Therapy for Badda Visitors"
        serviceDescription="Authentic Thai massages, aroma oil therapies, deep tissue bodywork, and private VIP couples suites near Badda."
        faqs={baddaFaqs}
      />
      <Navbar />

      <SubpageHero
        title="Spa Near Badda, Dhaka"
        subtitle="12-18 MINUTES FROM BADDA & MERUL BADDA"
        description="Looking for a high-quality spa near Badda? Relaxing Spa Dhaka is located conveniently nearby on Kamal Ataturk Avenue in Banani. Experience authentic Thai bodywork, organic oil massages, and 100% private suites."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
                  CONVENIENT NEARBY RETREAT
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] mb-4">
                  Looking for a Spa Near Badda?
                </h2>
                <p className="text-base text-[#A8A8A8] font-light leading-relaxed mb-4">
                  If you reside or work in Middle Badda, Merul Badda, or South Badda and are searching for a premium <strong className="text-[#F5F1E8] font-medium">spa near Badda</strong>, our Banani sanctuary on Kamal Ataturk Avenue offers an easy, direct commute.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Relaxing Spa Dhaka provides an international-standard wellness atmosphere equipped with climate-controlled private suites, organic aromatherapy oils, and background-verified Thai specialists.
                </p>
              </div>

              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#C9A45C] text-xs font-semibold uppercase tracking-wider">
                  <Navigation size={16} />
                  <span>LOCATION TRANSPARENCY</span>
                </div>
                <h2 className="font-serif text-2xl text-[#F5F1E8]">
                  Our Banani Sanctuary Location
                </h2>
                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                  Please note: Relaxing Spa Dhaka is physically located on Kamal Ataturk Avenue in Banani, not directly inside Badda. The short commute via the Gulshan Link Road makes us the most convenient luxury spa option for Badda residents.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Thai Massage Near Badda
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Experience authentic <strong className="text-[#F5F1E8]">Thai massage near Badda</strong>. Our therapists combine Sen energy line acupressure with gentle stretching to relieve muscle fatigue and joint tightness.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Getting Here from Badda
                </h2>
                <ul className="space-y-2.5 text-xs text-[#A8A8A8] font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>From Middle Badda / Merul Badda:</strong> Take the Gulshan-Badda link road to Gulshan 1 Circle, turn North toward Gulshan 2, and head West along Kamal Ataturk Avenue into Banani (12-18 mins).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>From Rampura / Hatirjheel:</strong> Travel North via Pragati Sarani or Hatirjheel connection through Gulshan into Banani.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 shadow-2xl space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8] border-b border-[#C9A45C]/20 pb-3">
                  Banani Physical Address
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
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#C9A45C]">{BUSINESS_INFO.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-[#C9A45C] shrink-0" />
                    <div>
                      <span className="text-[#F5F1E8] font-medium block">Hours</span>
                      <span>10:00 AM – 11:00 PM (Daily)</span>
                    </div>
                  </div>
                </div>
                <a
                  href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I am visiting from Badda and would like to book a session.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] rounded-sm"
                >
                  <MessageSquare size={16} />
                  <span>BOOK SESSION FROM BADDA</span>
                </a>
              </div>

              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/20 space-y-3">
                <span className="text-[10px] uppercase text-[#C9A45C] font-semibold block">INTERNAL NAVIGATION</span>
                <div className="space-y-2 text-xs">
                  <Link href="/locations/spa-in-banani/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 font-semibold">
                    Primary Physical Spa in Banani →
                  </Link>
                  <Link href="/locations/" className="block text-[#C9A45C] font-semibold pt-1">
                    All Location Hub Guides →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-[#151515] border-b border-[#C9A45C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-[#F5F1E8]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {baddaFaqs.map((faq, idx) => (
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
