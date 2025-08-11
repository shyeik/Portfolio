import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-colors duration-300 ${
        isScrolled ? "bg-[#1C1C1C] shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-8 py-4 text-black max-w-7xl mx-auto">
        {/* Portfolio Button */}
        <button className="cssbuttons-io">
          <span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 
                   1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12
                   l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                fill="currentColor"
              ></path>
            </svg>
            Portfolio
          </span>
        </button>

        {/* Download My Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 
                     text-white px-5 py-2 rounded-lg text-sm font-bold shadow-md 
                     transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 
                 0l5-5m-5 5V4"
            />
          </svg>
          My Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
