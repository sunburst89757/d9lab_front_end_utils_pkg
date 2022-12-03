import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import pkg from "./package.json" assert { type: "json" };
const external = [...Object.keys(pkg.dependencies || {})].map((name) =>
  RegExp(`^${name}($|/)`)
);
export default defineConfig({
  input: "./index.ts",
  output: [
    {
      file: "./dist/bundle.es.mjs",
      format: "es",
    },
    {
      file: "./dist/bundle.common.js",
      format: "cjs",
    },
  ],
  external,
  plugins: [typescript(), terser()],
});
