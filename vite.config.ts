import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"
  },
  base: process.env.GITHUB_PAGES ? '/train_for_r3f/' :'./',
  server: {
    watch: {
      usePolling: true
    }
  }
})
