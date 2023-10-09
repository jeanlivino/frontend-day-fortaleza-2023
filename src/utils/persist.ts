export const saveToLocalStorage = (key: string, value: string) => {
  if (typeof window === 'undefined') return;

  return localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string): string => {
  if (typeof window === 'undefined') return '';

  return localStorage.getItem(key) || '';
};
