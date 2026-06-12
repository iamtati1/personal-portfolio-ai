"use client";

import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";

type Particle = { x: number; y: number; vx: number; vy: number; radius: number; hue: number };

const MAX_DIST = 130;
const COUNT = 65;

export default function GenerativeArt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    function init() {
      if (!canvas) return;
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.6,
        // Dreamy pastel range: violet (270) → rose (330) → sky (200)
        hue: [270, 300, 330, 200, 250][Math.floor(Math.random() * 5)] + Math.random() * 30,
      }));
    }
    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const mdx = mouse.current.x - p.x;
        const mdy = mouse.current.y - p.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 180 && md > 0) {
          p.vx += (mdx / md) * 0.014;
          p.vy += (mdy / md) * 0.014;
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > 1.5) { p.vx = (p.vx / speed) * 1.5; p.vy = (p.vy / speed) * 1.5; }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 78%, 0.9)`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 75%, 72%, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onMouseLeave() { mouse.current = { x: -9999, y: -9999 }; }

    resize(); init(); draw();
    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <section id="creative" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Creative Side</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
            <span className="gradient-text">Generative art</span>
          </h2>
          <p className="text-ink-3 mb-8 max-w-lg">
            Move your cursor over the canvas — pastel particles drift toward your touch, weaving
            constellations in real time. Code as craft.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(244,114,182,0.06) 50%, rgba(56,189,248,0.06) 100%)",
              border: "1px solid var(--theme-edge)",
            }}
          >
            <canvas
              ref={canvasRef}
              className="w-full h-80 sm:h-[420px] cursor-crosshair"
              aria-label="Interactive dreamy generative art"
            />
            <span className="absolute bottom-3 right-4 text-[10px] font-mono text-ink-4">
              pastel constellation · {COUNT} particles · react to cursor
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
