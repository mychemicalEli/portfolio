"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaAngular,
  FaJava,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiAdobecreativecloud,
  SiDotnet,
  SiTypescript,
} from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "Hi! I'm Elizabeth — a curious mix of code, creativity, and someone who still carries film rolls like it's the '90s. I love reading, adore animals (seriously, all of them), and I'm always up for learning something new — as long as there's coffee involved.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Elizabeth Blanco",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+34) 692 11 66 26",
    },
    {
      fieldName: "Experience",
      fieldValue: "Junior",
    },
    {
      fieldName: "Email",
      fieldValue: "elizabethblancomendez97@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Murcia, Spain",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
  ],
};

//experience data
const experience = {
  title: "My experience",
  description:
    "Here you'll find my full journey — not just web development roles, but every job that’s helped shape who I am today. From different industries and experiences, each one added a piece to the puzzle.",
  items: [
    {
      company: "Nunsys",
      position: "Full Stack Developer Intern",
      duration: "Oct 2024 - Dic 2024",
    },
    {
      company: "Primor",
      position: "Sales Assistant",
      duration: "2022 - 2023",
    },
    {
      company: "Inglot",
      position: "Makeup artist",
      duration: "Feb 2022 - Apr 2022",
    },
    {
      company: "Dunkin Coffee",
      position: "Waitress",
      duration: "2021 - 2022",
    },
    {
      company: "La Industrial de Fotografía",
      position: "Photography Assistant Intern",
      duration: "Jan 2019 - Jun 2019",
    },
  ],
};

//education experience
const education = {
  title: "My education",
  description:
    "It started with color theory and typography, got a glam twist with makeup brushes, and now it's all about clean code and clever UI. My education's been anything but ordinary — and I wouldn't have it any other way.",
  items: [
    {
      institution: "Ilerna",
      degree: "Web Application Development",
      duration: "2023 - 2025",
    },
    {
      institution: "Nuria Sendra Makeup School",
      degree: "Professional Make Up and FX effects",
      duration: "2020 - 2021",
    },
    {
      institution: "Murcia School of Design",
      degree: "Graphic Design",
      duration: "2015 - 2019",
    },
    {
      institution: "IES Mar Menor",
      degree: "High School Diploma in Social Sciences",
      duration: "2013 - 2015",
    },
  ],
};

//skills data
const skills = {
  title: "My Skills",
  description:
    "These are some of my standout skills — though they’re always growing and evolving.",
  skillList: [
    {
      icon: <FaAngular />,
      name: "angular",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiDotnet />,
      name: "C#",
    },
    {
      icon: <FaGitAlt />,
      name: "Git version control",
    },
    {
      icon: <SiAdobecreativecloud />,
      name: "Adobe Creative Cloud",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/** content */}
          <div className="min-h-[70vh] w-full">
            {/** experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2D3250] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2D3250] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[800px] text-white/60">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[80px] bg-[#2D3250] rounded-xl flex justify-center items-center group">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/** about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col sm:flex-row  gap-1 sm:gap-4 break-words"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
