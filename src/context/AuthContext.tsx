import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextValue {
  isLoggedIn: boolean;
  userName: string;
  userEmail: string;
  login: (name: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('Pedro');
  const [userEmail, setUserEmail] = useState('');

  const login = (name: string, email: string) => {
    setUserName(name || 'Pedro');
    setUserEmail(email || '');
    setIsLoggedIn(true);
  };

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
