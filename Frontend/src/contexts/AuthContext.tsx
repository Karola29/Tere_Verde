import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextData {
  email: string | null;
  isAdmin: boolean;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);

  function login(email: string) {
    setEmail(email);
  }

  function logout() {
    setEmail(null);
  }

  const isAdmin = email?.toLowerCase().includes("admin") ?? false;

  return (
    <AuthContext.Provider value={{ email, isAdmin, login, logout }}>
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
