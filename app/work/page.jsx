"use client";

import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "Paticas",
    description:
      "Paticas is a web platform developed as my final project for the Web Application Development degree. It was designed to connect animal shelters in Murcia with people interested in adopting or volunteering. The project is built using Angular for the frontend and Spring Boot for the backend, providing an integrated system for managing animals, profiles, and adoption or volunteer requests.",
    stack: [
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "Bootstrap" },
      { name: "Java" },
      { name: "Springboot" },
      { name: "MySql" },
      { name: "Mockoon" },
      { name: "Figma" },
    ],
    images: [
      "/assets/work/paticas/login.png",
      "/assets/work/paticas/login2.png",
      "/assets/work/paticas/launch.png",
      "/assets/work/paticas/home2.png",
      "/assets/work/paticas/colabora.png",
      "/assets/work/paticas/colabora2.png",
      "/assets/work/paticas/detail.png",
      "/assets/work/paticas/detail2.png",
      "/assets/work/paticas/edit.png",
      "/assets/work/paticas/edit2.png",
      "/assets/work/paticas/profile.png",
      "/assets/work/paticas/profile2.png",
      "/assets/work/paticas/shelters.png",
      "/assets/work/paticas/protes2.png",
      "/assets/work/paticas/volunteers.png",
      "/assets/work/paticas/volunteers2.png",
    ],
    github: "https://github.com/mychemicalEli/paticas.git",
    figma:
      "https://www.figma.com/proto/Hrnr98kooEbTH14tkOVkGw/PATICAS?page-id=212%3A3064&node-id=212-3076&viewport=-2693%2C3726%2C0.25&t=lZqWo6dcmeD4QhqB-1&scaling=scale-down&starting-point-node-id=212%3A3076",
  },
  {
    num: "02",
    title: "Film library",
    description:
      "This Film Library is a simple yet powerful CRUD application that allows you to manage movies, actors, genres, cinemas, and admin users. Originally built as part of a Udemy course, it has been customized and refactored to follow clean architecture principles and strict separation of concerns, making it both practical and maintainable. Built with the latest versions of Angular (19) and .NET (9), it ensures compatibility with the newest features and best practices.",
    stack: [
      { name: "C#" },
      { name: ".NET" },
      { name: "Sql Server" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "Angular Material" },
    ],
    images: [
      "/assets/work/films/login.png",
      "/assets/work/films/login2.png",
      "/assets/work/films/landing.png",
      "/assets/work/films/landing2.png",
      "/assets/work/films/actor.png",
      "/assets/work/films/edit2.png",
      "/assets/work/films/detail.png",
      "/assets/work/films/detail2.png",
      "/assets/work/films/filters.png",
      "/assets/work/films/filters2.png",
      "/assets/work/films/users.png",
      "/assets/work/films/users2.png",
    ],
    github: "https://github.com/mychemicalEli/film-library.git",
  },
  {
    num: "03",
    title: "Kreitekfy",
    description:
      "Kreitekfy is a music streaming platform inspired by Spotify, created during my internship at Nunsys. It offers personalized playlists and customizable filters to improve your music experience. Users can explore song details, boost play counts with a click, and update their listening history smoothly. Developed with Angular, .NET Core, and Entity Framework, it follows clean architecture principles and uses LINQ for efficient data handling.",
    stack: [
      { name: "C#" },
      { name: ".NET" },
      { name: "LINQ" },
      { name: "Sql Server" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "Bootstrap" },
    ],
    images: [
      "/assets/work/spoty/login.png",
      "/assets/work/spoty/landing.png",
      "/assets/work/spoty/landing2.png",
      "/assets/work/spoty/list.png",
      "/assets/work/spoty/list2.png",
      "/assets/work/spoty/detail.png",
      "/assets/work/spoty/detail2.png",
      "/assets/work/spoty/detail-phone.png",
      "/assets/work/spoty/perfil.png",
      "/assets/work/spoty/profile2.png",
    ],
    github: "https://github.com/mychemicalEli/BOOTCAMP-PR-KREITEFY",
  },
  {
    num: "04",
    title: "User Management",
    description:
      "User Manager is a simple CRUD application I built to learn the basics of .NET and Angular. It includes pagination, filtering, and error handling for user management, making it a solid foundation for understanding key development concepts.",
    stack: [
      { name: "C#" },
      { name: ".NET" },
      { name: "LINQ" },
      { name: "Sql Server" },
      { name: "Angular" },
      { name: "TypeScript" },
      { name: "Bootstrap" },
    ],
    images: [
      "/assets/work/users/users.png",
      "/assets/work/users/users2.png",
      "/assets/work/users/edituser.png",
      "/assets/work/users/edit2.png",
      "/assets/work/users/errors.png",
      "/assets/work/users/errors2.png",
    ],
    github: "https://github.com/mychemicalEli/BOOTCAMP-PR-USUARIOS",
  },
  {
    num: "05",
    title: "Graphic Design Projects",
    description:
      "My Graphic Design Work is a collection of projects I created during my studies, where I discovered my love for photography and its many applications. Most of these pieces — including three magazines and a collection of books — are deeply rooted in visual storytelling and the power of typography. This work laid the foundation for the UI principles I still use today, combining aesthetics and clear communication in everything I do.",
    stack: [
      { name: "Photoshop" },
      { name: "Illustrator" },
      { name: "Lightroom" },
      { name: "Indesign" },
    ],
    images: [
      "/assets/work/design/books1.png",
      "/assets/work/design/magazine1.png",
      "/assets/work/design/magazine2.png",
      "/assets/work/design/magazine3.png",
      "/assets/work/design/magazine4.png",
    ],
  },
];

const ProjectItem = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`flex flex-col xl:flex-row ${
        index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
      } xl:gap-[30px] mb-12`}
    >
      <div className="w-full xl:w-[50%]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="xl:h-[520px] mb-8"
        >
          {project.images.map((img, idx) => (
            <SwiperSlide key={idx} className="w-full">
              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 overflow-hidden">
                {/* overlay */}
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={img}
                    fill
                    sizes="true"
                    alt="project image"
                    className="object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <WorkSliderBtns
            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
          />
        </Swiper>
      </div>
      <div className="w-full xl:w-[50%] flex flex-col justify-between">
        <div className="flex flex-col gap-[30px]">
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
          </div>
          <h2 className="text-[42px] font-bold leading-none text-white capitalize">
            {project.title}
          </h2>
          <div>
            <p
              className={`text-white/60 transition-all duration-300 ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              {project.description}
            </p>
            {project.description.length > 100 && (
              <button
                className="text-white font-bold mt-2 text-sm hover:underline"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            )}
          </div>
          <ul className="flex flex-wrap gap-4">
            {project.stack.map((item, idx) => (
              <li key={idx} className="text-lg text-accent font-semibold">
                {item.name}
                {idx !== project.stack.length - 1 && ","}
              </li>
            ))}
          </ul>

          <div className="flex gap-4 justify-end items-end p-0">
            {project.github && (
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            )}
            {project.figma && (
              <Link href={project.figma}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                      <FaFigma className="text-white text-xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Figma prototype</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
