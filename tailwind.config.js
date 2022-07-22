/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
 
    extend: {
      
      colors: {
        brightRed: 'hsl(12, 88% 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSubLight: 'hsl(12, 88%, 95%)',
        drakBlue: 'hsl(228, 39%, 23%)',
        drakGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDrakBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100% 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        cardColor: "#f5f5f5",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
        focused:"#31ca15",
        tag:"#4db5ff",
        light:"#2c2c6c",
        BG:"#1f1f38",
        
  
      },
    },
  },
  plugins: [],
}
