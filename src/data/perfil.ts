// ─────────────────────────────────────────────────────────────
//  Datos personales. Edita este archivo con tu información real.
//  Todo lo marcado con  // TODO  son datos que puse de ejemplo.
// ─────────────────────────────────────────────────────────────

export const perfil = {
  nombre: 'Joel Molina',
  iniciales: 'JM',
  titulo: 'Estudiante de Ingeniería en Sistemas', // TODO: pon tu carrera exacta
  universidad: 'Universidad', // TODO: nombre de tu universidad
  ubicacion: 'Guatemala', // TODO
  descripcion:
    'Estudiante de ingeniería enfocado en desarrollo de software. Me interesan las estructuras de datos, ' +
    'el desarrollo web y construir cosas que la gente realmente use. Aquí recopilo los proyectos que he ' +
    'hecho a lo largo de la carrera.', // TODO: escríbelo con tus palabras

  email: 'joel.d.molina.b@gmail.com',
  github: 'https://github.com/Nannar212',
  linkedin: '', // TODO: pega tu URL de LinkedIn (déjalo vacío si no tienes)
  cv: '', // TODO: ruta a tu CV, por ejemplo '/cv-joel-molina.pdf' dentro de public/
};

/** Tecnologías que quieres mostrar en la sección de habilidades. */
export const habilidades: { categoria: string; items: string[] }[] = [
  { categoria: 'Lenguajes', items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'C#', 'SQL'] },
  { categoria: 'Web', items: ['Astro', 'React', 'HTML', 'CSS', 'Node.js'] },
  { categoria: 'Herramientas', items: ['Git', 'GitHub', 'VS Code', 'Figma'] },
  { categoria: 'Fundamentos', items: ['Estructuras de datos', 'Algoritmos', 'POO', 'Bases de datos'] },
];
