import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-black min-h-[60vh] ">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 ">
        <div className="flex flex-col md:flex-row gap-6 ">
          <h1 className="text-4xl text-red-600 mb-0 font-bold inline-block bounce-text">
            Hello!
          </h1>
          <h1 className="text-4xl text-white font-bold mb-4 transition-transform duration-300 delay-75 ease-in-out hover:translate-x-4 inline-block color-change ">
            I'm Jake
          </h1>
        </div>
        <p className="text-lg text-white">
          I am a passionate web developer with a focus on creating dynamic and
          responsive user experiences.
        </p>
        <div className="items-center justify-center mt-5 md:justify-start rounded-full outline-red flex flex-row ">
          <div class="flex space-x-6 text-gray-400 text-2xl">
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              class="hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.414c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.098 2.794.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.309h3.587l-.467 3.626h-3.12V24h6.116C23.4 24 24 23.4 24 22.663V1.337C24 .6 23.4 0 22.675 0z" />
              </svg>
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              class="hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.51 11.51 0 0 1 3.004-.404c1.02.005 2.047.138 3.004.404 2.292-1.553 3.3-1.23 3.3-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.371.823 1.102.823 2.222 0 1.605-.015 2.898-.015 3.293 0 .322.217.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              class="hover:text-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.556a9.92 9.92 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3c-.945.556-1.99.959-3.102 1.184a4.918 4.918 0 0 0-8.384 4.482C7.69 8.417 4.066 6.392 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.215 2.188 4.099A4.904 4.904 0 0 1 .96 9.097v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.54 13.94 13.94 0 0 0 7.548 21.5c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.556" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              class="hover:text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.206 24 24 23.226 24 22.271V1.729C24 .774 23.206 0 22.225 0zM7.081 20.452H3.642V9h3.439v11.452zM5.361 7.574a1.992 1.992 0 1 1 0-3.984 1.992 1.992 0 0 1 0 3.984zM20.452 20.452h-3.438v-5.604c0-1.336-.027-3.053-1.859-3.053-1.862 0-2.147 1.452-2.147 2.952v5.705h-3.438V9h3.296v1.561h.047c.46-.873 1.586-1.795 3.266-1.795 3.492 0 4.136 2.3 4.136 5.289v6.397z" />
              </svg>
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              class="hover:text-pink-500 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.428.403a4.92 4.92 0 0 1 1.75 1.145 4.92 4.92 0 0 1 1.145 1.75c.163.458.349 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.428a4.92 4.92 0 0 1-1.145 1.75 4.92 4.92 0 0 1-1.75 1.145c-.458.163-1.258.349-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.428-.403a4.92 4.92 0 0 1-1.75-1.145 4.92 4.92 0 0 1-1.145-1.75c-.163-.458-.349-1.258-.403-2.428C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.428a4.92 4.92 0 0 1 1.145-1.75 4.92 4.92 0 0 1 1.75-1.145c.458-.163 1.258-.349 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.18 0-3.557.012-4.805.07-.997.046-1.538.213-1.895.355-.477.185-.82.407-1.179.766-.359.359-.581.702-.766 1.179-.142.357-.309.898-.355 1.895-.058 1.248-.07 1.625-.07 4.805s.012 3.557.07 4.805c.046.997.213 1.538.355 1.895.185.477.407.82.766 1.179.359.359.702.581 1.179.766.357.142.898.309 1.895.355 1.248.058 1.625.07 4.805.07s3.557-.012 4.805-.07c.997-.046 1.538-.213 1.895-.355.477-.185.82-.407 1.179-.766.359-.359.581-.702.766-1.179.142-.357.309-.898.355-1.895.058-1.248.07-1.625.07-4.805s-.012-3.557-.07-4.805c-.046-.997-.213-1.538-.355-1.895a3.078 3.078 0 0 0-.766-1.179 3.078 3.078 0 0 0-1.179-.766c-.357-.142-.898-.309-1.895-.355-1.248-.058-1.625-.07-4.805-.07zm0 3.891a5.946 5.946 0 1 0 0 11.892 5.946 5.946 0 0 0 0-11.892zm0 9.797a3.851 3.851 0 1 1 0-7.703 3.851 3.851 0 0 1 0 7.703zm4.965-10.865a1.386 1.386 0 1 0 0-2.772 1.386 1.386 0 0 0 0 2.772z" />
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
          className="rounded-full w-60 h-60 object-cover outline-1 shadow-lg bounce-text shadow-red-200 transition-shadow duraiton-300 delay-75 ease-in-out hover:shadow-xl hover:shadow-rose-50"
        />
      </div>
    </section>
  );
};

export default Hero;
