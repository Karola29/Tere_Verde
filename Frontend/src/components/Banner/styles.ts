import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    borderRadius: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 14,
    color: "#f0f0f0",
    marginTop: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#2E7D32",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
