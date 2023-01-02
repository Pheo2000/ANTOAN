module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "rgba(255,255,255,0.3)",
        "color-sidebar":"#343a40",
      }
    },
  },
  plugins: [],
};
