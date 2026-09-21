import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";
import {
  MapPin,
  Phone,
  MessageSquare,
  Send,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Navigation,
  Compass,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { BUSINESS_INFO, getWhatsAppUrl, getServiceWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Spa Near Me in Dhaka | Relaxing Spa Dhaka",
  description:
    "Looking for a spa near me in Dhaka? Relaxing Spa Dhaka in Banani offers professional massage, Thai massage, body spa and relaxing wellness treatments in a premium environment.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/spa-near-me/",
  },
  openGraph: {
    title: "Spa Near Me in Dhaka | Relaxing Spa Dhaka",
    description:
      "Looking for a spa near me in Dhaka? Relaxing Spa Dhaka in Banani offers professional massage, Thai massage, body spa and relaxing wellness treatments in a premium environment.",
    url: "https://relaxingspadhaka.com/spa-near-me/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Relaxing Spa Dhaka - Spa Near Me in Banani Dhaka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Near Me in Dhaka | Relaxing Spa Dhaka",
    description:
      "Looking for a spa near me in Dhaka? Relaxing Spa Dhaka in Banani offers professional massage, Thai massage, body spa and relaxing wellness treatments.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function SpaNearMePage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Spa Near Me", url: "https://relaxingspadhaka.com/spa-near-me/" },
  ];

  const spaNearMeFaqs = [
    {
      question: "Where can I find a spa near me in Dhaka?",
      answer:
        "If you are searching for a spa near me in Dhaka, Relaxing Spa Dhaka is centrally located on Kamal Ataturk Avenue in Banani (Dhaka 1213). Our sanctuary provides authentic Thai massage, full-body oil therapies, deep tissue bodywork, and private relaxation suites easily accessible from across the capital.",
    },
    {
      question: "Where is Relaxing Spa Dhaka located?",
      answer:
        "Relaxing Spa Dhaka is physically located on Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh. We are situated on the main avenue in the heart of Banani's commercial and lifestyle district.",
    },
    {
      question: "Is Relaxing Spa Dhaka near Banani?",
      answer:
        "Yes, Relaxing Spa Dhaka is physically located directly in Banani on Kamal Ataturk Avenue, making it the premier local wellness destination for anyone living, working, or staying in the Banani area.",
    },
    {
      question: "Is Relaxing Spa Dhaka convenient from Gulshan?",
      answer:
        "Yes, our Banani center is situated directly across from Gulshan. Guests traveling from Gulshan 1, Gulshan 2, or the Diplomatic Zone can reach us within 5 to 10 minutes via Kamal Ataturk Avenue or the Banani bridge.",
    },
    {
      question: "What massage services are available?",
      answer:
        "We offer a complete range of professional wellness treatments including Traditional Thai Massage (৳4,500), Dry Massage (৳5,000), Oil Massage (৳5,500), Hot Oil Massage (৳6,000), Hot Stone Massage (৳6,500), Aroma Body Massage (৳7,500), Deep Tissue Massage (৳8,000), Four Hand Massage (৳12,500), Six Hand Massage (৳14,500), and VIP Couple Massage (৳16,500). All sessions are 60 minutes.",
    },
    {
      question: "Do I need to book an appointment?",
      answer:
        "Advance appointment booking is highly recommended to guarantee your preferred therapist, time slot, and private suite—particularly during evening hours and weekends. Same-day bookings can also be arranged via phone, WhatsApp, or Telegram.",
    },
    {
      question: "How can I contact Relaxing Spa Dhaka?",
      answer:
        "You can reach Relaxing Spa Dhaka by direct phone call at +8801604516489, message us on WhatsApp at +8801604516489, connect via Telegram at @relaxingspadhaka, or use the appointment form on our official contact page.",
    },
    {
      question: "What are the opening hours?",
      answer:
        "Relaxing Spa Dhaka is open 7 days a week from 10:00 AM to 11:00 PM, providing flexible daytime, afternoon, and evening wellness sessions throughout the week.",
    },
    {
      question: "How can I get directions to the spa?",
      answer:
        "You can navigate easily by setting your destination to 'Relaxing Spa Dhaka' on Google Maps or directing your vehicle to Kamal Ataturk Avenue, Banani, Dhaka 1213. We provide detailed driving directions on our website for visitors commuting from Gulshan, Mohakhali, Baridhara, Badda, and Uttara.",
    },
  ];

  // Select key services to showcase in the grid
  const displayedServices = SERVICES.slice(0, 8);

  const nearbyAreas = [
    {
      name: "Banani",
      route: "Physical Location — Kamal Ataturk Avenue",
      time: "Direct Access",
      desc: "Our sanctuary is located right on the main avenue in Banani, providing instant access for local residents, hotel guests, and corporate professionals.",
      href: "/locations/spa-in-banani/",
    },
    {
      name: "Gulshan",
      route: "Via Kamal Ataturk Avenue / Banani Bridge",
      time: "5–10 mins drive",
      desc: "Conveniently situated adjacent to Gulshan 1, Gulshan 2, and the Diplomatic Zone with seamless road connectivity.",
      href: "/locations/spa-in-gulshan/",
    },
    {
      name: "Mohakhali",
      route: "Via Wireless Gate & Airport Road",
      time: "7–12 mins drive",
      desc: "A brief commute North along Airport Road directly connecting Mohakhali Commercial Area and Mohakhali DOHS to our Banani center.",
      href: "/locations/spa-near-mohakhali/",
    },
    {
      name: "Baridhara",
      route: "Via Pragati Sarani & Gulshan 2",
      time: "8–12 mins drive",
      desc: "Effortless travel from Baridhara Diplomatic Enclave and Baridhara DOHS seeking serene, private therapeutic massage.",
      href: "/locations/spa-near-baridhara/",
    },
    {
      name: "Badda",
      route: "Via Gulshan-Badda Link Road",
      time: "12–18 mins drive",
      desc: "Quick connectivity from Middle Badda, South Badda, and Merul Badda directly across Gulshan to Kamal Ataturk Avenue.",
      href: "/locations/spa-near-badda/",
    },
    {
      name: "Bashundhara",
      route: "Via Kuril Flyover & Pragati Sarani",
      time: "15–22 mins drive",
      desc: "Accessible for residents of Bashundhara R/A seeking an established, verified luxury spa experience in central Banani.",
      href: "/locations/spa-near-bashundhara/",
    },
    {
      name: "Nikunja & Khilkhet",
      route: "Via Airport Road Southbound",
      time: "12–18 mins drive",
      desc: "Straightforward commute down Airport Road for business travelers, airline crews, and professionals in Nikunja 1 & 2.",
      href: "/locations/spa-near-nikunja/",
    },
    {
      name: "Uttara",
      route: "Via Dhaka-Mymensingh Highway & Elevated Expressway",
      time: "20–30 mins drive",
      desc: "A smooth drive into central Banani for Uttara residents seeking authentic Thai bodywork and certified practitioners.",
      href: "/locations/spa-near-uttara/",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      {/* Dynamic JSON-LD Structured Data */}
      <JsonLd
        url="https://relaxingspadhaka.com/spa-near-me/"
        title="Spa Near Me in Dhaka | Relaxing Spa Dhaka"
        description="Looking for a spa near me in Dhaka? Relaxing Spa Dhaka in Banani offers professional massage, Thai massage, body spa and relaxing wellness treatments in a premium environment."
        breadcrumbs={breadcrumbs}
        serviceName="Spa Near Me in Dhaka - Relaxing Spa & Massage"
        serviceDescription="Professional spa, traditional Thai massage, aroma oil therapy, deep tissue bodywork, and private suites at Relaxing Spa Dhaka on Kamal Ataturk Avenue, Banani."
        faqs={spaNearMeFaqs}
      />

      {/* Global Navbar */}
      <Navbar />

      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B0B0B] border-b border-[#C9A45C]/20 overflow-hidden">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
            alt="Relaxing Spa Dhaka spa interior in Banani"
            fill
            priority
            fetchPriority="high"
            decoding="sync"
            sizes="100vw"
            className="object-cover object-center brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/75 to-[#0B0B0B]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#A8A8A8] font-light">
              <li>
                <Link href="/" className="hover:text-[#C9A45C] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={12} className="text-[#C9A45C]" />
                <span className="text-[#C9A45C] font-medium" aria-current="page">
                  Spa Near Me
                </span>
              </li>
            </ol>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C9A45C]/30 bg-[#0B0B0B]/60 backdrop-blur-md mb-5">
            <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" />
            <span className="text-[10px] sm:text-xs tracking-[0.3em] font-semibold text-[#C9A45C] uppercase">
              RELAXING SPA DHAKA
            </span>
          </div>

          {/* Single H1 Tag */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F1E8] mb-6 leading-[1.15] max-w-4xl">
            Spa Near Me in Dhaka – Relaxing Spa & Massage
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#A8A8A8] font-light leading-relaxed max-w-3xl mb-8">
            Looking for a spa near me in Dhaka? Relaxing Spa Dhaka offers a comfortable and relaxing wellness experience in Banani, with convenient access from Gulshan, Mohakhali and nearby areas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
            {/* 1. Book via WhatsApp / Appointment */}
            <a
              href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I am looking for a spa near me in Dhaka and would like to book a session.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-[0_0_25px_rgba(201,164,92,0.35)] hover:-translate-y-0.5"
            >
              <MessageSquare size={16} />
              <span>BOOK VIA WHATSAPP</span>
            </a>

            {/* 2. Call Now Button */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F1E8] bg-white/5 hover:bg-white/10 border border-[#C9A45C]/40 hover:border-[#C9A45C] transition-all rounded-sm backdrop-blur-sm hover:-translate-y-0.5"
            >
              <Phone size={15} className="text-[#C9A45C]" />
              <span>CALL NOW</span>
            </a>

            {/* 3. Telegram Button */}
            <a
              href="https://t.me/relaxingspadhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F1E8] bg-[#0088cc]/20 hover:bg-[#0088cc]/30 border border-[#0088cc]/50 hover:border-[#0088cc] transition-all rounded-sm backdrop-blur-sm hover:-translate-y-0.5"
            >
              <Send size={15} className="text-[#38a9f0]" />
              <span>TELEGRAM</span>
            </a>
          </div>

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 text-xs text-[#A8A8A8] px-4 py-2.5 bg-[#151515]/80 border border-white/10 rounded-sm">
            <MapPin size={14} className="text-[#C9A45C] shrink-0" />
            <span>Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN INFORMATIVE LOCAL SEO CONTENT (SECTIONS 1–6)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Main Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* SECTION 1: Find a Spa Near Me in Dhaka */}
              <article className="space-y-4">
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block">
                  LOCAL SPA DISCOVERY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] leading-tight">
                  Find a Spa Near Me in Dhaka
                </h2>
                <p className="text-base text-[#A8A8A8] font-light leading-relaxed">
                  When you search for a <strong className="text-[#F5F1E8] font-medium">spa near me in Dhaka</strong>, you are typically looking for more than just a pin on a map. You are seeking a dependable, clean, and tranquil sanctuary where you can escape the noise of the city, release deep physical exhaustion, and receive professional bodywork from certified practitioners.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Location is a critical consideration in a bustling metropolis like Dhaka. Spending hours navigating heavy traffic just to receive a massage defeats the purpose of relaxation. Centrally positioned on <strong className="text-[#F5F1E8]">Kamal Ataturk Avenue in Banani</strong>, <strong className="text-[#F5F1E8]">Relaxing Spa Dhaka</strong> serves as an easily accessible wellness hub for guests across the city.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Whether you reside in Banani, work in Gulshan, or are visiting Dhaka on business, our center provides a serene atmosphere characterized by warm ambient lighting, calming aromatherapy scents, and 100% private treatment rooms designed for complete personal quietude. When choosing a <Link href="/locations/spa-in-dhaka/" className="text-[#C9A45C] hover:underline">spa in Dhaka</Link>, having verified business information, experienced therapists, and transparent pricing ensures a seamless and rejuvenating visit.
                </p>
              </article>

              {/* SECTION 2: Spa Near Me in Banani */}
              <article className="space-y-4 pt-4 border-t border-white/5">
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block">
                  BANANI SANCTUARY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Spa Near Me in Banani
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Relaxing Spa Dhaka is physically established directly in the heart of Banani on Kamal Ataturk Avenue. As one of Dhaka&apos;s premier commercial, diplomatic, and residential districts, Banani offers broad, well-connected avenues, convenient parking, and high security.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  If you are located in Banani or neighboring streets such as Road 11, Road 27, or Chairmanbari, reaching our spa takes only minutes. Our facility welcomes corporate executives, local residents, and travelers staying in Banani hotels who desire immediate relief from muscular tightness, posture fatigue, or everyday mental stress. Explore our dedicated <Link href="/locations/spa-in-banani/" className="text-[#C9A45C] hover:underline font-medium">Spa in Banani</Link> guide for detailed neighborhood amenities and suite specifications.
                </p>
              </article>

              {/* SECTION 3: Spa Near Me Near Gulshan */}
              <article className="space-y-4 pt-4 border-t border-white/5">
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block">
                  PROXIMITY & ACCESSIBILITY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Spa Near Me Near Gulshan
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  For visitors searching for spa services around the Gulshan area, Relaxing Spa Dhaka on Kamal Ataturk Avenue provides an ideal adjacent destination. The Banani lake bridge directly connects Gulshan 2 and Banani, allowing guests from Gulshan 1, Gulshan 2, and the Diplomatic Zone to arrive at our door in approximately 5 to 10 minutes by car or rickshaw.
                </p>
                <div className="bg-[#151515] p-5 rounded-sm border border-[#C9A45C]/30 text-xs text-[#A8A8A8] font-light leading-relaxed space-y-2">
                  <p className="text-[#F5F1E8] font-medium flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#C9A45C]" />
                    <span>Clear Location Transparency</span>
                  </p>
                  <p>
                    Please note: Relaxing Spa Dhaka operates solely from our verified physical center on Kamal Ataturk Avenue in Banani. We do not operate a separate branch inside Gulshan, but our Banani sanctuary is conveniently accessible to anyone seeking a luxury <Link href="/locations/spa-in-gulshan/" className="text-[#C9A45C] hover:underline">spa near Gulshan</Link>.
                  </p>
                </div>
              </article>

              {/* SECTION 4: Massage Near Me in Dhaka */}
              <article className="space-y-4 pt-4 border-t border-white/5">
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block">
                  THERAPEUTIC BODYWORK
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Massage Near Me in Dhaka
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  If you are looking for a professional <strong className="text-[#F5F1E8]">massage near me in Dhaka</strong>, our therapy menu has been curated to address diverse wellness needs. Each session is a full 60 minutes conducted in a private, soundproofed room with climate control and soothing ambient music.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Our verified treatments include:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5 space-y-1.5">
                    <h3 className="font-serif text-base text-[#F5F1E8] flex items-center justify-between">
                      <span>Traditional Thai Massage</span>
                      <span className="text-xs text-[#C9A45C] font-mono">৳4,500</span>
                    </h3>
                    <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                      Oil-free Sen line acupressure and gentle yoga stretching to restore flexibility and posture.
                    </p>
                    <Link href="/services/thai-massage/" className="inline-flex items-center gap-1 text-[11px] text-[#C9A45C] hover:underline font-medium pt-1">
                      <span>Learn more</span> <ArrowRight size={11} />
                    </Link>
                  </div>

                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5 space-y-1.5">
                    <h3 className="font-serif text-base text-[#F5F1E8] flex items-center justify-between">
                      <span>Relaxing Oil Massage</span>
                      <span className="text-xs text-[#C9A45C] font-mono">৳5,500</span>
                    </h3>
                    <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                      Flowing, rhythmic strokes using warm botanical oils to release daily stress and body fatigue.
                    </p>
                    <Link href="/services/oil-massage/" className="inline-flex items-center gap-1 text-[11px] text-[#C9A45C] hover:underline font-medium pt-1">
                      <span>Learn more</span> <ArrowRight size={11} />
                    </Link>
                  </div>

                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5 space-y-1.5">
                    <h3 className="font-serif text-base text-[#F5F1E8] flex items-center justify-between">
                      <span>Deep Tissue Massage</span>
                      <span className="text-xs text-[#C9A45C] font-mono">৳8,000</span>
                    </h3>
                    <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                      Firm, targeted muscle friction targeting chronic back knots, neck stiffness, and shoulder tension.
                    </p>
                    <Link href="/services/deep-tissue-massage/" className="inline-flex items-center gap-1 text-[11px] text-[#C9A45C] hover:underline font-medium pt-1">
                      <span>Learn more</span> <ArrowRight size={11} />
                    </Link>
                  </div>

                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5 space-y-1.5">
                    <h3 className="font-serif text-base text-[#F5F1E8] flex items-center justify-between">
                      <span>Aroma Body Massage</span>
                      <span className="text-xs text-[#C9A45C] font-mono">৳7,500</span>
                    </h3>
                    <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                      Sensory aromatherapy bodywork using natural essential oils to calm the nervous system.
                    </p>
                    <Link href="/services/aroma-body-massage/" className="inline-flex items-center gap-1 text-[11px] text-[#C9A45C] hover:underline font-medium pt-1">
                      <span>Learn more</span> <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>

                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed pt-2">
                  Additional options include <Link href="/services/dry-massage/" className="text-[#C9A45C] hover:underline">Dry Massage</Link> (৳5,000), <Link href="/services/hot-oil-massage/" className="text-[#C9A45C] hover:underline">Hot Oil Massage</Link> (৳6,000), <Link href="/services/hot-stone-massage/" className="text-[#C9A45C] hover:underline">Hot Stone Therapy</Link> (৳6,500), and side-by-side <Link href="/services/couple-massage/" className="text-[#C9A45C] hover:underline">Couple Massage</Link> (৳16,500) in our luxury VIP dual suite.
                </p>
              </article>

              {/* SECTION 5: Thai Massage Near Me */}
              <article className="space-y-4 pt-4 border-t border-white/5">
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block">
                  ANCIENT EASTERN TRADITION
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Thai Massage Near Me
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  Traditional Thai massage is renowned worldwide as an invigorating holistic bodywork system that blends gentle rhythmic compression, acupressure along natural energy pathways (Sen lines), and assisted stretching. Unlike Western oil massages where you remain passive on a treatment table, Thai massage involves interactive body mobilization performed over comfortable, loose spa garments.
                </p>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  At Relaxing Spa Dhaka, our therapists are trained in proper Thai bodywork dynamics. A 60-minute session works methodically from the feet upward, opening tight hips, decompressing the spine, easing lower back strain from prolonged office sitting, and invigorating full-body circulation. It is an exceptional therapy for anyone looking for a holistic physical reset without using oils or lotions.
                </p>
              </article>

              {/* SECTION 6: Why Visit Relaxing Spa Dhaka? */}
              <article className="space-y-4 pt-4 border-t border-white/5">
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block">
                  WHY GUESTS CHOOSE US
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  Why Visit Relaxing Spa Dhaka?
                </h2>
                <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
                  We strive to provide an uncompromised standard of hospitality and wellness care. Here is what distinguishes Relaxing Spa Dhaka:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5">
                    <strong className="text-[#F5F1E8] text-sm block mb-1">Prime Banani Location</strong>
                    <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                      Situated directly on Kamal Ataturk Avenue with straightforward access, secure surroundings, and convenient transport links.
                    </p>
                  </div>
                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5">
                    <strong className="text-[#F5F1E8] text-sm block mb-1">100% Private Suites</strong>
                    <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                      Every guest enjoys an individual, soundproofed, climate-controlled suite ensuring complete confidentiality and calm.
                    </p>
                  </div>
                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5">
                    <strong className="text-[#F5F1E8] text-sm block mb-1">Hospital-Grade Sanitation</strong>
                    <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                      Sterilized linens, sanitized massage tables, and spotless treatment environments maintained meticulously between sessions.
                    </p>
                  </div>
                  <div className="p-4 bg-[#151515] rounded-sm border border-white/5">
                    <strong className="text-[#F5F1E8] text-sm block mb-1">Transparent Verified Pricing</strong>
                    <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                      Clear published rates with zero hidden charges. All treatments are full 60-minute therapeutic experiences.
                    </p>
                  </div>
                </div>
              </article>

            </div>

            {/* Right Sticky Column: Business Details, Quick CTAs & Navigation (5 cols) */}
            <aside className="lg:col-span-5 space-y-6 sticky top-28">
              
              {/* Business NAP & Contact Card */}
              <div className="bg-[#151515] p-6 sm:p-7 rounded-sm border border-[#C9A45C]/30 shadow-2xl space-y-5">
                <div className="border-b border-[#C9A45C]/20 pb-4">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A45C] font-semibold block mb-1">
                    VERIFIED BUSINESS INFORMATION
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F1E8]">
                    Relaxing Spa Dhaka
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs text-[#A8A8A8] font-light">
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
                      <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#C9A45C] transition-colors">
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-[#C9A45C] shrink-0" />
                    <div>
                      <span className="text-[#F5F1E8] font-medium block">Opening Hours</span>
                      <span>10:00 AM – 11:00 PM (Monday – Sunday)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Send size={16} className="text-[#38a9f0] shrink-0" />
                    <div>
                      <span className="text-[#F5F1E8] font-medium block">Telegram Channel</span>
                      <a
                        href="https://t.me/relaxingspadhaka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#38a9f0] transition-colors"
                      >
                        @relaxingspadhaka
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <a
                    href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I am looking for a spa near me and would like to reserve a session.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-md"
                  >
                    <MessageSquare size={16} />
                    <span>BOOK VIA WHATSAPP</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full py-3 inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F1E8] bg-[#0B0B0B] hover:bg-white/5 border border-white/10 hover:border-[#C9A45C] transition-all rounded-sm"
                  >
                    <Phone size={14} className="text-[#C9A45C]" />
                    <span>CALL {BUSINESS_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Internal Quick Links Directory */}
              <div className="bg-[#0B0B0B] p-6 rounded-sm border border-[#C9A45C]/20 space-y-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A45C] font-semibold block">
                  EXPLORE KEY LOCATIONS & SERVICES
                </span>
                <div className="space-y-2 text-xs">
                  <Link
                    href="/locations/spa-in-banani/"
                    className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors font-medium"
                  >
                    Spa in Banani (Physical Center) →
                  </Link>
                  <Link
                    href="/locations/spa-in-gulshan/"
                    className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors"
                  >
                    Spa Near Gulshan (5-10m) →
                  </Link>
                  <Link
                    href="/locations/spa-in-dhaka/"
                    className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors"
                  >
                    Spa in Dhaka Metropolitan Guide →
                  </Link>
                  <Link
                    href="/services/thai-massage/"
                    className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors"
                  >
                    Thai Massage Banani (৳4,500) →
                  </Link>
                  <Link
                    href="/services/aroma-body-massage/"
                    className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors"
                  >
                    Aroma Body Massage (৳7,500) →
                  </Link>
                  <Link
                    href="/services/couple-massage/"
                    className="block text-[#F5F1E8] hover:text-[#C9A45C] py-1 border-b border-white/5 transition-colors"
                  >
                    VIP Couple Massage (৳16,500) →
                  </Link>
                  <Link
                    href="/services/"
                    className="block text-[#C9A45C] font-semibold pt-1 transition-colors"
                  >
                    View All 12 Spa Services & Prices →
                  </Link>
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED SERVICES GRID SECTION (SECTION 10)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#151515] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-3">
              WELLNESS MENU & EXACT PRICING
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E8] mb-4">
              Featured Spa & Massage Treatments
            </h2>
            <p className="text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed">
              Explore our most popular treatments designed for total body renewal. All sessions are 60 minutes in private suites with verified pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedServices.map((service) => {
              const serviceUrl = `/services/${service.slug}/`;
              const whatsappUrl = getServiceWhatsAppUrl(service.name, "60 minutes");

              return (
                <div
                  key={service.id}
                  className="group bg-[#0B0B0B] rounded-sm border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.name} at Relaxing Spa Dhaka in Banani`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
                    {service.featured && (
                      <span className="absolute top-3 left-3 text-[9px] tracking-[0.2em] font-semibold uppercase bg-[#C9A45C] text-[#0B0B0B] px-2.5 py-1 rounded-sm shadow-md">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-normal text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-2">
                        {service.name}
                      </h3>
                      <p className="text-xs text-[#A8A8A8] font-light leading-relaxed line-clamp-2 mb-4">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div>
                      <div className="mb-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 text-[#A8A8A8] bg-[#151515] px-2 py-1 rounded-sm">
                          <Clock size={12} className="text-[#C9A45C]" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="font-serif text-xl font-bold text-[#C9A45C]">
                          {service.price}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href={serviceUrl}
                          className="inline-flex items-center justify-center gap-1 px-3 py-2 text-[10px] font-semibold tracking-wider uppercase text-[#F5F1E8] bg-[#151515] hover:bg-white/10 border border-[#C9A45C]/30 hover:border-[#C9A45C] transition-all rounded-sm text-center"
                        >
                          <span>DETAILS</span>
                          <ArrowRight size={10} />
                        </Link>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 px-3 py-2 text-[10px] font-semibold tracking-wider uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm text-center font-bold"
                        >
                          <span>BOOK</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#F5F1E8] bg-[#0B0B0B] border border-[#C9A45C]/40 hover:border-[#C9A45C] hover:text-[#C9A45C] transition-all rounded-sm"
            >
              <span>EXPLORE ALL 12 SIGNATURE SPA SERVICES</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          NEARBY AREAS GUIDE SECTION (SECTION 12)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
              GEOGRAPHIC ACCESSIBILITY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8]">
              Serving Spa Searches Around Dhaka
            </h2>
            <p className="text-sm text-[#A8A8A8] font-light mt-3">
              Operating from our central Banani physical center, we provide convenient access for guests arriving from nearby Dhaka residential and commercial neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#C9A45C] font-semibold uppercase tracking-wider mb-2">
                    <Navigation size={12} />
                    <span>{area.time}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-1">
                    Spa Near {area.name}
                  </h3>
                  <span className="text-[11px] text-[#A8A8A8]/80 block mb-3 font-light">
                    {area.route}
                  </span>
                  <p className="text-xs text-[#A8A8A8] font-light leading-relaxed mb-6">
                    {area.desc}
                  </p>
                </div>

                <Link
                  href={area.href}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#C9A45C] hover:underline"
                >
                  <span>View travel directions</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          GOOGLE MAP / PHYSICAL LOCATION SECTION (SECTION 11)
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#151515] border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
                  FIND OUR BANANI SANCTUARY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] leading-tight">
                  Visit Relaxing Spa Dhaka in Banani
                </h2>
              </div>

              <div className="space-y-4 text-xs text-[#A8A8A8] font-light leading-relaxed">
                <p>
                  Our physical sanctuary is established on <strong className="text-[#F5F1E8]">Kamal Ataturk Avenue, Banani, Dhaka 1213</strong>. Centrally located on the main artery connecting Airport Road and Gulshan 2, visiting our spa is quick and convenient whether you travel by personal car, ride-share, or public transit.
                </p>
                <div className="p-4 bg-[#0B0B0B] border border-white/5 rounded-sm space-y-2">
                  <div className="flex items-center gap-2 text-[#F5F1E8] font-medium text-xs">
                    <MapPin size={15} className="text-[#C9A45C]" />
                    <span>Relaxing Spa Dhaka</span>
                  </div>
                  <p className="text-[11px] text-[#A8A8A8]">
                    Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh
                  </p>
                  <p className="text-[11px] text-[#C9A45C]">
                    Open Daily: 10:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Relaxing+Spa+Dhaka+Kamal+Ataturk+Avenue+Banani+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-md"
                >
                  <Compass size={14} />
                  <span>GET DIRECTIONS</span>
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 px-5 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F1E8] bg-[#0B0B0B] hover:bg-white/5 border border-[#C9A45C]/30 hover:border-[#C9A45C] transition-all rounded-sm"
                >
                  <span>CONTACT PAGE</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 h-[360px] sm:h-[420px] rounded-sm overflow-hidden border border-[#C9A45C]/30 shadow-2xl relative">
              <iframe
                title="Relaxing Spa Dhaka Banani Location Google Map"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7080776290477!2d90.40492827389416!3d23.793407487126668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72082f69c33%3A0x5617b6a2678fe7ad!2sRelaxing%20Spa%20Dhaka%20-%20Banani%20Heaven!5e0!3m2!1sen!2sbd!4v1787388453682!5m2!1sen!2sbd"
              />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ SECTION (SECTION 15)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#0B0B0B] border-b border-[#C9A45C]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8]">
              Frequently Asked Questions About Spa Near Me in Dhaka
            </h2>
            <p className="text-sm text-[#A8A8A8] font-light mt-3">
              Helpful information for planning your spa and massage experience at Relaxing Spa Dhaka in Banani.
            </p>
          </div>

          <div className="space-y-4">
            {spaNearMeFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/20 hover:border-[#C9A45C]/50 transition-colors"
              >
                <h3 className="font-serif text-lg text-[#F5F1E8] mb-2 flex items-start gap-2">
                  <span className="text-[#C9A45C] font-semibold font-mono text-sm">{idx + 1}.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          CONVERSION SECTION (SECTION 25)
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#151515] overflow-hidden border-b border-[#C9A45C]/20">
        {/* Background Subtle Accent */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop"
            alt="Relaxing Spa Dhaka luxury treatment suite in Banani"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0B0B0B]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-3">
            PLAN YOUR VISIT TODAY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E8] mb-4 leading-tight">
            Looking for a Spa Near Me in Dhaka?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#A8A8A8] font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Explore the services at Relaxing Spa Dhaka in Banani and contact us to plan your visit.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-7 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-[0_0_25px_rgba(201,164,92,0.35)]"
            >
              CALL NOW
            </a>

            <a
              href="https://t.me/relaxingspadhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F1E8] bg-[#0088cc]/20 hover:bg-[#0088cc]/30 border border-[#0088cc]/60 transition-all rounded-sm"
            >
              <Send size={15} className="text-[#38a9f0]" />
              <span>TELEGRAM</span>
            </a>

            <a
              href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I am inquiring about spa sessions in Banani.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F1E8] bg-white/5 hover:bg-white/10 border border-[#C9A45C]/40 hover:border-[#C9A45C] transition-all rounded-sm"
            >
              <MessageSquare size={15} className="text-[#C9A45C]" />
              <span>WHATSAPP</span>
            </a>

            <a
              href="https://maps.google.com/?q=Relaxing+Spa+Dhaka+Kamal+Ataturk+Avenue+Banani+Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F1E8] bg-[#0B0B0B] hover:bg-white/5 border border-white/15 transition-all rounded-sm"
            >
              <Compass size={15} className="text-[#C9A45C]" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Booking CTA & Footer */}
      <BookingCTA />
      <Footer />
      <WhatsAppButton />
      <MobileBookingBar />
    </main>
  );
}
