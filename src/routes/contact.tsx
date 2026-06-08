import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AfriQueue Technologies" },
      { name: "description", content: "Get in touch with AfriQueue Technologies for a free consultation or product demo." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Let's talk</h1>
          <p className="mt-4 text-primary-foreground/80">Tell us about your project — we usually reply within one business day.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
          <ul className="space-y-4 text-foreground">
            <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-brand-foreground"><MapPin className="h-5 w-5" /></span> Nairobi, Kenya</li>
            <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-brand-foreground"><Phone className="h-5 w-5" /></span> 0722 581 557</li>
            <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-brand-foreground"><Mail className="h-5 w-5" /></span> support@afriqueue.com</li>
            <li className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-brand-foreground"><Globe className="h-5 w-5" /></span> afriqueue.com</li>
          </ul>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-card p-6 shadow-card-soft space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            <input required type="email" placeholder="Email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <input placeholder="Company / Organization" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring">
            <option>Software Systems</option>
            <option>IT & CCTV</option>
            <option>Cybersecurity Training</option>
            <option>Website Design</option>
            <option>Branding</option>
            <option>Digital Marketing</option>
          </select>
          <textarea required rows={4} placeholder="Tell us about your project" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
          <button type="submit" className="w-full rounded-md bg-gradient-brand px-4 py-3 font-semibold text-brand-foreground shadow-elegant">
            {sent ? "Thanks! We'll be in touch." : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
}
