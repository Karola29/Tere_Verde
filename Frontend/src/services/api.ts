const API_URL = "http://192.168.1.70:5000";

export async function apiFetch(
  path: string,
  options: RequestInit = {},
  token?: string | null,
) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string> | undefined),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const mensagem = data?.erro ?? `Erro ${response.status}`;
    throw new Error(mensagem);
  }

  return data;
}

export { API_URL };
