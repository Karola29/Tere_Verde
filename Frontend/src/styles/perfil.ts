import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E3F2E3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 26,
    fontWeight: "800",
    color: "#2E7D32",
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  email: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F7F0",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginTop: 12,
    marginBottom: 28,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#2E7D32",
    marginLeft: 5,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  menuItemText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginLeft: 10,
  },
  logoutItem: {
    backgroundColor: "#FDECEA",
    marginTop: 12,
  },
  logoutText: {
    color: "#C62828",
  },
});
