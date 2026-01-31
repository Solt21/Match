import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// CodeSandbox (and similar) proxies often require HMR client to connect via WSS on 443.
// Also, the platform injects PORT; default to 3000 if missing.
const port = Number(process.env.PORT) || 3000;

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port,
    strictPort: true,
    hmr: {
      protocol: "wss",
      clientPort: 443
    }
  },
  preview: {
    host: "0.0.0.0",
    port,
    strictPort: true
  },
  plugins: [
    react(),
    // PWA is fine, but service worker can confuse dev hot reload in some sandboxes.
    // We keep it enabled; if needed we can disable it in dev later.
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
