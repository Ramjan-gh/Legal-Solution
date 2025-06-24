
 /** @type {import('tailwindcss').Config} */
 export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
       colors: {
         "btn-color": "#E76F51",
         "primary-bg": "rgba(182,140,90,1)",
       },
       fontFamily: {
         poppins: ["Poppins", "sans-serif"],
         eb: ["EB Garamond", "serif"],
       },
     },
   },
   plugins: [],
 };