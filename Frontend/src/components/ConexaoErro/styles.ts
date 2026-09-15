import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDECEA",
    borderRadius: 12,
    paddingVertical: 28,
    paddingHorizontal: 20,
    marginTop: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#C62828",
    marginTop: 8,
    textAlign: "center",
  },
  mensagem: {
    fontSize: 13,
    color: "#8A3A34",
    textAlign: "center",
    marginTop: 4,
    lineHeight: 18,
  },
  botao: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C62828",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 14,
  },
  botaoTexto: {
    fontSize: 13,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 6,
  },
});
