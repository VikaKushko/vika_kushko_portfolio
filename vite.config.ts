import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "./", // относительные пути для CSS/JS, чтобы работало на Vercel
    build: {
        outDir: "dist",
        emptyOutDir: true,
        sourcemap: false,
    },
    server: {
        port: 5173,
        open: true,
    },
});
