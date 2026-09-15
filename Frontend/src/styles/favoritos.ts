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
  listContent: {
    paddingTop: 8,
    paddingBottom: 32,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
    marginTop: 12,
    textAlign: "center",
  },
  emptyText: {
    fontSize: 13,
    color: "#999",
    marginTop: 4,
    textAlign: "center",
  },
});
