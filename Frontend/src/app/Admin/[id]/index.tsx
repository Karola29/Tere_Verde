import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import ScreenHeader from "../../../components/ScreenHeader";
import TrilhaForm, { TrilhaFormData } from "../../../components/TrilhaForm";
import { useTrilhas } from "../../../contexts/TrilhasContext";
import { fetchEventos } from "../../../services/trilhas";
import { Evento, Trilha } from "../../../data/trilhas";

export default function AdminEditarTrilha() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { getTrilha, updateTrilha, deleteTrilha } = useTrilhas();
  const [loading, setLoading] = useState(false);
  const [carregandoEventos, setCarregandoEventos] = useState(true);

  const trilha = getTrilha(id ?? "");
  const [trilhaComEventos, setTrilhaComEventos] = useState<Trilha | undefined>(
    undefined,
  );

  useEffect(() => {
    if (!trilha) return;

    fetchEventos(trilha.id)
      .then((dados) => {
        const eventos: Evento[] = dados.map((e) => ({
          id: e.id,
          titulo: e.nome,
          data: e.data,
          horario: e.horario,
          descricao: e.descricao ?? undefined,
        }));
        setTrilhaComEventos({ ...trilha, eventos });
      })
      .catch(() => setTrilhaComEventos(trilha))
      .finally(() => setCarregandoEventos(false));
  }, [trilha?.id]);

  if (!trilha) {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScreenHeader title="Trilha" />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>Trilha não encontrada.</Text>
        </View>
      </View>
    );
  }

  if (carregandoEventos) {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScreenHeader title="Editar trilha" />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="#2E7D32" />
        </View>
      </View>
    );
  }

  async function handleSubmit(dados: TrilhaFormData) {
    setLoading(true);
    try {
      await updateTrilha(trilha!.id, dados);
      router.back();
    } catch (erro: any) {
      Alert.alert(
        "Erro ao salvar",
        erro.message ??
          "Não foi possível salvar as alterações. Tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleDelete() {
    deleteTrilha(trilha!.id);
    router.back();
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScreenHeader title="Editar trilha" />
      <TrilhaForm
        initialData={trilhaComEventos}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        loading={loading}
      />
    </View>
  );
}
