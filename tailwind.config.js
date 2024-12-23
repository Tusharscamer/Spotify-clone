/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",  // All HTML files inside the public folder and subfolders
    "./public/**/*.js",    // All JS files inside the public folder and subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

