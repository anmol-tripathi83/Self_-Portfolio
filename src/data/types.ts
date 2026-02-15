export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  /** Thumbnail image URL (replace with your own later) */
  thumbnail?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  score: string;
  scoreLabel: string;
  period: string;
  icon: "graduation" | "book" | "school";
}

export interface Achievement {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const CONTACT_EMAIL = "anmoltripathi8303@gmail.com";
