import { router } from "expo-router";
import { Banner } from "../../components/Banner";
import BenefitsSection from "../../components/BenefitsSection";

export default function Home() {
  return (
    <>
      <Banner
        image={require("../../../assets/images/travessia.jpg")}
        title="Explore as trilhas da sua cidade"
        subtitle="Natureza, bem-estar e aventura a poucos passos de você."
        buttonLabel="Explorar trilhas"
        onPress={() => router.push("/")}
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
    </>
  );
}
