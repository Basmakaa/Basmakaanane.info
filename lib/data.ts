export const profile = {
  name: "Basma Kaanane",
  firstName: "Basma",
  roles: [
    "Software Engineer",
    "AI & Full-Stack Developer",
    "Woman in Tech",
    "Public Speaker",
    "Storyteller",
  ],
  tagline: "Building warm, human-centered technology.",
  location: "Ottawa, Canada · Silicon Valley",
  email: "kaananebasma@gmail.com",
  altEmail: "bkaan006@uottawa.ca",
  linkedin: "https://www.linkedin.com/in/basma-kaanane-09520b197/",
  github: "https://github.com/Basmakaa",
  // Drop your headshot at /public/avatar.jpg (or .png) to light up the hero.
  avatar: "/avatar.jpg",
};

export const about = {
  headline: "A curious creator who believes tech should feel human.",
  paragraphs: [
    "My journey started at the University of Ottawa, where I fell in love with blending software engineering and human-centered design. Since then I've built AI copilots, shipped 10+ products from idea to launch, and helped teams move faster with tools that feel effortless.",
    "As a woman in tech, I care about more than clean code — I care about who it's for. I've worked across banking, telecom, healthcare, and AI startups to keep my perspective wide and my empathy wider.",
    "Off the keyboard you'll find me behind a camera, on a stage, or somewhere new in the world — collecting stories and bringing them home.",
  ],
  motto: ["Diligence", "Determination", "Meticulousness"],
  stats: [
    { value: "10+", label: "Products shipped" },
    { value: "110%", label: "Conversion lift" },
    { value: "5+", label: "Industries" },
    { value: "1", label: "Mission: human tech" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  color: string;
  points: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    company: "EHN Canada",
    role: "Software Developer",
    period: "2024 — Present",
    color: "#22d3ee",
    points: [
      "Built a real-time AI Copilot for sales calls with GPT & Azure, cutting handling time by 25%.",
      "Increased conversion by 110% with high-performing, data-driven landing pages.",
      "Launched 10+ products from idea to release, owning the full lifecycle.",
    ],
    tags: ["GPT", "Azure", "React", "Full lifecycle"],
  },
  {
    company: "TD Bank",
    role: "Developer",
    period: "2023",
    color: "#a78bfa",
    points: [
      "Created a Django + React tool that cut an access process from 7 days to 1 minute.",
      "Streamlined security across 5+ departments, saving 40+ hours every month.",
    ],
    tags: ["Django", "React", "Security", "Automation"],
  },
  {
    company: "Ericsson",
    role: "Automation Developer",
    period: "2022",
    color: "#f472b6",
    points: [
      "Developed an automation app for partner tracking with Django + GPT.",
      "Improved data-extraction efficiency by 40% and earned a 9.8/10 client satisfaction score.",
    ],
    tags: ["Django", "GPT", "Automation"],
  },
  {
    company: "Giatec Scientific",
    role: "Web Developer",
    period: "2021",
    color: "#fbbf24",
    points: [
      "Designed 5+ high-converting landing pages that tripled monthly users.",
      "Turned complex construction-tech products into clear, compelling stories.",
    ],
    tags: ["Web", "Conversion", "Design"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "OptiLiftAI",
    blurb: "Real-time posture correction, powered by AI.",
    description:
      "A real-time posture-correction coach using pose estimation and a LangChain AI layer to reduce gym injuries and improve performance — built to make expert coaching accessible to everyone.",
    tags: ["Pose Estimation", "LangChain", "Computer Vision", "AI"],
    featured: true,
    accent: "#22d3ee",
  },
  {
    title: "Giatec Landing Pages",
    blurb: "High-converting pages that tripled monthly users.",
    description:
      "Designed and built 5+ landing pages that tripled monthly users for a construction-tech leader.",
    tags: ["Web", "Conversion", "Design"],
    link: "https://www.giatecscientific.com/construction-revolution/",
    accent: "#fbbf24",
  },
  {
    title: "Simulation Games",
    blurb: "Web simulations for hospitals & universities.",
    description:
      "Built web-based training simulations for hospitals and universities, reimagining how teams learn high-stakes skills.",
    tags: ["Simulation", "Web", "EdTech"],
    accent: "#a78bfa",
  },
];

export type Passion = {
  title: string;
  emoji: string;
  description: string;
  accent: string;
};

export const passions: Passion[] = [
  {
    title: "Photography",
    emoji: "📷",
    description:
      "I see the world in frames — light, texture, and quiet moments. Photography keeps my eye for detail sharp and my storytelling honest.",
    accent: "#22d3ee",
  },
  {
    title: "Public Speaking",
    emoji: "🎤",
    description:
      "From panels to keynotes, I love turning complex tech into stories people feel. The stage is where curiosity meets courage.",
    accent: "#f472b6",
  },
  {
    title: "Empowering Women",
    emoji: "💜",
    description:
      "I mentor, organize, and show up for women entering tech — because representation is built one open door at a time.",
    accent: "#a78bfa",
  },
  {
    title: "Traveling the World",
    emoji: "🌍",
    description:
      "I've collected stories across continents. Every new place rewires how I think, design, and connect with people.",
    accent: "#fbbf24",
  },
];

export const highlights = [
  {
    title: "Silicon Valley Fellowship",
    detail:
      "Selected for a Silicon Valley fellowship — learning from the heart of global tech and bringing that energy home.",
    accent: "#22d3ee",
  },
  {
    title: "Women in Tech Advocate",
    detail:
      "Speaking, mentoring, and building community to help more women thrive in engineering.",
    accent: "#a78bfa",
  },
  {
    title: "Events & Community",
    detail:
      "A regular at hackathons, conferences, and tech meetups — always learning, always connecting.",
    accent: "#f472b6",
  },
];

export const skills = [
  "Python",
  "JavaScript / React",
  "Next.js / TypeScript",
  "Java / Spring Boot",
  "Django",
  "AI · GPT · TensorFlow",
  "LangChain",
  "Azure & Terraform",
  "Docker & GitHub Actions",
  "SQL / Databases",
];
