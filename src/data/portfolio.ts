import type { Education, Profile, Project, SkillGroup } from "../types";

export const profile: Profile = {
  name: "Rahul Naskar",
  role: "Software Engineer",
  tagline:
    "I build reliable backend systems and practical full-stack products.",
  location: "Kolkata, India",
  email: "naskarrahul620@gmail.com",
  github: "https://github.com/NECROX-I",
  linkedin: "https://www.linkedin.com/in/rahul-naskar-677396283/",
  resume: "/rahulnaskarcv.pdf",
  availability: "Available for opportunities",
  graduation: "June 2026",
  relocation: "Open to relocate",
  timeZone: "Asia/Kolkata",
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Shrtr-io",
    type: "Distributed URL Shortener",
    description:
      "A distributed URL shortening platform focused on low-latency redirects, scalable services, automated infrastructure, and observability.",
    stack: [
      "TypeScript",
      "Node.js",
      "Cloudflare Workers",
      "Kubernetes",
      "Terraform",
      "Argo CD",
    ],
    outcome: "Sub-10ms global redirects",
    links: [
      { label: "Live", href: "https://shrtr-frontend.vercel.app/" },
      { label: "GitHub", href: "https://github.com/NECROX-I/shrtr" },
    ],
  },
  {
    number: "02",
    title: "Curate-LLM",
    type: "Data & Backend Platform",
    description:
      "A multimodal annotation platform built around FastAPI and Label Studio for authenticated and role-based data curation workflows.",
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "OAuth"],
    outcome: "Structured annotation workflows",
    links: [
      { label: "Live", href: "https://curate-llm.vercel.app/" },
    ],
  },
  {
    number: "03",
    title: "giitz",
    type: "Developer Tooling",
    description:
      "A Git workflow automation CLI for smart pushing, rebasing, branch management, and AI-assisted commit messages.",
    stack: ["Node.js", "Bash", "Git", "GitHub Actions", "npm"],
    outcome: "120+ weekly npm downloads",
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/@necrox/giitz" },
      { label: "GitHub", href: "https://github.com/NECROX-I/giitz" },
    ],
  },
  {
    number: "04",
    title: "APIVersionShield",
    type: "API Governance",
    description:
      "A backend service that evaluates API contract changes and detects potentially breaking schema changes before deployment.",
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "JSON Schema",
    ],
    outcome: "Automated API compatibility checks",
    links: [
      { label: "GitHub", href: "https://github.com/NECROX-I/APIVersionShield" },
    ],
  },
  {
    number: "05",
    title: "SkillX",
    type: "Full Stack Platform",
    description:
      "A skill exchange platform with peer matching, session booking, authentication, a credit-based wallet, and real-time communication.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Docker"],
    outcome: "Real-time skill exchange",
    links: [
      { label: "Live", href: "https://skillx-alpha.vercel.app/" },
      { label: "GitHub", href: "https://github.com/NECROX-I/skillx" },
    ],
  },
  {
    number: "06",
    title: "PingWatch",
    type: "Monitoring Platform",
    description:
      "An uptime monitoring application with a React client, Express API, background monitoring worker, authentication, and persistent monitoring data.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Docker"],
    outcome: "Continuous endpoint monitoring",
    links: [
      { label: "Live", href: "https://pingwatch-olive.vercel.app/" },
      { label: "GitHub", href: "https://github.com/NECROX-I/pingwatch" },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  { title: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "SQL"] },
  {
    title: "Cloud & DevOps",
    items: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Argo CD",
      "AWS",
      "Linux",
      "CI/CD",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Git",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Microservices",
      "System Design",
    ],
  },
];

export const education: Education = {
  institution: "Swami Vivekananda University",
  degree: "B.Tech — Computer Science & Engineering",
  specialization: "Artificial Intelligence & Machine Learning",
  year: "2026",
  cgpa: "8.69 / 10",
};
