import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Settings2,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Zap,
  Gauge,
  ThermometerSnowflake,
} from "lucide-react";

export const metadata = {
  title: "HVAC Services in Houston | Servicing, Installation & Maintenance | JIM Cooling & Heating",
  description:
    "Expert HVAC servicing, installation, and maintenance across the Greater Houston area. Lower your energy bills, prevent breakdowns, and optimize indoor comfort.",
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-[#004f7a] via-[#006397] to-[#128dd1] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold tracking-wider uppercase mb-5">
            Houston&apos;s Trusted HVAC Specialists
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Services
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Delivering top-tier HVAC servicing, professional installations, and preventative maintenance to maximize energy efficiency and comfort across the Houston metropolitan area.
          </p>

          {/* Jump Navigation Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#servicing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#006397] font-bold text-sm shadow-md hover:bg-blue-50 transition-colors"
            >
              <Wrench className="h-4 w-4 text-[#b51527]" />
              Servicing & Repairs
            </a>
            <a
              href="#installation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold text-sm hover:bg-white hover:text-[#006397] transition-all"
            >
              <Zap className="h-4 w-4 text-yellow-300" />
              Installation & Upgrades
            </a>
            <a
              href="#maintenance"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold text-sm hover:bg-white hover:text-[#006397] transition-all"
            >
              <ShieldCheck className="h-4 w-4 text-teal-300" />
              Maintenance Plans
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        {/* =========================================================================
            SECTION 1: SERVICING
        ========================================================================= */}
        <section
          id="servicing"
          className="scroll-mt-28 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-100"
        >
          {/* Also support #cooling anchor for backwards compatibility */}
          <span id="cooling" className="scroll-mt-28" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#b51527] text-xs font-bold uppercase tracking-wider">
                <Wrench className="h-3.5 w-3.5" />
                Expert Diagnostic & Repair
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Servicing
              </h2>

              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>
                  HVAC repair services can significantly improve the energy efficiency of your home or business, which translates to substantial financial benefits. When your HVAC system malfunctions, it often leads to wasted energy, resulting in higher utility bills and increased carbon emissions. By promptly addressing these issues, you can ensure that your system operates at peak efficiency, reducing energy consumption and lowering your monthly expenses.
                </p>
                <p>
                  In the Houston area, where temperature extremes are common, a well-maintained HVAC system is crucial for maintaining a comfortable indoor environment without incurring excessive costs. Regular repairs and maintenance help prevent costly breakdowns and extend the lifespan of your equipment, saving you from expensive replacements and frequent repairs. By keeping your HVAC system in top condition, you not only enjoy a more comfortable living or working space but also make a positive impact on the environment by reducing your carbon footprint.
                </p>
                <p className="font-medium text-slate-700">
                  Choose our professional HVAC repair services to optimize the performance of your system, enhance its efficiency, and enjoy significant financial savings over time. Let us help you create a more sustainable and cost-effective environment in your home or business.
                </p>
              </div>

              {/* Servicing Highlight Badges */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 font-semibold">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-[#006397] flex-shrink-0" />
                  <span>Rapid Diagnostic & Troubleshooting</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-[#006397] flex-shrink-0" />
                  <span>Lower Monthly Energy Costs</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-[#006397] flex-shrink-0" />
                  <span>Commercial & Residential Support</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-[#006397] flex-shrink-0" />
                  <span>24/7 Priority Emergency Dispatch</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#b51527] hover:bg-[#991120] text-white font-bold text-sm shadow-md transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+17132699054"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-colors shadow-sm"
                >
                  <PhoneCall className="h-4 w-4 text-[#006397]" />
                  Call +1 (713) 269-9054
                </a>
              </div>
            </div>

            {/* Media Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/img04.webp"
                    alt="Professional HVAC Servicing and Repairs in Houston"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#b51527] text-white text-xs font-bold mb-2">
                      Prompt Houston Servicing
                    </span>
                    <h3 className="text-lg font-bold">Fast Turnaround HVAC Repairs</h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Restoring system efficiency before minor issues become major costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INSTALLATION
        ========================================================================= */}
        <section
          id="installation"
          className="scroll-mt-28 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-100"
        >
          {/* Also support #heating anchor for backwards compatibility */}
          <span id="heating" className="scroll-mt-28" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Media Column (Left on desktop) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/img05.webp"
                    alt="HVAC Installation and Upgrades in Houston"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#006397] text-white text-xs font-bold mb-2">
                      High-Efficiency Installations
                    </span>
                    <h3 className="text-lg font-bold">Engineered for Peak Performance</h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Matched to your space to prevent oversizing or undersizing penalties.
                    </p>
                  </div>
                </div>
              </div>

              {/* Supported Systems Pills */}
              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <Settings2 className="h-3.5 w-3.5 text-[#006397]" />
                  Systems We Install & Replace:
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Rooftop Units",
                    "Split Systems",
                    "Package Units",
                    "Residential Furnaces",
                    "Air Conditioning Units",
                    "Heat Pumps",
                    "High-Efficiency Systems",
                  ].map((sys) => (
                    <span
                      key={sys}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {sys}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Text Column (Right on desktop) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#006397] text-xs font-bold uppercase tracking-wider">
                <Zap className="h-3.5 w-3.5" />
                Precision Engineering
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Installation
              </h2>

              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>
                  We offer comprehensive installation services for a wide range of commercial and residential HVAC systems, including rooftop units, split systems, package units, residential furnaces, air conditioning units, heat pumps, high-efficiency systems, and more. Serving the Houston area, our expert installations ensure that your HVAC system operates at peak efficiency from day one, providing you with immediate and long-term financial benefits.
                </p>
                <p>
                  By choosing our professional installation services, you can reduce your energy consumption and lower your utility bills. High-efficiency systems, in particular, are designed to use less energy while delivering superior performance, which translates into significant cost savings over time. Additionally, a properly installed HVAC system minimizes the risk of breakdowns and expensive repairs, ensuring reliable comfort for your home or business without unexpected expenses.
                </p>
                <p>
                  Our team’s expertise guarantees that your HVAC system is perfectly matched to your specific needs, avoiding the costs associated with oversized or undersized units. This precision not only optimizes performance but also extends the lifespan of your equipment, providing further financial advantages.
                </p>
                <p className="font-medium text-slate-700">
                  Investing in our HVAC installation services means investing in a sustainable, cost-effective solution that enhances comfort and efficiency while reducing operational costs. Let us help you achieve optimal indoor climate control and significant financial savings with our top-tier HVAC solutions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#006397] hover:bg-[#004f7a] text-white font-bold text-sm shadow-md transition-colors"
                >
                  Request an Installation Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+17132699054"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-colors shadow-sm"
                >
                  <PhoneCall className="h-4 w-4 text-[#006397]" />
                  Call +1 (713) 269-9054
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: MAINTENANCE
        ========================================================================= */}
        <section
          id="maintenance"
          className="scroll-mt-28 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-100"
        >
          {/* Also support #air-quality anchor for backwards compatibility */}
          <span id="air-quality" className="scroll-mt-28" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-[#006397] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="h-3.5 w-3.5 text-[#128dd1]" />
                Preventative Care & Longevity
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Maintenance
              </h2>

              <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Regular HVAC maintenance is essential for keeping your system running efficiently and avoiding costly breakdowns, especially in the Houston area where temperature extremes are common. Our comprehensive maintenance services include detailed inspections, thorough cleaning, and precise tune-ups, all designed to ensure that your equipment operates at peak performance.
                </p>
                <p>
                  By investing in regular maintenance, you can significantly reduce the risk of unexpected breakdowns, which often lead to expensive emergency repairs. Proper maintenance helps identify and address potential issues before they escalate, saving you money on major repairs and extending the lifespan of your HVAC system. This proactive approach ensures that your system continues to operate efficiently, which translates to lower energy consumption and reduced utility bills.
                </p>
                <p>
                  Moreover, a well-maintained HVAC system operates more efficiently, meaning it requires less energy to maintain comfortable indoor temperatures. This not only enhances comfort but also results in significant financial savings over time. High-efficiency operation also means your system is less likely to overwork, reducing wear and tear and postponing the need for costly replacements.
                </p>
                <p className="font-medium text-slate-700">
                  In summary, our regular HVAC maintenance services provide a cost-effective solution to ensure your system&apos;s longevity and efficiency. By keeping your HVAC system in top condition, you can enjoy continuous comfort, avoid unexpected expenses, and achieve long-term financial savings. Let us help you maintain a reliable and efficient HVAC system that supports your financial well-being and comfort needs.
                </p>
              </div>

              {/* Maintenance Key Checklist */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 font-semibold">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Gauge className="h-4 w-4 text-[#128dd1] flex-shrink-0" />
                  <span>Detailed Multi-Point Inspections</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Gauge className="h-4 w-4 text-[#128dd1] flex-shrink-0" />
                  <span>Thorough Cleaning & Coil Sanitization</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Gauge className="h-4 w-4 text-[#128dd1] flex-shrink-0" />
                  <span>Precise Seasonal Tune-Ups</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Gauge className="h-4 w-4 text-[#128dd1] flex-shrink-0" />
                  <span>Extended Equipment Lifespan</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#006397] hover:bg-[#004f7a] text-white font-bold text-sm shadow-md transition-colors"
                >
                  Request a Maintenance Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+17132699054"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm transition-colors shadow-sm"
                >
                  <PhoneCall className="h-4 w-4 text-[#006397]" />
                  Call +1 (713) 269-9054
                </a>
              </div>
            </div>

            {/* Media Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src="/img06.webp"
                    alt="HVAC Seasonal Maintenance in Houston"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#128dd1] text-white text-xs font-bold mb-2">
                      Proactive Protection
                    </span>
                    <h3 className="text-lg font-bold">Comprehensive Tune-Ups</h3>
                    <p className="text-xs text-slate-200 mt-1">
                      Prevent unexpected breakdowns and keep energy bills under control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Callout Banner */}
        <section className="bg-gradient-to-r from-[#006397] to-[#128dd1] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full w-fit">
              <ThermometerSnowflake className="h-3.5 w-3.5" />
              Trusted Houston Climate Control
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Optimize Your Indoor Comfort and Save Money?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg">
              Whether you need urgent system servicing, a new high-efficiency installation, or preventative maintenance, Jim Cooling and Heating is ready to serve you.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#b51527] hover:bg-[#991120] text-white font-bold text-sm shadow-lg transition-colors"
              >
                Request a Fast Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+17132699054"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#006397] hover:bg-blue-50 font-bold text-sm shadow-md transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                Call +1 (713) 269-9054
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
