import React from 'react';


const Footer = ({ darkMode }) => {
  return (
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
  );
};

export default Footer;