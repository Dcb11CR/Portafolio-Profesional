// src/components/Diferencia.js
import React, { useEffect } from 'react';
import '../styles/Diferencia.css';

const Diferencia = () => {
    useEffect(() => {
        document.title = "¿Qué me diferencia?";
    }, []);

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="logo">Diego Campos</div>
                    <ul className="nav-links">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/Intro">Acerca de mí</a></li>
                        <li><a href="/Carta">Carta</a></li>
                        <li><a href="/Evidencias">Evidencias</a></li>
                        <li><a href="/CV">Currículum Vitae</a></li>
                        <li><a href="/Diferencia" className="active">¿Qué me diferencia?</a></li>
                        <li><a href="/Contacto">Contacto</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="hero" aria-labelledby="hero-title">
                    <div className="video-bg" aria-hidden="true">
                        <video autoPlay muted loop playsInline poster="images/preview.jpg">
                            <source src="videos/diferencia.mp4" type="video/mp4" />
                            Tu navegador no soporta el video. Puedes descargarlo <a href="videos/215500_small.mp4">aquí</a>.
                        </video>
                    </div>

                    <div className="hero-content container" role="region" aria-labelledby="hero-title">
                        <div className="hero-grid">
                            <div className="hero-left">
                                <h1 id="hero-title" className="fade-in">¿Qué me diferencia?</h1>
                                <p className="lead">
                                    Lo que me diferencia no es la cantidad de experiencia, sino la forma en la que trabajo, aprendo y asumo cada reto. Soy una persona ordenada, paciente y constante, con una mentalidad que prioriza la claridad antes que la velocidad. Cuando tengo un problema enfrente, no salto directamente a la solución: primero lo analizo, lo divido en partes entendibles y pienso en la forma más limpia y sostenible de resolverlo. Me gusta que todo lo que hago quede claro, reproducible y con la documentación necesaria para que cualquier otra persona pueda continuar el trabajo sin depender de mí. Considero que este enfoque es especialmente valioso cuando se está iniciando, porque permite construir bases sólidas que facilitan el crecimiento profesional a largo plazo.
                                </p>
                            </div>

                            <aside className="hero-right" id="details" aria-label="Detalles sobre qué me diferencia">
                                <details>
                                    <summary>Forma de trabajo</summary>
                                    <p>Mi forma de trabajo se basa en entregas pequeñas y claras, en escuchar al equipo y en aplicar mejoras visibles en cada versión. Avanzo todos los días un poco, incluso cuando el tema es complejo. Si no sé algo, lo investigo; si me estanco, pido ayuda; y si encuentro una solución, la documento para no repetir el error en el futuro. Además, tengo la costumbre de pedir retroalimentación de manera temprana, porque creo en mejorar iterando, no esperando hasta el final.</p>
                                </details>

                                <details>
                                    <summary>Desarrollo de software</summary>
                                    <p>En el área de desarrollo de software, trabajo con disciplina y atención al detalle. Me enfoco en construir soluciones organizadas, donde el código esté separado por responsabilidades, tenga un diseño simple y sea fácil de leer y mantener. Creo que la claridad es una forma de respeto hacia el equipo y hacia el futuro del proyecto. Cuando programo, cuido el manejo de errores, escribo pruebas básicas para validar comportamientos esenciales y dejo una estructura que permite entender qué hace cada parte del sistema sin tener que “adivinar”. Aunque sigo en formación, trato de aplicar buenas prácticas desde el inicio, porque sé que los hábitos correctos se construyen desde los primeros proyectos, no después.</p>
                                </details>

                                <details>
                                    <summary>Ciberseguridad ofensiva</summary>
                                    <p>En ciberseguridad ofensiva, estoy en un nivel introductorio, basado en lo aprendido en el ISC; sin embargo, mi enfoque es completamente responsable y metodológico. Me interesa el hacking ético entendido como un proceso ordenado, que empieza con un alcance definido y autorizado, continúa con reconocimiento y enumeración cuidadosa, y luego avanza hacia la validación de hallazgos con evidencia clara y reproducible. Me guío por buenas prácticas como las del OWASP, y siempre busco que cualquier trabajo o ejercicio esté dentro de un marco legal y ético. Mi prioridad no es “explotar fallas”, sino aprender el método correcto para identificar riesgos, analizarlos con criterio y comunicarlos de manera profesional.</p>
                                </details>

                                <details>
                                    <summary>Constancia y mejora continua</summary>
                                    <p>Un rasgo que considero clave en mi perfil es mi constancia. Avanzo todos los días un poco, incluso cuando el tema es complejo. Si no sé algo, lo investigo; si me estanco, pido ayuda; y si encuentro una solución, la documento para no repetir el error en el futuro.</p>
                                    <p>También valoro mucho la disciplina: cumplir tiempos, planificar con anticipación, comunicar avances y cuidar la calidad de cada entrega. Me gustaría que, más allá de lo técnico, se me reconozca como alguien confiable, que trabaja de manera ordenada y que siempre está buscando aprender un poco más cada semana. Siento que esta combinación de claridad, paciencia, responsabilidad y deseo de crecer es lo que realmente me distingue en esta etapa de mi formación profesional.</p>
                                </details>
                            </aside>
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

export default Diferencia;
