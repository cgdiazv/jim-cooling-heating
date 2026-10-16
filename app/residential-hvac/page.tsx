import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Snowflake,
  Thermometer,
  ClipboardCheck,
  Wind,
  Droplets,
  AirVent,
} from "lucide-react";

export const metadata = {
  title: "Residential HVAC Services Houston | JIM Cooling & Heating Services",
  description:
    "Heating, cooling and preventive care for homes across Greater Houston, with thoughtful support for airflow, humidity and indoor air quality. Request service or an estimate.",
};

const RESIDENTIAL_SERVICES = [
  {
    icon: Snowflake,
    title: "Air Conditioning Repair & Installation",
    desc: "Address cooling problems or plan an air conditioning installation suited to your home’s needs.",
  },
  {
    icon: Thermometer,
    title: "Heating System Repair & Installation",
    desc: "Diagnose heating concerns and discuss repair or installation choices for home comfort.",
  },
  {
    icon: ClipboardCheck,
    title: "Residential Preventive Maintenance",
    desc: "Ongoing system care to support reliability, identify potential issues and maintain performance.",
  },
  {
    icon: Wind,
    title: "Indoor Air Quality",
    desc: "Discuss indoor air concerns and solutions that work with your home’s heating and cooling system.",
  },
  {
    icon: Droplets,
    title: "Humidity Control & Dehumidification",
    desc: "Explore ways to manage excess indoor moisture and help your home feel more comfortable.",
  },
  {
    icon: AirVent,
    title: "Airflow & Comfort Solutions",
    desc: "Investigate uneven temperatures and airflow concerns with a whole-home perspective.",
  },
];

const COMFORT_PRIORITIES = [
  {
    icon: Thermometer,
    title: "Comfort from room to room",
    desc: "Investigate warm or cool spots and airflow differences throughout your home.",
  },
  {
    icon: Droplets,
    title: "Humidity, thoughtfully managed",
    desc: "Discuss excess moisture and dehumidification options for Houston’s humid climate.",
  },
  {
    icon: Wind,
    title: "Attention to indoor air quality",
    desc: "Explore indoor air concerns in the context of your home and HVAC system.",
  },
];

const MAINTENANCE_GOALS = [
  {
    title: "Support equipment reliability",
    desc: "Ongoing care with your residential system’s needs in view.",
  },
  {
    title: "Identify potential issues",
    desc: "Recognize developing concerns and discuss the appropriate next steps.",
  },
  {
    title: "Maintain system performance",
    desc: "Keep attention on how your system operates and your home feels.",
  },
];

const SERVICE_STEPS = [
  {
    num: "01",
    title: "Understand your home",
    desc: "Discuss comfort needs, room-to-room differences and your system concerns.",
  },
  {
    num: "02",
    title: "Assess your system",
    desc: "Use professional diagnostics to understand the issue and inform recommendations.",
  },
  {
    num: "03",
    title: "Discuss your choices",
    desc: "Review repair, installation or replacement options for your home.",
  },
  {
    num: "04",
    title: "Plan for ongoing care",
    desc: "Discuss preventive maintenance to support continued system performance.",
  },
];

