/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Update paths to match your project structure
  ],
  theme: {
    fontFamily: {
      sans: ["iransans"],
    },
    extend: {
      colors: {
        primary: "#1D4ED8", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-rtl"), // RTL support plugin
  ],
  corePlugins: {
    preflight: true, // Enable/disable global reset styles
  },
  rtl: true, // Ensure RTL support for the project
};
