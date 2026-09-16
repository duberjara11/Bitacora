export type TipoNeurona = 'central' | 'persona' | 'concepto';
export type RelevanciaNeurona = 'primaria' | 'secundaria';

export interface Neurona {
  id: string;
  nombre: string;
  tipo: TipoNeurona;
  relevancia: RelevanciaNeurona;
  pageNumber?: number;
  chapterNumber?: string;
  rubricTag?: string;
  subtitle?: string;
}

export interface Canal {
  source: string;
  target: string;
}

export interface DatosGrafo {
  nodes: Neurona[];
  links: Canal[];
}