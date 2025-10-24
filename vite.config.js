
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Ensures correct asset resolution
  server: {
    port: 5175, 
    host: true, // important to allow external access
    allowedHosts: [
      'cc6bf9d5f94e.ngrok-free.app' // <- your ngrok domain
    ]
  },
});