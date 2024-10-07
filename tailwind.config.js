/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
// tailwind.config.js
  theme: {
    extend: {
      zIndex: {
        '200': '200',
        '500': '500',
        // Add more values as needed
      }
    }
  },

  plugins: [],
}