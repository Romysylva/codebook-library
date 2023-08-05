// @type {import('tailwindcss').Config} 
// module.exports = {
//   content: ["./src/**/*.{html, js}"],
//   darkMode: 'class',
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        
        dark: '#1E2938',
      }
    },
  },
  plugins: [],
}
