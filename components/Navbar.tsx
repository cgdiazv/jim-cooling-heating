"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Clock,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  Flame,
  Snowflake,
  Wrench,
  CalendarDays,
  ArrowRight,
  MapPin,
  Mail,
} from "lucide-react";

interface SubService {
  name: string;
  desc: string;
  href: string;
  icon: typeof Snowflake;
}

const servicesList: SubService[] = [
  {
    name: "Servicing & Repair",
    desc: "Energy-efficient repairs to lower bills and prevent breakdowns",
    href: "/services#servicing",
    icon: Wrench,
  },
  {
    name: "Installation & Upgrades",
    desc: "Commercial & residential systems, heat pumps & furnaces",
    href: "/services#installation",
    icon: Snowflake,
  },
  {
    name: "Preventative Maintenance",
    desc: "Comprehensive inspections, cleaning & precision tune-ups",
    href: "/services#maintenance",
    icon: Flame,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }

  const navLinks = [
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "About Us", href: "/about", hasDropdown: false },
    { name: "Projects", href: "/projects", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Emergency & Info Utility Bar */}
      <div className="bg-[#004e77] text-white text-xs sm:text-sm border-b border-[#006397]/40 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
          {/* Emergency Tag & Area */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-semibold text-white bg-[#b51527] px-2.5 py-0.5 rounded-full text-xs tracking-wide shadow-sm">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              24/7 EMERGENCY SERVICE
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-sky-100">
              <ShieldCheck className="h-3.5 w-3.5 text-[#128dd1]" />
              Licensed, Bonded & Insured HVAC Pros
            </span>
          </div>

          {/* Quick Contact & Hours */}
          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <div className="hidden lg:flex items-center gap-1.5 text-sky-100">
              <Clock className="h-3.5 w-3.5 text-[#128dd1]" />
              <span>Mon-Sat: 7:00 AM – 8:00 PM</span>
            </div>
            <a
              href="mailto:hvac@jimcoolingandheating.com"
              className="hidden xl:inline-flex items-center gap-1.5 font-medium text-white hover:text-[#128dd1] transition-colors"
              title="Email JIM Cooling & Heating"
            >
              <Mail className="h-3.5 w-3.5 text-[#128dd1]" />
              <span>hvac@jimcoolingandheating.com</span>
            </a>
            <a
              href="tel:+17132699054"
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#128dd1] transition-colors"
              title="Call JIM Cooling & Heating directly"
            >
              <Phone className="h-3.5 w-3.5 text-[#128dd1]" />
              <span>+1 (713) 269-9054</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
            : "bg-white shadow-sm py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#128dd1] rounded-lg p-1"
              aria-label="JIM Cooling & Heating Homepage"
            >
              <div className="relative h-12 sm:h-14 w-auto flex items-center">
                <Image
                  src="/logo.webp"
                  alt="JIM Cooling & Heating Logo"
                  width={169}
                  height={104}
                  priority
                  className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <div className="flex items-center">
                        <Link
                          href={link.href}
                          className={`flex items-center gap-1 px-3.5 py-2 rounded-md font-medium text-sm transition-colors ${
                            isActive(link.href)
                              ? "text-[#006397] font-semibold bg-sky-50"
                              : "text-slate-700 hover:text-[#006397] hover:bg-slate-50"
                          }`}
                        >
                          {link.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              servicesDropdownOpen ? "rotate-180 text-[#006397]" : "text-slate-400"
                            }`}
                          />
                        </Link>
                      </div>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 w-80 pt-2 transition-all duration-200 transform origin-top-left ${
                          servicesDropdownOpen
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2.5 overflow-hidden">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                            Our HVAC Solutions
                          </div>
                          <div className="space-y-1">
                            {servicesList.map((service) => {
                              const IconComponent = service.icon;
                              return (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item"
                                >
                                  <div className="p-2 rounded-lg bg-[#006397]/10 text-[#006397] group-hover/item:bg-[#128dd1] group-hover/item:text-white transition-colors">
                                    <IconComponent className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-slate-800 group-hover/item:text-[#006397] transition-colors">
                                      {service.name}
                                    </div>
                                    <p className="text-xs text-slate-500 leading-snug">
                                      {service.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="mt-2 pt-2 border-t border-slate-100 px-3 pb-1">
                            <Link
                              href="/services"
                              className="text-xs font-semibold text-[#006397] hover:text-[#128dd1] flex items-center justify-between group/all"
                            >
                              <span>Explore All Services</span>
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/all:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-md font-medium text-sm transition-colors relative ${
                      isActive(link.href)
                        ? "text-[#006397] font-semibold bg-sky-50"
                        : "text-slate-700 hover:text-[#006397] hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#006397] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+17132699054"
                className="hidden xl:flex items-center gap-2 px-3 py-2 text-slate-700 hover:text-[#006397] font-medium text-sm transition-colors rounded-lg hover:bg-slate-50"
                title="Call JIM Cooling & Heating"
              >
                <div className="p-1.5 rounded-full bg-[#128dd1]/10 text-[#128dd1]">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] text-slate-400 font-semibold leading-none uppercase">Need Help?</div>
                  <div className="text-xs font-bold text-slate-800">+1 (713) 269-9054</div>
                </div>
              </a>

              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-[#b51527] hover:bg-[#961220] active:scale-[0.98] text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
              >
                <CalendarDays className="h-4 w-4" />
                <span>Get Free Quote</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+17132699054"
                className="flex items-center justify-center p-2 rounded-lg bg-[#b51527] text-white sm:hidden shadow-sm"
                aria-label="Call Emergency Service"
              >
                <Phone className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#006397] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#128dd1]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-slate-800" />
                ) : (
                  <Menu className="h-6 w-6 text-slate-800" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-slate-200 bg-white overflow-hidden ${
          mobileMenuOpen ? "max-h-[640px] opacity-100 shadow-xl" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          {/* Mobile Links */}
          <div className="space-y-1">
            {/* Services with Accordion */}
            <div>
              <div className="flex items-center justify-between rounded-lg hover:bg-slate-50">
                <Link
                  href="/services"
                  className={`flex-1 px-3 py-2.5 font-semibold text-base ${
                    isActive("/services") ? "text-[#006397]" : "text-slate-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-2 text-slate-500 hover:text-[#006397] focus:outline-none"
                  aria-label="Toggle Services submenu"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileServicesOpen ? "rotate-180 text-[#006397]" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1.5 bg-slate-50/70 rounded-lg my-1">
                  {servicesList.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-2.5 py-2 px-3 rounded-md text-sm font-medium text-slate-700 hover:text-[#006397] hover:bg-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <IconComponent className="h-4 w-4 text-[#128dd1]" />
                        <span>{service.name}</span>
                      </Link>
                    );
                  })}
                  <Link
                    href="/services"
                    className="flex items-center justify-between py-2 px-3 text-xs font-semibold text-[#006397]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>View All Services</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              href="/about"
              className={`block px-3 py-2.5 rounded-lg font-semibold text-base transition-colors ${
                isActive("/about")
                  ? "text-[#006397] bg-sky-50"
                  : "text-slate-800 hover:bg-slate-50 hover:text-[#006397]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Projects */}
            <Link
              href="/projects"
              className={`block px-3 py-2.5 rounded-lg font-semibold text-base transition-colors ${
                isActive("/projects")
                  ? "text-[#006397] bg-sky-50"
                  : "text-slate-800 hover:bg-slate-50 hover:text-[#006397]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`block px-3 py-2.5 rounded-lg font-semibold text-base transition-colors ${
                isActive("/contact")
                  ? "text-[#006397] bg-sky-50"
                  : "text-slate-800 hover:bg-slate-50 hover:text-[#006397]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          {/* Action CTAs in Mobile Drawer */}
          <div className="pt-3 border-t border-slate-200 space-y-2.5">
            <Link
              href="/contact#quote"
              className="w-full flex items-center justify-center gap-2 bg-[#b51527] hover:bg-[#961220] text-white py-3 rounded-lg font-semibold text-sm shadow-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <CalendarDays className="h-4 w-4" />
              <span>Get Free Quote</span>
            </Link>

            <a
              href="tel:+17132699054"
              className="w-full flex items-center justify-center gap-2 bg-[#006397] hover:bg-[#004e77] text-white py-3 rounded-lg font-semibold text-sm shadow-sm transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call +1 (713) 269-9054 (24/7)</span>
            </a>
          </div>

          {/* Quick info card */}
          <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-500 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-700 font-medium">
              <MapPin className="h-3.5 w-3.5 text-[#128dd1]" />
              <span>Serving Metro Area & Surrounding Counties</span>
            </div>
            <a
              href="mailto:hvac@jimcoolingandheating.com"
              className="flex items-center gap-1.5 text-slate-700 hover:text-[#006397] font-medium transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-[#128dd1]" />
              <span>hvac@jimcoolingandheating.com</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-600">
              <ShieldCheck className="h-3.5 w-3.5 text-[#006397]" />
              <span>Licensed, Bonded & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
