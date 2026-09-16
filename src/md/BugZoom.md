
# Tarea: corregir lag en la animación de zoom del cerebro

Continúa el proyecto de la bitácora neuronal ya construido. Esta tarea es solo de rendimiento, no cambies el diseño visual ni la secuencia de la animación.

## Problema reportado

Al hacer click en la imagen del cerebro, la animación de zoom con `animejs` se ve lageada, no fluida.

## Diagnóstico a confirmar primero

Revisa el componente raíz que decide si se muestra el cerebro o el grafo. Si ambos, `Cerebro` y `GraphCanvas`, están montados al mismo tiempo aunque uno esté con `opacity: 0`, `react-force-graph-2d` sigue corriendo su simulación de física de fondo mientras la imagen anima. Esto es la causa más probable del lag.

La condición debe ser un renderizado excluyente real:

```tsx
return mostrarGrafo ? <GraphCanvas /> : <Cerebro onClick={handleClick} />;
```

No un montaje simultáneo con opacidad en cero. Corrige esto primero, antes de aplicar el resto de esta tarea.

## Correcciones a aplicar en orden

### 1. Peso de la imagen del cerebro

Verifica la resolución del archivo de imagen usado en `.cerebro-imagen`. Si supera con holgura el tamaño real en pantalla, comprímela y sírvela en un tamaño cercano al de uso real.

### 2. Propiedades que anima animejs

Revisa la llamada a `animate('.cerebro-imagen', ...)`. Debe animar únicamente `scale` y `opacity`. Si además anima `width`, `height`, `box-shadow` u otras propiedades que no sean transform u opacity, sepáralas o elimínalas, ya que fuerzan recálculo de layout en cada frame.

### 3. will-change en la imagen animada

Agrega esta propiedad en el CSS de `.cerebro-imagen`, para que el navegador prepare la capa antes de iniciar la animación.

```css
.cerebro-imagen {
  will-change: transform, opacity;
}
```

### 4. Pausar RippleDistortion durante el zoom

El componente `RippleDistortion` de la neurona central corre su propio loop de render con `ogl`, incluso si no es visible todavía. Si ya está montado durante la animación del cerebro, pausa o retrasa su montaje hasta que `mostrarGrafo` sea verdadero.

## Restricciones

- No agregues librerías nuevas.
- No cambies la duración ni el estilo de la animación, solo su rendimiento.
- Si después de aplicar esto el lag persiste, describe en qué parte exacta se sigue sintiendo antes de seguir intentando soluciones.
