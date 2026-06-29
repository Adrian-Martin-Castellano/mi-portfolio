import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import backgroundImage from '../assets/hero-bg.jpg'; 

function Home() {
  return (
    <div className={styles.homeContainer}>
      <section 
        className={styles.heroSection} 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` }}>
        <div className={styles.heroCard}>
          <h1>¡Hola! Soy Adrián Martín Castellano</h1>
          <p className={styles.subtitle}>Desarrollador Web</p>
          <Link to="/proyectos" className={styles.ctaButton}>
            Ver Mis Proyectos
          </Link>
        </div>
      </section>
      <section className={styles.summarySection}>
        <div className={styles.summaryContent}>
          <h2>Bienvenido a mi espacio digital</h2>
          <p>
            Soy estudiante universitario apasionado por la tecnología y el desarrollo de aplicaciones web. 
            En este portfolio podrás conocer más detalladamente mi trayectoria académica, las tecnologías 
            con las que trabajo a diario y los proyectos que he desarrollado.
          </p>
          <div className={styles.linksGrid}>
            <Link to="/sobre-mi" className={styles.secondaryLink}>→ Saber más sobre mí</Link>
            <Link to="/contacto" className={styles.secondaryLink}>→ ¿Hablamos?</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;