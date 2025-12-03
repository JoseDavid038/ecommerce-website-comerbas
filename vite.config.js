import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

const deployTarget = process.env.DEPLOY_TARGET || 'local'; // local | github | hosting

export default defineConfig({ 

  base:
    deployTarget === 'github'
      ? '/ecommerce-website-comerbas/'
      : '/', // para hosting o local

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

  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'public/*', dest: '' },
      ]
    })
  ],

  server: {
    port: 5175,
    host: true,
    allowedHosts: ['3ac8d3797679.ngrok-free.app']
  }


});
