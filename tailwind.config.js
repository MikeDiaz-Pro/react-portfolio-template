/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        surface: "#1a1a1a",
        textPrimary: "#ffffff",
        textSecondary: "#cfcfcf",
        accent: "#1e90ff", // Puedes personalizar tu color de marca
      },
    },
  },
  plugins: [],
};