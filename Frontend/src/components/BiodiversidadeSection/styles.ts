import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 28,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 16,
    lineHeight: 18,
  },
  statsRow: {
    flexDirection: "row",
    marginBottom: 18,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F0F7F0",
    borderRadius: 10,
    paddingVertical: 10,
    marginRight: 8,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2E7D32",
  },
  statLabel: {
    fontSize: 10,
    color: "#555",
    marginTop: 2,
    textAlign: "center",
  },
  listContent: {
    paddingRight: 16,
  },
});
