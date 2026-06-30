import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import backgroundImage from '../assets/hero-bg.jpg'; 

interface HomeProps {
  language: 'es' | 'en';
}

function Home({ language }: HomeProps) {
  const translations = {
    es: {
      greeting: '¡Hola! Soy Adrián Martín Castellano',
      role: 'Desarrollador Web',
      cta: 'Ver Mis Proyectos',
      welcome: 'Bienvenido a mi espacio digital',
      description: 'Soy estudiante universitario apasionado por la tecnología y el desarrollo de aplicaciones web. En este portfolio podrás conocer más detalladamente mi trayectoria académica, las tecnologías con las que trabajo a diario y los proyectos que he desarrollado.',
      moreAboutMe: '→ Saber más sobre mí',
      talk: '→ ¿Hablamos?'
    },
    en: {
      greeting: "Hi! I'm Adrián Martín Castellano",
      role: 'Web Developer',
      cta: 'View My Projects',
      welcome: 'Welcome to my digital space',
      description: 'I am a university student passionate about technology and web application development. In this portfolio, you can learn more in detail about my academic background, the technologies I work with daily, and the projects I have built.',
      moreAboutMe: '→ More about me',
      talk: '→ Let\'s talk'
    }
  };

  const t = translations[language];

  return (
    <div className={styles.homeContainer}>
      <section 
        className={styles.heroSection} 
        style={{ backgroundImage: `linear-gradient(var(--hero-overlay), var(--hero-overlay)), url(${backgroundImage})` }}>
        <div className={styles.heroCard}>
          <h1>{t.greeting}</h1>
          <p className={styles.subtitle}>{t.role}</p>
          <Link to="/proyectos" className={styles.ctaButton}>
            {t.cta}
          </Link>
        </div>
      </section>

      <section className={styles.summarySection}>
        <div className={styles.summaryContent}>
          <h2>{t.welcome}</h2>
          <p>{t.description}</p>
          <div className={styles.linksGrid}>
            <Link to="/sobre-mi" className={styles.secondaryLink}>{t.moreAboutMe}</Link>
            <Link to="/contacto" className={styles.secondaryLink}>{t.talk}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;