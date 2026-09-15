import { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { router } from "expo-router";
import Banner from "../../../components/Banner";
import BenefitsSection from "../../../components/BenefitsSection";
import TrilhasShelf from "@/components/TrilhasShelf";
import SearchBar from "../../../components/SearchBar";
import { styles } from "../../../styles/home";
import BiodiversidadeSection from "@/components/BiodiversidadeSection";
import { useTrilhas } from "../../../contexts/TrilhasContext";
import ConexaoErro from "@/components/ConexaoErro";

export default function Home() {
  const [search, setSearch] = useState("");
  const { trilhas, erro, recarregar } = useTrilhas();

  function handleSearch() {
    router.push({
      pathname: "/Trilhas",
      params: { q: search },
    } as any);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <SearchBar
          value={search}
          onChangeText={setSearch}
          onSubmit={handleSearch}
        />
      </View>

      <Banner
        image={require("../../../../assets/images/travessia.jpg")}
        title="Explore as trilhas da sua cidade"
        subtitle="Natureza, bem-estar e aventura a poucos passos de você."
        buttonLabel="Explorar trilhas"
        onPress={() => router.push("/Trilhas" as any)}
      />

      {erro ? (
        <ConexaoErro mensagem={erro} onTentarNovamente={recarregar} />
      ) : (
        <TrilhasShelf
          title="Trilhas em destaque"
          trilhas={trilhas}
          onVerTodas={() => router.push("/Trilhas" as any)}
          onSelectTrilha={(trilha) =>
            router.push(`/Detalhes/${trilha.id}` as any)
          }
        />
      )}
      <BenefitsSection
        benefits={[
          { icon: "leaf", title: "Conexão com a natureza" },
          { icon: "heart", title: "Mais saúde e bem-estar" },
          { icon: "compass", title: "Conheça novos lugares" },
          { icon: "camera", title: "Momentos inesquecíveis" },
        ]}
      />
      <BiodiversidadeSection />
    </ScrollView>
  );
}
