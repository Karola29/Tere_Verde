import { useState } from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import ScreenHeader from "../../../components/ScreenHeader";
import TrilhaForm, { TrilhaFormData } from "../../../components/TrilhaForm";
import { useTrilhas } from "../../../contexts/TrilhasContext";

export default function AdminEditarTrilha() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { getTrilha, updateTrilha, deleteTrilha } = useTrilhas();
  const [loading, setLoading] = useState(false);

  const trilha = getTrilha(id ?? "");

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

  function handleSubmit(dados: TrilhaFormData) {
    setLoading(true);
    updateTrilha(trilha.id, dados);
    setLoading(false);
    router.back();
  }

  function handleDelete() {
    deleteTrilha(trilha.id);
    router.back();
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScreenHeader title="Editar trilha" />
      <TrilhaForm
        initialData={trilha}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        loading={loading}
      />
    </View>
  );
}
