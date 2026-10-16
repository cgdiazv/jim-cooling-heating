"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

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
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* Top Announcement & Contact Strip (Figma Contact strip) */}
      <div className="bg-[#0a2c44] text-white text-[11px] tracking-wider py-2 px-4 sm:px-6 lg:px-8 border-b border-[#142e40]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-normal text-slate-300 uppercase truncate">
            COMMERCIAL EXPERTISE. RESIDENTIAL COMFORT. GREATER HOUSTON.
          </span>
          <a
            href="tel:+17132699054"
            className="font-medium hover:text-[#087ca7] transition-colors flex items-center gap-1.5 shrink-0 ml-4"
          >
            <Phone className="w-3 h-3 text-[#087ca7]" />
            <span>+1 (713) 269-9054</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-shadow duration-200 border-b border-[#d9e3e8] ${
          isScrolled ? "shadow-sm bg-white/95 backdrop-blur-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="/images/figma/logo.png"
                alt="JIM Cooling & Heating Services Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] sm:text-base font-semibold tracking-tight text-[#0a2c44] leading-tight group-hover:text-[#087ca7] transition-colors">
                JIM Cooling & Heating Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href) && !link.href.includes("#");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] transition-all relative py-1 ${
                    isActive
                      ? "text-[#087ca7] font-semibold border-b-2 border-[#087ca7]"
                      : "text-[#0a2c44] font-medium hover:text-[#087ca7]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center gap-2 p-2 rounded-md text-[#0a2c44] hover:text-[#087ca7] hover:bg-slate-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <span className="text-sm font-medium">Menu</span>
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sidebar Drawer (Sliding Left to Right) */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-visibility duration-300 ${
          mobileMenuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-[#0a2c44]/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Sliding Sidebar Panel */}
        <div
          className={`relative w-[85%] max-w-[340px] h-full bg-white shadow-2xl flex flex-col justify-between z-10 transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#d9e3e8] flex items-center justify-between bg-slate-50">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/images/figma/logo.png"
                  alt="JIM Cooling & Heating Services Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-[#0a2c44] leading-tight">
                  JIM Cooling &amp; Heating Services
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-[#0a2c44] hover:text-[#087ca7] hover:bg-slate-200/60 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Navigation Links (Scrollable) */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href) && !link.href.includes("#");

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-[#eaf5fa] text-[#087ca7] font-semibold"
                        : "text-[#0a2c44] hover:bg-slate-100 hover:text-[#087ca7]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 ${
                        isActive ? "text-[#087ca7]" : "text-slate-400"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-5 border-t border-[#d9e3e8] bg-slate-50/80 space-y-3">
            <a
              href="tel:+17132699054"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#087ca7] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#076b91] transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (713) 269-9054</span>
            </a>

            <Link
              href="/contact#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 border border-[#d9e3e8] bg-white text-[#0a2c44] py-2.5 rounded-lg font-semibold text-sm hover:border-[#087ca7] hover:text-[#087ca7] transition-colors"
            >
              <span>Request Service</span>
              <ArrowUpRight className="w-4 h-4 text-[#087ca7]" />
            </Link>

            <div className="text-[11px] text-[#4e6470] text-center pt-1">
              Greater Houston Commercial &amp; Residential
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
