import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type { PluginOption } from "vite";

export default function blocklyMedia(): PluginOption {
  let isLib = false;

  return {
    name: "quizms:blockly-media",
    apply: "build",
    configResolved(config) {
      isLib ||= !!config.build.lib;
    },
    async buildStart() {
      if (isLib) return;

      const mediaDir = path.join(fileURLToPath(import.meta.resolve("blockly")), "..", "media");
      const files = await readdir(mediaDir);

      await Promise.all(
        files.map(async (file) => {
          const fileName = `blockly/${path.basename(file)}`;
          this.emitFile({
            fileName,
            type: "asset",
            source: await readFile(path.join(mediaDir, file)),
          });
        }),
      );
    },
  };
}
