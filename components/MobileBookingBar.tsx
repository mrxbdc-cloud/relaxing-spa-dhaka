"use client";

import { MessageSquare, Send } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function MobileBookingBar() {
  return (
    <aside
      aria-label="Mobile booking action bar"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0B0B0B]/95 backdrop-blur-lg border-t border-[#C9A45C]/30 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-[0_-5px_20px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        
        {/* Telegram Button */}
        <a
          href="https://t.me/relaxingspadhaka"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#F5F1E8] bg-[#151515] border border-[#229ED9]/50 hover:border-[#229ED9] hover:bg-[#229ED9]/10 transition-colors rounded-sm"
        >
          <Send size={16} className="text-[#229ED9]" />
          <span>TELEGRAM</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a spa session.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#F5F1E8] bg-[#151515] border border-[#25D366]/50 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-colors rounded-sm"
        >
          <MessageSquare size={16} className="text-[#25D366]" />
          <span>WHATSAPP</span>
        </a>

      </div>
    </aside>
  );
}
