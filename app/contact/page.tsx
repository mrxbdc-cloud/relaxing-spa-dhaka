import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import Contact from "@/components/Contact";
import GoogleMap from "@/components/GoogleMap";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Relaxing Spa Dhaka | Book Spa Session in Banani",
  description:
    "Contact Relaxing Spa Dhaka for appointments, location directions on Kamal Ataturk Avenue in Banani, phone bookings (+8801604516489), and instant WhatsApp inquiries.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/contact/",
  },
  openGraph: {
    title: "Contact Relaxing Spa Dhaka | Book Spa Session in Banani",
    description:
      "Contact Relaxing Spa Dhaka for appointments, location directions on Kamal Ataturk Avenue in Banani, phone bookings (+8801604516489), and instant WhatsApp inquiries.",
    url: "https://relaxingspadhaka.com/contact/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Contact Relaxing Spa Dhaka Banani Location",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Relaxing Spa Dhaka | Book Spa Session in Banani",
    description:
      "Contact Relaxing Spa Dhaka for appointments, location directions on Kamal Ataturk Avenue in Banani.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Contact", url: "https://relaxingspadhaka.com/contact/" },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/contact/"
        title="Contact Relaxing Spa Dhaka | Book Spa Session in Banani"
        description="Contact Relaxing Spa Dhaka for appointments, location directions on Kamal Ataturk Avenue in Banani, phone bookings (+8801604516489)."
        breadcrumbs={breadcrumbs}
      />
      <Navbar />

      <SubpageHero
        title="Contact Relaxing Spa Dhaka"
        subtitle="RESERVATIONS & LOCATION"
        description="Schedule your wellness treatment or visit our sanctuary located on Kamal Ataturk Avenue in Banani, Dhaka. We welcome guests from Banani, Gulshan, and across Dhaka."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop"
      />

      <Contact />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
      <MobileBookingBar />
    </main>
  );
}
