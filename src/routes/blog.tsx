import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — AfriQueue Technologies" },
      { name: "description", content: "Insights on queue management, cybersecurity, IT, branding and digital marketing for African businesses." },
    ],
  }),
  component: Blog,
});

const posts = [
  { title: "Why Queue Management is the New Customer Experience", excerpt: "How smart queues cut wait times and boost satisfaction.", date: "Jun 2026" },
  { title: "5 Cybersecurity Habits Every Kenyan SME Should Adopt", excerpt: "Practical steps to protect your business from phishing and ransomware.", date: "May 2026" },
  { title: "Choosing the Right CCTV System for Your Business", excerpt: "A buyer's guide to cameras, NVRs, and remote monitoring.", date: "Apr 2026" },
];

function Blog() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Insights & Updates</h1>
          <p className="mt-4 text-primary-foreground/80">Practical guides from our team to yours.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
            <p className="text-xs font-semibold uppercase text-brand">{p.date}</p>
            <h3 className="mt-3 text-lg font-bold text-primary">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">Read more <ArrowRight className="h-3 w-3" /></button>
          </article>
        ))}
      </section>
    </>
  );
}
