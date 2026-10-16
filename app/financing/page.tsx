import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  ShieldCheck,
  Building2,
  House,
  CheckCircle2,
  CreditCard,
  Percent,
  Clock,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Commercial & Residential HVAC Financing | JIM Cooling & Heating Houston",
  description:
    "Flexible financing options for residential air conditioning and commercial HVAC equipment upgrades across Greater Houston. Low monthly payments and fast approvals.",
};

export default function FinancingPage() {
  const steps = [
    {
      num: "01",
      title: "Schedule Your Free Estimate",
      desc: "Our technician evaluates your property, determines the proper equipment sizing (Manual J / commercial tonnage), and provides a transparent quote.",
    },
    {
      num: "02",
      title: "Select Your Financing Plan",
      desc: "Choose from multiple flexible monthly payment structures, promotional low/zero-interest options, or commercial lease-to-own plans.",
    },
    {
      num: "03",
      title: "Fast, Secure Application",
      desc: "Complete a brief, confidential online application with our vetted financing partners and receive credit approval decisions within minutes.",
    },
    {
      num: "04",
      title: "Immediate Installation",
      desc: "Once approved, our installation team schedules your equipment upgrade promptly so you can enjoy reliable comfort immediately.",
    },
  ];

  const faqs = [
    {
      q: "Can I finance both commercial and residential HVAC equipment?",
      a: "Yes! We provide tailored financing solutions for homeowners looking to replace aging air conditioning units and for business owners upgrading commercial rooftop systems, refrigeration units, or multi-zone VRF setups.",
    },
    {
      q: "Does applying for financing affect my credit score?",
      a: "Most pre-qualification checks use a soft credit pull that will not impact your credit score. A standard review is only conducted when you officially submit your finalized application.",
    },
    {
      q: "Are promotional 0% interest or low-APR options available?",
      a: "Depending on ongoing promotions and credit eligibility, promotional terms such as 0% interest for 12 to 18 months or low-fixed monthly payment plans are frequently available.",
    },
    {
      q: "What types of equipment qualify for financing?",
      a: "Full system replacements (condenser, coil, furnace/air handler), commercial rooftop units, walk-in coolers, ductless mini-splits, and whole-home dehumidifiers all qualify for financing.",
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
              <span>Financing</span>
            </div>

            <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
              MAKE ROOM FOR YOUR NEXT UPGRADE
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Commercial &amp; Residential HVAC Financing Options
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
              Don’t let upfront equipment costs delay essential comfort or business productivity. JIM Cooling &amp; Heating Services offers versatile financing options tailored for Houston homes and commercial facilities.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-6 py-3.5 rounded transition-colors group shadow-sm"
              >
                <span>Apply for Financing</span>
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

      {/* Two Pathways Breakdown */}
      <section className="w-full py-16 sm:py-24 bg-[#f4f7f8] border-b border-[#d9e3e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Commercial Financing Card */}
            <div className="bg-white p-8 rounded-xl border border-[#d9e3e8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-3 bg-[#eaf5fa] text-[#087ca7] rounded-lg w-fit">
                  <Building2 className="w-7 h-7 stroke-[1.6]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#0a2c44] mt-5">
                  Commercial Financing
                </h2>
                <p className="text-sm text-[#4e6470] mt-3 leading-relaxed">
                  Preserve your working capital and maintain predictable cash flow. Our commercial programs enable property managers, restaurants, and retail business owners to upgrade high-tonnage rooftop equipment, refrigeration systems, or multi-zone setups without depleting operational reserves.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-[#0a2c44]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087ca7] shrink-0" />
                    <span>Preserve company credit lines &amp; liquid reserves</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087ca7] shrink-0" />
                    <span>Potential tax deductions under Section 179</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087ca7] shrink-0" />
                    <span>Flexible equipment leasing &amp; lease-to-own plans</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087ca7] shrink-0" />
                    <span>Coverage for installations from $5,000 to $100,000+</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-[#d9e3e8]">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors w-full justify-center"
                >
                  <span>Explore Commercial Options</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Residential Financing Card */}
            <div className="bg-white p-8 rounded-xl border border-[#d9e3e8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-3 bg-[#eaf5fa] text-[#087ca7] rounded-lg w-fit">
                  <House className="w-7 h-7 stroke-[1.6]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#0a2c44] mt-5">
                  Residential Financing
                </h2>
                <p className="text-sm text-[#4e6470] mt-3 leading-relaxed">
                  A sudden air conditioning breakdown shouldn’t strain your family budget. Replace outdated 10-SEER equipment with modern, ultra-efficient inverter technology and enjoy low, manageable monthly payments that fit comfortably into your routine expenses.
                </p>

                <ul className="mt-6 space-y-2.5 text-sm text-[#0a2c44]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087ca7] shrink-0" />
                    <span>Affordable, low-fixed monthly payment plans</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087ca7] shrink-0" />
                    <span>Competitive interest rates &amp; promo terms</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087ca7] shrink-0" />
                    <span>No prepayment penalties for early payoff</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087ca7] shrink-0" />
                    <span>Energy bill savings offset monthly payments</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-[#d9e3e8]">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 bg-[#087ca7] hover:bg-[#076b91] text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors w-full justify-center"
                >
                  <span>Explore Residential Options</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-2">
              SIMPLE 4-STEP PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
              How Financing Works
            </h2>
            <p className="text-sm sm:text-base text-[#4e6470] mt-3 leading-relaxed">
              We make securing approval for your heating, cooling, or refrigeration project straightforward and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-[#f4f7f8] p-6 rounded-lg border border-[#d9e3e8] flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-[#087ca7] block mb-3">
                    {st.num}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0a2c44]">
                    {st.title}
                  </h3>
                  <p className="text-sm text-[#4e6470] mt-2 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-16 sm:py-24 bg-[#f4f7f8] border-t border-[#d9e3e8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block mb-2">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2c44] tracking-tight">
              Frequently Asked Financing Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white p-6 rounded-lg border border-[#d9e3e8]"
              >
                <h3 className="text-base font-semibold text-[#0a2c44] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#087ca7] shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-[#4e6470] mt-3 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-[#4e6470]">
            Financing is subject to credit approval, eligibility requirements, and applicable terms and conditions.
          </div>
        </div>
      </section>
    </div>
  );
}
