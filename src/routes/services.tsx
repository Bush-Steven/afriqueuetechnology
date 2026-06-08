import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AfriQueue Technologies" },
      { name: "description", content: "Software systems, IT infrastructure, CCTV, cybersecurity training, websites, branding and digital marketing." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
            End-to-end technology solutions delivered by a single, accountable team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 space-y-10">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <article key={s.title} className="rounded-2xl border border-border bg-card p-8 shadow-card-soft grid md:grid-cols-[auto_1fr] gap-6">
              <div className="grid h-16 w-16 place-items-center rounded-xl bg-gradient-brand text-brand-foreground">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">{s.title}</h2>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="h-4 w-4 text-accent" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
