import type { Metadata } from "next";
import MagneticButton from "@/components/ui/MagneticButton";
import { profile, speaking } from "@/lib/data";

export const metadata: Metadata = {
  title: "Speaking & workshops",
  description:
    "Workshops and talks by Basma Kaanane on practical AI for teams, entrepreneurs, and non-technical professionals.",
};

export default function SpeakingPage() {
  return (
    <main id="content" className="px-5 pb-28 pt-32 md:px-10">
      <div className="mx-auto max-w-page">
        <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
          {speaking.kicker}
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.2rem,7vw,6.4rem)] font-light leading-[0.92] tracking-[-0.035em]">
          {speaking.headline}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          {speaking.intro}
        </p>

        <div className="mt-20 border-t border-line">
          {speaking.events.map((event, i) => (
            <article
              key={event.title}
              className="grid border-b border-line lg:grid-cols-12"
            >
              <div className="py-10 lg:col-span-4 lg:pr-10">
                <p className="text-[11px] uppercase tracking-[0.28em] text-clay">
                  0{i + 1}
                </p>
                {event.display && (
                  <p className="mt-6 font-display text-6xl font-light leading-[0.9] tracking-tight md:text-7xl">
                    {event.display[0]}
                    <span className="block italic">{event.display[1]}</span>
                  </p>
                )}
                {event.status && (
                  <p className="mt-6 text-sm uppercase tracking-[0.22em] text-ink">
                    {event.status}
                  </p>
                )}
              </div>
              <div className="border-t border-line py-10 lg:col-span-8 lg:border-l lg:border-t-0 lg:pl-12">
                <h2 className="font-display text-4xl font-light tracking-tight md:text-5xl">
                  {event.title}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
                  {event.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-light">Topics</h2>
            <ol className="mt-8">
              {speaking.topics.map((topic, i) => (
                <li
                  key={topic}
                  className="flex gap-6 border-t border-line py-4 text-ink-soft"
                >
                  <span className="w-8 text-[11px] tracking-[0.18em] text-clay">
                    0{i + 1}
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-display text-3xl font-light">Who it’s for</h2>
            <ul className="mt-8">
              {speaking.audiences.map((audience) => (
                <li
                  key={audience}
                  className="border-t border-line py-4 text-ink-soft"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 max-w-2xl">
          <h2 className="font-display text-[clamp(2.6rem,5vw,4.5rem)] font-light leading-[0.95] tracking-tight">
            Invite me in.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            A corporate workshop, a community session, or a talk. Tell me about
            the room and what you want people to leave able to do.
          </p>
          <div className="mt-8">
            <MagneticButton
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Workshop inquiry")}`}
              className="bg-ink text-paper hover:bg-clay"
            >
              Start a conversation
            </MagneticButton>
          </div>
        </div>
      </div>
    </main>
  );
}
