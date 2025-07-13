/** @format */

import { motion } from "framer-motion";
import React from "react";

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      year: "2023 - Present",
      position: "Frontend Developer",
      company: "GlintHawk technology.",
      description:
        " Roles & Responsibilities - developing complex web applications using React and modern JavaScript.",
    },
    {
      year: "2021 - 2023",
      position: "junior Frontend intern",
      company: "Mern academy",
      description:
        "Created responsive user interfaces and collaborated with UX designers to implement pixel-perfect designs.",
    },
  ];

  return (
    <section
        id="experience"
  className={`w-full overflow-x-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[100vw] ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Experience</h2>
          <div
            className={`w-16 sm:w-20 h-1 mx-auto ${
              darkMode ? "bg-indigo-500" : "bg-indigo-600"
            }`}></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline */}
            <div
              className={`absolute left-2 sm:left-4 top-0 bottom-0 w-0.5 ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}></div>

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                className="relative pl-10 sm:pl-16 pb-8 sm:pb-12">
                <div
                  className={`absolute left-0 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-indigo-600" : "bg-indigo-500"
                  }`}>
                  <div
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      darkMode ? "bg-gray-900" : "bg-white"
                    }`}></div>
                </div>

                <div
                  className={`absolute left-2 sm:left-4 top-7 sm:top-9 bottom-0 w-0.5 ${
                    index === experiences.length - 1
                      ? "hidden"
                      : darkMode
                      ? "bg-gray-700"
                      : "bg-gray-200"
                  }`}></div>

                <div>
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      darkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}>
                    {item.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold mt-1">
                    {item.position}
                  </h3>
                  <h4
                    className={`text-base sm:text-lg font-medium mb-2 sm:mb-3 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    {item.company}
                  </h4>
                  <p
                    className={`text-sm sm:text-base ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
