import { View, Text, FlatList, Image } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../styles/favoritos";
import TrilhaListCard from "../../../components/TrilhaListCard";
import { useTrilhas } from "../../../contexts/TrilhasContext";
import { useFavoritos } from "../../../contexts/FavoritosContext";
import ConexaoErro from "@/components/ConexaoErro";

export default function Favoritos() {
  const { favoritos } = useFavoritos();
  const { trilhas, erro, recarregar } = useTrilhas();

  const trilhasFavoritas = trilhas.filter((trilha) =>
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

      {erro ? (
        <ConexaoErro mensagem={erro} onTentarNovamente={recarregar} />
      ) : (
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
      )}
    </View>
  );
}
