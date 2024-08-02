/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#3EE9E5",
        blue: "#093F68",
        darkblue: "#080C20",
        grey: "#777F98",
        white: "#FFF",
        error: "#FF2965",
      },
    },
  },
  plugins: [],
};
