import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ojtImg from "@/public/OJTProject.png";
import groceryImg from "@/public/GroceryProject.png";
import ecomerceImg from "@/public/ShopifyProject.png";

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
      "I joined a 3-month internship program. I worked as a developer and a tester on a project in FHM-CMS of FPT Software.",
    icon: React.createElement(FaReact),
    date: "9/2021 - 12/2021",
  },
  {
    title: "University Graduation",
    location: "FPT University, Ho Chi Minh City",
    description:
      "I graduated with a Bachelor's Degree in Software Engineering. The final project was a web app for managing the employees who take part in OJT program in a software company.",
    icon: React.createElement(LuGraduationCap),
    date: "12/2023",
  },
  {
    title: "Freelance Web Developer",
    location: "Ho Chi Minh City",
    description:
      "I worked as a freelance web developer. I built websites for small businesses and individuals.",
    icon: React.createElement(FaReact),
    date: "1/2024 - 6/2024",
  },
] as const;

export const projectsData = [
  {
    title: "OJT Management System",
    description:
      "This is an internal management system to manage employees participating in on-the-job training program.",
    tags: ["React", "Redux", "C# ASP.NET", "MS SQL Server", "Firebase"],
    imageUrl: ojtImg,
  },
  {
    title: "Grocery Store Management System",
    description:
      "This web application helps the store owners of small-to-medium-sized grocery stores to deal with a lot of daily problems.",
    tags: ["React", "TypeScript", "Redux", "C# ASP.NET", "Firebase"],
    imageUrl: groceryImg,
  },
  {
    title: "Ecommerce",
    description:
      "This web application was developed using Next.js 13 for an e-commerce platform.",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "Shopify"],
    imageUrl: ecomerceImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "CSS",
  "Redux",
  "Node.js",
  "C#",
  "ASP.NET Core",
  "Git",
  "Postman",
  "Figma",
  "Firebase",
  "Tailwind",
  "Bootstrap",
  "SQL Server",
  "MySQL",
  "MongoDB",
  "Framer Motion",
  "Jest",
] as const;
