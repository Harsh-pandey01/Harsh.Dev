import { GoMoon } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";
import gsap from "gsap";
import { motion, scale } from "motion/react";
import { Link } from "react-router";

function Header({ themeToggleRef }) {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // Create GSAP timeline
    const circleTimeLine = gsap.timeline({
      onComplete: () => {
        // Switch the theme *after* the circle covers the screen
        setTheme(newTheme);

        // Shrink the circle back to 0
        const t = gsap.timeline();
        t.to(themeToggleRef.current, {
          opacity: 0,
          duration: 0.6,
          scale: 0,
          ease: "power2.inOut",
        });
        t.to(themeToggleRef.current, {
          opacity: 1,
        });
      },
    });

    circleTimeLine.to(themeToggleRef.current, {
      scale: 150,
      duration: 1.2,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <div className=" w-full z-99  bg-primary/70 fixed px-3 left-0 top-0 min-h-15 py-5  backdrop-blur-md overflow-hidden">
        {/* Logo */}
        <div className="max-w-3xl mx-auto flex items-end justify-between">
          <motion.div
            whileHover={{
              scale: 0.85,
            }}
            className="h-10 rounded-md overflow-clip"
          >
            <Link to={"/"}>
              <img className="h-full" src="logo.png" alt="logo-image" />
            </Link>
          </motion.div>

          {/* Nav + Theme Toggle */}
          <div className="flex items-center gap-5">
            <div className="flex items-center font-normal font-robo gap-5">
              <Link to={"/projects"} className="cursor-pointer">
                Projects
              </Link>
            </div>

            <div className="relative border border-border border-dashed rounded-md shadow-inner px-2 py-2 flex items-center justify-center">
              {/* Toggle Button */}
              <button onClick={handleTheme} className="cursor-pointer z-10">
                {theme === "light" ? (
                  <IoSunnyOutline className="text-xl" />
                ) : (
                  <GoMoon className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
