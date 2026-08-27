import Link from "next/link";
import Image from "next/image";
import { ChevronRight, MapPin, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

interface Breadcrumb {
  name: string;
  url: string;
}

interface SubpageHeroProps {
  title: string;
  subtitle?: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  bgImage?: string;
}

export default function SubpageHero({
  title,
  subtitle = "RELAXING SPA DHAKA • BANANI",
  description,
  breadcrumbs,
  bgImage = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop",
}: SubpageHeroProps) {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B0B0B] border-b border-[#C9A45C]/20 overflow-hidden">
      {/* Background image with cinematic vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={`${title} at Relaxing Spa Dhaka Banani`}
          fill
          priority
          fetchPriority="high"
          decoding="sync"
          sizes="100vw"
          className="object-cover object-center brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/70 to-[#0B0B0B]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-[#A8A8A8] font-light">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={crumb.url} className="flex items-center gap-2">
                  {idx > 0 && <ChevronRight size={12} className="text-[#C9A45C]" />}
                  {isLast ? (
                    <span className="text-[#C9A45C] font-medium" aria-current="page">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.url} className="hover:text-[#C9A45C] transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Subtitle / Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A45C]/30 bg-[#0B0B0B]/60 backdrop-blur-md mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C9A45C]" />
          <span className="text-[10px] sm:text-xs tracking-[0.25em] font-semibold text-[#C9A45C] uppercase">
            {subtitle}
          </span>
        </div>

        {/* H1 Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F5F1E8] mb-6 leading-tight max-w-4xl">
          {title}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#A8A8A8] font-light leading-relaxed max-w-3xl mb-8">
          {description}
        </p>

        {/* Action Buttons & NAP badge */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={getWhatsAppUrl(`Hello Relaxing Spa Dhaka, I am inquiring about ${title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-[0.18em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-[0_0_20px_rgba(201,164,92,0.3)]"
          >
            <MessageSquare size={16} />
            <span>BOOK VIA WHATSAPP</span>
          </a>

          <div className="flex items-center gap-2 text-xs text-[#A8A8A8] px-4 py-3 bg-[#151515]/80 border border-white/10 rounded-sm">
            <MapPin size={14} className="text-[#C9A45C]" />
            <span>Kamal Ataturk Avenue, Banani, Dhaka</span>
          </div>
        </div>
      </div>
    </section>
  );
}
