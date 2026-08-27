"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Clock, CheckCircle2, Loader2, Calendar, User, FileText } from "lucide-react";
import { BUSINESS_INFO, getWhatsAppUrl } from "@/lib/utils";
import { SERVICES } from "@/data/services";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "Traditional Thai Massage",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage("Please fill in your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // Simulate booking submission or prepare WhatsApp redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Optionally automatically trigger WhatsApp with form details after delay
      const whatsappMsg = `Hello Relaxing Spa Dhaka,\nI would like to request a booking:\n- Name: ${formData.fullName}\n- Phone: ${formData.phone}\n- Service: ${formData.service}\n- Date: ${formData.date || "Flex"}\n- Time: ${formData.time || "Flex"}\n- Message: ${formData.message || "N/A"}`;
      window.open(getWhatsAppUrl(whatsappMsg), "_blank");
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#151515] border-t border-[#C9A45C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Business Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] tracking-[0.35em] text-[#C9A45C] uppercase font-semibold block mb-3">
                RESERVATIONS & CONTACT
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F1E8] mb-6 leading-tight">
                Visit Our Sanctuary
              </h2>
              <p className="text-sm text-[#A8A8A8] font-light leading-relaxed mb-8">
                We invite you to reach out directly for immediate appointments, personalized packages, or special inquiries.
              </p>

              <div className="space-y-6 text-sm">
                
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#0B0B0B] border border-[#C9A45C]/30 flex items-center justify-center shrink-0 mt-1">
                    <MapPin size={18} className="text-[#C9A45C]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-normal text-[#F5F1E8]">RELAXING SPA DHAKA</h3>
                    <p className="text-[#A8A8A8] font-light mt-0.5 leading-relaxed">
                      Kamal Ataturk Avenue,<br />
                      Banani, Dhaka 1213, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#0B0B0B] border border-[#C9A45C]/30 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#C9A45C]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A8A8A8]">PHONE</h4>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="font-medium text-[#F5F1E8] hover:text-[#C9A45C] transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#0B0B0B] border border-[#C9A45C]/30 flex items-center justify-center shrink-0">
                    <MessageSquare size={18} className="text-[#C9A45C]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A8A8A8]">WHATSAPP</h4>
                    <a
                      href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a spa session.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#F5F1E8] hover:text-[#C9A45C] transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#0B0B0B] border border-[#C9A45C]/30 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#C9A45C]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-[#A8A8A8]">OPENING HOURS</h4>
                    <p className="font-medium text-[#F5F1E8]">
                      {BUSINESS_INFO.openingHours} <span className="text-[#C9A45C] text-xs font-normal">(7 Days A Week)</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-10 p-6 bg-[#0B0B0B] border border-[#C9A45C]/20 rounded-sm">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C9A45C] font-semibold block mb-1">
                INSTANT WHATSAPP BOOKING
              </span>
              <p className="text-xs text-[#A8A8A8] font-light mb-3">
                For fastest response, send us a direct message on WhatsApp.
              </p>
              <a
                href={getWhatsAppUrl("Hello Relaxing Spa Dhaka, I would like to book a spa session.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold tracking-[0.18em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm"
              >
                <MessageSquare size={16} />
                CHAT ON WHATSAPP NOW
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Booking Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-[#0B0B0B] border border-[#C9A45C]/30 rounded-sm p-6 sm:p-10 shadow-2xl"
          >
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8] mb-2">
              Request An Appointment
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A8A8] font-light mb-8">
              Fill out your details below and our spa coordinator will confirm your time slot promptly.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#C9A45C]/20 border border-[#C9A45C] text-[#C9A45C] flex items-center justify-center">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="font-serif text-2xl text-[#F5F1E8]">Booking Request Received!</h4>
                <p className="text-sm text-[#A8A8A8] max-w-md font-light">
                  Thank you, <strong className="text-[#F5F1E8]">{formData.fullName}</strong>. We have opened WhatsApp to confirm your preferred time slot with our team.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      phone: "",
                      service: "Traditional Thai Massage",
                      date: "",
                      time: "",
                      message: "",
                    });
                  }}
                  className="mt-4 px-6 py-2.5 text-xs tracking-[0.18em] uppercase text-[#C9A45C] border border-[#C9A45C]/50 hover:border-[#C9A45C] rounded-sm transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMessage && (
                  <div className="p-3 bg-red-950/40 border border-red-500/40 text-red-300 text-xs rounded-sm">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#A8A8A8] font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A8A8]" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full bg-[#151515] border border-[#C9A45C]/30 focus:border-[#C9A45C] text-[#F5F1E8] text-sm pl-10 pr-4 py-3 rounded-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#A8A8A8] font-medium mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A8A8A8]" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1XXXX-XXXXX"
                        className="w-full bg-[#151515] border border-[#C9A45C]/30 focus:border-[#C9A45C] text-[#F5F1E8] text-sm pl-10 pr-4 py-3 rounded-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-wider text-[#A8A8A8] font-medium mb-2">
                    Preferred Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-[#151515] border border-[#C9A45C]/30 focus:border-[#C9A45C] text-[#F5F1E8] text-sm px-4 py-3 rounded-sm focus:outline-none transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.name} className="bg-[#151515] text-[#F5F1E8]">
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-xs uppercase tracking-wider text-[#A8A8A8] font-medium mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#151515] border border-[#C9A45C]/30 focus:border-[#C9A45C] text-[#F5F1E8] text-sm px-4 py-3 rounded-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="time" className="block text-xs uppercase tracking-wider text-[#A8A8A8] font-medium mb-2">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-[#151515] border border-[#C9A45C]/30 focus:border-[#C9A45C] text-[#F5F1E8] text-sm px-4 py-3 rounded-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#A8A8A8] font-medium mb-2">
                    Special Requests / Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention any specific preferences or questions..."
                    className="w-full bg-[#151515] border border-[#C9A45C]/30 focus:border-[#C9A45C] text-[#F5F1E8] text-sm p-4 rounded-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#C9A45C] hover:bg-[#E2C889] transition-all rounded-sm shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>SUBMITTING REQUEST...</span>
                    </>
                  ) : (
                    <span>REQUEST A BOOKING</span>
                  )}
                </button>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
}
