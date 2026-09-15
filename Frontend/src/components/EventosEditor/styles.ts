import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  eventoCard: {
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eventoTitulo: {
    fontSize: 13,
    fontWeight: "600",
    color: "#222",
  },
  eventoInfo: {
    fontSize: 11,
    color: "#777",
    marginTop: 2,
  },
  actions: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 12,
  },
  form: {
    backgroundColor: "#F0F7F0",
    borderRadius: 10,
    padding: 12,
    marginTop: 8,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 13,
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
  },
  halfInput: {
    flex: 1,
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 4,
  },
  formButton: {
    marginLeft: 16,
  },
  formButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2E7D32",
  },
  addLink: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  addLinkText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2E7D32",
    marginLeft: 4,
  },
});
