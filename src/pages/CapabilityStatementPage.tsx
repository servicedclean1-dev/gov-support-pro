import { Button } from "@/components/ui/button";
import { FileDown, CheckCircle } from "lucide-react";

export default function CapabilityStatementPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-deep py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/60">Overview</p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
              Capability Statement
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              A concise overview of our qualifications, competencies, and capacity to deliver.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-14">
            {/* Core Competencies */}
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">Core Competencies</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Facilities Management & Maintenance",
                  "Cleaning Services",
                  "Logistics & Warehousing",
                  "Staffing & Workforce Solutions",
                  "Operations & Administrative Support",
                  "Supply Chain & Inventory Management",
                  "Quality Assurance & Compliance",
                  "Programme & Project Coordination",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3">
                    <CheckCircle className="h-4 w-4 shrink-0 text-trust-green" />
                    <span className="text-sm text-card-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiators */}
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">Differentiators</h2>
              <ul className="mt-5 space-y-4 text-muted-foreground">
                {[
                  { title: "All-in-One Service", desc: "We handle everything under one contract, so you only deal with one team instead of many." },
                  { title: "We Grow With You", desc: "Whether you have one location or many, we can scale up without dropping the ball." },
                  { title: "Rules & Standards Built In", desc: "We make sure everything we do meets the required rules and quality standards from day one." },
                  { title: "Fast & Dependable", desc: "You get a dedicated point of contact and we can get started quickly when you need us." },
                ].map((d) => (
                  <li key={d.title} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span><strong className="text-foreground">{d.title}:</strong> {d.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">Contact Information</h2>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <p><strong className="text-foreground">[INSERT YOUR COMPANY NAME]</strong></p>
                <p>London, United Kingdom</p>
                
                <p>Email: info@yourcompany.com</p>
                <p>Website: www.yourcompany.com</p>
              </div>
            </div>

            {/* Download */}
            <div className="rounded-xl border bg-secondary/50 p-8 text-center">
              <h3 className="font-heading text-lg font-semibold text-foreground">Download Capability Statement</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get a PDF copy of our full capability statement for your records.
              </p>
              <Button size="lg" className="mt-5" asChild>
                <a href="/capability-statement.pdf" download="Capability-Statement.pdf">
                  <FileDown className="mr-2 h-5 w-5" /> Download PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
