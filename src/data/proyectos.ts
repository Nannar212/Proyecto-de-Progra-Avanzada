// ─────────────────────────────────────────────────────────────
//  Tus proyectos de la U.
//  Para agregar uno nuevo: copia un bloque, cambia el `slug`
//  (tiene que ser único) y listo — la tarjeta y su página de
//  detalle se generan solas.
// ─────────────────────────────────────────────────────────────

export interface Proyecto {
  /** Identificador para la URL: /proyectos/<slug> */
  slug: string;
  titulo: string;
  /** Curso de la U al que pertenece. Se usa también como filtro. */
  curso: string;
  /** Ciclo o año en que lo hiciste. */
  periodo: string;
  /** Una o dos líneas — es lo que se ve en la tarjeta. */
  resumen: string;
  /** Párrafos de la página de detalle. */
  descripcion: string[];
  /** Cosas concretas que resolviste o aprendiste. */
  aportes?: string[];
  tecnologias: string[];
  /** Compañeros de equipo (omítelo si fue individual). */
  equipo?: string[];
  repo?: string;
  demo?: string;
  /** Marca opcional por si luego quieres una sección de destacados. */
  destacado?: boolean;
  /** Emoji o inicial para la portada de la tarjeta. */
  icono?: string;
}

export const proyectos: Proyecto[] = [
  {
    slug: 'coordinadora-de-viajes',
    titulo: 'Coordinadora de Viajes',
    curso: 'Estructuras de Datos',
    periodo: 'Hoja de trabajo 5',
    resumen:
      'Sistema para coordinar viajes y rutas, resolviendo el recorrido más corto entre destinos con algoritmos de grafos.',
    descripcion: [
      'Proyecto de la hoja de trabajo 5 del curso de Estructuras de Datos. La aplicación modela una red de destinos como un grafo y calcula rutas óptimas entre ellos.',
      'Se trabajó en equipo, dividiendo el desarrollo entre la lógica de grafos, la interfaz y la presentación de resultados.', // TODO: cuenta con más detalle qué hace
    ],
    aportes: [
      'Modelado del grafo de destinos y sus conexiones.', // TODO: ajusta a lo que hiciste tú
      'Implementación del algoritmo de ruta más corta.',
      'Pruebas con distintos conjuntos de datos de entrada.',
    ],
    tecnologias: ['TypeScript', 'Node.js', 'Grafos'],
    equipo: ['Joel Molina', 'Leonel Alvarez', 'Luis Miguel Rocha'],
    repo: 'https://github.com/Nannar212/cordinadora-de-viajes-main',
    destacado: true,
    icono: '🗺️',
  },
  {
    slug: 'presentacion-eda-h5',
    titulo: 'Presentación EDA H5',
    curso: 'Estructuras de Datos',
    periodo: 'Hoja de trabajo 5',
    resumen:
      'Material de presentación del proyecto de Coordinadora de Viajes: explicación del problema, la estructura elegida y los resultados.',
    descripcion: [
      'Presentación que acompaña al proyecto de la hoja de trabajo 5, donde explicamos la elección de la estructura de datos, la complejidad del algoritmo y los resultados obtenidos.', // TODO
    ],
    tecnologias: ['Documentación', 'Análisis de complejidad'],
    equipo: ['Joel Molina', 'Leonel Alvarez', 'Luis Miguel Rocha'],
    repo: 'https://github.com/Nannar212/Presentacion-EDA-H5',
    icono: '📊',
  },
  {
    slug: 'proyecto-progra-3',
    titulo: 'Proyecto de Programación 3',
    curso: 'Programación 3',
    periodo: 'Ciclo anterior', // TODO
    resumen:
      'Aplicación web desarrollada para el curso de Programación 3.', // TODO: describe de qué trata
    descripcion: [
      'Proyecto del curso de Programación 3.', // TODO: reemplaza con la descripción real
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/Nannar212/weas-progra3',
    icono: '🌐',
  },
  {
    slug: 'portafolio-progra-avanzada',
    titulo: 'Portafolio Personal',
    curso: 'Programación Avanzada',
    periodo: '2026', // TODO
    resumen:
      'Este mismo sitio: un portafolio estático construido con Astro para reunir los proyectos de la carrera.',
    descripcion: [
      'Portafolio construido con Astro, sin frameworks de UI, generando HTML estático para que cargue rápido y sea fácil de publicar.',
      'Los proyectos viven en un solo archivo de datos y las páginas de detalle se generan de forma automática a partir de él.',
    ],
    aportes: [
      'Diseño y maquetación completa con CSS moderno, incluyendo modo claro y oscuro.',
      'Rutas dinámicas para la página de detalle de cada proyecto.',
      'Filtro de proyectos por curso.',
    ],
    tecnologias: ['Astro', 'TypeScript', 'CSS'],
    repo: 'https://github.com/Nannar212/Proyecto-de-Progra-Avanzada',
    destacado: true,
    icono: '💼',
  },
];

// Dos proyectos con el mismo `slug` generarían la misma URL y uno pisaría al
// otro. Mejor fallar aquí, al construir, con un mensaje claro.
const repetidos = proyectos
  .map((p) => p.slug)
  .filter((slug, i, todos) => todos.indexOf(slug) !== i);

if (repetidos.length > 0) {
  throw new Error(
    `Hay slugs repetidos en proyectos.ts: ${[...new Set(repetidos)].join(', ')}. ` +
      'Cada proyecto necesita un slug único porque de ahí sale su URL.',
  );
}

/** Lista de cursos únicos, para los filtros. */
export const cursos = [...new Set(proyectos.map((p) => p.curso))].sort();

/** Proyectos marcados con `destacado: true`. */
export const destacados = proyectos.filter((p) => p.destacado);
