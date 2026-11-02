import type { ReactNode } from 'react';
import { FaCube, FaDatabase, FaGlobe, FaLaptopCode } from 'react-icons/fa';
import { PROJECTS, SKILLS, type L } from '../data/portfolio';
import p from './Pages.module.css';

const ICONS: Record<string, ReactNode> = {
  web: <FaGlobe />,
  code: <FaLaptopCode />,
  data: <FaDatabase />,
  '3d': <FaCube />,
};

const text = {
  es: {
    title: 'Lo que sé hacer',
    sub: 'Las herramientas con las que trabajo, agrupadas por lo que permiten crear.',
    legend: 'Resaltado: lo he usado en alguno de mis proyectos.',
    usedIn: 'Usado en',
  },
  en: {
    title: 'What I can do',
    sub: 'The tools I work with, grouped by what they let me build.',
    legend: "Highlighted: I've used it in one of my projects.",
    usedIn: 'Used in',
  },
};

function Skills({ language }: { language: 'es' | 'en' }) {
  const t = text[language];

  return (
    <main className={p.page}>
      <div className={p.wrap}>
        <header className={p.head}>
          <h1>{t.title}</h1>
          <p>{t.sub}</p>
        </header>

        <p className={p.legend}><i /> {t.legend}</p>

        <div className={p.skillList}>
          {SKILLS.map((g) => (
            <section key={g.icon} className={p.skillRow}>
              <div className={p.skillInfo}>
                <span className={p.skillIcon}>{ICONS[g.icon]}</span>
                <div>
                  <h2>{g.title[language]}</h2>
                  <p>{g.desc[language]}</p>
                </div>
              </div>
              <div className={p.skillChips}>
                {g.items.map((it) => {
                  const name = typeof it === 'string' ? it : (it as L)[language];
                  const used = typeof it === 'string' ? PROJECTS.filter((x) => x.tags.includes(it)) : [];
                  return (
                    <span
                      key={name}
                      className={`${p.skillChip} ${used.length ? p.skillUsed : ''}`}
                      title={used.length ? `${t.usedIn}: ${used.map((x) => x.title[language]).join(', ')}` : undefined}
                    >
                      {name}
                    </span>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Skills;
