/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         "ho":"#1C1E53",
         "ko":"#FCD980",
         "hy":"#FCD980"
      },
     
    },
  },
  plugins: [],
}