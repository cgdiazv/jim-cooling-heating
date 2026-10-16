"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const SERVICE_OPTIONS = [
  { id: "Commercial HVAC", label: "Commercial HVAC" },
  { id: "Commercial Refrigeration", label: "Commercial Refrigeration" },
  { id: "Residential HVAC", label: "Residential HVAC" },
  { id: "Preventive Maintenance", label: "Preventive Maintenance" },
  { id: "Financing Inquiry", label: "Financing Inquiry" },
];

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Commercial HVAC");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Split full name into firstName and lastName for the backend API
      const parts = fullName.trim().split(/\s+/);
      const firstName = parts[0] || "";
      const lastName = parts.slice(1).join(" ") || "";

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          service,
          message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setService("Commercial HVAC");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred."
      );
    }
  };

  return (
    <div className="w-full bg-white text-[#0a2c44]">
      {/* Hero Header / Contact introduction */}
      <section className="w-full bg-[#0a2c44] text-white py-14 sm:py-18 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-normal text-[#d7e3ea] mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[#d7e3ea]">Contact</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-semibold text-white tracking-tight leading-[1.08] max-w-3xl">
            Contact Us
          </h1>

          <p className="text-base sm:text-lg text-[#d7e3ea] max-w-2xl leading-relaxed mt-4">
            Let’s talk about your commercial HVAC, commercial refrigeration or residential service needs across Greater Houston.
          </p>
        </div>
      </section>

      {/* Main Contact and Inquiry Section */}
      <section className="w-full py-14 sm:py-20 lg:py-24 bg-[#f4f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Direct Info & Dispatch */}
            <div className="lg:col-span-5 space-y-7">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-3">
                  LET’S GET IN TOUCH
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#0a2c44] leading-tight">
                  Your business. Your home. Our attention.
                </h2>
              </div>

              {/* Phone and Email */}
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-semibold text-[#0a2c44] block">
                    Call us
                  </span>
                  <a
                    href="tel:+17132699054"
                    className="text-2xl sm:text-[30px] font-semibold text-[#0a2c44] hover:text-[#087ca7] transition-colors leading-tight inline-block mt-1"
                  >
                    +1 (713) 269-9054
                  </a>
                </div>

                <div>
                  <span className="text-sm font-semibold text-[#0a2c44] block">
                    Email us
                  </span>
                  <a
                    href="mailto:hvac@jimcoolingandheating.com"
                    className="text-[15px] text-[#087ca7] hover:underline inline-block mt-1"
                  >
                    hvac@jimcoolingandheating.com
                  </a>
                </div>

                <div>
                  <a
                    href="tel:+17132699054"
                    className="inline-flex items-center gap-3 px-5 py-3.5 bg-white border border-[#d9e3e8] hover:border-[#087ca7] hover:text-[#087ca7] text-[#0a2c44] text-sm font-semibold rounded transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-[#087ca7]" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>

              {/* Business Details */}
              <div className="border-t border-[#d9e3e8] pt-6 space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 text-[#087ca7]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#0a2c44] block">
                      Regular business hours
                    </span>
                    <span className="text-sm text-[#435b68] block mt-0.5">
                      Mon–Sat 7:00 AM–8:00 PM
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 text-[#087ca7]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#0a2c44] block">
                      Serving Greater Houston
                    </span>
                    <span className="text-sm text-[#435b68] block mt-0.5">
                      Houston, TX &amp; surrounding communities.
                    </span>
                  </div>
                </div>
              </div>

              {/* Urgent Service Guidance Card */}
              <div className="bg-[#eaf5fa] rounded-md p-5 border border-[#bfd8e5] space-y-2">
                <h3 className="text-base font-semibold text-[#0a2c44]">
                  Urgent service needs?
                </h3>
                <p className="text-sm text-[#435b68] leading-relaxed">
                  24/7 emergency service. Please call rather than wait for an online inquiry.
                </p>
              </div>
            </div>

            {/* Right Column: Inquiry Form Card */}
            <div id="quote" className="lg:col-span-7">
              <div className="bg-white rounded-md border border-[#d9e3e8] p-6 sm:p-8 md:p-9 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-[30px] font-semibold text-[#0a2c44] leading-tight">
                    How can we help?
                  </h3>
                  <p className="text-sm sm:text-base text-[#435b68] mt-2 leading-relaxed">
                    Request service, an estimate or a maintenance proposal. Share a few details to start the conversation.
                  </p>
                </div>

                {status === "success" ? (
                  <div className="p-8 rounded bg-[#eaf5fa] border border-[#bfd8e5] text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#087ca7] mx-auto" />
                    <h4 className="text-lg font-semibold text-[#0a2c44]">
                      Message Successfully Sent!
                    </h4>
                    <p className="text-sm text-[#435b68] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting JIM Cooling &amp; Heating Services. A member of our technical team will review your inquiry and reach out shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#087ca7] hover:underline"
                    >
                      <span>Send Another Request</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {status === "error" && (
                      <div className="p-4 rounded bg-red-50 border border-red-200 text-red-700 flex items-start gap-3 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-[#0a2c44] mb-2"
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-3 rounded border border-[#a7bac5] focus:border-[#087ca7] focus:ring-1 focus:ring-[#087ca7] outline-none text-sm text-[#0a2c44] bg-white transition-all placeholder:text-[#435b68]/70"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-[#0a2c44] mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3.5 py-3 rounded border border-[#a7bac5] focus:border-[#087ca7] focus:ring-1 focus:ring-[#087ca7] outline-none text-sm text-[#0a2c44] bg-white transition-all placeholder:text-[#435b68]/70"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-[#0a2c44] mb-2"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-3.5 py-3 rounded border border-[#a7bac5] focus:border-[#087ca7] focus:ring-1 focus:ring-[#087ca7] outline-none text-sm text-[#0a2c44] bg-white transition-all placeholder:text-[#435b68]/70"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <label className="text-sm font-semibold text-[#0a2c44]">
                          Service interest
                        </label>
                        <span className="text-[13px] text-[#435b68]">
                          Choose one
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {SERVICE_OPTIONS.map((opt) => {
                          const isSelected = service === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setService(opt.id)}
                              className={`flex items-center gap-3 px-3.5 py-3 rounded text-left transition-all text-sm ${
                                isSelected
                                  ? "border-2 border-[#087ca7] bg-[#eaf5fa] text-[#0a2c44] font-medium"
                                  : "border border-[#a7bac5] bg-white text-[#0a2c44] hover:border-[#087ca7]"
                              }`}
                            >
                              <span
                                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? "border-[#087ca7] bg-[#087ca7]"
                                    : "border-[#a7bac5] bg-white"
                                }`}
                              >
                                {isSelected && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                                )}
                              </span>
                              <span>{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>

                      <p className="text-[13px] text-[#435b68] mt-2.5 leading-relaxed">
                        For a commercial maintenance proposal, choose Preventive Maintenance. For financing questions, choose Financing Inquiry—no financial information needed.
                      </p>
                    </div>

                    {/* Brief Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-[#0a2c44] mb-2"
                      >
                        Brief message or project description
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-3 rounded border border-[#a7bac5] focus:border-[#087ca7] focus:ring-1 focus:ring-[#087ca7] outline-none text-sm text-[#0a2c44] bg-white transition-all resize-y placeholder:text-[#435b68]/70"
                        placeholder="Tell us what you need help with."
                      />
                    </div>

                    {/* Submit Area */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors shadow-sm disabled:opacity-60 cursor-pointer"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Inquiry</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-[#435b68] mt-3">
                        Prompt technical response within 2 hours during regular hours. Your details are never shared.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
