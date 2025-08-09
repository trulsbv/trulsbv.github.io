import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync } from "fs";

export default defineConfig({
  base: "",
  plugins: [
    react(),
    {
      name: "copy-404",
      closeBundle() {
        // Copy 404.html to dist after build
        if (existsSync("404.html")) {
          copyFileSync("404.html", "dist/404.html");
        }
      },
    },
  ],
  optimizeDeps: {
    exclude: ["@playwright/test"],
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
});
