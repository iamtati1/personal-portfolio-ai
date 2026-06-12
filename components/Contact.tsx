import FadeIn from "./FadeIn";

const links = [
  {
    label: "GitHub", href: "https://github.com/iamtati1", description: "See my code",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>,
    grad: "from-violet-500/20 to-purple-500/20",
  },
  {
    label: "LinkedIn", href: "https://linkedin.com/in/tatianabarmer/", description: "Connect with me",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
    grad: "from-sky-500/20 to-blue-500/20",
  },
  {
    label: "Email", href: "mailto:tatianabarmer@gmail.com", description: "tatianabarmer@gmail.com",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>,
    grad: "from-rose-500/20 to-pink-500/20",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-surf relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: "var(--theme-orb-1)" }} />
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background: "var(--theme-orb-2)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <FadeIn>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            Let&apos;s work{" "}
            <span className="shimmer-text">together</span>
          </h2>
          <p className="text-ink-3 mb-12 max-w-md mx-auto">
            I&apos;m open to full-time roles, freelance projects, and collaborations.
            Reach out — I&apos;d love to hear from you.
          </p>
        </FadeIn>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {links.map(({ label, href, description, icon, grad }, i) => (
            <FadeIn key={label} delay={i * 90}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-5 py-4 rounded-2xl glass bg-gradient-to-br hover:scale-[1.03] transition-all duration-200 text-left ${grad}`}
              >
                <span className="text-ink-3 group-hover:text-primary transition-colors duration-200">{icon}</span>
                <div>
                  <p className="text-ink text-sm font-medium">{label}</p>
                  <p className="text-ink-3 text-xs">{description}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto mt-20 pt-8 border-t border-edge flex items-center justify-between text-xs text-ink-4">
        <span>© 2026 Tatiana Barmer</span>
        <span className="gradient-text-violet-rose font-medium">Built with Next.js + Claude AI</span>
      </div>
    </section>
  );
}
