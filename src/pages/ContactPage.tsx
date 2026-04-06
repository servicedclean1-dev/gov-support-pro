import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, ArrowRight } from "lucide-react";

const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/27115828/u7uljdc/";

const serviceTypes = [
  "Facilities Management",
  "Cleaning Services",
  "Grounds Maintenance",
  "Logistics & Warehousing",
  "Staffing & Workforce",
  "Operations / Admin Support",
  "Multiple Services",
  "Other",
];

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [serviceType, setServiceType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      serviceType,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      submitted_at: new Date().toISOString(),
    };

    try {
      if (!ZAPIER_WEBHOOK_URL) {
        console.warn("Zapier webhook URL not configured");
        toast({
          title: "Configuration Needed",
          description: "The contact form webhook is not yet configured. Please contact us directly at info@servicedcontracting.com.",
          variant: "destructive",
        });
        setSubmitting(false);
        return;
      }

      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(formData),
      });

      toast({
        title: "Message Sent",
        description: "Thank you. Our team will review your enquiry and respond within 1–2 business days.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending form:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again or email us at info@servicedcontracting.com.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-deep py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground/60">Contact</p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Get in touch to discuss your requirements. We'll respond promptly with a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-8 lg:col-span-1">
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground">Contact Information</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reach out directly or use the form to tell us about your requirements.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@servicedcontracting.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">London, United Kingdom</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-secondary/50 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Committed to Compliance and Quality Standards
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  All enquiries are treated with full confidentiality and professionalism.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border bg-card p-6 md:p-8">
                <h2 className="font-heading text-xl font-bold text-card-foreground">
                  Tell Us About Your Requirements
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
                      <Label htmlFor="organization">Organisation / Agency *</Label>
                      <Input id="organization" name="organization" required placeholder="Agency or Company Name" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required placeholder="john@agency.gov" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Area of Interest *</Label>
                    <Select name="serviceType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service category" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your project requirements, scope, timeline, and any specific needs..."
                    />
                  </div>

                  <Button type="submit" size="xl" className="w-full sm:w-auto" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Enquiry"}
                    {!submitting && <ArrowRight className="ml-1 h-5 w-5" />}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
