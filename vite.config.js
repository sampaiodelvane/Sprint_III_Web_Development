import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuracao padrao do Vite para projetos em React
export default defineConfig({
  plugins: [react()],
});
