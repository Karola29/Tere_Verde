export type Dificuldade = "Fácil" | "Moderada" | "Difícil";

export interface Destaque {
  icon: string;
  label: string;
}

export interface Trilha {
  id: string;
  nome: string;
  localizacao: string;
  imagem: any;
  galeria?: any[];
  dificuldade: Dificuldade;
  distanciaKm: number;
  duracaoMin: number;
  descricao?: string;
  tipoTerreno?: string;
  melhorHorario?: string;
  destaques?: Destaque[];
  avaliacoes?: Avaliacao[];
}

export interface Avaliacao {
  id: string;
  nome: string;
  nota: number;
  comentario: string;
  data: string;
}

export const trilhasMock: Trilha[] = [
  {
    id: "1",
    nome: "Trilha Suspensa",
    localizacao: "Praça da Barragem",
    imagem: require("../../assets/images/trilha-suspensa.jpg"),
    dificuldade: "Fácil",
    distanciaKm: 1.3,
    duracaoMin: 60,
    descricao:
      "Uma das grandes atrações do PARNASO, com piso de madeira e corrimão que permite acesso até a cadeirantes. Constrída sobre um aqueduto do início do século XX, corta um trecho de Mata Atlântica em nível elevado, permitindo observar a copa das árvores de perto.",
    tipoTerreno: "Piso de madeira com corrimão",
    melhorHorario: "Manhã ou fim de tarde",
    destaques: [
      { icon: "trail-sign", label: "Aqueduto" },
      { icon: "leaf", label: "Mata Atlântica" },
      { icon: "accessibility", label: "Acessível" },
      { icon: "camera", label: "Fotografia" },
    ],
    avaliacoes: [
      {
        id: "a1",
        nome: "Marina Alves",
        nota: 5,
        comentario:
          "Trilha linda e muito acessível, levei minha mãe de 70 anos e ela adorou!",
        data: "há 2 semanas",
      },
      {
        id: "a2",
        nome: "Pedro Costa",
        nota: 4,
        comentario:
          "Ótima vista da mata, só achei um pouco cheia no fim de semana.",
        data: "há 1 mês",
      },
      {
        id: "a3",
        nome: "Juliana Ramos",
        nota: 5,
        comentario: "Perfeita para ir com crianças. Recomendo muito!",
        data: "há 1 mês",
      },
    ],
  },
  {
    id: "2",
    nome: "Estrada da Barragem",
    localizacao: "PARNASO - Sede Teresópolis",
    imagem: require("../../assets/images/estrada-barragem.jpg"),
    dificuldade: "Fácil",
    distanciaKm: 3,
    duracaoMin: 120,
    descricao:
      "Estrada calçada em paralelepípedo que dá acesso a todas as trilhas da Sede Teresópolis. Ideal para caminhadas de lazer, conta com placas indicativas a cada 500m, vários mirantes, recantos para descanso, duchas e cascatas. Termina na Praça da Barragem, ponto de captação de água da cidade.",
    tipoTerreno: "Paralelepípedo, trânsito liberado para automóveis",
    melhorHorario: "Manhã",
    destaques: [
      { icon: "trail-sign", label: "Mirantes" },
      { icon: "water", label: "Cascatas" },
      { icon: "walk", label: "Lazer" },
      { icon: "image", label: "Vista panorâmica" },
    ],
  },
  {
    id: "3",
    nome: "Trilha Cartão Postal",
    localizacao: "PARNASO - Sede Teresópolis",
    imagem: require("../../assets/images/trilha-cartao-postal.jpg"),
    dificuldade: "Moderada",
    distanciaKm: 1.2,
    duracaoMin: 120,
    descricao:
      "Com acesso pela Estrada da Barragem, cruza área de floresta com belas vistas da montanha e dá acesso a um mirante voltado para a Serra dos Órgãos, com um ângulo único do Dedo de Deus em meio à floresta. No caminho é possível observar grandes árvores, como o jequitibá.",
    tipoTerreno: "Trilha de mata, com trechos de subida",
    melhorHorario: "Manhã ou fim de tarde",
    destaques: [
      { icon: "image", label: "Vista panorâmica" },
      { icon: "leaf", label: "Natureza" },
      { icon: "camera", label: "Fotografia" },
      { icon: "trail-sign", label: "Mirante" },
    ],
  },
  {
    id: "4",
    nome: "Trilha Pedra Alpina",
    localizacao: "Montanhas de Teresópolis",
    imagem: require("../../assets/images/pedra-alpina.jpg"),
    dificuldade: "Moderada",
    distanciaKm: 2,
    duracaoMin: 120,
    descricao:
      "Experiência desafiadora para os mais aventureiros e adeptos de esportes regulares, com ganho significativo de elevação até uma altitude final de 1.280 metros. Proporciona vista panorâmica da região, com visualização do Parque Estadual dos Três Picos e da Serra dos Órgãos.",
    tipoTerreno: "Classe II, trechos técnicos",
    melhorHorario: "Manhã",
    destaques: [
      { icon: "trending-up", label: "Elevação" },
      { icon: "image", label: "Vista panorâmica" },
      { icon: "fitness", label: "Desafiadora" },
      { icon: "camera", label: "Fotografia" },
    ],
  },
  {
    id: "5",
    nome: "Pedra do Sino",
    localizacao: "PARNASO - Sede Teresópolis",
    imagem: require("../../assets/images/pedra-sino.jpg"),
    dificuldade: "Difícil",
    distanciaKm: 22,
    duracaoMin: 300,
    descricao:
      "Ponto mais alto da Serra dos Órgãos, com 2.275 metros de altitude. Uma das trilhas mais tradicionais da cidade, faz parte da Travessia Petrópolis x Teresópolis. Apesar da distância considerável, não apresenta grandes dificuldades técnicas. A dica é pegar o pôr do sol no cume.",
    tipoTerreno: "Trilha extensa, zigue-zague em subida",
    melhorHorario: "Início da manhã (para chegar ao cume à tarde)",
    destaques: [
      { icon: "trophy", label: "Ponto mais alto" },
      { icon: "water", label: "Véu da Noiva" },
      { icon: "moon", label: "Pôr do sol" },
      { icon: "flag", label: "Tradicional" },
    ],
  },
];
