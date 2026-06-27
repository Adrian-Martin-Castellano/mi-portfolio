import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main style={{ marginTop: '80px', flex: 1, padding: '2rem', textAlign: 'center' }}>
        <h1 className={styles.title}>Adrián Martín Castellano</h1>
        <p className={styles.subtitle}>Ingeniero Informático | Portfolio en construcción</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;