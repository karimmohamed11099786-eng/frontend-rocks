import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'https://github.com/karimmohamed11099786-eng/frontend-rocks/actions' : '/frontend-rocks',
  plugins: [react(), tailwindcss()],
})

