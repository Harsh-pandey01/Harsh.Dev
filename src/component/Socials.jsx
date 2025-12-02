import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { Link } from "react-router";

export default function Socials() {
  return (
    <div className="flex gap-3 items-center hover:brightness-100 cursor-pointer transition-all ease-in duration-100 ">
      <Link to={"https://leetcode.com/u/HarshPandey01/"} target="_blank">
        <TbBrandLeetcode className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
      </Link>
      <Link to={"https://github.com/Harsh-pandey01"} target="_blank">
        <FaGithub className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
      </Link>
      <Link
        to={"https://www.linkedin.com/in/harsh-pandey-014b32274/"}
        target="_blank"
      >
        <FaLinkedin className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
      </Link>
      <Link>
        <BsTwitterX className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
      </Link>
    </div>
  );
}
