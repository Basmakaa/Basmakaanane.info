"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile } from "@/lib/data";

const orbitTags = ["AI", "React", "Design", "Python", "Cloud", "Story"];

// Precomputed once (module scope) so SSR and client render byte-identical
// strings — avoids float-precision hydration mismatches.
const orbitPositions = orbitTags.map((tag, i) => {
  const angle = (i / orbitTags.length) * Math.PI * 2;
  const radius = 50;
  return {
    tag,
    top: `${(50 + Math.sin(angle) * radius).toFixed(3)}%`,
    left: `${(50 + Math.cos(angle) * radius).toFixed(3)}%`,
  };
});

export default function Avatar3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [12, -12]), {
    stiffness: 120,
    damping: 16,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-14, 14]), {
    stiffness: 120,
    damping: 16,
  });
  const translateZ = 60;

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }
  function reset() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <div className="perspective relative mx-auto flex h-[420px] w-[420px] max-w-full items-center justify-center sm:h-[500px] sm:w-[500px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-violet-glow/40 via-accent-cyan/20 to-accent-pink/30 blur-3xl" />

      {/* Rotating conic ring */}
      <motion.div
        aria-hidden
        className="absolute h-[105%] w-[105%] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #7c3aed, #22d3ee, #f472b6, #fbbf24, #7c3aed)",
          maskImage:
            "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
          WebkitMaskImage:
            "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 16, ease: "linear", repeat: Infinity }}
      />

      {/* Dashed orbit ring + tags */}
      <motion.div
        aria-hidden
        className="absolute h-[128%] w-[128%] rounded-full border border-dashed border-white/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {orbitPositions.map(({ tag, top, left }) => (
          <motion.span
            key={tag}
            suppressHydrationWarning
            className="glass absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-[11px] font-medium text-white/80"
            style={{ top, left }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* Portrait with tilt */}
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="preserve-3d relative h-[74%] w-[74%] rounded-full"
      >
        <motion.div
          style={{ transform: `translateZ(${translateZ}px)` }}
          className="glow-ring relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-ink-800"
        >
          {/* Placeholder silhouette (shows until photo loads / if missing) */}
          {(!loaded || errored) && (
            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-b from-ink-800 to-ink-950">
              <svg
                viewBox="0 0 200 200"
                className="h-[85%] w-[85%] opacity-70"
                fill="none"
              >
                <defs>
                  <linearGradient id="pg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="72" r="40" fill="url(#pg)" opacity="0.85" />
                <path
                  d="M28 200c0-46 32-74 72-74s72 28 72 74"
                  fill="url(#pg)"
                  opacity="0.85"
                />
              </svg>
            </div>
          )}

          {!errored && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={profile.avatar}
              alt={profile.name}
              onLoad={() => setLoaded(true)}
              onError={() => setErrored(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {/* Duotone / rim light overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-violet-glow/25 via-transparent to-accent-cyan/25 mix-blend-soft-light" />
          <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(124,58,237,0.35)]" />
        </motion.div>

        {/* Floating sparkles in front */}
        <motion.span
          style={{ transform: "translateZ(110px)" }}
          className="absolute -right-2 top-6 text-2xl"
          animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ✨
        </motion.span>
        <motion.span
          style={{ transform: "translateZ(90px)" }}
          className="absolute -left-1 bottom-10 text-xl"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          💜
        </motion.span>
      </motion.div>

      {/* Reflection puddle */}
      <div className="absolute -bottom-6 h-10 w-1/2 rounded-[100%] bg-violet-glow/30 blur-xl" />
    </div>
  );
}
