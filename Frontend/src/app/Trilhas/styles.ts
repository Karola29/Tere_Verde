import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 12,
  },
  logo: {
    width: 42,
    height: 42,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  filtrosRow: {
    flexDirection: "row",
    marginTop: 14,
    marginBottom: 8,
  },
  filtroChip: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 8,
  },
  filtroChipAtivo: {
    backgroundColor: "#2E7D32",
    borderColor: "#2E7D32",
  },
  filtroText: {
    fontSize: 13,
    color: "#555",
    fontWeight: "600",
  },
  filtroTextAtivo: {
    color: "#fff",
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 32,
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    marginTop: 40,
  },
});
