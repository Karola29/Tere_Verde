export type Dificuldade = "Fácil" | "Moderada" | "Difícil";

export interface Destaque {
  icon: string;
  label: string;
}

export interface Evento {
  id: string;
  titulo: string;
  data: string;
  horario: string;
  duracaoHoras?: number;
  descricao?: string;
}

export interface Trilha {
  id: string;
  nome: string;
  localizacao: string;
  imagem: string;
  galeria?: any[];
  dificuldade: Dificuldade;
  distanciaKm: number;
  duracaoMin: number;
  descricao?: string;
  tipoTerreno?: string;
  melhorHorario?: string;
  destaques?: Destaque[];
  avaliacoes?: Avaliacao[];
  eventos?: Evento[];
}
export interface Avaliacao {
  id: string;
  nome: string;
  nota: number;
  comentario: string;
  data: string;
}
