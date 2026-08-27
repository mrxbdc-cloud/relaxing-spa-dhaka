import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SubpageHero from "@/components/SubpageHero";
import Gallery from "@/components/Gallery";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Spa Gallery & Tranquil Atmosphere | Relaxing Spa Dhaka",
  description:
    "Explore our photo gallery featuring luxury private suites, authentic Thai massage therapy rooms, serene lighting, and premium spa facilities in Banani, Dhaka.",
  alternates: {
    canonical: "https://relaxingspadhaka.com/gallery/",
  },
  openGraph: {
    title: "Spa Gallery & Tranquil Atmosphere | Relaxing Spa Dhaka",
    description:
      "Explore our photo gallery featuring luxury private suites, authentic Thai massage therapy rooms, serene lighting, and premium spa facilities in Banani, Dhaka.",
    url: "https://relaxingspadhaka.com/gallery/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Relaxing Spa Dhaka Gallery Suites Banani",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spa Gallery & Tranquil Atmosphere | Relaxing Spa Dhaka",
    description:
      "Explore our photo gallery featuring luxury private suites and authentic Thai massage therapy rooms in Banani.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function GalleryPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://relaxingspadhaka.com/" },
    { name: "Gallery", url: "https://relaxingspadhaka.com/gallery/" },
  ];

  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      <JsonLd
        url="https://relaxingspadhaka.com/gallery/"
        title="Spa Gallery & Tranquil Atmosphere | Relaxing Spa Dhaka"
        description="Explore our photo gallery featuring luxury private suites, authentic Thai massage therapy rooms, serene lighting, and premium spa facilities in Banani, Dhaka."
        breadcrumbs={breadcrumbs}
      />
      <Navbar />

      <SubpageHero
        title="Spa Suite & Atmosphere Gallery"
        subtitle="VISUAL TOUR OF OUR SANCTUARY"
        description="Step inside Relaxing Spa Dhaka. Take a visual tour of our private massage suites, soothing lounge spaces, and serene architectural elements designed for ultimate relaxation in Banani."
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop"
      />

      <Gallery />
      <BookingCTA />
      <Footer />
      <WhatsAppButton />
      <MobileBookingBar />
    </main>
  );
}
