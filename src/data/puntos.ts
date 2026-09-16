import type { DatosGrafo } from '../types/grafos';

export interface PersonaContenido {
  id: string;
  nombre: string;
  foto: string;
  frase: string;
}

export interface ConceptoContenido {
  id: string;
  titulo: string;
  contenido: string;
}

export interface PaginaLibro {
  id: string;
  pageNumber: number;
  tipo: 'persona' | 'concepto';
  capitulo: string;
  rubrica: string;
  titulo: string;
  subtitulo: string;
  notaAlMargen: string;
  badgeSello: string;

  // Campos específicos
  persona?: {
    nombre: string;
    rol: string;
    frase: string;
    foto: string;
    leccion: string;
  };

  concepto?: {
    categoria: 'escuela' | 'copiar' | 'autor' | 'pelicula' | 'proyectos' | 'trabajo' | 'lugar' | 'heroe' | 'promesa';
    descripcion: string;
    items?: { titulo: string; detalle: string; etiqueta?: string; icono?: string }[];
    evidencia?: string;
    etiquetaEvidencia?: string;
    reflexion?: string;
    metaInfo?: Record<string, string>;
  };
}

export const paginasLibro: PaginaLibro[] = [
  // --- CAPÍTULO 4: USA TUS MANOS (PORTADA, BIOGRAFÍA Y ESENCIA) ---
  {
    id: 'central',
    pageNumber: 0,
    tipo: 'concepto',
    capitulo: 'Capítulo 04 / Usa tus manos',
    rubrica: 'Biografía del autor y justificación estética de la bitácora',
    titulo: 'Duber: Esencia, Psique y Código',
    subtitulo: 'Autorretrato sensible y manifiesto sobre la arquitectura de esta bitácora',
    notaAlMargen: '«No soy el mejor ni de cerca en nada, pero entrego peculiarmente todo de mi ser en lo que construyo.»',
    badgeSello: 'MANIFIESTO DE AUTOR',
    concepto: {
      categoria: 'autor',
      descripcion: 'Una confesión honesta sobre quién habita detrás de esta pantalla y por qué este proyecto rehúsa encajar en un molde web convencional.',
      items: [
        {
          titulo: 'Esencia y Temperamento: Fuera del Paradigma Estático',
          detalle: 'Soy alguien demasiado empático para mi conveniencia, melancólico, enamoradizo y en constante búsqueda de sosiego. Rehúso encajar en moldes rígidos. Adoro aprender con la misma pasión con la que adoro hablar, memorizar y expresar lo que siento. Reconozco que no soy el mejor en nada, pero compenso cualquier carencia entregando peculiarmente todo mi ser en cada desafío.',
          etiqueta: 'AUTOBIOGRAFÍA ÍNTIMA',
        },
        {
          titulo: 'Justificación Estética: La Mente Humana y el Libro',
          detalle: 'La decisión de concebir esta bitácora como una red neuronal que despliega hojas de libro responde a una fascinación vital: la mente humana, la psiquis y todo lo psicológico relacionado a nuestro ser. El cerebro representa la simultaneidad de nuestras ideas, recuerdos y vivencias; el libro representa la pausa, el orden y la intimidad de la lectura. Unir el grafo sináptico con el pliego editorial es materializar mi pasión por la ciencia de la mente y la calidez del papel.',
          etiqueta: 'INTERVENCIÓN ESTÉTICA',
        },
      ],
      reflexion: 'Esta bitácora es el punto de encuentro entre mi vulnerabilidad emocional y mi vocación por los sistemas: demostrar que la ingeniería de software no tiene por qué ser fría si está programada desde el corazón.',
    },
  },

  // --- CAPÍTULO 1: ÁRBOL FAMILIAR (5 PERSONAS) ---
  {
    id: 'persona1',
    pageNumber: 1,
    tipo: 'persona',
    capitulo: 'Capítulo 01 / Roba como un artista',
    rubrica: 'Trepa a tu propio árbol familiar (1/5)',
    titulo: 'Diana Jaramillo',
    subtitulo: 'Primera rama de mi árbol genealógico creativo: Mi Madre',
    notaAlMargen: '«Carácter, fortaleza y amor incondicional: la lección de no rendirse jamás.»',
    badgeSello: 'RAÍZ Y CORAZÓN',
    persona: {
      nombre: 'Diana Jaramillo',
      rol: 'Mi Madre · Pilar Fundamental',
      frase: '«A lo duro se le hace duro.»',
      foto: '/diana-jaramillo.jpg',
      leccion: 'De ella aprendí la verdadera berraquera y resiliencia: no achicarse ante los momentos difíciles, ponerle carácter a la adversidad y entender que con firmeza, amor y trabajo no hay obstáculo que no se pueda superar.',
    },
  },
  {
    id: 'persona2',
    pageNumber: 2,
    tipo: 'persona',
    capitulo: 'Capítulo 01 / Roba como un artista',
    rubrica: 'Trepa a tu propio árbol familiar (2/5)',
    titulo: 'Armando Monsalve',
    subtitulo: 'Segunda rama de mi árbol genealógico creativo: Mi Padre',
    notaAlMargen: '«El silencio también enseña: aprender de los errores del pasado para tomar mejores decisiones en el presente.»',
    badgeSello: 'LECCIÓN DE VIDA',
    persona: {
      nombre: 'Armando Monsalve',
      rol: 'Mi Padre · Realidad y Aprendizaje',
      frase: '«Un hombre reservado cuya historia me enseñó el verdadero peso que tienen las decisiones en la vida.»',
      foto: '/familia.jpg',
      leccion: 'Un hombre de pocas palabras y reservado, a quien sus errores en el pasado le costaron cumplir plenamente su sueño de ser padre. De él aprendí una lección madura y profunda: entender que cada elección forja nuestro destino, la importancia de cuidar a los que amamos a tiempo y la determinación de romper ciclos para construir mi propio camino con conciencia, rectitud y responsabilidad.',
    },
  },
  {
    id: 'persona3',
    pageNumber: 3,
    tipo: 'persona',
    capitulo: 'Capítulo 01 / Roba como un artista',
    rubrica: 'Trepa a tu propio árbol familiar (3/5)',
    titulo: 'Robin Williams',
    subtitulo: 'Tercera rama de mi árbol genealógico creativo: El Maestro de la Emoción',
    notaAlMargen: '«La catarsis no es solo desahogo: es la valentía de ponerle palabras al dolor, a la risa y a la verdad humana.»',
    badgeSello: 'CATARSIS Y DRAMATURGIA',
    persona: {
      nombre: 'Robin Williams',
      rol: 'Referente de Catarsis y Dramaturgia Emocional',
      frase: '«La medicina, el derecho y la ingeniería son nobles y necesarias para sostener la vida; pero la poesía, la belleza, la dramaturgia y el amor son las razones por las que seguimos vivos.»',
      foto: '/robin-williams.jpg',
      leccion: 'De Robin Williams tomo la brújula para mi escritura y exploración dramática: entender que la verdadera catarsis ocurre cuando nos atrevemos a transitar todo el espectro emocional, desde la comedia desbordante hasta la herida más vulnerable. Escribir y crear no para impresionar, sino para provocar esa liberación emocional catártica que nos recuerda que estamos profundamente vivos.',
    },
  },
  {
    id: 'persona4',
    pageNumber: 4,
    tipo: 'persona',
    capitulo: 'Capítulo 01 / Roba como un artista',
    rubrica: 'Trepa a tu propio árbol familiar (4/5)',
    titulo: 'Bertrand Russell',
    subtitulo: 'Cuarta rama de mi árbol genealógico creativo: Razón, Letras y Libertad',
    notaAlMargen: '«El rigor matemático de la lógica unido a la compasión humana y la rebeldía contra todo dogma autoritario.»',
    badgeSello: 'POLÍMATA PROGRESISTA',
    persona: {
      nombre: 'Bertrand Russell',
      rol: 'Referente de Lógica, Literatura y Humanismo Libre',
      frase: '«El problema con el mundo es que los estúpidos están seguros de todo y los inteligentes están llenos de dudas.»',
      foto: '/bertrand-russell.png',
      leccion: 'Bertrand Russell encarna mi pasión polímata y mi convicción progresista: la capacidad de dominar la matemática pura, la física y la lógica de sistemas sin jamás desligarse de la literatura, la historia y la lucha por la justicia social. De él aprendo que el pensamiento crítico es un acto de valentía frente al dogma conservador, y que el conocimiento científico cobra verdadero sentido cuando está al servicio de la libertad y la dignidad humana.',
    },
  },
  {
    id: 'persona5',
    pageNumber: 5,
    tipo: 'persona',
    capitulo: 'Capítulo 01 / Roba como un artista',
    rubrica: 'Trepa a tu propio árbol familiar (5/5)',
    titulo: 'Fiódor Dostoyevski',
    subtitulo: 'Quinta rama de mi árbol genealógico creativo: El Misterio del Alma Humana',
    notaAlMargen: '«El ser humano es un misterio; descifrarlo en la escritura es la búsqueda más honesta que existe.»',
    badgeSello: 'DRAMATURGIA Y PSICOLOGÍA',
    persona: {
      nombre: 'Fiódor Dostoyevski',
      rol: 'Referente de Drama Psicológico y Profundidad Existencial',
      frase: '«El ser humano es un misterio. Hay que descifrarlo, y si pasas toda tu vida intentándolo, no digas que has perdido el tiempo; yo me dedico a este misterio porque quiero ser un ser humano.»',
      foto: '/dostoievski.jpg',
      leccion: 'De Dostoyevski heredo la fascinación por el conflicto moral y la verdad psicológica en la literatura y la dramaturgia: no temer mirar las sombras, las contradicciones y los dilemas más oscuros de la condición humana para encontrar en ellos la chispa de la redención, la empatía y la belleza más pura.',
    },
  },

  // --- CAPÍTULOS CONCEPTUALES DE LA BITÁCORA ---
  {
    id: 'escuela',
    pageNumber: 6,
    tipo: 'concepto',
    capitulo: 'Capítulo 01 / Roba como un artista',
    rubrica: 'Sé tu propia escuela: Tres libros esenciales',
    titulo: 'Tríptico de Memoria, Cuerpo y Duelo',
    subtitulo: 'Tres indagaciones literarias sobre el territorio, la violencia cotidiana y el dolor irreductible',
    notaAlMargen: '«Escribir sobre lo que duele no para regodearse en la herida, sino para entender de qué estamos hechos.»',
    badgeSello: 'BIBLIOTECA VITAL',
    concepto: {
      categoria: 'escuela',
      descripcion: 'Una selección de tres obras que rehúyen el consuelo fácil. Desde las esquinas de Aranjuez hasta Seúl y el duelo de una madre en Bogotá, estos textos examinan cómo el territorio, la coerción social y la fractura mental ponen a prueba la condición humana.',
      items: [
        {
          titulo: 'La cuadra — Gilmer Mesa',
          detalle: 'Más allá de la violencia y el contexto de Pablo Escobar, esta novela es la autopsia emocional de una generación de amigos de Aranjuez que fue segada antes de cumplir los veinte años. Me interesa porque retrata las calles donde me crié sin el morbo de la narcoliteratura: es un testimonio desgarrador sobre la lealtad barrial, la ternura masculina reprimida y el peso de sobrevivir cuando todos a tu alrededor caen.',
          etiqueta: 'MEMORIA Y TERRITORIO',
        },
        {
          titulo: 'La vegetariana — Han Kang',
          detalle: 'Reducirla a una crítica de la sociedad coreana es quedarse en la superficie: el libro es una rebelión ontológica brutal contra la violencia de la especie humana. Yeong-hye no deja de comer carne por pose moral, sino porque se niega a pertenecer a un mundo donde existir implica devorar o ser sometida por la violencia patriarcal y conyugal. Me interesa por su dramaturgia contenida y asfixiante: renunciar a la propia humanidad como único escape ético.',
          etiqueta: 'RUPTURA Y COERCIÓN',
        },
        {
          titulo: 'Lo que no tiene nombre — Piedad Bonnett',
          detalle: 'La crónica lúcida y sin concesiones sobre el suicidio de su hijo Daniel tras años de batallar contra el trastorno mental. Me interesa por la precisión quirúrgica con la que una poeta nombra una tragedia para la que el idioma español ni siquiera tiene palabra (quien pierde un hijo queda innombrado). Demuestra que la literatura puede ser la última herramienta de dignidad para contener el horror sin caer en el melodrama.',
          etiqueta: 'DUELO Y VERDAD PSICOLÓGICA',
        },
      ],
      reflexion: 'Estas tres lecturas confirman que el verdadero oficio narrativo no consiste en maquillar la realidad, sino en mirar de frente la pérdida, la violencia y la culpa para rescatar lo que aún queda de humano.',
    },
  },
  {
    id: 'copiar',
    pageNumber: 7,
    tipo: 'concepto',
    capitulo: 'Capítulo 02 / No esperes saber quién eres para poner las cosas en marcha',
    rubrica: 'Empieza a copiar: El linaje de los diarios íntimos y su traducción al código',
    titulo: 'Anatomía del Diario Íntimo: De la Confesión al Algoritmo',
    subtitulo: 'Aprender de las bitácoras de los maestros para traducir la vulnerabilidad humana a la arquitectura de software',
    notaAlMargen: '«No aspiro a su carácter público ni a su estatura literaria; solo aspiro a que lo que ellos me hicieron sentir pueda habitar en lo que escribo y en el código que construyo.»',
    badgeSello: 'EMPIEZA A COPIAR',
    concepto: {
      categoria: 'copiar',
      descripcion: 'Austin Kleon enseña que copiar no es plagiar el resultado, sino deconstruir el proceso del maestro: entender qué veían, qué temían y cómo ordenaban su caos interno. Al analizar los cuadernos y diarios íntimos de cinco escritores capitales, extraigo el método confesional para aplicarlo a mi vocación: el desarrollo de sistemas.',
      items: [
        {
          titulo: 'Franz Kafka: Diarios (1910-1923)',
          detalle: 'Muestra la angustia mental pura, el proceso creativo como condena, el insomnio asfixiante y la presión familiar aplastante. Lección para el código: la honestidad brutal frente a la propia impotencia; programar reconociendo los límites de la mente y asumiendo la fricción como parte del proceso.',
          etiqueta: 'ANGUSTIA Y PROCESO',
        },
        {
          titulo: 'Virginia Woolf: Diarios (1915-1941)',
          detalle: 'Analiza con agudeza implacable la literatura de su época, la gestación milimétrica de sus novelas y sus violentos altibajos emocionales. Lección para el código: la autocrítica lúcida y el rigor arquitectónico sin perder la sensibilidad hacia el estado anímico.',
          etiqueta: 'RIGOR CRÍTICO Y EMOCIÓN',
        },
        {
          titulo: 'Alejandra Pizarnik: Diarios y Cuadernos íntimos',
          detalle: 'Poesía en estado bruto, desgarrada, construida entre lecturas obsesivas, soledad radical y el peso de la palabra. Lección para el código: la precisión obsesiva; entender que cada símbolo o línea cuenta y que una sintaxis descuidada rompe el pacto de belleza con el sistema.',
          etiqueta: 'DESGARRO Y PRECISIÓN',
        },
        {
          titulo: 'Albert Camus: Cuadernos (Carnets)',
          detalle: 'Notas breves sobre la luz del Mediterráneo, borradores de ficción y reflexiones filosóficas sobre el absurdo y la dignidad. Lección para el código: la capacidad de registrar destellos breves; un repositorio no solo guarda lógica, guarda una postura ética ante el trabajo.',
          etiqueta: 'FILOSOFÍA Y LUZ',
        },
        {
          titulo: 'Lev Tolstói: Diarios personales',
          detalle: 'Crisis espirituales profundas, batallas morales consigo mismo y la búsqueda incansable de una conducta ética irreprochable. Lección para el código: el código no es neutral; cada arquitectura impone una forma de tratar a los demás y exige una vigilancia ética constante.',
          etiqueta: 'BÚSQUEDA ÉTICA',
        },
        {
          titulo: 'La Traslación: Del Cuaderno al Código',
          detalle: '¿Qué hice y cómo lo hice? Descompuse la estructura de estas cinco bitácoras: cómo cada autor registraba su vulnerabilidad sin máscaras. En lugar de copiar textos ajenos, emulé su método confesional para crear esta bitácora: una red neuronal viva donde cada nodo es un apunte íntimo y el código es el soporte que sostiene mi memoria, mi aprendizaje y mi psique.',
          etiqueta: 'APLICACIÓN ORIGINAL',
        },
      ],
      reflexion: 'Copiar a un maestro te convierte en un impostor; deconstruir a cinco maestros te revela el mecanismo de la honestidad. Dedicarme al software no significa renunciar a la literatura: significa construir sistemas donde la técnica tenga la misma hondura y verdad que una página de diario escrita a medianoche.',
    },
  },
  {
    id: 'pelicula',
    pageNumber: 8,
    tipo: 'concepto',
    capitulo: 'Capítulo 03 / Escribe el libro que quieres leer',
    rubrica: 'Película animada favorita + Secuela original creada por mí',
    titulo: 'El Éter, la Singularidad y el Cíborg',
    subtitulo: 'De la fascinación infantil en el campo a una secuela fundada en astrofísica y degradación mecánica',
    notaAlMargen: '«Para un niño del campo cuyo referente era Sportacus, las velas solares y los navíos del Éter no fueron ficción: fueron la apertura de una mente al cosmos.»',
    badgeSello: 'DRAMATURGIA Y CIENCIA',
    concepto: {
      categoria: 'pelicula',
      descripcion: 'A los 6 años, un libro ilustrado me reveló la historia antes de que pudiera verla en movimiento. A los 11 años, ver El planeta del tesoro transformó mi imaginación: el choque entre la navegación naval clásica y la física del espacio despertó mi fascinación por la astronomía, la química y los sistemas mecánicos.',
      items: [
        {
          titulo: 'Obra Referente: El planeta del tesoro (Ron Clements y John Musker, 2002)',
          detalle: 'Sinopsis original: Jim Hawkins, un joven rebelde marcado por el abandono paterno, encuentra la esfera holográfica del tesoro de Nathaniel Flint. A bordo del galeón solar RLS Legacy, Jim entabla una compleja relación con John Silver, un cocinero cíborg que oscila entre el motín pirata y un afecto paternal genuino. La tripulación surca el Éterio entre supernovas y vientos solares hasta llegar a un planeta mecánico hueco que activa su propia autodestrucción.',
          etiqueta: 'SINOPSIS ORIGINAL',
        },
        {
          titulo: 'Secuela Inédita: El planeta del tesoro: Corrientes del Éter (Ethercurrents)',
          detalle: 'Sinopsis de la secuela: Doce años después, Jim Hawkins es un respetado astrofísico e ingeniero de propulsión relativista de la Flota Imperial. Una anomalía gravitacional —un agujero negro binario con un púlsar emitiendo radiación de sincrotrón— está devorando las corrientes de fotones del Éterio y desestabilizando los campos magnéticos estelares. La Flota planea bombardear el sector con cargas de antimateria, lo que extinguiría ecosistemas y colonias espaciales enteras. Para impedirlo, Jim debe descender al disco de acrecimiento calculando dilataciones temporales y vectores de magnetohidrodinámica. En el epicentro de la tormenta reencuentra a John Silver, envejecido y vulnerable: sus componentes cibernéticos sufren de corrosión galvánica y degradación neuronal por fatiga de materiales. Silver busca un isótopo pesado exótico que solo se sintetiza en el borde del horizonte de sucesos para evitar el colapso de su mitad mecánica. La secuela enfrenta el rigor de las leyes físicas con la lealtad pirata: deberán sincronizar ecuaciones de plasma y pericia manual para desactivar la anomalía antes de que la curvatura espaciotemporal los congele para siempre.',
          etiqueta: 'SECUELA Y PROPUESTA DRAMÁTICA',
        },
      ],
      evidencia: '/secuela-planeta-tesoro.jpg',
      etiquetaEvidencia: 'Registro Astronómico / Horizonte de Sucesos',
      reflexion: 'Una secuela madura no repite la nostalgia: toma los mitos de la infancia y los somete a preguntas adultas sobre la degradación de los cuerpos, la física del cosmos y la persistencia de los lazos filiales.',
    },
  },
  {
    id: 'proyectos',
    pageNumber: 9,
    tipo: 'concepto',
    capitulo: 'Capítulo 05 y 10 / Proyectos extras y restricciones',
    rubrica: 'Tres proyectos apasionados + Restricciones creativas',
    titulo: 'Artesanía Digital, Soberanía y Papel',
    subtitulo: 'Tres proyectos sin apuro comercial: la búsqueda de la fricción, el error constructivo y la memoria íntima',
    notaAlMargen: '«En un mundo que automatiza todo para no sentir el esfuerzo, elegir la fricción de equivocarse y reparar con las propias manos es el verdadero acto de rebeldía.»',
    badgeSello: 'SOBERANÍA Y FRICCIÓN',
    concepto: {
      categoria: 'proyectos',
      descripcion: 'Un ecosistema de tres proyectos personales conectados por un mismo hilo conductor: la negativa a depender de soluciones prefabricadas o cajas negras comerciales. Tres espacios donde el valor no radica en la velocidad de entrega, sino en el proceso visceral de construir, romper, aprender y registrar.',
      items: [
        {
          titulo: 'Proyecto 1: Bóveda Personal Multiplataforma (Web y Escritorio)',
          detalle: 'Una aplicación integral desarrollada exclusivamente por mí para almacenar y organizar mi universo sensible: poemas, fragmentos literarios, series favoritas, capturas visuales, citas y reflexiones cotidianas. No es un bloc de notas genérico; es un archivo de memoria íntima cuya interfaz y estructura responden únicamente a mis propios criterios estéticos y de consulta.',
          etiqueta: 'RESTRICCIÓN: Cero plantillas prefabricadas y cero código generado por IA; desarrollo artesanal de punta a punta sincronizado exclusivamente con mi propia infraestructura.',
        },
        {
          titulo: 'Proyecto 2: Servidor NAS Autogestionado desde Cero',
          detalle: 'Montaje y programación integral de un servidor de almacenamiento en red local (NAS), tanto a nivel de hardware como de arquitectura de software. El objetivo central es la soberanía de datos y el aprendizaje empírico radical: minimizar el uso de IA y herramientas automatizadas para vivir en carne propia el ciclo clásico de la ingeniería: la frustración del fallo, la satisfacción de repararlo y la nueva frustración cuando esa solución desencadena un problema imprevisto en otra capa del sistema.',
          etiqueta: 'RESTRICCIÓN: Cero almacenamiento en nubes comerciales externas (Google, AWS, iCloud) y mínimo auxilio de IA; resolución manual de errores en terminal y configuración pura.',
        },
        {
          titulo: 'Proyecto 3: Bitácora Analógica Encuadernada a Mano',
          detalle: 'El contrapeso físico al código: el diseño y encuadernación manual de un cuaderno con hojas de gramaje y textura elegidas meticulosamente por mí, con pastas artesanales intervenidas. Un espacio analógico destinado a consignar todas esas "bobadas" que día a día necesito contarme a mí mismo: pensamientos en crudo, contradicciones, bosquejos y desahogos que pierden su magia al pasar por una pantalla.',
          etiqueta: 'RESTRICCIÓN: Cero pantallas, cero borradores digitales y tinta permanente; no se arrancan hojas ni se tapan tachaduras, aceptando el error como parte del registro humano.',
        },
      ],
      reflexion: 'Austin Kleon afirma que la creatividad también es restar. Al quitar la dependencia de las nubes corporativas y la muleta de la automatización artificial, el acto creador recupera su peso: el orgullo de saber exactamente cómo fue ensamblado cada tornillo, cada línea de código y cada pliego de papel.',
    },
  },
  {
    id: 'trabajo',
    pageNumber: 10,
    tipo: 'concepto',
    capitulo: 'Capítulo 06 / Haz un buen trabajo y compártelo',
    rubrica: 'Mejor trabajo hasta la fecha: Auditoría, lección de alcance y versión 2.0',
    titulo: 'Arquitectura de Accesos Novaventa: Optimización, Seguridad y Límites',
    subtitulo: 'La batalla contra la sobrecarga de datos, la lentitud estructural y el aprendizaje de no intentar reescribirlo todo de golpe',
    notaAlMargen: '«Si hay algo que detesto en la ingeniería es la lentitud evitable: la ineficiencia que nace de consultar a ciegas sin respetar la escala del sistema.»',
    badgeSello: 'AUDITORÍA TÉCNICA',
    concepto: {
      categoria: 'trabajo',
      descripcion: 'Análisis crítico del proyecto de optimización para el Sistema de Accesos de Novaventa. Una intervención donde convergieron la seguridad de la información corporativa, el rendimiento de base de datos y una lección madura sobre el alcance real de un desarrollador frente a sistemas heredados.',
      metaInfo: {
        'Proyecto': 'Sistema Centralizado de Gestión de Accesos y Permisos — Novaventa',
        'Contexto': 'Infraestructura empresarial con múltiples aplicaciones satélite donde la consulta de credenciales y privilegios colapsaba los tiempos de respuesta.',
        'Objetivo Crítico': 'Erradicar la sobrecarga masiva de datos indiscriminados por trabajador, mitigando riesgos severos de exposición pública y reduciendo drásticamente la latencia.',
        'Solución Aplicada': 'Reestructuración de relaciones relacionales en la base de datos y refactorización selectiva de comandos de consulta para segmentar la carga.',
        'Lección Aprendida': 'Querer sustituir y demoler componentes antiguos de golpe desborda las capacidades. La verdadera ingeniería a menudo exige adaptar lo nuevo para transformar el comportamiento de lo existente sin fracturarlo.',
        'Hoja de Ruta V2.0': 'Rediseño total del esquema de datos: arquitectura orientada a eventos o lectura segmentada para eliminar de raíz los parches transversales de contención de presión.',
      },
      items: [
        {
          titulo: 'El Síntoma: Extracción Masiva e Indiscriminada',
          detalle: 'El sistema original traía en una sola transacción todos los usuarios, permisos, aplicaciones y datos cruzados del empleado en todas las plataformas de Novaventa. Miles de registros innecesarios viajaban por la red, degradando el rendimiento e introduciendo una brecha crítica de seguridad si la información llegaba a exponerse.',
          etiqueta: 'DIAGNÓSTICO Y RIESGO',
        },
        {
          titulo: 'La Intervención: Comandos Específicos y Relaciones Claras',
          detalle: 'Modifiqué los comandos de consulta para granular la información solicitada y ajusté la relación entre tablas para evitar uniones cartesianas costosas. El sistema dejó de solicitar todo por defecto y empezó a responder con precisión estricta a lo requerido en cada contexto.',
          etiqueta: 'ARQUITECTURA RELACIONAL',
        },
        {
          titulo: 'La Autocrítica: El Error de Querer Abarcarlo Todo',
          detalle: 'El mayor aprendizaje no fue de sintaxis, sino de criterio: al principio intenté reemplazar y rehacer demasiados módulos a la vez, cayendo en un desgaste insostenible. Comprendí que en software muchas veces la solución no es la demolición total, sino introducir piezas nuevas que modulen y domen el comportamiento de lo antiguo.',
          etiqueta: 'HUMILDAD INGENIERIL',
        },
        {
          titulo: 'La Versión 2.0: Rediseño Estructural de Raíz',
          detalle: 'En una segunda versión no pondría parches transversales para aliviar la presión del sistema. Reestructuraría el modelo de datos desde su génesis, garantizando que el diseño relacional y los patrones de acceso aíslen el consumo por dominio de aplicación sin requerir mecanismos externos de estrangulamiento.',
          etiqueta: 'PROYECCIÓN V2.0',
        },
      ],
      reflexion: 'Hacer un buen trabajo y compartirlo no significa presumir victorias impecables; significa documentar la fricción, reconocer cuándo el ego nos hace intentar abarcar más de lo prudente y tener la lucidez técnica de saber cómo se reconstruiría el sistema desde sus cimientos.',
    },
  },
  {
    id: 'lugar',
    pageNumber: 11,
    tipo: 'concepto',
    capitulo: 'Capítulo 07 / La geografía ya no manda',
    rubrica: 'Espacio que alimenta creativa y espiritualmente',
    titulo: 'El Refugio Íntimo y la Montaña: Sosiego, Noche y Silencio',
    subtitulo: 'La habitación propia como celda de creación y la naturaleza abierta como horizonte mental',
    notaAlMargen: '«El sosiego no es ausencia de pensamiento: es el silencio necesario para que las ideas dejen de chocar entre sí y encuentren su cauce.»',
    badgeSello: 'SANTUARIO VITAL',
    concepto: {
      categoria: 'lugar',
      descripcion: 'Para crear no necesito urbes hiperactivas ni oficinas de cristal. Mi centro de gravedad es dual: la intimidad protegida de mi habitación en la penumbra y la vastedad de la montaña antioqueña, donde el viento y los sonidos orgánicos silencian el ruido artificial del mundo.',
      items: [
        {
          titulo: 'La Habitación Propia: El Rincón de Creación',
          detalle: 'A nivel general, mi habitación es el lugar donde me sosiego. Un entorno despojado de bullicio, con luz tenue y cálida, donde la noche cae y algunas estrellas asoman en el cielo. Es el espacio donde el código, la lectura y la introspección no compiten con el afuera.',
          etiqueta: 'MICRO-REFUGIO NOCTURNO',
        },
        {
          titulo: 'El Horizonte Natural: La Naturaleza Viva',
          detalle: 'Amo profundamente la naturaleza. La ladera verde, los pinares y la niebla que corona la cordillera me devuelven la proporción de las cosas. La calma de los ruidos biológicos —el aire entre los árboles, la tierra húmeda, la lejanía de las montañas— es el único sonido que no satura la mente.',
          etiqueta: 'HORIZONTE Y PULMÓN',
        },
        {
          titulo: 'La Geografía Interior',
          detalle: 'Austin Kleon afirma que la geografía ya no manda: desde este rincón sereno puedo dialogar con sistemas de cualquier rincón del planeta, pero es este sosiego el que me impide volverme una máquina utilitaria. Programar con humanidad requiere primero un lugar donde respirar sin prisa.',
          etiqueta: 'FILOSOFÍA DEL ESPACIO',
        },
      ],
      evidencia: '/lugar-creativo.png',
      etiquetaEvidencia: 'Registro Paisajístico / La Montaña y el Horizonte Natural',
      reflexion: 'El verdadero lujo contemporáneo no es la hiperconectividad, sino el silencio: una habitación con luz cálida, estrellas en la ventana y la montaña recordándonos que el mundo existía mucho antes de nuestras pantallas.',
    },
  },
  {
    id: 'heroe',
    pageNumber: 12,
    tipo: 'concepto',
    capitulo: 'Capítulo 08 / Sé amable (el mundo es un pañuelo)',
    rubrica: 'Carta epistolar al referente: Sabiduría, dolor transformado y bondad sin condiciones',
    titulo: 'Epístola al Dragón del Oeste: El Tío Iroh',
    subtitulo: 'A quien entendió que el mayor acto heroico no es vencer al enemigo, sino salvar a un ser querido de perderse a sí mismo',
    notaAlMargen: '«No lleva capa ni pretende ser invencible: su heroísmo fue elegir la compasión, preparar té y esperar con paciencia infinita a que el otro encontrara su propia luz.»',
    badgeSello: 'BONDAD Y REDENCIÓN',
    concepto: {
      categoria: 'heroe',
      descripcion: 'En un mundo que suele confundir la fuerza con la arrogancia y la violencia, el Tío Iroh representa el arquetipo más lúcido y conmovedor: un hombre que conoció la guerra, probó el veneno del duelo irreparable (la muerte de su hijo Lu Ten) y decidió no endurecerse, sino consagrar su vida a la templanza, la sabiduría y la salvación de su sobrino Zuko.',
      items: [
        {
          titulo: 'El Heroísmo Silencioso: Salvar del Desvío',
          detalle: 'Iroh no es un superhéroe convencional. Su hazaña monumental no fue reconquistar Ba Sing Se, sino acompañar en el destierro a un joven herido, lleno de rabia y confusión moral. Nunca le impuso el camino; lo contuvo, le preparó té y estuvo allí cuando Zuko tocó fondo para recordarle quién era en realidad.',
          etiqueta: 'ARQUETIPO DE GUÍA',
        },
        {
          titulo: 'La Huella en mi Vida: Meditación y Sosiego',
          detalle: 'Sus reflexiones llegaron a mí en momentos cruciales. Ver su andar me enseñó que la empatía no es debilidad y que el dolor del pasado no tiene por qué convertirte en un monstruo. En mi propia vocación por los sistemas y la vida, busco esa misma cualidad: entender antes de juzgar, conservar la calidez y saber que una taza de té compartida a tiempo vale más que mil batallas ganadas con rencor.',
          etiqueta: 'HUELLA VITAL',
        },
        {
          titulo: 'Carta Abierta al Tío Iroh',
          detalle: '«Querido Iroh: Le escribo con la gratitud de quien ha encontrado refugio en sus palabras cuando el mundo parecía demasiado ruidoso y hostil. Gracias por enseñarme que es de sabios nutrirse de muchas fuentes distintas para no volverse rígido; gracias por recordarme que la vergüenza no es lo opuesto al orgullo, sino su fuente; y sobre todo, gracias por demostrar que la bondad radical, aun cuando el corazón está roto por las pérdidas, es la única victoria que permanece intacta en el tiempo.»',
          etiqueta: 'CORRESPONDENCIA',
        },
      ],
      evidencia: '/tio-iroh.png',
      etiquetaEvidencia: 'Homenaje Visual / El Dragón del Oeste en Meditación',
      reflexion: 'Sé amable: en el fondo, todos libramos batallas invisibles. Ser un remanso de paz para los demás cuando están extraviados es el mayor legado al que un ser humano puede aspirar.',
    },
  },
  {
    id: 'promesa',
    pageNumber: 13,
    tipo: 'concepto',
    capitulo: 'Capítulo 09 / Sé aburrido (es la única forma de trabajar)',
    rubrica: 'Promesa y compromiso creativo diario durante al menos 3 meses',
    titulo: 'Pacto de Disciplina: Rutina, Fricción y Constancia',
    subtitulo: 'Compromiso de 90 días: construir en silencio, aceptar el error y sostener la cadena de trabajo',
    notaAlMargen: '«No soy el mejor en nada, pero compenso cualquier distancia entregando peculiarmente todo mi ser en cada jornada de trabajo.»',
    badgeSello: 'PACTO DE HONOR',
    concepto: {
      categoria: 'promesa',
      descripcion: 'Austin Kleon sentencia que la creatividad requiere ser metódico y aburrido en la vida cotidiana para poder ser salvaje, libre y original en la obra. Este es mi compromiso formal para los próximos tres meses: desterrar la búsqueda de aplauso inmediato y reemplazar la ilusión de la inspiración por la perseverancia silenciosa de la noche.',
      items: [
        {
          titulo: 'El Compromiso Sagrado: 60 Minutos de Taller Nocturno',
          detalle: '«Me comprometo solemnemente a dedicar un bloque mínimo de 60 minutos cada noche en el sosiego de mi habitación, bajo luz tenue y sin pantallas distractoras ni redes sociales, al avance exclusivo de mis proyectos de autor: programar la arquitectura de mi bóveda personal, ensamblar y depurar mi servidor NAS desde la terminal, o intervenir con tinta permanente mi bitácora encuadernada a mano.»',
          etiqueta: 'CLÁUSULA DE FOCO',
        },
        {
          titulo: 'La Aceptación Radical del Error',
          detalle: '«Renuncio a la frustración estéril cuando algo falle. Si un comando de base de datos o una configuración de red colapsa, asumiré el tropiezo como la materia prima del aprendizaje. No recurriré al atajo fácil de la automatización ciega cuando lo que necesito es comprender la raíz del problema con mis propias manos.»',
          etiqueta: 'ÉTICA DEL APRENDIZAJE',
        },
        {
          titulo: 'El Método del Calendario: No Romper la Cadena',
          detalle: '«Mantendré un registro visible de 90 casillas en mi bitácora física. Cada jornada cumplida con honestidad será sellada con un trazo rojo indeleble. El objetivo no es la perfección de la obra en una sola noche, sino la victoria silenciosa de no haber quebrado la disciplina ni un solo día.»',
          etiqueta: 'MÉTODO DE CALENDARIO',
        },
      ],
      reflexion: 'Sé aburrido y paciente en tu rutina para que puedas ser audaz, lúcido y humano en lo que dejas en el mundo.',
    },
  },
];

