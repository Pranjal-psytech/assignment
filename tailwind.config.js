/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom': '#E5E5E5', // Replace with your desired color value
        'button':'#800080',
      },
      textColor: {
        'custom': '#800080', // Replace with your desired color value
      },
    },
  },
  plugins: [],
}