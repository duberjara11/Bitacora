import { useEffect, useMemo, useRef } from 'react'
import { animate } from 'animejs'
import ForceGraph2D from 'react-force-graph-2d'
import type { ForceGraphMethods } from 'react-force-graph-2d'
import type { Canal, DatosGrafo, Neurona } from '../../types/grafos'
import './NeuralGraph.css'

type Dendrite = { angle: number; length: number; bend: number }
type GraphNode = Neurona & { x?: number; y?: number; fx?: number; fy?: number; val?: number; dendrites?: Dendrite[] }
type GraphMethods = ForceGraphMethods<GraphNode, Canal>

type NeuralGraphProps = {
  data: DatosGrafo
  selectedNodeId?: string | null
  resetView: number
  onSelect: (node: Neurona) => void
}

const nodeColor = (node: GraphNode) => {
  if (node.tipo === 'central') return '#f59e0b'
  return node.tipo === 'persona' ? '#f59e0b' : '#38bdf8'
}

const nodeGlowColor = (node: GraphNode) => {
  if (node.tipo === 'central') return 'rgba(245, 158, 11, 0.65)'
  return node.tipo === 'persona' ? 'rgba(245, 158, 11, 0.45)' : 'rgba(56, 189, 248, 0.45)'
}

const createRadialData = (data: DatosGrafo): DatosGrafo => {
  const satellites = data.nodes.filter((node) => node.tipo !== 'central')
  const nodes = data.nodes.map((node) => {
    if (node.tipo === 'central') return { ...node, x: 0, y: 0, fx: 0, fy: 0, val: 14 }
    const index = satellites.findIndex((satellite) => satellite.id === node.id)
    const angle = (index / satellites.length) * Math.PI * 2 - Math.PI / 2
    const radius = node.relevancia === 'primaria' ? 220 : 275
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    const dendrites = Array.from({ length: 4 }, (_, branch) => ({
      angle: (branch / 4) * Math.PI * 2 + index * 0.37,
      length: node.relevancia === 'primaria' ? 28 + (index % 3) * 3 : 21 + (index % 3) * 2,
      bend: (branch % 2 === 0 ? 1 : -1) * 5,
    }))
    return { ...node, x, y, fx: x, fy: y, val: node.relevancia === 'primaria' ? 4 : 2, dendrites }
  }).sort((first, second) => ({ secundaria: 0, primaria: 1 }[first.relevancia] - { secundaria: 0, primaria: 1 }[second.relevancia]))
  return { ...data, nodes }
}

