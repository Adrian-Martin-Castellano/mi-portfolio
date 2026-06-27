import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        
        {/* Copyright */}
        <p className={styles.copyright}>
          © {currentYear} <span>Adrián Martín Castellano</span>
        </p>

        {/* Ubication */}
        <div className={styles.location}>
          <FaMapMarkerAlt className={styles.pinIcon} />
          <span>Islas Canarias, España</span>
        </div>
        
        {/* Social media icons */}
        <div className={styles.socials}>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;