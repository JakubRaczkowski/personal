import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiSqlite,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

export type Project = {
  title: string;
  description: string;
  image?: string;
  github: string;
  demo: string;
  technologies: string[];
};

import { IconType } from "react-icons/lib";

export const projects: Project[] = [
  {
    title: "Queue App",
    description:
      "Queue managment app which makes it easier for users to queue up and for businesses to keep track of and manage their queues.",
    image: "/jointheq.png",
    github: "https://github.com/JakubRaczkowski/Q",
    demo: "https://join-the-queue-client.onrender.com/",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Reddit Clone",
    description:
      "Features include post creation and browsing, commenting, and voting. Designed with a responsive UI and deployed on Vercel",
    image: "/reddit.png",
    github: "https://github.com/project2",
    demo: "https://demo.project2.com",
    technologies: ["NextJs", "Firebase", "ChakraUI", "TypeScript"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal website showcasing my skills and projects in web development.",
    image: "/personalSite.png",
    github: "https://github.com/project3",
    demo: "",
    technologies: ["Next.js", "ChakraUI", "TypeScript"],
  },
];

interface Skill {
  name: string;
  icon: IconType;
  color: string;

}
export const skills: Skill[] = [
  { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#007ACC" },
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3, color: "#1572B6" },
  { name: "React", icon: FaReact, color: "#00D8FF" },
  { name: "Next.js", icon: TbBrandNextjs, color: "#000000" },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Express", icon: SiExpress, color: "#858585" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "SQLite", icon: SiSqlite, color: "#003B57" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
];
