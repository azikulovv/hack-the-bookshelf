import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
        gilroy: "Gilroy",
      },
    },
  },

  plugins: [],
};

export default config;
