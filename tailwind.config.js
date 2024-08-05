/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "739px" },
      xs: "375px",
      sm: "620px",
      md: "740px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontSize: {
      xs: [".9375rem", "1.5625rem"], // 15px / 25px
      sm: ["1.125rem", "1.5625rem"], // 18px / 25px
      md: ["1.5rem", "1.75rem"], // 24px / 28px
      lg: ["2rem", "2.5rem"], // 32px / 40px
      xl: ["2.5rem", "3rem"], // 40px / 48px
      "2xl": ["3rem", "3.5rem"], // 48px / 56px
    },

    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },

      colors: {
        cyan: "#3EE9E5",
        blue: "#093F68",
        darkblue: "#080C20",
        grey: "#777F98",
        white: "#FFF",
        error: "#FF2965",
      },

      backgroundImage: {
        "hero-pattern": "url('/assets/images/bg-hero-squiggle.svg')",
        "footer-pattern": "url('/assets/images/bg-footer-squiggle.svg')",
      },

      aspectRatio: {
        image: "attr(width) / attr(height)",
      },

      maxWidth: {
        page: "1190px",
      },
    },
  },
  plugins: [],
};
