
# Tarea: capa de blur al seleccionar una neurona, y mejora de brillo general

Continúa el proyecto de la bitácora neuronal ya construido. Esta tarea reemplaza el sistema de blur anterior y mejora el brillo de las neuronas en todo momento, no solo al seleccionar.

## Parte 1: eliminar el blur por nodo

Elimina por completo la lógica de blur cacheado o gradiente aplicada a las neuronas con `relevancia: 'secundaria'` dentro de `nodeCanvasObject`. Ese sistema queda reemplazado por la capa de la parte 2.

Las neuronas secundarias vuelven a dibujarse igual que las primarias en cuanto a nitidez, la diferencia de tamaño con `val` se mantiene.

## Parte 2: capa de blur al seleccionar

Agrega un elemento superpuesto sobre todo el grafo, fuera del canvas, como un `div` posicionado en `fixed`, cubriendo toda la pantalla.

Este elemento debe estar oculto por defecto y solo visible cuando hay una neurona seleccionada, es decir, cuando `mostrarPanel` o el estado equivalente ya usado para abrir el panel de contenido es verdadero.

Estilo del elemento:

```css
.capa-enfoque {
  position: fixed;
  inset: 0;
  z-index: 40;
  pointer-events: none;
  backdrop-filter: blur(6px);
  background: rgba(10, 10, 18, 0.35);
  mask-image: radial-gradient(circle at center, transparent 0px 110px, black 160px 100%);
  -webkit-mask-image: radial-gradient(circle at center, transparent 0px 110px, black 160px 100%);
}
```

El hueco queda fijo en el centro de la pantalla porque la neurona seleccionada ya se centra ahí con `centerAt`. No se necesita calcular la posición del nodo en pantalla.

Ajusta los valores `110px` y `160px` hasta que el hueco cubra bien el tamaño real de la neurona central seleccionada, sin recortarla ni dejar demasiado espacio alrededor.

El panel de contenido que muestra la información de la neurona debe quedar en un `z-index` mayor a `40`, para no quedar debajo del blur.

## Parte 3: mejorar el brillo de las neuronas

El brillo actual es muy débil. Dentro de `nodeCanvasObject`, antes de dibujar el círculo de cada neurona, agrega sombra de canvas para simular el resplandor:

```js
ctx.shadowColor = colorDeLaNeurona;
ctx.shadowBlur = 15;
```

Restaura `ctx.shadowBlur = 0` después de dibujar el círculo, para que la sombra no afecte el texto ni las siguientes neuronas.

La neurona central debe tener un `shadowBlur` mayor al de las demás, ya que es la más relevante visualmente.

## Restricciones

- No agregues librerías nuevas.
- No cambies el comportamiento de click, `emitParticle`, `centerAt` ni `zoom`.
- Verifica que `backdrop-filter` funcione en el navegador de prueba antes de dar la tarea por terminada, es soportado en Chrome, Firefox y Safari actuales, pero conviene confirmarlo en tu entorno.
- El texto de cada neurona debe seguir siendo legible con el nuevo brillo, no debe verse quemado o ilegible por exceso de sombra.
