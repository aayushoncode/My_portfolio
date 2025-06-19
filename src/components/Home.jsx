import { motion } from "framer-motion";
import React from 'react';

const Home = ({ darkMode, scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 md:pt-32 pb-12 md:pb-20 flex items-center px-4 sm:px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
            Hi, I'm{" "}
            <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>
              AYUSH
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
              Frontend Developer
            </span>
          </h1>
          <p
            className={`text-lg sm:text-xl mb-6 md:mb-8 max-w-lg mx-auto md:mx-0 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
            I create beautiful, responsive, and performant web experiences
            with React and modern frontend technologies.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium ${
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
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium ${
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
          className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative ">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white/10 shadow-xl md:shadow-2xl">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-full h-full" />
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-full h-full rounded-full border-2 sm:border-4 border-indigo-500/70"
            />

            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-88 lg:h-88 rounded-full border border-indigo-400/10"
            />

            {/* Floating Badges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`absolute -bottom-2 left-2 sm:-bottom-4 sm:left-4 px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-md sm:shadow-lg ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}>
              <span className="text-sm sm:text-base font-medium">
                2+ Years Experience
              </span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className={`absolute -top-2 right-2 sm:-top-4 sm:right-4 px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-md sm:shadow-lg ${
                darkMode ? "bg-indigo-600" : "bg-indigo-500 text-white"
              }`}>
              <span className="text-sm sm:text-base font-medium">
                Frontend Developer
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;