/** @format */
import { motion } from "framer-motion";

import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const footerLinks = ["Home", "About", "Projects", "Experience", "Contact"];
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/aayushoncode",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ayush-kumar-sinha-21b722347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://x.com/AYUSHsinha58617?t=kyKp0nyEwJjo0-k0F-6mNA&s=08",
    },
  ];

  // Animation variants
  const linkVariants = {
    hover: {
      y: -4,
      color: darkMode ? "#818CF8" : "#4F46E5",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    initial: {
      y: 0,
      color: darkMode ? "#E5E7EB" : "#4B5563",
    },
  };

  const socialVariants = {
    hover: {
      y: -8,
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: { type: "spring", stiffness: 500 },
    },
    initial: {
      y: 0,
      scale: 1,
      rotate: 0,
    },
  };

  return (
    <footer
      className={`w-full overflow-hidden ${
        darkMode ? "bg-gray-900" : "bg-indigo-50"
      }`}>
      <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16">
        {/* Decorative elements */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`absolute -top-16 left-0 w-32 h-32 rounded-full blur-3xl opacity-10 ${
              darkMode ? "bg-indigo-500" : "bg-indigo-300"
            }`}
          />

          {/* Main content */}
          <div className="relative z-10">
            {/* Logo/Branding */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mb-8 sm:mb-12 inline-block">
              <span
                className={`text-2xl sm:text-3xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}>
                <span className="text-indigo-600">Ayush</span>
                <motion.span
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mx-1">
                  ✨
                </motion.span>
                Portfolio
              </span>
            </motion.div>

            {/* Links grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10 sm:mb-14">
              {footerLinks.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`text-sm sm:text-base font-medium py-2 relative ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                  {item}
                  <motion.span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full ${
                      darkMode ? "bg-indigo-500" : "bg-indigo-600"
                    }`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4 sm:gap-6 mb-10 sm:mb-14">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  variants={socialVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`text-xl sm:text-2xl p-3 rounded-full ${
                    darkMode
                      ? "bg-gray-800 text-indigo-400"
                      : "bg-white text-indigo-600"
                  } shadow-sm`}
                  aria-label={social.name}>
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className={`h-px w-full mb-6 sm:mb-8 ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            />

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`text-xs sm:text-sm text-center ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}>
              © {new Date().getFullYear()} Crafted with ❤️ by Ayush. All rights
              reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
