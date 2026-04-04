import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Shield, Handshake, ArrowRight, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We align our operations with the mission objectives of the agencies and organisations we serve.",
  },
  {
    icon: Shield,
    title: "Compliance & Quality",
    description: "Rigorous adherence to federal, state, and local regulations with continuous quality improvement.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnership",
    description: "Long-term relationships grounded in transparency, accountability, and consistent performance.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-deep py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/60">About Us</p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
              A Trusted Partner for Government & Public Sector Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Delivering integrated facilities and operational support with the reliability, compliance, and professionalism that government clients demand.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Mission</p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
                Enabling Organisations to Focus on Their Core Mission
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  [INSERT YOUR COMPANY NAME] is committed to delivering reliable, efficient, and scalable support services that enable government agencies and commercial organisations to focus on what matters most.
                </p>
                <p>
                  We provide integrated solutions across facilities management, logistics, and operations support — all under one roof. Our approach combines the responsiveness of a focused contractor with the systems, processes, and quality standards of a large-scale operation.
                </p>
                <p>
                  We are built to grow with our clients — from simple cleaning and maintenance contracts to complex, multi-site, multi-service operations.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "End-to-end service delivery under one contract",
                "Government and public sector focus",
                "Compliance-first operational culture",
                "Scalable from single-site to national operations",
                "Continuous quality improvement",
                "Transparent reporting and accountability",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-lg border bg-card p-4">
                  <CheckCircle className="h-5 w-5 shrink-0 text-trust-green" />
                  <span className="text-sm font-medium text-card-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y bg-secondary/40 py-20">
        <div className="container">
          <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">Our Values</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border bg-card p-8 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Standards</p>
            <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Commitment to Quality & Compliance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Quality and compliance are foundational to every service we deliver. Our operations are designed around best practices, industry standards, and regulatory requirements, ensuring that every engagement meets the highest expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We invest in our people through continuous training, leverage proven processes, and maintain the documentation and reporting standards that our clients require.
            </p>
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="border-t bg-secondary/40 py-20">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">Past Performance & Case Studies</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Details of past contracts and performance history will be available here. Contact us for references and case studies.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-6">
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
