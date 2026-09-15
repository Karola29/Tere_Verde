import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E3F2E3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2E7D32",
  },
  nome: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
  },
  data: {
    fontSize: 11,
    color: "#999",
    marginTop: 1,
  },
  estrelasRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  comentario: {
    fontSize: 13,
    color: "#444",
    lineHeight: 18,
  },
});
