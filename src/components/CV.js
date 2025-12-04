import React, { useEffect } from "react";
import "../styles/CV.css"; // ajusta la ruta según tu proyecto

const CV = () => {
  useEffect(() => {
    document.title = "Currículum Vitae"; // Cambia el título de la pestaña al visitar la página del CV
  }, []);

  return (
    <div className="cv-page">
      <header>
        <nav className="navbar">
          <div className="logo">Diego Campos</div>
          <ul className="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/Intro">Acerca de mí</a></li>
            <li><a href="/Carta">Carta</a></li>
            <li><a href="/Evidencencias">Evidencias</a></li>
            <li><a href="/CV" className="active">Currículum Vitae</a></li>
            <li><a href="/Diferencia">¿Qué me diferencia?</a></li>
            <li><a href="/Contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline>
              <source src="/videos/cv.mp4" type="video/mp4" />
              Tu navegador no soporta el video. Puedes descargarlo <a href="/videos/cv.mp4">aquí</a>.
            </video>
          </div>

          {/* Moved hero-content inside .hero so it appears above the video and higher on the page */}
          <div className="hero-content" style={{ marginTop: "100px" }}>
            <h1 id="hero-title" className="fade-in" style={{ fontFamily: "'Inter', sans-serif" }}>
              Currículum Vitae
            </h1>

            <div className="cv-container slide-up">

              <section className="perfil">
                <h1 className="cv-name">DIEGO CAMPOS BORBÓN</h1>
                <p className="cv-contact">
                  Teléfono: +506 8648-0047 | Correo: <a href="mailto:dcamposborbon@gmail.com">dcamposborbon@gmail.com</a> | LinkedIn: <a href="https://www.linkedin.com/in/diego-campos-borbón" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/diego-campos-borbón</a> | Heredia, Costa Rica
                </p>
              </section>
              <section className="perfil">
                <h2>PERFIL PROFESIONAL</h2>
                <p>
                  Soy estudiante de Ingeniería en Sistemas Computacionales con interés en ciberseguridad y desarrollo de software. Cuento con base en redes (routing, switching, TCP/IP), programación (Java, C#, C++, Python), bases de datos con SQL Server y fundamentos de IA. Con mentalidad autodidacta, disfruto investigar y resolver problemas; he practicado automatización con n8n y agentes de IA. Busco mi primera oportunidad profesional para contribuir y seguir creciendo hacia una especialización en seguridad y/o desarrollo.
                </p>
              </section>
              <section className="habilidades-tecnicas">
                <h2>HABILIDADES TÉCNICAS</h2>
                <ul>
                  <li>Redes: interconexión de redes, TCP/IP, routing, switching, wireless (formación CCNA)</li>
                  <li>Desarrollo de software: Java, C#, C++, Python</li>
                  <li>Automatización de procesos con n8n y agentes de IA (diseño de flujos y orquestación básica)</li>
                  <li>Bases de datos y uso de SQL Server Management Studio</li>
                  <li>Fundamentos de Inteligencia Artificial (Azure AI Fundamentals, Oracle AI Foundations)</li>
                  <li>Uso de sistema operativo Linux a nivel académico</li>
                </ul>
              </section>

              <section className="herramientas-software">
                <h2>HERRAMIENTAS Y SOFTWARE</h2>
                <ul>
                  <li>IDEs y entornos de desarrollo: Visual Studio, Visual Studio Code, Apache NetBeans</li>
                  <li>Bases de datos (herramienta): SQL Server Management Studio</li>
                  <li>Automatización / Orquestación: n8n</li>
                  <li>Redes y laboratorios: Cisco Packet Tracer</li>
                  <li>Sistemas operativos: Linux</li>
                  <li>Desarrollo móvil (entorno): Android Studio</li>
                </ul>
              </section>

              <section className="habilidades-blandas">
                <h2>HABILIDADES BLANDAS</h2>
                <ul>
                  <li>Organización y manejo del tiempo</li>
                  <li>Responsabilidad y cumplimiento</li>
                  <li>Trabajo en equipo y comunicación clara</li>
                  <li>Actitud de aprendizaje continuo</li>
                  <li>Perseverancia y constancia frente a retos</li>
                  <li>Adaptabilidad a nuevos entornos y tecnologías</li>
                </ul>
              </section>

              <section className="educacion">
                <h2>EDUCACIÓN</h2>
                <p>Ingeniería en Sistemas Computacionales - Universidad Latina de Costa Rica - 2021–Presente</p>
                <p>Bachiller en Educación Media - Liceo Ing. Manuel Benavides Rodríguez – 2009</p>
              </section>

              <section className="cursos-certificaciones">
                <h2>CURSOS Y CERTIFICACIONES</h2>
                <ul>
                  <li>Iniciación al desarrollo con IA - BIG School - 2025</li>
                  <li>Oracle Cloud Infrastructure 2025 AI Foundations Associate - Oracle University - 2025</li>
                  <li>Oracle Cloud Infrastructure 2025 Certified Foundations Associate - Oracle University - 2025</li>
                  <li>Automatización con Agentes de Inteligencia Artificial - Universidad Latina de Costa Rica - 2025</li>
                  <li>Azure AI Fundamentals - Microsoft - 2024</li>
                  <li>CCNA 2 v7: Switching, Routing, and Wireless Essentials - Cisco Networking Academy - 2024</li>
                  <li>Python Essentials 2 - INA - 2024</li>
                  <li>Python Essentials 1 - INA - 2024</li>
                  <li>CCNAv7: Introducción a Redes - Cisco Networking Academy - 2023</li>
                </ul>
              </section>

              <section className="idiomas">
                <h2>IDIOMAS</h2>
                <ul>
                  <li>Español: Nativo</li>
                  <li>Inglés: A2 (MCER)</li>
                </ul>
              </section>

              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <a className="btn-download" href="/CV_Diego_Campos_Borbon_2025.pdf" download>📄 Descargar CV en PDF</a>
              </div>
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

export default CV;
