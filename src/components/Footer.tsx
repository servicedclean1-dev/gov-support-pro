import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-navy-deep text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-heading text-lg font-bold">SCL</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/70">
              A contracting company delivering facilities management, logistics, and operational support across multiple sector.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { to: "/services", label: "Services" },
                { to: "/about", label: "About Us" },
                { to: "/capability-statement", label: "Capability Statement" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
              <li>info@yourcompany.com</li>
              
              <li>London, United Kingdom</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Serviced Contracting Ltd. All rights reserved. &nbsp;|&nbsp; Committed to Compliance and Quality Standards
        </div>
      </div>
    </footer>
  );
}
