import { defineConfig } from "vite";
import purgecss from "vite-plugin-purgecss";

export default defineConfig({
  plugins: [
    purgecss({
      content: ["./index.html", "./main.js"],
    }),
  ],
  css: {
    minify: true,
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
