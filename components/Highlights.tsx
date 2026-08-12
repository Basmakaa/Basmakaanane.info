"use client";

import { motion } from "framer-motion";
import { highlights } from "@/lib/data";

export default function Highlights() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass relative overflow-hidden rounded-[2rem] p-10 sm:p-14"
      >
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent-cyan/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-violet-glow/20 blur-3xl" />

        <div className="relative">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-accent-cyan">
            Recognition & Community
          </p>
          <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            From Ottawa to{" "}
            <span className="text-gradient">Silicon Valley</span> — and everyone
            I lift along the way.
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div
                  className="mb-3 h-1 w-12 rounded-full"
                  style={{ background: h.accent }}
                />
                <h3 className="font-display text-lg font-bold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {h.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
