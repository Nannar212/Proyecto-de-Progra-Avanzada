// @ts-check
import { defineConfig } from 'astro/config';

// El sitio se publica en GitHub Pages dentro del repo, así que vive en
// https://nannar212.github.io/Proyecto-de-Progra-Avanzada/
//
// Si algún día lo mueves a un dominio propio o a nannar212.github.io (repo
// `nannar212.github.io`), borra la línea `base` y ajusta `site`.
export default defineConfig({
  site: 'https://nannar212.github.io',
  base: '/Proyecto-de-Progra-Avanzada',
  devToolbar: { enabled: false },
});
