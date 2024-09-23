import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/sections/**/*.{js,ts,jsx,tsx}', // If you have a sections folder
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      colors: {
        'header-pink': '#FC1EB5',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        varela: ['"Varela Round"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;
