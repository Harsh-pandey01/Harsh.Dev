import React, { useRef } from "react";
import RiveAvatar from "../RiveAvatar";
import { BsDashLg } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Socials from "./Socials";
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
          <img className="h-5 inline-block" src="tailwind.svg" alt="" />{" "}
          Tailwind CSS
        </span>{" "}
        ,{" "}
        <span className="px-2  py-1 rounded-md bg-highlight border border-border border-dashed text-text shadow-inner">
          <img className="h-5 inline" src="react.svg" alt="" /> React
        </span>{" "}
        ,{" "}
        <span className="px-2 py-1 rounded-md bg-highlight border border-border border-dashed shadow-inner text-text">
          <img className="h-5 inline-block" src="redux.svg" alt="" /> Redux
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

      <div className="mt-10 flex items-center gap-10">
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1RBFqthJlCPCJrD6kNm6TJTOjAN-uUqJ4/preview",
              "_blank"
            )
          }
          className="border flex items-center gap-2 group bg-highlight border-border px-4 cursor-pointer py-1.5 rounded-md shadow-inner"
        >
          <IoDocumentTextOutline className="rotate-12 group-hover:rotate-0 transition-all ease-in-out duration-100" />
          Resume / CV
        </button>

        <Socials />
      </div>

      <div className="mt-5">
        <div className="mt-4 font-main">
          <p className="flex items-center  gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide h-4 lucide-phone-icon lucide-phone"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>{" "}
            Phone : <span className="text-textSec">8707291028</span>
          </p>
          <p className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide h-4 lucide-mail-icon lucide-mail"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>{" "}
            Email : <span className="text-textSec">harshcse7571@gmail.com</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
