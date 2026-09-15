import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../../contexts/AuthContext";
import ScreenHeader from "../../../components/ScreenHeader";
import { styles } from "../../../styles/perfil";

export default function Perfil() {
  const { email, isAdmin } = useAuth();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScreenHeader showBack={false} />

      <View style={styles.container}>
        <Text style={styles.title}>Perfil</Text>
        <Text style={styles.email}>{email}</Text>

        {isAdmin && (
          <TouchableOpacity
            style={styles.adminButton}
            onPress={() => router.push("/Admin" as any)}
          >
            <Ionicons name="settings-outline" size={18} color="#2E7D32" />
            <Text style={styles.adminButtonText}>Painel administrativo</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
