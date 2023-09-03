import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://laurenvogelstein.com',
  build: {
    inlineStylesheets: 'always',
  },
})
