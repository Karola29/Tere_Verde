import { createContext, useContext, useState, ReactNode } from "react";

interface FavoritosContextData {
  favoritos: string[];
  isFavorito: (id: string) => boolean;
  toggleFavorito: (id: string) => void;
}

const FavoritosContext = createContext<FavoritosContextData | undefined>(
  undefined,
);

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<string[]>([]);

  function isFavorito(id: string) {
    return favoritos.includes(id);
  }

  function toggleFavorito(id: string) {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }

  return (
    <FavoritosContext.Provider
      value={{ favoritos, isFavorito, toggleFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error(
      "useFavoritos deve ser usado dentro de um FavoritosProvider",
    );
  }
  return context;
}
