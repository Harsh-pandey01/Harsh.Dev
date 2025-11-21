import React, { useRef } from "react";
import RiveAvatar from "../RiveAvatar";
import { BsDashLg } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import Socials from "./Socials";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const scrollerRefForDes = useRef(null);

  useGSAP(
    () => {
      gsap.to(scrollerRefForDes.current, {
        y: "-67%",
        duration: 1,
        scrollTrigger: {
          trigger: scrollerRefForDes.current,
          start: "10% 50%",
          end: "bottom 50%",
          scrub: 2,
        },
      });
    },
    { scope: scrollerRefForDes }
  );
  return (
    <>
      <div className=" py-10 pt-40 shrink-0 flex justify-between gap-3.5 items-start transition-all  flex-col-reverse md:flex-row md:items-end">
        <div className="flex-1">
          <h1 className="text-4xl text-text  text-start font-main font-semibold ">
            Hello , I'm Harsh <BsDashLg className="inline" /> <br />
          </h1>
          <div className="w-full h-10 overflow-clip">
            <div ref={scrollerRefForDes}>
              <div className="text-4xl text-text  text-start font-main font-semibold">
                Frontend Developer .
              </div>
              <div className="text-4xl text-text  text-start font-main font-semibold">
                Programmer .
              </div>
              <div className="text-4xl text-text  text-start font-main font-semibold">
                Frontend Developer .
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <RiveAvatar />
        </div>
      </div>
      <h1 className="text-textSec tracking-normal leading-10 text-xl ">
        I build interactive web apps using{" "}
        <span className="px-2 py-1 rounded-md bg-highlight border border-border border-dashed text-text shadow-inner">
          <img className="h-5 inline" src="tailwind.svg" alt="" /> Tailwind
        </span>{" "}
        ,{" "}
        <span className="px-2 py-1 rounded-md bg-highlight border border-border border-dashed text-text shadow-inner">
          <img className="h-5 inline" src="react.svg" alt="" /> React
        </span>{" "}
        ,{" "}
        <span className="px-2 py-1 rounded-md bg-highlight border border-border border-dashed shadow-inner text-text">
          <img className="h-5 inline" src="redux.svg" alt="" /> Redux
        </span>{" "}
        ,{" "}
        <span className="px-2 py-1 rounded-md bg-highlight border border-border shadow-inner border-dashed text-text">
          <img className="h-5 inline" src="framer.png" alt="" /> Motion
        </span>{" "}
        ,{" "}
        <span className="px-2 py-1 rounded-md bg-highlight border border-border shadow-inner border-dashed text-text">
          <img className="h-5 inline" src="gsap.png" alt="" /> GSAP
        </span>{" "}
        . With a focus on UI design. Enthusiastic about Three.js , driven by a
        keen eye for design.
      </h1>

      <div className="mt-10">
        <button className="border flex items-center gap-2 group bg-highlight border-border px-4 cursor-pointer py-1.5 rounded-md shadow-inner">
          <IoDocumentTextOutline className="rotate-12 group-hover:rotate-0 transition-all ease-in-out duration-100 " />{" "}
          Resume / CV
        </button>
      </div>

      <div className="mt-10">
        <Socials />
      </div>
    </>
  );
}

export default Hero;
