"use client";

import { useState, useRef, useCallback } from "react";
import FadeIn from "./FadeIn";

type GameState = "idle" | "waiting" | "ready" | "result" | "false-start";

const RATINGS = [
  { max: 180,  label: "Legendary ✦",  color: "text-yellow-300",   desc: "You might be superhuman." },
  { max: 220,  label: "Elite",         color: "text-violet-300",   desc: "That's seriously fast." },
  { max: 260,  label: "Sharp",         color: "text-sky-300",      desc: "Above average reaction time." },
  { max: 320,  label: "Good",          color: "text-emerald-400",  desc: "Solid. Keep practicing." },
  { max: 420,  label: "Average",       color: "text-ink-2",        desc: "Right in the zone for most people." },
  { max: Infinity, label: "Keep going", color: "text-rose-400",   desc: "Try again — you'll get faster." },
];

function getRating(ms: number) {
  return RATINGS.find((r) => ms < r.max) ?? RATINGS[RATINGS.length - 1];
}

export default function ReactionGame() {
  const [state, setState] = useState<GameState>("idle");
  const [reactionMs, setReactionMs] = useState<number | null>(null);
  const [bestMs, setBestMs] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number>(0);

  const startRound = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setState("waiting");
    setReactionMs(null);

    const delay = 1500 + Math.random() * 3500;
    timeoutRef.current = setTimeout(() => {
      setState("ready");
      startTimeRef.current = performance.now();
    }, delay);
  }, []);

  const handleClick = useCallback(() => {
    if (state === "idle" || state === "result" || state === "false-start") {
      startRound();
      return;
    }

    if (state === "waiting") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setState("false-start");
      return;
    }

    if (state === "ready") {
      const elapsed = Math.round(performance.now() - startTimeRef.current);
      setReactionMs(elapsed);
      setAttempts((a) => a + 1);
      setBestMs((prev) => (prev === null || elapsed < prev ? elapsed : prev));
      setState("result");
    }
  }, [state, startRound]);

  const rating = reactionMs !== null ? getRating(reactionMs) : null;

  return (
    <section id="game" className="py-24 px-6 bg-surf relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-10" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Mini Game</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-2">
            Reaction Time Test
          </h2>
          <p className="text-ink-3 mb-8 max-w-lg">
            Wait for the circle to glow, then click as fast as you can. How sharp are your reflexes?
          </p>
        </FadeIn>

        <div className="flex flex-col items-center gap-8">
          {/* Stats row */}
          {(attempts > 0 || bestMs !== null) && (
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-ink">{attempts}</p>
                <p className="text-xs font-mono text-ink-4">attempts</p>
              </div>
              {bestMs !== null && (
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text-violet-rose">{bestMs}<span className="text-base font-normal text-ink-3">ms</span></p>
                  <p className="text-xs font-mono text-ink-4">best</p>
                </div>
              )}
            </div>
          )}

          {/* Game arena */}
          <div
            onClick={handleClick}
            className="relative w-full max-w-lg aspect-video rounded-3xl overflow-hidden cursor-pointer select-none flex flex-col items-center justify-center gap-4 transition-all duration-300"
            style={{
              background:
                state === "ready"
                  ? "linear-gradient(135deg, rgba(244,114,182,0.15) 0%, rgba(251,113,133,0.2) 100%)"
                  : state === "false-start"
                  ? "linear-gradient(135deg, rgba(239,68,68,0.12) 0%, rgba(220,38,38,0.15) 100%)"
                  : "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(56,189,248,0.06) 100%)",
              border: "1px solid var(--theme-edge)",
            }}
          >
            {/* Center circle */}
            <div
              className={`rounded-full flex items-center justify-center transition-all duration-300 ${
                state === "waiting" ? "pulse-ring" : state === "ready" ? "pulse-ring-rose" : ""
              }`}
              style={{
                width: state === "ready" ? "120px" : "96px",
                height: state === "ready" ? "120px" : "96px",
                background:
                  state === "ready"
                    ? "linear-gradient(135deg, #f472b6, #fb7185)"
                    : state === "false-start"
                    ? "linear-gradient(135deg, #ef4444, #dc2626)"
                    : state === "result"
                    ? "linear-gradient(135deg, #8b5cf6, #a78bfa)"
                    : "var(--theme-card)",
                border:
                  state === "waiting"
                    ? "2px solid rgba(139,92,246,0.6)"
                    : state === "ready"
                    ? "2px solid rgba(244,114,182,0.8)"
                    : "1px solid var(--theme-edge)",
              }}
            >
              {state === "idle" && <span className="text-3xl">👆</span>}
              {state === "waiting" && <span className="text-ink-3 text-sm font-mono">wait...</span>}
              {state === "ready" && <span className="text-white text-sm font-bold">CLICK!</span>}
              {state === "result" && <span className="text-white text-lg font-bold">{reactionMs}ms</span>}
              {state === "false-start" && <span className="text-white text-xl">😬</span>}
            </div>

            {/* Message */}
            <div className="text-center px-6">
              {state === "idle" && (
                <p className="text-ink-2 text-sm">Click anywhere to start</p>
              )}
              {state === "waiting" && (
                <p className="text-ink-3 text-sm">Get ready... don&apos;t click yet!</p>
              )}
              {state === "ready" && (
                <p className="text-white font-semibold text-sm pop-in">Go! Go! Go!</p>
              )}
              {state === "false-start" && (
                <div className="pop-in">
                  <p className="text-red-400 font-semibold mb-1">Too early! 😅</p>
                  <p className="text-ink-3 text-xs">Click to try again</p>
                </div>
              )}
              {state === "result" && rating && (
                <div className="pop-in text-center">
                  <p className={`font-bold text-lg ${rating.color}`}>{rating.label}</p>
                  <p className="text-ink-3 text-xs mt-1">{rating.desc}</p>
                  <p className="text-ink-4 text-xs mt-2">click to play again</p>
                </div>
              )}
            </div>
          </div>

          {/* Rating legend */}
          <div className="flex flex-wrap justify-center gap-3 text-[11px] font-mono">
            {RATINGS.slice(0, -1).map((r) => (
              <span key={r.label} className={`${r.color} opacity-70`}>
                {r.label} &lt;{r.max}ms
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
