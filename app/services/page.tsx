import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Snowflake,
  Flame,
  Building2,
  House,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Commercial & Residential HVAC Services Houston | JIM Cooling & Heating",
  description:
    "Explore our three focused HVAC & refrigeration service divisions: Commercial HVAC, Commercial Refrigeration, and Residential Comfort across Greater Houston.",
};

export default function ServicesPage() {
  const divisions = [
    {
      title: "Commercial HVAC",
      category: "Performance for your property",
      image: "/images/figma/service-commercial-hvac.png",
      href: "/commercial-hvac",
      desc: "Installation, repair and diagnostics for rooftop packaged systems, split systems, and commercial ventilation. Keep your business operating at peak efficiency.",
      features: [
        "Rooftop Packaged Units (RTUs)",
        "24/7 Priority Emergency Repairs",
        "Preventive Maintenance Agreements",
        "VRF Multi-Split Zoning",
      ],
    },
    {
      title: "Commercial Refrigeration",
      category: "Reliability for your operation",
      image: "/images/figma/service-commercial-refrigeration.png",
      href: "/commercial-refrigeration",
      desc: "Dedicated support for commercial walk-in coolers, freezers, reach-in cases, and ice machines. Protect the perishable inventory your business depends on.",
      features: [
        "Walk-In Coolers & Freezers",
        "Reach-In Display Merchandisers",
        "Commercial Ice Machine Service",
        "Defrost & Compressor Diagnostics",
      ],
    },
    {
      title: "Residential HVAC",
      category: "Comfort for your home",
      image: "/images/figma/service-residential-hvac.png",
      href: "/residential-hvac",
      desc: "High-efficiency cooling, dependable heating, and whole-home dehumidification solutions tailored to Houston's demanding humidity and temperature swings.",
      features: [
        "Inverter High-SEER2 AC Installs",
        "Fast Diagnostic AC Repairs",
        "Whole-Home Dehumidification",
        "Indoor Air Quality & Purification",
      ],
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
              <span>Services</span>
            </div>

            <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
              OUR SERVICES
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              The Right Expertise. For Every Environment.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
              Commercial systems come first. Home comfort matters just as much. Explore three focused service divisions, all under one dependable team.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors group shadow-sm"
              >
                <span>Request Service</span>
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

      {/* Three Divisions Deep Dive */}
      <section className="w-full py-16 sm:py-24 bg-[#f4f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {divisions.map((div, idx) => (
            <div
              key={div.title}
              className="bg-white rounded-xl border border-[#d9e3e8] overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12"
            >
              <div
                className={`lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={div.image}
                  alt={div.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div
                className={`lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between ${
                  idx % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div>
                  <span className="text-xs font-semibold text-[#087ca7] uppercase tracking-wider block">
                    {div.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#0a2c44] mt-2">
                    {div.title}
                  </h2>
                  <p className="text-sm text-[#4e6470] mt-3 leading-relaxed">
                    {div.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6 pt-4 border-t border-[#d9e3e8]">
                    {div.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 text-xs sm:text-sm text-[#0a2c44] font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#087ca7] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <Link
                    href={div.href}
                    className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3 rounded transition-colors group"
                  >
                    <span>View {div.title} Services</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Financing & Proposal Callout */}
      <section className="w-full py-16 bg-white border-t border-[#d9e3e8]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
            NEED EQUIPMENT FINANCING?
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44]">
            Flexible Payment Options for Commercial &amp; Residential Upgrades
          </h2>
          <p className="text-sm sm:text-base text-[#4e6470] max-w-2xl mx-auto leading-relaxed">
            Upgrade your HVAC equipment today and pay over time with our competitive commercial leasing and low-monthly residential payment plans.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/financing"
              className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3 rounded transition-colors"
            >
              <span>Explore Financing Options</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 border border-[#d9e3e8] hover:border-[#087ca7] text-[#0a2c44] font-semibold text-sm px-6 py-3 rounded transition-colors"
            >
              <span>Request Free Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#087ca7]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
