import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Configure plugins
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  // Server configuration
  // server: {
  //   host: true,  // Enable all network access
  //   port: 5173,  // Vite default port
    
  //   // Enable CORS for development
  //   cors: true,
    
  //   // Proxy configuration for API requests
  //   proxy: {
  //     '/api': {
  //       target: 'http://backend:8000',  // Target backend service
  //       changeOrigin: true,  // Enable CORS
  //     }
  //   },
    
  //   // Watch options for better HMR
  //   watch: {
  //     usePolling: true,
  //   }
  // }
})