export default function ResidentialHVACPage() {
  return (
    <div className="w-full bg-white text-[#0a2c44]">
      {/* 1. Hero Section (Exact matching width & grid as Commercial HVAC & Commercial Refrigeration) */}
      <section className="w-full bg-[#0a2c44] text-white">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 xl:px-20 lg:py-20 flex flex-col justify-center">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-300 mb-3">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Residential HVAC</span>
            </div>

            <span className="text-xs font-bold tracking-wider text-[#087ca7] uppercase block mb-3">
              HOME COMFORT · GREATER HOUSTON
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight text-white leading-[1.12]">
              Residential HVAC Services
            </h1>

            <h2 className="text-lg sm:text-xl font-medium text-slate-200 mt-4 leading-snug">
              Comfort for your home. Care for the way you live.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed max-w-xl">
              Heating, cooling and preventive care for homes across Greater Houston, with thoughtful support for airflow, humidity and indoor air quality.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8 pt-2">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3.5 rounded transition-all shadow-sm group"
              >
                <span>Request Service</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold text-sm px-6 py-3.5 rounded transition-all hover:bg-white/5 group"
              >
                <span>Request Estimate</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Residential Outdoor Equipment Photography with Badge */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[400px] lg:h-auto min-h-[380px] overflow-hidden">
            <Image
              src="/images/figma/hero-residential.png"
              alt="Outdoor residential air conditioning and heating system"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
              <span className="inline-block bg-[#0a2c44]/90 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wider uppercase px-4 py-2 rounded shadow-md border border-white/10">
                HEATING &amp; COOLING. AT HOME.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Residential HVAC Service Scope (Consistent max-w-7xl) */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
                OUR RESIDENTIAL HVAC SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0a2c44] tracking-tight leading-tight">
                Thoughtful care. For your home’s everyday comfort.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm sm:text-base text-[#425c6b] leading-relaxed">
                From a system concern today to a new installation, find focused support for the way your home feels.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {RESIDENTIAL_SERVICES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#f4f7f8] p-6 sm:p-7 rounded-[6px] space-y-3 hover:shadow-xs transition-shadow border border-[#d9e3e8]/40"
                >
                  <Icon className="w-6 h-6 text-[#087ca7] stroke-[1.8] mb-3" />
                  <h3 className="text-xl sm:text-[22px] font-semibold text-[#0a2c44] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#425c6b] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Home Comfort and Air Quality (Feel at home. In every room.) */}
      <section className="w-full py-16 sm:py-24 bg-[#f4f7f8] border-t border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image with Caption */}
            <div className="lg:col-span-6 flex flex-col rounded-lg overflow-hidden border border-[#d9e3e8] bg-white shadow-sm">
              <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px]">
                <Image
                  src="/images/figma/residential-living-room.png"
                  alt="Sunlit home living room with whole-home comfort perspective"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-[#eaf5fa] px-5 py-3.5 border-t border-[#d9e3e8]/40">
                <span className="text-xs font-semibold text-[#087ca7] tracking-wider uppercase block">
                  A WHOLE-HOME PERSPECTIVE ON COMFORT.
                </span>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
                  COMFORT BEYOND THE THERMOSTAT
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0a2c44] tracking-tight leading-tight">
                  Feel at home. In every room.
                </h2>
                <p className="text-base text-[#425c6b] leading-relaxed pt-1">
                  A comfortable home is about more than temperature. Look at airflow, moisture and indoor air quality together to understand what your space needs.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {COMFORT_PRIORITIES.map((cp) => {
                  const Icon = cp.icon;
                  return (
                    <div key={cp.title} className="flex items-start gap-3.5">
                      <div className="mt-1 text-[#087ca7] shrink-0">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-base sm:text-[17px] font-semibold text-[#0a2c44]">
                          {cp.title}
                        </h3>
                        <p className="text-sm text-[#425c6b] leading-relaxed">
                          {cp.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Residential Preventive Maintenance (Full-Bleed Matching Section) */}
      <section className="w-full bg-[#0a2c44] text-white">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12">
          {/* Left Content */}
          <div className="lg:col-span-6 px-6 py-14 sm:px-12 sm:py-16 lg:px-16 xl:px-20 lg:py-20 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-[#d7e3ea] uppercase block mb-3">
              CARE FOR THE SYSTEM YOU RELY ON
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-tight leading-tight">
              Residential Preventive Maintenance
            </h2>
            <p className="text-base text-[#d7e3ea] leading-relaxed mt-4 max-w-xl">
              Professional preventive care gives your home’s heating and cooling system attention beyond a repair visit.
            </p>

            <div className="space-y-5 mt-6">
              {MAINTENANCE_GOALS.map((g) => (
                <div
                  key={g.title}
                  className="border-l-2 border-[#087ca7] pl-4 space-y-1"
                >
                  <h3 className="text-base sm:text-[17px] font-semibold text-white">
                    {g.title}
                  </h3>
                  <p className="text-sm text-[#d7e3ea] leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors group shadow-sm"
              >
                <span>Ask About Home Maintenance</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Technician Photography with residential-preventive-tech.png */}
          <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px] lg:min-h-full overflow-hidden">
            <Image
              src="/images/figma/residential-preventive-tech.png"
              alt="Technician servicing residential HVAC equipment"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 5. Our Residential Service Approach */}
      <section className="w-full py-16 sm:py-24 bg-white border-t border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-12 sm:mb-14">
            <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
              A CLEAR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0a2c44] tracking-tight leading-tight">
              Understand first. Recommend with purpose.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SERVICE_STEPS.map((step) => (
              <div
                key={step.num}
                className="pt-4 border-t-2 border-[#d9e3e8] space-y-2"
              >
                <span className="text-sm font-semibold text-[#087ca7] block">
                  {step.num}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-[#0a2c44]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#425c6b] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Residential Financing Options */}
      <section className="w-full py-16 sm:py-20 bg-[#f4f7f8] border-t border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
                MAKE ROOM FOR YOUR NEXT UPGRADE
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
                Residential Financing
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm sm:text-base text-[#425c6b] leading-relaxed">
                Explore financing options for eligible residential HVAC installations and replacements as you plan your next home comfort project.
              </p>
              <Link
                href="/financing"
                className="inline-flex items-center gap-2 bg-white border border-[#d9e3e8] hover:border-[#087ca7] hover:text-[#087ca7] text-[#0a2c44] font-semibold text-sm px-6 py-3.5 rounded transition-colors shadow-2xs group"
              >
                <span>Explore Financing Options</span>
                <ArrowUpRight className="w-4 h-4 text-[#087ca7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-[#d9e3e8] text-xs text-[#425c6b]">
            Financing is subject to credit approval, eligibility requirements, and applicable terms and conditions.
          </div>
        </div>
      </section>
    </div>
  );
}
