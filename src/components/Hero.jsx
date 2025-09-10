import { useTypewriter, Typewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ArrowBigDownDash } from "lucide-react";
import { Code } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { ArrowDown } from "lucide-react";
import hero from "../assets/heroLogo.svg";
export default function Hero() {
  const { text } = useTypewriter({
    words: ["Developer", "Designer"],
    loop: {},
  });
  return (
    <section
      id="hero"
      className="w-full relative min-h-screen py-12 flex justify-between items-center"
    >
      <div className="flex flex-row justify-evenly  items-center max-md:flex-col-reverse space-y-10 w-full">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.2,
            type: "spring",
          }}
          className="px-10 text-white max-md:text-center text-5xl max-sm:text-3xl font-bold h-96 w-full min-md:w-1/2 "
        >
          <span className="block my-4">Hi, </span>
          <span className="block my-4">I am Faycel </span>
          <span className="text-primary block my-4">
            <Typewriter
              words={["Web Developer", "UI/UX Designer", "Future AI Engineer"]}
              loop={0} // 0 = infinite
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
          <div className="flex justify-start  w-full max-md:justify-center items-center my-7">
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
          <div className="flex justify-start mb-7 items-center max-md:justify-center">
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
          className=" h-96 flex justify-center items-center w-full min-md:w-1/2"
        >
          <motion.img
            src={hero}
            initial={{ y: 0 }}
            animate={{
              y: [0, "10px", 0],
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="w-full h-full"
          ></motion.img>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, "10px", 0] }}
        transition={{
          duration: 1,
          delay: 0.3,
          repeat: Infinity,
          //   type: "spring",
          //   stiffness: "300",
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
