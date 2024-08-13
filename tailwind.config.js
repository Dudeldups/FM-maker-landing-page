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

      listStyleImage: {
        "checkmark-blue": "url('/assets/images/icon-check-blue.svg')",
        "checkmark-cyan": "url('/assets/images/icon-check-cyan.svg')",
      },

      aspectRatio: {
        image: "attr(width) / attr(height)",
      },

      maxWidth: {
        page: "1190px",
      },

      keyframes: {
        "fade-to-cyan": {
          "0%": { color: "#FFF" },
          "100%": { color: "#3EE9E5" },
        },

        wiggle: {
          "0%": {
            transform: "rotate(0deg) scale(1)",
          },
          "20%": {
            transform: "rotate(10deg) scale(1.01)",
          },
          "30%": {
            transform: "rotate(-10deg) scale(1.025)",
          },
          "40%": {
            transform: "rotate(10deg) scale(1.05)",
          },
          "50%": {
            transform: "rotate(-10deg) scale(1.05)",
          },
          "60%": {
            transform: "rotate(10deg) scale(1.05)",
          },
          "70%": {
            transform: "rotate(-10deg) scale(1.025)",
          },
          "85%": {
            transform: "rotate(10deg) scale(1.01)",
          },
          "100%": {
            transform: "rotate(0deg) scale(1)",
          },
        },

        "move-gradient": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },

      animation: {
        "fade-to-cyan": "fade-to-cyan 1s ease-in 1s forwards",
        wiggle: "wiggle 1.5s ease-in-out .5s forwards",
        "move-gradient": "move-gradient 1.25s ease-in .5s forwards",
      },
    },
  },
  plugins: [],
};
