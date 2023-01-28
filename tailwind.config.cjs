/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			amber: colors.amber,
			stone: colors.stone,
			dark: 'hsl(var(--dark) / <alpha-value>)',
			light: 'hsl(var(--light) / <alpha-value>)',
			babypowder: '#FDFFFA',
			red: '#FD7D94',
			canary: '#FFFA98'

		},
		// extend: {
		// 	typography: (theme) => ({
		// 		DEFAULT: {
		// 			css: {
		// 				color: theme('colors.dod.week1.burgundy'),
		// 				a: {
		// 					textDecorationColor: theme('colors.dod.week1.red'),
		// 					textDecorationThickness: '4px'
		// 				}

		// 				// ...
		// 			}
		// 		},
		// 		xl: {
		// 			css: {
		// 				color: theme('colors.dod.week1.burgundy'),
		// 				a: {
		// 					textDecorationColor: theme('colors.dod.week1.red'),
		// 					textDecorationThickness: '4px'
		// 				}

		// 				// ...
		// 			}
		// 		}
		// 	})
		// },
		fontFamily: {
			sans: ['Arial', 'sans-serif'],
			chonk: ['"Arial Black"', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
