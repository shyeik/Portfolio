import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-4 text-white">
        <button class="cssbuttons-io">
          <span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                fill="currentColor"
              ></path>
            </svg>
            Portfolio
          </span>
        </button>

        <div className="flex gap-4 bg-transparent outline-1 outline-white rounded-2xl shadow-sm shadow-white py-4 px-6">
          <a
            href="/"
            className="hover:text-gray-400 relative text-gray-300 font-bold after:content-[''] after:absolute after:left-0 after:top-8 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_8px_#4ade80] "
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-gray-400 relative text-gray-300 font-bold after:content-[''] after:absolute after:left-0 after:top-8 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_8px_#4ade80] "
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:white-gray-400 relative text-gray-300 font-bold after:content-[''] after:absolute after:left-0 after:top-8 after:h-[2px] after:w-0 after:bg-red-400 after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_8px_#4ade80] "
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
