import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Avaliacao } from "../../data/trilhas";

function getIniciais(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

interface AvaliacaoCardProps {
  avaliacao: Avaliacao;
}

export default function AvaliacaoCard({ avaliacao }: AvaliacaoCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{getIniciais(avaliacao.nome)}</Text>
        </View>
        <View>
          <Text style={styles.nome}>{avaliacao.nome}</Text>
          <Text style={styles.data}>{avaliacao.data}</Text>
        </View>
      </View>

      <View style={styles.estrelasRow}>
        {[1, 2, 3, 4, 5].map((posicao) => (
          <Ionicons
            key={posicao}
            name={posicao <= avaliacao.nota ? "star" : "star-outline"}
            size={14}
            color="#E9A400"
            style={{ marginRight: 2 }}
          />
        ))}
      </View>

      <Text style={styles.comentario}>{avaliacao.comentario}</Text>
    </View>
  );
}
