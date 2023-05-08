import { defineConfig } from "vitest/config";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
  },
  plugins: [
    AutoImport({
      imports: ["vitest"],
      dts: true,
    }),
  ],
});
