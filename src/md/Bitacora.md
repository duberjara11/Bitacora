
# Contexto del proyecto

Estoy construyendo una bitácora digital creativa para un proyecto académico llamado "Roba como un artista". La página no debe verse como una web común, el apartado visual es lo más importante. Ayúdame a continuar el desarrollo siguiendo exactamente las decisiones ya tomadas abajo.

## Entrega

Viernes de la próxima semana. El tiempo es limitado, prioriza soluciones simples sobre soluciones vistosas pero lentas de construir.

## Stack técnico

- Backend: Java 21, Spring Boot, Maven, dependencias `web` y `devtools`.
- Frontend: React con Vite, TypeScript, gestor de paquetes pnpm, linter Oxlint.
- Grafo interactivo: `react-force-graph-2d`, trae tipos de TypeScript incluidos, no requiere `@types` aparte.
- Animaciones: `animejs`.
- Efecto de agua en la foto de perfil: componente `RippleDistortion` de React Bits, instalado manualmente sin shadcn, usando `ogl` como única dependencia.

## Concepto visual central

Toda la página ocurre dentro de la metáfora de un cerebro. No hay secciones ni menús tradicionales.

1. Pantalla inicial: una imagen de un cerebro. Al hacer click, una animación con `animejs` hace zoom sobre la imagen (`scale` alto, `opacity` a 0) mientras un overlay negro fijo en pantalla sube y baja de opacidad para tapar el corte entre la imagen y el grafo.
2. Después de la transición aparece el grafo interactivo. Una neurona central representa a la persona, con su foto tratada con el efecto `RippleDistortion` que distorsiona la imagen siguiendo el mouse.
3. La neurona central está conectada a doce neuronas satélite. Al hacer click en una neurona satélite, se emite una partícula visual por el canal de conexión (`emitParticle`), la cámara se centra y hace zoom sobre esa neurona (`centerAt`, `zoom`), y después se muestra un panel con el contenido de esa neurona.

## Estructura de datos ya definida

Archivo `types/grafo.ts`, define la forma de los nodos y canales, sin datos reales:

```typescript
export type TipoNeurona = 'central' | 'persona' | 'concepto';

export interface Neurona {
  id: string;
  nombre: string;
  tipo: TipoNeurona;
}

export interface Canal {
  source: string;
  target: string;
}

export interface DatosGrafo {
  nodes: Neurona[];
  links: Canal[];
}
```

Archivo `data/puntos.ts`, contiene el contenido real: cinco personas (familia e inspiraciones) y siete conceptos temáticos que cubren de forma implícita los puntos restantes de la tarea, sin numerarlos ni etiquetarlos como "punto X" en la interfaz:

- `escuela`: tres libros con justificación.
- `pelicula`: película animada favorita más una secuela original con póster y sinopsis.
- `proyectos`: tres proyectos personales o hobbies, con sus restricciones creativas.
- `trabajo`: mejor trabajo hecho, con contexto, objetivo, solución y evidencia.
- `lugar`: un lugar que alimenta creativamente, con foto o ilustración.
- `heroe`: una carta corta a una persona real que admira.
- `promesa`: una frase de compromiso creativo diario.

## Jerarquía visual de neuronas, recomendación aplicada

No se implementa una jerarquía real de datos con neuronas ocultas. Todas las doce neuronas están conectadas directo a la central, sin niveles adicionales.

Lo que sí varía es la representación visual de cada neurona según un campo `relevancia: 'primaria' | 'secundaria'` agregado a la interfaz `Neurona`:

- Neuronas primarias: mayor brillo, mayor nitidez, mayor tamaño de nodo, se dibujan al final para quedar al frente.
- Neuronas secundarias: menor opacidad, tono más apagado, se dibujan primero para quedar detrás visualmente.

Esto se logra con la función `nodeCanvasObject` de `react-force-graph-2d`, sin cambiar la estructura de datos ni la lógica de navegación.

Como mejora futura, si sobra tiempo antes del viernes, se puede evaluar una jerarquía real donde las neuronas secundarias solo aparezcan al hacer click en su neurona primaria. No es parte del alcance actual.

## Restricciones importantes

- No inventes nombres de paquetes, props o métodos que no existan en las librerías mencionadas. Si no estás seguro de una API, dilo explícitamente antes de usarla.
- No agregues shadcn ni ningún sistema de diseño adicional al proyecto.
- Todo el código de UI usa TypeScript, salvo el componente `RippleDistortion` que se mantiene en `.jsx` tal como lo entrega React Bits, con `allowJs: true` habilitado en `tsconfig.app.json`.
- El contenido de los doce nodos aún tiene textos de relleno pendientes de reemplazar por contenido real, no lo completes por tu cuenta.

## Lo que necesito que hagas ahora

Continúa el desarrollo del componente que aplica la relevancia visual a cada neurona usando `nodeCanvasObject`, y del componente `panel` que muestra el contenido de la neurona seleccionada.
