import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './App.module.css';
import backgroundImage from './assets/hero-bg.jpg'; 

function App() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <main 
        className={styles.heroSection} 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` }}>
        <div className={styles.heroCard}>
          <h1>¡Hola! Soy Adrián Martín Castellano</h1>
          <p className={styles.subtitle}>
            Desarrollador Web <span>|</span> Portfolio en construcción
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;