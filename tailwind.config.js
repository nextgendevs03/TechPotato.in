/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        modern: {
          primary: '#6A9FB5',       // Cool Blue
          secondary: '#D0D6DB',     // Ice Gray
          background: '#F5F7FA',    // Soft White
        },
      },
    },
  },
  plugins: [],
};
