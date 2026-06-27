import Navbar from './components/Navbar';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <h1 className={styles.title}>Adrián Martín Castellano</h1>
        <p className={styles.subtitle}>Ingeniero Informático | Portfolio en construcción</p>
      </div>
    </div>
  );
}

export default App;