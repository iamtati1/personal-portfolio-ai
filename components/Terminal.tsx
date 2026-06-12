import FadeIn from "./FadeIn";

type LineKind = "comment" | "cmd" | "out" | "blank" | "prompt";
type Line = { kind: LineKind; text: string };

const LINES: Line[] = [
  { kind: "cmd",     text: "whoami" },
  { kind: "out",     text: "tatiana-barmer" },
  { kind: "blank",   text: "" },
  { kind: "comment", text: "# about" },
  { kind: "cmd",     text: "cat about.txt" },
  { kind: "out",     text: "Vision-driven web developer" },
  { kind: "out",     text: "Creative at heart, curious by nature" },
  { kind: "out",     text: "Building software + AI experiences" },
  { kind: "blank",   text: "" },
  { kind: "comment", text: "# skills" },
  { kind: "cmd",     text: "ls skills/" },
  { kind: "out",     text: "js  ts  react  next  node  css  ai" },
  { kind: "blank",   text: "" },
  { kind: "comment", text: "# interests" },
  { kind: "cmd",     text: "cat interests.txt" },
  { kind: "out",     text: "🏔️  hiking   🍳  cooking" },
  { kind: "out",     text: "🤖  AI        🎬  film & music" },
  { kind: "blank",   text: "" },
  { kind: "comment", text: "# availability" },
  { kind: "cmd",     text: `echo "open to work?"` },
  { kind: "out",     text: "Yes! Open to roles & freelance 🌟" },
  { kind: "blank",   text: "" },
  { kind: "prompt",  text: "" },
];

export default function Terminal() {
  return (
    <section id="creative" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <FadeIn direction="left">
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">
              Creative Side
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-5 leading-tight">
              <span className="gradient-text">Behind the</span>
              <br />terminal
            </h2>
            {/* Currently section */}
            <div className="mb-8 space-y-2.5">
              {[
                { icon: "🔨", label: "Building",  value: "AI-powered web experiences" },
                { icon: "📖", label: "Learning",   value: "TypeScript & Next.js patterns" },
                { icon: "🌱", label: "Exploring",  value: "LLMs & prompt engineering" },
                { icon: "🎯", label: "Seeking",    value: "Meaningful work & great teams" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-base w-6 text-center">{icon}</span>
                  <span className="text-xs font-mono text-ink-4 w-16 shrink-0">{label}</span>
                  <span className="text-xs text-ink-2">{value}</span>
                </div>
              ))}
            </div>

            {/* Mini stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Open to work",   dot: "bg-emerald-400" },
                { label: "US-based",       dot: "bg-sky-400"     },
                { label: "Full-time & freelance", dot: "bg-violet-400" },
              ].map(({ label, dot }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-edge glass text-xs text-ink-2"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                  {label}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right — terminal */}
          <FadeIn direction="right" delay={120}>
            <div className="rounded-xl overflow-hidden border border-edge shadow-lg shadow-black/20">
              {/* Chrome */}
              <div
                className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/5"
                style={{ background: "#1a1728" }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] font-mono text-white/20">
                  tatiana@portfolio ~ zsh
                </span>
              </div>

              {/* Body */}
              <div
                className="px-4 py-4 font-mono text-xs leading-relaxed space-y-0.5"
                style={{ background: "#0e0c1a" }}
              >
                {LINES.map((line, i) => {
                  if (line.kind === "blank") {
                    return <div key={i} className="h-2" />;
                  }
                  if (line.kind === "comment") {
                    return (
                      <div key={i} style={{ color: "#4a4060" }}>{line.text}</div>
                    );
                  }
                  if (line.kind === "cmd") {
                    return (
                      <div key={i} className="flex gap-1.5">
                        <span style={{ color: "#a78bfa" }}>$</span>
                        <span style={{ color: "#f0ebff" }}>{line.text}</span>
                      </div>
                    );
                  }
                  if (line.kind === "prompt") {
                    return (
                      <div key={i} className="flex gap-1.5 items-center">
                        <span style={{ color: "#a78bfa" }}>$</span>
                        <span
                          className="inline-block w-0.5 h-3.5"
                          style={{ background: "#f472b6" }}
                        />
                      </div>
                    );
                  }
                  return (
                    <div key={i} style={{ color: "#c4b5fd" }} className="pl-3">
                      {line.text}
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
