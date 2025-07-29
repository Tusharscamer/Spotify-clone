module.exports = {
  content: ["./views/**/*.ejs", "./public/javascripts/**/*.js", "./public/stylesheets/**/*.css"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
