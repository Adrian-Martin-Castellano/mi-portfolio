import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import ui from '../components/ui.module.css';
import ProjectCard from '../components/ProjectCard';
import { GITHUB, PROJECTS } from '../data/portfolio';
import photo from '../assets/foto.jpeg'; // <-- pon aquí tu foto
import s from './Home.module.css';

interface HomeProps {
  language: 'es' | 'en';
}

const text = {
  es: {
    hi: 'Hola, soy Adrián.',
    intro: 'Creo páginas web, aplicaciones y diseños 3D. Estudio informática y me encanta convertir ideas en cosas que se pueden usar.',
    seeProjects: 'Ver mis proyectos',
    talk: 'Hablemos',
    featured: 'Proyectos destacados',
    all: 'Ver todos los proyectos',
    ctaTitle: '¿Tienes un proyecto en mente?',
    ctaDesc: 'Si tienes una idea, una oferta o solo quieres charlar, escríbeme.',
    ctaBtn: 'Ir a contacto',
    code: { studies: 'estudia', makes: 'crea', open: 'abierto_a' },
    codeVals: { studies: 'Informática', makes: ['webs', 'apps', 'diseño 3D'], open: 'proyectos nuevos' },
  },
  en: {
    hi: "Hi, I'm Adrián.",
    intro: 'I create websites, apps and 3D designs. I study computer science and love turning ideas into things people can use.',
    seeProjects: 'See my projects',
    talk: "Let's talk",
    featured: 'Featured projects',
    all: 'See all projects',
    ctaTitle: 'Got a project in mind?',
    ctaDesc: 'If you have an idea, an offer, or just want to chat, write to me.',
    ctaBtn: 'Go to contact',
    code: { studies: 'studies', makes: 'builds', open: 'open_to' },
    codeVals: { studies: 'Computer Science', makes: ['websites', 'apps', '3D design'], open: 'new projects' },
  },
};

function Home({ language }: HomeProps) {
  const t = text[language];
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <main className={s.page}>
      {/* INICIO */}
      <section className={s.hero}>
        <div className={s.heroText}>
          <h1>{t.hi}</h1>
          <p>{t.intro}</p>
          <div className={s.actions}>
            <Link to="/proyectos" className={ui.cta}>{t.seeProjects} <FaArrowRight /></Link>
            <Link to="/contacto" className={ui.ghost}>{t.talk}</Link>
            <a href={GITHUB} target="_blank" rel="noreferrer" className={ui.ghost} aria-label="GitHub"><FaGithub /> GitHub</a>
          </div>
        </div>

        <div className={s.visual}>
          <img src={photo} alt="Adrián Martín Castellano" className={s.photo} />
          <div className={s.code} aria-hidden="true">
            <div className={s.codeBar}><i /><i /><i /><span>adrian.ts</span></div>
            <pre>
              <span className={s.kw}>const</span> adrian <span className={s.pun}>= {'{'}</span>{'\n'}
              {'  '}<span className={s.key}>{t.code.studies}</span><span className={s.pun}>:</span> <span className={s.str}>'{t.codeVals.studies}'</span><span className={s.pun}>,</span>{'\n'}
              {'  '}<span className={s.key}>{t.code.makes}</span><span className={s.pun}>: [</span>{t.codeVals.makes.map((m, i) => (
                <span key={m}><span className={s.str}>'{m}'</span>{i < t.codeVals.makes.length - 1 && <span className={s.pun}>, </span>}</span>
              ))}<span className={s.pun}>],</span>{'\n'}
              {'  '}<span className={s.key}>{t.code.open}</span><span className={s.pun}>:</span> <span className={s.str}>'{t.codeVals.open}'</span><span className={s.pun}>,</span>{'\n'}
              <span className={s.pun}>{'}'};</span><span className={s.caret} />
            </pre>
          </div>
        </div>
      </section>

      <section className={s.block}>
        <div className={s.blockHead}>
          <h2>{t.featured}</h2>
          <Link to="/proyectos" className={s.more}>{t.all} <FaArrowRight /></Link>
        </div>
        <div className={s.grid}>
          {featured.map((p) => <ProjectCard key={p.id} project={p} language={language} />)}
        </div>
      </section>

      {/* LLAMADA A CONTACTO */}
      <section className={s.block}>
        <div className={s.band}>
          <div>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaDesc}</p>
          </div>
          <Link to="/contacto" className={ui.cta}>{t.ctaBtn} <FaArrowRight /></Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
