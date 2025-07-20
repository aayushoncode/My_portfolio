/** @format */

import { motion } from "framer-motion";
import React from "react";
const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product catalog, cart functionality, and secure checkout process using Stripe integration.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe API",
        "Tailwind CSS",
      ],
      liveUrl: "#",
      sourceUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Productivity application with drag-and-drop interface, team collaboration features, and real-time updates using Firebase.",
      technologies: ["React", "Firebase", "DnD Kit", "Material UI"],
      liveUrl: "#",
      sourceUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with 5-day forecast, location search, and interactive charts showing weather patterns.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
      liveUrl: "#",
      sourceUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 4,
      title: "Recipe Finder",
      description:
        "Discover recipes based on ingredients you have, with nutritional information and step-by-step cooking instructions.",
      technologies: ["Next.js", "Edamam API", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      sourceUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description:
        "Workout logging application with exercise database, progress tracking, and personalized recommendations.",
      technologies: ["React", "Firebase", "Chart.js", "Material UI"],
      liveUrl: "#",
      sourceUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "This responsive portfolio website built with React, Framer Motion for animations, and Tailwind CSS for styling.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Lenis.js"],
      liveUrl: "#",
      sourceUrl: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <section
      id="projects"
      className={`w-full overflow-x-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[100vw] ${
        darkMode ? "bg-gray-800" : "bg-indigo-50"
      }`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
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
            modern web development technologies and design principles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}>
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden group">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p
                  className={`text-sm sm:text-base mb-3 sm:mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs lg:px-2 px-3 py-1 rounded-full ${
                        darkMode
                          ? "bg-gray-700 text-indigo-300"
                          : "bg-indigo-100 text-indigo-700"
                      }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 text-center py-2 rounded-lg font-medium text-sm sm:text-base ${
                      darkMode
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                        : "bg-indigo-500 hover:bg-indigo-600 text-white"
                    }`}>
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 text-center py-2 rounded-lg font-medium text-sm sm:text-base ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}>
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
