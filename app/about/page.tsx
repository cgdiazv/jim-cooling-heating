import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Clock,
  HeartHandshake,
} from "lucide-react";

export const metadata = {
  title: "About Us | JIM Cooling & Heating Services Greater Houston",
  description:
    "Learn about JIM Cooling & Heating Services. Technical care, lasting relationships, and certified HVAC & commercial refrigeration across Greater Houston.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Understand before recommending",
      desc: "Professional diagnostics that put the real needs of your equipment and space first. We never push unnecessary replacements when a reliable, cost-effective repair solves the problem.",
    },
    {
      title: "Work with care and precision",
      desc: "Thoughtful installation and repair, with meticulous attention to safety standards, electrical integrity, refrigerant regulations, and clean job sites.",
    },
    {
      title: "Think beyond the service call",
      desc: "Preventive care, clear communication, and ongoing system support for a lasting partnership that keeps your property comfortable for years to come.",
    },
  ];

  const highlights = [
    {
      stat: "20+",
      label: "Years of Field Experience",
      desc: "Seasoned technical know-how across complex commercial & residential systems.",
    },
    {
      stat: "100%",
      label: "Licensed, Bonded & Insured",
      desc: "Full state licensing and comprehensive liability coverage for your peace of mind.",
    },
    {
      stat: "24/7",
      label: "Rapid Emergency Response",
      desc: "Immediate technical dispatch when critical cooling or refrigeration fails.",
    },
    {
      stat: "Greater Houston",
      label: "Full Metropolitan Coverage",
      desc: "Proudly serving Houston, Katy, Sugar Land, Pearland, The Woodlands & Cypress.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#0a2c44]">
      {/* Hero Header */}
      <section className="w-full bg-[#0a2c44] text-white py-14 sm:py-20 border-b border-[#142e40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#087ca7] uppercase tracking-wider">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span>About Us</span>
              </div>

              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
                JIM COOLING &amp; HEATING SERVICES
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                Technical care. Lasting relationships.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Serving commercial facilities and homeowners across Greater Houston, JIM Cooling &amp; Heating Services delivers rigorous technical diagnostics, precision installation, and dependable preventive care.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors group shadow-sm"
                >
                  <span>Connect With Our Team</span>
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

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[380px] rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/figma/preventive-maintenance-tech.png"
                alt="JIM Cooling & Heating technician on site"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0a2c44]/90 backdrop-blur-sm p-3.5 rounded border border-white/10 text-white text-xs font-medium">
                Grounded in understanding your system, working safely, and recommending honest solutions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Credibility */}
      <section className="w-full bg-[#f4f7f8] py-12 border-b border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-white p-6 rounded-lg border border-[#d9e3e8] shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#087ca7]">
                  {h.stat}
                </div>
                <div className="text-sm font-semibold text-[#0a2c44] mt-1">
                  {h.label}
                </div>
                <div className="text-xs text-[#4e6470] mt-2 leading-relaxed">
                  {h.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values / Service Principles */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column Story */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
                Built on Honest Diagnostics &amp; Uncompromised Quality
              </h2>
              <p className="text-sm sm:text-base text-[#4e6470] leading-relaxed">
                Founded to deliver straightforward, dependable climate service without high-pressure sales tactics, JIM Cooling &amp; Heating Services has grown through word-of-mouth recommendations from commercial operators and neighborhood families across Houston.
              </p>
              <p className="text-sm sm:text-base text-[#4e6470] leading-relaxed">
                We believe that heating, air conditioning, and refrigeration shouldn’t be stressful. Whether you manage a busy commercial kitchen with walk-in freezers or want clean, balanced air in your master bedroom, we deliver seasoned technical skill you can count on.
              </p>
            </div>

            {/* Right Column 3 Principles */}
            <div className="lg:col-span-6 divide-y divide-[#d9e3e8] bg-[#f4f7f8] p-8 rounded-xl border border-[#d9e3e8]">
              {principles.map((pr, idx) => (
                <div key={pr.title} className={idx === 0 ? "pb-6" : "py-6"}>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#087ca7] shrink-0" />
                    <h3 className="text-lg font-semibold text-[#0a2c44]">
                      {pr.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#4e6470] mt-2 leading-relaxed pl-7">
                    {pr.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dual Division Showcase */}
      <section className="w-full py-16 sm:py-24 bg-[#f4f7f8] border-t border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-[#d9e3e8] shadow-sm">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-2">
                FOR BUSINESSES
              </span>
              <h3 className="text-2xl font-semibold text-[#0a2c44]">
                Commercial Expertise
              </h3>
              <p className="text-sm text-[#4e6470] mt-3 leading-relaxed">
                Rooftop packaged HVAC units, commercial refrigeration walk-in coolers and freezers, restaurant kitchen ventilation, and custom preventive maintenance agreements engineered for continuous uptime.
              </p>
              <div className="pt-6 mt-4 border-t border-[#d9e3e8]">
                <Link
                  href="/commercial-hvac"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087ca7] uppercase tracking-wider"
                >
                  <span>Explore Commercial Solutions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#d9e3e8] shadow-sm">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-2">
                FOR RESIDENTS
              </span>
              <h3 className="text-2xl font-semibold text-[#0a2c44]">
                Residential Comfort
              </h3>
              <p className="text-sm text-[#4e6470] mt-3 leading-relaxed">
                High-efficiency inverter air conditioning replacements, safe heating tune-ups, whole-home dehumidifiers, and advanced air quality purification tailored to Houston’s climate.
              </p>
              <div className="pt-6 mt-4 border-t border-[#d9e3e8]">
                <Link
                  href="/residential-hvac"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#087ca7] uppercase tracking-wider"
                >
                  <span>Explore Home Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
