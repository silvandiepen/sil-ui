import { defineConfig } from "vite";

import { components } from "./src/base";
import { iconList } from "./src/icons/list";

const iconPaths = iconList.map((i: string) => (i = `src/icons/${i}/${i}`));

export default defineConfig({
  build: {
    lib: {
      entry: [
        "src/",
        "src/form/form",
        "src/form/text/text",
        "src/form/number/number",
        "src/form/textarea/textarea",
        "src/form/select/select",
        "src/form/radio/radio",
        "src/form/checkbox/checkbox",
        "src/form/switch/switch",
        "src/form/stack/stack",
        "src/elements/blockquote/blockquote",
        "src/elements/card/card",
        "src/elements/button/button",
        "src/elements/menu-toggle/menu-toggle",
        "src/elements/icon/icon",
        "src/elements/article/article-item",
        "src/elements/article/article-overview",
        ...iconPaths,
      ],
      formats: ["es"],
    },
    minify: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` $components: (
          ${Object.entries(components).map((entry) => {
            return `"${entry[0]}": "${entry[1]}"`;
          })}
        );`,
      },
    },
  },
});
