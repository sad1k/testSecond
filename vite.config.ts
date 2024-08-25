import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/npm i vite-tsconfig-paths
export default defineConfig({
  base: "/testSecond/",
  plugins: [react(), tsconfigPaths()],
});
