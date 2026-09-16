
# Tarea: reemplazar el blur real por un efecto de desenfoque falso

Continúa el proyecto de la bitácora neuronal ya construido. Esta tarea es solo de rendimiento, no cambies el diseño de la jerarquía visual ya definida entre neuronas primarias y secundarias.

## Problema confirmado

El lag no viene de la animación del cerebro, viene del grafo. La causa exacta es `ctx.filter = 'blur()'` dentro de `nodeCanvasObject`, aplicado a las neuronas secundarias en cada frame. Canvas 2D calcula ese blur en software, nodo por nodo, cada vez que el grafo redibuja. Con varias neuronas secundarias a la vez, el costo se multiplica por frame.

## Corrección a aplicar

Elimina por completo el uso de `ctx.filter = 'blur()'` en `nodeCanvasObject`.

Reemplázalo por un círculo con gradiente radial translúcido, dibujado con `ctx.createRadialGradient` y `ctx.fill`, sin usar `ctx.filter` en ningún punto del render de las neuronas secundarias.

La idea es que el gradiente vaya de un color sólido en el centro del nodo a transparente en el borde, simulando el efecto de estar desenfocado y al fondo, sin el costo real de un blur calculado en cada frame.

Aplica esto únicamente a los nodos con `relevancia: 'secundaria'`. Los nodos primarios y la neurona central mantienen su dibujo normal, sin gradiente de desvanecido.

## Restricciones

- No uses `ctx.filter` en ningún punto del dibujo de las neuronas.
- No agregues librerías nuevas.
- No cambies el tamaño de los nodos ni el orden de dibujo ya definido entre primarias y secundarias, esa parte queda igual.
- El texto de cada neurona secundaria debe seguir siendo legible sobre el gradiente.

## Verificación esperada

Después del cambio, el hover y el click sobre las neuronas deben sentirse fluidos, sin caídas de cuadros visibles al mover el mouse sobre el grafo completo.
