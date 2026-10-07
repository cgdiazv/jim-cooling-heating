import Image from "next/image";
import Link from "next/link";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import {
  Snowflake,
  Flame,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Clock,
  PhoneCall,
  CalendarDays,
  ArrowRight,
  Star,
  ExternalLink,
  MapPin,
  Leaf,
  Award,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/header01.webp"
            alt="HVAC technician at work"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003855] via-[#006397]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-sky-200">
              <span className="flex h-2 w-2 rounded-full bg-[#128dd1]" />
              Trusted HVAC Contractors in Your Community
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Reliable Cooling & Heating Solutions for Your Comfort
            </h1>

            <p className="text-lg sm:text-xl text-sky-100/90 leading-relaxed">
              From emergency AC repairs to energy-efficient furnace installations, JIM Cooling & Heating delivers certified, guaranteed comfort year-round.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact#quote"
                className="inline-flex items-center justify-center gap-2 bg-[#b51527] hover:bg-[#961220] text-white px-7 py-3.5 rounded-lg font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <CalendarDays className="h-5 w-5" />
                <span>Request Free Quote</span>
              </Link>
              <a
                href="tel:+17132699054"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3.5 rounded-lg font-semibold text-base transition-colors"
              >
                <PhoneCall className="h-5 w-5 text-[#128dd1]" />
                <span>Call +1 (713) 269-9054</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-sky-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#128dd1]" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#128dd1]" />
                <span>24/7 Rapid Emergency Response</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="h-4 w-4 text-[#128dd1]" />
                <span>Licensed, Bonded & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-wider uppercase text-[#128dd1]">
              Expert HVAC Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#006397] mt-2">
              Comprehensive Climate Solutions
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Tailored heating, cooling, and air quality systems designed for optimal energy savings and indoor comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/img04.webp"
                  alt="Air Conditioning Services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 h-11 w-11 rounded-xl bg-[#006397] text-white flex items-center justify-center shadow-md">
                  <Snowflake className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#006397] transition-colors">
                  Air Conditioning Services
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  Precision central air installations, ductless mini-splits, refrigerant recharging, and prompt cooling system repairs.
                </p>
                <Link
                  href="/services#cooling"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#006397] hover:text-[#128dd1] group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/img05.webp"
                  alt="Heating & Heat Pumps"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 h-11 w-11 rounded-xl bg-[#b51527] text-white flex items-center justify-center shadow-md">
                  <Flame className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#b51527] transition-colors">
                  Heating & Heat Pumps
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  High-efficiency gas & electric furnaces, heat pump conversion, heat exchanger repairs, and winter readiness tune-ups.
                </p>
                <Link
                  href="/services#heating"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b51527] hover:text-[#961220] group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col">
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                <Image
                  src="/img06.webp"
                  alt="Maintenance & Tune-ups"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 h-11 w-11 rounded-xl bg-[#128dd1] text-white flex items-center justify-center shadow-md">
                  <Wrench className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#006397] transition-colors">
                  Maintenance & Tune-ups
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  Proactive seasonal maintenance plans to avoid breakdowns, maximize equipment lifespan, and minimize electric bills.
                </p>
                <Link
                  href="/services#maintenance"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#128dd1] hover:text-[#006397] group/link"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us? Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual with Image and Badges */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Background decorative glow */}
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#128dd1]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#006397]/15 rounded-full blur-3xl pointer-events-none" />

                {/* Main Featured Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-square sm:aspect-4/3 lg:aspect-square">
                  <Image
                    src="/img02.webp"
                    alt="Jim Cooling and Heating HVAC team at work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>

                {/* Floating Experience Badge (Top Right) */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3 backdrop-blur-sm">
                  <div className="h-12 w-12 rounded-xl bg-[#006397] text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
                    18+
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Established</div>
                    <div className="text-sm font-extrabold text-slate-800">Serving Since 2006</div>
                  </div>
                </div>

                {/* Floating Trust Badge (Bottom Left) */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-[#b51527] text-white flex items-center justify-center shadow-sm">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-slate-800">Bonded & Insured</div>
                    <div className="text-xs text-slate-500 font-medium">Certified HVAC Specialists</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content & Exact Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-bold uppercase tracking-wider text-[#006397]">
                <Award className="h-4 w-4 text-[#128dd1]" />
                <span>Why Us?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Top-Notch HVAC Solutions Built on Trust & Performance
              </h2>

              {/* Exact Text Required by User */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium bg-slate-50 p-5 rounded-2xl border-l-4 border-[#006397] border border-slate-100">
                Since 2006, Jim Cooling and Heating has been your trusted partner for top-notch HVAC solutions. Our bonded and insured team specializes in installations, repairs, and maintenance to ensure peak performance. Choose us for reliable, efficient service that saves you money and reduces environmental impact.
              </p>

              {/* Core Feature Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-100 shadow-sm transition-colors">
                  <div className="p-2 rounded-lg bg-[#006397]/10 text-[#006397] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Bonded & Insured</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Full liability coverage and licensed HVAC specialists.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-100 shadow-sm transition-colors">
                  <div className="p-2 rounded-lg bg-[#128dd1]/10 text-[#128dd1] flex-shrink-0 mt-0.5">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Energy & Cost Savings</h4>
                    <p className="text-xs text-slate-500 mt-0.5">High-efficiency systems designed to lower utility bills.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-100 shadow-sm transition-colors">
                  <div className="p-2 rounded-lg bg-[#b51527]/10 text-[#b51527] flex-shrink-0 mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">24/7 Rapid Response</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Ready for urgent cooling and furnace breakdowns.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 hover:bg-slate-50 border border-slate-100 shadow-sm transition-colors">
                  <div className="p-2 rounded-lg bg-[#006397]/10 text-[#006397] flex-shrink-0 mt-0.5">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Peak Performance</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Precision calibration, leak detection & coil tuning.</p>
                  </div>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#b51527] hover:bg-[#961220] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <CalendarDays className="h-4 w-4" />
                  <span>Get Free Quote</span>
                </Link>
                <a
                  href="tel:+17132699054"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-6 py-3.5 rounded-xl font-bold text-sm shadow-sm transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-[#128dd1]" />
                  <span>Call +1 (713) 269-9054</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-semibold text-[#006397] mb-3">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Verified Google Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#006397]">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Read verified feedback from homeowners and businesses across Greater Houston who trust Jim Cooling & Heating for their climate needs.
            </p>
          </div>

          {/* Interactive Reviews Carousel */}
          <div>
            <ReviewsCarousel />
          </div>
        </div>
      </section>

      {/* Houston Service Area (Map Section) */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-semibold text-[#006397] mb-3">
              <MapPin className="h-4 w-4 text-[#b51527]" />
              <span>Coverage & Direct Dispatch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#006397]">
              Houston Service Area
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Providing fast, reliable HVAC repairs, emergency diagnostics, and new installations throughout Houston and surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Verified Google Reviews Profile */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                {/* Google Header Box */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center p-2">
                      <svg className="h-7 w-7" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg leading-tight">
                        Jim Cooling And Heating Services
                      </h3>
                      <p className="text-xs text-slate-500">Google Business Profile</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Verified
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs font-medium text-slate-500">
                      Top-Rated HVAC & Refrigeration Service
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-slate-900">5.0</span>
                    <span className="text-xs text-slate-400 block font-medium">on Google</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#128dd1] flex-shrink-0 mt-0.5" />
                    <span>Prompt dispatch across Houston, TX & surrounding counties</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#128dd1] flex-shrink-0 mt-0.5" />
                    <span>Transparent, upfront quotes with no hidden fees</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#128dd1] flex-shrink-0 mt-0.5" />
                    <span>Licensed, bonded & insured specialists</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-200 space-y-3">
                <a
                  href="https://www.google.com/maps/place/Jim+Cooling+And+Heating+Services/@29.8413521,-95.498702,9z/data=!4m16!1m9!3m8!1s0xa83e5ea2c247d857:0x5c27427d54c6d5b8!2sJim+Cooling+And+Heating+Services!8m2!3d29.841352!4d-95.498702!9m1!1b1!16s%2Fg%2F11q8gj34bb!3m5!1s0xa83e5ea2c247d857:0x5c27427d54c6d5b8!8m2!3d29.841352!4d-95.498702!16s%2Fg%2F11q8gj34bb?entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#006397] hover:bg-[#004e77] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <span>Read Reviews on Google Maps</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://www.google.com/maps/place/Jim+Cooling+And+Heating+Services/@29.8413521,-95.498702,9z/data=!4m16!1m9!3m8!1s0xa83e5ea2c247d857:0x5c27427d54c6d5b8!2sJim+Cooling+And+Heating+Services!8m2!3d29.841352!4d-95.498702!9m1!1b1!16s%2Fg%2F11q8gj34bb!3m5!1s0xa83e5ea2c247d857:0x5c27427d54c6d5b8!8m2!3d29.841352!4d-95.498702!16s%2Fg%2F11q8gj34bb?entry=ttu&g_ep=EgoyMDI2MTAwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors"
                >
                  <span>Leave a Review for Jim Cooling & Heating</span>
                </a>
              </div>
            </div>

            {/* Right Card: Interactive Google Maps Embed */}
            <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col">
              <div className="p-5 bg-slate-50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <MapPin className="h-4 w-4 text-[#b51527]" />
                  <span>Service Area: Houston, Texas & Surrounding Region</span>
                </div>
                <a
                  href="tel:+17132699054"
                  className="font-bold text-[#006397] hover:text-[#128dd1] flex items-center gap-1.5"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-[#128dd1]" />
                  <span>+1 (713) 269-9054</span>
                </a>
              </div>
              <div className="relative w-full h-[380px] sm:h-[440px] bg-slate-100 flex-1">
                <iframe
                  title="Jim Cooling And Heating Services Google Maps Location"
                  src="https://maps.google.com/maps?q=Jim+Cooling+And+Heating+Services+Houston+TX&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
