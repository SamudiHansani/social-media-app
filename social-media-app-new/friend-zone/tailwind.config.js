/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'primary-500': '#a855f7',
  			'primary-600': '#9333ea',
  			'secondary-500': '#14b8a6',
  			'off-white': '#D0DFFF',
  			'red': '#FF5A5A',
  			'dark-1': '#000000',
  			'dark-2': '#0a090a',
  			'dark-3': '#141214',
  			'dark-4': '#1f1c1f',
  			'light-1': '#FFFFFF',
  			'light-2': '#EFEFEF',
  			'light-3': '#a87ba8',
  			'light-4': '#7d5e7d',
  		},
  		screens: {
  			xs: '480px'
  		},
  		fontFamily: {
  			inter: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

