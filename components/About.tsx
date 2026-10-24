"use client";

import { motion, useReducedMotion } from "framer-motion";
import Index from "./ui/Index";
import Reveal from "./ui/Reveal";
import { about, path, skillGroups } from "@/lib/data";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="mx-auto max-w-page px-5 py-28 md:px-10 md:py-36">
      <Index n="02" label="About" />

      <Reveal>
        <h2 className="max-w-3xl font-display text-[clamp(2.8rem,6vw,5.4rem)] font-light leading-[0.95] tracking-[-0.03em]">
          {about.headline}
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          {about.body}
        </p>
      </Reveal>

      <dl className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="border-t border-line pt-5 transition-colors hover:border-clay"
          >
            <dt className="text-[11px] uppercase tracking-[0.22em] text-clay">
              {group.label}
            </dt>
            <dd className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm leading-relaxed text-ink-soft">
              {group.items.map((item) => (
                <span key={item} className="after:ml-3 after:text-clay/80 after:content-['·'] last:after:content-none">
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      <div className="relative mt-20 md:mt-28">
        <motion.div
          aria-hidden
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 top-[5px] hidden h-px origin-left bg-ink/15 md:block"
        />
        <div className="grid gap-10 md:grid-cols-4">
          {path.map((step, i) => (
            <Reveal key={step.place} delay={i * 0.08}>
              <div className="relative">
                <span className="mb-5 block h-2.5 w-2.5 rounded-full bg-clay ring-4 ring-paper" />
                <h3 className="font-display text-3xl font-light tracking-tight">
                  {step.place}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
