import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#646cff' : '#aaaaaa',
    fontWeight: isActive ? '600' : '500',
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          Adrián<span>.dev</span>
        </Link>
      </div>
      
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <NavLink to="/" style={linkStyle} onClick={() => setIsOpen(false)}>
          Inicio
        </NavLink>
        
        <NavLink to="/sobre-mi" style={linkStyle} onClick={() => setIsOpen(false)}>
          Sobre Mí
        </NavLink>
        
        <NavLink to="/proyectos" style={linkStyle} onClick={() => setIsOpen(false)}>
          Proyectos
        </NavLink>
        
        <NavLink to="/contacto" style={linkStyle} onClick={() => setIsOpen(false)}>
          Contacto
        </NavLink>
      </div>

      <button className={styles.menuIcon} onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;