"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Driven to craft impactful web experiences, 
        I'm an eager <span className="font-medium">front-end developer</span> with a passion for <span className="underline font-medium">Javascript and ReactJS</span>, coupled with good English skills. 
        While proficient in <span className="underline font-medium">ASP.NET Core</span>, my focus lies in <span className="italic">designing user-centric interfaces</span> that engage and delight audiences. 
        My strong <span className="font-medium">problem-solving skills</span>, <span className="font-medium">collaborative spirit</span>, and <span className="font-medium">thirst for learning</span> make me a dedicated teammate ready to contribute to innovative projects in a fast-paced environment.

        I am also familiar with <span className="underline font-medium">TypeScript</span>. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and reading novels. 
        I also how to play the guitar. I also enjoy{" "}
        <span className="font-medium">playing sports and learning new things</span>. 
        I am currently learning about{" "}
        <span className="font-medium">microservices and their architectures</span>. 
      </p>
    </motion.section>
  );
}
