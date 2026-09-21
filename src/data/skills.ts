import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa6";

export const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building fast, responsive, and modern user interfaces.",

    skills: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        level: "Advanced",
      },
      {
        name: "React",
        icon: SiReact,
        level: "Advanced",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        level: "Intermediate",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        level: "Advanced",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: "Advanced",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        level: "Advanced",
      },
    ]
  },

  {
    title: "Backend Development",

    description:
      "Creating secure and scalable server-side applications.",

    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        level: "Intermediate",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        level: "Intermediate",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        level: "Intermediate",
      },
    ],
  },

  {
    title: "Tools & Workflow",

    description:
      "Development tools I use every day.",

    skills: [
      {
        name: "Git",
        icon: SiGit,
        level: "Daily",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        level: "Daily",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        level: "Daily",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        level: "Daily",
      },
      {
        name: "Figma",
        icon: SiFigma,
        level: "Daily",
      },
    ]
  },
];