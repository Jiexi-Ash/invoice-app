import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#7C5DFA",
        secondaryPurple: "#9277FF",
        primaryDarkBlue: "#1E2139",
        secondaryDarkBlue: "#252945",
        lavender: "#DFE3FA",
        coolGray: "#888EB0",
        wildBlue: "#7E88C3",
        primaryBlack: "#0C0E16",
        primaryRed: "#EC5757",
        secondaryRed: "#FF9797",
        primaryWhite: "#F8F8FB",
        secondaryBlack: "#141625",
      },
      maxWidth: {
        "8xl": "1400px",
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
