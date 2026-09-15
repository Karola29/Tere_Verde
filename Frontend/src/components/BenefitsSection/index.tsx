import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

interface Benefit {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
}

interface BenefitsSectionProps {
  title?: string;
  benefits: Benefit[];
}

export default function BenefitsSection({
  title = "Por que fazer trilhas?",
  benefits,
}: BenefitsSectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.grid}>
        {benefits.map((benefit, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.iconWrapper}>
              <Ionicons name={benefit.icon} size={20} color="#2E7D32" />
            </View>
            <Text style={styles.cardTitle}>{benefit.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
