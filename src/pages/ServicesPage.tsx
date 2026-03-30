import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Truck, Users, HeartPulse, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Building2,
    title: "Facilities Services",
    description: "End-to-end facilities management ensuring clean, safe, and well-maintained environments for government and commercial properties.",
    services: [
      "Janitorial & Custodial Services",
      "Landscaping & Grounds Maintenance",
      "Building Maintenance & Repairs",
      "HVAC & Mechanical Systems Support",
      "Pest Control Management",
      "Waste Management & Recycling",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Support Services",
    description: "Mission-critical logistics solutions that keep your operations moving efficiently and on schedule.",
    services: [
      "Delivery & Distribution Services",
      "Warehousing & Inventory Management",
      "Supply Chain Coordination",
      "Fleet Support & Transportation",
      "Material Handling & Storage",
      "Asset Tracking & Management",
    ],
  },
  {
    icon: Users,
    title: "Operations Support",
    description: "Skilled personnel and administrative support that integrates seamlessly with your team and processes.",
    services: [
      "Staffing & Workforce Solutions",
      "Administrative & Clerical Support",
      "Mailroom & Document Management",
      "Reception & Front Desk Services",
      "Data Entry & Records Management",
      "Project Coordination Support",
    ],
  },
  {
    icon: HeartPulse,
    title: "Care & Support Services (Coming Soon)",
    description: "Expanding our service portfolio to include compassionate care and personal support services for government-sponsored programs.",
    services: [
      "Personal Care Assistance",
      "Community Support Programs",
      "Facility-Based Care Support",
      "Program Administration",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="border-b bg-secondary/40 py-16">
        <div className="container">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Comprehensive, scalable solutions across facilities management, logistics, and operations — delivered with government-grade reliability.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="space-y-16">
          {categories.map((cat, i) => (
            <div key={cat.title} className="grid items-start gap-8 md:grid-cols-3">
              <div className="md:col-span-1">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <cat.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">{cat.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{cat.description}</p>
              </div>
              <div className="md:col-span-2">
                <div className="grid gap-3 sm:grid-cols-2">
                  {cat.services.map((svc) => (
                    <div key={svc} className="rounded-md border bg-card px-4 py-3 text-sm text-card-foreground">
                      {svc}
                    </div>
                  ))}
                </div>
              </div>
              {i < categories.length - 1 && <div className="col-span-full border-b" />}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-secondary/40 py-16 text-center">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Need a Customized Solution?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
          We tailor our services to match your requirements. Contact us for a detailed proposal.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link to="/contact">
            Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
