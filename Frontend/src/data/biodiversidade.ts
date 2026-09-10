export interface Especie {
  id: string;
  nome: string;
  nomeCientifico: string;
  imagem: any;
  curiosidade: string;
}

export const especiesMock: Especie[] = [
  {
    id: "1",
    nome: "Muriqui",
    nomeCientifico: "Brachyteles arachnoides",
    imagem: require("../../assets/images/biodiversidade/muriqui.jpeg"),
    curiosidade:
      "É o maior primata das Américas e uma das espécies mais ameaçadas da Mata Atlântica.",
  },
  {
    id: "2",
    nome: "Quati",
    nomeCientifico: "Nasua nasua",
    imagem: require("../../assets/images/biodiversidade/quati.jpg"),
    curiosidade:
      "Vive em bandos e é fácil de avistar durante o dia nas trilhas do parque.",
  },
  {
    id: "3",
    nome: "Bromélia",
    nomeCientifico: "Bromeliaceae",
    imagem: require("../../assets/images/biodiversidade/bromelia.jpeg"),
    curiosidade:
      "Suas folhas acumulam água da chuva, criando pequenos ecossistemas próprios.",
  },
  {
    id: "4",
    nome: "Cachorro-do-mato",
    nomeCientifico: "Cerdocyon thous",
    imagem: require("../../assets/images/biodiversidade/cachorro-do-mato.jpeg"),
    curiosidade:
      "Onívoro e nativo da Mata Atlântica, ajuda a dispersar sementes pela floresta.",
  },
];
