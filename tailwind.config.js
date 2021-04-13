/* emilien <emilien@emilien-pc>, 2021 */

// const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	purge: [
		'./components/**/*.{vue,js}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}'
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			...colors,
			'brand-yellow': {
				400: '#ffbe0b',
				300: '#ffcf49',
				200: '#ffdb76',
				100: '#ffe9ab'
			},
			'brand-orange': {
				400: '#fb5607',
				300: '#ff8043',
				200: '#ff9d6f',
				100: '#ffbc9c'
			},
			'brand-pink': {
				400: '#ff006e',
				300: '#ff4d9a',
				200: '#ff79b3',
				100: '#ff9ec8'
			},
			'brand-purple': {
				400: '#8338ec',
				300: '#a66bf9',
				200: '#b381f9',
				100: '#c399fd'
			},
			'brand-blue': {
				400: '#3a86ff',
				300: '#70a7ff',
				200: '#a2c6ff',
				100: '#bed7ff'
			}

		},
		screens: {
			print: { raw: 'print' },
			xsm: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			ixsm: { max: '479px' },
			ism: { max: '639px' },
			imd: { max: '767px' },
			ilg: { max: '1023px' },
			ixl: { max: '1279px' },
			i2xl: { max: '1535px' },
		},
		fontFamily: {
			sans: ['signika', 'ui-sans-serif', 'system-ui', 'arial'],
			cursive: ['SwankyandMooMoo', 'Comic Sans MS', 'Comic Sans', 'cursive' ],
			mono: ['monospace']
		},
		extend: {}
	},
	variants: {
		extend: {
			textDecoration: [ 'active' ]
		}
	},
	plugins: []
};
