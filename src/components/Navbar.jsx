/** @format */

import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

const Navbar = ({
  darkMode,
  toggleDarkMode,
  activeSection,
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
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
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          {["home", "about", "projects", "experience", "contact"].map(
            (item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`capitalize px-3 py-1 rounded-full transition-all text-sm lg:text-base ${
                  activeSection === item
                    ? darkMode
                      ? "bg-indigo-600 text-white"
                      : "bg-indigo-500 text-white"
                    : darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
                onClick={() => scrollToSection(item)}>
                {item.replace(/-/g, " ")}
              </motion.button>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
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
            className={`px-4 py-2 rounded-full font-medium text-sm lg:text-base ${
              darkMode ? "bg-indigo-600 text-white" : "bg-indigo-500 text-white"
            }`}>
            Hire Me
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden w-full bg-white dark:bg-gray-800 shadow-lg py-2 px-4"
          style={{ position: "fixed", top: "64px", left: 0, zIndex: 40 }}>
          {["home", "about", "projects", "experience", "contact"].map(
            (item) => (
              <motion.button
                key={item}
                whileTap={{ scale: 0.95 }}
                className={`block w-full text-left capitalize px-4 py-3 rounded-full mb-1 ${
                  activeSection === item
                    ? darkMode
                      ? "bg-indigo-600 text-white"
                      : "bg-indigo-500 text-white"
                    : darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
                onClick={() => {
                  scrollToSection(item);
                  setMobileMenuOpen(false);
                }}>
                {item.replace(/-/g, " ")}
              </motion.button>
            )
          )}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`w-full mt-2 px-4 py-3 rounded-full font-medium ${
              darkMode ? "bg-indigo-600 text-white" : "bg-indigo-500 text-white"
            }`}>
            Hire Me
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
