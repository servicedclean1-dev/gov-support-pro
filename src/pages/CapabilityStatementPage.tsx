import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function CapabilityStatementPage() {
  return (
    <div>
      <section className="border-b bg-secondary/40 py-16">
        <div className="container">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Capability Statement
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A concise overview of our qualifications, competencies, and capacity to deliver.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Core Competencies */}
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">Core Competencies</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Facilities Management & Maintenance",
                "Janitorial & Custodial Services",
                "Logistics & Warehousing",
                "Staffing & Workforce Solutions",
                "Operations & Administrative Support",
                "Supply Chain & Inventory Management",
                "Quality Assurance & Compliance",
                "Program & Project Coordination",
              ].map((item) => (
                <li key={item} className="rounded-md border bg-card px-4 py-3 text-sm text-card-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Differentiators */}
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">Differentiators</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong className="text-foreground">Integrated Service Model:</strong> Multiple service lines under one contract, reducing vendor complexity and improving accountability.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong className="text-foreground">Scalable Operations:</strong> Structured to grow from single-site to multi-facility engagements without sacrificing quality.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong className="text-foreground">Compliance-First Approach:</strong> Built-in quality assurance and regulatory compliance across all operations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span><strong className="text-foreground">Responsive & Reliable:</strong> Dedicated account management and rapid mobilization capabilities.</span>
              </li>
            </ul>
          </div>

          {/* NAICS Codes */}
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">NAICS Codes</h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                { code: "561210", label: "Facilities Support Services" },
                { code: "561720", label: "Janitorial Services" },
                { code: "561730", label: "Landscaping Services" },
                { code: "493110", label: "General Warehousing & Storage" },
                { code: "561320", label: "Temporary Staffing Services" },
                { code: "561110", label: "Office Administrative Services" },
              ].map((n) => (
                <div key={n.code} className="rounded-md border bg-card px-4 py-3">
                  <span className="text-sm font-semibold text-primary">{n.code}</span>
                  <span className="ml-2 text-sm text-muted-foreground">— {n.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">Contact Information</h2>
            <div className="mt-4 space-y-1 text-sm text-muted-foreground">
              <p><strong className="text-foreground">[INSERT YOUR COMPANY NAME]</strong></p>
              <p>Washington, D.C. Metro Area</p>
              <p>Phone: (555) 000-0000</p>
              <p>Email: info@yourcompany.com</p>
              <p>Website: www.yourcompany.com</p>
            </div>
          </div>

          {/* Download */}
          <div className="rounded-lg border bg-secondary/50 p-6 text-center">
            <h3 className="font-heading text-lg font-semibold text-foreground">Download Capability Statement</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Get a PDF copy of our full capability statement for your records.
            </p>
            <Button size="lg" className="mt-4" disabled>
              <FileDown className="mr-2 h-5 w-5" /> Download PDF (Coming Soon)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
