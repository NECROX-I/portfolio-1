export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  number: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  outcome: string;
  links: ProjectLink[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  /** Short live-status line shown in the hero status panel, e.g. "Available for opportunities" */
  availability: string;
  /** e.g. "June 2026" */
  graduation: string;
  /** e.g. "Open to relocate" */
  relocation: string;
  /** IANA time zone used to drive the live clock, e.g. "Asia/Kolkata" */
  timeZone: string;
}

export interface Education {
  institution: string;
  degree: string;
  specialization: string;
  year: string;
  cgpa?: string;
}
