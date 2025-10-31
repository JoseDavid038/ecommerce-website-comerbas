
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Ensures correct asset resolution
  server: {
    port: 5175, 
    host: true, // important to allow external access
    allowedHosts: [
      '33c9910f7c78.ngrok-free.app' // <- your ngrok domain
    ]
  },
});