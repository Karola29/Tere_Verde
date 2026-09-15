import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import TrilhaCard from "../TrilhaCard";
import { Trilha } from "../../data/trilhas";

interface TrilhasShelfProps {
  title: string;
  trilhas: Trilha[];
  onVerTodas?: () => void;
  onSelectTrilha?: (trilha: Trilha) => void;
}

export default function TrilhasShelf({
  title,
  trilhas,
  onVerTodas,
  onSelectTrilha,
}: TrilhasShelfProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {onVerTodas && (
          <TouchableOpacity onPress={onVerTodas}>
            <Text style={styles.verTodas}>Ver todas</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={trilhas}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TrilhaCard trilha={item} onPress={() => onSelectTrilha?.(item)} />
        )}
      />
    </View>
  );
}
