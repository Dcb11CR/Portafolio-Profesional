// src/components/Home.js
import React, { useEffect } from 'react';
import '../styles/Home.css';  // Asegúrate de que la ruta sea correcta

const Home = () => {
  useEffect(() => {
    document.title = "Portafolio Profesional"; // Cambia el título cuando el componente Home se monta
  }, []);
  return (
    <div>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline>
              <source src="videos/index.mp4" type="video/mp4" />
              Tu navegador no soporta el video. Puedes descargarlo{' '}
              <a href="videos/215500_small.mp4">aquí</a>.
            </video>
          </div>

          <div className="hero-content">
            <h1 id="hero-title1" className="fade-in">Portafolio Profesional</h1>
            <h2 className="fade-in">Diego Campos Borbón</h2>
            <p className="texto slide-up">Desarrollo de Software · Ciberseguridad</p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '18px' }}>
              <a href="Intro" className="btn">Entrar al Portafolio</a>
            </div>

            <div className="hero-meta" aria-hidden="true">
              <span className="meta-pill">Desarrollo de software · Arquitecturas seguras</span>
              <span className="meta-pill">Ciberseguridad · Hacking ético </span>
              <span className="meta-pill">Automatización · Sistemas distribuidos</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Diego Campos Borbón</p>
      </footer>
    </div>
  );
};

export default Home;
