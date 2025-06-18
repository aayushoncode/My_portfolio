/** @format */

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle section detection on scroll
    const handleScroll = () => {
      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "projects", ref: projectsRef },
        { id: "experience", ref: experienceRef },
        { id: "contact", ref: contactRef },
      ];

      for (const section of sections) {
        const rect = section.ref.current?.getBoundingClientRect();
        if (rect && rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800"
      }`}>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          darkMode ? "bg-gray-800" : "bg-white/80 backdrop-blur-sm"
        } shadow-md`}>
        <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl md:text-2xl font-bold">
            <span className={darkMode ? "text-indigo-400" : "text-indigo-600"}>
              Ayush
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {["home", "about", "projects", "experience", "contact"].map(
              (item) => (
                <motion.button
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`capitalize px-3 py-1 rounded-full transition-all ${
                    activeSection === item
                      ? darkMode
                        ? "bg-indigo-600 text-white"
                        : "bg-indigo-500 text-white"
                      : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                  onClick={() => scrollToSection(eval(`${item}Ref`))}>
                  {item.replace(/-/g, " ")}
                </motion.button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
              aria-label="Toggle dark mode">
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu">
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
              aria-label="Toggle dark mode">
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 md:px-6 md:py-2 rounded-full font-medium ${
                darkMode
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-500 text-white"
              }`}>
              Hire Me
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mobile-menu-container absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg py-4 px-6">
            {["home", "about", "projects", "experience", "contact"].map(
              (item) => (
                <motion.button
                  key={item}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full text-left capitalize px-4 py-3 rounded-full mb-2 ${
                    activeSection === item
                      ? darkMode
                        ? "bg-indigo-600 text-white"
                        : "bg-indigo-500 text-white"
                      : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                  onClick={() => scrollToSection(eval(`${item}Ref`))}>
                  {item.replace(/-/g, " ")}
                </motion.button>
              )
            )}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`w-full mt-4 px-4 py-3 rounded-full font-medium ${
                darkMode
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-500 text-white"
              }`}>
              Hire Me
            </motion.button>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section
        ref={homeRef}
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
                onClick={() => scrollToSection(projectsRef)}>
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
                onClick={() => scrollToSection(contactRef)}>
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative">
              {/* Profile Picture Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 sm:border-6 md:border-8 border-white/20 shadow-xl md:shadow-2xl">
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
                className="absolute top-0 left-0 w-full h-full rounded-full border-2 sm:border-4 border-indigo-500/20"
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

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className={`py-12 md:py-20 px-4 sm:px-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
              viewport={{ once: true, margin: "-100px" }}
              className="w-full md:w-2/5">
              <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-none">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 sm:h-72 md:h-80 lg:h-96" />
                <div
                  className={`absolute -bottom-4 -right-4 w-full h-full rounded-xl border-2 sm:border-3 md:border-4 ${
                    darkMode ? "border-indigo-500" : "border-indigo-600"
                  }`}></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
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
                Download Resume
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="py-12 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
            <div
              className={`w-16 sm:w-20 h-1 mx-auto ${
                darkMode ? "bg-indigo-500" : "bg-indigo-600"
              }`}></div>
            <p
              className={`max-w-2xl mx-auto mt-4 text-base sm:text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
              Here are some of my recent projects showcasing my expertise in
              React, performance optimization, and UI/UX design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`rounded-xl md:rounded-2xl overflow-hidden shadow-lg ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}>
                <div className="bg-gray-200 border-2 border-dashed w-full h-40 sm:h-48 md:h-56" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    Project Title {project}
                  </h3>
                  <p
                    className={`text-sm sm:text-base mb-3 sm:mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    A brief description of the project and the technologies used
                    in its development.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {["React", "Tailwind", "Node.js", "MongoDB"].map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 sm:px-3 sm:py-1 rounded-full ${
                          darkMode ? "bg-gray-700" : "bg-gray-100"
                        }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full ${
                        darkMode
                          ? "bg-indigo-600 text-white"
                          : "bg-indigo-500 text-white"
                      }`}>
                      View Project
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full ${
                        darkMode
                          ? "bg-gray-700 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}>
                      Source Code
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef}
        id="experience"
        className={`py-12 md:py-20 px-4 sm:px-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              My Experience
            </h2>
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

              {[
                {
                  year: "2021 - Present",
                  position: "Senior Frontend Developer",
                  company: "Tech Innovations Inc.",
                  description:
                    "Leading the frontend team in developing complex web applications using React and modern JavaScript.",
                },
                {
                  year: "2018 - 2021",
                  position: "Frontend Developer",
                  company: "Digital Solutions Co.",
                  description:
                    "Created responsive user interfaces and collaborated with UX designers to implement pixel-perfect designs.",
                },
                {
                  year: "2015 - 2018",
                  position: "Web Developer",
                  company: "Creative Web Agency",
                  description:
                    "Developed and maintained client websites with a focus on performance and user experience.",
                },
                {
                  year: "2013 - 2015",
                  position: "Junior Developer",
                  company: "Startup Ventures",
                  description:
                    "Built and maintained company website and internal tools while learning modern web technologies.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
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
                      index === 3
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

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="py-12 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <div
              className={`w-16 sm:w-20 h-1 mx-auto ${
                darkMode ? "bg-indigo-500" : "bg-indigo-600"
              }`}></div>
            <p
              className={`max-w-2xl mx-auto mt-4 text-base sm:text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div
                    className={`mr-3 sm:mr-4 p-2 sm:p-3 rounded-full ${
                      darkMode ? "bg-indigo-900/30" : "bg-indigo-100"
                    }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">
                      Email
                    </h4>
                    <p
                      className={`text-sm sm:text-base ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}>
                      contact@myportfolio.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`mr-3 sm:mr-4 p-2 sm:p-3 rounded-full ${
                      darkMode ? "bg-indigo-900/30" : "bg-indigo-100"
                    }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">
                      Phone
                    </h4>
                    <p
                      className={`text-sm sm:text-base ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}>
                      +1 (123) 456-7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`mr-3 sm:mr-4 p-2 sm:p-3 rounded-full ${
                      darkMode ? "bg-indigo-900/30" : "bg-indigo-100"
                    }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">
                      Location
                    </h4>
                    <p
                      className={`text-sm sm:text-base ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}>
                      San Francisco, California
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10">
                <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {["github", "twitter", "linkedin", "dribbble"].map(
                    (social) => (
                      <motion.a
                        key={social}
                        whileHover={{ y: -5 }}
                        href="#"
                        className={`p-2 sm:p-3 rounded-full ${
                          darkMode ? "bg-gray-700" : "bg-gray-100"
                        }`}>
                        <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-300 rounded-full"></div>
                      </motion.a>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-8 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">
                Send a Message
              </h3>

              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 font-medium text-sm sm:text-base ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-200"
                    } border focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 font-medium text-sm sm:text-base ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-200"
                    } border focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block mb-2 font-medium text-sm sm:text-base ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-200"
                    } border focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                    placeholder="Your message here..."></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base ${
                    darkMode
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : "bg-indigo-500 hover:bg-indigo-600"
                  } text-white transition-colors`}>
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 sm:py-12 ${
          darkMode ? "bg-gray-900" : "bg-gray-800"
        } text-gray-300`}>
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="mb-6 sm:mb-8">
            <div className="text-xl sm:text-2xl font-bold inline-block">
              <span className="text-indigo-400">Ayush</span>Portfolio
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
            {["Home", "About", "Projects", "Experience", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm sm:text-base hover:text-white transition-colors">
                  {item}
                </a>
              )
            )}
          </div>

          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;