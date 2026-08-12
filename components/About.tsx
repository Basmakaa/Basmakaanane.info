"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { about, skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Who I Am"
        title={about.headline}
      />

      <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-lg leading-relaxed text-white/70"
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            {about.motto.map((m) => (
              <span
                key={m}
                className="glass rounded-full px-4 py-2 text-sm font-medium text-accent"
              >
                {m}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-5"
              >
                <div className="text-gradient font-display text-3xl font-bold">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-white/50">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/40">
              Toolbox
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/70 transition-colors hover:border-accent/40 hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
