import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./react"),
      },
    },
    build: {
      // assetsDir: "react-vite",
      chunkSizeWarningLimit: 2000,
      watch: {},
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "react/main.jsx"),
        },
        output: {
          // format: "iife",
          dir: "react-build/",
          entryFileNames: "react.js",
          assetFileNames: "react.css",
        },
      },
    },
  };

  if (command !== "serve") {
    config.base = "/design/beautynesia/desktop/";
  }

  return config;
});
