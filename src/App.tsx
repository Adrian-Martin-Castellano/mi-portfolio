import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home'; 

function App() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Navbar 
          language={language} 
          setLanguage={setLanguage} 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
        />
        
        <main style={{ flex: 1, paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/sobre-mi" element={<div style={{ padding: '2rem' }}>Sobre Mí</div>} />
            <Route path="/proyectos" element={<div style={{ padding: '2rem' }}>Proyectos</div>} />
            <Route path="/contacto" element={<div style={{ padding: '2rem' }}>Contacto</div>} />
          </Routes>
        </main>

        <Footer language={language} />
        
      </div>
    </Router>
  );
}

export default App;