import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BUSINESS_INFO = {
  name: "Relaxing Spa Dhaka",
  category: "Luxury Thai Spa & Wellness Center",
  address: "Kamal Ataturk Avenue, Banani, Dhaka 1213, Bangladesh",
  shortAddress: "Kamal Ataturk Avenue, Banani, Dhaka",
  area: "Banani",
  city: "Dhaka",
  postalCode: "1213",
  country: "Bangladesh",
  phone: "+8801604516489",
  whatsappNumber: "8801604516489",
  openingHours: "10:00 AM – 11:00 PM",
  openingHoursSchema: "Mo-Su 10:00-23:00",
  primaryCtaText: "BOOK NOW",
  secondaryCtaText: "WHATSAPP",
};

/**
 * Generate a WhatsApp deep link with optional custom text encoding.
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = "Hello Relaxing Spa Dhaka, I would like to book a spa session.";
  const text = message || defaultMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Service-specific WhatsApp booking URL generator
 */
export function getServiceWhatsAppUrl(serviceName: string, duration?: string): string {
  const durationText = duration ? ` for ${duration}` : "";
  const message = `Hello Relaxing Spa Dhaka, I would like to book ${serviceName}${durationText}.`;
  return getWhatsAppUrl(message);
}
