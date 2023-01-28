module.exports = {
	tabWidth: 4,
	useTabs: true,
	trailingComma: 'none',
	tabWidth: 4,
	semi: false,
	singleQuote: true,
	astroAllowShorthand: true,
	plugins: [require.resolve('prettier-plugin-astro')],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
}
