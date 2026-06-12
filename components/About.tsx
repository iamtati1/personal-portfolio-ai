import FadeIn from "./FadeIn";

const interests = ["Applied AI", "Open Source", "Outdoor Exploration", "Cooking", "Continuous Learning"];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6 leading-tight">
              Building with curiosity,<br />
              <span className="gradient-text-violet-rose">shipping with care.</span>
            </h2>
            <p className="text-ink-2 leading-relaxed mb-4">
              I&apos;m a web developer and software engineer with a passion for creating
              thoughtful, high-quality digital experiences. I describe myself as a creative at
              heart — someone who loves understanding how things work behind the scenes.
            </p>
            <p className="text-ink-2 leading-relaxed mb-6">
              I&apos;m actively expanding into applied AI and modern frontend development,
              exploring how language models can make products smarter and more human-centered.
              This portfolio is a living experiment — the chat widget is powered by Claude.
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs border border-edge text-ink-2 bg-surf/60 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={120}>
            <div className="flex justify-center md:justify-end">
              <div className="w-72 rounded-3xl glass p-6 space-y-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #8b5cf6, #f472b6)" }}
                >
                  TB
                </div>
                <div>
                  <p className="text-ink font-semibold">Tatiana Barmer</p>
                  <p className="text-ink-3 text-sm">Software Engineer</p>
                </div>
                <div className="border-t border-edge pt-4 space-y-2.5 text-sm">
                  <div className="flex items-center gap-2 text-ink-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    United States
                  </div>
                  <div className="flex items-center gap-2 text-ink-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
                    Open to roles
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available now
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
