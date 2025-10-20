import { useEffect, useState } from "react";

export function useDebounce<T>(val: T, ms = 200) {
  const [v, setV] = useState(val);
  useEffect(() => {
    const t = setTimeout(() => setV(val), ms);
    return () => clearTimeout(t);
  }, [val, ms]);
  return v;
}
