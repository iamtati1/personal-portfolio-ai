"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about",    label: "About"    },
  { href: "#skills",   label: "Skills"   },
  { href: "#creative", label: "Creative" },
  { href: "#projects", label: "Projects" },
  { href: "#game",     label: "Game"     },
  { href: "#contact",  label: "Contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-edge" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-sm font-semibold gradient-text-violet-rose">
          Tatiana Barmer
        </span>
        <div className="flex items-center gap-5">
          <ul className="hidden sm:flex items-center gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="text-sm text-ink-3 hover:text-ink transition-colors duration-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
