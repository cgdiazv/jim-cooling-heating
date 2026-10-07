import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const services = [
    { name: "HVAC Servicing & Repair", href: "/services#servicing" },
    { name: "HVAC Installation & Replacement", href: "/services#installation" },
    { name: "Preventative Maintenance", href: "/services#maintenance" },
    { name: "Commercial & Residential HVAC", href: "/services" },
    { name: "24/7 Emergency HVAC Service", href: "/contact#quote" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact & Free Quote", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-[#002f48] text-white pt-16 pb-8 border-t border-[#006397]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block p-1 bg-white/95 rounded-xl shadow-md">
              <Image
                src="/logo.webp"
                alt="JIM Cooling & Heating Logo"
                width={150}
                height={92}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-sky-100/80 leading-relaxed max-w-sm">
              Since 2006, JIM Cooling & Heating has been Greater Houston’s trusted partner for top-notch residential and commercial HVAC solutions, emergency repairs, and preventative maintenance.
            </p>

            <div className="space-y-2 pt-1 text-xs text-sky-100/90">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <ShieldCheck className="h-4 w-4 text-[#128dd1]" />
                <span className="font-semibold">Licensed, Bonded & Insured</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#128dd1]/40 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-sky-100/80">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <ArrowRight className="h-3 w-3 text-[#128dd1]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: HVAC Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#128dd1]/40 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-sky-100/80">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <ArrowRight className="h-3 w-3 text-[#128dd1]" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#128dd1]/40 pb-2">
              Contact & Dispatch
            </h3>
            <ul className="space-y-3 text-sm text-sky-100/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#128dd1] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-sky-200/70 uppercase font-semibold">24/7 Direct Line</div>
                  <a
                    href="tel:+17132699054"
                    className="text-base font-bold text-white hover:text-[#128dd1] transition-colors"
                  >
                    +1 (713) 269-9054
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#128dd1] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-sky-200/70 uppercase font-semibold">Email Inquiries</div>
                  <a
                    href="mailto:hvac@jimcoolingandheating.com"
                    className="text-sm text-white hover:text-[#128dd1] transition-colors"
                  >
                    hvac@jimcoolingandheating.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-[#128dd1] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-xs text-sky-200/70 uppercase font-semibold">Working Hours</div>
                  <span className="text-xs text-white">Mon - Sat: 7:00 AM – 8:00 PM</span>
                  <div className="text-xs text-[#b51527] font-bold mt-0.5">Emergency Dispatch: 24/7</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#128dd1] flex-shrink-0 mt-1" />
                <span className="text-xs text-sky-100/80">
                  Serving Houston, TX & Surrounding Regional Counties
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Very Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-200/70">
          {/* Left: Copyright */}
          <div>
            © {currentYear} JIM Cooling & Heating. All rights reserved.
          </div>

          {/* Right: Indeva Websites link opening in new tab */}
          <div className="flex items-center gap-1.5">
            <span>Powered by</span>
            <a
              href="https://indevasa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-[#128dd1] inline-flex items-center gap-1 transition-colors underline-offset-4 hover:underline"
            >
              <span>Indeva Websites</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
