/**
 * Construye una URL interna respetando el `base` configurado en astro.config.mjs.
 *
 * En local el sitio vive en `/`, pero en GitHub Pages vive en
 * `/Proyecto-de-Progra-Avanzada/`. Escribir `href="/proyectos"` a mano rompería
 * los enlaces al publicar, así que todos pasan por aquí.
 *
 *   ruta('/')             → '/'  ·  '/Proyecto-de-Progra-Avanzada/'
 *   ruta('/#proyectos')   → '/#proyectos'  ·  '/Proyecto-de-Progra-Avanzada/#proyectos'
 */
export function ruta(camino = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const limpio = camino.startsWith('/') ? camino : `/${camino}`;
  return `${base}${limpio}`;
}
