
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Ensures correct asset resolution
  server: {
    port: 5175, 
    host: true, // important to allow external access
    allowedHosts: [
      '4157eef2612c.ngrok-free.app' // <- your ngrok domain
    ]
  },
});