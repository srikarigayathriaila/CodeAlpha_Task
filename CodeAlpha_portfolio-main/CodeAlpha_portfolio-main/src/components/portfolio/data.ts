import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectTaskmanager from "@/assets/project-taskmanager.jpg";
import projectCalculator from "@/assets/project-calculator.jpg";
import projectGallery from "@/assets/project-gallery.jpg";

// ─────────────────────────────────────────────────────────────
// Personal info — edit these to customize the portfolio.
// ─────────────────────────────────────────────────────────────
export const profile = {
  name: "Alex Carter",
  roles: [
    "Aspiring Full Stack Developer",
    "Python Programmer",
    "Problem Solver",
  ],
  tagline: "Aspiring Full Stack Developer | Python Programmer | Problem Solver",
  intro:
    "I'm a Computer Science student who loves turning ideas into clean, functional web experiences. I enjoy building with the MERN stack, writing Python, and sharpening my data structures along the way.",
  email: "alex.carter@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  resumeUrl: "/resume.pdf", // place your resume in /public/resume.pdf
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const education = [
  {
    period: "2022 — 2026",
    title: "B.S. in Computer Science",
    place: "State University",
    detail:
      "Focused on full stack web development, data structures & algorithms, and software engineering. GPA 3.8/4.0.",
  },
  {
    period: "2020 — 2022",
    title: "High School Diploma",
    place: "Lincoln High School",
    detail: "Graduated with honors. President of the coding club and math olympiad participant.",
  },
];

export type SkillCategory = {
  category: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 78 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
    ],
  },
];

export const projects = [
  {
    title: "Personal Portfolio Website",
    image: projectPortfolio,
    description:
      "A responsive, animated portfolio built with React showcasing my work, skills, and contact details.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "MERN Task Management Dashboard",
    image: projectTaskmanager,
    description:
      "A full stack productivity app with authentication, drag-and-drop boards, and real-time analytics.",
    tech: ["MongoDB", "Express", "React", "Node"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Calculator App",
    image: projectCalculator,
    description:
      "A sleek calculator with keyboard support and a glassmorphism UI handling chained operations.",
    tech: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Image Gallery Website",
    image: projectGallery,
    description:
      "A masonry image gallery with lightbox preview, lazy loading, and category filtering.",
    tech: ["React", "API", "CSS Grid"],
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export const achievements = [
  {
    icon: "trophy",
    title: "1st Place — University Hackathon",
    org: "State University, 2024",
    detail: "Led a team of four to build an AI study assistant in 36 hours.",
  },
  {
    icon: "badge",
    title: "Full Stack Web Development",
    org: "Coursera Certificate, 2023",
    detail: "Completed an in-depth specialization covering the MERN stack.",
  },
  {
    icon: "briefcase",
    title: "Software Engineering Intern",
    org: "TechStart Inc., Summer 2024",
    detail: "Built internal dashboards and shipped features used by 2k+ users.",
  },
  {
    icon: "code",
    title: "500+ Problems Solved",
    org: "LeetCode & HackerRank",
    detail: "Consistent practice in algorithms and data structures.",
  },
];