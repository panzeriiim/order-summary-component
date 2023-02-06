/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        "even_odd_desktop": "url('./images/pattern-background-desktop.svg')",
        "even_odd_mobile": "url('./images/pattern-background-mobile.svg')",
      },
      fontFamily: {
        "RedHat": ['Red Hat Display', 'sans- serif'],
      },
    }
  },
  plugins: [],
}
