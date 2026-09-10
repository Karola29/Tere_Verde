import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Especie } from "../../data/biodiversidade";

interface EspecieCardProps {
  especie: Especie;
}

export default function EspecieCard({ especie }: EspecieCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={especie.imagem}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.nome}>{especie.nome}</Text>
      <Text style={styles.nomeCientifico}>{especie.nomeCientifico}</Text>
      <Text style={styles.curiosidade}>{especie.curiosidade}</Text>
    </View>
  );
}
