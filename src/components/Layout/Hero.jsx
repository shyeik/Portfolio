import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-[#1C1C1C] min-h-[60vh] ">
      <div className="md:w-1/2 text-start mt-10 md:text-left mb-8 md:mb-0 ">
        <div className="flex flex-col text-start md:flex-col">
          {/* First line */}
          <h1 className="text-2xl font-Army text-red-600 font-bold">
            <ReactTyped
              strings={["MISSION:"]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={3000}
              loop
            />
          </h1>

          {/* Second + Third line */}
          <h1 className="text-4xl font-Army md:m-0 text-white font-bold">
            <ReactTyped
              strings={["Code like a soldier.", "Execute the bugs."]}
              typeSpeed={60}
              backSpeed={30}
              backDelay={1500}
              loop
            />
          </h1>
        </div>
        <p className="pt-2 text-start md:text-start font-Army text-[#8FAF6F] ">
          Hey! I’m Jake, once dreaming of being a soldier, now crawling through
          code to become a developer.
        </p>
        <div className="items-center justify-center mt-5 md:justify-start rounded-full outline-red flex flex-row ">
          <div className="flex space-x-6 text-gray-400 text-2xl">
            <a
              href="https://web.facebook.com/jake.derilo.2025"
              target="_blank"
              className="hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.414c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.098 2.794.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.309h3.587l-.467 3.626h-3.12V24h6.116C23.4 24 24 23.4 24 22.663V1.337C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>

            <a
              href="https://github.com/shyeik"
              target="_blank"
              className="hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.51 11.51 0 0 1 3.004-.404c1.02.005 2.047.138 3.004.404 2.292-1.553 3.3-1.23 3.3-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.371.823 1.102.823 2.222 0 1.605-.015 2.898-.015 3.293 0 .322.217.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/jake-derilo-75b404373/"
              target="_blank"
              className="hover:text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.206 24 24 23.226 24 22.271V1.729C24 .774 23.206 0 22.225 0zM7.081 20.452H3.642V9h3.439v11.452zM5.361 7.574a1.992 1.992 0 1 1 0-3.984 1.992 1.992 0 0 1 0 3.984zM20.452 20.452h-3.438v-5.604c0-1.336-.027-3.053-1.859-3.053-1.862 0-2.147 1.452-2.147 2.952v5.705h-3.438V9h3.296v1.561h.047c.46-.873 1.586-1.795 3.266-1.795 3.492 0 4.136 2.3 4.136 5.289v6.397z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="md:w-1/2 flex justify-center  ">
        <img
          src="/Jake.png"
          alt="Jake"
          className="rounded-full w-72 h-72 object-cover outline-1 shadow-lg bounce-text shadow-red-200 transition-shadow duraiton-300 delay-75 ease-in-out hover:shadow-xl hover:shadow-rose-50"
        />
      </div>
    </section>
  );
};

export default Hero;
