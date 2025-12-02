import ScrollTrigger from "gsap/ScrollTrigger";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import Hero from "../component/Hero";
import ProjectCard from "../component/ProjectCard";
import { projectsData } from "../projectsData";
import TeckStack from "../component/TeckStack";
import About from "../component/About";
import Contact from "../component/Contact";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function Home() {
  useLayoutEffect(() => {
    // Create smoother instance
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 0.8,
      effects: true, // enable data-speed for parallax
    });

    return () => {
      smoother.kill(); // cleanup on unmount
    };
  }, []);

  return (
    <div id="smooth-wrapper" className=" bg-primary">
      <div className="overflow-x-clip  relative text-text px-5 min-h-screen w-full bg-primary ">
        <div id="smooth-content">
          <div className="max-w-3xl h-full mx-auto bg-primary text-text font-main">
            <Hero />
          </div>
          <div className="mt-10 pb-10 max-w-3xl h-full mx-auto bg-primary text-text font-main">
            <h1 className="text-xl font-grot">Projects</h1>

            <div className="w-full grid sm:grid-cols-2 grid-cols-1 mt-5 gap-5">
              {projectsData.slice(0, 4).map((data) => {
                return <ProjectCard data={data} />;
              })}
            </div>

            <div className="flex items-center justify-center mt-10">
              <Link
                to="/projects"
                className="px-7 mx-auto py-2 rounded-lg border text-sm cursor-pointer border-border shadow-[inset_0_0_3px_var(--color-secondry)] bg-primary font-grot"
              >
                View All Project
              </Link>
            </div>
          </div>
          {/* About Me Section */}

          <About />

          {/* My techStack */}

          <TeckStack />

          {/* Get in touch */}

          <Contact />

          <div className="max-w-3xl text-xl font-sec text-center mt-20 text-textSec mx-auto">
            Eat . Code . Sleep . Repeat
          </div>

          <div className="mt-10 max-w-3xl mx-auto text-center pb-10">
            <div className="flex items-center justify-center"></div>
            <h1 className="text-textSec font-grot mt-2">
              @ Developed by Harsh .
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
