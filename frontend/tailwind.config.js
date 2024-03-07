/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/**/*.jsx","./src/pages/**/*.jsx", "./src/*.{html,jsx}", "./index.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      siliguri: ["Hind Siliguri", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

