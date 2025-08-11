import React from "react";
import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import About from "./Layout/About";

const HomePage = () => {
  return (
    <div className="bg-black h-full ">
      <Header />
      <Hero />
      <h1 className=" justify-center text-4xl text-white font-bold text-center transition-transform duration-300 delay-75 ease-in-out ">
        Projects
      </h1>
      <About />
      <footer className="text-center text-white py-4"> footer</footer>
    </div>
  );
};

export default HomePage;
