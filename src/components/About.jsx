/** @format */

import { motion } from "framer-motion";
import img from "../assets/images/about.png";
import React from "react";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-12 md:py-20 px-4 sm:px-6 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div
            className={`w-16 sm:w-20 h-1 mx-auto ${
              darkMode ? "bg-indigo-500" : "bg-indigo-600"
            }`}></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            className="w-full md:w-2/5">
            <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-none">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 sm:h-72 md:h-80 lg:h-96" />
              <div
                className={`absolute bottom-3 -right-4 w-full h-full rounded-xl border-2 sm:border-3 md:border-4 ${
                  darkMode ? "border-indigo-500" : "border-indigo-600"
                }`}>
                <img
                  src={img}
                  alt="coding"
                  className="absolute -top-2 h-110 "
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            className="w-full md:w-3/5 mt-8 md:mt-0">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
              Crafting Digital Experiences
            </h3>
            <p
              className={`text-base sm:text-lg mb-4 md:mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
              With over a decade of experience in frontend development, I
              specialize in creating high-performance, user-centric web
              applications. My passion lies in transforming complex problems
              into intuitive, beautiful, and efficient digital solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 md:mb-8">
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  My Skills
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {[
                    "React.js",
                    "JavaScript/ES6+",
                    "TypeScript",
                    "Tailwind CSS",
                    "Redux",
                    "Next.js",
                  ].map((skill, i) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full mr-2 sm:mr-3 ${
                          darkMode ? "bg-indigo-500" : "bg-indigo-600"
                        }`}></div>
                      <span className="text-sm sm:text-base">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                  My Approach
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {[
                    "Performance First",
                    "Mobile-First Design",
                    "Clean Code",
                    "User-Centric",
                    "Agile Development",
                    "Continuous Learning",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full mr-2 sm:mr-3 ${
                          darkMode ? "bg-indigo-500" : "bg-indigo-600"
                        }`}></div>
                      <span className="text-sm sm:text-base">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium ${
                darkMode
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-500 text-white"
              }`}>
              <a
                href="https://drive.google.com/file/d/1JDJVd6NbbS1u9fRTTWFgFCFWL6Zot7Je/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer">
                Download Resume
              </a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
