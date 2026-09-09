import { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../styles/detalhes";
import { Button } from "../../../components/Button";
import { trilhasMock, Dificuldade } from "../../../data/trilhas";
import CardAvaliacao from "@/components/CardAvaliacao";
import AvaliacaoForm from "@/components/AvaliacaoForm";
import { useFavoritos } from "@/contexts/FavoritosContext";

const dificuldadeCores: Record<Dificuldade, string> = {
  Fácil: "#2E7D32",
  Moderada: "#E9A400",
  Difícil: "#C62828",
};

export default function Detalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { isFavorito, toggleFavorito } = useFavoritos();

  const trilha = trilhasMock.find((t) => t.id === id);
  if (!trilha) {
    return (
      <View style={styles.container}>
        <Text>Trilha não encontrada.</Text>
      </View>
    );
  }

  const [avaliacoes, setAvaliacoes] = useState(trilha.avaliacoes ?? []);
  const [enviando, setEnviando] = useState(false);

  function handleNovaAvaliacao(nota: number, comentario: string) {
    setEnviando(true);

    // POST /trilhas/{id}/feedbacks
    setTimeout(() => {
      setAvaliacoes((prev) => [
        {
          id: String(Date.now()),
          nome: "Você",
          nota,
          comentario,
          data: "agora",
        },
        ...prev,
      ]);
      setEnviando(false);
    }, 800);
  }
  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.imageWrapper}>
        <Image source={trilha.imagem} style={styles.image} resizeMode="cover" />

        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => toggleFavorito(trilha.id)}
          >
            <Ionicons
              name={isFavorito(trilha.id) ? "heart" : "heart-outline"}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.nome}>{trilha.nome}</Text>
          <View
            style={[
              styles.badge,
              { backgroundColor: dificuldadeCores[trilha.dificuldade] },
            ]}
          >
            <Text style={styles.badgeText}>{trilha.dificuldade}</Text>
          </View>
        </View>

        <Text style={styles.localizacao}>{trilha.localizacao}</Text>

        {trilha.descricao && (
          <Text style={styles.descricao}>{trilha.descricao}</Text>
        )}

        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Ionicons name="walk" size={18} color="#2E7D32" />
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoLabel}>Distância</Text>
              <Text style={styles.infoValue}>{trilha.distanciaKm} km</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="time" size={18} color="#2E7D32" />
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoLabel}>Duração média</Text>
              <Text style={styles.infoValue}>
                {trilha.duracaoMin >= 60
                  ? `${Math.floor(trilha.duracaoMin / 60)}h${
                      trilha.duracaoMin % 60 ? trilha.duracaoMin % 60 : ""
                    }`
                  : `${trilha.duracaoMin} min`}
              </Text>
            </View>
          </View>

          {trilha.tipoTerreno && (
            <View style={styles.infoItemFull}>
              <Ionicons name="trail-sign" size={18} color="#2E7D32" />
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoLabel}>Tipo de terreno</Text>
                <Text style={styles.infoValue}>{trilha.tipoTerreno}</Text>
              </View>
            </View>
          )}

          {trilha.melhorHorario && (
            <View style={styles.infoItemFull}>
              <Ionicons name="sunny" size={18} color="#2E7D32" />
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoLabel}>Melhor horário</Text>
                <Text style={styles.infoValue}>{trilha.melhorHorario}</Text>
              </View>
            </View>
          )}
        </View>

        <Button title="Como chegar" onPress={() => {}} />

        {trilha.destaques && trilha.destaques.length > 0 && (
          <View style={{ marginTop: 24 }}>
            <Text style={styles.destaquesTitle}>Destaques</Text>
            <View style={styles.destaquesRow}>
              {trilha.destaques.map((destaque, index) => (
                <View key={index} style={styles.destaqueItem}>
                  <View style={styles.destaqueIconWrapper}>
                    <Ionicons
                      name={destaque.icon as any}
                      size={22}
                      color="#2E7D32"
                    />
                  </View>
                  <Text style={styles.destaqueLabel}>{destaque.label}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </View>
      <View style={{ marginTop: 24, marginHorizontal: 16, marginBottom: 32 }}>
        <View style={styles.avaliacoesHeader}>
          <Text style={styles.destaquesTitle}>Avaliações e comentários</Text>

          {avaliacoes.length > 0 && (
            <View style={styles.mediaRow}>
              <Ionicons name="star" size={16} color="#E9A400" />
              <Text style={styles.mediaText}>
                {(
                  avaliacoes.reduce((soma, a) => soma + a.nota, 0) /
                  avaliacoes.length
                ).toFixed(1)}{" "}
                ({avaliacoes.length})
              </Text>
            </View>
          )}
        </View>

        <AvaliacaoForm onSubmit={handleNovaAvaliacao} loading={enviando} />

        {avaliacoes.map((avaliacao) => (
          <CardAvaliacao key={avaliacao.id} avaliacao={avaliacao} />
        ))}
      </View>
    </ScrollView>
  );
}
