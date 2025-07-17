/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
         'tp-bg': '#1E1A16',       // Background (Earthy Brown)
        'tp-card': '#2C241F',     // Section/Card Background
        'tp-primary': '#D97706',  // Main button, link
        'tp-accent': '#F59E0B',   // Hover, highlights
        'tp-text': '#F3E8D4',   
      },
    },
  },
  plugins: [],
}
