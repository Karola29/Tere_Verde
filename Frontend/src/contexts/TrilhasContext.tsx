import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Trilha, Evento } from "../data/trilhas";
import { useAuth } from "./AuthContext";
import {
  fetchTrilhas,
  criarTrilhaAPI,
  editarTrilhaAPI,
  criarEventoAPI,
  editarEventoAPI,
} from "../services/trilhas";

interface TrilhasContextData {
  trilhas: Trilha[];
  loading: boolean;
  erro: string | null;
  recarregar: () => Promise<void>;
  getTrilha: (id: string) => Trilha | undefined;
  addTrilha: (trilha: Omit<Trilha, "id">) => Promise<void>;
  updateTrilha: (id: string, dados: Partial<Trilha>) => Promise<void>;
  deleteTrilha: (id: string) => void;
  addEvento: (trilhaId: string, evento: Omit<Evento, "id">) => Promise<void>;
  updateEvento: (
    trilhaId: string,
    eventoId: string,
    dados: Partial<Evento>,
  ) => Promise<void>;
  deleteEvento: (trilhaId: string, eventoId: string) => void;
}

const TrilhasContext = createContext<TrilhasContextData | undefined>(undefined);

export function TrilhasProvider({ children }: { children: ReactNode }) {
  const { token } = useAuth();
  const [trilhas, setTrilhas] = useState<Trilha[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  async function recarregar() {
    setLoading(true);
    try {
      const dados = await fetchTrilhas();
      setTrilhas(dados);
      setErro(null);
    } catch (e) {
      console.warn("Não foi possível carregar trilhas da API:", e);
      setTrilhas([]);
      setErro(
        "Não foi possível conectar ao servidor. Verifique se o backend está rodando.",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    recarregar();
  }, []);

  function getTrilha(id: string) {
    return trilhas.find((t) => t.id === id);
  }

  async function addTrilha(trilha: Omit<Trilha, "id">) {
    if (!token) throw new Error("Apenas administradores podem criar trilhas.");
    const { eventos, ...dadosTrilha } = trilha;
    const resposta = await criarTrilhaAPI(dadosTrilha, token);
    const novaTrilhaId = String(resposta.id);

    if (eventos) {
      for (const evento of eventos) {
        await criarEventoAPI(
          {
            trilhaId: novaTrilhaId,
            titulo: evento.titulo,
            data: evento.data,
            horario: evento.horario,
            descricao: evento.descricao,
          },
          token,
        );
      }
    }

    await recarregar();
  }

  async function updateTrilha(id: string, dados: Partial<Trilha>) {
    if (!token) throw new Error("Apenas administradores podem editar trilhas.");
    const { eventos, ...dadosTrilha } = dados;
    await editarTrilhaAPI(id, dadosTrilha, token);

    if (eventos) {
      for (const evento of eventos) {
        if (evento.id.startsWith("novo-")) {
          await criarEventoAPI(
            {
              trilhaId: id,
              titulo: evento.titulo,
              data: evento.data,
              horario: evento.horario,
              descricao: evento.descricao,
            },
            token,
          );
        } else {
          await editarEventoAPI(
            evento.id,
            {
              titulo: evento.titulo,
              data: evento.data,
              horario: evento.horario,
              descricao: evento.descricao,
            },
            token,
          );
        }
      }
    }

    await recarregar();
  }

  function deleteTrilha(id: string) {
    setTrilhas((prev) => prev.filter((t) => t.id !== id));
  }

  async function addEvento(trilhaId: string, evento: Omit<Evento, "id">) {
    if (!token) throw new Error("Apenas administradores podem criar eventos.");
    await criarEventoAPI({ ...evento, trilhaId }, token);
    await recarregar();
  }

  async function updateEvento(
    trilhaId: string,
    eventoId: string,
    dados: Partial<Evento>,
  ) {
    if (!token) throw new Error("Apenas administradores podem editar eventos.");
    await editarEventoAPI(eventoId, dados, token);
    await recarregar();
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
        loading,
        erro,
        recarregar,
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
