import FadeIn from "./FadeIn";
import { skills } from "@/lib/portfolio-data";

const categoryStyle: Record<string, string> = {
  Language:  "text-violet-400  border-violet-400/30",
  Runtime:   "text-emerald-400 border-emerald-400/30",
  Web:       "text-orange-300  border-orange-300/30",
  Framework: "text-sky-300     border-sky-300/30",
  Backend:   "text-blue-400    border-blue-400/30",
  Tool:      "text-yellow-300  border-yellow-300/30",
  Styling:   "text-rose-400    border-rose-400/30",
  Emerging:  "text-fuchsia-300 border-fuchsia-300/30",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surf">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">What I work with</h2>
          <p className="text-ink-3 mb-12 max-w-lg">
            A mix of the technologies I use day-to-day and newer areas I&apos;m actively exploring.
          </p>
        </FadeIn>

        <div className="flex flex-wrap gap-3">
          {skills.map(({ name, category }, i) => (
            <FadeIn key={name} delay={i * 45} direction="up">
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border font-medium bg-surf/40 backdrop-blur-sm transition-all duration-200 hover:scale-105 ${
                  categoryStyle[category] ?? "text-ink-2 border-edge"
                }`}
              >
                {name}
                <span className="text-[10px] opacity-50 font-normal">{category}</span>
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
