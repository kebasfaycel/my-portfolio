import { AnimatePresence, motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import htmllogo from "../assets/skills/HTML.svg";
import csslogo from "../assets/skills/CSS.svg";
import jslogo from "../assets/skills/JS.svg";
import reactlogo from "../assets/skills/react.svg";
import reduxlogo from "../assets/skills/redux.svg";
import routerlogo from "../assets/skills/router.svg";
import tailwindlogo from "../assets/skills/tailwind.svg";
import gitlogo from "../assets/skills/git.svg";
import linuxlogo from "../assets/skills/linux.svg";
import figmalogo from "../assets/skills/figma.svg";
import postmanlogo from "../assets/skills/postman.svg";
import cpplogo from "../assets/skills/cpp.svg";
import muilogo from "../assets/skills/mui.svg";
import framerlogo from "../assets/skills/framer.svg";
import { useState } from "react";
export default function Skills() {
  const logos = [
    htmllogo,
    csslogo,
    jslogo,
    reactlogo,
    reduxlogo,
    routerlogo,
    tailwindlogo,
    gitlogo,
    linuxlogo,
    figmalogo,
    postmanlogo,
    cpplogo,
    muilogo,
    framerlogo,
  ];
  const skills = [
    { name: "HTML", level: 90, category: "Frontend" },
    { name: "CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "React Js", level: 80, category: "Frontend" },
    { name: "Tailwind CSS", level: 75, category: "Frontend" },
    { name: "Git/GitHub", level: 60, category: "Tools" },
    { name: "Figma", level: 70, category: "Tools" },
    { name: "Canva", level: 70, category: "Tools" },
    { name: "Linux", level: 85, category: "Tools" },
    { name: "Latex", level: 75, category: "Tools" },
    { name: "Postman", level: 75, category: "Tools" },
    { name: "C++", level: 65, category: "Tools" },
  ];
  const [btn, setBtn] = useState("All");
  const Categories = ["All", "Frontend", "Tools", "Backend"];
  const Frontned = skills.filter((skill) => {
    return skill.category === "Frontend";
  });
  const Backend = skills.filter((skill) => {
    return skill.category === "Backend";
  });
  const Tools = skills.filter((skill) => {
    return skill.category === "Tools";
  });
  const skillsShow =
    btn === "All"
      ? skills
      : btn === "Frontend"
      ? Frontned
      : btn === "Tools"
      ? Tools
      : Backend;
  return (
    <section
      id="skills"
      className="relative z-80 px-3 flex flex-col justify-center items-center w-full text-white"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center font-bold">
          {" "}
          <span className="text-primary">My </span>
          <span className="text-glow"> Skills</span>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-[95%] m-5 bg-black/70"
        >
          <Marquee pauseOnHover={true} autoFill={true} speed={"40"}>
            {logos.map((s) => {
              return (
                <img
                  src={s}
                  className="w-16 m-2 cursor-pointer hover:scale-[1.2] transition-all duration-300"
                ></img>
              );
            })}
          </Marquee>
        </motion.div>
        <div className=" flex justify-center items-center h-14 my-4 card border-transparent">
          {Categories.map((cat, key) => {
            return (
              <div>
                <button
                  onClick={() => {
                    setBtn(cat);
                  }}
                  className={
                    "btn w-20 bg-transparent relative hover:text-primary rounded-none font-semibold text-glow "
                  }
                  style={{ color: btn === cat ? "#9d4edd" : "white" }}
                  key={key}
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "5px 5px 15px #9d4edd,-5px -5px 15px #9d4edd ",
                        "10px 10px 30px #9d4edd,-10px -10px 30px #9d4edd",
                      ],
                      scale: [0.95, 1.05],
                      opacity: [0.8, 1],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{ display: btn !== cat ? "none" : "block" }}
                    className="bg-primary w-2 h-2 rounded-full absolute top-1 right-1 backdrop-blur-md"
                  ></motion.div>
                  {cat}
                  <motion.div
                    className="w-full  h-[2px] bg-primary rounded-full"
                    style={{ display: btn !== cat ? "none" : "block" }}
                    initial={{ width: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05,
                    }}
                    whileInView={{ width: "100%" }}
                  ></motion.div>
                </button>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
          {skillsShow.map((skill, key) => {
            return (
              <AnimatePresence>
                <motion.div
                  key={key}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: `0.${3}` }}
                  className="flex justify-between p-3 items-center flex-col card card-hover h-28 "
                >
                  <div className="text-left w-full px-3 font-semibold text-lg text-glow">
                    <h2>{skill.name}</h2>
                  </div>
                  <div className="w-full h-2 bg-primary/40 rounded-full ">
                    <AnimatePresence>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        exit={{ width: 0 }}
                        transition={{
                          duration: 2,
                          delay: `0.${key + 1}`,
                          type: "spring",
                          stiffness: "50",
                        }}
                        className="h-2 bg-primary rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></motion.div>
                    </AnimatePresence>
                  </div>
                  <div className="w-full flex justify-end font-semibold text-glow  ">
                    <h2>{skill.level}%</h2>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </section>
  );
}
