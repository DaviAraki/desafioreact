import { useState } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
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
  const setValue = (value: any) => {
    try {
      console.log(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
      alert(error);
    }
    setStoredValue(value);
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
