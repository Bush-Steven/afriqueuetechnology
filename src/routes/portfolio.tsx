import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — AfriQueue Technologies" },
      { name: "description", content: "Selected projects we've delivered for healthcare, finance, education and government clients." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { title: "Hospital Queue Management", client: "County Referral Hospital", category: "Software" },
  { title: "Bank Branch Queue System", client: "Regional SACCO", category: "Software" },
  { title: "School Management Platform", client: "Private Academy", category: "Software" },
  { title: "CCTV & Access Control", client: "Logistics Company", category: "Security" },
  { title: "Corporate Website Redesign", client: "Consulting Firm", category: "Web" },
  { title: "Brand Identity & Collateral", client: "Startup Launch", category: "Branding" },
];

function Portfolio() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Our Work</h1>
          <p className="mt-4 text-primary-foreground/80">A snapshot of solutions we've delivered across industries.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="aspect-video bg-gradient-brand relative">
              <span className="absolute top-3 left-3 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">{p.category}</span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-primary">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
