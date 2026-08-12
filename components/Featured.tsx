"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import TiltCard from "./ui/TiltCard";

export default function Featured() {
  const featured = projects.find((p) => p.featured);
  if (!featured) return null;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <TiltCard
        glow={featured.accent}
        intensity={6}
        className="overflow-hidden !p-0"
      >
        <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-accent-cyan">
              ★ Featured Project
            </span>
            <h3 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
              {featured.title}
            </h3>
            <p className="mt-2 text-lg text-accent">{featured.blurb}</p>
            <p className="mt-5 leading-relaxed text-white/60">
              {featured.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Animated device mock */}
          <div className="relative flex justify-center">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="glass relative aspect-[4/5] w-full max-w-xs rounded-3xl p-4"
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-gradient-to-b from-accent-cyan/10 to-violet-glow/10">
                <motion.div
                  className="flex h-24 w-24 items-center justify-center rounded-full border-2"
                  style={{ borderColor: featured.accent }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-4xl">🏋️‍♀️</span>
                </motion.div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-white">
                    Posture: Perfect
                  </div>
                  <div className="text-xs text-white/50">
                    Real-time AI feedback
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {[0, 1, 2, 3].map((n) => (
                    <motion.span
                      key={n}
                      className="h-1.5 w-8 rounded-full"
                      style={{ backgroundColor: featured.accent }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: n * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </TiltCard>
    </section>
  );
}
