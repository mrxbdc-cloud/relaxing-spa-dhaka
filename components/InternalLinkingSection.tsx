import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

export default function InternalLinkingSection() {
  const hubs = [
    {
      title: "Spa in Banani Hub",
      description: "Our primary physical sanctuary on Kamal Ataturk Avenue. Featuring private VIP suites, authentic Thai massage, and luxury aroma oil therapies.",
      href: "/locations/spa-in-banani/",
      badge: "PRIMARY LOCATION",
    },
    {
      title: "Spa in Gulshan Hub",
      description: "Direct 5-10 minute commute across the Banani lake bridge serving residents and diplomats in Gulshan 1 & Gulshan 2.",
      href: "/locations/spa-in-gulshan/",
      badge: "PRIMARY STRATEGIC",
    },
    {
      title: "Spa in Dhaka Hub",
      description: "Explore premier wellness experiences and full-body relaxation therapies across Dhaka city.",
      href: "/locations/spa-in-dhaka/",
      badge: "METROPOLITAN HUB",
    },
    {
      title: "Services Catalog & Pricing",
      description: "Browse verified pricing and complete details for all 12 signature 60-minute spa therapies.",
      href: "/services/",
      badge: "VERIFIED PRICING",
    },
    {
      title: "Traditional Thai Massage",
      description: "Authentic Thai bodywork techniques designed for posture relief, flexibility, and physical vitality.",
      href: "/services/thai-massage/",
      badge: "SIGNATURE THERAPY",
    },
    {
      title: "Contact & Directions",
      description: "Find location details, phone numbers, opening hours, and WhatsApp booking options.",
      href: "/contact/",
      badge: "BOOK SESSION",
    },
  ];

  return (
    <section className="py-20 bg-[#0B0B0B] border-t border-[#C9A45C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-3">
            EXPLORE SANCTUARY PAGES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F5F1E8] mb-4">
            Featured Location & Service Hubs
          </h2>
          <p className="text-sm text-[#A8A8A8] font-light leading-relaxed">
            Conveniently located on Kamal Ataturk Avenue in Banani, serving guests from Banani, Gulshan 1, Gulshan 2, and greater Dhaka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="group bg-[#151515] p-6 rounded-sm border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-[0.2em] font-semibold uppercase text-[#C9A45C] bg-[#C9A45C]/10 px-2.5 py-1 rounded-sm border border-[#C9A45C]/30">
                    {hub.badge}
                  </span>
                  <Sparkles size={14} className="text-[#C9A45C] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-serif text-xl font-normal text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors mb-2">
                  {hub.title}
                </h3>
                <p className="text-xs text-[#A8A8A8] font-light leading-relaxed mb-6">
                  {hub.description}
                </p>
              </div>

              <div className="flex items-center text-xs font-semibold tracking-wider text-[#C9A45C] group-hover:text-[#E2C889] transition-colors pt-3 border-t border-white/5">
                <span>VIEW HUB PAGE</span>
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
