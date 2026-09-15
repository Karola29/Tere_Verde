import { View, Text, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../../contexts/AuthContext";
import ScreenHeader from "../../../components/ScreenHeader";
import { styles } from "../../../styles/perfil";

function getIniciais(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Perfil() {
  const { usuario, isAdmin, logout } = useAuth();

  function handleLogout() {
    Alert.alert("Sair", "Tem certeza que deseja sair da sua conta?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: () => {
          logout();
          router.replace("/Login" as any);
        },
      },
    ]);
  }

  if (!usuario) {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScreenHeader showBack={false} />
        <View style={styles.container}>
          <Text>Você não está logado.</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScreenHeader showBack={false} />

      <View style={styles.container}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{getIniciais(usuario.nome)}</Text>
        </View>

        <Text style={styles.nome}>{usuario.nome}</Text>
        <Text style={styles.email}>{usuario.email}</Text>

        <View style={styles.badge}>
          <Ionicons
            name={isAdmin ? "shield-checkmark" : "person"}
            size={13}
            color="#2E7D32"
          />
          <Text style={styles.badgeText}>
            {isAdmin ? "Administrador" : "Visitante"}
          </Text>
        </View>

        {isAdmin && (
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/Admin" as any)}
          >
            <Ionicons name="settings-outline" size={18} color="#2E7D32" />
            <Text style={styles.menuItemText}>Painel administrativo</Text>
            <Ionicons name="chevron-forward" size={16} color="#ccc" />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.menuItem, styles.logoutItem]}
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={18} color="#C62828" />
          <Text style={[styles.menuItemText, styles.logoutText]}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
