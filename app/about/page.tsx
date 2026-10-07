import Image from "next/image";
import { ShieldCheck, Award, Users } from "lucide-react";

export const metadata = {
  title: "About Us | JIM Cooling & Heating",
  description: "Learn about JIM Cooling & Heating - your trusted local HVAC contractors dedicated to residential and commercial climate excellence.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#128dd1]">
              About JIM Cooling & Heating
            </span>
            <h1 className="text-4xl font-extrabold text-[#006397] sm:text-5xl">
              Dedicated to Keeping Families & Businesses Comfortable
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Founded on the values of honest service, technical precision, and transparent pricing, JIM Cooling & Heating has grown into one of the most trusted heating and air conditioning contractors in the region.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Whether you need rapid midnight emergency repairs or a multi-zone heat pump system installation for a modern home, our EPA-certified and factory-trained technicians arrive prepared to get the job done right the first time.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="text-3xl font-extrabold text-[#006397]">15+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Years of Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <div className="text-3xl font-extrabold text-[#b51527]">100%</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 bg-slate-200">
            <Image
              src="/img01.webp"
              alt="JIM Cooling & Heating technician in service"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
            <div className="p-3 w-fit rounded-xl bg-[#006397]/10 text-[#006397] mb-4">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Licensed & Certified</h3>
            <p className="text-sm text-slate-600">
              Fully insured, state-certified technicians trained across leading HVAC brands and high-efficiency systems.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
            <div className="p-3 w-fit rounded-xl bg-[#128dd1]/10 text-[#128dd1] mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Upfront Honest Pricing</h3>
            <p className="text-sm text-slate-600">
              No hidden fees or unexpected surcharges. You approve every quote and scope of work before we turn a single wrench.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
            <div className="p-3 w-fit rounded-xl bg-[#b51527]/10 text-[#b51527] mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">24/7 Rapid Response</h3>
            <p className="text-sm text-slate-600">
              HVAC breakdowns do not wait for business hours. Our team is always on standby for genuine emergency situations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
