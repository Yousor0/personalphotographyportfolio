import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Navbar from "./Navbar";
import AnimatedLetters from "../animations/AnimatedLetters";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [paddingTop, setPaddingTop] = useState(80);
  const { scrollY } = useScroll();
  const prevScrollY = useRef(0); // Track previous scroll position

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest <= 0) {
        // Always visible at top
        setHidden(false);
        setPaddingTop(100);
      } else if (latest > prevScrollY.current) {
        // Scrolling down
        setHidden(true);
        setPaddingTop(40);
      } else {
        // Scrolling up
        setHidden(false);
        setPaddingTop(40);
      }
      prevScrollY.current = latest;
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ opacity: 1 }}
      animate={{ opacity: hidden ? 0 : 1 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        paddingTop: paddingTop,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="pt-15 sm:pt-25 pb-0 sm:pb-10 flex flex-col gap-3 bg-white left-0 w-full z-50 shadow-sm"
    >
      <div className="flex flex-col gap-1 sm:flex-wrap px-0 items-center sm:flex-row sm:items-end sm:px-20">
        <Link to="/">
          <motion.h1
            whileTap={{ scale: 0.95 }}
            className="text-6xl sm:text-6xl md:text-7xl font-bold uppercase text-left text-black"
          >
            <AnimatedLetters
              text="Andrew Jiang"
              hoverY={-6}
              className="ease-in-out"
            />
          </motion.h1>
        </Link>
        <div className="mt-4 mb-6 w-full flex flex-col items-stretch sm:ml-auto sm:w-auto sm:items-end sm:mb-0">
          <Navbar />
        </div>
      </div>
    </motion.header>
  );
}
