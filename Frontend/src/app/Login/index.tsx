import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { styles } from "../../styles/login";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useRouter } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";

type AuthMode = "login" | "cadastro";

export default function Login() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login, cadastrar } = useAuth();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  async function handleSubmit() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert("Ops", "Preencha e-mail e senha.");
      return;
    }
    if (mode === "cadastro") {
      if (!nome.trim()) {
        Alert.alert("Ops", "Preencha seu nome completo.");
        return;
      }
      if (senha !== confirmarSenha) {
        Alert.alert("Ops", "As senhas não coincidem.");
        return;
      }
    }

    setLoading(true);
    try {
      if (mode === "login") {
        await login(email.trim(), senha);
      } else {
        await cadastrar(nome.trim(), email.trim(), senha);
      }
      router.replace("/Home" as any);
    } catch (erro: any) {
      Alert.alert("Erro", erro.message ?? "Não foi possível continuar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ImageBackground
      source={require("../../../assets/images/fundo-mont.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Tere Verde</Text>

          <View style={styles.card}>
            <View style={styles.tabsContainer}>
              <TouchableOpacity
                style={[styles.tab, mode === "login" && styles.tabActive]}
                onPress={() => setMode("login")}
              >
                <Text
                  style={[
                    styles.tabText,
                    mode === "login" && styles.tabTextActive,
                  ]}
                >
                  Login
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.tab, mode === "cadastro" && styles.tabActive]}
                onPress={() => setMode("cadastro")}
              >
                <Text
                  style={[
                    styles.tabText,
                    mode === "cadastro" && styles.tabTextActive,
                  ]}
                >
                  Cadastro
                </Text>
              </TouchableOpacity>
            </View>

            {mode === "cadastro" && (
              <Input
                label="Nome completo"
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChangeText={setNome}
              />
            )}

            <Input
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              label="Senha"
              type="password"
              placeholder="●●●●●●●"
              value={senha}
              onChangeText={setSenha}
            />

            {mode === "cadastro" && (
              <Input
                label="Confirmar senha"
                type="password"
                placeholder="●●●●●●●"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
              />
            )}

            <Button
              title={mode === "login" ? "Entrar" : "Cadastrar"}
              onPress={handleSubmit}
              loading={loading}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
