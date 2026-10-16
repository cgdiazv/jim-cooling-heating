"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Commercial HVAC", href: "/commercial-hvac" },
    { name: "Commercial Refrigeration", href: "/commercial-refrigeration" },
    { name: "Residential HVAC", href: "/residential-hvac" },
    { name: "Financing", href: "/financing" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full">
      {/* Contact Invitation Banner (Pre-footer from Figma, omitted on Contact page to avoid duplication) */}
      {!isContactPage && (
        <section className="w-full bg-[#0a2c44] text-white py-16 sm:py-20 border-b border-[#142e40]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#087ca7] uppercase block">
                LET’S TALK ABOUT YOUR SYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                Your business. Your home. Our attention.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed pt-1">
                Tell us what your property needs. We’ll help you take the next step in service, maintenance or a system upgrade.
              </p>
            </div>

            {/* Right Contact Info */}
            <div className="lg:col-span-5 flex flex-col lg:items-end justify-center space-y-2">
              <a
                href="tel:+17132699054"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white hover:text-[#087ca7] transition-colors inline-block tracking-tight"
              >
                +1 (713) 269-9054
              </a>
              <a
                href="mailto:hvac@jimcoolingandheating.com"
                className="text-sm sm:text-base text-slate-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#087ca7]" />
                <span>hvac@jimcoolingandheating.com</span>
              </a>
              <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#087ca7]" />
                <span>Serving Greater Houston</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Main Footer (Figma Footer) */}
      <div className="w-full bg-white text-[#0a2c44] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Brand & Navigation */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10">
            {/* Brand Signature */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/figma/logo.png"
                  alt="JIM Cooling & Heating Services Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-semibold text-[#0a2c44] leading-tight">
                  JIM Cooling & Heating Services
                </span>
                <span className="text-xs text-[#4e6470] mt-0.5">
                  Commercial expertise. Residential comfort.
                </span>
              </div>
            </div>

            {/* Footer Navigation Links */}
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-medium text-[#0a2c44] hover:text-[#087ca7] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Divider */}
          <div className="border-t border-[#d9e3e8] pt-8 space-y-4">
            {/* SEO Overview & Service Areas */}
            <div className="space-y-2.5 text-xs text-[#4e6470] leading-relaxed max-w-5xl">
              <p>
                <strong className="text-[#0a2c44] font-medium">Greater Houston’s Trusted HVAC &amp; Commercial Refrigeration Contractors:</strong> JIM Cooling &amp; Heating Services provides certified commercial HVAC installation, rapid rooftop packaged unit repairs, planned preventive maintenance agreements, and commercial walk-in cooler and freezer solutions for businesses throughout the region. From restaurants, supermarkets, and retail facilities to property management portfolios, our technicians deliver reliable, energy-efficient performance.
              </p>
              <p>
                <strong className="text-[#0a2c44] font-medium">Comprehensive Residential Heating, AC &amp; Indoor Air Quality:</strong> Delivering tailored residential air conditioning replacements, furnace repairs, heat pump upgrades, and advanced dehumidification systems built for Houston’s demanding climate. Proudly serving Houston, Katy, Sugar Land, Pearland, The Woodlands, Cypress, Spring, Pasadena, and surrounding Greater Houston communities with professional care and lasting customer relationships.
              </p>
            </div>

            {/* Copyright & Credit */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#4e6470] font-normal">
              <p>© 2026 JIM Cooling &amp; Heating Services. All rights reserved.</p>
              <a
                href="https://indevasa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#087ca7] transition-colors"
              >
                Indeva Websites
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
