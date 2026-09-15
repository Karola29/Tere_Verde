import { useEffect, useMemo, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { styles } from "../../../styles/trilhas";
import SearchBar from "../../../components/SearchBar";
import TrilhaListCard from "../../../components/TrilhaListCard";
import { Dificuldade } from "../../../data/trilhas";
import { useTrilhas } from "../../../contexts/TrilhasContext";
import ConexaoErro from "@/components/ConexaoErro";

type FiltroDificuldade = "Todas" | Dificuldade;

const filtros: FiltroDificuldade[] = ["Todas", "Fácil", "Moderada", "Difícil"];

export default function Trilhas() {
  const params = useLocalSearchParams<{ q?: string }>();
  const [search, setSearch] = useState(params.q ?? "");
  const [filtro, setFiltro] = useState<FiltroDificuldade>("Todas");
  const { trilhas, erro, recarregar } = useTrilhas();

  useEffect(() => {
    if (params.q) setSearch(params.q);
  }, [params.q]);

  const trilhasFiltradas = useMemo(() => {
    const termo = search.trim().toLowerCase();

    return trilhas.filter((trilha) => {
      const combinaBusca =
        !termo ||
        trilha.nome.toLowerCase().includes(termo) ||
        trilha.localizacao.toLowerCase().includes(termo);

      const combinaFiltro = filtro === "Todas" || trilha.dificuldade === filtro;

      return combinaBusca && combinaFiltro;
    });
  }, [trilhas, search, filtro]);

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

      {erro ? (
        <ConexaoErro mensagem={erro} onTentarNovamente={recarregar} />
      ) : (
        <>
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
        </>
      )}
    </View>
  );
}
