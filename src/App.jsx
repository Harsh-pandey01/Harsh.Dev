import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "./component/Header";
import Hero from "./component/Hero";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { motion } from "motion/react";
import { IoMdPaperPlane } from "react-icons/io";
import Socials from "./component/Socials";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  useLayoutEffect(() => {
    // Create smoother instance
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.05,
      effects: true, // enable data-speed for parallax
    });

    return () => {
      smoother.kill(); // cleanup on unmount
    };
  }, []);

  // const quote = "Eat . Code . Sleep . Repeat";

  return (
    <div id="smooth-wrapper" className="overflow-hidden bg-primary">
      <div className="overflow-x-clip  relative text-text px-5 min-h-screen w-full bg-primary ">
        <Header />
        <div id="smooth-content">
          <div className="max-w-3xl h-full mx-auto bg-primary text-text font-main">
            <Hero />
          </div>
          <div className="mt-10 pb-10 max-w-3xl h-full mx-auto bg-primary text-text font-main">
            <h1 className="text-xl font-grot">Projects</h1>

            <div className="w-full grid sm:grid-cols-2 grid-cols-1 mt-5 gap-5">
              <div className="bg-secondry border border-border/50 rounded-2xl overflow-clip">
                <div className=" rounded-md ">
                  <img className="h-50 w-full" src="proj1.png" alt="" />
                </div>
                <div className="py-5 px-5">
                  <div className="w-full flex items-center justify-between">
                    <h1 className="text-text/80 font-inter text-2xl">CODEX</h1>
                    <div className="flex items-center gap-4">
                      <div>
                        <FaGithub className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
                      </div>
                      <RiExternalLinkFill className="text-2xl cursor-pointer text-text/90" />
                    </div>
                  </div>
                  <p className="text-text/70  py-6  font-grot leading-6">
                    Codex is an online code editor plateform . It supports
                    Javascript , Python , Java and C++ language . User can
                    create and solve the problems and admin dashboard provide
                    the progress and problems solved .
                  </p>
                  <div className="flex items-center gap-5">
                    <div>
                      <img className="h-6" src="react.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="javascript.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="firebase.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="redux.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondry border border-border/50 rounded-2xl overflow-clip">
                <div className=" rounded-md ">
                  <img className="h-50 w-full" src="proj1.png" alt="" />
                </div>
                <div className="py-5 px-5">
                  <div className="w-full flex items-center justify-between">
                    <h1 className="text-text/80 font-inter text-2xl">CODEX</h1>
                    <div className="flex items-center gap-4">
                      <div>
                        <FaGithub className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
                      </div>
                      <RiExternalLinkFill className="text-2xl cursor-pointer text-text/90" />
                    </div>
                  </div>
                  <p className="text-text/70  py-6  font-grot leading-6">
                    Codex is an online code editor plateform . It supports
                    Javascript , Python , Java and C++ language . User can
                    create and solve the problems and admin dashboard provide
                    the progress and problems solved .
                  </p>
                  <div className="flex items-center gap-5">
                    <div>
                      <img className="h-6" src="react.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="javascript.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="firebase.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="redux.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondry border border-border/50 rounded-2xl overflow-clip">
                <div className=" rounded-md ">
                  <img className="h-50 w-full" src="proj1.png" alt="" />
                </div>
                <div className="py-5 px-5">
                  <div className="w-full flex items-center justify-between">
                    <h1 className="text-text/80 font-inter text-2xl">CODEX</h1>
                    <div className="flex items-center gap-4">
                      <div>
                        <FaGithub className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
                      </div>
                      <RiExternalLinkFill className="text-2xl cursor-pointer text-text/90" />
                    </div>
                  </div>
                  <p className="text-text/70  py-6  font-grot leading-6">
                    Codex is an online code editor plateform . It supports
                    Javascript , Python , Java and C++ language . User can
                    create and solve the problems and admin dashboard provide
                    the progress and problems solved .
                  </p>
                  <div className="flex items-center gap-5">
                    <div>
                      <img className="h-6" src="react.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="javascript.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="firebase.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="redux.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondry border border-border/50 rounded-2xl overflow-clip">
                <div className=" rounded-md ">
                  <img className="h-50 w-full" src="proj1.png" alt="" />
                </div>
                <div className="py-5 px-5">
                  <div className="w-full flex items-center justify-between">
                    <h1 className="text-text/80 font-inter text-2xl">CODEX</h1>
                    <div className="flex items-center gap-4">
                      <div>
                        <FaGithub className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
                      </div>
                      <RiExternalLinkFill className="text-2xl cursor-pointer text-text/90" />
                    </div>
                  </div>
                  <p className="text-text/70  py-6  font-grot leading-6">
                    Codex is an online code editor plateform . It supports
                    Javascript , Python , Java and C++ language . User can
                    create and solve the problems and admin dashboard provide
                    the progress and problems solved .
                  </p>
                  <div className="flex items-center gap-5">
                    <div>
                      <img className="h-6" src="react.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="javascript.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="firebase.svg" alt="" />
                    </div>
                    <div>
                      <img className="h-6" src="redux.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-10">
              <button className="px-7 mx-auto py-2 rounded-lg border text-sm cursor-pointer border-border shadow-[inset_0_0_3px_var(--color-secondry)] bg-primary font-grot">
                View All Project
              </button>
            </div>
          </div>
          {/* About Me Section */}
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl font-grot">About Me</h1>
            <div className="mt-5 flex items-end gap-3">
              <img className="h-15 rounded-md" src="logo.png" alt="logo" />
              <p className="text-2xl font-grot font-semibold">Harsh Pandey</p>
            </div>
            <div className="mt-5">
              <div>
                <div className="flex items-start  justify-between text-textSec">
                  <h1 className="font-sec ">
                    B.E in Electronics and Telecommunication .
                  </h1>
                  <p>2021 - 2025</p>
                </div>
                <p className="text-textSec font-sec">CGPA - 8.5</p>
              </div>
              <p className="text-textSec mt-5 tracking-normal sm:text-xl  font-grot ">
                I’m a frontend developer with a year of experience building
                fast, clean, and responsive web interfaces using React,
                Tailwind, and modern tooling. I focus on creating smooth user
                experiences with attention to detail and performance.
              </p>
              <p className="mt-5 flex  items-start gap-2">
                <span>
                  <MdOutlineSubdirectoryArrowRight />
                </span>{" "}
                <p className="text-text/80 font-inter   ">
                  I’ve also solved 350+ problems on{" "}
                  <span className="text-orange-300 underline cursor-pointer">
                    {" "}
                    <img
                      src="leetcode.png"
                      className="h-5 px-2 inline"
                      alt=""
                    />
                    LeetCode
                  </span>{" "}
                  , strengthening my DSA and problem-solving skills.
                </p>
              </p>
            </div>
          </div>

          {/* My techStack */}

          <div className="mt-15 max-w-3xl mx-auto">
            <h1 className="text-xl font-grot text-text">Tech Stack / Skills</h1>
            <div className="flex flex-wrap items-center mt-5 gap-5">
              <motion.div
                whileHover={{
                  scale: 1.5,
                  y: 10,
                }}
              >
                <img className="h-8" src="javascript.svg" alt="" />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.5,
                  y: 10,
                }}
              >
                <img className="h-8" src="react.svg" alt="" />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.5,
                  y: 10,
                }}
              >
                <img className="h-8" src="redux.svg" alt="" />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.5,
                  y: 10,
                }}
              >
                <img className="h-8" src="tailwind.svg" alt="" />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.5,
                  y: 10,
                }}
              >
                <img className="h-8" src="firebase.svg" alt="" />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.5,
                  y: 10,
                }}
              >
                <img className="h-8" src="gsap.png" alt="" />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.5,
                  y: 10,
                }}
              >
                <img className="h-8" src="framer.png" alt="" />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.5,
                  y: 10,
                }}
              >
                <img className="h-8" src="cplusplus.png" alt="" />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.5,
                  y: 10,
                }}
              >
                <img className="h-8" src="github.png" alt="" />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.5,
                  y: 10,
                }}
              >
                <img className="h-8" src="git.png" alt="" />
              </motion.div>
            </div>
          </div>

          {/* Get in touch */}

          <div className="mt-15 max-w-3xl mx-auto">
            <div>
              <h1 className="flex items-center gap-2 text-xl font-grot">
                {" "}
                <IoMdPaperPlane />
                Get in touch
              </h1>
              <div className="my-5">
                <div className="grid sm:grid-cols-2 gap-5 ">
                  <div className="flex flex-col gap-1 font-sec">
                    <label htmlFor="name" className="text-textSec">
                      Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="px-4 py-2 bg-secondry outline-none text-sm font-grot border border-border rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-1 font-sec">
                    <label htmlFor="name" className="text-textSec">
                      Phone
                    </label>
                    <input
                      type="number"
                      placeholder="Contact Number"
                      className="px-4 py-2 bg-secondry outline-none text-sm font-grot border border-border rounded-lg"
                    />
                  </div>
                </div>
                <div className="mt-3 flex flex-col gap-1">
                  <label htmlFor="email" className="text-textSec">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your.email@gmail.com"
                    className="px-4 rounded-lg py-2 border font-grot bg-secondry border-border outline-none"
                  />
                </div>

                <div className="mt-3">
                  <h1 className="text-textSec">Message *</h1>

                  <textarea
                    name="message"
                    className="bg-secondry mt-1 p-4 border border-border outline-none rounded-lg w-full h-40"
                    id="message"
                    placeholder="Please leave a message ..."
                  ></textarea>
                </div>

                <div className="mt-2">
                  <button
                    type="button"
                    className=" bg-text flex items-center gap-2 text-primary border border-border px-4 py-2 font-grot rounded-lg   cursor-pointer transition-all duration-100 "
                  >
                    <IoMdPaperPlane />
                    Send Message{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl text-xl font-sec text-center mt-20 text-textSec mx-auto">
            Eat . Code . Sleep . Repeat
          </div>

          <div className="mt-10 max-w-3xl mx-auto text-center pb-10">
            <div className="flex items-center justify-center">
              <Socials />
            </div>
            <h1 className="text-textSec font-grot mt-2">
              @ Developed by Harsh .
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
