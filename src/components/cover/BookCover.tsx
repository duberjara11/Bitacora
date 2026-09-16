import './BookCover.css'

type BookCoverProps = {
  isOpening: boolean
  onOpen: () => void
}

export default function BookCover({ isOpening, onOpen }: BookCoverProps) {
  return (
    <div
      className={`book-cover-stage ${isOpening ? 'opening' : ''}`}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ' ? onOpen() : null)}
      aria-label="Abrir bitácora creativa e ingresar a la mente"
    >
      <div className="cover-ambient-glow" />

      {/* Cuaderno de Artista Físico/Digital */}
      <article className="sketchbook-tome">
        {/* Esquinas doradas de protección */}
        <div className="corner-bracket corner-top-left" />
        <div className="corner-bracket corner-top-right" />
        <div className="corner-bracket corner-bottom-left" />
        <div className="corner-bracket corner-bottom-right" />

        {/* Textura y marco de costura */}
        <div className="stitch-border" />

        <header className="cover-header">
          <div className="institution-badge">
            <span>IUSH</span>
            <small>CREATIVIDAD EN SISTEMAS · 2026</small>
          </div>
          <div className="volume-tag">VOL. 01 / 20%</div>
        </header>

        {/* Emblema Central: El Cerebro Creativo / Medallón */}
        <div className="central-medallion">
          <div className="medallion-ring-outer" />
          <div className="medallion-ring-inner" />
          <div className="medallion-core">
            <img
              className="brain-relief-img"
              src="/brain-texture.svg"
              alt="Cerebro Creativo"
            />
            <div className="synapse-spark" />
          </div>
        </div>

        {/* Tipografía de Portada Intervenida */}
        <div className="cover-typography">
          <span className="cover-kicker">AUSTIN KLEON · BITÁCORA DE AUTOR</span>
          <h1 className="cover-title">
            ROBA COMO<br />
            <em>UN ARTISTA</em>
          </h1>
          <p className="cover-subtitle">
            Libro de Exploración Creativa & Red de Sinapsis
          </p>
        </div>

        {/* Sello de autenticidad y Botón de Apertura */}
        <footer className="cover-footer">
          <div className="wax-stamp">
            <span>MAPA</span>
            <strong>MENTAL</strong>
          </div>

          <div className="open-prompt">
            <span className="prompt-text">Haz clic para abrir la bitácora</span>
            <span className="prompt-arrow">↗</span>
          </div>

          <div className="author-tag">
            <span>AUTORÍA Y ESENCIA CREATIVA</span>
          </div>
        </footer>
      </article>
    </div>
  )
}
