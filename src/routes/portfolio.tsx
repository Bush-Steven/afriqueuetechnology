import { createFileRoute } from "@tanstack/react-router";
import projHospital from "@/assets/proj-hospital.jpg";
import projBank from "@/assets/proj-bank.jpg";
import projSchool from "@/assets/proj-school.jpg";
import projCctv from "@/assets/proj-cctv.jpg";
import projWeb from "@/assets/proj-web.jpg";
import projBrand from "@/assets/proj-brand.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — AfriQueue Technologies" },
      { name: "description", content: "Selected projects we've delivered for healthcare, finance, education and government clients across Kenya." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "Hospital Queue Management System",
    client: "County Referral Hospital",
    category: "Software",
    image: projHospital,
    summary: "Digital ticketing and live display screens reduced average patient wait time by 47% across outpatient departments.",
  },
  {
    title: "Bank Branch Queue System",
    client: "Regional SACCO",
    category: "Software",
    image: projBank,
    summary: "Multi-branch queue platform with SMS alerts and teller performance analytics for 12 branches countrywide.",
  },
  {
    title: "School Management Platform",
    client: "Private Academy",
    category: "Software",
    image: projSchool,
    summary: "Unified portal for fees, attendance, results and parent communication serving 1,200+ learners.",
  },
  {
    title: "CCTV & Access Control",
    client: "Logistics Company",
    category: "Security",
    image: projCctv,
    summary: "32-camera IP surveillance with biometric access control and 24/7 remote monitoring dashboard.",
  },
  {
    title: "Corporate Website Redesign",
    client: "Consulting Firm",
    category: "Web",
    image: projWeb,
    summary: "Rebranded responsive website with CMS, lead capture forms and SEO optimisation — 3x more enquiries.",
  },
  {
    title: "Brand Identity & Collateral",
    client: "Startup Launch",
    category: "Branding",
    image: projBrand,
    summary: "Full identity system: logo, stationery, social templates and a 24-page company profile.",
  },
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
            <div className="aspect-video overflow-hidden relative">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={576}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">{p.category}</span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-primary">{p.title}</h3>
              <p className="mt-1 text-sm font-medium text-brand">{p.client}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
