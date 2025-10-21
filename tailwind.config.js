module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: { 
      colors: {
        brand: {
          primary: '#0F2D52', // navy
          accent: '#2BB673',  // green
        }
      }
    } 
  },
  plugins: [],
}