import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9000,
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@css": "/src/css",
      "@context": "/src/contexts",
      "@constants": "/src/constants",
      "@fireb": "/src/firebase",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
    },
  },
  optimizeDeps: {
    include: ["firebase/app", "firebase/firestore"],
  },
});
