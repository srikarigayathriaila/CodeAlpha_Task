import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { profile } from "./data";

const details = [
  { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { Icon: MapPin, label: "Location", value: profile.location },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Placeholder submit — wire this to an email service or backend.
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent!", { description: "Thanks for reaching out — I'll reply soon." });
    }, 800);
  };

  return (
    <section id="contact" className="bg-gradient-soft px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Let's connect" title="Get In Touch" />
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="space-y-4">
            <p className="text-muted-foreground">
              Have an opportunity, a project idea, or just want to say hi? Drop me a message and I'll
              get back to you as soon as I can.
            </p>
            <ul className="space-y-3">
              {details.map(({ Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href ?? undefined}
                    className="glass flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                        {label}
                      </span>
                      <span className="font-medium">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Location map"
                src="https://www.google.com/maps?q=San+Francisco,CA&output=embed"
                className="h-48 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="jane@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" required placeholder="Let's work together" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required rows={5} placeholder="Your message..." />
              </div>
              <Button type="submit" variant="hero" size="xl" className="w-full" disabled={sending}>
                {sending ? "Sending..." : (<><Send /> Send Message</>)}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}