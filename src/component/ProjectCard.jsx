import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { motion, useScroll } from "motion/react";
import { Link } from "react-router";

function ProjectCard({ data }) {
  const [hovered, setHovered] = useState("");
  return (
    <Link
      to={`/projectDetail/${data.id}`}
      className="bg-secondry border flex flex-col hover:shadow-xl  hover:dark:shadow-[0_12px_30px_rgba(2,6,200,0.3)] hover:border-dashed hover:border-border/90 cursor-pointer border-border/50 rounded-2xl overflow-clip"
    >
      <div className="md:h-50 relative h-60 rounded-md group">
        <img
          className="h-full relative object-cover z-1 w-full"
          src={data.banner}
          alt=""
        />
      </div>
      <div className="py-5 px-5 flex flex-col flex-1">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-text/80 font-inter text-xl font-semibold">
            {data.title}
          </h1>
          <div>
            {data.building && (
              <div className="bg-red-500/40 px-3 py-1 text-xs border border-red-600 rounded-md border-dotted">
                development
              </div>
            )}
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex items-center gap-4"
          >
            {/* GitHub */}
            <div
              onMouseEnter={() => setHovered("github")}
              onMouseLeave={() => setHovered("")}
              className="relative  flex flex-col items-center cursor-pointer"
            >
              {/* Animated floating label */}
              {hovered === "github" && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -10 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute z-5 -top-6 rounded-md font-medium
                      bg-primary border border-border shadow-2xl  text-xs text-text px-2 py-1
                        select-none pointer-events-none"
                >
                  Github
                </motion.span>
              )}
              <Link to={data.github} target="_b">
                <FaGithub className="text-2xl text-textSec hover:text-text transition-colors duration-150" />
              </Link>
            </div>

            {/* Live Link */}
            <div
              onMouseEnter={() => setHovered("live")}
              onMouseLeave={() => setHovered("")}
              className="relative flex flex-col items-center cursor-pointer"
            >
              {hovered === "live" && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -6 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="absolute -top-6 z-5 rounded-md font-medium
                      bg-primary border border-border shadow-2xl text-nowrap text-xs text-text px-2 py-1
                        select-none pointer-events-none"
                >
                  Live Link
                </motion.span>
              )}
              <Link to={data.liveLink} target="_blank">
                <RiExternalLinkFill className="text-2xl text-textSec hover:text-text transition-colors duration-150" />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-text/60 flex-1  py-6  font-grot leading-6">
          {data.description.length > 200
            ? data.description.slice(0, 200) + " ..."
            : data.description}
        </p>
        <div className="flex items-center gap-5">
          {data.techStack.map((tech) => {
            return (
              <div>
                <img className="h-6" src={tech} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
