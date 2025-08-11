// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          "0%, 100%": { color: "#9CA3AF" }, // gray-400
          "50%": { color: "#4ADE80" }, // green-400
        },
      },
      animation: {
        colorChange: "colorChange 1.5s ease-in-out infinite",
      },
    },
  },
};
