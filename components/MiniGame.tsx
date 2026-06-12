"use client";

import { useState, useEffect, useCallback } from "react";

type Card = {
  id: number;
  pair: string;
  emoji: string;
  label: string;
};

const DECK: Omit<Card, "id">[] = [
  { pair: "js",   emoji: "⚡", label: "JavaScript" },
  { pair: "ts",   emoji: "🔷", label: "TypeScript" },
  { pair: "react",emoji: "⚛️", label: "React"       },
  { pair: "next", emoji: "🔺", label: "Next.js"    },
  { pair: "css",  emoji: "🎨", label: "CSS"         },
  { pair: "node", emoji: "📦", label: "Node.js"    },
  { pair: "ai",   emoji: "🤖", label: "AI"          },
  { pair: "git",  emoji: "🛠️", label: "Git"         },
];

function shuffle(deck: Omit<Card, "id">[]): Card[] {
  const doubled = [...deck, ...deck];
  for (let i = doubled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [doubled[i], doubled[j]] = [doubled[j], doubled[i]];
  }
  return doubled.map((c, i) => ({ ...c, id: i }));
}

export default function MiniGame() {
  const [cards, setCards] = useState<Card[]>(() => shuffle(DECK));
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);
  const [won, setWon] = useState(false);

  const reset = useCallback(() => {
    setCards(shuffle(DECK));
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setLocked(false);
    setWon(false);
  }, []);

  useEffect(() => {
    if (matched.size === DECK.length) setWon(true);
  }, [matched]);

  function handleFlip(id: number) {
    if (locked) return;
    if (flipped.includes(id)) return;
    if (matched.has(cards[id].pair)) return;

    const next = [...flipped, id];

    if (next.length === 1) {
      setFlipped(next);
      return;
    }

    setFlipped(next);
    setMoves((m) => m + 1);

    const [a, b] = next;
    if (cards[a].pair === cards[b].pair) {
      setMatched((prev) => new Set([...prev, cards[a].pair]));
      setFlipped([]);
    } else {
      setLocked(true);
      setTimeout(() => {
        setFlipped([]);
        setLocked(false);
      }, 950);
    }
  }

  const isFlipped = (id: number) =>
    flipped.includes(id) || matched.has(cards[id].pair);

  return (
    <section id="game" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeInStatic>
          <p className="text-xs font-mono text-violet-400 tracking-widest uppercase mb-3">
            Mini Game
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-2">
            Tech Stack Memory
          </h2>
          <p className="text-ink-3 mb-8 max-w-lg">
            Match the pairs! Flip cards to find every tech in my toolkit.
          </p>
        </FadeInStatic>

        {/* Score bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-ink">{moves}</p>
              <p className="text-xs text-ink-3 font-mono">moves</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-violet-400">{matched.size}</p>
              <p className="text-xs text-ink-3 font-mono">matched</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-ink-3">{DECK.length - matched.size}</p>
              <p className="text-xs text-ink-3 font-mono">left</p>
            </div>
          </div>
          <button
            onClick={reset}
            className="text-xs px-4 py-2 rounded-lg border border-edge text-ink-2 hover:text-ink hover:border-ink-3 transition-colors duration-200 font-mono"
          >
            restart
          </button>
        </div>

        {/* Win banner */}
        {won && (
          <div className="mb-6 rounded-xl border border-violet-700/50 bg-violet-950/30 px-6 py-4 text-center">
            <p className="text-xl font-bold text-white mb-1">
              🎉 You matched them all in {moves} moves!
            </p>
            <p className="text-[#a1a1aa] text-sm mb-3">
              Now you know Tatiana&apos;s whole tech stack.
            </p>
            <button
              onClick={reset}
              className="text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors duration-200"
            >
              Play again
            </button>
          </div>
        )}

        {/* Card grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-4">
          {cards.map((card) => {
            const isMatch = matched.has(card.pair);
            return (
              <div
                key={card.id}
                className="card-scene aspect-square cursor-pointer select-none"
                onClick={() => handleFlip(card.id)}
              >
                <div className={`card-flip ${isFlipped(card.id) ? "is-flipped" : ""}`}>
                  {/* Front (face-down) */}
                  <div className="card-face border border-edge bg-surf flex items-center justify-center hover:border-violet-700/60 hover:bg-violet-950/10 transition-colors duration-200">
                    <span className="text-2xl opacity-30">?</span>
                  </div>
                  {/* Back (face-up) */}
                  <div
                    className={`card-back flex flex-col items-center justify-center gap-1 border transition-colors duration-200 ${
                      isMatch
                        ? "border-violet-600/60 bg-violet-950/30"
                        : "border-edge bg-card"
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl leading-none">{card.emoji}</span>
                    <span className="text-[10px] sm:text-xs font-mono text-ink-2 text-center px-1">
                      {card.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-ink-4 font-mono text-center">
          {DECK.length} pairs · click cards to flip
        </p>
      </div>
    </section>
  );
}

/* Thin wrapper so the section header fades in without importing FadeIn (avoids circular dep) */
function FadeInStatic({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
