import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const transport = new DefaultChatTransport({ api: "/api/chat" });

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({ transport });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const loading = status === "submitted" || status === "streaming";

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-brand-foreground shadow-elegant transition-transform hover:scale-105"
        aria-label="Open chat"
      >
        {open ? <X /> : <MessageCircle />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[520px] w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
          <div className="bg-gradient-hero p-4 text-primary-foreground">
            <h3 className="font-display font-bold">AfriQueue Assistant</h3>
            <p className="text-xs text-primary-foreground/80">Ask us about our tech solutions</p>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="text-sm text-muted-foreground">
                👋 Hi! I'm here to help. Ask about our queue systems, IT, CCTV, cybersecurity training, websites, or pricing.
              </div>
            )}
            {messages.map((m) => {
              const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
              const isUser = m.role === "user";
              return (
                <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                  {isUser ? (
                    <div className="max-w-[80%] rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground">
                      {text}
                    </div>
                  ) : (
                    <div className="max-w-[85%] whitespace-pre-wrap text-sm text-foreground">{text}</div>
                  )}
                </div>
              );
            })}
            {loading && <div className="text-sm text-muted-foreground italic">Thinking…</div>}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.trim() || loading) return;
              sendMessage({ text: input.trim() });
              setInput("");
            }}
            className="flex gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="grid h-9 w-9 place-items-center rounded-md bg-gradient-brand text-brand-foreground disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
