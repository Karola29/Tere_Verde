import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
  },
  section: {
    marginBottom: 20,
  },
  dificuldadeRow: {
    flexDirection: "row",
  },
  dificuldadeChip: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginRight: 8,
  },
  dificuldadeChipAtivo: {
    backgroundColor: "#2E7D32",
    borderColor: "#2E7D32",
  },
  dificuldadeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#555",
  },
  dificuldadeTextAtivo: {
    color: "#fff",
  },
  row: {
    flexDirection: "row",
  },
  half: {
    flex: 1,
  },
  spacer: {
    width: 12,
  },
  deleteButton: {
    marginTop: 24,
    alignItems: "center",
    padding: 12,
  },
  deleteButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#C62828",
  },
});
