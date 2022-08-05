import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			// We already are applying the base styles in global.css
			config: { applyBaseStyles: false }
		})
	]
})
