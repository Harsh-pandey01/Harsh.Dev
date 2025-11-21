import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

function Socials() {
  return (
    <div className="flex gap-3 items-center hover:brightness-100 cursor-pointer transition-all ease-in duration-100 ">
      <div>
        <TbBrandLeetcode className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
      </div>
      <div>
        <FaGithub className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
      </div>
      <div>
        <FaLinkedin className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
      </div>
      <div>
        <BsTwitterX className="text-2xl text-textSec hover:text-text transition-all ease-in duration-100" />
      </div>
    </div>
  );
}

export default Socials;
