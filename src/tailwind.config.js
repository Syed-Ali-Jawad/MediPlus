/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "intro-bg": "url('../img/xbg_3.png')",
        "about-bg": "url('../img/xbg_2.png')",
        "footer-bg": "url('../img/stethosocpe bg.jpg')",
      },
      screens: {
        md: { max: "767px" },
      },
    },
    plugins: [],
  },
};
