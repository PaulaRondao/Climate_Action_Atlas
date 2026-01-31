import logger from '@/lib/pino/logger.client';
import { useState, useEffect, useCallback } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (state !== undefined) {
        localStorage.setItem(key, JSON.stringify(state));
      } else {
        localStorage.removeItem(key);
      }
    } catch (error) {
      logger.error(error, 'LocalStorage does not work');
    }
  }, [key, state]);

  const setValue = useCallback((value: T) => {
    setState(value);
  }, []);

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch (error) {
      logger.error(error, 'LocalStorage does not remove');
    }
  }, [key]);

  return [state, setValue, remove];
};

export default useLocalStorage;
