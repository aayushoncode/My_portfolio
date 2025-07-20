/** @format */

import { motion } from "framer-motion";
import React from "react";

const Contact = ({ darkMode }) => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/aayushoncode",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ayush-kumar-sinha-21b722347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      url: " https://x.com/AYUSHsinha58617?t=kyKp0nyEwJjo0-k0F-6mNA&s=08 ",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className={`w-full overflow-x-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[100vw] ${
        darkMode ? "bg-gray-800" : "bg-indigo-50"
      }`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
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
            viewport={{ margin: "-100px" }}>
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
                  <h4 className="font-bold text-base sm:text-lg mb-1">Email</h4>
                  <p
                    className={`text-sm sm:text-base ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    ayushh.dev05@gmail.com
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
                  <h4 className="font-bold text-base sm:text-lg mb-1">Phone</h4>
                  <p
                    className={`text-sm sm:text-base ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}>
                    +(91) 9303338257
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
                    Bhilai, Chhattisgarh
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10">
              <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 sm:p-3 rounded-full transition-colors ${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                    }`}
                    aria-label={social.name}
                    title={social.name}>
                    <div className="w-5 h-5 sm:w-6 sm:h-6">{social.icon}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Rest of your contact form remains the same */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
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
  );
};

export default Contact;
