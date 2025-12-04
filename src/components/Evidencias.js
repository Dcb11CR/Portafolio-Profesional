import { useState, useEffect, useRef } from "react";
import "../styles/Evidencias.css"; // ajusta la ruta según tu proyecto

// /src/components/Evidencias.js
const ITEMS = [
    {
        type: "certificado",
        title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
        desc: "Certificación de Oracle Cloud sobre IA: valida conocimientos fundamentales (modelos, casos de uso, ética, machine learning)",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=0AD758A966D059B39DD2CDCA4223750C9FDA325DD139ED21FCADBBBCE01E7509",
        img: "images/Oracle.jpg",
    },
    {
        type: "certificado",
        title: "Azure AI Fundamentals (AI-900)",
        desc: "Fundamentos de IA y servicios de Microsoft Azure: modelos, soluciones cognitivas y IA responsable.",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/Dcb11CR/6E37E89046C3294C?sharingId=DF2A0CC85D1E883A",
        img: "images/AI 900.jpg",
    },
    {
        type: "certificado",
        title: "CCNAv7: Introduction to Networks",
        desc: "Fundamentos de redes: modelos, protocolos y direccionamiento IPv4/IPv6.",
        link: "https://www.credly.com/badges/ece8c62b-1b16-4c8b-849b-ca838b6552f4/public_url",
        img: "images/Redes 1.jpg",
    },
    {
        type: "certificado",
        title: "CCNA 2 v7: Switching, Routing and Wireless Essentials",
        desc: "Switching, routing, tecnologías inalámbricas y prácticas de seguridad en redes.",
        link: "https://www.credly.com/badges/2e9fbdfa-a033-4aed-813e-e2313f51e27d/public_url",
        img: "images/Redes 2.jpg",
    },
    {
        type: "curso",
        title: "Automatización con Agentes de Inteligencia Artificial",
        desc: "Curso sobre agentes de IA para automatizar flujos, integrar APIs y procesar información.",
        link: "images/Certificado de Automatización.jpg",
        img: "images/Certificado de Automatización.jpg",
    },
    {
        type: "proyecto",
        title: "Migración y cifrado E2EE en aplicación de chat en tiempo real",
        desc: "Proyecto de migración y cifrado de extremo a extremo para chat en tiempo real.",
        link: "https://github.com/Dcb11CR",
        img: "images/Progra Movil.jpg",
    },
];

export default function Evidencias() {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("all");
    const [preview, setPreview] = useState(null);
    const closeBtnRef = useRef(null);

    useEffect(() => {
        document.title = "Evidencias"; // Cambia el título de la pestaña al visitar la página de evidencias
    }, []);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") {
                setPreview(null);
            }
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        if (preview && closeBtnRef.current) closeBtnRef.current.focus();
    }, [preview]);

    const visible = ITEMS.filter((item) => {
        const q = query.trim().toLowerCase();
        const matchesQuery =
            !q ||
            item.title.toLowerCase().includes(q) ||
            item.desc.toLowerCase().includes(q);
        const matchesFilter = filter === "all" || item.type === filter;
        return matchesQuery && matchesFilter;
    });

    function handleCardKey(e, item) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setPreview(item);
        }
    }

    return (
        <div className="evidencias-page">
            <header>
                <nav className="navbar">
                    <div className="logo">Diego Campos</div>
                    <ul className="nav-links">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/Intro">Acerca de mí</a></li>
                        <li><a href="/Carta">Carta</a></li>
                        <li><a href="/Evidencias" className="active">Evidencias</a></li>
                        <li><a href="/CV">Currículum Vitae</a></li>
                        <li><a href="/Diferencia">¿Qué me diferencia?</a></li>
                        <li><a href="/Contacto">Contacto</a></li>
                    </ul>
                </nav>
            </header>

            <main>

                <section className="evidencias-cards" aria-labelledby="evidencias-title">
                       <div className="video-bg" aria-hidden="true">
                        <video autoPlay muted loop playsInline poster="images/preview.jpg">
                            <source src="videos/evidencias.mp4" type="video/mp4" />
                            Tu navegador no soporta el video. Puedes descargarlo{' '}
                            <a href="videos/215500_small.mp4">aquí</a>.
                        </video>
                    </div>

                    <h1 id="evidencias-title">Evidencias</h1>
                    <div className="controls">

                        <div className="controls-row">

                            <input
                                id="search-evidencias"
                                type="search"
                                placeholder="Buscar evidencias..."
                                aria-label="Buscar evidencias"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <select
                                id="filter-evidencias"
                                aria-label="Filtrar por tipo"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                <option value="all">Todas</option>
                                <option value="certificado">Certificado</option>
                                <option value="curso">Curso</option>
                                <option value="proyecto">Proyecto</option>
                            </select>
                        </div>
                    </div>

                    <div className="cards-grid" role="list" id="evidence-list">
                        {visible.map((item, i) => (
                            <article
                                key={i}
                                className="card evidence-item"
                                role="listitem"
                                data-type={item.type}
                                data-title={item.title}
                                data-desc={item.desc}
                                data-link={item.link}
                                data-img={item.img}
                                tabIndex="0"
                                onKeyDown={(e) => handleCardKey(e, item)}
                            >
                                <div className="card-figure">
                                    <img loading="lazy" src={item.img} alt={item.title} />
                                </div>
                                <div className="card-body">
                                    <div className="meta-block">
                                        <p className="meta-type">{item.type === "certificado" ? "Certificado" : item.type === "curso" ? "Curso" : "Proyecto"}</p>
                                        <h2 className="meta-title">{item.title}</h2>
                                        <p className="meta-desc">{item.desc}</p>
                                    </div>
                                    <div className="card-actions">
                                        <button
                                            className="open-btn card-btn"
                                            type="button"
                                            aria-label={`Abrir ${item.title}`}
                                            onClick={() => setPreview(item)}
                                        >
                                            Ver
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <p>© 2025 Diego Campos Borbón</p>
            </footer>

            {preview && (
                <div
                    className="preview-overlay"
                    role="dialog"
                    aria-labelledby="preview-title"
                    aria-modal="true"
                    onClick={(e) => { if (e.target.classList.contains('preview-overlay')) setPreview(null); }}
                >
                    <div className="preview-panel">
                        <button
                            className="close-preview"
                            aria-label="Cerrar"
                            onClick={() => setPreview(null)}
                            ref={closeBtnRef}
                        >
                            ×
                        </button>
                        <div className="preview-inner">
                            <figure className="preview-figure">
                                <img id="preview-img" src={preview.img} alt={preview.title} />
                            </figure>
                            <div className="preview-meta">
                                <h2 id="preview-title">{preview.title}</h2>
                                <p id="preview-desc" style={{ marginTop: "0.5rem" }}>{preview.desc}</p>
                                <a
                                    id="preview-link"
                                    className="preview-link"
                                    href={preview.link || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {preview.link && preview.link !== "#" ? "Ver certificado / repositorio" : "Ver detalles"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

