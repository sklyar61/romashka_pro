import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    cors: true,
    allowedHosts: ['b9d1-216-151-184-246.ngrok-free.app'],
  },
  resolve: { alias: { '@': '/src' } }
});
