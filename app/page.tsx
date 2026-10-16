import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Utensils,
  Store,
  Building2,
  Warehouse,
  KeyRound,
  Thermometer,
  Droplets,
  Wind,
  House,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full bg-white text-[#0a2c44]">
      {/* 1. Hero Section (Commercial solutions hero) */}
      <section className="w-full bg-[#0a2c44] text-white">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          {/* Left Column: Commercial Solutions Text & CTA */}
          <div className="lg:col-span-6 px-6 py-12 sm:px-12 sm:py-16 lg:px-16 xl:px-20 lg:py-20 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-wider text-[#087ca7] uppercase block mb-3">
              JIM Cooling & Heating Services · GREATER HOUSTON
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-white leading-[1.12]">
              Commercial HVAC & Refrigeration Solutions
            </h1>

            <h2 className="text-lg sm:text-xl font-medium text-slate-200 mt-5 leading-snug">
              Professional Commercial & Residential HVAC Services Across Greater Houston
            </h2>

            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed max-w-xl">
              Professional HVAC and refrigeration installation, diagnostics, repair, and preventive maintenance for restaurants, retail facilities, commercial properties, and residential homes.
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
                href="#services"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold text-sm px-6 py-3.5 rounded transition-all hover:bg-white/5 group"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Split Photography (Rooftop + Refrigeration) */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Top: Commercial Rooftop Equipment */}
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[420px] overflow-hidden">
              <Image
                src="/images/figma/hero-rooftop.png"
                alt="Commercial rooftop HVAC equipment overlooking Houston skyline"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Bottom: Commercial Refrigeration Equipment with Badge */}
            <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[250px] overflow-hidden">
              <Image
                src="/images/figma/hero-refrigeration.png"
                alt="Commercial walk-in coolers and refrigeration equipment"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
                <span className="inline-block bg-[#0a2c44]/90 backdrop-blur-sm text-white text-[11px] font-semibold tracking-wider uppercase px-4 py-2 rounded shadow-md border border-white/10">
                  BUILT FOR BUSINESS. READY FOR EVERYDAY.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Service Divisions Section */}
      <section id="services" className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-2">
                OUR SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
                The right expertise. For every environment.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#4e6470] leading-relaxed">
                Commercial systems come first. Home comfort matters just as much. Explore three focused service divisions, all under one dependable team.
              </p>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Commercial HVAC */}
            <div className="flex flex-col rounded-lg overflow-hidden border border-[#d9e3e8] bg-[#f4f7f8] shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative w-full h-60 overflow-hidden bg-slate-200">
                <Image
                  src="/images/figma/service-commercial-hvac.png"
                  alt="Commercial HVAC rooftop units"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#0a2c44]">
                    Commercial HVAC
                  </h3>
                  <span className="text-xs font-semibold text-[#087ca7] block mt-1">
                    Performance for your property
                  </span>
                  <p className="text-sm text-[#4e6470] mt-3 leading-relaxed">
                    Installation, repair and diagnostics for rooftop and packaged systems. Keep your facility operating with preventive care and focused performance troubleshooting.
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <Link
                    href="/commercial-hvac"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a2c44] bg-white border border-[#d9e3e8] px-4 py-2 rounded hover:border-[#087ca7] hover:text-[#087ca7] transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 text-[#087ca7]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Commercial Refrigeration */}
            <div className="flex flex-col rounded-lg overflow-hidden border border-[#d9e3e8] bg-[#f4f7f8] shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative w-full h-60 overflow-hidden bg-slate-200">
                <Image
                  src="/images/figma/service-commercial-refrigeration.png"
                  alt="Commercial refrigeration walk-in coolers and freezers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#0a2c44]">
                    Commercial Refrigeration
                  </h3>
                  <span className="text-xs font-semibold text-[#087ca7] block mt-1">
                    Reliability for your operation
                  </span>
                  <p className="text-sm text-[#4e6470] mt-3 leading-relaxed">
                    Support for walk-in coolers, freezers and reach-in equipment. From installation to diagnostics and maintenance, protect the performance your business depends on.
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <Link
                    href="/commercial-refrigeration"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a2c44] bg-white border border-[#d9e3e8] px-4 py-2 rounded hover:border-[#087ca7] hover:text-[#087ca7] transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 text-[#087ca7]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Residential HVAC */}
            <div className="flex flex-col rounded-lg overflow-hidden border border-[#d9e3e8] bg-[#f4f7f8] shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative w-full h-60 overflow-hidden bg-slate-200">
                <Image
                  src="/images/figma/service-residential-hvac.png"
                  alt="Residential HVAC condenser unit"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#0a2c44]">
                    Residential HVAC
                  </h3>
                  <span className="text-xs font-semibold text-[#087ca7] block mt-1">
                    Comfort for your home
                  </span>
                  <p className="text-sm text-[#4e6470] mt-3 leading-relaxed">
                    Heating and air conditioning installation, repair and preventive care, with thoughtful solutions for indoor air quality, humidity and whole-home comfort.
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <Link
                    href="/residential-hvac"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a2c44] bg-white border border-[#d9e3e8] px-4 py-2 rounded hover:border-[#087ca7] hover:text-[#087ca7] transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 text-[#087ca7]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Industries We Serve Section */}
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
            {/* Industry 1: Restaurants */}
            <div className="bg-white p-6 rounded-lg border border-[#d9e3e8] hover:border-[#087ca7] transition-all hover:shadow-sm">
              <Utensils className="w-6 h-6 text-[#087ca7] stroke-[1.6]" />
              <h3 className="text-base font-semibold text-[#0a2c44] mt-4">
                Restaurants & Food Service
              </h3>
              <p className="text-sm text-[#4e6470] mt-1 leading-snug">
                Kitchen cooling & food storage
              </p>
            </div>

            {/* Industry 2: Retail */}
            <div className="bg-white p-6 rounded-lg border border-[#d9e3e8] hover:border-[#087ca7] transition-all hover:shadow-sm">
              <Store className="w-6 h-6 text-[#087ca7] stroke-[1.6]" />
              <h3 className="text-base font-semibold text-[#0a2c44] mt-4">
                Retail Stores
              </h3>
              <p className="text-sm text-[#4e6470] mt-1 leading-snug">
                Comfort for staff & customers
              </p>
            </div>

            {/* Industry 3: Office Buildings */}
            <div className="bg-white p-6 rounded-lg border border-[#d9e3e8] hover:border-[#087ca7] transition-all hover:shadow-sm">
              <Building2 className="w-6 h-6 text-[#087ca7] stroke-[1.6]" />
              <h3 className="text-base font-semibold text-[#0a2c44] mt-4">
                Office Buildings
              </h3>
              <p className="text-sm text-[#4e6470] mt-1 leading-snug">
                Productive indoor environments
              </p>
            </div>

            {/* Industry 4: Commercial Properties */}
            <div className="bg-white p-6 rounded-lg border border-[#d9e3e8] hover:border-[#087ca7] transition-all hover:shadow-sm">
              <Warehouse className="w-6 h-6 text-[#087ca7] stroke-[1.6]" />
              <h3 className="text-base font-semibold text-[#0a2c44] mt-4">
                Commercial Properties
              </h3>
              <p className="text-sm text-[#4e6470] mt-1 leading-snug">
                System care across your property
              </p>
            </div>

            {/* Industry 5: Property Management */}
            <div className="bg-white p-6 rounded-lg border border-[#d9e3e8] hover:border-[#087ca7] transition-all hover:shadow-sm">
              <KeyRound className="w-6 h-6 text-[#087ca7] stroke-[1.6]" />
              <h3 className="text-base font-semibold text-[#0a2c44] mt-4">
                Property Management
              </h3>
              <p className="text-sm text-[#4e6470] mt-1 leading-snug">
                Ongoing maintenance relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Preventive Maintenance Banner Section */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0a2c44] text-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-md">
            {/* Left Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-3">
                PLAN AHEAD. KEEP MOVING.
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Commercial HVAC & Refrigeration Preventive Maintenance
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                Professional preventive maintenance services designed to support equipment reliability, identify potential issues, minimize unexpected breakdowns, and maintain system performance.
              </p>

              {/* Highlight callout with cyan left border */}
              <div className="border-l-2 border-[#087ca7] pl-4 py-1 mt-6 text-sm sm:text-base text-slate-200">
                A long-term service relationship, not just a repair visit.
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

            {/* Right Technician Image */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full">
              <Image
                src="/images/figma/preventive-maintenance-tech.png"
                alt="HVAC technician performing preventive maintenance on commercial rooftop unit"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Residential Comfort and Air Quality Section */}
      <section className="w-full py-16 sm:py-24 bg-white border-t border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image with Caption */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative w-full h-[320px] sm:h-[440px] rounded-t-lg overflow-hidden bg-slate-100">
                <Image
                  src="/images/figma/residential-living-room.png"
                  alt="Bright, comfortable residential living room with clean air circulation"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="bg-[#eaf5fa] text-[#087ca7] px-5 py-3 rounded-b-lg border-x border-b border-[#bfd0db]">
                <span className="text-xs font-semibold tracking-wider uppercase block">
                  COMMERCIAL PRECISION. A PERSONAL APPROACH AT HOME.
                </span>
              </div>
            </div>

            {/* Right Information & Priorities */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-2">
                  FOR YOUR HOME
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
                  Feel the difference in every room.
                </h2>
                <p className="text-sm sm:text-base text-[#4e6470] mt-3 leading-relaxed">
                  Your home should feel comfortable, not complicated. JIM Cooling & Heating Services brings a whole-home perspective to residential comfort—balancing temperature, airflow, moisture and the air you breathe.
                </p>
              </div>

              {/* 3 Comfort Priorities */}
              <div className="space-y-5 pt-2">
                {/* Priority 1 */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-[#eaf5fa] text-[#087ca7] shrink-0 mt-0.5">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#0a2c44]">
                      Comfort from room to room
                    </h3>
                    <p className="text-sm text-[#4e6470] mt-0.5 leading-relaxed">
                      Look beyond the thermostat to airflow and the way your home feels throughout the day.
                    </p>
                  </div>
                </div>

                {/* Priority 2 */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-[#eaf5fa] text-[#087ca7] shrink-0 mt-0.5">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#0a2c44]">
                      Humidity, thoughtfully managed
                    </h3>
                    <p className="text-sm text-[#4e6470] mt-0.5 leading-relaxed">
                      Explore dehumidification and humidity control for Houston’s demanding climate.
                    </p>
                  </div>
                </div>

                {/* Priority 3 */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-[#eaf5fa] text-[#087ca7] shrink-0 mt-0.5">
                    <Wind className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#0a2c44]">
                      A healthier indoor environment
                    </h3>
                    <p className="text-sm text-[#4e6470] mt-0.5 leading-relaxed">
                      Consider indoor air quality solutions alongside the needs of your heating and cooling system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Financing Options Section */}
      <section id="financing" className="w-full py-16 sm:py-24 bg-[#f4f7f8] border-t border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-10">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-2">
                MAKE ROOM FOR YOUR NEXT UPGRADE
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
                Commercial & Residential Financing Options
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#4e6470] leading-relaxed">
                JIM Cooling & Heating Services offers financing options for commercial and residential customers. Whether you need to upgrade commercial HVAC equipment or replace your home’s heating and cooling system, explore available financing solutions for your project.
              </p>
            </div>
          </div>

          {/* 2 Pathways Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#d9e3e8] shadow-sm">
              <Building2 className="w-7 h-7 text-[#087ca7] stroke-[1.6]" />
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0a2c44] mt-4">
                Commercial Financing
              </h3>
              <p className="text-sm text-[#4e6470] mt-2 leading-relaxed">
                Explore options for eligible commercial projects, including HVAC equipment upgrades.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#d9e3e8] shadow-sm">
              <House className="w-7 h-7 text-[#087ca7] stroke-[1.6]" />
              <h3 className="text-xl sm:text-2xl font-semibold text-[#0a2c44] mt-4">
                Residential Financing
              </h3>
              <p className="text-sm text-[#4e6470] mt-2 leading-relaxed">
                Explore options for eligible home heating and cooling installations and replacements.
              </p>
            </div>
          </div>

          {/* Actions & Terms */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8 pt-4">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/financing"
                className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3 rounded transition-colors group"
              >
                <span>Explore Financing Options</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/financing"
                className="inline-flex items-center gap-2 border border-[#d9e3e8] bg-white text-[#0a2c44] hover:border-[#087ca7] hover:text-[#087ca7] font-semibold text-sm px-6 py-3 rounded transition-colors group"
              >
                <span>Apply for Financing</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            <p className="text-xs text-[#4e6470] max-w-md leading-relaxed">
              Financing is subject to credit approval, eligibility requirements, and applicable terms and conditions.
            </p>
          </div>
        </div>
      </section>

      {/* 7. About JIM & Service Principles Section */}
      <section className="w-full py-16 sm:py-24 bg-white border-t border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Company Introduction */}
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
                JIM Cooling & Heating Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
                Technical care. Lasting relationships.
              </h2>
              <p className="text-sm sm:text-base text-[#4e6470] leading-relaxed pt-2">
                Serving commercial and residential customers across Greater Houston, JIM Cooling & Heating Services brings technical experience to diagnostics, installation, repair and preventive maintenance. Our approach is grounded in understanding your system, working safely and recommending care that supports long-term performance.
              </p>
            </div>

            {/* Right: Service Principles */}
            <div className="lg:col-span-6 divide-y divide-[#d9e3e8] flex flex-col justify-center">
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-[#0a2c44]">
                  Understand before recommending
                </h3>
                <p className="text-sm text-[#4e6470] mt-1 leading-relaxed">
                  Professional diagnostics that put the needs of your equipment and space first.
                </p>
              </div>

              <div className="py-6">
                <h3 className="text-lg font-semibold text-[#0a2c44]">
                  Work with care and precision
                </h3>
                <p className="text-sm text-[#4e6470] mt-1 leading-relaxed">
                  Thoughtful installation and repair, with attention to quality and safety.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold text-[#0a2c44]">
                  Think beyond the service call
                </h3>
                <p className="text-sm text-[#4e6470] mt-1 leading-relaxed">
                  Preventive care and clear communication for a lasting client relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
