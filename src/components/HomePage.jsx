import React from "react";
import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import About from "./Layout/Mission";
import Bag from "./Layout/Bag";

const HomePage = () => {
  return (
    <div className="bg-[#1C1C1C] h-full ">
      <Header />
      <Hero />
      <h1 className=" justify-center font-Army text-2xl text-white text-center transition-transform duration-300 delay-75 ease-in-out ">
        Tech Stack & Tools
      </h1>
      <Bag />
      <h1 className=" justify-center font-Army text-2xl text-white  text-center transition-transform duration-300 delay-75 ease-in-out ">
        Missions Completed
      </h1>
      <About />
      <footer className="bg-[#224f1c] text-gray-300 py-8 mt-12 border-t border-green-700">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <h2 className="text-green-400 text-xl font-bold font-mono mb-3">
              Contact Information
            </h2>
            <div className="space-y-3 text-sm">
              {/* Email */}
              <div className="flex items-center space-x-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Email"
                  className="w-5 h-5"
                />
                <span>derilojake2528@gmail.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.789 1.106l1.387 2.773a2 2 0 01-.447 2.316l-1.293 1.293a16.042 16.042 0 006.586 6.586l1.293-1.293a2 2 0 012.316-.447l2.773 1.387A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z"
                  />
                </svg>
                <span>0992 454 4371</span>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c1.656 0 3-1.344 3-3S13.656 5 12 5 9 6.344 9 8s1.344 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8c0 7.5-7.5 13-7.5 13S4.5 15.5 4.5 8a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span>Quezon City, Philippines</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-green-400 font-semibold font-mono mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#techstack" className="hover:text-green-300">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-green-300">
                  Tools
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-green-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-green-400 font-semibold font-mono mb-3">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/shyeik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jake-derilo-75b404373/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://web.facebook.com/jake.derilo.2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                  alt="Twitter"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Jake Derilo. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
