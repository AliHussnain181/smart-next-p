/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
       colors: {
        mycolor: '#ff6347', // Choose any color code you like
      },
      
    },
  },
  plugins: [],
}
