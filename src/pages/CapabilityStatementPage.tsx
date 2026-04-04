import { Button } from "@/components/ui/button";
import { FileDown, CheckCircle } from "lucide-react";
import sclLogo from "@/assets/scl-logo.png";

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


            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">Contact Information</h2>
              <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Serviced Contracting Ltd (SCL)</strong></p>
                <p>London, United Kingdom</p>
                
                <p>Email: info@yourcompany.com</p>
                <p>​</p>
              </div>
            </div>

            {/* Previous Work / Portfolio */}
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">Our Previous Work</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A showcase of projects we have delivered overseas. Photos and videos coming soon.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/30"
                  >
                    <span className="text-xs text-muted-foreground/50">Coming Soon</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download */}
            <div className="rounded-xl border bg-secondary/50 p-8 text-center">
              <h3 className="font-heading text-lg font-semibold text-foreground">Download Capability Statement</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get a PDF copy of our full capability statement for your records.
              </p>
              <Button size="lg" className="mt-5" asChild>
                <a href="/capability-statement.pdf?v=20260404-clean4" download="Capability-Statement.pdf">
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
