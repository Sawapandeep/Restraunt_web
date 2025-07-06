import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customgreen: "#7db473",
      },
    },
  },
   plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a855f7",
          secondary: "#7e22ce",
          accent: "#38bdf8",
          neutral: "#d8b4fe",
          "base-100": "#1c1917",
          info: "#38bdf8",
          success: "#4ade80",
          warning: "#fde047",
          error: "#ff0000",
        },
      },
    ],
  },
 
};

export default config;
