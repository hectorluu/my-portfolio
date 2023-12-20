import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "High School Graduation",
    location: "Rach Gia City, Kien Giang Province",
    description:
      "I was a student of English-major class in high school for the gifted. I graduated with excellent level.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "English Semester Abroad",
    location: "Multimedia University, Cyberjaya, Malaysia",
    description:
      "I learned English and gained a Certificate of Attendance Semester Abroad Programme",
    icon: React.createElement(LuGraduationCap),
    date: "11/2019 - 12/2019",
  },
  {
    title: "Front-End Developer",
    location: "FPT Software",
    description:
      "I joined a 3-month internship program. I worked as a front-end developer and a tester on a project for a client in the Japan.",
    icon: React.createElement(FaReact),
    date: "9/2021 - 12/2021",
  },
  {
    title: "University Graduation",
    location: "FPT University, Ho Chi Minh City",
    description:
      "I graduated with a Bachelor's Degree in Software Engineering. The final project was a web app for managing the employees who take part in OJT programme in a software company.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "C#",
  "ASP.NET Core",
  "Git",
  "Postman",
  "Figma",
  "Tailwind",
  "Bootstrap",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "Python",
  "Framer Motion",
] as const;
