import React from "react";

// Tech stack data
const techStack = [
  {
    name: "HTML",
    date: "Since 2020",
    duration: "5 years",
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>Mission</title>
  </head>
  <body>
    <h1>Code like a soldier</h1>
  </body>
</html>`,
  },
  {
    name: "CSS",
    date: "Since 2020",
    duration: "5 years",
    code: `body {
  background-color: #1C1C1C;
  color: white;
  font-family: Arial, sans-serif;
}`,
  },
  {
    name: "MongoDB",
    date: "Since 2022",
    duration: "3 years",
    code: `db.users.insertOne({
  name: "Jake",
  role: "Frontend Dev",
  mission: "Execute the bugs"
});`,
  },
  {
    name: "Express.js",
    date: "Since 2022",
    duration: "3 years",
    code: `const express = require("express");
const app = express();
app.get("/mission", (req, res) => {
  res.send("Code like a soldier.");
});
app.listen(3000);`,
  },
  {
    name: "React",
    date: "Since 2021",
    duration: "4 years",
    code: `function Mission() {
  return <h1>Code like a soldier</h1>;
}
export default Mission;`,
  },
  {
    name: "Node.js",
    date: "Since 2021",
    duration: "4 years",
    code: `const http = require("http");
http.createServer((req, res) => {
  res.end("Mission accomplished");
}).listen(3000);`,
  },
  {
    name: "MySQL",
    date: "Since 2023",
    duration: "2 years",
    code: `CREATE TABLE missions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  status VARCHAR(50)
);
INSERT INTO missions (title, status)
VALUES ("Code like a soldier", "active");`,
  },
];

// Tools data
const tools = [
  {
    name: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  { name: "Draw.io", img: "https://app.diagrams.net/favicon.ico" },
  {
    name: "Canva",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  },
  {
    name: "Microsoft Office",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Vercel",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
];

export default function Bag() {
  return (
    <section className="bg-[#1C1C1C] w-full py-8 px-4 space-y-16">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* TECH STACK */}
        <div>
          <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-[#3F553F] text-white">
            {/* Fades */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#1C1C1C]/0 to-[#3F553F]/80"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#1C1C1C]/0 to-[#3F553F]/80"></div>

            {/* Track */}
            <div className="flex animate-scroll will-change-transform">
              {techStack.concat(techStack).map((tech, i) => (
                <div
                  key={i}
                  className="min-w-[320px] max-w-[320px] m-4 bg-[#2A3D2A] rounded-xl shadow-lg border border-green-700 p-4 flex flex-col"
                >
                  <h3 className="text-lg font-bold text-green-300">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-gray-300">
                    {tech.date} · {tech.duration}
                  </p>
                  <pre className="mt-2 p-3 rounded bg-[#1C1C1C] text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                    {tech.code}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div>
          <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-[#3F553F] text-white">
            {/* Fades */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#1C1C1C]/0 to-[#3F553F]/80"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#1C1C1C]/0 to-[#3F553F]/80"></div>

            {/* Track */}
            <div className="flex animate-scroll will-change-transform">
              {tools.concat(tools).map((tool, i) => (
                <div
                  key={i}
                  className="min-w-[200px] max-w-[200px] m-4 bg-[#2A3D2A] rounded-xl shadow-lg border border-green-700 p-4 flex flex-col items-center justify-center"
                >
                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="w-12 h-12 object-contain mb-2"
                  />
                  <p className="text-sm font-semibold">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll-left 20s linear infinite;
        }
        .relative:hover .animate-scroll {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll { animation: none; }
        }
      `}</style>
    </section>
  );
}
