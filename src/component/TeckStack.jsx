import { motion } from "motion/react";

function TeckStack() {
  return (
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
  );
}

export default TeckStack;
