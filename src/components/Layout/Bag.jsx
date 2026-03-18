import { useEffect, useRef } from "react";

const techStack = [
  {
    name: "HTML",
    date: "2022 – present",
    duration: "Skills Rate: 6/10",
    rate: 6,
    code: `<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Build structured web pages</h1>\n  </body>\n</html>`,
  },
  {
    name: "CSS",
    date: "2024 – present",
    duration: "Skills Rate: 5/10",
    rate: 5,
    code: `body {\n  background-color: #1C1C1C;\n  color: white;\n}`,
  },
  {
    name: "React",
    date: "2024 – Present",
    duration: "Skills Rate: 6/10",
    rate: 6,
    code: `function App() {\n  return <h1>Frontend Mission Ready</h1>;\n}`,
  },
  {
    name: "Node.js",
    date: "2024 – Present",
    duration: "Skills Rate: 5/10",
    rate: 5,
    code: `const http = require("http");\nhttp.createServer((req, res) => {\n  res.end("Server running");\n}).listen(3000);`,
  },
  {
    name: "MongoDB",
    date: "2024 – Present",
    duration: "Skills Rate: 5/10",
    rate: 5,
    code: `db.users.insertOne({\n  name: "Jake",\n  role: "Developer"\n});`,
  },
  {
    name: "Playwright",
    date: "2026 – Present",
    duration: "QA Automation",
    rate: null,
    code: `import { test, expect } from '@playwright/test';\n\ntest('login test', async ({ page }) => {\n  await page.goto('http://localhost:3000');\n  await expect(page).toHaveTitle(/App/);\n});`,
  },
  {
    name: "Postman",
    date: "2024 – Present",
    duration: "API Testing",
    rate: null,
    code: `GET /api/users\nStatus: 200 OK\n\n{\n  "success": true,\n  "data": []\n}`,
  },
  {
    name: "SQL",
    date: "2024 – Present",
    duration: "Database Testing",
    rate: null,
    code: `SELECT * FROM users\nWHERE role = 'QA Tester';`,
  },
];

const tools = [
  {
    name: "GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Figma",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  { name: "Draw.io", img: "https://app.diagrams.net/favicon.ico" },
  {
    name: "Canva",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  {
    name: "Vercel",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },

  {
    name: "Playwright",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
  },
  {
    name: "Postman",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    name: "MySQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
];

function RatePips({ rate }) {
  if (!rate) return null;
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 8 }}>
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          style={{
            width: 16,
            height: 4,
            borderRadius: 2,
            background: i < rate ? "#5aaa5a" : "#2a3d2a",
          }}
        />
      ))}
    </div>
  );
}

function useCarousel(outerRef, trackRef, itemCount, speed) {
  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    let offset = 0;
    let paused = false;
    let dragging = false;
    let startX = 0;
    let startOffset = 0;
    let lastX = 0;
    let raf;

    function getOneSetWidth() {
      const cards = track.children;
      if (!cards.length) return 0;
      let w = 0;
      for (let i = 0; i < itemCount; i++) {
        const c = cards[i];
        if (!c) continue;
        const style = getComputedStyle(c);
        w +=
          c.offsetWidth +
          parseFloat(style.marginLeft) +
          parseFloat(style.marginRight);
      }
      return w;
    }

    function render() {
      const w = getOneSetWidth();
      if (w === 0) return;
      offset = ((offset % w) + w) % w;
      track.style.transform = `translateX(-${offset}px)`;
    }

    function loop() {
      if (!paused && !dragging) {
        offset += speed;
      }
      render();
      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
      dragging = false;
      outer.style.cursor = "grab";
    };

    const onMouseDown = (e) => {
      dragging = true;
      paused = true;
      startX = e.clientX;
      startOffset = offset;
      lastX = e.clientX;
      outer.style.cursor = "grabbing";
      e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (!dragging) return;
      lastX = e.clientX;
      const delta = startX - e.clientX;
      const w = getOneSetWidth();
      if (w > 0) offset = (((startOffset + delta) % w) + w) % w;
    };

    const onMouseUp = () => {
      if (!dragging) return;
      dragging = false;
      outer.style.cursor = "grab";
      paused = false;
    };

    const onWheel = (e) => {
      e.preventDefault();
      const w = getOneSetWidth();
      if (w > 0) offset = (((offset + e.deltaY * 0.8) % w) + w) % w;
    };

    const onTouchStart = (e) => {
      dragging = true;
      paused = true;
      startX = e.touches[0].clientX;
      startOffset = offset;
      lastX = e.touches[0].clientX;
    };

    const onTouchMove = (e) => {
      if (!dragging) return;
      const dx = e.touches[0].clientX - lastX;
      lastX = e.touches[0].clientX;
      const w = getOneSetWidth();
      if (w > 0) offset = (((offset - dx) % w) + w) % w;
    };

    const onTouchEnd = () => {
      dragging = false;
      paused = false;
    };

    outer.addEventListener("mouseenter", onEnter);
    outer.addEventListener("mouseleave", onLeave);
    outer.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    outer.addEventListener("wheel", onWheel, { passive: false });
    outer.addEventListener("touchstart", onTouchStart, { passive: true });
    outer.addEventListener("touchmove", onTouchMove, { passive: true });
    outer.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(raf);
      outer.removeEventListener("mouseenter", onEnter);
      outer.removeEventListener("mouseleave", onLeave);
      outer.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      outer.removeEventListener("wheel", onWheel);
      outer.removeEventListener("touchstart", onTouchStart);
      outer.removeEventListener("touchmove", onTouchMove);
      outer.removeEventListener("touchend", onTouchEnd);
    };
  }, [outerRef, trackRef, itemCount, speed]);
}

