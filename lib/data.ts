export const profile = {
  name: "Basma Kaanane",
  first: "Basma",
  last: "Kaanane",
  line: "Engineer by training. Entrepreneur by curiosity. Creative by nature.",
  location: "Toronto, Canada",
  timezone: "America/Toronto",
  email: "hi@laverageai.com",
  linkedin: "https://www.linkedin.com/in/basma-kaanane-09520b197/",
};

export const about = {
  headline: "From Morocco to Toronto.",
  body: "I was born in Morocco, where I studied applied mathematics before moving to Canada. I graduated from the University of Ottawa in software engineering, after more than five internships. Today I live in Toronto. I build software, start things, and teach — so complex technology can be useful to the people who have to live with it.",
};

export const path = [
  {
    place: "Morocco",
    detail: "Applied mathematics, and the start of the story.",
  },
  {
    place: "Ottawa",
    detail:
      "Software engineering at the University of Ottawa, with more than five internships before graduation.",
  },
  {
    place: "Toronto",
    detail: "Home. LaverageAI, workshops, and independent work.",
  },
  {
    place: "San Francisco",
    detail:
      "A Silicon Valley fellowship: visits, conversations with founders and investors, and a clearer sense of building around real demand.",
  },
];

export const skillGroups = [
  {
    label: "Product & practice",
    items: [
      "System design",
      "Product",
      "Product thinking",
      "Workshops",
      "Consulting",
      "Stakeholder communication",
      "English and French",
    ],
  },
  {
    label: "AI development",
    items: [
      "Applied AI",
      "AI product development",
      "LLM applications",
      "Prompt and context design",
      "AI agents and assistants",
      "Retrieval workflows",
      "Evaluation and reliability",
      "Computer vision",
      "Recommendation systems",
      "Human-in-the-loop design",
      "AI adoption",
      "Practical AI education",
    ],
  },
  {
    label: "Automation",
    items: [
      "Workflow automation",
      "Process design",
      "Business process analysis",
      "Systems integration",
      "Internal tools",
      "Operational workflows",
      "Data workflows",
      "Reducing repetitive work",
    ],
  },
  {
    label: "Leadership & founding",
    items: [
      "Founding",
      "Leadership",
      "Direction setting",
      "Prioritization",
      "Decision making",
      "Client leadership",
      "Facilitation",
      "Teaching",
      "Building with constraints",
      "Cross-functional collaboration",
    ],
  },
];

export type WorkItem = {
  title: string;
  role: string;
  summary: string;
  body: string;
  href?: string;
  cta?: string;
  wash: string;
};

export const work: WorkItem[] = [
  {
    title: "LaverageAI",
    role: "Founder",
    summary: "AI consulting, training, and implementation.",
    body: "I help organizations move past curiosity and adopt AI in practical ways — strategy, workshops, workflow design, and hands-on implementation. The aim is less friction and a result that matters, not AI for its own sake.",
    href: "https://laverageai.com",
    cta: "Visit LaverageAI",
    wash: "rgba(194, 77, 44, 0.55)",
  },
  {
    title: "OptiLiftAI",
    role: "Independent project",
    summary: "Computer vision for exercise form.",
    body: "A passion project on reading gym technique. An earlier version drew a waitlist of about 500 people. The current work is narrower and still in progress: squats first, video checks, pose and repetition, and feedback that knows when it is unsure. It is not a launched product.",
    wash: "rgba(28, 61, 50, 0.85)",
  },
  {
    title: "Corporate experience",
    role: "More than six companies",
    summary: "Frontend, backend, full stack, AI, and data.",
    body: "I worked with more than six companies, across frontend, backend, full stack, AI, and data. I kept the work varied on purpose, so the experience would stay broad.",
    wash: "rgba(36, 52, 74, 0.9)",
  },
];

export const disciplines = [
  "Software engineering",
  "Entrepreneurship",
  "Workshops",
  "Computer vision",
  "Product",
  "Storytelling",
  "Toronto",
  "Morocco",
];

export type SpeakingEvent = {
  title: string;
  when?: string;
  display?: [string, string];
  status?: string;
  detail: string;
};

export const speaking = {
  kicker: "Speaking & workshops",
  headline: "Practical AI, for people who don’t live in it.",
  intro:
    "I host workshops and educational sessions that make artificial intelligence understandable, especially for people without a technical background. I teach them independently — not as a partner or representative of any tool company.",
  events: [
    {
      title: "Femme in Business workshop",
      when: "April 30",
      display: ["April", "30"],
      status: "Sold out",
      detail:
        "A workshop for women entrepreneurs, focused on using AI for marketing, content creation, and automation.",
    },
    {
      title: "Claude workshop",
      when: "October 2026",
      display: ["Oct", "2026"],
      status: "Sold out",
      detail:
        "The first evening in a series I plan to continue. We worked through Claude for real tasks: getting started, everyday workflows, and an honest look at what the tool can and cannot do.",
    },
  ] satisfies SpeakingEvent[],
  topics: [
    "Getting started with AI",
    "Claude and ChatGPT for work",
    "Turning repetitive work into a clearer workflow",
    "Practical use cases for teams",
    "Adoption without the hype",
    "Capabilities and limitations",
  ],
  audiences: [
    "Business teams",
    "Entrepreneurs",
    "Women in business",
    "HR professionals",
    "Marketing professionals",
    "Small-business owners",
  ],
};
