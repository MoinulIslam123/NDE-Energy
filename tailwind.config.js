/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"], // include all your HTML/TS/SCSS files
  theme: {
    extend: {}, // add custom Tailwind extensions here if needed
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"], // DaisyUI themes
  },
  plugins: [require("daisyui")], // load DaisyUI plugin
};
