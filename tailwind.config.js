/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7E9172',      // Sage Green
        secondary: '#DDCDB6',    // Beige
        background: '#E5DFD6',   // Ivory Shade
        accent: '#4E5D4E',       // Olive
      },
    },
  },
  plugins: [],
};
