import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    widget: "src/index.ts",
  },
  format: ["iife"],
  outDir: "dist",
  minify: true,
  bundle: true,
  clean: true,
  target: "es2020",
  outExtension() {
    return {
      js: ".js",
    };
  },
});
