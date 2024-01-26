import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        container: colors.neutral["950"],
        foreground: colors.neutral["50"],
        elevated: colors.neutral["700"],
        border: colors.neutral["800"],
        primary: colors.blue["600"],
        card: {
          DEFAULT: colors.neutral["950"],
          foreground: colors.neutral["50"],
        }
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        "gradient-x": "gradient-x 4s ease infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scroll-fade": "scroll-fade 0.5s ease-out forwards",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(4rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [
    typography(),
    plugin(({ addBase, addUtilities }) => {
      addBase({
        "@keyframes scroll-fade": {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },
      });

      addUtilities({
        ".in-view": {
          "animation-timeline": "view(block 25% 25%)",
          "animation-name": "scroll-fade",
          "animation-fill-mode": "both",
          "animation-timing-function": "ease-in-out",
          "transform-origin": "top",
          "animation-duration": "500ms",
        },
      });
    }),
    containerQueries,
  ],
} satisfies Config;
