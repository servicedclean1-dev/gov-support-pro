import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building2, Truck, Users, HeartPulse, Sparkles, TreePine,
  Wrench, PackageCheck, ClipboardList, ArrowRight, CheckCircle,
} from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const serviceCategories = [
  {
    icon: Building2,
    title: "Facilities Management",
    description: "Comprehensive management of buildings, estates, and infrastructure — ensuring safe, efficient, and well-maintained environments.",
    services: [
      "Janitorial & custodial services",
      "Building maintenance & repairs",
      "HVAC & mechanical systems",
      "Pest control management",
      "Waste management & recycling",
      "Energy management & sustainability",
    ],
  },
  {
    icon: Users,
    title: "Operational Support",
    description: "Skilled personnel, administrative support, and operational coordination tailored to government and public sector needs.",
    services: [
      "Staffing & workforce solutions",
      "Administrative & clerical support",
      "Mailroom & document management",
      "Reception & front desk services",
      "Data entry & records management",
      "Project coordination support",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Distribution",
    description: "Reliable logistics, transport, and supply chain services that keep your operations moving efficiently.",
    services: [
      "Delivery & distribution services",
      "Warehousing & inventory management",
      "Supply chain coordination",
      "Fleet support & transportation",
      "Material handling & storage",
      "Asset tracking & management",
    ],
  },
  {
    icon: HeartPulse,
    title: "Care & Supported Living",
    description: "Expanding our service portfolio into compassionate care and community support for government-sponsored programmes.",
    services: [
      "Personal care assistance",
      "Community support programmes",
      "Facility-based care support",
      "Programme administration",
    ],
    comingSoon: true,
  },
];

const additionalServices = [
  { icon: Sparkles, title: "Cleaning Services", description: "Commercial, public sector, and specialist cleaning across all environments." },
  { icon: TreePine, title: "Grounds Maintenance", description: "Landscaping, grass cutting, and outdoor maintenance for every setting." },
  { icon: Wrench, title: "Reactive Maintenance", description: "Fast, reliable repairs and minor works when you need them most." },
  { icon: PackageCheck, title: "Supply Chain", description: "End-to-end coordination from procurement to delivery." },
  { icon: ClipboardList, title: "Site Management", description: "On-site coordination and management of multi-service operations." },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img src={servicesBg} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-navy-deep/70" />
        </div>
        <div className="container relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/60">What We Do</p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Comprehensive, scalable solutions across facilities management, logistics, and operations — delivered with government-grade reliability and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container space-y-20">
          {serviceCategories.map((cat, i) => (
            <div key={cat.title} className="grid items-start gap-10 md:grid-cols-5">
              <div className="md:col-span-2">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <cat.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  {cat.title}
                  {cat.comingSoon && (
                    <span className="ml-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      Coming Soon
                    </span>
                  )}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{cat.description}</p>
              </div>
              <div className="md:col-span-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  {cat.services.map((svc) => (
                    <div key={svc} className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3">
                      <CheckCircle className="h-4 w-4 shrink-0 text-trust-green" />
                      <span className="text-sm text-card-foreground">{svc}</span>
                    </div>
                  ))}
                </div>
              </div>
              {i < serviceCategories.length - 1 && <div className="col-span-full border-b" />}
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="border-y bg-secondary/40 py-20">
        <div className="container">
          <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
            Additional Capabilities
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Beyond our core service areas, we deliver specialist support across a range of operational needs.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {additionalServices.map((s) => (
              <div key={s.title} className="rounded-xl border bg-card p-5 text-center">
                <s.icon className="mx-auto h-8 w-8 text-primary" />
                <h3 className="mt-3 font-heading text-sm font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Need a Customised Solution?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            We tailor our services to match your exact requirements. Get in touch for a detailed proposal.
          </p>
          <Button asChild size="xl" className="mt-8">
            <Link to="/contact">
              Request a Quote <ArrowRight className="ml-1 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
