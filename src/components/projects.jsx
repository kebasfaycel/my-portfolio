import { title } from "framer-motion/client";
import portfolio from "../assets/projects/portfolio.png";
import Skills from "./skills";
import react from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwind.svg";
import framer from "../assets/skills/framer.svg";
import router from "../assets/skills/router.svg";
import { ExternalLink, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import evently from "../assets/projects/evently.png";
import signUp from "../assets/projects/signUp.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "My Personal Porftfolio",
      description:
        "A responsive personal portfolio developed using React Tailwind CSS, and Framer Motion for smooth animations ",
      img: portfolio,
      tags: [react, tailwind, framer, router],
      demo: "",
      repo: "",
    },
    {
      id: 2,
      title: "Evently",
      description:
        "Evently is a modern event management platform which allows users to create, manage, and discover events seamlessly",
      img: evently,
      tags: [
        "https://assets.vercel.com/image/upload/v1662136487/nextjs/Icon_dark_background.png",
        "https://cdn.simpleicons.org/typescript",
        "https://ui.shadcn.com/apple-touch-icon.png",
        "https://cdn.simpleicons.org/reacthookform",
        "https://cdn.simpleicons.org/zod",
        "https://cdn.simpleicons.org/mongoose",
        "https://cdn.simpleicons.org/mongodb",
        "https://uploadthing.com/favicon.ico",
        "https://next-auth.js.org/img/logo/logo-sm.png",
        react,
        tailwind,
        framer,
      ],
      demo: "",
      repo: "",
    },
    {
      id: 3,
      title: "Authentication",
      description:
        "A modern authentication system, featuring email/password login, OAuth providers, password reset, and a clean shadcn-powered UI",
      img: signUp,
      tags: [
        "https://assets.vercel.com/image/upload/v1662136487/nextjs/Icon_dark_background.png",
        tailwind,
        framer,
        "https://cdn.simpleicons.org/typescript",
        "https://cdn.simpleicons.org/mongoose",
        "https://cdn.simpleicons.org/mongodb",
        "https://next-auth.js.org/img/logo/logo-sm.png",
      ],
      demo: "",
      repo: "",
    },
  ];
  return (
    <section
      id="projects"
      className="relative px-3 flex flex-col justify-center items-center text-white w-full"
    >
      <div className=" w-[99%] flex  p-3 flex-col items-center justify-center my-5 mr-3 ml-1">
        <h2 className=" text-3xl font-bold ">
          <span className="text-primary">Featured</span>{" "}
          <span className="text-glow">Projects</span>
        </h2>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="m-5 mt-10 w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => {
              return (
                <AnimatePresence>
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: `${project.id}`,
                    }}
                    exit={{ opacity: 0 }}
                    className="card m-1 card-hover p-2 min-h-[500px] flex flex-col items-center justify-evenly"
                  >
                    <div className="w-full flex justify-center overflow-hidden">
                      <img
                        src={project.img}
                        className="hover:scale-[1.2] hover:translate-x-5 h-44 overflow-hidden transition-all duration-200 rounded-none"
                      ></img>
                    </div>
                    <hr className="m-2 text-primary" />
                    <div className="my-4 p-1 flex flex-wrap justify-start w-full items-center gap-2">
                      {project.tags.map((tag, key) => {
                        return (
                          <img
                            src={tag}
                            key={key}
                            className="w-7 h-7 object-contain"
                            alt="tech-logo"
                          />
                        );
                      })}
                    </div>
                    <div>
                      <h1 className=" font-semibold text-xl text-center text-primary">
                        {" "}
                        {project.title}
                      </h1>
                      <p className="p-2 indent-3">{project.description}</p>
                    </div>
                    <div className="flex w-full flex-row justify-start items-center">
                      <a target="_blank" href="">
                        <Github className="m-1 hover:text-primary transition-all duration-200 hover:translate-x-[1px] hover:translate-y-[-1px]" />
                      </a>
                      <a target="_blank" href="">
                        {" "}
                        <ExternalLink className="m-1 hover:text-primary transition-all duration-200 hover:translate-x-[1px] hover:translate-y-[-1px]" />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
