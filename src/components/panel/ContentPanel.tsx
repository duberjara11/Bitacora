import type { ConceptoContenido, PersonaContenido } from '../../data/puntos'
import './ContentPanel.css'

type PanelContent = PersonaContenido | ConceptoContenido

type ContentPanelProps = {
  content: PanelContent | null
  onClose: () => void
}

const isPersona = (content: PanelContent): content is PersonaContenido => 'frase' in content

const conceptDetails: Record<string, { chapter: string; purpose: string; fields: string[] }> = {
  escuela: { chapter: '01 / Roba como un artista', purpose: 'Sé tu propia escuela: tres libros que te gustaría leer y por qué.', fields: ['Libro 01 + justificación', 'Libro 02 + justificación', 'Libro 03 + justificación'] },
  pelicula: { chapter: '03 / Escribe el libro que quieres leer', purpose: 'Película animada favorita y una secuela original.', fields: ['Póster de la película', 'Sinopsis original', 'Póster y sinopsis de la secuela'] },
  proyectos: { chapter: '05 / Proyectos y hobbies', purpose: 'Actividades creativas para invertirles tiempo infinito.', fields: ['Proyecto 01 + diagrama', 'Proyecto 02 + diagrama', 'Proyecto 03 + diagrama'] },
  trabajo: { chapter: '06 / Haz un buen trabajo y compártelo', purpose: 'Referenciar el mejor trabajo y pensar su siguiente versión.', fields: ['Contexto y objetivo', 'Solución y resultados', 'Mejoras y evidencias'] },
  lugar: { chapter: '07 / La geografía ya no manda', purpose: 'El lugar que alimenta tu creatividad, vida social y espíritu.', fields: ['Fotografía o ilustración', 'Descripción del lugar', 'Razón de la elección'] },
  heroe: { chapter: '08 / Sé amable', purpose: 'Una carta corta a una persona real que admiras.', fields: ['Persona admirada', 'Carta', 'Ideal profesional que representa'] },
  promesa: { chapter: '09 / Sé aburrido', purpose: 'Un compromiso diario de creatividad durante al menos tres meses.', fields: ['Promesa creativa', 'Frecuencia diaria', 'Duración del compromiso'] },
}

export default function ContentPanel({ content, onClose }: ContentPanelProps) {
  if (!content) return null

  const persona = isPersona(content)
  const details = !persona ? conceptDetails[content.id] : { chapter: '01 / Roba como un artista', purpose: 'Trepa a tu propio árbol familiar: cinco personas, sus fotos y aquello que las identifica.', fields: ['Nombre de la persona', 'Fotografía', 'Frase célebre o concepto'] }

  return (
    <aside className="content-panel" aria-label="Contenido de neurona">
      <div className="panel-topline"><span className="panel-kicker">{persona ? 'PERSONA' : 'CONCEPTO'}</span><button className="panel-close" type="button" onClick={onClose} aria-label="Cerrar panel">×</button></div>
      <span className="panel-chapter">{details.chapter}</span>
      <h2>{persona ? content.nombre : content.titulo}</h2>
      <p className="panel-purpose">{details.purpose}</p>
      <div className="panel-divider" />
      {persona ? (
        <>
          {content.foto ? <img className="panel-photo" src={content.foto} alt={content.nombre} /> : <div className="panel-placeholder">FOTO PENDIENTE</div>}
          <div className="panel-field"><span>{details.fields[2]}</span><p>{content.frase}</p></div>
        </>
      ) : <><div className="panel-field"><span>Contenido actual</span><p>{content.contenido}</p></div><div className="panel-checklist">{details.fields.map((field) => <div className="panel-check" key={field}><i />{field}<b>PENDIENTE</b></div>)}</div></>}
    </aside>
  )
}
