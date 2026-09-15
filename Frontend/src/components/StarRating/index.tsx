import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
  size?: number;
}

export default function StarRating({
  value,
  onChange,
  size = 28,
}: StarRatingProps) {
  return (
    <View style={styles.row}>
      {[1, 2, 3, 4, 5].map((posicao) => (
        <TouchableOpacity
          key={posicao}
          onPress={() => onChange(posicao)}
          style={styles.star}
        >
          <Ionicons
            name={posicao <= value ? "star" : "star-outline"}
            size={size}
            color="#E9A400"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
