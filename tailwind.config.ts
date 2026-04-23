import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFFBF0',
          100: '#FFF6DC',
          200: '#FFEDB8',
          300: '#FFE495',
          400: '#FFD96E',
          500: '#D4AF37',
          600: '#B8941F',
          700: '#9C7A15',
          800: '#80600D',
          900: '#644707',
        },
        white: {
          DEFAULT: '#FFFFFF',
          soft: '#FAFAFA',
          cream: '#F8F8F6',
        },
      },
    },
  },
  plugins: [],
};
export default config;
