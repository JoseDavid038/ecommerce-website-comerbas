
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Ensures correct asset resolution
  server: {
    port: 5175, 
    host: true, // important to allow external access
    allowedHosts: [
      '09dd338ac9bb.ngrok-free.app' // <- your ngrok domain
    ]
  },
});