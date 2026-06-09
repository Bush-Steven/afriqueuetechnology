import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/afriqueue-logo.jpeg.asset.json";
import cover from "@/assets/afriqueue-cover.jpeg.asset.json";
import svcSoftware from "@/assets/svc-software.jpg";
import svcIt from "@/assets/svc-it.jpg";
import svcCctv from "@/assets/svc-cctv.jpg";
import svcCyber from "@/assets/svc-cyber.jpg";
import svcWeb from "@/assets/svc-web.jpg";
import svcBranding from "@/assets/svc-branding.jpg";
import svcMarketing from "@/assets/svc-marketing.jpg";
import svcQueue from "@/assets/svc-queue.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AfriQueue Technologies — Smart Tech Solutions in Kenya" },
      { name: "description", content: "Software systems, IT infrastructure, cybersecurity, digital marketing, and branding for hospitals, schools, banks, and businesses." },
      { property: "og:title", content: "AfriQueue Technologies" },
      { property: "og:description", content: "Transforming businesses through smart technology solutions across Kenya." },
      { property: "og:image", content: cover.url },
    ],
  }),
  component: Home,
});

type Pin = {
  img: string;
  title: string;
  tag: string;
  desc: string;
  h: string; // tailwind height utility for varied masonry
};

const pins: Pin[] = [
  { img: svcSoftware, title: "Custom Software Systems", tag: "Software", desc: "Hospital, bank, school & government queue and management systems.", h: "h-80" },
  { img: svcQueue, title: "Queue Management", tag: "Flagship", desc: "Streamline service delivery with intelligent queue solutions.", h: "h-72" },
  { img: svcIt, title: "IT Infrastructure", tag: "IT & Networks", desc: "Servers, networking, Wi-Fi deployment and full IT support.", h: "h-64" },
  { img: svcCctv, title: "CCTV & Surveillance", tag: "Security", desc: "Cameras, access control & biometric systems installation.", h: "h-96" },
  { img: svcCyber, title: "Cybersecurity Training", tag: "Awareness", desc: "Empower your staff against phishing & modern cyber threats.", h: "h-72" },
  { img: svcWeb, title: "Web Design & Development", tag: "Web", desc: "Corporate sites, e-commerce stores & landing pages.", h: "h-80" },
  { img: svcBranding, title: "Branding & Creative", tag: "Design", desc: "Logos, profiles, business cards & marketing materials.", h: "h-64" },
  { img: svcMarketing, title: "Digital Marketing", tag: "Growth", desc: "Social media, paid ads & content campaigns that convert.", h: "h-96" },
];

function Home() {
  return (
    <>
      {/* HERO COVER */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6">
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={cover.url}
              alt="AfriQueue Technologies — Smart Queue Management System. Better Service. Shorter Waits. Happier Clients."
              width={1600}
              height={820}
              className="w-full h-auto"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="w-full md:w-3/5 px-5 sm:px-8 md:px-12 lg:px-16 text-primary-foreground">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] sm:text-xs font-semibold backdrop-blur">
                  <Sparkles className="h-3 w-3 text-accent" /> POWERED BY INTELLIGENCE · DRIVEN BY SERVICE
                </span>
                <h1 className="mt-3 sm:mt-5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] drop-shadow-lg">
                  Smart Technology.{" "}
                  <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                    Better Service.
                  </span>{" "}
                  Happier Clients.
                </h1>
                <p className="mt-2 sm:mt-4 hidden sm:block max-w-xl text-sm md:text-lg text-primary-foreground/90">
                  Queue management, software, IT, CCTV, cybersecurity & digital marketing — built for businesses across Kenya.
                </p>
                <div className="mt-4 sm:mt-7 flex flex-wrap gap-2 sm:gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-md bg-gradient-brand px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-base font-semibold text-brand-foreground shadow-elegant transition-transform hover:scale-[1.03]"
                  >
                    Request a Free Demo <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-base font-semibold text-white backdrop-blur hover:bg-white/20"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PINTEREST-STYLE MASONRY BOARD */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider">Our Solutions Board</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary">
            A look at what we deliver
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hover any pin to see what's inside. From queue systems to cybersecurity, we build the technology Africa runs on.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          {pins.map((p) => (
            <article
              key={p.title}
              className={`group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-card-soft transition-all hover:shadow-elegant ${p.h}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-primary-foreground">
                <span className="self-start rounded-full bg-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-primary-foreground/85 line-clamp-2">{p.desc}</p>
              </div>
              <Link
                to="/services"
                className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-primary opacity-0 shadow-elegant transition-opacity group-hover:opacity-100"
              >
                Save
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-hero p-10 md:p-14 text-primary-foreground shadow-elegant text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your operations?</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
            Book a free consultation today and let's design the right solution for you.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-brand px-6 py-3 font-semibold text-brand-foreground shadow-elegant">
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
