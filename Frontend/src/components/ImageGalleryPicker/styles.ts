import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  thumb: {
    width: 72,
    height: 72,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "transparent",
    overflow: "hidden",
  },
  thumbSelected: {
    borderColor: "#2E7D32",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
