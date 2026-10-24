"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Index from "./ui/Index";
import { work } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function SelectedWork() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = work[active];

  return (
    <section id="work" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 py-28 md:px-10 md:py-36">
        <Index n="03" label="Selected work" />
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl font-display text-[clamp(2.8rem,6vw,5.2rem)] font-light leading-[0.95] tracking-[-0.03em]">
            A few things I’m building.
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            The company, an experiment, and corporate work. Not a full archive.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
          <ol className="lg:col-span-5">
            {work.map((item, i) => {
              const on = active === i;
              return (
                <li key={item.title} className="border-b border-line">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={cn(
                      "flex w-full items-baseline justify-between gap-6 py-6 text-left transition-colors",
                      on ? "text-ink" : "text-muted hover:text-ink"
                    )}
                    aria-pressed={on}
                  >
                    <span>
                      <span className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-clay">
                        0{i + 1}
                        <span className="text-muted"> · {item.role}</span>
                      </span>
                      <span className="font-display text-4xl font-light tracking-tight md:text-5xl">
                        {item.title}
                      </span>
                    </span>
                  </button>
                  {on && (
                    <div className="pb-6 lg:hidden">
                      <p className="text-sm leading-relaxed text-ink-soft">
                        {item.body}
                      </p>
                      {item.href && item.cta && (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-sm text-clay"
                        >
                          {item.cta}
                          <Arrow />
                        </a>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="hidden lg:col-span-7 lg:sticky lg:top-28 lg:block">
            <div className="relative min-h-[440px] overflow-hidden rounded-[1.8rem] bg-night p-8 text-paper sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(680px circle at 100% 0%, ${current.wash}, transparent 58%)`,
                }}
              />
              <AnimatePresence mode="wait">
                <motion.article
                  key={current.title}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <p className="font-display text-7xl italic leading-none text-paper/30 sm:text-8xl">
                    0{active + 1}
                  </p>
                  <h3 className="mt-6 font-display text-4xl font-light tracking-tight sm:text-5xl">
                    {current.title}
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-paper/60">
                    {current.summary}
                  </p>
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-paper/75">
                    {current.body}
                  </p>
                  {current.href && current.cta && (
                    <a
                      href={current.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-3 border-b border-paper/30 pb-1 text-sm transition-colors hover:border-clay hover:text-clay"
                    >
                      {current.cta}
                      <Arrow />
                    </a>
                  )}
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4 12L12 4M12 4H6M12 4v6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
