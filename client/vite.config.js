import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/gg-arena/",
    build: {
      outDir: 'build', // Change this to your desired output directory
    }
  
})
