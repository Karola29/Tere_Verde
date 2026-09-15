import { createContext, useContext, useState, ReactNode } from "react";
import { trilhasMock, Trilha, Evento } from "../data/trilhas";

interface TrilhasContextData {
  trilhas: Trilha[];
  getTrilha: (id: string) => Trilha | undefined;
  addTrilha: (trilha: Omit<Trilha, "id">) => void;
  updateTrilha: (id: string, dados: Partial<Trilha>) => void;
  deleteTrilha: (id: string) => void;
  addEvento: (trilhaId: string, evento: Omit<Evento, "id">) => void;
  updateEvento: (
    trilhaId: string,
    eventoId: string,
    dados: Partial<Evento>,
  ) => void;
  deleteEvento: (trilhaId: string, eventoId: string) => void;
}

const TrilhasContext = createContext<TrilhasContextData | undefined>(undefined);

export function TrilhasProvider({ children }: { children: ReactNode }) {
  const [trilhas, setTrilhas] = useState<Trilha[]>(trilhasMock);

  function getTrilha(id: string) {
    return trilhas.find((t) => t.id === id);
  }

  function addTrilha(trilha: Omit<Trilha, "id">) {
    const nova: Trilha = { ...trilha, id: String(Date.now()) };
    setTrilhas((prev) => [...prev, nova]);
  }

  function updateTrilha(id: string, dados: Partial<Trilha>) {
    setTrilhas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...dados } : t)),
    );
  }

  function deleteTrilha(id: string) {
    setTrilhas((prev) => prev.filter((t) => t.id !== id));
  }

  function addEvento(trilhaId: string, evento: Omit<Evento, "id">) {
    const novo: Evento = { ...evento, id: String(Date.now()) };
    setTrilhas((prev) =>
      prev.map((t) =>
        t.id === trilhaId ? { ...t, eventos: [...(t.eventos ?? []), novo] } : t,
      ),
    );
  }

  function updateEvento(
    trilhaId: string,
    eventoId: string,
    dados: Partial<Evento>,
  ) {
    setTrilhas((prev) =>
      prev.map((t) =>
        t.id === trilhaId
          ? {
              ...t,
              eventos: (t.eventos ?? []).map((e) =>
                e.id === eventoId ? { ...e, ...dados } : e,
              ),
            }
          : t,
      ),
    );
  }

  function deleteEvento(trilhaId: string, eventoId: string) {
    setTrilhas((prev) =>
      prev.map((t) =>
        t.id === trilhaId
          ? {
              ...t,
              eventos: (t.eventos ?? []).filter((e) => e.id !== eventoId),
            }
          : t,
      ),
    );
  }

  return (
    <TrilhasContext.Provider
      value={{
        trilhas,
        getTrilha,
        addTrilha,
        updateTrilha,
        deleteTrilha,
        addEvento,
        updateEvento,
        deleteEvento,
      }}
    >
      {children}
    </TrilhasContext.Provider>
  );
}

export function useTrilhas() {
  const context = useContext(TrilhasContext);
  if (!context) {
    throw new Error("useTrilhas deve ser usado dentro de um TrilhasProvider");
  }
  return context;
}
