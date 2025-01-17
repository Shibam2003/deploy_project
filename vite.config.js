import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/deploy_project/",
  plugins: [react()],
  server: {
    port: 5173, // Replace 3000 with the desired port number
  },
});
