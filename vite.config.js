
import { defineConfig } from 'vite';

export default defineConfig (({ mode }) => ({
  base: mode === 'production' ? '/ecommerce-website-comerbas/' : '/',
  server: {
    port: 5175, 
    host: true, // important to allow external access
    allowedHosts: [
      '4157eef2612c.ngrok-free.app' // <- your ngrok domain
    ]
  },
}));