export default function NeuralGraph({ data, selectedNodeId, resetView, onSelect }: NeuralGraphProps) {
  const graphRef = useRef<GraphMethods | undefined>(undefined)
  const hoverScale = useRef(new Map<string, { value: number }>())
  const orderedData = useMemo(() => createRadialData(data), [data])

  useEffect(() => {
    if (resetView === 0) return
    graphRef.current?.centerAt(0, 0, 500)
    graphRef.current?.zoom(1, 500)
  }, [resetView])

  // Sincronización de cámara cuando el usuario pasa páginas desde el libro
  useEffect(() => {
    if (!selectedNodeId) return
    const targetNode = orderedData.nodes.find((n) => n.id === selectedNodeId) as GraphNode | undefined
    if (targetNode && typeof targetNode.x === 'number' && typeof targetNode.y === 'number') {
      const link = data.links.find((candidate) => candidate.target === targetNode.id)
      if (link) graphRef.current?.emitParticle(link)
      graphRef.current?.centerAt(targetNode.x, targetNode.y, 450)
      graphRef.current?.zoom(targetNode.relevancia === 'primaria' ? 4.4 : 3.8, 450)
    }
  }, [selectedNodeId, orderedData, data.links])

  const handleNodeClick = (node: GraphNode) => {
    const link = data.links.find((candidate) => candidate.target === node.id)
    if (link) graphRef.current?.emitParticle(link)
    graphRef.current?.centerAt(node.x, node.y, 480)
    graphRef.current?.zoom(node.tipo === 'central' ? 2.5 : node.relevancia === 'primaria' ? 4.4 : 3.8, 480)
    onSelect(node)
  }

  const handleNodeHover = (node: GraphNode | null) => {
    const previous = [...hoverScale.current.entries()].find(([, state]) => state.value > 1)
    if (previous) {
      animate(previous[1], { value: 1, duration: 180, ease: 'out(2)', onUpdate: () => graphRef.current?.resumeAnimation() })
    }
    if (!node) return
    const state = hoverScale.current.get(node.id) ?? { value: 1 }
    hoverScale.current.set(node.id, state)
    animate(state, { value: 1.25, duration: 180, ease: 'out(2)', onUpdate: () => graphRef.current?.resumeAnimation() })
  }

  const drawNode = (node: GraphNode, context: CanvasRenderingContext2D, globalScale: number) => {
    const isCentral = node.tipo === 'central'
    const primary = node.relevancia === 'primaria'
    const radius = isCentral ? 30 : primary ? 12 : 9
    const scale = hoverScale.current.get(node.id)?.value ?? 1
    const drawnRadius = radius * scale
    const x = node.x ?? 0
    const y = node.y ?? 0

    context.save()
    context.globalAlpha = 1
    context.shadowColor = nodeGlowColor(node)
    context.shadowBlur = isCentral ? 36 : 16

    // Círculo principal del nodo
    context.beginPath()
    context.arc(x, y, drawnRadius, 0, 2 * Math.PI)

    if (isCentral) {
      const gradient = context.createRadialGradient(x, y, 0, x, y, drawnRadius)
      gradient.addColorStop(0, '#fffbeb')
      gradient.addColorStop(0.4, '#fde68a')
      gradient.addColorStop(0.8, '#f59e0b')
      gradient.addColorStop(1, '#b45309')
      context.fillStyle = gradient
    } else {
      context.fillStyle = nodeColor(node)
    }

    context.fill()
    context.shadowBlur = 0

    // Anillo exterior decorativo
    if (isCentral) {
      context.strokeStyle = 'rgba(253, 230, 138, 0.5)'
      context.lineWidth = 1.5
      context.setLineDash([4, 3])
      context.beginPath()
      context.arc(x, y, drawnRadius + 7, 0, 2 * Math.PI)
      context.stroke()
      context.setLineDash([])
    }

    // Dendritas biológicas para los nodos satélites
    if (!isCentral) {
      context.strokeStyle = nodeColor(node)
      context.globalAlpha = 0.85
      context.lineWidth = primary ? 1.8 : 1.1
      for (const dendrite of node.dendrites ?? []) {
        const startX = x + Math.cos(dendrite.angle) * drawnRadius * 0.7
        const startY = y + Math.sin(dendrite.angle) * drawnRadius * 0.7
        const endX = x + Math.cos(dendrite.angle) * (drawnRadius + dendrite.length * scale)
        const endY = y + Math.sin(dendrite.angle) * (drawnRadius + dendrite.length * scale)
        const controlX = x + Math.cos(dendrite.angle) * (drawnRadius + dendrite.length * scale * 0.55) + Math.cos(dendrite.angle + Math.PI / 2) * dendrite.bend
        const controlY = y + Math.sin(dendrite.angle) * (drawnRadius + dendrite.length * scale * 0.55) + Math.sin(dendrite.angle + Math.PI / 2) * dendrite.bend
        context.beginPath()
        context.moveTo(startX, startY)
        context.quadraticCurveTo(controlX, controlY, endX, endY)
        context.stroke()
        context.beginPath()
        context.arc(endX, endY, primary ? 2.2 : 1.3, 0, 2 * Math.PI)
        context.fillStyle = nodeColor(node)
        context.fill()
      }
    }
    context.restore()

    // Símbolo del núcleo central (Sello de autor / Chispa en lugar de emoji plano)
    if (isCentral) {
      context.save()
      context.fillStyle = '#0a0c1a'
      context.font = `bold ${14 / globalScale}px 'Syne', sans-serif`
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      context.fillText('✦ AUTOR', x, y)
      context.restore()
    }

    // Etiqueta tipográfica
    context.save()
    context.globalAlpha = 0.95
    context.font = isCentral
      ? `bold ${12 / globalScale}px 'Syne', sans-serif`
      : `${Math.max(7.5, (primary ? 10.5 : 9) / globalScale)}px 'DM Sans', sans-serif`
    context.textAlign = 'center'
    context.textBaseline = 'top'
    context.fillStyle = isCentral ? '#fef08a' : node.tipo === 'persona' ? '#fde68a' : '#bae6fd'
    context.fillText(node.nombre, x, y + radius + 7 / globalScale)
    context.restore()
  }

  return (
    <div className="neural-graph">
      <ForceGraph2D
        ref={graphRef}
        graphData={orderedData}
        autoPauseRedraw
        backgroundColor="rgba(0, 0, 0, 0)"
        nodeId="id"
        nodeLabel="nombre"
        nodeCanvasObject={drawNode}
        nodeCanvasObjectMode={(node) => (node.relevancia === 'secundaria' ? 'before' : 'replace')}
        onNodeClick={handleNodeClick}
        onNodeHover={handleNodeHover}
        linkColor={() => 'rgba(245, 158, 11, 0.28)'}
        linkWidth={0.8}
        linkDirectionalParticles={1}
        linkDirectionalParticleColor={() => '#fde047'}
        linkDirectionalParticleWidth={2.8}
        linkCurvature={0.25}
        cooldownTicks={0}
        warmupTicks={0}
        d3AlphaDecay={1}
        d3VelocityDecay={1}
        enableNodeDrag={false}
        enableZoomInteraction
        enablePanInteraction
      />
    </div>
  )
}