function TechCarousel() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const tripled = [...techStack, ...techStack, ...techStack];
  useCarousel(outerRef, trackRef, techStack.length, 0.6);

  return (
    <div
      ref={outerRef}
      style={{
        overflow: "hidden",
        borderRadius: 14,
        border: "1px solid #2a3d2a",
        background: "#192019",
        cursor: "grab",
        userSelect: "none",
      }}
    >
      <div ref={trackRef} style={{ display: "flex", willChange: "transform" }}>
        {tripled.map((tech, i) => (
          <div
            key={i}
            style={{
              minWidth: 300,
              margin: "14px 8px",
              background: "#1e2d1e",
              borderRadius: 12,
              border: "1px solid #2e4a2e",
              padding: 16,
              flexShrink: 0,
            }}
          >
            <p
              style={{
                margin: "0 0 3px",
                fontSize: 15,
                fontWeight: 700,
                color: "#7ec87e",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {tech.name}
            </p>
            <p
              style={{
                margin: "0 0 6px",
                fontSize: 11,
                color: "#4a6a4a",
                fontFamily: "monospace",
              }}
            >
              {tech.date}
            </p>
            <span
              style={{
                display: "inline-block",
                fontSize: 10,
                padding: "2px 8px",
                borderRadius: 99,
                background: "#2a4a2a",
                color: "#5aaa5a",
                marginBottom: 6,
                fontFamily: "monospace",
              }}
            >
              {tech.duration}
            </span>
            <RatePips rate={tech.rate} />
            <pre
              style={{
                background: "#0f170f",
                borderRadius: 8,
                padding: "10px 12px",
                fontFamily: "monospace",
                fontSize: 11.5,
                color: "#a8c8a8",
                lineHeight: 1.6,
                overflow: "hidden",
                whiteSpace: "pre",
                border: "1px solid #1e2e1e",
                margin: 0,
              }}
            >
              {tech.code}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolCarousel() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const tripled = [...tools, ...tools, ...tools];
  useCarousel(outerRef, trackRef, tools.length, 0.5);

  return (
    <div
      ref={outerRef}
      style={{
        overflow: "hidden",
        borderRadius: 14,
        border: "1px solid #2a3d2a",
        background: "#192019",
        cursor: "grab",
        userSelect: "none",
      }}
    >
      <div ref={trackRef} style={{ display: "flex", willChange: "transform" }}>
        {tripled.map((tool, i) => (
          <div
            key={i}
            style={{
              minWidth: 140,
              margin: "14px 8px",
              background: "#1e2d1e",
              borderRadius: 12,
              border: "1px solid #2e4a2e",
              padding: "20px 16px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
            }}
          >
            <img
              src={tool.img}
              alt={tool.name}
              style={{ width: 38, height: 38, objectFit: "contain" }}
            />
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 500,
                color: "#8ab88a",
                textAlign: "center",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Bag() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Syne:wght@500;700&display=swap');
      `}</style>
      <section
        style={{
          background: "#141a14",
          width: "100%",
          padding: "2.5rem 1.5rem",
          fontFamily: "'Syne', sans-serif",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Tech Stack */}
          <div style={{ marginBottom: "2.5rem" }}>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#4a7c4a",
                margin: "0 0 4px",
              }}
            >
              Arsenal
            </p>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#e05a3a",
                margin: "0 0 4px",
              }}
            >
              Tech Stack
            </h2>
            <p
              style={{
                fontSize: 11,
                color: "#3a5a3a",
                margin: "0 0 10px",
                fontFamily: "monospace",
              }}
            >
              drag or scroll to explore
            </p>
            <TechCarousel />
          </div>

          {/* Tools */}
          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#4a7c4a",
                margin: "0 0 4px",
              }}
            >
              Workspace
            </p>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#e05a3a",
                margin: "0 0 4px",
              }}
            >
              Tools & Platforms
            </h2>
            <p
              style={{
                fontSize: 11,
                color: "#3a5a3a",
                margin: "0 0 10px",
                fontFamily: "monospace",
              }}
            >
              drag or scroll to explore
            </p>
            <ToolCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
