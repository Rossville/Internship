/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'khaki' : 'rgb(244,210,136,)',
        'saddlebrown': 'rgb(134,98,22)',
        'saddlebrown2': 'rgb(133,98,22)'
      }
    },
  },
  plugins: [],
}

