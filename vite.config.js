import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/ecommerce-website-comerbas/' : '/',
  server: {
    port: 5175,
    host: true, // permite acceso externo (útil para ngrok)
    allowedHosts: [
      '4157eef2612c.ngrok-free.app' // tu dominio ngrok
    ]
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        productos: resolve(__dirname, 'productos.html'),
        categoria: resolve(__dirname, 'categoria.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        detalleproducto: resolve(__dirname, 'detalleproducto.html'),
        // agrega aquí las demás páginas que tengas en la raíz
      },
    },
  },
}));
