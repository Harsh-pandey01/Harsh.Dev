import { motion, useAnimate } from "motion/react";
import React from "react";
import { IoMdPaperPlane } from "react-icons/io";

function Contact() {
  const [scope, animate] = useAnimate();

  const handleMessageSendClick = async () => {
    animate(".plane", {
      opacity: 0,
      width: 0,
    });
    await animate(".lucide", {
      width: "20px",
    });
    await animate(
      ".lucide",
      {
        rotate: 360 * 4,
      },
      {
        duration: 2,
      }
    );
    await animate(".textMsg", {
      scale: 0,
      opacity: 0,
    });

    await animate(
      ".btn",
      {
        width: 50,
        height: 50,
      },
      {
        duration: 0.3,
        ease: "easeIn",
      }
    );
    await animate(".btn", {
      borderRadius: "100px",
      backgroundColor: "var(--color-green-400)",
    });

    animate(".check", {
      opacity: 1,
    });
    await animate(".check path", {
      pathLength: 1,
      duration: 0.3,
    });
  };

  return (
    <div>
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

            <div className="mt-2" ref={scope}>
              <div className="">
                <button
                  type="button"
                  onClick={() => {
                    handleMessageSendClick();
                  }}
                  className="btn relative bg-text flex items-center gap-2 text-primary border border-border px-4 py-2 font-grot rounded-lg   cursor-pointer transition-all duration-100 "
                >
                  <IoMdPaperPlane className="plane" />
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
                    style={{
                      width: 0,
                    }}
                    class="lucide spinner lucide-loader-circle-icon lucide-loader-circle"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>

                  <div className="absolute  inset-0 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="check"
                      style={{
                        opacity: 0,
                        color: "#fff",
                      }}
                    >
                      <motion.path
                        d="M4 12 9 17 20 6"
                        initial={{
                          pathLength: 0,
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>

                  <p className="textMsg">Send Message</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
