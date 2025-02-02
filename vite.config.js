import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
      // 'Cross-Origin-Opener-Policy':  'same-origin',
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
      // "Cross-Origin-Opener-Policy": "restrict-properties",
    }
  }
})
