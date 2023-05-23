const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["var(--font-inter)", ...fontFamily.sans],
      // },
      colors: {
        "dark-bg": "#060e20",
        "light-bg": "#fff7df",
      },
      backgroundImage: {
        "page-gradient-dark":
          "radial-gradient(at 44% 4%, 	hsl(210, 48%, 46%) 0, transparent 35%), radial-gradient(at 17% 90%, #573AA8 0, transparent 27%),  radial-gradient(at 82% 65%, #592C45 0, transparent 42%);",
        "page-gradient-light":
          "radial-gradient(at 4% 4%, hsl(200, 79%, 77%) 0, transparent 59%), radial-gradient(at 94% 4%, hsl(351, 100%, 82%) 0, transparent 79%); ",
      },
    },
  },

  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-gradient-mask-image"),
    require("tailwind-scrollbar-hide"),
  ],
};
