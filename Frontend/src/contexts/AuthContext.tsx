import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest, cadastrarVisitante, UsuarioAPI } from "../services/auth";

const STORAGE_KEY = "@tereverde:sessao";

interface AuthContextData {
  usuario: UsuarioAPI | null;
  token: string | null;
  isAdmin: boolean;
  carregandoSessao: boolean;
  login: (email: string, senha: string) => Promise<void>;
  cadastrar: (nome: string, email: string, senha: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<UsuarioAPI | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [carregandoSessao, setCarregandoSessao] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((dados) => {
        if (dados) {
          const sessao = JSON.parse(dados);
          setUsuario(sessao.usuario);
          setToken(sessao.token);
        }
      })
      .catch((e) => console.warn("Não foi possível recuperar a sessão:", e))
      .finally(() => setCarregandoSessao(false));
  }, []);

  async function persistirSessao(token: string, usuario: UsuarioAPI) {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ token, usuario }));
  }

  async function login(email: string, senha: string) {
    const resposta = await loginRequest(email, senha);
    setToken(resposta.token);
    setUsuario(resposta.usuario);
    await persistirSessao(resposta.token, resposta.usuario);
  }

  async function cadastrar(nome: string, email: string, senha: string) {
    await cadastrarVisitante(nome, email, senha);
    await login(email, senha);
  }

  function logout() {
    setToken(null);
    setUsuario(null);
    AsyncStorage.removeItem(STORAGE_KEY);
  }

  const isAdmin = usuario?.tipo === "ADMIN";

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        isAdmin,
        carregandoSessao,
        login,
        cadastrar,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
