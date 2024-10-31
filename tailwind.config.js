/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        backg: "#1E1E2F",
        body: "#F5F5F5",
        heading1: "#FF4B5A",
        heading2: "#F5F5F5",
        heading3: "#C1C1D5",
        primary: "#FF4B5A",
        containers: "#6D6D8C",
      },
    },
  },
  plugins: [],
};
