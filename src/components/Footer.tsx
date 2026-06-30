import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.css';

interface FooterProps {
  language: 'es' | 'en';
}

function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const locationText = language === 'es' ? 'Islas Canarias, España' : 'Canary Islands, Spain';

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        
        <p className={styles.copyright}>
          © {currentYear} <span>Adrián Martín Castellano</span>
        </p>

        <div className={styles.location}>
          <FaMapMarkerAlt className={styles.pinIcon} />
          <span>{locationText}</span>
        </div>
        
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