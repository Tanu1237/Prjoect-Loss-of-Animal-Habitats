import typography from "@tailwindcss/typography";
import scrollbarHide from "tailwind-scrollbar-hide";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        floatUp: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "50%": { transform: "translateY(-20px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "0" },
        },
        pulseStat: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        slideUpFade: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        slideLeft: "slideLeft 0.5s ease-in-out",
        floatUp: "floatUp 1s ease-in-out infinite",
        pulseStat: "pulseStat 1s ease-in-out infinite",
        slideUpFade: "slideUpFade 0.5s ease-in-out",
        gradientShift: "gradientShift 5s ease infinite",
      },
    },
  },
  plugins: [
    typography,
    scrollbarHide,
  ],
};
