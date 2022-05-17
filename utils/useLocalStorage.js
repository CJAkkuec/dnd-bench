import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        const item = window.localStorage.getItem(key);
        setStoredValue(item !== undefined ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.log(error);
      }
    } else {
      return initialValue;
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
        console.log(error);
      }
    }
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
}
