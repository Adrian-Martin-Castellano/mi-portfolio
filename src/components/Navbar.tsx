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

const translations = {
  es: { inicio: 'Inicio', proyectos: 'Proyectos', habilidades: 'Habilidades', contacto: 'Contacto' },
  en: { inicio: 'Home', proyectos: 'Projects', habilidades: 'Skills', contacto: 'Contact' },
};

function Navbar({ language, setLanguage, isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];
  const close = () => setIsOpen(false);

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
    fontWeight: isActive ? '600' : '500',
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" onClick={close}>
          Adrián<span>.dev</span>
        </Link>
      </div>

      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <NavLink to="/" end style={linkStyle} onClick={close}>{t.inicio}</NavLink>
        <NavLink to="/proyectos" style={linkStyle} onClick={close}>{t.proyectos}</NavLink>
        <NavLink to="/habilidades" style={linkStyle} onClick={close}>{t.habilidades}</NavLink>
        <NavLink to="/contacto" style={linkStyle} onClick={close}>{t.contacto}</NavLink>
      </div>

      <div className={styles.navActions}>
        <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} className={styles.actionBtn} aria-label="Cambiar idioma">
          {language === 'es' ? 'EN' : 'ES'}
        </button>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className={styles.actionBtn} aria-label="Cambiar tema">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
