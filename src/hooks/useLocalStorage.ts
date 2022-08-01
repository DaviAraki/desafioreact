import { useState } from 'react';

//Essa função recebe uma chave e um valor e armazena no local storage
const useLocalStorage = (key: string, initialValue: unknown) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    } catch (error) {
      return initialValue;
    }
  });
  const setValue = (value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      alert(error);
    }
    setStoredValue(value);
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
