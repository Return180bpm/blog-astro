/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const round = (num) =>
	num
		.toFixed(7)
		.replace(/(\.[0-9]+?)0+$/, '$1')
		.replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

const myCustomProseStyles = {
	css: {
		color: '#333',
		hr: {
			marginTop: rem(16)
		}
	}
}
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: myCustomProseStyles,
				xl: myCustomProseStyles,
				'2xl': myCustomProseStyles,
				'3xl': myCustomProseStyles,
				'4xl': myCustomProseStyles,
				'5xl': myCustomProseStyles
			}
		},
		colors: {
			dark: 'hsl(var(--dark) / <alpha-value>)',
			// beautiful as slight sepia site background: #FDFDF0
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
			serif: ['Merriweather', 'serif'],
			mono: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'Liberation Mono',
				'Courier New',
				'monospace'
			]
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
