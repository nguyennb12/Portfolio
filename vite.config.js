import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://nguyennb12.github.io/Portfolio/',
  plugins: [react(), tailwindcss()],
});
