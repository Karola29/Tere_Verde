import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageWrapper: {
    width,
    height: 280,
  },
  image: {
    width,
    height: 280,
  },
  topBar: {
    position: "absolute",
    top: 50,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginTop: -24,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  badge: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  localizacao: {
    fontSize: 13,
    color: "#777",
    marginBottom: 12,
  },
  descricao: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
    marginBottom: 20,
  },
  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  infoItem: {
    width: "50%",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  infoItemFull: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  infoTextWrapper: {
    marginLeft: 8,
  },
  infoLabel: {
    fontSize: 11,
    color: "#999",
  },
  infoValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  destaquesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 12,
  },
  destaquesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  destaqueItem: {
    alignItems: "center",
    width: "23%",
  },
  destaqueIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  destaqueLabel: {
    fontSize: 11,
    color: "#555",
    textAlign: "center",
  },
});
