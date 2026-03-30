import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-navy-deep text-primary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-lg font-bold">[INSERT YOUR COMPANY NAME]</h3>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Integrated Facilities &amp; Operational Support Services for Government and Commercial Clients.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { to: "/services", label: "Services" },
                { to: "/about", label: "About Us" },
                { to: "/capability-statement", label: "Capability Statement" },
                { to: "/contact", label: "Request a Quote" },
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
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
              <li>info@yourcompany.com</li>
              <li>(555) 000-0000</li>
              <li>Washington, D.C. Metro Area</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} [INSERT YOUR COMPANY NAME]. All rights reserved. &nbsp;|&nbsp; Committed to Compliance and Quality Standards
        </div>
      </div>
    </footer>
  );
}
