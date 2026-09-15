import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import EspecieCard from "../EspecieCard";
import { especiesMock } from "../../data/biodiversidade";

export default function BiodiversidadeSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biodiversidade</Text>
      <Text style={styles.subtitle}>
        O parque abriga uma das maiores riquezas de flora protegida do Brasil,
        além de centenas de espécies de aves e mamíferos da Mata Atlântica.
      </Text>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>3.000+</Text>
          <Text style={styles.statLabel}>espécies de plantas</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>462</Text>
          <Text style={styles.statLabel}>espécies de aves</Text>
        </View>
        <View style={[styles.statItem, { marginRight: 0 }]}>
          <Text style={styles.statNumber}>83</Text>
          <Text style={styles.statLabel}>espécies de mamíferos</Text>
        </View>
      </View>

      <FlatList
        data={especiesMock}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <EspecieCard especie={item} />}
      />
    </View>
  );
}
