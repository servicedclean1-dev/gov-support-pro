import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Truck, Users, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Facilities Management",
    description: "Comprehensive janitorial, landscaping, and building maintenance services for government and commercial facilities.",
  },
  {
    icon: Truck,
    title: "Logistics & Support",
    description: "Reliable delivery, warehousing, and inventory management services to support mission-critical operations.",
  },
  {
    icon: Users,
    title: "Operations Support",
    description: "Professional staffing, administrative support, and operational solutions that scale with your requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Quality",
    description: "Rigorous quality assurance and regulatory compliance woven into every service we deliver.",
  },
];

const trustPoints = [
  "Government-Ready Operations",
  "Scalable Multi-Service Capability",
  "Rigorous Quality Standards",
  "Reliable & Responsive Teams",
  "Compliance-First Approach",
  "Proven Operational Processes",
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container relative z-10 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
              Integrated Facilities &amp; Operational Support Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
              Reliable, scalable, and government-ready. We deliver comprehensive facilities management, logistics, and operations support to federal, state, and commercial clients.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Request a Quote <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      </section>

      {/* Services Overview */}
      <section className="container py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            Multi-Service Capabilities
          </h2>
          <p className="mt-3 text-muted-foreground">
            One trusted partner for all your facilities and operational needs.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-lg border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              Explore All Services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Trust / Why Choose Us */}
      <section className="border-y bg-secondary/50 py-20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                Why Government Agencies Trust Us
              </h2>
              <p className="mt-4 text-muted-foreground">
                We operate with the discipline, transparency, and accountability that government clients demand. Our integrated approach means fewer vendors, streamlined communication, and consistent quality across every service line.
              </p>
              <Button asChild className="mt-6" size="lg">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-2 rounded-md bg-card p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-trust-green" />
                  <span className="text-sm font-medium text-card-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 text-center">
        <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Whether you need a single service or a full-spectrum solution, we're here to support your mission. Request a quote today.
        </p>
        <Button asChild size="xl" className="mt-8">
          <Link to="/contact">Request Government Service Quote</Link>
        </Button>
      </section>
    </div>
  );
}
