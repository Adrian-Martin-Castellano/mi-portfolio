// ========= TUS DATOS: edita solo este archivo =========
export type L = { es: string; en: string };

export const GITHUB = 'https://github.com/TU_USUARIO'; // <-- cambia esto
export const EMAIL = 'tu@correo.com'; // <-- cambia esto

export type Project = {
  id: string;
  kind: 'code' | '3d';
  featured?: boolean;
  title: L;
  desc: L;
  tags: string[]; 
  image?: string; 
  repo?: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce',
    kind: 'code',
    featured: true,
    title: { es: 'E-Commerce Platform', en: 'E-Commerce Platform' },
    desc: {
      es: 'Una tienda online completa: el cliente elige productos, los mete en el carrito y paga. Incluye un panel para gestionar la tienda.',
      en: 'A complete online store: customers pick products, add them to a cart and pay. Includes a panel to manage the shop.',
    },
    tags: ['React', 'Node.js', 'PostgreSQL'],
    repo: GITHUB,
  },
  {
    id: 'tasks',
    kind: 'code',
    featured: true,
    title: { es: 'Task Manager', en: 'Task Manager' },
    desc: {
      es: 'Una app para organizar tareas arrastrándolas entre columnas, con estadísticas de productividad y cuenta personal.',
      en: 'An app to organize tasks by dragging them between columns, with productivity stats and a personal account.',
    },
    tags: ['TypeScript', 'React'],
    repo: GITHUB,
  },
  {
    id: '3d-1',
    kind: '3d',
    featured: true,
    title: { es: 'Diseño 3D 1', en: '3D design 1' },
    desc: { es: 'Describe aquí qué modelaste y con qué herramienta.', en: 'Describe here what you modeled and with which tool.' },
    tags: [],
  },
  {
    id: '3d-2',
    kind: '3d',
    title: { es: 'Diseño 3D 2', en: '3D design 2' },
    desc: { es: 'Describe aquí qué modelaste y con qué herramienta.', en: 'Describe here what you modeled and with which tool.' },
    tags: [],
  },
  {
    id: '3d-3',
    kind: '3d',
    title: { es: 'Diseño 3D 3', en: '3D design 3' },
    desc: { es: 'Describe aquí qué modelaste y con qué herramienta.', en: 'Describe here what you modeled and with which tool.' },
    tags: [],
  },
];

export type SkillGroup = {
  icon: 'web' | 'code' | 'data' | '3d';
  title: L;
  desc: L;
  items: (string | L)[];
};

export const SKILLS: SkillGroup[] = [
  {
    icon: 'web',
    title: { es: 'Páginas web', en: 'Websites' },
    desc: {
      es: 'Diseño y programo webs modernas que se ven bien en móvil y ordenador.',
      en: 'I design and build modern sites that look great on phones and computers.',
    },
    items: ['React', 'HTML5', 'CSS', 'Bootstrap'],
  },
  {
    icon: 'code',
    title: { es: 'Programas y apps', en: 'Programs & apps' },
    desc: {
      es: 'Escribo el "cerebro" de las aplicaciones: la lógica que hace que todo funcione.',
      en: 'I write the "brain" of applications: the logic that makes everything work.',
    },
    items: ['JavaScript', 'TypeScript', 'Python', 'C++', 'Node.js'],
  },
  {
    icon: 'data',
    title: { es: 'Datos', en: 'Data' },
    desc: {
      es: 'Guardo y organizo la información para que sea rápida y segura de consultar.',
      en: 'I store and organize information so it is fast and safe to access.',
    },
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    icon: '3d',
    title: { es: 'Diseño 3D', en: '3D design' },
    desc: { es: 'Creo modelos y renders en tres dimensiones.', en: 'I create 3D models and renders.' },
    items: [{ es: 'Modelado', en: 'Modeling' }, { es: 'Render', en: 'Render' }],
  },
];