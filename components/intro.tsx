"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hook";
import avatar from "@/public/avatar.jpg";
import dynamic from "next/dynamic";
import Loader from "@/components/Mini_Room_Loader";

const LazyLoadMini_Room = dynamic(() => import("../components/Mini_Room"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[80rem] text-center sm:mb-0 scroll-mt-28"
    >
      <div className="sm:flex sm:justify-between w-full">
        {" "}
        {/* Add this div */}
        <div className="sm:flex-4">
          <LazyLoadMini_Room />
        </div>
        <div className="sm:flex-6 mt-4 sm:mt-0">
          <div className="flex items-center justify-center">
            <div className="relative mt-6">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
              >
                <Image
                  src={avatar}
                  alt="Portrait"
                  width="576"
                  height="576"
                  quality="95"
                  priority={true}
                  className="h-60 w-60 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
              </motion.div>
            </div>
          </div>

          <motion.h1
            className="mb-10 mt-4 px-1 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hello, <span className="font-bold"> I'm Hung Luu (Hector)</span>.
            <br />I love building <span className="italic">websites</span>.{" "}
            <br />
            My focus is <span className="underline">Javascript</span> &{" "}
            <span className="underline">TypeScript</span>.
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition mr-2"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 mr-2"
              href="/LuuDucHung_FrontendDeveloper.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/hung-luu-007/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com/hectorluu"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
