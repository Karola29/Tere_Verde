import { View, Image, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

interface ScreenHeaderProps {
  title?: string;
  showBack?: boolean;
}

export default function ScreenHeader({
  title,
  showBack = true,
}: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={22} color="#222" />
        </TouchableOpacity>
      )}
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
}
