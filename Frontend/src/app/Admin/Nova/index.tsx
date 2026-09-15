import { useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";
import ScreenHeader from "../../../components/ScreenHeader";
import TrilhaForm, { TrilhaFormData } from "../../../components/TrilhaForm";
import { useTrilhas } from "../../../contexts/TrilhasContext";

export default function AdminNovaTrilha() {
  const { addTrilha } = useTrilhas();
  const [loading, setLoading] = useState(false);

  function handleSubmit(dados: TrilhaFormData) {
    setLoading(true);
    addTrilha(dados);
    setLoading(false);
    router.back();
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScreenHeader title="Nova trilha" />
      <TrilhaForm onSubmit={handleSubmit} loading={loading} />
    </View>
  );
}
