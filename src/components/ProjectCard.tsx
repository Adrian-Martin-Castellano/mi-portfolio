import { FaCode, FaCube, FaGithub } from 'react-icons/fa';
import type { Project } from '../data/portfolio';
import ui from './ui.module.css';

const labels = {
  es: { code: 'Código', '3d': 'Diseño 3D', web: 'Ver web', repo: 'Ver código' },
  en: { code: 'Code', '3d': '3D design', web: 'View site', repo: 'View code' },
};

function ProjectCard({ project: p, language }: { project: Project; language: 'es' | 'en' }) {
  const t = labels[language];
  const title = p.title[language];

  return (
    <article className={ui.card}>
      <div className={ui.visual}>
        {p.image ? (
          <img src={p.image} alt={title} className={ui.shot} />
        ) : (
          <div className={ui.shotEmpty}>{p.kind === '3d' ? <FaCube /> : <FaCode />}</div>
        )}
        <span className={ui.kind}>{t[p.kind]}</span>
      </div>
      <div className={ui.body}>
        <h3>{title}</h3>
        <p>{p.desc[language]}</p>
        {p.tags.length > 0 && (
          <div className={ui.chips}>{p.tags.map((s) => <span key={s} className={ui.chip}>{s}</span>)}</div>
        )}
        {(p.demo || p.repo) && (
          <div className={ui.links}>
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className={ui.cta}>{t.web}</a>}
            {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className={ui.ghost}><FaGithub /> {t.repo}</a>}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
