module.exports = {
  daisyui: {
    themes: false,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    
    extend: {
      fontFamily:{
        'Karla':['Karla','sans-serif'],
        
      },
      colors:{
        'orange':"#FFA500",
        'background':"#202023"
      },
      screens: {
        'mobile': {'max': '640px'},
        // => @media (min-width: 640px) { ... }
  
        
      },
    },
  },
  plugins: [
    require('daisyui'),
  
  ],
}