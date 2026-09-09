import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: process.env.GITHUB_ACTIONS ? '/sun_pharmacy/' : '/',
  server: {
    port: 5173,
    host: true
  }
})
