import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building2, Truck, Users, Sparkles, TreePine,
  Wrench, PackageCheck, ClipboardList, ArrowRight, CheckCircle,
} from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const serviceCategories = [
  {
    icon: Building2,
    title: "Facilities Management",
    description: "We look after your buildings and spaces — keeping everything clean, safe, and running smoothly so you don't have to worry about it.",
    services: [
      "Cleaning Services",
      "Building repairs & upkeep",
      "Pest control",
      "Waste removal & recycling",
      "Energy saving & green solutions",
    ],
  },
  {
    icon: Users,
    title: "Operational Support",
    description: "We provide the people and support you need — from office staff and receptionists to project helpers and data entry teams.",
    services: [
      "Staff & team solutions",
      "Office & admin help",
      "Mail & document handling",
      "Reception & front desk cover",
      "Data entry & record keeping",
      "Project support & coordination",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Distribution",
    description: "We move, store, and deliver what you need — on time and hassle-free, so your operations keep running without interruption.",
    services: [
      "Deliveries & distribution",
      "Storage & stock management",
      "Supply chain coordination",
      "Transport & fleet support",
      "Material handling & storage",
      "Tracking & managing assets",
    ],
  },
];

const additionalServices = [
  { icon: Sparkles, title: "Cleaning Services", description: "Professional cleaning for offices, public buildings, and specialist spaces." },
  { icon: TreePine, title: "Grounds Maintenance", description: "Lawn care, landscaping, and keeping outdoor areas tidy and presentable." },
  { icon: Wrench, title: "Reactive Maintenance", description: "Quick fixes and repairs when something breaks or needs urgent attention." },
  { icon: PackageCheck, title: "Supply Chain", description: "Managing the full process from ordering supplies to getting them delivered." },
  { icon: ClipboardList, title: "Site Management", description: "Running and coordinating day-to-day operations on your site." },
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
              We handle buildings, deliveries, and day-to-day operations — so you can focus on what matters most. Reliable, flexible, and built for the public sector.
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
            What Else We Can Do
          </h2>
           <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            On top of our main services, here are some extra things we can help with.
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
            Need Something Specific?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            We can put together a package that fits exactly what you need. Just get in touch and we'll work it out together.
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
