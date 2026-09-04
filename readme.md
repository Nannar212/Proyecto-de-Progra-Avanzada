# Portafolio — Joel Molina

Portafolio personal construido con [Astro](https://astro.build). Reúne los proyectos
que he hecho durante la carrera, con una página de detalle por proyecto.

## Cómo correrlo

```bash
npm install
npm run dev
```

Queda en <http://localhost:4321>.

| Comando           | Qué hace                                     |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga automática |
| `npm run build`   | Genera el sitio estático en `dist/`           |
| `npm run preview` | Previsualiza el build de producción           |

## Dónde edito mis datos

Casi todo el contenido vive en dos archivos; no hace falta tocar el HTML:

- **`src/data/perfil.ts`** — nombre, carrera, universidad, correo, redes y habilidades.
- **`src/data/proyectos.ts`** — la lista de proyectos.

Para agregar un proyecto, copia un bloque del arreglo `proyectos`, cámbiale el `slug`
(tiene que ser único) y listo: la tarjeta, el filtro por curso y la página
`/proyectos/<slug>` se generan solas.

```ts
{
  slug: 'mi-proyecto',
  titulo: 'Mi Proyecto',
  curso: 'Bases de Datos',
  periodo: '2025 - II Ciclo',
  resumen: 'Una línea que describe el proyecto.',
  descripcion: ['Párrafo largo para la página de detalle.'],
  aportes: ['Lo que hice yo dentro del equipo.'],
  tecnologias: ['Java', 'PostgreSQL'],
  equipo: ['Joel Molina'],          // omítelo si fue individual
  repo: 'https://github.com/...',
  demo: 'https://...',              // opcional
  destacado: true,                  // opcional
  icono: '🗄️',
}
```

Busca los comentarios `// TODO` en ambos archivos: son los datos de ejemplo que
faltan por reemplazar.

## Estructura

```
src/
├── components/    Header, Footer, tarjeta y lista de proyectos
├── data/          perfil.ts y proyectos.ts  ← edita aquí
├── layouts/       Layout.astro (estilos globales y tema claro/oscuro)
└── pages/
    ├── index.astro            Portada
    ├── 404.astro
    └── proyectos/
        ├── index.astro        Listado completo
        └── [slug].astro       Detalle de cada proyecto
public/            favicon y archivos estáticos (aquí va el CV)
```

## Publicarlo

El sitio es estático, así que sirve cualquier hosting. Con GitHub Pages hay que
descomentar `site` y `base` en `astro.config.mjs` y apuntarlos a este repo. Con
Netlify o Vercel basta con conectar el repositorio; el comando de build es
`npm run build` y la carpeta de salida es `dist`.
