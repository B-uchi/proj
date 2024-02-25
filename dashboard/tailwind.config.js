/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/components/**/*.jsx","./src/pages/**/*.jsx", "./src/*.{html,jsx}", "./index.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      siliguri: ["Hind Siliguri", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"]
    },
    extend: {
    },
  },
  plugins: [],
}

