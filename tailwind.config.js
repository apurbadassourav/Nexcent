/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1150px',
      },
      fontFamily: {
        'int': ['Inter', 'sans-serif', ]
  
      },
      colors:{
        'green' : '#4CAF4F',
       
           
       },
       backgroundImage: {
        'Image1': "url('./src/assets/image1.png')",
        'Image2': "url('./src/assets/image2.png')",
        'Image3': "url('./src/assets/image3.png')",
      }
    },
  },
  plugins: [],
}