import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 12,
  },
  imageWrapper: {
    width: "100%",
    height: 100,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  badge: {
    position: "absolute",
    top: 8,
    left: 8,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#fff",
  },
  nome: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222",
    marginBottom: 2,
  },
  localizacao: {
    fontSize: 12,
    color: "#777",
    marginBottom: 6,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  infoText: {
    fontSize: 12,
    color: "#555",
    marginLeft: 4,
  },
});
