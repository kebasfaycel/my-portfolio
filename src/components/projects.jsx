import { title } from "framer-motion/client";
import portfolio from "../assets/projects/portfolio.png";
import Skills from "./skills";
import react from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwind.svg";
import framer from "../assets/skills/framer.svg";
import router from "../assets/skills/router.svg";
import { ExternalLink, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "My Personal Porftfolio",
      img: portfolio,
      tags: ["React", "Tailwind", "Framer motion"],
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
                    className="card m-1 card-hover p-2 h-[500px] flex flex-col items-center justify-evenly"
                  >
                    <div className="w-full flex justify-center overflow-hidden">
                      <img
                        src={project.img}
                        className="hover:scale-[1.2] hover:translate-x-5 overflow-hidden transition-all duration-200 rounded-2xl"
                      ></img>
                    </div>
                    <hr className="m-2 text-primary" />
                    <div className="my-4 p-1 flex justify-start w-full items-center">
                      <img src={react} className="w-8 m-1"></img>
                      <img src={tailwind} className="w-8 m-1"></img>
                      <img src={framer} className="w-8 m-1 h-6"></img>
                      <img src={router} className="w-8 m-1 h-6"></img>
                    </div>
                    <div>
                      <h1 className=" font-semibold text-xl text-center text-primary">
                        {" "}
                        {project.title}
                      </h1>
                      <p className="p-2 indent-3">
                        A responsive personal portfolio developed using React,
                        Tailwind CSS, and Framer Motion for smooth animations .
                      </p>
                    </div>
                    <div className="flex w-full flex-row justify-start items-center">
                      <a>
                        <Github className="m-1 hover:text-primary transition-all duration-200 hover:translate-x-[1px] hover:translate-y-[-1px]" />
                      </a>
                      <a>
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
