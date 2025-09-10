import { BriefcaseBusiness } from "lucide-react";
import { ArrowBigDownDash } from "lucide-react";
import { CodeXml } from "lucide-react";
import { PenTool } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="relative px-3 flex flex-col my-10 justify-center items-center text-white w-full"
    >
      <div className=" w-[99%] flex  p-3 flex-col items-center justify-center my-5 mr-3 ml-1">
        <h2 className=" text-3xl font-bold ">
          <span className="text-glow">About</span>{" "}
          <span className="text-primary">Me</span>
        </h2>
        <div className="my-5 grid grid-cols-1 min-h-[500px] min-md:grid-cols-2 gap-4 w-[100%] card">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "tween" }}
            className=" text-lg p-5 indent-3 flex flex-col justify-center"
          >
            <h1 className="text-center text-2xl ">
              <span className="text-glow">Who is</span>&nbsp;
              <span className="text-primary">Faycel ?</span>
            </h1>
            <p className="my-3">
              Hi, I’m KEBAS Faycel a Web Developer and UI/UX Designer, on my way
              to becoming an AI Engineer.
            </p>
            <p className="my-3">
              I specialize in building clean, user-friendly websites using
              React, Tailwind, and modern web technologies.
            </p>
            <p className="my-3">
              I`am currently studying AI at ENSIA,I’m always exploring and
              learning the latest web technologies to keep my work modern and
              efficient.
            </p>

            <p>
              I’m open to collaborations, freelance work, and innovative
              projects — feel free to reach out
            </p>
            <div className="flex justify-center items-center">
              {" "}
              <a
                href="#contact"
                className="btn m-4 text-sm max-sm:text-[14px] flex justify-between items-center"
              >
                Get in Touch &nbsp;
                <BriefcaseBusiness size={"14px"} />
              </a>
            </div>
          </motion.div>
          <div className="grid grid-rows-3">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="card my-5 mx-6  flex flex-col roundex-lg justify-center  items-center gap-1 p-2 card-hover"
            >
              <div className=" flex w-full justify-start items-center ">
                <div className=" mx-3 text-primary rounded-full border-0 p-3 bg-primary/10">
                  <CodeXml size={"22px"} />
                </div>
                <div className=" text-left text-glow font-bold">
                  Web Development
                </div>
              </div>
              <div className="p-1 indent-2 max-sm:text-sm">
                Building responsive, modern websites using React, Tailwind CSS,
                and JavaScript.
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="card my-5 mx-6  card-hover flex flex-col roundex-lg justify-center  items-center gap-1 p-2"
            >
              <div className=" flex w-full justify-start items-center ">
                <div className=" mx-3 text-primary rounded-full border-0 p-3 bg-primary/10">
                  <PenTool size={"22px"} />
                </div>
                <div className=" text-left text-glow font-bold">
                  UI/UX Design
                </div>
              </div>
              <div className="p-1 indent-2 max-sm:text-sm">
                Designing intuitive and user-friendly interfaces,making sure
                users enjoy every interaction.
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="card my-5 mx-6 card-hover flex flex-col roundex-lg justify-center  items-center gap-1 p-2"
            >
              <div className=" flex w-full justify-start items-center ">
                <div className=" mx-3 text-primary rounded-full border-0 p-3 bg-primary/10">
                  <GraduationCap size={"22px"} />
                </div>
                <div className="text-left text-glow font-bold">Education</div>
              </div>
              <div className="p-1 indent-2 max-sm:text-sm">
                Student at The National Higher School of Artificial Intelligence
                (ENSIA), Algeria.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
