/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050c16',
          900: '#091526',
          800: '#0f213a',
          700: '#173154',
          600: '#224472',
        },
        gold: {
          400: '#fbb300',
          500: '#e5a93c',
          600: '#c78c22',
        },
        crimson: {
          500: '#e11d48',
          600: '#c8102e',
          700: '#991b1b',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Oswald', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

