import { useState } from 'react';
import { IUser, CreateUserDTO, UpdateUserDTO } from '@/constants/types';

export const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getUserByEmail = async (email: string): Promise<IUser | null> => {
    try {
      setLoading(true);
      const response = await fetch(`/api/users?email=${encodeURIComponent(email)}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (data: CreateUserDTO): Promise<IUser | null> => {
    try {
      setLoading(true);
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id: number, data: UpdateUserDTO): Promise<IUser | null> => {
    try {
      setLoading(true);
      const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: number): Promise<boolean> => {
    try {
      setLoading(true);
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      return true;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Une erreur est survenue lors de la suppression du compte'
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
  };
};
