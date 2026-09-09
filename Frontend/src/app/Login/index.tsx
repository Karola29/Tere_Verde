import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { styles } from "../../styles/login";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useRouter } from "expo-router";

type AuthMode = "login" | "cadastro";

export default function Login() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace("/Home" as any);
    }, 2000);
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
              <Input label="Nome completo" type="text" placeholder="Seu nome" />
            )}

            <Input label="E-mail" type="email" placeholder="seu@email.com" />
            <Input label="Senha" type="password" placeholder="●●●●●●●" />

            {mode === "cadastro" && (
              <Input
                label="Confirmar senha"
                type="password"
                placeholder="●●●●●●●"
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
