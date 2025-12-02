import React from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { Link } from "react-router";

function About() {
  return (
    <div>
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
            I’m a frontend developer with a year of experience building fast,
            clean, and responsive web interfaces using React, Tailwind, and
            modern tooling. I focus on creating smooth user experiences with
            attention to detail and performance.
          </p>
          <p className="mt-5 flex  items-start gap-2">
            <span>
              <MdOutlineSubdirectoryArrowRight />
            </span>{" "}
            <p className="text-text/80 font-inter   ">
              I’ve also solved 350+ problems on{" "}
              <Link
                to={"https://leetcode.com/u/HarshPandey01/"}
                target="_blank"
                className="text-orange-300 underline cursor-pointer"
              >
                {" "}
                <img src="leetcode.png" className="h-5 px-2 inline" alt="" />
                LeetCode
              </Link>{" "}
              , strengthening my DSA and problem-solving skills.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
