import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Building2, Truck, Users, Sparkles, TreePine,
  Wrench, PackageCheck, ClipboardList, ShieldCheck, CheckCircle,
  ArrowRight, TrendingUp, Landmark, Hospital, Building, Globe,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const serviceAreas = [
  { icon: Sparkles, title: "Cleaning Services", description: "Commercial, public sector, and specialist cleaning to the highest standards." },
  { icon: TreePine, title: "Grounds Maintenance", description: "Grass cutting, landscaping, and outdoor upkeep for all environments." },
  { icon: Wrench, title: "Reactive Maintenance", description: "Repairs, upkeep, and minor works delivered quickly and reliably." },
  { icon: Truck, title: "Logistics Support", description: "Transport, distribution, and site coordination services." },
  { icon: ClipboardList, title: "Operational Support", description: "Staffing, site management, and administrative support." },
  { icon: Building2, title: "Facilities Management", description: "Integrated building and site services under one roof." },
];

const coreServices = [
  {
    icon: Building2,
    title: "Facilities Management",
    description: "End-to-end management of buildings and estates — from day-to-day maintenance to long-term asset strategies.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Operational Support",
    description: "Skilled workforce solutions, administrative services, and operational coordination tailored to public sector requirements.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Truck,
    title: "Logistics & Distribution",
    description: "Reliable transport, warehousing, inventory management, and supply chain coordination for mission-critical operations.",
    color: "bg-trust-green/20 text-trust-green",
  },
];

const whyChooseUs = [
  { title: "Integrated Delivery", description: "All services under one contract — reducing complexity, improving accountability." },
  { title: "Cost Efficiency", description: "Consolidation of services drives measurable savings without compromising quality." },
  { title: "Compliance Expertise", description: "Built-in regulatory compliance and quality assurance across every service line." },
  { title: "Scalable Workforce", description: "From single-site to multi-facility operations, we scale with your needs." },
  { title: "Proven Track Record", description: "Trusted by government and public sector clients for consistent, reliable delivery." },
  { title: "Technology-Enabled", description: "Modern systems for reporting, asset tracking, and real-time operational oversight." },
];

const industries = [
  { icon: Landmark, label: "Government Agencies" },
  { icon: Building, label: "Local Authorities" },
  { icon: Globe, label: "Public Sector Organisations" },
  { icon: Hospital, label: "Healthcare & Community" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(215 45% 12% / 0.85) 0%, hsl(207 60% 42% / 0.7) 100%)" }} />
        </div>
        <div className="container relative z-10 py-28 md:py-40">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Government Services, Delivered Seamlessly
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
              Reliable, scalable, multi-service capability — from facilities management and logistics to operational support. One trusted partner for all your needs.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="border-b bg-card py-20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Who We Are</p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                A government services company managing multiple service areas under one roof.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We deliver end-to-end services with the efficiency of a single provider and the depth of a specialist. Our focus is the government and public sector — where reliability, compliance, and accountability are non-negotiable.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                By consolidating facilities management, logistics, and operational support under one contract, we eliminate vendor complexity and deliver consistent quality across every service line.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Core facilities & support services",
                "Scalable, multi-site operations",
                "Trusted government delivery partner",
                "Single-provider efficiency",
                "Compliance-first approach",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-lg border bg-background p-4">
                  <CheckCircle className="h-5 w-5 shrink-0 text-trust-green" />
                  <span className="font-medium text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide - Grid */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Capabilities</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Services We Provide
            </h2>
            <p className="mt-4 text-muted-foreground">
              A clear overview of the work we deliver across multiple service areas — from cleaning and grounds maintenance through to full facilities management.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services - Detailed */}
      <section className="border-y bg-secondary/40 py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Core Service Areas</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Comprehensive Solutions Across Every Need
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {coreServices.map((s) => (
              <div key={s.title} className="flex gap-5 rounded-xl border bg-card p-6">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ${s.color}`}>
                  <s.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-card-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  <Link to="/services" className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why Choose Us</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Built for Government. Designed for Scale.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We operate with the discipline, transparency, and accountability that government clients demand.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-xl border bg-card p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-heading text-base font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-y bg-navy-deep py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/60">Industries We Serve</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-primary-foreground md:text-3xl">
              Industries We Serve
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <div key={ind.label} className="flex flex-col items-center rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center">
                <ind.icon className="h-10 w-10 text-accent" />
                <span className="mt-4 font-heading text-base font-semibold text-primary-foreground">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            {[
              { stat: "100+", label: "Facilities Managed" },
              { stat: "500+", label: "Team Members" },
              { stat: "99%", label: "Client Retention" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-4xl font-extrabold text-primary">{s.stat}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Whether you need a single service or a fully integrated solution, get in touch to explore how we can support your operations.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/capability-statement">View Capability Statement</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
