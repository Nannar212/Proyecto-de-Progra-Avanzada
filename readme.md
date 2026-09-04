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

## Publicarlo en GitHub Pages

Ya está configurado. Cada push a `main` reconstruye y publica el sitio en
<https://nannar212.github.io/Proyecto-de-Progra-Avanzada/>.

**Hay un paso manual que solo se hace una vez:** en GitHub, entra a
`Settings` → `Pages` y en **Source** elige **GitHub Actions** (no "Deploy from a
branch"). Sin eso el workflow falla al desplegar.

Después de eso:

```bash
git add .
git commit -m "Portafolio con despliegue a GitHub Pages"
git push
```

El progreso se ve en la pestaña **Actions** del repo. También se puede lanzar a
mano desde ahí con el botón *Run workflow*.

### Cómo funciona

- **`.github/workflows/deploy.yml`** — instala dependencias, corre `npm run build`
  y sube `dist/` a Pages.
- **`astro.config.mjs`** — define `base: '/Proyecto-de-Progra-Avanzada'`, porque el
  sitio no vive en la raíz del dominio sino dentro de la carpeta del repo.
- **`src/utils/rutas.ts`** — la función `ruta()` le pega ese `base` a cada enlace
  interno. Por eso los enlaces se escriben `href={ruta('/proyectos')}` y no
  `href="/proyectos"`: escritos a mano se romperían al publicar.

> Si cambias el nombre del repo, actualiza `base` en `astro.config.mjs`.
> Si algún día lo mueves a un repo `nannar212.github.io`, borra la línea `base`.

### Otros hostings

El sitio es estático, así que también sirve Netlify o Vercel: conecta el
repositorio, comando de build `npm run build`, carpeta de salida `dist`. En ese
caso quita el `base` de `astro.config.mjs`.
