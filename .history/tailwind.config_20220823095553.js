const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{html,js,jsx}'],
  darkMode: false,
  theme: {
    colors: {
      ...colors,
    },    
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
