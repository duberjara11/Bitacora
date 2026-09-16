
# Tarea: jerarquía visual de las neuronas

Continúa el proyecto de la bitácora neuronal ya construido. No cambies la estructura de datos ni la lógica de navegación existente, solo el aspecto visual del grafo.

## Contexto necesario

El grafo usa `react-force-graph-2d`. Existe un componente que renderiza el grafo, con una neurona central `id: 'central'` y doce neuronas satélite con `tipo: 'persona'` o `tipo: 'concepto'`.

Se agregó antes un campo `relevancia: 'primaria' | 'secundaria'` a la interfaz `Neurona` en `types/grafo.ts`. Este campo ya existe o debe agregarse si no está.

## Objetivo de esta tarea

Implementar tres efectos, en este orden de prioridad.

### 1. Neurona central más grande

Usa el prop `val` de cada nodo. `val` controla el tamaño del círculo en `react-force-graph-2d`. Asigna un valor notablemente mayor al nodo `central` frente a los demás.

### 2. Orden de profundidad

Las neuronas secundarias deben dibujarse antes que la central, para quedar visualmente detrás. Usa `nodeCanvasObjectMode` para controlar el orden o modo de dibujo por nodo, combinado con `nodeCanvasObject` para el dibujo personalizado.

### 3. Desenfoque de las neuronas secundarias

Dentro de la función `nodeCanvasObject`, antes de dibujar el círculo de una neurona con `relevancia: 'secundaria'`, aplica `ctx.filter = 'blur(Npx)'` al contexto de canvas. Restaura el filtro a `'none'` después de dibujar ese nodo, para no afectar el resto del render.

Prueba distintos valores de blur, entre 2px y 6px, hasta que el efecto se vea intencional sin volver ilegible el nombre de la neurona.

## Restricciones

- No agregues librerías nuevas. Todo esto se logra con `react-force-graph-2d` y la API nativa de canvas.
- No cambies el comportamiento de click, `emitParticle`, `centerAt` ni `zoom` ya implementados.
- No inventes props que no existan en `react-force-graph-2d`. Si necesitas confirmar un nombre de prop, dilo antes de usarlo.
- El texto de cada neurona debe seguir siendo legible después del desenfoque, revisa el tamaño de fuente si hace falta.

## Fuera de alcance por ahora

No implementes todavía el texto flotante en hover, el pulso lumínico de la central, las partículas continuas en los canales, las fotos recortadas en círculo, ni el fondo líquido. Esos quedan para una siguiente tarea.
