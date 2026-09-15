import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ScreenHeader from "../../components/ScreenHeader";
import { styles } from "../../styles/adminLista";
import { useTrilhas } from "../../contexts/TrilhasContext";
import { resolveImage } from "../../data/imageGallery";

export default function AdminLista() {
  const { trilhas, deleteTrilha } = useTrilhas();

  function confirmarExclusao(id: string, nome: string) {
    Alert.alert(
      "Excluir trilha",
      `Tem certeza que deseja excluir "${nome}"? Essa ação não pode ser desfeita.`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => deleteTrilha(id),
        },
      ],
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScreenHeader title="Painel administrativo" />

      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Gerenciar trilhas</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => router.push("/Admin/Nova" as any)}
          >
            <Ionicons name="add" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={trilhas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={resolveImage(item.imagem)}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.info}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.localizacao}>{item.localizacao}</Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => router.push(`/Admin/${item.id}` as any)}
                >
                  <Ionicons name="pencil" size={18} color="#555" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => confirmarExclusao(item.id, item.nome)}
                >
                  <Ionicons name="trash" size={18} color="#C62828" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
