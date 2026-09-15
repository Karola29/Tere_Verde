import { apiFetch } from "./api";
import { Trilha, Evento } from "../data/trilhas";

export function fetchTrilhas(filtros?: {
  dificuldade?: string;
  localizacao?: string;
}) {
  const params = new URLSearchParams();
  if (filtros?.dificuldade) params.append("dificuldade", filtros.dificuldade);
  if (filtros?.localizacao) params.append("localizacao", filtros.localizacao);
  const query = params.toString() ? `?${params.toString()}` : "";
  return apiFetch(`/trilhas${query}`) as Promise<Trilha[]>;
}

export function fetchTrilha(id: string) {
  return apiFetch(`/trilhas/${id}`) as Promise<Trilha>;
}

export function fetchEventos(trilhaId: string) {
  return apiFetch(`/trilhas/${trilhaId}/eventos`) as Promise<
    {
      id: string;
      trilhaId: string;
      nome: string;
      descricao: string | null;
      data: string;
      horario: string;
    }[]
  >;
}

export function criarTrilhaAPI(
  dados: Omit<Trilha, "id" | "avaliacoes" | "eventos">,
  token: string,
) {
  return apiFetch(
    "/trilhas",
    { method: "POST", body: JSON.stringify(dados) },
    token,
  ) as Promise<{ id: number; mensagem: string }>;
}

export function editarTrilhaAPI(
  id: string,
  dados: Partial<Trilha>,
  token: string,
) {
  return apiFetch(
    `/trilhas/${id}`,
    { method: "PUT", body: JSON.stringify(dados) },
    token,
  ) as Promise<{ mensagem: string }>;
}

export function criarAvaliacaoAPI(
  trilhaId: string,
  dados: { nota: number; comentario: string },
  token: string,
) {
  return apiFetch(
    `/trilhas/${trilhaId}/avaliacoes`,
    { method: "POST", body: JSON.stringify(dados) },
    token,
  ) as Promise<{ mensagem: string }>;
}

export function criarEventoAPI(
  evento: Omit<Evento, "id"> & { trilhaId: string },
  token: string,
) {
  return apiFetch(
    "/eventos",
    {
      method: "POST",
      body: JSON.stringify({
        trilhaId: evento.trilhaId,
        nome: evento.titulo,
        descricao: evento.descricao,
        data: evento.data,
        horario: evento.horario,
      }),
    },
    token,
  ) as Promise<{ id: number; mensagem: string }>;
}

export function editarEventoAPI(
  id: string,
  evento: Partial<Evento>,
  token: string,
) {
  const dados: Record<string, any> = {};
  if (evento.titulo !== undefined) dados.nome = evento.titulo;
  if (evento.descricao !== undefined) dados.descricao = evento.descricao;
  if (evento.data !== undefined) dados.data = evento.data;
  if (evento.horario !== undefined) dados.horario = evento.horario;

  return apiFetch(
    `/eventos/${id}`,
    { method: "PUT", body: JSON.stringify(dados) },
    token,
  ) as Promise<{ mensagem: string }>;
}
