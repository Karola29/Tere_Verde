import { apiFetch } from "./api";

export interface UsuarioAPI {
  id: number;
  nome: string;
  email: string;
  tipo: "ADMIN" | "VISITANTE";
}

export interface LoginResponse {
  token: string;
  usuario: UsuarioAPI;
}

export function loginRequest(
  email: string,
  senha: string,
): Promise<LoginResponse> {
  return apiFetch("/login", {
    method: "POST",
    body: JSON.stringify({ email, senha }),
  });
}

export function cadastrarVisitante(nome: string, email: string, senha: string) {
  return apiFetch("/usuarios", {
    method: "POST",
    body: JSON.stringify({ nome, email, senha }),
  });
}
