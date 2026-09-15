import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";
import { TrilhasProvider } from "../contexts/TrilhasContext";
import { FavoritosProvider } from "../contexts/FavoritosContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <TrilhasProvider>
        <FavoritosProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              animation: "fade",
            }}
          />
        </FavoritosProvider>
      </TrilhasProvider>
    </AuthProvider>
  );
}
