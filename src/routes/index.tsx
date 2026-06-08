import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { services, industries } from "@/lib/services-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AfriQueue Technologies — Smart Tech Solutions in Kenya" },
      { name: "description", content: "Software systems, IT infrastructure, cybersecurity, digital marketing, and branding for hospitals, schools, banks, and businesses." },
      { property: "og:title", content: "AfriQueue Technologies" },
      { property: "og:description", content: "Transforming businesses through smart technology solutions across Kenya." },
    ],
  }),
  component: Home,
});

const whyUs = [
  "Professional Support",
  "Affordable Solutions",
  "Custom-Built Systems",
  "Secure & Reliable Technology",
  "Local Expertise",
  "End-to-End Implementation",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <img src={heroImg} alt="" width={1536} height={1024} className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3 w-3 text-accent" /> Kenya's complete tech partner
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
              Transforming Businesses Through <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">Smart Technology Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl">
              Software systems, IT infrastructure, cybersecurity awareness, digital marketing, and creative branding for hospitals, schools, banks, governments and businesses across Kenya.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-6 py-3 font-semibold text-brand-foreground shadow-elegant transition-transform hover:scale-[1.02]">
                Request a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 font-semibold backdrop-blur hover:bg-white/10">
                Get a Free Consultation
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <iframe
              src="https://assets.pinterest.com/ext/embed.html?id=844493676096717"
              height="500"
              width="360"
              frameBorder="0"
              scrolling="no"
              className="rounded-2xl shadow-elegant"
              title="Inspiration board"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">What we do</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary">Services that move your business forward</h2>
          <p className="mt-4 text-muted-foreground">From queue systems to cybersecurity, we deliver end-to-end technology that's built for African organizations.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.title} className="group rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-brand text-brand-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.items.slice(0, 4).map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent" /> {i}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">Industries we serve</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary">Trusted across sectors</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((i) => (
              <span key={i} className="rounded-full bg-card border border-border px-5 py-2 text-sm font-medium text-foreground shadow-card-soft">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">Why choose us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary">A technology partner you can rely on</h2>
          <p className="mt-4 text-muted-foreground">We combine local expertise with industry-grade engineering to deliver solutions that just work — securely, affordably, and at scale.</p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {whyUs.map((w) => (
            <li key={w} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card-soft">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-foreground">{w}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-hero p-10 md:p-14 text-primary-foreground shadow-elegant text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your operations?</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Book a free consultation today and let's design the right solution for you.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-brand px-6 py-3 font-semibold text-brand-foreground shadow-elegant">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
