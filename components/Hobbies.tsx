import FadeIn from "./FadeIn";

const hobbies = [
  { emoji: "🏔️", name: "Outdoor Exploration", description: "Trails, fresh air, and leaving the screen behind. There's something grounding about finding a new path.", gradient: "from-emerald-400/20 to-teal-400/20", border: "border-emerald-400/20 hover:border-emerald-400/40", tag: "text-emerald-400", tagLabel: "Nature" },
  { emoji: "🍳", name: "Cooking",             description: "Following flavor instincts, trying new cuisines, and treating a recipe more like a suggestion than a rule.", gradient: "from-orange-400/20 to-amber-400/20", border: "border-orange-400/20 hover:border-orange-400/40", tag: "text-orange-400", tagLabel: "Creative" },
  { emoji: "🤖", name: "Applied AI",           description: "Exploring what's possible when language models meet real products. This portfolio is a living experiment.", gradient: "from-violet-400/20 to-purple-400/20", border: "border-violet-400/20 hover:border-violet-400/40", tag: "text-violet-400", tagLabel: "Tech" },
  { emoji: "🎬", name: "Entertainment",        description: "Discovering new films, shows, and music. Always chasing that one album or series that reframes everything.", gradient: "from-rose-400/20 to-pink-400/20", border: "border-rose-400/20 hover:border-rose-400/40", tag: "text-rose-400", tagLabel: "Culture" },
  { emoji: "📚", name: "Continuous Learning",  description: "Curiosity doesn't have an off switch. New frameworks, ideas, and disciplines are always fair game.", gradient: "from-sky-400/20 to-cyan-400/20", border: "border-sky-400/20 hover:border-sky-400/40", tag: "text-sky-400", tagLabel: "Growth" },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-24 px-6 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-15" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Beyond the Code</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            What makes me,{" "}
            <span className="shimmer-text">me</span>
          </h2>
          <p className="text-ink-3 mb-12 max-w-lg">
            The stuff I care about outside of work — it all feeds back into how I build.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hobbies.map(({ emoji, name, description, gradient, border, tag, tagLabel }, i) => (
            <FadeIn key={name} delay={i * 70}>
              <div className={`group relative rounded-3xl border bg-gradient-to-br p-6 glass transition-all duration-300 hover:scale-[1.02] ${gradient} ${border}`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl leading-none" role="img" aria-label={name}>{emoji}</span>
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border border-current/20 ${tag}`}>
                    {tagLabel}
                  </span>
                </div>
                <h3 className="text-ink font-semibold mb-2">{name}</h3>
                <p className="text-ink-3 text-sm leading-relaxed">{description}</p>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={hobbies.length * 70}>
            <div className="relative rounded-3xl border border-dashed border-edge p-6 flex flex-col items-center justify-center text-center gap-3 min-h-[160px]">
              <span className="text-3xl">✨</span>
              <p className="text-ink-4 text-sm italic leading-relaxed">
                &ldquo;Always curious, always building,<br />always chasing what&rsquo;s next.&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
