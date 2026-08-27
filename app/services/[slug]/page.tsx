import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";
import { Clock, Tag, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck, MapPin, Phone } from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/services";
import { BUSINESS_INFO, getServiceWhatsAppUrl } from "@/lib/utils";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = SERVICES.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found | Relaxing Spa Dhaka",
    };
  }

  return {
    title: `${service.name} in Banani, Dhaka | Relaxing Spa Dhaka`,
    description: `${service.shortDescription} Duration: 60 Minutes. Verified Price: ${service.price}. Book your session at Relaxing Spa Dhaka on Kamal Ataturk Avenue, Banani.`,
    keywords: service.seoKeywords,
    alternates: {
      canonical: `https://relaxingspadhaka.com/services/${service.slug}/`,
    },
    openGraph: {
      title: `${service.name} in Banani, Dhaka | Relaxing Spa Dhaka`,
      description: `${service.shortDescription} Verified Price: ${service.price} for 60 Minutes. Private luxury suites in Banani.`,
      url: `https://relaxingspadhaka.com/services/${service.slug}/`,
      siteName: "Relaxing Spa Dhaka",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.name} at Relaxing Spa Dhaka`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} in Banani, Dhaka | Relaxing Spa Dhaka`,
      description: `${service.shortDescription} Verified Price: ${service.price} for 60 Minutes.`,
      images: [service.image],
    },
  };
}

export default async function DedicatedServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = SERVICES.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Services", url: "https://relaxingspadhaka.com/services/" },
    { name: service.name, url: `https://relaxingspadhaka.com/services/${service.slug}/` },
  ];

  const whatsappUrl = getServiceWhatsAppUrl(service.name, "60 minutes");

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url={`https://relaxingspadhaka.com/services/${service.slug}/`}
        title={`${service.name} in Banani, Dhaka | Relaxing Spa Dhaka`}
        description={service.shortDescription}
        breadcrumbs={breadcrumbs}
        serviceName={service.name}
        serviceDescription={service.fullDescription}
        faqs={service.faqs}
      />
      <Navbar />

      <SubpageHero
        title={service.name}
        subtitle="VERIFIED SPA TREATMENT • BANANI"
        description={service.shortDescription}
        breadcrumbs={breadcrumbs}
        bgImage={service.image}
      />

      {/* Main Content & Pricing Details */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Detailed Service Narrative */}
            <div className="lg:col-span-7 space-y-8">
              
              <div>
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
                  AUTHENTIC WELLNESS EXPERIENCE
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] mb-6 leading-tight">
                  {service.name}
                </h2>
                <p className="text-base text-[#A8A8A8] font-light leading-relaxed mb-4">
                  {service.fullDescription}
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  All treatments take place in tranquil, private climate-controlled suites at our sanctuary on <strong className="text-[#F5F1E8]">Kamal Ataturk Avenue, Banani, Dhaka</strong>.
                </p>
              </div>

              {/* Explicit Pricing Box (Mandatory Requirement) */}
              <div className="bg-[#151515] p-6 sm:p-8 rounded-sm border border-[#C9A45C]/40 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#C9A45C]/20 pb-4">
                  <div>
                    <span className="text-[11px] tracking-[0.25em] text-[#C9A45C] uppercase font-bold block">
                      OFFICIAL PRICING
                    </span>
                    <h2 className="font-serif text-2xl text-[#F5F1E8] mt-0.5">
                      {service.name} Pricing
                    </h2>
                  </div>
                  <span className="text-xs font-semibold uppercase px-3 py-1 bg-[#0B0B0B] text-[#C9A45C] border border-[#C9A45C]/30 rounded-sm">
                    VERIFIED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="p-4 bg-[#0B0B0B] rounded-sm border border-white/5">
                    <span className="text-xs text-[#A8A8A8] uppercase tracking-wider block mb-1 font-light">Duration</span>
                    <span className="font-serif text-2xl font-normal text-[#F5F1E8]">60 Minutes</span>
                  </div>

                  <div className="p-4 bg-[#0B0B0B] rounded-sm border border-white/5">
                    <span className="text-xs text-[#A8A8A8] uppercase tracking-wider block mb-1 font-light">Verified Price</span>
                    <span className="font-serif text-3xl font-bold text-[#C9A45C]">{service.price}</span>
                  </div>
                </div>

                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                  No hidden fees. Your 60-minute session includes private suite access, fresh laundered organic linens, and complimentary post-treatment herbal tea.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-md"
                >
                  <MessageSquare size={16} />
                  <span>BOOK {service.name.toUpperCase()} FOR {service.price}</span>
                </a>
              </div>

              {/* Treatment Standards */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8]">
                  Treatment Standards & Hygiene
                </h3>
                <ul className="space-y-3 text-xs text-[#A8A8A8] font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>100% Private Suites:</strong> Soundproofed, climate-controlled room dedicated exclusively to your privacy.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Certified Specialists:</strong> Professional practitioners trained in authentic bodywork traditions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#C9A45C] shrink-0 mt-0.5" />
                    <span><strong>Hospital-Grade Sanitation:</strong> Fresh sanitized linens and disinfected treatment suites between every guest.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Quick Contact & Links */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              
              <div className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/30 shadow-2xl space-y-4">
                <h3 className="font-serif text-2xl text-[#F5F1E8] border-b border-[#C9A45C]/20 pb-3">
                  Location & Contact
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
              </div>

              {/* Related Links Box */}
              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/20 space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A45C] font-semibold block">
                  EXPLORE MORE SERVICES
                </span>
                <div className="space-y-2 text-xs">
                  <Link href="/services/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors font-semibold">
                    View Complete Services Catalog →
                  </Link>
                  <Link href="/locations/spa-in-banani/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors">
                    Spa in Banani Primary Branch →
                  </Link>
                  <Link href="/locations/spa-in-dhaka/" className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 transition-colors">
                    Spa in Dhaka Metropolitan Guide →
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Treatment FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-[#151515] border-b border-[#C9A45C]/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[10px] tracking-[0.3em] text-[#C9A45C] uppercase font-semibold block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-serif text-3xl text-[#F5F1E8]">
                {service.name} FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/20">
                  <h3 className="font-serif text-lg text-[#F5F1E8] mb-2">{faq.question}</h3>
                  <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingCTA />
      <Footer />
      <WhatsAppButton />
      <MobileBookingBar />
    </main>
  );
}
