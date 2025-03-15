import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Allows Vite to listen on all interfaces (useful when on VPN)
    port: 5173, // Ensure the port is the same as you are trying to access
  },
  optimizeDeps: {
    include: ["react-player"],
  },
});
