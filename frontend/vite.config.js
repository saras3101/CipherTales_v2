// vite.config.js
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react"; // If using React

export default defineConfig((command, mode) => {
  {
    const env = loadEnv(mode, process.cwd(), "")

    console.log(env.VITE_DEBUG)
    return {
      plugins: [
        react(), // Include your framework's plugin if applicable
        tailwindcss(),
      ],
      server: {
      ...(env.VITE_DEBUG === "true" && {
        proxy: {
          "/api": {
            target: "http://localhost:8000",
            changeOrigin: true,
            secure: false,
          }
        }
      })
      }
    }
  }
}) 
