'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface User {
  userAccountId: number;
  userName: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        setAuthState((prev) => ({ ...prev, isLoading: false }));
        return;
      }

      const response = await fetch('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const user = await response.json();
        setAuthState({ user, isLoading: false, error: null });
      } else {
        Cookies.remove('token');
        setAuthState({ user: null, isLoading: false, error: null });
      }
    } catch (error) {
      setAuthState({
        user: null,
        isLoading: false,
        error: 'Erreur de vérification',
      });
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Cookies.set('token', data.token, { expires: 7 });
        setAuthState({ user: data.user, isLoading: false, error: null });
        router.push('/');
      } else {
        setAuthState((prev) => ({ ...prev, error: data.error }));
      }
    } catch (error) {
      setAuthState((prev) => ({ ...prev, error: 'Erreur de connexion' }));
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setAuthState({ user: null, isLoading: false, error: null });
    router.push('/');
  };

  return {
    user: authState.user,
    isLoading: authState.isLoading,
    error: authState.error,
    login,
    logout,
    checkAuth,
  };
};
