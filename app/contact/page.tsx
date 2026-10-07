"use client";

import { Phone, Mail, MapPin, Clock, CalendarDays } from "lucide-react";

export default function ContactPage() {
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

            <form className="space-y-5" onSubmit={(e) => e.preventDefault?.()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (713) 000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Service Needed *
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800 bg-white"
                  defaultValue="ac-repair"
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Project Details / Symptoms
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your heating or cooling system issue or installation request..."
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#128dd1] text-sm text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#b51527] hover:bg-[#961220] text-white py-3.5 px-6 rounded-lg font-bold text-base shadow-md hover:shadow-lg transition-all"
              >
                <CalendarDays className="h-5 w-5" />
                <span>Submit Quote Request</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
