import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/portfolio';
import p from './Pages.module.css';

type Filter = 'all' | 'code' | '3d';

const text = {
  es: {
    title: 'Mis proyectos',
    sub: 'Programación y diseño 3D, todo en un mismo sitio.',
    tabs: { all: 'Todo', code: 'Código', '3d': 'Diseño 3D' },
    empty: 'Aún no hay proyectos en esta categoría.',
  },
  en: {
    title: 'My projects',
    sub: 'Programming and 3D design, all in one place.',
    tabs: { all: 'All', code: 'Code', '3d': '3D design' },
    empty: 'No projects in this category yet.',
  },
};

function Projects({ language }: { language: 'es' | 'en' }) {
  const t = text[language];
  const [filter, setFilter] = useState<Filter>('all');
  const shown = PROJECTS.filter((x) => filter === 'all' || x.kind === filter);
  const count = (f: Filter) => PROJECTS.filter((x) => f === 'all' || x.kind === f).length;

  return (
    <main className={p.page}>
      <div className={p.wrap}>
        <header className={p.head}>
          <h1>{t.title}</h1>
          <p>{t.sub}</p>
        </header>

        <div className={p.filters} role="group" aria-label={t.title}>
          {(['all', 'code', '3d'] as Filter[]).map((f) => (
            <button
              key={f}
              className={`${p.filter} ${filter === f ? p.filterOn : ''}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {t.tabs[f]} <span>{count(f)}</span>
            </button>
          ))}
        </div>

        {shown.length ? (
          <div className={p.grid}>
            {shown.map((x) => <ProjectCard key={x.id} project={x} language={language} />)}
          </div>
        ) : (
          <p className={p.muted}>{t.empty}</p>
        )}
      </div>
    </main>
  );
}

export default Projects;
