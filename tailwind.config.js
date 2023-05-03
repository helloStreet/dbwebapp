/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './components/**/*.{ts,tsx,jsx,js}', './pages/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
};
