import { useState } from "react";
import { View, Alert } from "react-native";
import { router } from "expo-router";
import ScreenHeader from "../../../components/ScreenHeader";
import TrilhaForm, { TrilhaFormData } from "../../../components/TrilhaForm";
import { useTrilhas } from "../../../contexts/TrilhasContext";

export default function AdminNovaTrilha() {
  const { addTrilha } = useTrilhas();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(dados: TrilhaFormData) {
    setLoading(true);
    try {
      await addTrilha(dados);
      router.back();
    } catch (erro: any) {
      Alert.alert(
        "Erro ao criar trilha",
        erro.message ?? "Não foi possível criar a trilha. Tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScreenHeader title="Nova trilha" />
      <TrilhaForm onSubmit={handleSubmit} loading={loading} />
    </View>
  );
}
