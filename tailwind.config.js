/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "transparent-blue": "rgba(47, 47, 138, 0.60)",
        "transparent-gray": "rgba(255, 255, 255, 0.60)",
      },
    },
  },
  plugins: [],
};
