/** @format */

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import ayush from '/ayush ai.png'
const Home = ({ darkMode, scrollToSection }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const nameVariants = ["AYUSH", "A Developer", "A Coder"];
  const typingSpeed = 150;
  const deletingSpeed = 80;
  const pauseDuration = 2000;

  // Floating elements data
  const floatingElements = [
    { id: 1, emoji: "⚛", size: 28, x: 10, y: 20, duration: 15, delay: 0 },
    { id: 2, emoji: "💻", size: 24, x: 85, y: 30, duration: 18, delay: 2 },
    { id: 3, emoji: "🎨", size: 22, x: 20, y: 70, duration: 20, delay: 1 },
    { id: 4, emoji: "🚀", size: 30, x: 75, y: 80, duration: 16, delay: 3 },
    { id: 5, emoji: "🔧", size: 26, x: 50, y: 40, duration: 17, delay: 1.5 },
    { id: 6, emoji: "✨", size: 20, x: 30, y: 20, duration: 19, delay: 2.5 },
  ];

  // Infinite typing animation
  useEffect(() => {
    const handleTyping = () => {
      const currentText = nameVariants[loopNum % nameVariants.length];

      if (isDeleting) {
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);

        if (currentIndex === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      } else {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);

        if (currentIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum]);

  return (
    <section
      id="home"
      className={`h-screen flex items-center w-full overflow-x-hidden overflow-y-hidden px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[100vw] relative ${
        darkMode ? "bg-gray-900" : "bg-indigo-50"
      }`}>
      {/* Floating tech elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ opacity: 0, y: element.y + 10 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            y: [element.y, element.y + 20, element.y],
            x: [element.x, element.x + 5, element.x],
            rotate: [0, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute select-none pointer-events-none"
          style={{
            fontSize: `${element.size}px`,
            left: `${element.x}%`,
            top: `${element.y}%`,
            filter: darkMode
              ? "drop-shadow(0 0 4px rgba(99, 102, 241, 0.5))"
              : "none",
          }}>
          {element.emoji}
        </motion.div>
      ))}

      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Hi, I'm{" "}
            <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className="ml-1">
                |
              </motion.span>
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-light block">
              Frontend Developer
            </motion.span>
          </h1>
          <p
            className={`text-base sm:text-lg lg:text-xl mb-6 md:mb-8 max-w-md mx-auto md:mx-0 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}>
            I create beautiful, responsive, and performant web experiences with
            React and modern frontend technologies.
          </p>
          <div className="flex flex-wrap gap-3  sm:gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base ${
                darkMode
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              } transition-colors`}
              onClick={() => scrollToSection("projects")}>
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-200"
              } transition-colors`}
              onClick={() => scrollToSection("contact")}>
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 order-1   md:order-2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72  sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
              {/* <div
                className={`   ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } w-full h-full`}
              /> */}

              <div className="w-full h-full  flex items-start justify-start rounded-lg absolute    ">
                {/* <img src={} alt="" className="h-auto w-auto  " /> */}
                {/* Your content here */}
              </div>
            </div>

            {/* Animated orbit */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-full h-full rounded-full"
              style={{
                border: `3px dashed ${
                  darkMode
                    ? "rgba(129, 140, 248, 0.4)"
                    : "rgba(99, 102, 241, 0.3)"
                }`,
                boxSizing: "border-box",
                pointerEvents: "none",
              }}
            />

            {/* Floating tech badges */}
            {["React", "JS", "CSS", "HTML", "UI/UX"].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.3 + i * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                whileHover={{ scale: 1.1 }}
                className={`absolute text-xs font-medium px-2 py-1 rounded-full ${
                  darkMode
                    ? "bg-indigo-900/80 text-indigo-100"
                    : "bg-indigo-100 text-indigo-800"
                }`}
                style={{
                  left: `${Math.cos((i * 2 * Math.PI) / 5) * 120 + 120}px`,
                  top: `${Math.sin((i * 2 * Math.PI) / 5) * 120 + 120}px`,
                }}>
                {tech}
              </motion.div>
            ))}

            {/* Experience badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`absolute -bottom-2 left-0 px-3 py-1 rounded-full shadow-md text-xs sm:text-sm ${
                darkMode
                  ? "bg-gray-800 text-gray-100"
                  : "bg-white text-gray-800"
              }`}>
              2+ Years Experience
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className={`absolute -top-2 right-0 px-3 py-1 rounded-full shadow-md text-xs sm:text-sm ${
                darkMode
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-600 text-white"
              }`}>
              Frontend Developer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