export const grafoData: DatosGrafo = {
  nodes: [
    {
      id: 'central',
      nombre: 'Duber (Esencia, Psique y Código)',
      tipo: 'central',
      relevancia: 'primaria',
      chapterNumber: '04',
      rubricTag: 'Capítulo 04: Usa tus manos (Portada, Biografía y Esencia)',
      subtitle: 'Núcleo de Sinapsis y Exploración',
      pageNumber: 0,
    },
    ...paginasLibro
      .filter((p) => p.id !== 'central')
      .map((p) => ({
        id: p.id,
        nombre: p.titulo,
        tipo: p.tipo,
        relevancia: p.tipo === 'persona' ? ('primaria' as const) : ('secundaria' as const),
        pageNumber: p.pageNumber,
        chapterNumber: p.capitulo.split('/')[0].replace('Capítulo', '').trim(),
        rubricTag: p.rubrica,
        subtitle: p.subtitulo,
      })),
  ],
  links: paginasLibro
    .filter((p) => p.id !== 'central')
    .map((p) => ({
      source: 'central',
      target: p.id,
    })),
};

export const personas: PersonaContenido[] = paginasLibro
  .filter((p) => p.tipo === 'persona')
  .map((p) => ({
    id: p.id,
    nombre: p.persona?.nombre ?? p.titulo,
    foto: p.persona?.foto ?? '',
    frase: p.persona?.frase ?? '',
  }));

export const conceptos: ConceptoContenido[] = paginasLibro
  .filter((p) => p.tipo === 'concepto')
  .map((p) => ({
    id: p.id,
    titulo: p.titulo,
    contenido: p.concepto?.descripcion ?? '',
  }));