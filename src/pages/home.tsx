import { Link } from 'react-router-dom';
import { FaArrowDown, FaCode, FaJs, FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaTerminal, FaExternalLinkAlt } from 'react-icons/fa'; 
import { SiTypescript, SiPostgresql, SiNodedotjs } from 'react-icons/si'; 
import { DiVisualstudio } from 'react-icons/di'; 
import styles from './Home.module.css';
import backgroundImage from '../assets/hero-bg.jpg'; 

interface HomeProps {
  language: 'es' | 'en';
}

function Home({ language }: HomeProps) {
  const translations = {
    es: {
      heroTag: 'SIEMPRE EN CONSTANTE APRENDIZAJE',
      heroTitle: 'Construyendo el futuro de la web con código limpio y eficiente',
      heroDesc: 'Soy Adrián Martín Castellano, estudiante universitario y desarrollador web enfocado en crear aplicaciones modernas, optimizadas y escalables. Transformo ideas complejas en interfaces interactivas de alta calidad.',
      ctaProjects: 'Ver mis proyectos',
      ctaStack: 'Mi Stack',
      techMainTitle: 'Mi Stack Tecnológico',
      languagesTitle: 'Lenguajes de Programación',
      languagesDesc: 'Los pilares fundamentales con los que estructuro la lógica y el comportamiento de mis aplicaciones.',
      frameworksTitle: 'Frameworks & Librerías',
      frameworksDesc: 'Herramientas y entornos modernos que utilizo para acelerar el desarrollo y crear interfaces interactivas.',
      toolsTitle: 'Herramientas & Entornos',
      toolsDesc: 'El software y utilidades esenciales que optimizan mi flujo de trabajo diario y control de versiones.',
      projectsMainTitle: 'Proyectos Destacados',
      viewCode: 'Código',
      liveDemo: 'Demo',
      project1Title: 'E-Commerce Platform',
      project1Desc: 'Aplicación web completa con carrito de compras, pasarela de pago integrada y panel de administración interactivo.',
      project2Title: 'Task Manager Dashboard',
      project2Desc: 'Gestor de tareas en tiempo real con arrastrar y soltar, analíticas de productividad y sistema de autenticación seguro.',
      welcome: 'Bienvenido a mi espacio digital',
      description: 'Soy estudiante universitario apasionado por la tecnología y el desarrollo de aplicaciones web. En este portfolio podrás conocer más detalladamente mi trayectoria académica, las tecnologías con las que trabajo a diario y los proyectos que he desarrollado.',
      moreAboutMe: '→ Saber más sobre mí',
      talk: '→ ¿Hablamos?',
      projectsBtn: 'Proyectos'
    },
    en: {
      heroTag: 'LIFELONG LEARNER',
      heroTitle: 'Building the future of the web with clean and efficient code',
      heroDesc: 'I am Adrián Martín Castellano, a university student and web developer focused on building modern, optimized, and scalable applications. I transform complex ideas into high-quality interactive interfaces.',
      ctaProjects: 'View my projects',
      ctaStack: 'My Stack',
      techMainTitle: 'My Tech Stack',
      languagesTitle: 'Programming Languages',
      languagesDesc: 'The core foundations I use to structure the logic and behavior of my applications.',
      frameworksTitle: 'Frameworks & Libraries',
      frameworksDesc: 'Modern tools and environments I leverage to speed up development and build interactive UIs.',
      toolsTitle: 'Tools & Environments',
      toolsDesc: 'Essential software and utilities that optimize my daily workflow and version control.',
      projectsMainTitle: 'Featured Projects',
      viewCode: 'Code',
      liveDemo: 'Demo',
      project1Title: 'E-Commerce Platform',
      project1Desc: 'Full web application with a shopping cart, integrated payment gateway, and an interactive admin dashboard.',
      project2Title: 'Task Manager Dashboard',
      project2Desc: 'Real-time task manager with drag-and-drop functionality, productivity analytics, and secure authentication.',
      welcome: 'Welcome to my digital space',
      description: 'I am a university student passionate about technology and web application development. In this portfolio, you can learn more in detail about my academic background, the technologies I work with daily, and the projects I have built.',
      moreAboutMe: '→ More about me',
      talk: '→ Let\'s talk',
      projectsBtn: 'Projects'
    }
  };

  const t = translations[language];

  const scrollToTech = () => {
    const techSection = document.getElementById('tech-section');
    techSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className={styles.homeContainer}
      style={{ backgroundImage: `linear-gradient(var(--hero-overlay), var(--hero-overlay)), url(${backgroundImage})` }}
    >

      <section className={styles.heroSection}>
        <div className={styles.heroGridContainer}>

          <div className={styles.heroTexts}>
            <span className={styles.heroBadge}>{t.heroTag}</span>
            <h1>{t.heroTitle}</h1>
            <p className={styles.mainDesc}>{t.heroDesc}</p>
            
            <div className={styles.heroActions}>
              <Link to="/proyectos" className={styles.ctaPrimary}>
                {t.ctaProjects}
              </Link>
              <button onClick={scrollToTech} className={styles.ctaSecondary}>
                {t.ctaStack} <FaArrowDown style={{ marginLeft: '8px', fontSize: '0.85rem' }} />
              </button>
            </div>
          </div>

          <div className={styles.heroDisplay}>
            <div className={styles.codeMockup}>
              <div className={styles.codeHeader}>
                <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }}></span>
                <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }}></span>
                <span className={styles.dot} style={{ backgroundColor: '#27c93f' }}></span>
                <span className={styles.codeTab}>Adrian.ts</span>
              </div>
              <pre className={styles.codeContent}>
                <code>
                  <span className={styles.keyword}>const</span> developer = &#123;<br />
                  &nbsp;&nbsp;name: <span className={styles.string}>'Adrián Martín Castellano'</span>,<br />
                  &nbsp;&nbsp;role: <span className={styles.string}>'Web Developer'</span>,<br />
                  &nbsp;&nbsp;status: <span className={styles.string}>'University Student'</span>,<br />
                  &nbsp;&nbsp;passions: [<span className={styles.string}>'Technology'</span>, <span className={styles.string}>'Clean Code'</span>],<br />
                  &nbsp;&nbsp;ready: <span className={styles.keyword}>true</span><br />
                  &#125;;
                </code>
              </pre>
            </div>
          </div>

        </div>
      </section>

      <div className={styles.sectionDivider}>
        <div className={styles.dividerLine}></div>
        <div className={styles.dividerBadge}>⚡ STACK</div>
        <div className={styles.dividerLine}></div>
      </div>

      <section id="tech-section" className={styles.techSection}>
        <h2 className={styles.mainTechTitle}>{t.techMainTitle}</h2>

        <div className={styles.techCardsContainer}>
          <div className={styles.techCardSection}>
            <h2>{t.languagesTitle}</h2>
            <p className={styles.techCardDesc}>{t.languagesDesc}</p>
            <div className={styles.techItemGrid}>
              <div className={styles.techItemCard}>
                <FaJs className={styles.techIcon} style={{ color: '#f7df1e' }} />
                <span>JavaScript</span>
              </div>
              <div className={styles.techItemCard}>
                <SiTypescript className={styles.techIcon} style={{ color: '#3178c6' }} />
                <span>TypeScript</span>
              </div>
              <div className={styles.techItemCard}>
                <FaPython className={styles.techIcon} style={{ color: '#3776ab' }} />
                <span>Python</span>
              </div>
              <div className={styles.techItemCard}>
                <FaJava className={styles.techIcon} style={{ color: '#007396' }} />
                <span>Java</span>
              </div>
              <div className={styles.techItemCard}>
                <SiPostgresql className={styles.techIcon} style={{ color: '#4169e1' }} />
                <span>SQL</span>
              </div>
            </div>
          </div>

          <div className={styles.techCardSection}>
            <h2>{t.frameworksTitle}</h2>
            <p className={styles.techCardDesc}>{t.frameworksDesc}</p>
            <div className={styles.techItemGrid}>
              <div className={styles.techItemCard}>
                <FaReact className={styles.techIcon} style={{ color: '#61dafb' }} />
                <span>React</span>
              </div>
              <div className={styles.techItemCard}>
                <SiNodedotjs className={styles.techIcon} style={{ color: '#339933' }} />
                <span>Node.js</span>
              </div>
              <div className={styles.techItemCard}>
                <FaHtml5 className={styles.techIcon} style={{ color: '#e34f26' }} />
                <span>HTML5</span>
              </div>
              <div className={styles.techItemCard}>
                <FaCss3Alt className={styles.techIcon} style={{ color: '#1572b6' }} />
                <span>CSS Modules</span>
              </div>
            </div>
          </div>

          <div className={styles.techCardSection}>
            <h2>{t.toolsTitle}</h2>
            <p className={styles.techCardDesc}>{t.toolsDesc}</p>
            <div className={styles.techItemGrid}>
              <div className={styles.techItemCard}>
                <FaGitAlt className={styles.techIcon} style={{ color: '#f05032' }} />
                <span>Git</span>
              </div>
              <div className={styles.techItemCard}>
                <FaGithub className={styles.techIcon} style={{ color: '#ffffff' }} />
                <span>GitHub</span>
              </div>
              <div className={styles.techItemCard}>
                <DiVisualstudio className={styles.techIcon} style={{ color: '#007acc' }} />
                <span>VS Code</span>
              </div>
              <div className={styles.techItemCard}>
                <FaTerminal className={styles.techIcon} style={{ color: '#4af626' }} />
                <span>Terminal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.sectionDivider}>
        <div className={styles.dividerLine}></div>
        <div className={styles.dividerBadge}>📁 PROJECTS</div>
        <div className={styles.dividerLine}></div>
      </div>

      <section className={styles.projectsSection}>
        <h2 className={styles.mainProjectsTitle}>{t.projectsMainTitle}</h2>
        <div className={styles.projectsGridContainer}>
          
          <div className={styles.projectCard}>
            <h3>{t.project1Title}</h3>
            <p>{t.project1Desc}</p>
            <div className={styles.projectTags}>
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.projLinkSecondary}>
                <FaGithub /> {t.viewCode}
              </a>
              <a href="https://demo.com" target="_blank" rel="noreferrer" className={styles.projLinkPrimary}>
                <FaExternalLinkAlt /> {t.liveDemo}
              </a>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>{t.project2Title}</h3>
            <p>{t.project2Desc}</p>
            <div className={styles.projectTags}>
              <span>TypeScript</span>
              <span>React</span>
              <span>CSS Modules</span>
            </div>
            <div className={styles.projectLinks}>
              <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.projLinkSecondary}>
                <FaGithub /> {t.viewCode}
              </a>
              <a href="https://demo.com" target="_blank" rel="noreferrer" className={styles.projLinkPrimary}>
                <FaExternalLinkAlt /> {t.liveDemo}
              </a>
            </div>
          </div>

        </div>
      </section>

      <div className={styles.sectionDivider}>
        <div className={styles.dividerLine}></div>
        <div className={styles.dividerBadge}>✨ BIO</div>
        <div className={styles.dividerLine}></div>
      </div>

      <section className={styles.summarySection}>
        <div className={styles.summaryCard}>
          <h2>{t.welcome}</h2>
          <p>{t.description}</p>
          <div className={styles.linksGrid}>
            <Link to="/sobre-mi" className={styles.secondaryLink}>{t.moreAboutMe}</Link>
            <Link to="/contacto" className={styles.secondaryLink}>{t.talk}</Link>
          </div>
        </div>
      </section>

      <Link to="/proyectos" className={styles.floatingButton} aria-label={t.projectsBtn}>
        <FaCode className={styles.fabIcon} />
        <span className={styles.fabText}>{t.projectsBtn}</span>
      </Link>
    </div>
  );
}

export default Home;