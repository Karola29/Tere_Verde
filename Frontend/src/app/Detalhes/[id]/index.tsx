import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../../styles/detalhes";
import { Button } from "../../../components/Button";
import { Dificuldade, Evento } from "../../../data/trilhas";
import { resolveImage } from "../../../data/imageGallery";
import CardAvaliacao from "@/components/CardAvaliacao";
import AvaliacaoForm from "@/components/AvaliacaoForm";
import { useFavoritos } from "@/contexts/FavoritosContext";
import { useTrilhas } from "@/contexts/TrilhasContext";
import { useAuth } from "@/contexts/AuthContext";
import EventoCard from "@/components/EventoCard";
import { fetchEventos, criarAvaliacaoAPI } from "@/services/trilhas";
import ConexaoErro from "@/components/ConexaoErro";

const dificuldadeCores: Record<Dificuldade, string> = {
  Fácil: "#2E7D32",
  Moderada: "#E9A400",
  Difícil: "#C62828",
};

export default function Detalhes() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { isFavorito, toggleFavorito } = useFavoritos();
  const { getTrilha, loading, erro, recarregar } = useTrilhas();
  const { token } = useAuth();

  const trilha = getTrilha(id ?? "");

  const [avaliacoes, setAvaliacoes] = useState(trilha?.avaliacoes ?? []);
  const [enviando, setEnviando] = useState(false);
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    if (trilha) setAvaliacoes(trilha.avaliacoes ?? []);
  }, [trilha]);

  useEffect(() => {
    if (!trilha) return;
    fetchEventos(trilha.id)
      .then((dados) =>
        setEventos(
          dados.map((e) => ({
            id: e.id,
            titulo: e.nome,
            data: e.data,
            horario: e.horario,
            descricao: e.descricao ?? undefined,
          })),
        ),
      )
      .catch(() => setEventos([]));
  }, [trilha?.id]);

  if (loading) {
    return (
      <View
        style={[
          styles.container,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <ActivityIndicator size="large" color="#2E7D32" />
      </View>
    );
  }

  if (!trilha) {
    return (
      <View style={styles.container}>
        {erro ? (
          <ConexaoErro mensagem={erro} onTentarNovamente={recarregar} />
        ) : (
          <Text>Trilha não encontrada.</Text>
        )}
      </View>
    );
  }

  async function handleNovaAvaliacao(nota: number, comentario: string) {
    if (!token) {
      Alert.alert("Login necessário", "Faça login para avaliar esta trilha.");
      return;
    }

    setEnviando(true);
    try {
      await criarAvaliacaoAPI(trilha.id, { nota, comentario }, token);
      await recarregar();
    } catch (erro: any) {
      Alert.alert(
        "Erro",
        erro.message ?? "Não foi possível enviar sua avaliação.",
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <ScrollView style={styles.container} bounces={false}>
      <View style={styles.imageWrapper}>
        <Image
          source={resolveImage(trilha.imagem)}
          style={styles.image}
          resizeMode="cover"
        />

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

        {eventos.length > 0 && (
          <View style={{ marginTop: 20 }}>
            <Text style={styles.destaquesTitle}>Próximos eventos</Text>
            {eventos.map((evento) => (
              <EventoCard
                key={evento.id}
                evento={evento}
                localizacao={trilha.localizacao}
              />
            ))}
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
