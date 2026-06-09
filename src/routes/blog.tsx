import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import blogQueue from "@/assets/blog-queue.jpg";
import blogCyber from "@/assets/blog-cyber.jpg";
import blogCctv from "@/assets/blog-cctv.jpg";
import blogIt from "@/assets/blog-it.jpg";
import blogMarketing from "@/assets/blog-marketing.jpg";
import blogWeb from "@/assets/blog-web.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — AfriQueue Technologies" },
      { name: "description", content: "Insights on queue management, cybersecurity, IT infrastructure, branding and digital marketing for African businesses." },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    image: blogQueue,
    category: "Queue Management",
    date: "Jun 2026",
    readTime: "5 min read",
    title: "Why Queue Management Is the New Customer Experience",
    excerpt: "Long lines cost African businesses more than just time — they cost loyalty. Smart queue systems turn frustrating waits into organised, transparent experiences.",
    body: "In a 2025 survey of Kenyan bank customers, 68% said long queues were their number one complaint. A digital queue management system fixes this by issuing tickets via kiosk, SMS or mobile app, showing live wait times on display screens, and routing customers to the right counter automatically. The result: shorter waits, calmer halls, and staff who can serve more people without burning out. Hospitals using AfriQueue's system have cut average outpatient wait times by nearly half — and patient satisfaction scores have climbed in step.",
  },
  {
    image: blogCyber,
    category: "Cybersecurity",
    date: "May 2026",
    readTime: "6 min read",
    title: "5 Cybersecurity Habits Every Kenyan SME Should Adopt",
    excerpt: "You don't need a million-shilling security budget to protect your business — you need five disciplined habits your whole team follows.",
    body: "1. Turn on two-factor authentication everywhere — email, M-Pesa portals, cloud storage. 2. Train staff to spot phishing: hover over links, verify sender domains, never share OTPs. 3. Use a password manager so every account has a unique strong password. 4. Back up critical data daily to an off-site or cloud location and test restores quarterly. 5. Keep software and antivirus updated automatically. Ransomware attacks on African SMEs jumped 76% last year, and most started with a single careless click. Awareness training pays for itself the first time it prevents one.",
  },
  {
    image: blogCctv,
    category: "Security",
    date: "Apr 2026",
    readTime: "7 min read",
    title: "Choosing the Right CCTV System for Your Business",
    excerpt: "Not all cameras are equal. Here's how to pick a system that actually protects your premises instead of just recording crimes after the fact.",
    body: "Start with coverage: walk your premises and mark every entrance, exit, cash point and blind spot. Choose IP cameras (not analogue) for sharper footage and remote viewing. For outdoor use, insist on IP66-rated weatherproof housings and infrared night vision. Pair cameras with an NVR that stores at least 30 days of footage and supports remote access via mobile app. Add motion alerts so you're notified the moment something moves after hours. Finally, get a professional installer — bad cable runs and poor camera angles waste even the best hardware.",
  },
  {
    image: blogIt,
    category: "IT Infrastructure",
    date: "Mar 2026",
    readTime: "4 min read",
    title: "Building IT Infrastructure That Grows With Your Business",
    excerpt: "The right network setup today saves you from painful, expensive rebuilds tomorrow. Plan for the office you'll have in three years, not the one you have now.",
    body: "Three rules guide every infrastructure project we do. First, structured cabling: invest in Cat6 or better, properly labelled patch panels, and a tidy comms cabinet — it pays back the first time you need to trace a fault. Second, business-grade Wi-Fi: mesh access points with VLANs for staff, guests and IoT devices. Third, redundancy: dual internet links, a UPS on every critical machine, and automated cloud backups. Done right, your IT stops being an emergency line item and becomes a quiet competitive advantage.",
  },
  {
    image: blogMarketing,
    category: "Digital Marketing",
    date: "Feb 2026",
    readTime: "5 min read",
    title: "How African SMEs Can Win With Social Media in 2026",
    excerpt: "You don't need a viral video — you need a consistent, locally relevant content rhythm that turns followers into paying customers.",
    body: "Pick two platforms where your customers actually spend time — for most Kenyan SMEs that's Facebook and Instagram, with TikTok rising fast. Post 3-5 times a week with a mix of educational tips, behind-the-scenes content, customer stories and clear calls to action. Spend even KES 500/day on boosted posts targeting your town and interests — the ROI on hyper-local ads is unmatched. Reply to every comment and DM within 24 hours. Track what works monthly and double down. Consistency beats brilliance.",
  },
  {
    image: blogWeb,
    category: "Web Development",
    date: "Jan 2026",
    readTime: "4 min read",
    title: "Your Website Is Your 24/7 Salesperson — Treat It That Way",
    excerpt: "If a customer can't find your prices, contact details or services in 5 seconds, they're already on a competitor's site.",
    body: "A great business website is fast (loads in under 3 seconds), mobile-first (over 75% of Kenyan traffic is on phones), and conversion-focused: every page has one clear next step — call, WhatsApp, book a demo, or buy now. Include real photos of your team and premises, customer testimonials, and prices wherever possible. Add a live chat or WhatsApp button. Keep your blog and portfolio fresh. And never, ever launch without SSL, SEO basics, and Google Business Profile linked. A website that does these well easily 3x your inbound leads.",
  },
];

function Blog() {
  return (
    <>
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Insights & Updates</h1>
          <p className="mt-4 text-primary-foreground/80">Practical guides from our team to yours — on technology, security, and growth.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p) => (
          <article key={p.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant">
            <div className="aspect-video overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" width={1024} height={576} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-brand/10 px-2.5 py-1 font-semibold text-brand">{p.category}</span>
                <span className="text-muted-foreground">{p.date}</span>
                <span className="inline-flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" /> {p.readTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-primary leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <p className="mt-3 text-sm text-foreground/80 line-clamp-4">{p.body}</p>
              <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand self-start hover:gap-2 transition-all">
                Read more <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
