import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are the AfriQueue Technologies virtual assistant. AfriQueue is a Kenyan technology solutions provider based in Nairobi.

Services:
- Software Systems: Hospital/Bank Queue Management, School Management, Government Service Management, CRM, Custom Business Apps, Telemedicine
- IT Infrastructure: Computer supply/installation, networks, servers, printers, Wi-Fi, maintenance
- CCTV & Security: Cameras, remote monitoring, access control, biometrics
- Cybersecurity Awareness Training: Phishing, password, data protection, policies
- Website Design & Development
- Branding & Creative Design (logos, profiles, flyers)
- Digital Marketing (Social media, FB/IG/LinkedIn ads)

Industries: Healthcare, Banks, Government, Schools, SACCOs, NGOs, SMEs.

Contact: 📞 0722 581 557 · ✉️ support@afriqueue.com · 📍 Nairobi, Kenya · 🌐 afriqueue.com

Be friendly, concise, and helpful. Recommend a free consultation or demo for serious inquiries and share the contact details.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) return new Response("Messages required", { status: 400 });

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
