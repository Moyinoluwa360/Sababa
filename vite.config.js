import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) {
            return
          }

          if (id.includes('react-router-dom')) {
            return 'router'
          }

          if (id.includes('styled-components')) {
            return 'styled'
          }

          if (id.includes('@reduxjs/toolkit') || id.includes('react-redux')) {
            return 'redux'
          }

          if (id.includes('@posthog') || id.includes('posthog-js')) {
            return 'analytics'
          }

          if (
            id.includes('swiper') ||
            id.includes('react-slick') ||
            id.includes('slick-carousel')
          ) {
            return 'carousel'
          }

          if (
            id.includes('react-icons') ||
            id.includes('@fortawesome') ||
            id.includes('lucide-react')
          ) {
            return 'icons'
          }

          return 'vendor'
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
})
