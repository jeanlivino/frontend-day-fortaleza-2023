import { useEffect, useState } from 'react';

export const usePersistedData = (key: string, defaultValue: string) => {
  const [state, setState] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    const persistedData = localStorage.getItem(key);
    if (persistedData) {
      return JSON.parse(persistedData);
    }
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
