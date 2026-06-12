import FadeIn from "./FadeIn";
import { projects } from "@/lib/portfolio-data";

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surf">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">Things I&apos;ve built</h2>
          <p className="text-ink-3 mb-12 max-w-lg">
            A selection of projects ranging from polished UIs to API-driven apps and CLI tools.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 90}>
              <article className="group flex flex-col h-full rounded-3xl glass p-6 hover:scale-[1.01] transition-all duration-300">
                <div
                  className="w-10 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
                  style={{ background: "linear-gradient(90deg, #8b5cf6, #f472b6)" }}
                />
                <h3 className="text-ink font-semibold text-lg mb-2 group-hover:gradient-text transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-ink-3 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-bg text-ink-3 border border-edge">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-ink-3 hover:text-ink transition-colors duration-200">
                      <GithubIcon /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors duration-200">
                      <ExternalIcon /> Live Demo
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
