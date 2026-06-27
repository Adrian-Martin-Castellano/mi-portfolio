import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Adrián<span>.dev</span>
      </div>
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
        <a href="#sobre-mi" onClick={() => setIsOpen(false)}>Sobre Mí</a>
        <a href="#proyectos" onClick={() => setIsOpen(false)}>Proyectos</a>
        <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
      </div>

      <button className={styles.menuIcon} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;