import { useEffect } from "react";

export function useLocalStorage(name, data) {
  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(data));
  }, [name, data]);
}
