// src/data/index.js

export const profile = {
  name: 'Rahul Naskar',
  role: 'Software Engineer · Backend · Cloud',
  tagline:
    'I design and build backend systems, cloud infrastructure, and developer-focused products.',
  location: 'Kolkata, India',
  email: 'naskarrahul620@gmail.com',
  github: 'https://github.com/NECROX-I',
  linkedin: 'https://www.linkedin.com/in/rahul-naskar-677396283/',
  resume: '/rahulnaskarcv.pdf',
  availability: 'Available immediately',
  graduation: 'June 2026',
  npmDownloads: '120+',
  relocation: 'Open to relocate',
}

export const projects = [
  {
    id: 'shrtr-io',
    title: 'Shrtr-io',
    type: 'DISTRIBUTED SYSTEM',
    number: '01',
    featured: true,
    description:
      'A distributed URL shortener designed around edge-based redirects, containerized infrastructure, and GitOps-driven deployment.',
    highlights: [
      'Edge redirects through Cloudflare Workers',
      'Infrastructure provisioned with Terraform',
      'Kubernetes deployments managed through Argo CD',
      'Monitoring with Prometheus',
    ],
    stack: [
      'TypeScript',
      'Node.js',
      'Cloudflare Workers',
      'Kubernetes',
      'Terraform',
      'Argo CD',
    ],
    outcome: 'Sub-10ms global redirects',
    status: 'live',
    links: [
      { label: 'Live', href: 'https://shrtr-frontend.vercel.app/' },
      { label: 'Source', href: 'https://github.com/NECROX-I/shrtr' },
    ],
  },
  {
    id: 'apiversion-shield',
    title: 'APIVersionShield',
    type: 'API GOVERNANCE',
    number: '02',
    featured: true,
    description:
      'A Spring Boot deployment-gate service that detects breaking API contract changes before they reach production.',
    highlights: [
      'Deep JSON Schema compatibility analysis',
      'SAFE / WARN / BLOCK deployment decisions',
      'Spring Security authentication',
      'Audit logging and automated testing',
    ],
    stack: [
      'Java 21',
      'Spring Boot',
      'PostgreSQL',
      'Spring Security',
      'JPA / Hibernate',
    ],
    outcome: 'Automated API compatibility enforcement',
    status: 'github',
    links: [
      { label: 'Source', href: 'https://github.com/NECROX-I/APIVersionShield' },
    ],
  },
  {
    id: 'curate-llm',
    title: 'Curate-LLM',
    type: 'DATA PLATFORM',
    number: '03',
    description:
      'A multimodal data-curation platform supporting authenticated and role-based annotation workflows for text, image, and multimodal datasets.',
    highlights: [
      'FastAPI backend architecture',
      'PostgreSQL persistence',
      'OAuth-based authentication',
      'SQLAlchemy data layer',
    ],
    stack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'OAuth',
    ],
    outcome: 'Structured multimodal annotation workflows',
    status: 'live',
    links: [
      { label: 'Live', href: 'https://curate-llm.vercel.app/' },
    ],
  },
  {
    id: 'giitz',
    title: 'giitz',
    type: 'DEVELOPER TOOLING',
    number: '04',
    description:
      'A CLI that automates common Git workflows including smart push, rebasing, branch management, and AI-assisted commit generation.',
    highlights: [
      'Automated Git workflows',
      'AI-assisted commit messages',
      'Tag-based release automation',
      'Published as an npm package',
    ],
    stack: [
      'Node.js',
      'TypeScript',
      'Bash',
      'GitHub Actions',
      'npm',
    ],
    outcome: '120+ weekly npm downloads',
    status: 'npm',
    links: [
      {
        label: 'npm',
        href: 'https://www.npmjs.com/package/@necrox/giitz',
      },
      {
        label: 'Source',
        href: 'https://github.com/NECROX-I/giitz',
      },
    ],
  },
  {
    id: 'pingwatch',
    title: 'PingWatch',
    type: 'MONITORING SYSTEM',
    number: '05',
    description:
      'An uptime-monitoring platform built around background workers, authenticated endpoints, persistent monitoring data, and containerized deployment.',
    highlights: [
      'Background monitoring worker',
      'JWT authentication',
      'Real-time endpoint status',
      'Docker-based deployment',
    ],
    stack: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Docker',
    ],
    outcome: 'Continuous endpoint monitoring',
    status: 'live',
    links: [
      { label: 'Live', href: 'https://pingwatch-olive.vercel.app/' },
      { label: 'Source', href: 'https://github.com/NECROX-I/pingwatch' },
    ],
  },
  {
    id: 'skillx',
    title: 'SkillX',
    type: 'FULL-STACK PLATFORM',
    number: '06',
    description:
      'A peer-to-peer skill exchange platform with session booking, credit management, OAuth authentication, and real-time communication.',
    highlights: [
      'Real-time notifications with Socket.IO',
      'OAuth authentication',
      'Credit wallet and session booking',
      'Dockerized application stack',
    ],
    stack: [
      'React',
      'Node.js',
      'MongoDB',
      'Socket.IO',
      'Docker',
    ],
    outcome: 'Real-time peer-to-peer platform',
    status: 'live',
    links: [
      { label: 'Live', href: 'https://skillx-alpha.vercel.app/' },
      { label: 'Source', href: 'https://github.com/NECROX-I/skillx' },
    ],
  },
]

export const skillGroups = [
  {
    title: 'Backend Engineering',
    description: 'Production-oriented application and API development',
    items: [
      'Java',
      'Spring Boot',
      'Node.js',
      'Express.js',
      'Python',
      'FastAPI',
      'REST APIs',
      'WebSockets',
      'OAuth 2.0',
      'Spring Security',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Containerized infrastructure and cloud deployment',
    items: [
      'Docker',
      'Kubernetes',
      'AWS',
      'Cloudflare Workers',
      'Terraform',
      'Ansible',
      'Argo CD',
      'Linux',
    ],
  },
  {
    title: 'Data & Persistence',
    description: 'Relational, document, and caching systems',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'SQL',
      'JPA / Hibernate',
      'SQLAlchemy',
      'Database Design',
    ],
  },
  {
    title: 'DevOps & Reliability',
    description: 'Automation, delivery, monitoring, and observability',
    items: [
      'GitOps',
      'CI/CD',
      'GitHub Actions',
      'Prometheus',
      'Grafana',
      'Observability',
      'Monitoring',
      'Microservices',
    ],
  },
  {
    title: 'Programming',
    description: 'Languages used across backend and infrastructure work',
    items: [
      'Java',
      'TypeScript',
      'Python',
      'JavaScript',
      'Bash',
      'SQL',
    ],
  },
  {
    title: 'Frontend',
    description: 'Modern interfaces for full-stack applications',
    items: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
    ],
  },
]

export const education = {
  institution: 'Swami Vivekananda University',
  degree: 'B.Tech — Computer Science & Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  year: '2022 – 2026',
  cgpa: '8.69 / 10',
}