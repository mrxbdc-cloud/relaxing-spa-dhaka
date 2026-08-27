import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBookingBar from "@/components/MobileBookingBar";
import { Home, MapPin, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Relaxing Spa Dhaka",
  description: "The requested page could not be found. Return to Relaxing Spa Dhaka home or explore our Banani and Dhaka spa services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0B] text-[#F5F1E8] flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <section className="relative z-10 flex-1 flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#C9A45C]/30 bg-[#151515]">
            <Sparkles size={14} className="text-[#C9A45C]" />
            <span className="text-[10px] tracking-[0.3em] font-semibold text-[#C9A45C] uppercase">
              ERROR 404
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-normal text-[#F5F1E8]">
            Sanctuary Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed max-w-lg mx-auto">
            The page you are searching for might have been moved or renamed. Discover our primary spa hubs or return to our sanctuary homepage.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-md"
            >
              <Home size={16} />
              <span>RETURN TO HOME</span>
            </Link>

            <Link
              href="/locations/spa-in-banani/"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#F5F1E8] border border-[#C9A45C]/40 hover:border-[#C9A45C] transition-all rounded-sm"
            >
              <MapPin size={16} className="text-[#C9A45C]" />
              <span>BANANI SPA HUB</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A8A8A8]">
            <Link href="/locations/spa-in-gulshan/" className="hover:text-[#C9A45C] transition-colors">Spa in Gulshan</Link>
            <Link href="/locations/spa-in-dhaka/" className="hover:text-[#C9A45C] transition-colors">Spa in Dhaka</Link>
            <Link href="/services/" className="hover:text-[#C9A45C] transition-colors">Services Catalog</Link>
            <Link href="/contact/" className="hover:text-[#C9A45C] transition-colors">Contact & Directions</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <MobileBookingBar />
    </main>
  );
}
