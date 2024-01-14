import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: false,
    environment: 'jsdom',
    server.hmr.overlay: false
  },
})
