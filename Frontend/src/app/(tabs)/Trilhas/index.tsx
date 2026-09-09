import { useEffect, useMemo, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { styles } from "../../../styles/trilhas";
import SearchBar from "../../../components/SearchBar";
import TrilhaListCard from "../../../components/TrilhaListCard";
import { trilhasMock, Dificuldade } from "../../../data/trilhas";

type FiltroDificuldade = "Todas" | Dificuldade;

const filtros: FiltroDificuldade[] = ["Todas", "Fácil", "Moderada", "Difícil"];

export default function Trilhas() {
  const params = useLocalSearchParams<{ q?: string }>();
  const [search, setSearch] = useState(params.q ?? "");
  const [filtro, setFiltro] = useState<FiltroDificuldade>("Todas");

  useEffect(() => {
    if (params.q) setSearch(params.q);
  }, [params.q]);

  const trilhasFiltradas = useMemo(() => {
    const termo = search.trim().toLowerCase();

    return trilhasMock.filter((trilha) => {
      const combinaBusca =
        !termo ||
        trilha.nome.toLowerCase().includes(termo) ||
        trilha.localizacao.toLowerCase().includes(termo);

      const combinaFiltro = filtro === "Todas" || trilha.dificuldade === filtro;

      return combinaBusca && combinaFiltro;
    });
  }, [search, filtro]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Trilhas</Text>
      </View>
      <SearchBar value={search} onChangeText={setSearch} />

      <View style={styles.filtrosRow}>
        {filtros.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.filtroChip,
              filtro === item && styles.filtroChipAtivo,
            ]}
            onPress={() => setFiltro(item)}
          >
            <Text
              style={[
                styles.filtroText,
                filtro === item && styles.filtroTextAtivo,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={trilhasFiltradas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TrilhaListCard
            trilha={item}
            onPress={() => router.push(`/Detalhes/${item.id}` as any)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma trilha encontrada.</Text>
        }
      />
    </View>
  );
}
