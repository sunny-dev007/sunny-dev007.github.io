import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative so the site works both at
// https://sunny-dev007.github.io/ and under any sub-path.
export default defineConfig({
  plugins: [react()],
  base: './',
})
