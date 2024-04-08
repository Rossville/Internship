import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { isIPv4 } from 'net'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:  {
    host: true
  }
})
