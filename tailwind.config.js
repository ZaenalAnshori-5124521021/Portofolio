module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        glass: 'rgba(255,255,255,0.06)'
      },
      backgroundImage: {
        'animated-gradient': 'linear-gradient(90deg,#071a52 0%, #001122 50%, #0b2b4a 100%)'
      }
    }
  },
  plugins: []
}
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			  },
			
			
		  },
		},
	plugins: [],
}
