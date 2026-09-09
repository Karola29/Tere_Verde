import { View, Text, FlatList, Image } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../styles/favoritos";
import TrilhaListCard from "../../../components/TrilhaListCard";
import { trilhasMock } from "../../../data/trilhas";
import { useFavoritos } from "../../../contexts/FavoritosContext";

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  const trilhasFavoritas = trilhasMock.filter((trilha) =>
    favoritos.includes(trilha.id),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Favoritos</Text>
      </View>

      <FlatList
        data={trilhasFavoritas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TrilhaListCard
            trilha={item}
            onPress={() => router.push(`/Detalhes/${item.id}` as any)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="heart-outline" size={48} color="#ccc" />
            <Text style={styles.emptyTitle}>
              Nenhuma trilha favoritada ainda
            </Text>
            <Text style={styles.emptyText}>
              Toque no coração de uma trilha para salvá-la aqui.
            </Text>
          </View>
        }
      />
    </View>
  );
}
