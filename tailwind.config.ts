import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import {nextui} from "@nextui-org/react"
export default {
  content: ["./src/**/*.tsx", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {},
      dark: {},
      modern: {
        extend: "dark",
        colors: {
          background: "#0d001a",
          foreground: "#ffffff",
          primary: {
            DEFAULT: "#ff007a",
            50: "#ff007a",
            100: "#ff007a",
            200: "#ff007a",
            300: "#ff007a",
            400: "#ff007a",
            500: "#ff007a",
            600: "#ff007a",
            700: "#ff007a",
            800: "#ff007a",
            900: "#ff007a",
          },
        },
      },
    }
  })],
} satisfies Config;
