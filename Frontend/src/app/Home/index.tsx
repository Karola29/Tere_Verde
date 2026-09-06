import { router } from "expo-router";
import Banner from "../../components/Banner";
import BenefitsSection from "../../components/BenefitsSection";
import TrilhasShelf from "@/components/TrilhasShelf";
import { trilhasMock } from "../../data/trilhas";

export default function Home() {
  return (
    <>
      <Banner
        image={require("../../../assets/images/travessia.jpg")}
        title="Explore as trilhas da sua cidade"
        subtitle="Natureza, bem-estar e aventura a poucos passos de você."
        buttonLabel="Explorar trilhas"
        onPress={() => router.push("/Trilhas")}
      />

      <BenefitsSection
        benefits={[
          {
            icon: "leaf",
            title: "Conexão com a natureza",
          },
          {
            icon: "heart",
            title: "Mais saúde e bem-estar",
          },
          {
            icon: "compass",
            title: "Conheça novos lugares",
          },
          {
            icon: "camera",
            title: "Momentos inesquecíveis",
          },
        ]}
      />
      <TrilhasShelf
        title="Trilhas em destaque"
        trilhas={trilhasMock}
        onVerTodas={() => router.push("/Trilhas")}
        onSelectTrilha={(trilha) =>
          router.push(`/Detalhes/${trilha.id}` as any)
        }
      />
    </>
  );
}
