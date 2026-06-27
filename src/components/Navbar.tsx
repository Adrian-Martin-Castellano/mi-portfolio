import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>Adrián</span><span className={styles.dot}>.dev</span>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre Mí</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;