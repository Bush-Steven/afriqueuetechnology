import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Target, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AfriQueue Technologies" },
      { name: "description", content: "Learn about AfriQueue Technologies — Kenya's complete technology solutions partner serving healthcare, finance, education and government." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About AfriQueue Technologies</h1>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We're a Nairobi-based technology company helping African organizations modernize operations, secure their data, and grow online.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-primary">Our Story</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            AfriQueue Technologies was founded to solve real operational challenges faced by African institutions — long queues, manual records, fragmented systems, and limited IT support. Today we deliver a full stack of services, from queue management software to cybersecurity training, branding, and digital marketing.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            To empower organizations across Kenya with reliable, affordable, and secure technology that transforms how they serve their customers and run their operations.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Target, t: "Purpose-built", d: "Solutions tailored to your workflow" },
            { icon: Heart, t: "People-first", d: "Designed for real users in real contexts" },
            { icon: Award, t: "Quality", d: "Robust, secure, and well-supported" },
            { icon: Users, t: "Partnership", d: "We grow with our clients" },
          ].map((v) => {
            const I = v.icon;
            return (
              <div key={v.t} className="rounded-2xl bg-card p-6 shadow-card-soft text-center">
                <I className="mx-auto h-8 w-8 text-brand" />
                <h3 className="mt-4 font-bold text-primary">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
