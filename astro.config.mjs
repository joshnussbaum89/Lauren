import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://laurenvogelstein.com',
  integrations: [icon(), sitemap({ lastmod: new Date() })],
})
