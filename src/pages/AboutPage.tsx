import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Shield, Handshake, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We align our operations with the mission objectives of the agencies and organizations we serve.",
  },
  {
    icon: Shield,
    title: "Compliance & Quality",
    description: "Rigorous adherence to federal, state, and local regulations with continuous quality improvement.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnership",
    description: "We build long-term relationships grounded in transparency, accountability, and consistent performance.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b bg-secondary/40 py-16">
        <div className="container">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            About Us
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A trusted partner delivering integrated facilities and operational support services to government and commercial clients nationwide.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
          <p>
            [INSERT YOUR COMPANY NAME] is committed to delivering reliable, efficient, and scalable support services that enable government agencies and commercial organizations to focus on their core missions. We provide integrated solutions across facilities management, logistics, and operations support — all under one roof.
          </p>
          <p>
            Our approach combines the responsiveness and dedication of a focused contractor with the systems, processes, and quality standards of a large-scale operation. We are built to grow with our clients.
          </p>
        </div>
      </section>

      <section className="border-y bg-secondary/40 py-16">
        <div className="container">
          <h2 className="font-heading text-center text-2xl font-bold text-foreground">Our Values</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <h2 className="font-heading text-2xl font-bold text-foreground">Commitment to Quality & Compliance</h2>
          <p>
            Quality and compliance are not afterthoughts — they are foundational to every service we deliver. Our operations are designed around best practices, industry standards, and regulatory requirements, ensuring that every engagement meets the highest expectations.
          </p>
          <p>
            We invest in our people through continuous training, leverage proven processes, and maintain the documentation and reporting standards that government clients require.
          </p>
        </div>
      </section>

      {/* Past Performance Placeholder */}
      <section className="border-t bg-secondary/40 py-16">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">Past Performance</h2>
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
