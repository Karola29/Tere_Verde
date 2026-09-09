import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 16,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "24%",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 4,
    paddingVertical: 8,
    alignItems: "center",
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E3F2E3",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 11,
    fontWeight: "300",
    color: "#222",
    textAlign: "center",
  },
});
