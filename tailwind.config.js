/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        modern: {
         'tp-bg': '#F0F4F8',       // Light bluish-gray
        'tp-text': '#1F2937',     // Cool dark blue-gray
        'tp-accent': '#3B82F6',   // Vivid blue (accent)
        'tp-muted': '#9CA3AF',    // Muted gray
        'tp-light': '#E5EFFF',    // Light cool blue background
        'tp-btn': '#2563EB',      // Primary button blue
        'tp-btn-hover': '#1D4ED8' // Hover deep blue 
        },
      },
    },
  },
  plugins: [],
};
