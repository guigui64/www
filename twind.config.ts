import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  darkMode: "class",
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        teal: colors.teal,
        cyan: colors.cyan,
      },
      gridTemplateColumns: {
        desktop: "1fr 6fr",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(14deg)" },
          "50%": { transform: "rotate(-4deg)" },
          "60%": { transform: "rotate(10deg)" },
          "70%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 1.5s infinite",
      },
    },
    variants: {
      animation: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: {
    "scroll-mt": (parts, context) => ({
      "scroll-margin-top": context.theme("spacing", parts[0]),
    }),
  },
} as Options;
