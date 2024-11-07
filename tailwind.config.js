/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2FE5A7",
        secondary: "#8A70FF",
        accent: "#F0FF3D",
      },
      backgroundColor: {
        app: {
          light: "#ffffff",
          dark: "#020912",
        },
      },
      textColor: {
        app: {
          light: "#020912",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
