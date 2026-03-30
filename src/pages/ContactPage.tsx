import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const serviceTypes = [
  "Facilities Management",
  "Janitorial / Custodial",
  "Landscaping & Grounds",
  "Logistics & Warehousing",
  "Staffing & Workforce",
  "Operations / Admin Support",
  "Multiple Services",
  "Other",
];

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Quote Request Submitted",
        description: "Thank you. Our team will review your request and respond within 1–2 business days.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div>
      <section className="border-b bg-secondary/40 py-16">
        <div className="container">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Ready to discuss your requirements? Submit a quote request and our team will respond promptly.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-1">
            <h2 className="font-heading text-xl font-bold text-foreground">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">info@yourcompany.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">(555) 000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Washington, D.C. Metro Area</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-secondary/50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Committed to Compliance and Quality Standards
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card p-6 md:p-8">
              <h2 className="font-heading text-xl font-bold text-card-foreground">
                Request Government Service Quote
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                All fields marked with * are required.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" required placeholder="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization / Agency *</Label>
                    <Input id="organization" name="organization" required placeholder="Agency or Company Name" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required placeholder="john@agency.gov" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="(555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Type of Service Needed *</Label>
                  <Select name="serviceType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service category" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    placeholder="Describe your project requirements, scope, and any specific needs..."
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input id="location" name="location" required placeholder="City, State or Facility Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Timeline *</Label>
                    <Input id="timeline" name="timeline" required placeholder="e.g., Q2 2026, Immediate" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range (Optional)</Label>
                  <Input id="budget" name="budget" placeholder="e.g., $50,000 – $100,000" />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
                  {submitting ? "Submitting..." : "Request Government Service Quote"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
