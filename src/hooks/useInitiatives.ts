import { useState, useCallback } from 'react';
import type { Initiative } from '@prisma/client';
import { InitiativeWithRelations } from '@/types/initiatives';

export const useInitiatives = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getInitiatives = useCallback(
    async (search = ''): Promise<InitiativeWithRelations[] | null> => {
      try {
        setLoading(true);
        setError(null);
        const url = search ? `/api/initiatives?${search}` : `/api/initiatives`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch initiatives');
        }
        return await response.json();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Une erreur est survenue',
        );
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const getInitiativeById = useCallback(
    async (id: string): Promise<InitiativeWithRelations | null> => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/initiatives/${id}`);
        if (!response.ok) {
          throw new Error('Initiative not found');
        }
        return await response.json();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Une erreur est survenue',
        );
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const createInitiative = useCallback(
    async (data: Partial<Initiative>): Promise<Initiative | null> => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/initiatives', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Failed to create initiative');
        }
        return await response.json();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Une erreur est survenue',
        );
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const updateInitiative = useCallback(
    async (
      id: number,
      data: Partial<Initiative>,
    ): Promise<Initiative | null> => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`/api/initiatives/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Failed to update initiative');
        }
        return await response.json();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Une erreur est survenue',
        );
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const deleteInitiative = useCallback(async (id: number): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/initiatives/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete initiative');
      }
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    getInitiatives,
    getInitiativeById,
    createInitiative,
    updateInitiative,
    deleteInitiative,
  };
};
