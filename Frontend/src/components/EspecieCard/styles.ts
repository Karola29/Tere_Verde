import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 14,
  },
  imageWrapper: {
    width: 140,
    height: 140,
    borderRadius: 70,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  nome: {
    fontSize: 14,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
  },
  nomeCientifico: {
    fontSize: 11,
    fontStyle: "italic",
    color: "#888",
    textAlign: "center",
    marginBottom: 4,
  },
  curiosidade: {
    fontSize: 11,
    color: "#666",
    textAlign: "center",
    lineHeight: 15,
  },
});
