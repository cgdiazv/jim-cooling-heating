"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CalendarDays,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "ac-repair",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "ac-repair",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again or call us directly."
      );
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#128dd1]">
            Contact Us
          </span>
          <h1 className="text-4xl font-extrabold text-[#006397] mt-2 sm:text-5xl">
            Get in Touch With Our HVAC Team
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Request a free on-site quote, ask a question, or reach our emergency dispatch team 24 hours a day, 7 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4">
                Direct Contact
              </h2>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#006397]/10 text-[#006397] flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400">Emergency & Dispatch</div>
                  <a
                    href="tel:+17132699054"
                    className="text-lg font-bold text-[#006397] hover:text-[#128dd1] transition-colors"
                  >
                    +1 (713) 269-9054
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Available 24 hours / 7 days a week</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#128dd1]/10 text-[#128dd1] flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400">Email Inquiries</div>
                  <a
                    href="mailto:hvac@jimcoolingandheating.com"
                    className="text-base font-semibold text-slate-800 hover:text-[#006397] transition-colors"
                  >
                    hvac@jimcoolingandheating.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Typical reply within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#b51527]/10 text-[#b51527] flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400">Regular Service Hours</div>
                  <p className="text-sm font-semibold text-slate-800">Monday – Saturday: 7:00 AM – 8:00 PM</p>
                  <p className="text-xs text-[#b51527] font-semibold mt-0.5">Emergency Dispatch: 24/7/365</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#006397]/10 text-[#006397] flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400">Service Coverage</div>
                  <p className="text-sm font-semibold text-slate-800">Metropolitan Area & Regional Counties</p>
                  <p className="text-xs text-slate-500 mt-0.5">Licensed, Bonded & Insured</p>
                </div>
              </div>
            </div>

            {/* Emergency Callout Card */}
            <div className="bg-[#b51527] text-white p-6 rounded-2xl shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full w-fit">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                HVAC Emergency?
              </div>
              <h3 className="text-lg font-bold">No Heat or AC Not Working?</h3>
              <p className="text-xs text-white/90">
                Call our direct emergency line immediately. A certified HVAC technician will be routed to your location as quickly as possible.
              </p>
              <a
                href="tel:+17132699054"
                className="inline-flex items-center gap-2 bg-white text-[#b51527] px-4 py-2 rounded-lg font-bold text-sm shadow hover:bg-slate-100 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call +1 (713) 269-9054</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div id="quote" className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#006397] mb-2">
              Request a Free Quote
            </h2>
            <p className="text-sm text-slate-600 mb-8">
              Fill out the form below and one of our HVAC specialists will get back to you promptly with an upfront quote.
            </p>

            {status === "success" ? (
              <div className="p-8 rounded-xl bg-green-50 border border-green-200 text-center space-y-4">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Quote Request Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you! We have sent your request to our dispatch team at{" "}
                  <strong className="text-slate-800">hvac@jimcoolingandheating.com</strong>. One of our specialists will review your project details and follow up shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {status === "error" && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-sm">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Unable to submit request</strong>
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      placeholder="John"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800 disabled:bg-slate-50 disabled:text-slate-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      placeholder="Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800 disabled:bg-slate-50 disabled:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      placeholder="+1 (713) 000-0000"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800 disabled:bg-slate-50 disabled:text-slate-400"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800 disabled:bg-slate-50 disabled:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800 bg-white disabled:bg-slate-50 disabled:text-slate-400"
                  >
                    <option value="ac-repair">Air Conditioning Repair or Diagnostic</option>
                    <option value="ac-install">New AC Unit Installation / Replacement</option>
                    <option value="heating-repair">Heating & Furnace Repair</option>
                    <option value="heating-install">Furnace / Heat Pump Installation</option>
                    <option value="maintenance">Seasonal Maintenance & Tune-Up</option>
                    <option value="air-quality">Indoor Air Quality / Duct Cleaning</option>
                    <option value="emergency">24/7 Emergency Service</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Project Details / Symptoms
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    placeholder="Describe your heating or cooling system issue or installation request..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800 disabled:bg-slate-50 disabled:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#b51527] hover:bg-[#961220] text-white py-3.5 px-6 rounded-lg font-bold text-base shadow-md hover:shadow-lg transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <CalendarDays className="h-5 w-5" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
