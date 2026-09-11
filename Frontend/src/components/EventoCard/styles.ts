import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#F7F7F7",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  dataBox: {
    width: 52,
    height: 52,
    backgroundColor: "#2E7D32",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  dia: {
    fontSize: 18,
    fontWeight: "800",
    color: "#fff",
    lineHeight: 20,
  },
  mes: {
    fontSize: 10,
    color: "#D4E9D4",
    textTransform: "uppercase",
  },
  info: {
    flex: 1,
  },
  titulo: {
    fontSize: 14,
    fontWeight: "700",
    color: "#222",
    marginBottom: 2,
  },
  horario: {
    fontSize: 12,
    color: "#777",
    marginBottom: 4,
  },
  descricao: {
    fontSize: 12,
    color: "#555",
    lineHeight: 16,
    marginBottom: 8,
  },
  botao: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  botaoTexto: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2E7D32",
    marginLeft: 4,
  },
});
