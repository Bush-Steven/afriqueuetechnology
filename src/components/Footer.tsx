import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand font-bold">A</div>
            <span className="font-display text-lg font-bold">AfriQueue Technologies</span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Complete technology solutions partner for businesses, hospitals, schools, banks, and governments across Kenya.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-accent">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-accent">Solutions</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li>Software Systems</li>
            <li>IT & CCTV</li>
            <li>Cybersecurity Training</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-accent">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Nairobi, Kenya</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0722 581 557</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@afriqueue.com</li>
            <li className="flex items-center gap-2"><Globe className="h-4 w-4" /> afriqueue.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} AfriQueue Technologies. All rights reserved.
      </div>
    </footer>
  );
}
