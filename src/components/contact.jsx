import {
  Github,
  Linkedin,
  LocateIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  SendHorizonal,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSnack } from "../contexts/SnackbarContext";
export default function Contact() {
  const handleclick = useSnack();
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <>
      <section
        id="contact"
        className="relative  z-80 px-3 flex flex-col justify-center items-center w-full text-white"
      >
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-3xl text-center font-bold">
            {" "}
            <span className="text-primary">Get In </span>
            <span className="text-glow">Touch</span>
          </h1>
          <div className="grid grid-cols-1 jusctify md:grid-cols-2 gap-10 m-3 my-10">
            <div className=" min-h-[400px] flex flex-col items-center justify-start p-1">
              <h1 className="font-semibold text-2xl text-glow m-3">
                Contact Information
              </h1>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className=" h-20 w-full flex justify-start items-center p-4"
              >
                <div className="rounded-full w-14 m-2 h-14 bg-primary/20 flex justify-center items-center">
                  <Mail className="text-primary" />
                </div>
                <div className=" flex flex-col m-2 justify-center items-start">
                  <span className="font-semibold text-glow"> Email</span>
                  <span className="hover:text-primary/70 transition-all duration-200">
                    <a href="mailto:kebasfaycel2006@gmail.com">
                      kebasfaycel2006@gmail.com
                    </a>{" "}
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className=" h-20 w-full flex justify-start items-center p-4"
              >
                <div className="rounded-full w-14 m-2 h-14 bg-primary/20 flex justify-center items-center">
                  <Phone className="text-primary" />
                </div>
                <div className=" flex flex-col m-2 justify-center items-start">
                  <span className="font-semibold text-glow">Phone </span>
                  <span>
                    <a
                      href="tel:+213775538410"
                      className="hover:text-primary/70 transition-all duration-200"
                    >
                      +213775538410
                    </a>
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className=" h-20 w-full flex justify-start items-center p-4"
              >
                <div className="rounded-full w-14 m-2 h-14 bg-primary/20 flex justify-center items-center">
                  <MapPin className="text-primary" />
                </div>
                <div className=" flex flex-col m-2 justify-center items-start">
                  <span className="font-semibold text-glow"> Location</span>
                  <span className="hover:text-primary/70 transition-all duration-200">
                    {" "}
                    Tissemsilt, Algeria
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h1 className="text-glow my-3">Connect With Me</h1>
                <div className="flex justify-evenly">
                  <a
                    href="https://www.linkedin.com/in/faycel-kebas-059370353?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKoZyNPa9TEilGlmf57hHIA%3D%3D"
                    target="_blank"
                    className="hover:text-primary/70 transition-all duration-300 hover:scale-[1.1] cursor-pointer"
                  >
                    <Linkedin />
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/kebasfaycel"
                    className="hover:text-primary/70 transition-all duration-300 hover:scale-[1.1] cursor-pointer"
                  >
                    <Github />
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              onSubmit={(e) => {
                e.preventDefault();
                setFormInputs({ name: "", email: "", message: "" });
                handleclick();
              }}
              className="card min-h-[600px] flex flex-col justify-evenly p-3 items-center"
            >
              <h1 className="text-glow text-xl font-semibold">
                Send a Message
              </h1>

              <motion.label
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                htmlFor="name"
              >
                Your Name:{" "}
              </motion.label>
              <motion.input
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                value={formInputs.name}
                onChange={(e) => {
                  setFormInputs({ ...formInputs, name: e.target.value });
                }}
                type="text"
                id="name"
                required
                name="name"
                placeholder="KEBAS Faycel"
                autoComplete="false"
                className="w-[90%] p-3 rounded-md card focus:outline-hidden bg-primary/7 backdrop-blur-2xl"
              ></motion.input>
              <motion.label
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                htmlFor="email"
              >
                Your Email:{" "}
              </motion.label>
              <motion.input
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                value={formInputs.email}
                onChange={(e) => {
                  setFormInputs({ ...formInputs, email: e.target.value });
                }}
                type="text"
                required
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-[90%] p-3 bg-primary/7 backdrop-blur-2xl rounded-md card focus:outline-hidden"
              ></motion.input>
              <motion.label
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                htmlFor="message"
              >
                Your Message:{" "}
              </motion.label>

              <motion.textarea
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                value={formInputs.message}
                onChange={(e) => {
                  setFormInputs({ ...formInputs, message: e.target.value });
                }}
                name="message"
                required
                id="message"
                placeholder="Hello, I would like to talk about..."
                className="w-[90%] bg-primary/7 backdrop-blur-2xl p-3 rounded-md card focus:outline-hidden min-h-32"
              ></motion.textarea>
              <motion.button
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                type="submit"
                className="btn rounded-md flex justify-center  px-4 items-center bg-primary/40 backdrop-blur-2xl text-primary font-bold"
              >
                Send Message &nbsp; <Send size={"16px"} />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
