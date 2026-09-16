import { useEffect } from 'react'
import type { PaginaLibro } from '../../data/puntos'
import './BookViewer.css'

type BookViewerProps = {
  pagina: PaginaLibro | null
  paginasTotales: PaginaLibro[]
  onSelectPagina: (pagina: PaginaLibro) => void
  onClose: () => void
}

export default function BookViewer({
  pagina,
  paginasTotales,
  onSelectPagina,
  onClose,
}: BookViewerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!pagina) return
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [pagina])

  if (!pagina) return null

  const currentIndex = paginasTotales.findIndex((p) => p.id === pagina.id)
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < paginasTotales.length - 1

  const handlePrev = () => {
    if (hasPrev) {
      onSelectPagina(paginasTotales[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (hasNext) {
      onSelectPagina(paginasTotales[currentIndex + 1])
    }
  }

  return (
    <section className="book-overlay" aria-label="Visor de Bitácora de Artista">
      <div className="book-backdrop" onClick={onClose} aria-hidden="true" />

      <div className="book-spread" role="dialog" aria-modal="true">
        {/* Lomo y encuadernación central */}
        <div className="book-spine" />

        {/* Borde superior del pliego con metadatos y botón de cerrar */}
        <header className="book-header">
          <div className="book-header-left">
            <span className="book-chapter-tag">{pagina.capitulo}</span>
            <span className="book-rubric-badge">{pagina.rubrica}</span>
          </div>

          <div className="book-header-right">
            <span className="book-page-counter">
              Pág. <b>{String(pagina.pageNumber).padStart(2, '0')}</b> / {paginasTotales.length}
            </span>
            <button
              className="book-close-btn"
              type="button"
              onClick={onClose}
              title="Volver a la red mental (Esc)"
              aria-label="Cerrar bitácora"
            >
              <span>Volver a la Mente</span>
              <kbd>ESC</kbd>
            </button>
          </div>
        </header>

        {/* Cuerpo del pliego: Dos caras (Izquierda: Metadatos/Notas al margen, Derecha: Contenido creativo) */}
        <div className="book-pages-container">
          {/* PÁGINA IZQUIERDA: Contexto, Notas al margen y Sellos */}
          <article className="book-page book-page-left">
            <div className="page-texture" />
            <div className="page-watermark">ROBA COMO UN ARTISTA</div>

            <div className="stamp-badge">{pagina.badgeSello}</div>

            <div className="page-left-header">
              <span className="page-category-label">
                {pagina.tipo === 'persona' ? 'ÁRBOL DE INFLUENCIAS' : 'EXPLORACIÓN CONCEPTUAL'}
              </span>
              <h2 className="page-title">{pagina.titulo}</h2>
              <p className="page-subtitle">{pagina.subtitulo}</p>
            </div>

            <div className="book-divider" />

            <div className="marginalia-box">
              <div className="washi-tape washi-tape-mini" />
              <span className="marginalia-label">Nota manuscrita de la bitácora:</span>
              <p className="marginalia-text">{pagina.notaAlMargen}</p>
            </div>

            <div className="book-quote-card">
              <span className="quote-label">Mandamiento de Austin Kleon:</span>
              <blockquote className="quote-text">
                «No esperes saber quién eres para poner las cosas en marcha. Haz el trabajo que amas y el trabajo te transformará.»
              </blockquote>
            </div>

            <footer className="page-left-footer">
              <span className="page-num-indicator">{pagina.pageNumber}</span>
              <span className="page-footer-note">IUSH · Creatividad en Sistemas</span>
            </footer>
          </article>

          {/* PÁGINA DERECHA: Contenido principal (Polaroids, Fichas, Proyectos) */}
          <article className="book-page book-page-right">
            <div className="page-texture" />

            {/* Renderizado para PERSONA (Capítulo 1: Árbol Familiar) */}
            {pagina.tipo === 'persona' && pagina.persona && (
              <div className="persona-spread">
                <div className="polaroid-wrapper">
                  <div className="washi-tape washi-tape-top" />
                  <div className="polaroid-frame">
                    {pagina.persona.foto ? (
                      <img
                        className="polaroid-img"
                        src={pagina.persona.foto}
                        alt={pagina.persona.nombre}
                      />
                    ) : (
                      <div className="polaroid-placeholder">
                        <span className="polaroid-prompt">REGISTRO VISUAL</span>
                        <small>(Espacio reservado para fotografía)</small>
                      </div>
                    )}
                    <figcaption className="polaroid-caption">
                      <strong>{pagina.persona.nombre}</strong>
                      <span>{pagina.persona.rol}</span>
                    </figcaption>
                  </div>
                </div>

                <div className="persona-details">
                  <div className="persona-quote-card">
                    <span className="field-tag">Frase Célebre / Concepto Clave</span>
                    <p className="persona-quote-text">{pagina.persona.frase}</p>
                  </div>

                  <div className="persona-lesson-card">
                    <span className="field-tag">Huella Creativa en mi Formación</span>
                    <p className="persona-lesson-text">{pagina.persona.leccion}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Renderizado para CONCEPTO (Película, Escuela, Proyectos, Trabajo, etc.) */}
            {pagina.tipo === 'concepto' && pagina.concepto && (
              <div className="concepto-spread">
                <p className="concepto-intro">{pagina.concepto.descripcion}</p>

                {pagina.concepto.items && pagina.concepto.items.length > 0 && (
                  <div className="concepto-items-grid">
                    {pagina.concepto.items.map((item, idx) => (
                      <div key={idx} className="concepto-card">
                        <div className="concepto-card-header">
                          {item.icono && <span className="concepto-card-icon">{item.icono}</span>}
                          <span className="concepto-card-tag">{item.etiqueta || 'APUNTE'}</span>
                        </div>
                        <h3 className="concepto-card-title">{item.titulo}</h3>
                        <p className="concepto-card-detail">{item.detalle}</p>
                      </div>
                    ))}
                  </div>
                )}

                {pagina.concepto.metaInfo && (
                  <div className="concepto-dossier">
                    <div className="dossier-grid">
                      {Object.entries(pagina.concepto.metaInfo).map(([key, value]) => (
                        <div key={key} className="dossier-row">
                          <strong className="dossier-key">{key}:</strong>
                          <span className="dossier-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {pagina.concepto.evidencia && (
                  <div className="evidencia-box">
                    <span className="evidencia-tag">
                      {pagina.concepto.etiquetaEvidencia || 'Registro Visual de la Bitácora'}
                    </span>
                    {pagina.concepto.evidencia.endsWith('.jpg') || pagina.concepto.evidencia.endsWith('.png') ? (
                      <div className="evidencia-poster-wrapper">
                        <img
                          src={pagina.concepto.evidencia}
                          alt="Registro visual de la bitácora"
                          className="evidencia-poster-img"
                        />
                      </div>
                    ) : (
                      <p className="evidencia-text">{pagina.concepto.evidencia}</p>
                    )}
                  </div>
                )}

                {pagina.concepto.reflexion && (
                  <div className="concepto-reflexion">
                    <p className="reflexion-text">{pagina.concepto.reflexion}</p>
                  </div>
                )}
              </div>
            )}

            <footer className="page-right-footer">
              <span className="page-footer-note">Libro de Exploración Creativa</span>
              <span className="page-num-indicator">{pagina.pageNumber + 1}</span>
            </footer>
          </article>
        </div>

        {/* Barra de navegación de páginas (Anterior / Siguiente) */}
        <footer className="book-footer">
          <button
            className={`nav-page-btn prev-btn ${!hasPrev ? 'disabled' : ''}`}
            type="button"
            onClick={handlePrev}
            disabled={!hasPrev}
            aria-label="Página anterior"
          >
            <span className="btn-arrow">←</span>
            <div className="btn-label">
              <small>ANTERIOR</small>
              <span>{hasPrev ? paginasTotales[currentIndex - 1].titulo : 'Inicio'}</span>
            </div>
          </button>

          <div className="book-ribbon-nav">
            <span className="ribbon-text">Exploración: {currentIndex + 1} de {paginasTotales.length}</span>
            <div className="ribbon-dots">
              {paginasTotales.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  className={`ribbon-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => onSelectPagina(p)}
                  title={`Pág. ${p.pageNumber}: ${p.titulo}`}
                  aria-label={`Ir a página ${p.pageNumber}`}
                />
              ))}
            </div>
          </div>

          <button
            className={`nav-page-btn next-btn ${!hasNext ? 'disabled' : ''}`}
            type="button"
            onClick={handleNext}
            disabled={!hasNext}
            aria-label="Página siguiente"
          >
            <div className="btn-label">
              <small>SIGUIENTE</small>
              <span>{hasNext ? paginasTotales[currentIndex + 1].titulo : 'Fin del Libro'}</span>
            </div>
            <span className="btn-arrow">→</span>
          </button>
        </footer>
      </div>
    </section>
  )
}
