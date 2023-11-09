/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBG: "#141c2f",
        bluePrimary: "#0079FE",
        lightBlue: "#1F2A48",
        lightBG: "#F6F8FF",
      },
      boxShadow: {
        custom: "0 16px 30px -10px rgba(70, 96, 187, 0.2)",
      },
      fontFamily: {
        SpaceMono: ["Space Mono", "monospace"],
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
