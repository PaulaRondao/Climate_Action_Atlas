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
    } catch {}
  }, [key, state]);

  const setValue = useCallback((value: T) => {
    setState(value);
  }, []);

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch {}
  }, [key]);

  return [state, setValue, remove];
};

export default useLocalStorage;
