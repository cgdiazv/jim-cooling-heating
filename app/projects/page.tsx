import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Featured Projects | JIM Cooling & Heating",
  description: "Browse our portfolio of residential and commercial heating, cooling, and heat pump installations.",
};

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      title: "High-Efficiency Inverter AC Installation",
      category: "Residential Cooling",
      image: "/projects/project01.webp",
      desc: "Upgraded outdated 10-SEER system to 20-SEER variable capacity cooling unit with smart zoning.",
    },
    {
      id: "2",
      title: "Commercial Multi-Split Rooftop Units",
      category: "Commercial HVAC",
      image: "/projects/project02.webp",
      desc: "Complete climate control system for 12,000 sq ft office facility with integrated economizers.",
    },
    {
      id: "3",
      title: "Dual-Fuel Heat Pump & Furnace System",
      category: "Hybrid Heating",
      image: "/projects/project03.webp",
      desc: "Smart hybrid solution switching between electric heat pump and high-efficiency gas furnace.",
    },
    {
      id: "4",
      title: "Ductless Multi-Zone Mini-Split Setup",
      category: "Residential Cooling & Heat",
      image: "/projects/project04.webp",
      desc: "Custom multi-room independent zoning setup for a historic home without existing ductwork.",
    },
    {
      id: "5",
      title: "Precision Air Duct Replacement & Sealing",
      category: "Air Quality & Efficiency",
      image: "/projects/project05.webp",
      desc: "Aeroseal duct sealing and custom metal ductwork fabrication resolving chronic hot/cold spots.",
    },
    {
      id: "6",
      title: "Emergency Winter Furnace Replacement",
      category: "Heating Emergency",
      image: "/projects/project06.webp",
      desc: "Same-day removal of a cracked heat exchanger and installation of a 96% AFUE furnace in sub-zero temps.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#128dd1]">
            Our Workmanship
          </span>
          <h1 className="text-4xl font-extrabold text-[#006397] mt-2 sm:text-5xl">
            Featured HVAC Installations
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Take a look at some of our recent residential and commercial climate control projects completed with precision craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all group"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-[#006397]/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#006397] transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {project.desc}
                </p>
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b51527] hover:text-[#961220]"
                >
                  Request Similar Installation →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
