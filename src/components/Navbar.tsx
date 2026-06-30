import { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

interface NavbarProps {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
}

function Navbar({ language, setLanguage, isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');
  const translations = {
    es: { inicio: 'Inicio', sobreMi: 'Sobre Mí', proyectos: 'Proyectos', contacto: 'Contacto' },
    en: { inicio: 'Home', sobreMi: 'About Me', proyectos: 'Projects', contacto: 'Contact' }
  };

  const t = translations[language];
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
    fontWeight: isActive ? '600' : '500',
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Adrián<span>.dev</span>
        </Link>
      </div>
      
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <NavLink to="/" style={linkStyle} onClick={() => setIsOpen(false)}>{t.inicio}</NavLink>
        <NavLink to="/sobre-mi" style={linkStyle} onClick={() => setIsOpen(false)}>{t.sobreMi}</NavLink>
        <NavLink to="/proyectos" style={linkStyle} onClick={() => setIsOpen(false)}>{t.proyectos}</NavLink>
        <NavLink to="/contacto" style={linkStyle} onClick={() => setIsOpen(false)}>{t.contacto}</NavLink>
      </div>

      <div className={styles.navActions}>
        <button onClick={toggleLanguage} className={styles.actionBtn} aria-label="Cambiar idioma">
          {language === 'es' ? 'EN' : 'ES'}
        </button>
        
        <button onClick={toggleTheme} className={styles.actionBtn} aria-label="Cambiar tema">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button className={styles.menuIcon} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;