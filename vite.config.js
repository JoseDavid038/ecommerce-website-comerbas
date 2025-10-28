
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Ensures correct asset resolution
  server: {
    port: 5175, 
    host: true, // important to allow external access
    allowedHosts: [
      '1a2e3bac0da2.ngrok-free.app' // <- your ngrok domain
    ]
  },
});