import { useRef, useState, useEffect } from 'react';
import '../styles/Contacto.css';

export default function Contacto() {
    useEffect(() => {
        document.title = "Contacto"; // Cambia el título de la pestaña al visitar la página de contacto
    }, []);
    const formRef = useRef(null);
    const [formMessage, setFormMessage] = useState({ text: '', type: '' });

    function handleSubmit(e) {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        if (!form.checkValidity()) {
            // muestra nativo de validación
            form.reportValidity();
            return;
        }

        setFormMessage({ text: 'Gracias, tu mensaje ha sido recibido.', type: 'success' });
        form.reset();
    }

    function handleReset() {
        setFormMessage({ text: '', type: '' });
    }

    return (
        <main>
            <header>
                <nav className="navbar" role="navigation" aria-label="Main navigation">
                    <div className="logo">Diego Campos</div>
                    <ul className="nav-links">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/Intro">Acerca de mí</a></li>
                        <li><a href="/Carta">Carta</a></li>
                        <li><a href="/Evidencias">Evidencias</a></li>
                        <li><a href="/CV">Currículum Vitae</a></li>
                        <li><a href="/Diferencia">¿Qué me diferencia?</a></li>
                        <li><a href="/Contacto" className="active">Contacto</a></li>
                    </ul>
                </nav>
            </header>

            <section className="hero" aria-labelledby="hero-title">
                <div className="video-bg" aria-hidden="true">
                    <video autoPlay muted loop playsInline poster="images/preview.jpg">
                        <source src="videos/contacto.mp4" type="video/mp4" />
                        Tu navegador no soporta el video. Puedes descargarlo <a href="videos/215500_small.mp4">aquí</a>.
                    </video>
                </div>

                <div
                    className="hero-content"
                    aria-labelledby="hero-title"
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        maxWidth: 1400, // aumentado de 1100 a 1400
                        margin: '0 auto',
                        padding: '3rem 1rem',
                        boxSizing: 'border-box',
                        color: 'inherit'
                    }}
                >
                    <h1 id="hero-title" className="fade-in" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        Contacto
                    </h1>

                    <div
                        className="contact-grid"
                        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', alignItems: 'start' }}
                    >
                        <aside
                            className="contact-panel slide-up"
                            aria-labelledby="contact-info-heading"
                            style={{
                                background: 'rgba(0,0,0,0.45)',
                                padding: '1.25rem',
                                borderRadius: 10,
                                color: 'inherit'
                            }}
                        >
                            <h2 id="contact-info-heading" className="visually-hidden">
                                Información de contacto
                            </h2>

                            <p style={{ margin: '0 0 1rem 0', fontWeight: 600 }}>Encuéntrame en redes o escríbeme directamente</p>

                            <div className="contact-cards" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <a
                                    className="contact-card"
                                    href="mailto:dcamposborbon@gmail.com"
                                    style={{
                                        display: 'flex',
                                        gap: '0.75rem',
                                        alignItems: 'center',
                                        padding: '0.6rem',
                                        background: 'rgba(255,255,255,0.06)',
                                        borderRadius: 8,
                                        color: 'inherit',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <span
                                        aria-hidden="true"
                                        style={{
                                            width: 36,
                                            height: 36,
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'rgba(255,255,255,0.06)',
                                            borderRadius: '50%'
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </span>
                                    <span style={{ fontSize: '0.95rem' }}>dcamposborbon@gmail.com</span>
                                </a>

                                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                    <a
                                        href="https://www.linkedin.com/in/diego-campos-borb%C3%B3n/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-link"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.5rem 0.75rem',
                                            background: 'rgba(255,255,255,0.06)',
                                            borderRadius: 8,
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7C22.2 7.5 24 10 24 14.6V24h-5v-8.6c0-2.1-.1-4.8-3-4.8-3 0-3.4 2.3-3.4 4.6V24H8V8z" />
                                        </svg>
                                        <span style={{ fontSize: '0.9rem' }}>LinkedIn</span>
                                    </a>

                                    <a
                                        href="https://github.com/Dcb11CR"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-link"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.5rem 0.75rem',
                                            background: 'rgba(255,255,255,0.06)',
                                            borderRadius: 8,
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.63 1.59.23 2.77.11 3.06.75.81 1.2 1.84 1.2 3.1 0 4.43-2.71 5.41-5.29 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12 24 5.65 18.35.5 12 .5z" />
                                        </svg>
                                        <span style={{ fontSize: '0.9rem' }}>GitHub</span>
                                    </a>

                                    <a
                                        href="https://wa.me/+50686480047"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-link"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.5rem 0.75rem',
                                            background: 'rgba(255,255,255,0.06)',
                                            borderRadius: 8,
                                            color: 'inherit',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M20.52 3.48A11.8 11.8 0 0 0 12 .5C5.65.5.5 5.65.5 12c0 2.11.55 4.06 1.6 5.78L0 24l6.5-2.12A11.5 11.5 0 0 0 12 23.5c6.35 0 11.5-5.15 11.5-11.5 0-1.98-.53-3.84-1.48-5.52zM12 21c-1.02 0-2.02-.23-2.93-.66l-.21-.12-3.86 1.26 1.3-3.76-.12-.22A8.86 8.86 0 0 1 3.5 12C3.5 7.3 7.3 3.5 12 3.5S20.5 7.3 20.5 12 16.7 21 12 21zM17.2 14.3c-.3-.15-1.76-.87-2.03-.97-.27-.11-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.66-.51l-.56-.01c-.2 0-.52.07-.8.37-.28.3-1.07 1.04-1.07 2.54s1.1 2.95 1.25 3.15c.15.2 2.15 3.35 5.21 4.69 3.06 1.33 3.06.89 3.61.83.55-.07 1.76-.72 2.01-1.42.25-.7.25-1.29.18-1.42-.07-.13-.27-.2-.57-.35z" />
                                        </svg>
                                        <span style={{ fontSize: '0.9rem' }}>WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        </aside>

                        <section
                            className="contact-form slide-up"
                            aria-labelledby="form-heading"
                            style={{ background: 'rgba(255,255,255,0.06)', padding: '1.25rem', borderRadius: 10 }}
                        >
                            <h2 id="form-heading" style={{ margin: '0 0 0.75rem 0' }}>
                                Envíame un mensaje
                            </h2>

                            <form id="contactForm" ref={formRef} onSubmit={handleSubmit} onReset={handleReset} noValidate aria-describedby="required-note" style={{ display: 'grid', gap: '0.75rem' }}>
                                <p id="required-note" className="required-note" style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>
                                    Los campos marcados con <span aria-hidden="true">*</span> son obligatorios.
                                </p>

                                <div className="form-row" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label htmlFor="name" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                        Nombre <span aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        minLength={2}
                                        placeholder="Tu nombre"
                                        autoComplete="name"
                                        aria-required="true"
                                        style={{
                                            padding: '0.6rem',
                                            borderRadius: 6,
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            background: 'transparent',
                                            color: 'inherit'
                                        }}
                                    />
                                </div>

                                <div className="form-row" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label htmlFor="email" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                        Correo electrónico <span aria-hidden="true">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="tucorreo@ejemplo.com"
                                        autoComplete="email"
                                        aria-required="true"
                                        style={{
                                            padding: '0.6rem',
                                            borderRadius: 6,
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            background: 'transparent',
                                            color: 'inherit'
                                        }}
                                    />
                                </div>

                                <div className="form-row" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label htmlFor="message" style={{ fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                        Mensaje <span aria-hidden="true">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        minLength={10}
                                        placeholder="Escribe tu mensaje..."
                                        aria-required="true"
                                        style={{
                                            padding: '0.6rem',
                                            borderRadius: 6,
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            background: 'transparent',
                                            color: 'inherit',
                                            resize: 'vertical'
                                        }}
                                    />
                                </div>

                                <div className="form-actions" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.25rem' }}>
                                    <button type="reset" className="secondary" style={{ padding: '0.6rem 0.9rem', borderRadius: 6, border: '1px solid', background: 'none' }}>
                                        Borrar
                                    </button>
                                    <button type="submit" style={{ padding: '0.6rem 0.9rem', borderRadius: 6, border: 'none', background: 'none' }}>
                                        Enviar
                                    </button>
                                </div>

                                {formMessage.text ? (
                                    <p id="formMessage" className={`form-message ${formMessage.type}`} aria-live="polite" style={{ margin: '0.25rem 0 0 0' }}>
                                        {formMessage.text}
                                    </p>
                                ) : (
                                    <p id="formMessage" className="form-message" aria-live="polite" hidden style={{ margin: '0.25rem 0 0 0' }} />
                                )}
                            </form>
                        </section>
                    </div>

                    <p className="hero-note" style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
                        Responderé a la mayor brevedad posible.
                    </p>
                </div>

                <style>{`
                    @media (min-width: 860px) {
                        .contact-grid { grid-template-columns: 360px 1fr; gap:1.75rem; align-items:start; }
                    }
                `}</style>
            </section>

            <footer>
                <p>© 2025 Diego Campos Borbón</p>
            </footer>
        </main>
    );
}
