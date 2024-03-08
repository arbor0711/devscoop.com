/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      // transparent: "transparent",
      // current: "currentColor",
      // // use default color
      // white: colors.white,
      // purple: "#3f3cbb",
      // // color object syntax
      // tahiti: {
      //   100: "#cffafe",
      //   200: "#a5f3fc",
      //   300: "#67e8f9",
      //   400: "#22d3ee",
      //   500: "#06b6d4",
      //   600: "#0891b2",
      //   700: "#0e7490",
      //   800: "#155e75",
      //   900: "#164e63",
      // },
      // silver: "#ecebff",
      // "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
