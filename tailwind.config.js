/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back': "url('/background.jpg')",
      },
      height: {
        '9/10': '90%',
      }
    }
  },
  plugins: [],
}
