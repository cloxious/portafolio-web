import { defineConfig } from "vite";
import purgecss from "vite-plugin-purgecss";

export default defineConfig({
  base: "/portafolio-web/",
  plugins: [
    purgecss({
      content: ["./index.html", "./main.js", "./public/**/*.html"],
      safelist: [
        /^proyectos-grid/,
        /^proyecto/,
        /^descripcion/,
        /^perfil-foto/,
        /^educacion-experiencia-lista/,
      ],
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
