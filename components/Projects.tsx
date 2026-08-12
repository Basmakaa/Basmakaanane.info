"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import TiltCard from "./ui/TiltCard";
import SectionHeading from "./ui/SectionHeading";

export default function Projects() {
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Selected Work"
        title="More things I've built"
        subtitle="A mix of AI, web, and product work — always aimed at real people with real problems."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <TiltCard glow={p.accent} className="h-full">
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-xl"
                style={{
                  background: `linear-gradient(135deg, ${p.accent}33, transparent)`,
                  border: `1px solid ${p.accent}55`,
                }}
              >
                {p.title.charAt(0)}
              </div>
              <h3 className="font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-1 text-sm" style={{ color: p.accent }}>
                {p.blurb}
              </p>
              <p className="mt-4 leading-relaxed text-white/60">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-cyan hover:underline"
                >
                  View live →
                </a>
              )}
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
