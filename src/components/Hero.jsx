import { useTypewriter, Typewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ArrowBigDownDash } from "lucide-react";
import { Code } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { OrbitingCircles } from "./OrbitingCircles";
import naruto from "../assets/narato.png";

import reactlogo from "../assets/skills/react.svg";
import reduxlogo from "../assets/skills/redux.svg";
import tailwindlogo from "../assets/skills/tailwind.svg";
import htmllogo from "../assets/skills/HTML.svg";
import csslogo from "../assets/skills/CSS.svg";
import jslogo from "../assets/skills/JS.svg";
import gitlogo from "../assets/skills/git.svg";
import figmalogo from "../assets/skills/figma.svg";
import framerlogo from "../assets/skills/framer.svg";
import muilogo from "../assets/skills/mui.svg";
import linuxlogo from "../assets/skills/linux.svg";
import postmanlogo from "../assets/skills/postman.svg";
import cpplogo from "../assets/skills/cpp.svg";
import routerlogo from "../assets/skills/router.svg";

const outerOrbit = [
  { name: "React", img: reactlogo },
  { name: "Next.js", img: "https://assets.vercel.com/image/upload/v1662136487/nextjs/Icon_dark_background.png" },
  { name: "TypeScript", img: "https://cdn.simpleicons.org/typescript" },
  { name: "Tailwind", img: tailwindlogo },
  { name: "Redux", img: reduxlogo },
  { name: "HTML", img: htmllogo },
  { name: "CSS", img: csslogo },
  { name: "JavaScript", img: jslogo },
  { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Express", img: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "MongoDB", img: "https://cdn.simpleicons.org/mongodb" },
  { name: "Bun", img: "https://bun.sh/logo.svg" },
  { name: "Hono", img: "https://cdn.simpleicons.org/hono" },
  { name: "Vite", img: "/vite.svg" },
  { name: "Vercel", img: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
];

const innerOrbit = [
  { name: "Figma", img: figmalogo },
  { name: "Framer", img: framerlogo },
  { name: "MUI", img: muilogo },
  { name: "Git", img: gitlogo },
  { name: "Linux", img: linuxlogo },
  { name: "Postman", img: postmanlogo },
  { name: "C++", img: cpplogo },
  { name: "React Router", img: routerlogo },
  { name: "Zod", img: "https://cdn.simpleicons.org/zod" },
  { name: "Mongoose", img: "https://cdn.simpleicons.org/mongoose" },
  { name: "Shadcn", img: "https://ui.shadcn.com/apple-touch-icon.png" },
  { name: "React Hook Form", img: "https://cdn.simpleicons.org/reacthookform" },
  { name: "PHP", img: "https://cdn.simpleicons.org/php" },
  { name: "pnpm", img: "https://cdn.simpleicons.org/pnpm" },
  { name: "Axios", img: "https://cdn.simpleicons.org/axios" },
];

export default function Hero() {
  const { text } = useTypewriter({
    words: ["Developer", "Designer"],
    loop: {},
  });
  return (
    <section
      id="hero"
      className="w-full relative min-h-screen max-md:min-h-[80vh] py-12 flex justify-between items-center"
    >
      <div className="flex flex-row justify-evenly items-center max-md:flex-col-reverse space-y-10 w-full">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.2,
            type: "spring",
          }}
          className="px-10 text-white max-md:text-center text-5xl max-sm:text-2xl font-bold h-96 w-full min-md:w-1/2 "
        >
          <span className="block my-4">Hi, </span>
          <span className="block my-4">I am Faycel </span>
          <span className="text-primary block my-4">
            <Typewriter
              words={["Web Developer", "UI/UX Designer", "Future AI Engineer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <span className="text-lg space-y-1 font-normal leading-0.5">
            I build modern, user-friendly, and visually appealing web
            applications.
          </span>
          <div className="flex justify-start mx-0 w-full max-md:justify-center items-center my-7">
            <a
              href="#projects"
              className="btn item-shadow flex justify-between  items-center"
            >
              View My Work &nbsp;
              <Code size={"14px"} />
            </a>
            <a className="btn item-shadow bg-transparent text-primary flex justify-between items-center">
              Download My Cv &nbsp;
              <ArrowBigDownDash size={"14px"} />
            </a>
          </div>
          <div className="flex justify-start mb-5 items-center max-md:justify-center">
            <a
              target="_blank"
              href="https://github.com/kebasfaycel"
              className="btn-icon"
            >
              {" "}
              <Github />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/faycel-kebas-059370353?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKoZyNPa9TEilGlmf57hHIA%3D%3D"
              className="btn-icon"
            >
              {" "}
              <Linkedin />
            </a>
            <a
              href="mailto:kebasfaycel@gmail.com"
              target="_blank"
              className="btn-icon"
            >
              <Mail />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.2,
            type: "spring",
          }}
          className="h-[650px] max-md:h-[450px] max-sm:h-[380px] flex justify-center items-center w-full min-md:w-1/2 relative overflow-hidden py-10 max-sm:py-16"
        >
          <div className="relative flex size-[550px] max-md:size-[350px] max-sm:size-[310px] items-center justify-center scale-[1] max-md:scale-[0.7] max-sm:scale-[0.65] my-10">
            {/* Outer orbit */}
            <OrbitingCircles iconSize={55} radius={250} duration={40}>
              {outerOrbit.map((tech) => (
                <img
                  key={tech.name}
                  src={tech.img}
                  alt={tech.name}
                  className="size-10 object-contain"
                  title={tech.name}
                />
              ))}
            </OrbitingCircles>
            {/* Inner orbit - reverse direction */}
            <OrbitingCircles iconSize={45} radius={150} duration={30} reverse>
              {innerOrbit.map((tech) => (
                <img
                  key={tech.name}
                  src={tech.img}
                  alt={tech.name}
                  className="size-8 object-contain"
                  title={tech.name}
                />
              ))}
            </OrbitingCircles>
            {/* Center image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img src={naruto} alt="Naruto" className="size-56 max-md:size-44 max-sm:size-36 object-contain drop-shadow-[0_0_20px_rgba(157,78,221,0.5)]" />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, "10px", 0] }}
        transition={{
          duration: 1,
          delay: 0.3,
          repeat: Infinity,
        }}
        className="hidden bottom-5 text-white w-10 max-md:right-10 min-md:left-1/2 text-glow cursor-pointer flex-col flex justify-center items-center"
      >
        <span>Scroll</span>
        <span className="text-primary ">
          <ArrowDown size={"18px"} />
        </span>
      </motion.div>
    </section>
  );
}
