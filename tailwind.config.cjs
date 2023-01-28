/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			dark: 'hsl(var(--dark) / <alpha-value>)',
			light: 'hsl(var(--light) / <alpha-value>)',
			transparent: 'transparent',
			current: 'currentColor',
			amber: colors.amber,
			stone: colors.stone,
			babypowder: '#FDFFFA',
			red: '#FD7D94',
			canary: '#FFFA98'
		},
		fontFamily: {
			sans: ['Arial', 'sans-serif'],
			chonk: ['"Arial Black"', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
