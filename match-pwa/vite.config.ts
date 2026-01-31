import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    host: true,
    port: Number(process.env.PORT) || 3000,
    strictPort: true
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 3000,
    strictPort: true
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icons/icon-192.png", "icons/icon-512.png"],
      manifest: {
        name: "Match",
        short_name: "Match",
        start_url: "/",
        display: "standalone",
        background_color: "#0B0B0F",
        theme_color: "#0B0B0F",
        icons: [
          { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
        ]
      }
    })
  ]
});
