import nodeExternals from "rollup-plugin-node-externals";
import preserveDirectives from "rollup-preserve-directives";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    lib: {
      entry: {
        "blockly-editor": "src/blockly-editor/index.ts",
        components: "src/components/index.ts",
        vite: "src/vite/index.ts",
      },
      formats: ["es"],
    },
    target: "esnext",
    sourcemap: true,
    rollupOptions: {
      external: /^@olinfo\/quizms\/.*/,
      output: {
        preserveModules: true,
      },
    },
  },
  plugins: [dts({ rollupTypes: true }), nodeExternals(), preserveDirectives(), tsconfigPaths()],
});
