import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

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

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/proyectos" element={<Projects language={language} />} />
            <Route path="/habilidades" element={<Skills language={language} />} />
            <Route path="/contacto" element={<Contact language={language} />} />
            <Route path="/sobre-mi" element={<Navigate to="/contacto" replace />} />
          </Routes>
        </div>

        <Footer language={language} />

      </div>
    </Router>
  );
}

export default App;