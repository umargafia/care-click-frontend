import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import BaseUrl from '../api/BaseUrl';

interface AuthContextType {
  isAuthenticated: boolean;
  userType: 'patient' | 'doctor' | null;
  loading: boolean;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<'patient' | 'doctor' | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${BaseUrl}auth/verify`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsAuthenticated(true);
      setUserType(response.data.userType);
    } catch (error) {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      setUserType(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserType(null);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userType, loading, logout, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
