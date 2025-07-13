/** @format */

import { motion } from "framer-motion";
import React from "react";

const Home = ({ darkMode, scrollToSection }) => {
  return (
    <section
      id="home"
      className={`min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 flex items-center w-full overflow-x-hidden px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[100vw] ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}>
      {" "}
      {/* Added max-w-[100vw] */}
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Hi, I'm{" "}
            <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>
              AYUSH
            </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-light">
              Frontend Developer
            </span>
          </h1>
          <p
            className={`text-base sm:text-lg lg:text-xl mb-6 md:mb-8 max-w-md mx-auto md:mx-0 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            I create beautiful, responsive, and performant web experiences with
            React and modern frontend technologies.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base ${
                darkMode
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-500 text-white"
              }`}
              onClick={() => scrollToSection("projects")}>
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base ${
                darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-white text-indigo-600 border border-indigo-200"
              }`}
              onClick={() => scrollToSection("contact")}>
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
            {" "}
            {/* Added mx-auto */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
              <div
                className={`${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } w-full h-full`}
              />
            </div>
            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-full h-full rounded-full"
              style={{
                border: "3px dashed rgba(99, 102, 241, 0.7)",
                boxSizing: "border-box",
                pointerEvents: "none",
              }}
            />
            {/* Floating Badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`absolute -bottom-2 left-0 px-3 py-1 rounded-full shadow-md text-xs sm:text-sm ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}>
              2+ Years Experience
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className={`absolute -top-2 right-0 px-3 py-1 rounded-full shadow-md text-xs sm:text-sm ${
                darkMode ? "bg-indigo-600" : "bg-indigo-500 text-white"
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
