import { useState } from "react";
import { cn } from "../libs/utility";
import "../index.css";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { motion, useScroll } from "framer-motion";
// import { TextAlignJustify } from "lucide-react";
export default function NavBar() {
  const { scrollYProgress } = useScroll();
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={cn(
        "fixed top-0 w-full h-15 z-90 p-5 transition-all duration-300",
        " backdrop-blur-xl shadow-sm flex items-center",
        "bg-black/5  "
      )}
    >
      <div className=" flex justify-between items-center w-full px-4">
        <a className={cn(isOpen ? "z-50" : "", "h-12  flex items-center")}>
          <span className={"text-white  font-bold text-2xl block "}>
            <span className="text-glow">Faycel's</span>
            <span className="text-primary"> Portfolio</span>
          </span>
        </a>
        <div className="w-1/3 h-12 flex items-center justify-end max-sm:hidden  rounded-2xl border-primary">
          {navItems.map((item) => {
            return (
              <a
                href={item.href}
                className="text-white hover:text-primary mx-3 text-md z-50 transition-all duration-500 font-bold text-glow hover:translate-y-[-2px]"
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <button
          className=" text-white z-50 fixed right-5 opacity-100 hover:cursor-pointer min-sm:hidden transition-all duration-200"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        <div
          className={cn(
            "fixed inset-0 flex flex-col justify-center ",
            "items-center backdrop-blur-3xl bg-black/95 h-screen transition-all duration-300 min-sm:hidden",
            !isOpen ? "hidden" : ""
          )}
        >
          <div className={cn("flex flex-col justify-center items-center")}>
            {navItems.map((item) => {
              return (
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white  hover:text-primary mx-3 my-2 text-center text-md z-50 transition-all duration-500 font-bold hover:translate-y-[-2px]"
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          originX: 0,
          backgroundColor: "#9d4edd",
          // boxShadow: "5px 5px 20px rgba(157, 78, 221, 1)",
        }}
      />
    </nav>
  );
}
