"use client";

import { useState, useRef, useEffect } from "react";

type Role = "user" | "assistant";
type Message = { role: Role; content: string };

const SUGGESTIONS = [
  "What projects has Tatiana built?",
  "What are her technical skills?",
  "Is she available for work?",
  "Tell me about her background",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim() || streaming) return;
    const userMessage: Message = { role: "user", content: text.trim() };
    const next = [...messages, userMessage];
    setMessages(next);
    setInput("");
    setStreaming(true);
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok || !res.body) throw new Error("failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      while (!done) {
        const { value, done: d } = await reader.read();
        done = d;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1] = { role: "assistant", content: updated[updated.length - 1].content + chunk };
            return updated;
          });
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: "Sorry, something went wrong. Please try again." };
        return updated;
      });
    } finally {
      setStreaming(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with AI"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg shadow-violet-900/40 hover:scale-110 transition-all duration-200 flex items-center justify-center text-white"
        style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)" }}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 7.6H22l-6.4 4.6L17.8 22 12 17.4 6.2 22l2.2-7.8L2 9.6h7.6L12 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[560px] flex flex-col rounded-3xl overflow-hidden shadow-2xl shadow-black/40 glass" style={{ border: "1px solid var(--theme-edge)" }}>
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-edge" style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(244,114,182,0.1) 100%)" }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg, #8b5cf6, #f472b6)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.6H22l-6.4 4.6L17.8 22 12 17.4 6.2 22l2.2-7.8L2 9.6h7.6L12 2z" />
              </svg>
            </div>
            <div>
              <p className="text-ink text-sm font-semibold leading-none">Ask about Tatiana</p>
              <p className="text-ink-3 text-xs mt-0.5">Powered by Claude ✦</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-ink-3 text-sm text-center py-2">
                  Hi! Ask me anything about Tatiana&apos;s background, skills, or projects.
                </p>
                <div className="grid gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button key={s} onClick={() => sendMessage(s)}
                      className="text-left text-xs px-3 py-2 rounded-xl border border-edge text-ink-2 hover:border-violet-400/40 hover:text-ink hover:bg-violet-500/10 transition-all duration-150">
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "text-white rounded-br-sm"
                      : "bg-surf text-ink border border-edge rounded-bl-sm"
                  }`}
                  style={msg.role === "user" ? { background: "linear-gradient(135deg, #8b5cf6, #f472b6)" } : {}}
                >
                  {msg.content || (
                    <span className="inline-flex gap-1 items-center">
                      {[0, 150, 300].map((d) => (
                        <span key={d} className="w-1.5 h-1.5 rounded-full bg-ink-3 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                      ))}
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex items-center gap-2 px-3 py-3 border-t border-edge">
            <input
              ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..." disabled={streaming}
              className="flex-1 bg-surf border border-edge rounded-xl px-3 py-2 text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-violet-500/60 transition-colors duration-150 disabled:opacity-50"
            />
            <button type="submit" disabled={!input.trim() || streaming}
              className="flex-shrink-0 w-9 h-9 rounded-xl text-white disabled:opacity-40 transition-all duration-150 flex items-center justify-center hover:scale-110"
              style={{ background: "linear-gradient(135deg, #8b5cf6, #f472b6)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
