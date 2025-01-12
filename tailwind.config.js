/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient1': 'linear-gradient(135deg, #79F1A4 0%, #0E5CAD 100%)',
        'custom-gradient2': 'linear-gradient(135.73deg, #FF9865 0%, #EF3031 110.55%)',
        'custom-gradient3': 'linear-gradient(81.62deg, #2870EA 8.72%, #1B4AEF 85.01%)',
        'custom-gradient4': 'linear-gradient(90deg, #FF4949 0%, #FF4E11 15.34%, #FC870A 30.45%, #FFAF11 48.68%, #C2CB21 62.75%, #11EB68 100.03%)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),],
}

