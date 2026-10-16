import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Warehouse,
  Snowflake,
  Refrigerator,
  Wrench,
  Settings2,
  ClipboardCheck,
  Utensils,
  Store,
  Building2,
  KeyRound,
} from "lucide-react";

export const metadata = {
  title: "Commercial Refrigeration Services Houston | Walk-in Coolers & Freezers | JIM Cooling & Heating",
  description:
    "Installation, repair, diagnostics and preventive maintenance for walk-in coolers, freezers and reach-in refrigeration across Greater Houston. Dependable refrigeration for your daily operation.",
};

export default function CommercialRefrigerationPage() {
  const capabilities = [
    {
      icon: Warehouse,
      title: "Walk-In Coolers",
      desc: "Installation, repair and ongoing care for walk-in cooling equipment used in daily business operations.",
    },
    {
      icon: Snowflake,
      title: "Walk-In Freezers",
      desc: "Support for commercial walk-in freezers, from performance concerns to equipment replacement.",
    },
    {
      icon: Refrigerator,
      title: "Reach-In Refrigeration",
      desc: "Service for commercial reach-in units that support accessible refrigerated storage.",
    },
    {
      icon: Wrench,
      title: "Commercial Refrigeration Repair & Diagnostics",
      desc: "Investigate temperature and equipment concerns, then discuss appropriate repair options.",
    },
    {
      icon: Settings2,
      title: "Refrigeration Installation & Replacement",
      desc: "Plan a new installation or replacement around your equipment, space and operating needs.",
    },
    {
      icon: ClipboardCheck,
      title: "Preventive Maintenance",
      desc: "Professional ongoing care to support reliability and identify potential refrigeration issues.",
    },
  ];

  const industries = [
    {
      icon: Utensils,
      title: "Restaurants & Food Service",
      desc: "Refrigerated storage for daily kitchen operations",
    },
    {
      icon: Store,
      title: "Retail Stores",
      desc: "Walk-in and reach-in refrigeration for retail needs",
    },
    {
      icon: Building2,
      title: "Office Buildings",
      desc: "Support for on-site commercial refrigeration",
    },
    {
      icon: Warehouse,
      title: "Commercial Properties",
      desc: "Equipment care for commercial spaces",
    },
    {
      icon: KeyRound,
      title: "Property Management",
      desc: "Support for ongoing refrigeration care",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Understand your operation",
      desc: "Discuss your site, refrigeration equipment and the concerns affecting your business.",
    },
    {
      num: "02",
      title: "Assess your equipment",
      desc: "Use professional diagnostics to understand the issue and inform recommendations.",
    },
    {
      num: "03",
      title: "Discuss your options",
      desc: "Review repair, installation or replacement options suited to your equipment needs.",
    },
    {
      num: "04",
      title: "Plan for ongoing care",
      desc: "Discuss preventive maintenance to support refrigeration reliability and performance.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#0a2c44]">
      {/* 1. Hero Section (Navigation and commercial hero from Figma) */}
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
              <span className="text-white">Commercial Refrigeration</span>
            </div>

            <span className="text-xs font-bold tracking-wider text-[#087ca7] uppercase block mb-3">
              COMMERCIAL SERVICES · GREATER HOUSTON
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight text-white leading-[1.12]">
              Commercial Refrigeration Services
            </h1>

            <h2 className="text-lg sm:text-xl font-medium text-slate-200 mt-4 leading-snug">
              Dependable refrigeration for your daily operation.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed max-w-xl">
              Installation, repair, diagnostics and preventive maintenance for walk-in coolers, freezers and reach-in refrigeration across Greater Houston.
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

          {/* Right Column: Commercial Refrigeration Equipment Photography with Badge */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[400px] lg:h-auto min-h-[380px] overflow-hidden">
            <Image
              src="/images/figma/hero-refrigeration.png"
              alt="Stainless steel commercial walk-in coolers, freezers and reach-in units"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
              <span className="inline-block bg-[#0a2c44]/90 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wider uppercase px-4 py-2 rounded shadow-md border border-white/10">
                WALK-IN COOLERS, FREEZERS &amp; REACH-IN UNITS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Commercial Refrigeration Service Scope (Focused expertise) */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-2">
                OUR COMMERCIAL REFRIGERATION SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
                Focused expertise. From installation to ongoing care.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#4e6470] leading-relaxed">
                Practical support for business owners and property teams, whether you’re addressing a cooling concern or planning your next refrigeration installation.
              </p>
            </div>
          </div>

          {/* 6 Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-[#f4f7f8] p-7 rounded-xl border border-[#d9e3e8] hover:border-[#087ca7] transition-all hover:shadow-sm"
                >
                  <Icon className="w-6 h-6 text-[#087ca7] stroke-[1.6] mb-4" />
                  <h3 className="text-xl font-semibold text-[#0a2c44]">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#4e6470] mt-2.5 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Industries We Serve */}
      <section className="w-full py-16 sm:py-20 bg-[#f4f7f8] border-y border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-2">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
              Built around the way you do business.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="bg-white p-6 rounded-lg border border-[#d9e3e8] hover:border-[#087ca7] transition-all hover:shadow-sm"
                >
                  <Icon className="w-6 h-6 text-[#087ca7] stroke-[1.6]" />
                  <h3 className="text-base font-semibold text-[#0a2c44] mt-4">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-[#4e6470] mt-1 leading-snug">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Commercial Refrigeration Preventive Maintenance Section */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a2c44] text-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-md">
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-3">
                PLAN AHEAD. KEEP MOVING.
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Commercial Refrigeration Preventive Maintenance
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                A planned approach to caring for the refrigeration your business depends on—not just attention when something goes wrong.
              </p>

              {/* 3 Maintenance Principles */}
              <div className="space-y-4 mt-6 pt-2">
                <div className="border-l-2 border-[#087ca7] pl-4">
                  <h4 className="text-base font-semibold text-white">
                    Support equipment reliability
                  </h4>
                  <p className="text-sm text-slate-300 mt-0.5">
                    Ongoing professional care for walk-in coolers, freezers and reach-in units.
                  </p>
                </div>

                <div className="border-l-2 border-[#087ca7] pl-4">
                  <h4 className="text-base font-semibold text-white">
                    Identify potential issues early
                  </h4>
                  <p className="text-sm text-slate-300 mt-0.5">
                    Spot developing concerns to help reduce unexpected breakdown risk.
                  </p>
                </div>

                <div className="border-l-2 border-[#087ca7] pl-4">
                  <h4 className="text-base font-semibold text-white">
                    Maintain system performance
                  </h4>
                  <p className="text-sm text-slate-300 mt-0.5">
                    Keep refrigeration equipment needs in view as operating demands change.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors group"
                >
                  <span>Request a Maintenance Proposal</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Technician Photography */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
              <Image
                src="/images/figma/refrigeration-tech.png"
                alt="HVAC technician inspecting commercial refrigeration equipment"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Service Approach (Understand first. Recommend with purpose.) */}
      <section className="w-full py-16 sm:py-24 bg-white border-t border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-2">
              A CLEAR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
              Understand first. Recommend with purpose.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((st) => (
              <div key={st.num} className="pt-4 border-t-2 border-[#d9e3e8] space-y-2">
                <span className="text-sm font-semibold text-[#087ca7] block">
                  {st.num}
                </span>
                <h3 className="text-lg font-semibold text-[#0a2c44]">
                  {st.title}
                </h3>
                <p className="text-sm text-[#4e6470] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Commercial Financing Options Section */}
      <section className="w-full py-16 sm:py-20 bg-[#f4f7f8] border-t border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
                PLAN YOUR NEXT EQUIPMENT PROJECT
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
                Commercial Financing Options
              </h2>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm sm:text-base text-[#4e6470] leading-relaxed">
                Explore financing options for eligible commercial refrigeration installations and equipment replacements.
              </p>
              <Link
                href="/financing"
                className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3 rounded transition-colors group"
              >
                <span>Explore Financing Options</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-[#d9e3e8] text-xs text-[#4e6470]">
            Financing is subject to credit approval, eligibility requirements, and applicable terms and conditions.
          </div>
        </div>
      </section>
    </div>
  );
}
