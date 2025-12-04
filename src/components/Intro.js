// src/components/Intro.js

import React, { useEffect } from 'react';
import '../styles/Intro.css'; // Importa el archivo CSS correspondiente

const Intro = () => {
  useEffect(() => {
    document.title = "Acerca de mí"; // Cambia el título de la pestaña al visitar la página de contacto
  }, []);
    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="logo">Diego Campos</div>
                    <ul className="nav-links">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/Intro" className="active">Acerca de mí</a></li>
                        <li><a href="/Carta">Carta</a></li>
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
                            <source src="videos/intro.mp4" type="video/mp4" />
                            Tu navegador no soporta el video. Puedes descargarlo{' '}
                            <a href="videos/intro.mp4">aquí</a>.
                        </video>
                    </div>

                    <div className="hero-content container" aria-labelledby="hero-title">
                        <div className="hero-inner">
                            {/* LEFT: Texto principal */}
                            <div className="hero-text">
                                <h1 id="hero-title" className="fade-in">Acerca de mí</h1>

                                <div className="hero-bio slide-up" role="region" aria-label="Biografía">
                                    <p>
                                        ¡Hola! Soy Diego Campos Borbón, un apasionado estudiante de Ingeniería en Sistemas
                                        con un enfoque en el desarrollo de software y ciberseguridad. Desde que
                                        comencé mi carrera universitaria, he adquirido una gran variedad de conocimientos, tanto
                                        en el área técnica como en la resolución de problemas y la gestión de proyectos.
                                    </p>

                                    <p>
                                        Mi enfoque profesional se basa en la mejora continua y en la importancia de construir bases
                                        sólidas. En el desarrollo de software, me he especializado en lenguajes como Java, C#, Python
                                        y C++, y me encanta crear soluciones eficientes y de alta calidad. A través de mi experiencia
                                        en proyectos académicos y personales, he aprendido a trabajar en equipo, manejar versiones de
                                        código, aplicar buenas prácticas de programación y documentar todo para asegurar que mi trabajo
                                        sea claro, entendible y mantenible a largo plazo.
                                    </p>

                                    <p>
                                        Además de mi formación en desarrollo de software, he explorado el campo de la ciberseguridad. Me
                                        interesa profundamente el hacking ético y la manera en que los profesionales de seguridad
                                        protegen los sistemas y la información. Estoy aprendiendo sobre pruebas de penetración, auditorías
                                        de seguridad y el uso de herramientas de escaneo de vulnerabilidades.
                                    </p>

                                    <p>
                                        A largo plazo, me gustaría especializarme en áreas como el desarrollo backend, automatización de
                                        procesos y seguridad informática. Este portafolio refleja mis avances, mis proyectos y el camino
                                        que he recorrido hasta ahora.
                                    </p>

                                    <h3>Habilidades</h3>
                                    <ul className="skill-list">
                                        <li className="skill">Java</li>
                                        <li className="skill">C#</li>
                                        <li className="skill">Python</li>
                                        <li className="skill">C++</li>
                                        <li className="skill">Git</li>
                                        <li className="skill">Seguridad</li>
                                    </ul>
                                </div>
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

export default Intro;

