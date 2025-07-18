/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
          'tp-bg': '#FAF3E0',        // warm beige background
      'tp-text': '#3B2F2F',      // dark earthy text
      'tp-accent': '#D2691E',    // warm orange-brown
      'tp-muted': '#A0522D',     // sienna
      'tp-light': '#FFF7ED',     // light earthy background
      'tp-btn': '#A0522D',       // button base
      'tp-btn-hover': '#8B4513', // button hover    // light warm highlight   
      },
    },
  },
  plugins: [],
}
