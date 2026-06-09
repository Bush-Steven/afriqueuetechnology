import { Phone, MessageCircle } from "lucide-react";

const PHONE = "254722581557";
const WA_MESSAGE = encodeURIComponent(
  "Hello AfriQueue! I'd like to know more about your technology solutions.",
);

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${PHONE}?text=${WA_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="relative h-7 w-7" fill="currentColor" strokeWidth={0} />
        <span className="pointer-events-none absolute left-16 whitespace-nowrap rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground opacity-0 shadow-elegant transition-opacity group-hover:opacity-100">
          WhatsApp us
        </span>
      </a>
      <a
        href={`tel:+${PHONE}`}
        aria-label="Call AfriQueue"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground shadow-elegant transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
        <span className="pointer-events-none absolute left-16 whitespace-nowrap rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground opacity-0 shadow-elegant transition-opacity group-hover:opacity-100">
          Call 0722 581 557
        </span>
      </a>
    </div>
  );
}
