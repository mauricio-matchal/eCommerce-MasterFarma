import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'anil-50': '#EBFFFE',
        'anil-600': '#00A2B9',
        'anil-900': '#125667',
        'anil-950': '#053947',
      },
    },
  },
  plugins: [],
};
export default config;
