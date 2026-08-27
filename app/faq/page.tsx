import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import FAQ from "@/components/FAQ";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";
import { FAQS } from "@/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Relaxing Spa Dhaka",
  description:
    "Find answers to common guest questions regarding spa bookings, Thai massage etiquette, opening hours, pricing, couples suites, and location in Banani, Dhaka.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/faq/",
  },
  openGraph: {
    title: "Frequently Asked Questions | Relaxing Spa Dhaka",
    description:
      "Find answers to common guest questions regarding spa bookings, Thai massage etiquette, opening hours, pricing, couples suites, and location in Banani, Dhaka.",
    url: "https://relaxingspadhaka.com/faq/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "FAQ Relaxing Spa Dhaka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Relaxing Spa Dhaka",
    description:
      "Find answers to common guest questions regarding spa bookings, Thai massage, and location in Banani.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function FAQPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "FAQ", url: "https://relaxingspadhaka.com/faq/" },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/faq/"
        title="Frequently Asked Questions | Relaxing Spa Dhaka"
        description="Find answers to common guest questions regarding spa bookings, Thai massage etiquette, opening hours, pricing, couples suites, and location in Banani, Dhaka."
        breadcrumbs={breadcrumbs}
        faqs={FAQS}
      />
      <Navbar />

      <SubpageHero
        title="Frequently Asked Questions"
        subtitle="GUEST INFORMATION & HELP"
        description="Everything you need to know about your spa experience at Relaxing Spa Dhaka on Kamal Ataturk Avenue, Banani. Browse answers regarding reservations, therapist qualifications, and treatment etiquette."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1600&auto=format&fit=crop"
      />

      <FAQ />
      <BookingCTA />
      <Footer />
      <WhatsAppButton />
      <MobileBookingBar />
    </main>
  );
}
