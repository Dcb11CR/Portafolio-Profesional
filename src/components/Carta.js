// src/components/Carta.js
import React, { useEffect } from 'react';
import '../styles/Carta.css'; // Importa el archivo CSS correspondiente

const Carta = () => {
  useEffect(() => {
    document.title = "Carta"; // Cambia el título de la pestaña al visitar la página de la carta
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">Diego Campos</div>
          <ul className="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/Intro">Acerca de mí</a></li>
            <li><a href="/Carta" className="active">Carta</a></li>
            <li><a href="/Evidencias">Evidencias</a></li>
            <li><a href="/CV">Currículum Vitae</a></li>
            <li><a href="/Contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline poster="images/preview.jpg">
              <source src="videos/carta.mp4" type="video/mp4" />
              Tu navegador no soporta el video. Puedes descargarlo{' '}
              <a href="videos/215500_small.mp4">aquí</a>.
            </video>
          </div>

          <div className="hero-overlay" aria-hidden="false">
            <article className="hero-card" role="article" aria-labelledby="hero-title">
              <h1 id="hero-title" className="fade-in">Carta de Presentación</h1>
              <div className="card-body slide-up" tabIndex="0">

                <div className="meta slide-up">Heredia, Costa Rica</div>
                <div className="meta slide-up">05/12/2025</div> <br />

                <p>Estimado/a reclutador/a:</p>

                <p>Mi nombre es Diego Campos Borbón y actualmente curso la carrera de Ingeniería en Sistemas. Me encuentro construyendo mi camino profesional en dos áreas que me interesan de forma independiente: el desarrollo de software y la ciberseguridad ofensiva.</p>

                <p>En desarrollo disfruto crear soluciones claras y organizadas. Trabajo con Java y C# a nivel académico, aplicando principios simples: escribir código legible, separar responsabilidades por capas, manejar errores de forma explícita y documentar lo necesario para que cualquier persona pueda entender el proyecto sin complicaciones. Me interesa mejorar cada vez más en buenas prácticas, especialmente en diseño limpio y pruebas que validen el comportamiento esencial del programa.</p>

                <p>En ciberseguridad, estoy en un nivel inicial, con bases aprendidas en el ISC. Me llama la atención el enfoque del hacking ético, que combina análisis, paciencia y metodología. Practico reconocimiento, enumeración y evaluación, siempre cuidando la claridad de la evidencia y siguiendo un marco de responsabilidad ético.</p>

                <p>Algo que considero importante de mi forma de trabajar es que soy constante: planifico mis tareas, avanzo paso a paso, pido retroalimentación cuando es necesaria y, si algo no lo sé, lo investigo hasta comprenderlo. Me gusta dejar las cosas ordenadas y mejorar con cada intento.</p>

                <p>Busco una oportunidad en desarrollo backend o una posición inicial en seguridad ofensiva, donde pueda aportar desde mis bases, aprender del equipo y crecer de manera disciplinada.</p>

                <p>Muchas gracias por su tiempo.</p>

                <p>Atentamente,<br />Diego Campos Borbón</p>

                <address className="address">
                  <span>Teléfono: 8648-0047</span>
                  <span>Correo: <a href="mailto:dcamposborbon@gmail.com">dcamposborbon@gmail.com</a></span>
                  <span>LinkedIn: <a href="https://www.linkedin.com/in/diego-campos-borbón" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/diego-campos-borbón</a></span>
                </address>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2025 Diego Campos Borbón</p>
      </footer>
    </div>
  );
};

export default Carta;
