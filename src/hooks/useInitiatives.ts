import { useState, useCallback } from 'react';
import type { Initiative } from '@prisma/client';

interface PaginatedResponse {
  initiatives: Initiative[];
  pagination: {
    total: number;
    pages: number;
    currentPage: number;
    perPage: number;
  };
}

export const useInitiatives = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getInitiatives = useCallback(
    async (page = 1, limit = 10, search = ''): Promise<PaginatedResponse | null> => {
      try {
        setLoading(true);
        setError(null);
        const searchParams = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          ...(search && { search }),
        });

        const response = await fetch(`/api/initiatives?${searchParams}`);
        if (!response.ok) {
          throw new Error('Failed to fetch initiatives');
        }
        return await response.json();
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const getInitiativeById = useCallback(async (id: number): Promise<Initiative | null> => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/initiatives/${id}`);
      if (!response.ok) {
        throw new Error('Initiative not found');
      }
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

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
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const updateInitiative = useCallback(
    async (id: number, data: Partial<Initiative>): Promise<Initiative | null> => {
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
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
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
