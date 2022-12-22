import { defineConfig } from "vite";
import { components } from "./src/base";

// https://vitejs.dev/config/
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
        "src/form/stack/stack",
        "src/elements/blockquote/blockquote",
        "src/elements/card/card",
        "src/elements/button/button",
        "src/elements/menu-toggle/menu-toggle",
      ],
      formats: ["es"],
    },
    minify: true,
    // rollupOptions: {
    //   external: /^lit/,
    // },
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
