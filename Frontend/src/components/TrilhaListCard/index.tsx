import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Trilha, Dificuldade } from "../../data/trilhas";

const dificuldadeCores: Record<Dificuldade, string> = {
  Fácil: "#2E7D32",
  Moderada: "#E9A400",
  Difícil: "#C62828",
};

interface TrilhaListCardProps {
  trilha: Trilha;
  onPress?: () => void;
}

export default function TrilhaListCard({
  trilha,
  onPress,
}: TrilhaListCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={trilha.imagem} style={styles.image} resizeMode="cover" />

      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.nome} numberOfLines={1}>
            {trilha.nome}
          </Text>
          <View
            style={[
              styles.badge,
              { backgroundColor: dificuldadeCores[trilha.dificuldade] },
            ]}
          >
            <Text style={styles.badgeText}>{trilha.dificuldade}</Text>
          </View>
        </View>

        <Text style={styles.localizacao} numberOfLines={1}>
          {trilha.localizacao}
        </Text>

        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Ionicons name="walk" size={14} color="#555" />
            <Text style={styles.infoText}>{trilha.distanciaKm} km</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="time" size={14} color="#555" />
            <Text style={styles.infoText}>
              {trilha.duracaoMin >= 60
                ? `${Math.floor(trilha.duracaoMin / 60)}h${
                    trilha.duracaoMin % 60 ? trilha.duracaoMin % 60 : ""
                  }`
                : `${trilha.duracaoMin} min`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
