import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../contexts/AuthContext";

const { height } = Dimensions.get("window");

const LOGO_SIZE_START = 140;
const LOGO_SIZE_END = 70;

export default function Splash() {
  const router = useRouter();
  const { token, carregandoSessao } = useAuth();
  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;
  const [animacaoConcluida, setAnimacaoConcluida] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -height * 0.18,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: LOGO_SIZE_END / LOGO_SIZE_START,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }),
      ]).start(() => setAnimacaoConcluida(true));
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animacaoConcluida && !carregandoSessao) {
      router.replace(token ? "/Home" : "/Login");
    }
  }, [animacaoConcluida, carregandoSessao, token]);

  return (
    <ImageBackground
      source={require("../../assets/images/fundo-mont.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Animated.Image
            source={require("../../assets/images/logo.png")}
            style={[styles.logo, { transform: [{ translateY }, { scale }] }]}
            resizeMode="contain"
          />
          <Animated.View style={{ opacity: textOpacity }}>
            <Text style={styles.title}>Tere Verde</Text>
            <Text style={styles.subtitle}>Explore. Descubra. Preserve.</Text>
          </Animated.View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  overlay: { flex: 1, backgroundColor: "rgba(255, 255, 255, 0.55)" },
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  logo: { width: LOGO_SIZE_START, height: LOGO_SIZE_START },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#136C10",
    textAlign: "center",
    marginTop: 12,
  },
  subtitle: { fontSize: 14, color: "#555", textAlign: "center" },
});
