import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import InternalLinkingSection from "@/components/InternalLinkingSection";
import FeaturedService from "@/components/FeaturedService";
import WhyChooseUs from "@/components/WhyChooseUs";
import Therapists from "@/components/Therapists";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BookingCTA from "@/components/BookingCTA";
import Contact from "@/components/Contact";
import GoogleMap from "@/components/GoogleMap";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <InternalLinkingSection />
      <FeaturedService />
      <WhyChooseUs />
      <Therapists />
      <Gallery />
      <Testimonials />
      <FAQ />
      <BookingCTA />
      <Contact />
      <GoogleMap />

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <WhatsAppButton />
      <MobileBookingBar />
    </main>
  );
}
