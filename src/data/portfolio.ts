import type { Project, SkillCategory, EducationItem, Achievement } from "./types";

export const projects: Project[] = [
  {
    title: "SolveForge – Online Coding Platform",
    description:
      "Full-stack coding platform supporting 5+ programming languages with real-time code execution, AI-powered problem-solving assistant, and secure authentication. Designed for scalability, performance, and seamless learning experience.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "AWS",
      "Piston API",
      "Gemini AI",
      "JWT",
    ],
    liveLink: "https://solveforge.online/",
    githubLink: "https://github.com/anmol-tripathi83/SolveForge-Coding-platform",
    thumbnail: "/solveforge.png",
  },
    {
    title: "DesignForge – AI System Design Interview Platform",
    description:
      "Production-ready AI platform for practicing System Design interviews through interactive requirement gathering, architecture evaluation, and personalized AI feedback. Powered by an Agentic RAG pipeline to simulate realistic interview experiences with context-aware responses and visual architecture generation.",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "LangGraph",
      "Qdrant",
      "Gemini AI",
      "JWT",
      "Docker",
    ],
    liveLink: "https://design-forge-ai-eight.vercel.app/",
    githubLink: "https://github.com/anmol-tripathi83/DesignForge_AI",
    thumbnail: "/designforge.png",
  },
  {
    title: "DriftTalk – Real-Time Chat Platform",
    description:
      "Secure JWT authentication, real-time WebSocket messaging, scalable to 500+ users. Features themes and online/offline status for improved UX.",
    technologies: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
    liveLink: "https://chat-app-fndy.onrender.com/",
    githubLink: "https://github.com/anmol-tripathi83/CHAT-APP",
    thumbnail: "/drifttalk.png",
  },
  {
    title: "BioBranch – Personal Link Management Platform",
    description:
      "High-performance Linktree-style web app built using Next.js App Router with dynamic routing, reusable components, and SEO-optimized server-side rendering for fast load times and scalability.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Server Components",
      "Vercel",
    ],
    liveLink: "https://bio-branch-psi.vercel.app/",
    githubLink: "https://github.com/anmol-tripathi83/Bio_branch",
    thumbnail: "/biobranch.png",
  },
  {
    title: "Internet Of Journals – Research Management System",
    description:
      "Enterprise-grade research journal platform. Led development of role-based authorization system, implemented secure media handling using Cloudinary, and optimized MongoDB data models for high-performance manuscript processing.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "OAuth",
      "Cloudinary",
      "Stripe",
    ],
    githubLink: "https://github.com/raghunandandev/Editorial-Manager",
    thumbnail: "/ioj.png",
  },
  {
    title: "Pizza App – Full-Stack E-Commerce Platform",
    description:
      "Fully responsive ordering app with secure payments via Razorpay. Role-based access for users and admins.",
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Razorpay"],
    githubLink: "https://github.com/anmol-tripathi83/Pizza_App",
    thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=450&fit=crop",
  },
  {
    title: "AI-Powered Website Builder",
    description:
      "AI-based tool that builds websites using real-time code creation, live previews, and automated bundling through the Gemini API.",
    technologies: ["Node.js", "Gemini API", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/your-repo-link",
    thumbnail: "webbuilder.png",
  },
  {
    title: "AI-Powered DSA Instructor",
    description:
      "AI-driven assistant for DSA learning that provides step-by-step explanations, validates logic, and gives structured hints while enforcing strict DSA-focused responses.",
    technologies: ["Node.js", "Gemini API", "REST APIs", "HTML", "CSS", "JS"],
    githubLink: "https://github.com/anmol-tripathi83/DSA_INSTRUCTOR",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
  },
];

export const skillCategories: SkillCategory[] = [
  { title: "Languages", skills: ["C", "C++", "JavaScript", "TypeScript", "Python", "SQL"] },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "HTML", "CSS", "Redux", "ShadCN UI"],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Next.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "AI/ML & Emerging Tech",
    skills: ["GenAI", "RAG", "Vector Databases", "Pinecone", "Langgraph"],
  },
  {
    title: "Concepts",
    skills: ["OOPs", "DSA", "System Design", "OS", "DBMS", "CN", "Compiler Design"],
  },
  {
    title: "Cloud & Tools & ORM",
    skills: [
      "AWS EC2",
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "Microsoft SQL Server",
      "Prisma",
      "Render",
      "Vercel",
    ],
  },
  {
    title: "Soft Skills",
    skills: ["Problem-Solving", "Leadership", "Teamwork", "Adaptability", "Communication"],
  },
];

export const education: EducationItem[] = [
  {
    title: "B.Tech in Computer Science",
    institution: "Indian Institute of Information Technology, Sonepat",
    score: "9.06/10",
    scoreLabel: "CGPA",
    period: "2023 – 2027",
    icon: "graduation",
  },
  {
    title: "Higher Secondary Education",
    institution: "Dr. Rizvi Springfield School",
    score: "93.8%",
    scoreLabel: "Percentage",
    period: "2019 – 2021",
    icon: "book",
  },
  {
    title: "Secondary Education",
    institution: "BP Public School",
    score: "91.4%",
    scoreLabel: "Percentage",
    period: "2017 – 2019",
    icon: "school",
  },
];

export const achievements: Achievement[] = [
  {
    title: "LeetCode",
    description: "550+ problems solved",
    link: "https://leetcode.com/u/anmoltripathi8303/",
    linkLabel: "View Profile",
  },
  {
    title: "CodeChef",
    description: "3★ Coder (max rating 1612+)",
    link: "https://www.codechef.com/users/anmoltripathi8",
    linkLabel: "View Profile",
  },
  {
    title: "Other Achievements",
    description: "",
    link: undefined,
    linkLabel: undefined,
  },
];

export const otherAchievementsList = [
  "Secured 11th place among 50+ teams in the DigiGreen Hackathon.",
  "Selected twice for the internal Smart India Hackathon (SIH) rounds.",
  "Selected for the Prelims Round of CodeFest 2026 Global among 13000+ applicants.",
  "Solved 800+ coding problems across multiple platforms",
  "Top 10% of 50,000 applicants in Reliance Foundation Scholarship",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const sectionIds = navLinks.map((link) => link.href.slice(1));

export const socialLinks = {
  linkedin: "https://linkedin.com/in/anmoltripathi25",
  github: "https://github.com/anmol-tripathi83",
  email: "anmoltripathi8303@gmail.com",
  resume:
    "https://drive.google.com/file/d/1q3datPv9LZMm4f5UdxOQxsPpCdYfA8Te/view?usp=sharing",
};
