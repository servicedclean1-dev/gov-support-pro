import { Button } from "@/components/ui/button";
import { FileDown, CheckCircle, Play } from "lucide-react";
import { useState } from "react";

const portfolioItems = [
  { type: "image" as const, src: "/portfolio/photo1.jpg", alt: "Road construction and marking project" },
  { type: "video" as const, src: "/portfolio/video1.mp4", alt: "Project video 1" },
  { type: "image" as const, src: "/portfolio/photo2.jpg", alt: "Completed road with lane markings" },
  { type: "video" as const, src: "/portfolio/video2.mp4", alt: "Project video 2" },
  { type: "video" as const, src: "/portfolio/video3.mp4", alt: "Project video 3" },
  { type: "video" as const, src: "/portfolio/video4.mp4", alt: "Project video 4" },
];

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
                <p>Email: info@servicedcontracting.com</p>
              </div>
            </div>

            {/* Previous Work / Portfolio */}
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">Our Previous Work</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A showcase of projects we have delivered overseas.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {portfolioItems.map((item, i) => (
                  <div key={i} className="overflow-hidden rounded-lg border bg-card">
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="aspect-video w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <video
                        src={item.src}
                        controls
                        preload="metadata"
                        className="aspect-video w-full object-cover"
                      />
                    )}
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
