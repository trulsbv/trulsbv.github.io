/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "",
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "tests/e2e/**", "**/*.spec.ts"],
  },
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
