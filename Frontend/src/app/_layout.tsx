import { Stack } from "expo-router";
import { FavoritosProvider } from "../contexts/FavoritosContext";

export default function RootLayout() {
  return (
    <FavoritosProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      />
    </FavoritosProvider>
  );
}
