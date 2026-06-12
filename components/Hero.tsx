import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Dreamy background orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 will-change-transform">
        <div
          className="orb-a absolute -top-20 -left-20 w-96 h-96 rounded-full blur-2xl"
          style={{ background: "var(--theme-orb-1)" }}
        />
        <div
          className="orb-b absolute bottom-0 -right-16 w-80 h-80 rounded-full blur-2xl"
          style={{ background: "var(--theme-orb-2)" }}
        />
        <div
          className="orb-c absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl"
          style={{ background: "var(--theme-orb-3)" }}
        />
      </div>

      {/* Dot grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

      {/* Decorative SVG art */}
      <svg aria-hidden className="pointer-events-none absolute top-20 right-10 opacity-[0.08] text-violet-300" width="180" height="180" viewBox="0 0 180 180" fill="none" stroke="currentColor" strokeWidth="0.8">
        <circle cx="90" cy="90" r="80" strokeDasharray="12 8" />
        <circle cx="90" cy="90" r="60" strokeDasharray="6 10" />
        <circle cx="90" cy="90" r="40" strokeDasharray="4 6" />
        <circle cx="90" cy="90" r="20" />
        <line x1="90" y1="10" x2="90" y2="170" strokeDasharray="4 6" />
        <line x1="10" y1="90" x2="170" y2="90" strokeDasharray="4 6" />
        <line x1="33" y1="33" x2="147" y2="147" strokeDasharray="3 8" />
        <line x1="147" y1="33" x2="33" y2="147" strokeDasharray="3 8" />
      </svg>
      <svg aria-hidden className="pointer-events-none absolute bottom-20 left-8 opacity-[0.06] text-rose-300" width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="0.8">
        {[0, 1, 2, 3, 4].map((i) => (
          <polygon key={i} points="60,10 110,80 10,80" transform={`rotate(${i * 15} 60 60) scale(${1 - i * 0.15} ${1 - i * 0.15}) translate(${i * 5.5} ${i * 5.5})`} />
        ))}
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-edge bg-surf/60 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-ink-3 tracking-widest uppercase">Available for opportunities</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.0] mb-6">
            <span className="text-ink">Tatiana </span>
            <span className="shimmer-text">Barmer</span>
          </h1>
        </FadeIn>

        <FadeIn delay={220}>
          <p className="text-xl sm:text-2xl text-ink-2 font-light mb-3">
            Vision Driven Web Developer
          </p>
          <p className="text-base text-ink-3 max-w-xl mx-auto leading-relaxed mb-10">
            Creative at heart with a deep curiosity for how things work behind the scenes —
            building at the intersection of software engineering and applied AI.
          </p>
        </FadeIn>

        <FadeIn delay={340}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium text-sm text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)" }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-edge text-ink-2 hover:text-ink hover:border-ink-3 font-medium text-sm transition-all duration-200 glass"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>

        <div className="mt-16 flex justify-center">
          <a href="#about" className="text-ink-4 hover:text-ink-2 transition-colors duration-200 animate-bounce" aria-label="Scroll down">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
