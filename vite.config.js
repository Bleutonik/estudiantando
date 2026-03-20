import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Manual chunks: split vendor libs from app code
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor':  ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor':  ['lucide-react'],
        },
      },
    },
    // Increase chunk warning limit (motion is large)
    chunkSizeWarningLimit: 600,
    // Minify for production
    minify: 'esbuild',
    target: 'es2020',
  },
})
