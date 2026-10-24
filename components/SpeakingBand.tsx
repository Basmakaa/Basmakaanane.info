"use client";

import Link from "next/link";
import Index from "./ui/Index";
import Reveal from "./ui/Reveal";
import { speaking } from "@/lib/data";

export default function SpeakingBand() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-page items-start gap-12 px-5 py-28 md:px-10 md:py-36 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Index n="04" label="Speaking" />
          <h2 className="max-w-sm font-display text-4xl font-light leading-[1.05] tracking-tight md:text-5xl">
            Workshops, in the room.
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-7">
          <ol>
            {speaking.events.map((event, i) => (
              <li key={event.title} className="border-t border-line py-8">
                <p className="text-[11px] uppercase tracking-[0.22em] text-clay">
                  0{i + 1}
                  {event.status ? ` · ${event.status}` : ""}
                  {event.when ? ` · ${event.when}` : ""}
                </p>
                <h3 className="mt-3 font-display text-3xl font-light tracking-tight md:text-4xl">
                  {event.title}
                </h3>
                <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
                  {event.detail}
                </p>
              </li>
            ))}
          </ol>
          <Link
            href="/speaking"
            className="mt-8 inline-flex items-center gap-3 border-b border-ink/20 pb-1 text-sm transition-colors hover:border-clay hover:text-clay"
          >
            Workshops and invitations
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
