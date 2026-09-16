import { useEffect, useRef, useState } from 'react'
import { animate } from 'animejs'
import RippleDistortion from './components/graph/RippleDistortion'
import NeuralGraph from './components/graph/NeuralGraph'
import BookCover from './components/cover/BookCover'
import BookViewer from './components/book/BookViewer'
import { grafoData, paginasLibro, type PaginaLibro } from './data/puntos'
import type { Neurona } from './types/grafos'
import './App.css'

function App() {
  const [entered, setEntered] = useState(false)
  const [showGraph, setShowGraph] = useState(false)
  const [entryGone, setEntryGone] = useState(false)
  const [selectedPage, setSelectedPage] = useState<PaginaLibro | null>(null)
  const [resetView, setResetView] = useState(0)
  const sceneRef = useRef<HTMLElement>(null)

  useEffect(() => {
    animate('.hero-copy', {
      opacity: [0, 1],
      translateY: [25, 0],
      duration: 1000,
      ease: 'out(3)',
    })
  }, [])

  const enterGraph = () => {
    if (entered) return
    setEntered(true)
    window.setTimeout(() => setShowGraph(true), 300)
    window.setTimeout(() => setEntryGone(true), 600)
  }

  const handleSelectNode = (node: Neurona) => {
    if (node.tipo === 'central') {
      // Si hace clic en la central, abrir la primera página del árbol o la última explorada
      setSelectedPage(selectedPage ?? paginasLibro[0])
      return
    }
    const foundPage = paginasLibro.find((p) => p.id === node.id)
    if (foundPage) {
      setSelectedPage(foundPage)
    }
  }

  const handleSelectPage = (page: PaginaLibro) => {
    setSelectedPage(page)
  }

  const handleCloseBook = () => {
    setSelectedPage(null)
    setResetView((val) => val + 1)
  }

  const openFirstPage = () => {
    setSelectedPage(paginasLibro[0])
  }

  return (
    <main ref={sceneRef} className="neural-page">
      {/* Fondo de distorsión líquida interactiva con OGL */}
      {entryGone && (
        <div className="ripple-background">
          <RippleDistortion
            src="/brain-texture.svg"
            trigger="hover"
            brushSize={140}
            strength={0.15}
            swirl={0.75}
            rings={3}
            dispersion={0.07}
            glint={0.2}
            quality="low"
            className="ripple-layer"
            style={{}}
          />
        </div>
      )}

      {/* Esferas de iluminación ambiental */}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* PORTADA ARTÍSTICA INTERVENIDA (ENTRADA AL CUADERNO MENTAL) */}
      {!entryGone && <BookCover isOpening={entered} onOpen={enterGraph} />}

      {/* BARRA SUPERIOR (HUD) */}
      <header className="topbar">
        <div className="wordmark-group">
          <span className="wordmark">BITÁCORA DE ARTISTA</span>
          <span className="wordmark-sub">IUSH · CREATIVIDAD EN SISTEMAS</span>
        </div>

        {entryGone && (
          <div className="hud-actions">
            <button
              type="button"
              className="open-book-action-btn"
              onClick={openFirstPage}
              title="Abrir cuaderno de exploración completa"
            >
              <span className="action-icon">📖</span>
              <span>Abrir Cuaderno Completo</span>
            </button>
            <span className="hint">12 PÁGINAS / 10 CAPÍTULOS</span>
          </div>
        )}
      </header>

      {/* TÍTULO HERO AMBIENTAL */}
      <section className="hero-copy">
        <p className="kicker">AUSTIN KLEON · EXPLORACIÓN</p>
        <h1>
          El Mapa de<br />
          <em>la Mente.</em>
        </h1>
        <p className="intro">
          Cada sinapsis es una página de mi bitácora. Explora el árbol de influencias y los retos creativos.
        </p>
      </section>

      {/* EL GRAFO NEURONAL INTERACTIVO */}
      {entryGone && (
        <div className={`graph-reveal ${showGraph ? 'visible' : ''}`}>
          <NeuralGraph
            data={grafoData}
            selectedNodeId={selectedPage?.id}
            resetView={resetView}
            onSelect={handleSelectNode}
          />
        </div>
      )}

      {/* CAPA DE ENFOQUE Y RESPLANDOR */}
      {selectedPage && <div className="capa-enfoque" aria-hidden="true" />}

      {/* VISOR DE CUADERNO / LIBRO DE ARTISTA */}
      <BookViewer
        pagina={selectedPage}
        paginasTotales={paginasLibro}
        onSelectPagina={handleSelectPage}
        onClose={handleCloseBook}
      />

      {/* PISTA DE INTERACCIÓN EN EL PIE DE PÁGINA */}
      {!selectedPage && entryGone && (
        <footer className="selection-hint">
          <span>Haz clic en una neurona o pulsa</span>
          <button type="button" className="inline-book-btn" onClick={openFirstPage}>
            «Abrir Cuaderno»
          </button>
          <span className="hint-arrow">↗</span>
        </footer>
      )}
    </main>
  )
}

export default App
