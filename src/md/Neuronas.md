
# Tarea: aspecto orgánico de las neuronas y animaciones de hover

Continúa el proyecto de la bitácora neuronal ya construido. No agregues SplashCursor ni ninguna simulación de fluidos nueva, esa idea quedó descartada por rendimiento. `RippleDistortion` sigue siendo el único efecto de líquido del proyecto.

## Parte 1: canales curvos

Reemplaza las líneas rectas entre neuronas por líneas curvas, usando los props ya confirmados de `react-force-graph-2d`.

```
linkCurvature={0.25}
linkCurveRotation={0}
```

Prueba el valor de `linkCurvature` entre 0.15 y 0.3 hasta que se vea orgánico sin que las curvas se crucen entre sí de forma confusa.

## Parte 2: partículas naranjas constantes

Cambia el uso actual de `linkDirectionalParticles`, que hoy solo se activa con `emitParticle` al hacer click. Además de eso, deja un flujo constante y sutil en todos los canales, no solo al hacer click.

```
linkDirectionalParticles={1}
linkDirectionalParticleColor={() => '#ff8a4c'}
linkDirectionalParticleWidth={3}
```

El pulso que ya se emite al hacer click en una neurona debe seguir funcionando igual, esto se suma, no lo reemplaza.

## Parte 3: ramificaciones simples tipo dendritas

Dentro de `nodeCanvasObject`, después de dibujar el círculo de cada neurona, dibuja entre 3 y 5 líneas cortas y curvas que salen del borde del círculo hacia afuera, en ángulos distintos, simulando dendritas.

No es necesario que sean iguales en cada render, pero deben mantenerse fijas para cada neurona mientras no se mueva, no deben cambiar de forma en cada frame, para no agregar costo de cálculo innecesario. Genera los ángulos una sola vez por nodo, por ejemplo al crear los datos del grafo, no dentro del loop de dibujo.

## Parte 4: animación de hover con animejs

Al pasar el mouse sobre una neurona, con `onNodeHover` ya usado antes en el proyecto, anima un pequeño aumento de tamaño con `animejs` sobre una variable de escala asociada a esa neurona, que `nodeCanvasObject` usa para dibujar el círculo un poco más grande mientras dura el hover.

No animes el DOM directamente para esto, ya que el nodo se dibuja en canvas, no es un elemento HTML. Anima un valor numérico con `animejs` y usa ese valor dentro del dibujo del nodo en cada frame.

Al quitar el mouse de la neurona, el tamaño debe volver a su valor original con la misma animación, no de forma abrupta.

## Restricciones

- No agregues SplashCursor ni ninguna otra librería de simulación de fluidos.
- No agregues librerías nuevas fuera de lo que ya está instalado, `react-force-graph-2d` y `animejs` alcanzan para todo esto.
- No cambies el comportamiento de click, `emitParticle`, `centerAt`, `zoom`, el blur de selección ni el brillo ya implementado con `shadowBlur`.
- Verifica el rendimiento después de esta tarea con el grafo completo visible y el mouse moviéndose sobre varias neuronas seguidas, no solo una.

## Verificación esperada

El grafo debe verse más orgánico, con canales curvos y partículas naranjas constantes, y cada neurona debe reaccionar con una animación suave al pasar el mouse, sin caídas de rendimiento notorias.
