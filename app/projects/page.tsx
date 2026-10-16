import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

export const metadata = {
  title: "Featured HVAC & Refrigeration Projects | JIM Cooling & Heating Houston",
  description:
    "Explore our portfolio of commercial HVAC rooftop installations, commercial refrigeration walk-in freezers, and residential air conditioning replacements across Houston.",
};

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      title: "Commercial Multi-Split Rooftop Unit Overhaul",
      category: "Commercial HVAC",
      location: "Houston, TX (Galleria District)",
      image: "/projects/project02.webp",
      desc: "Engineered and installed three 15-ton packaged rooftop units with integrated economizers for an active 18,000 sq ft office facility, cutting operational energy costs by 28%.",
      specs: ["3x 15-Ton RTUs", "Economizer Ventilation", "Zero Business Interruption"],
    },
    {
      id: "2",
      title: "Dual Temperature Walk-In Cooler & Freezer Facility",
      category: "Commercial Refrigeration",
      location: "Houston, TX (Heights)",
      image: "/images/figma/service-commercial-refrigeration.png",
      desc: "Turnkey cold-storage design, box construction, and split condensing unit installation for a premier regional restaurant group. Complete with remote temperature telemetry.",
      specs: ["Sub-Zero Freezer Box", "Food Safety Alarms", "R-448A Refrigerant"],
    },
    {
      id: "3",
      title: "High-Efficiency 20-SEER2 Residential Inverter AC",
      category: "Residential HVAC",
      location: "Katy, TX",
      image: "/images/figma/service-residential-hvac.png",
      desc: "Replaced an outdated, noisy 10-SEER builder unit with an ultra-quiet variable-speed inverter heat pump and whole-home media filtration system for balanced two-story comfort.",
      specs: ["20-SEER2 Inverter", "Whole-Home Dehumidifier", "Smart WiFi Zoning"],
    },
    {
      id: "4",
      title: "Commercial Supermarket Reach-In Display Overhaul",
      category: "Commercial Refrigeration",
      location: "Sugar Land, TX",
      image: "/images/figma/hero-refrigeration.png",
      desc: "Retrofit of 12 multi-door refrigerated reach-in display cases, new energy-efficient ECM fan motors, and precision digital thermostatic expansion valves.",
      specs: ["ECM High-Efficiency Motors", "LED Case Retrofit", "UL Listed Hardware"],
    },
    {
      id: "5",
      title: "Historic Home Multi-Zone Ductless Mini-Split Setup",
      category: "Residential HVAC",
      location: "Houston, TX (Montrose)",
      image: "/projects/project04.webp",
      desc: "Designed and installed a 4-zone ductless mini-split heat pump system for a 1920s craftsman home, preserving historic architectural integrity without bulky ceiling ducts.",
      specs: ["4 Independent Zones", "Whisper-Quiet 19 dB(A)", "Zero Duct Heat Loss"],
    },
    {
      id: "6",
      title: "Industrial Logistics Warehouse Ventilation & Cooling",
      category: "Commercial HVAC",
      location: "Pasadena, TX",
      image: "/images/figma/hero-rooftop.png",
      desc: "Comprehensive ventilation balancing, high-volume exhaust systems, and climate stabilization for a 35,000 sq ft distribution and storage warehouse.",
      specs: ["Heavy-Duty Make-Up Air", "Automated Setbacks", "OSHA Air Quality Compliant"],
    },
  ];

  return (
    <div className="w-full bg-white text-[#0a2c44]">
      {/* Hero Header */}
      <section className="w-full bg-[#0a2c44] text-white py-14 sm:py-20 border-b border-[#142e40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#087ca7] uppercase tracking-wider">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span>Projects</span>
            </div>

            <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
              OUR WORKMANSHIP
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Featured Projects Across Greater Houston
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
              Browse our portfolio of commercial rooftop replacements, industrial walk-in refrigeration builds, and residential high-efficiency HVAC installations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors group shadow-sm"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a
                href="tel:+17132699054"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors hover:bg-white/5"
              >
                <Phone className="w-4 h-4 text-[#087ca7]" />
                <span>Call +1 (713) 269-9054</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full py-16 sm:py-24 bg-[#f4f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-lg overflow-hidden border border-[#d9e3e8] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-56 overflow-hidden bg-slate-200">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#0a2c44]/90 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded">
                      {proj.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-[#087ca7] font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{proj.location}</span>
                    </div>

                    <h2 className="text-xl font-semibold text-[#0a2c44] leading-snug">
                      {proj.title}
                    </h2>

                    <p className="text-sm text-[#4e6470] mt-3 leading-relaxed">
                      {proj.desc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#d9e3e8] space-y-1.5">
                      {proj.specs.map((spec) => (
                        <div
                          key={spec}
                          className="flex items-center gap-2 text-xs text-[#0a2c44] font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#087ca7] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/contact#quote"
                    className="inline-flex items-center justify-between w-full border border-[#d9e3e8] hover:border-[#087ca7] hover:text-[#087ca7] text-[#0a2c44] text-xs font-semibold py-2.5 px-4 rounded transition-colors"
                  >
                    <span>Request Similar Project</span>
                    <ArrowUpRight className="w-4 h-4 text-[#087ca7]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="w-full py-16 bg-white border-t border-[#d9e3e8]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
            READY TO UPGRADE YOUR FACILITY OR HOME?
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44]">
            Let’s Discuss Your Next HVAC or Refrigeration Project
          </h2>
          <p className="text-sm sm:text-base text-[#4e6470] max-w-2xl mx-auto leading-relaxed">
            Our technical team provides comprehensive on-site inspections, engineered equipment load calculations, and honest estimates.
          </p>
          <div className="pt-4">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors"
            >
              <span>Get Free Project Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
