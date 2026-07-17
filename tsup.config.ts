import { execFile } from "node:child_process"
import { promisify } from "node:util"
import { defineConfig } from "tsup"

const execFileAsync = promisify(execFile)

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
  external: ["react", "react-dom"],
  banner: {
    js: '"use client";',
  },
  async onSuccess() {
    // Compile Tailwind utilities actually used by the components into a
    // standalone CSS bundle, so consumers get working styles regardless of
    // whether their own app is set up with Tailwind.
    await execFileAsync("yarn", [
      "tailwindcss",
      "-i",
      "src/styles.css",
      "-o",
      "dist/styles.css",
      "--minify",
    ])
  },
})
