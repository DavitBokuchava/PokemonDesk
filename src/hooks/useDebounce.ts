/* eslint-disable */
import { useEffect, useState } from 'react';

const useDebounce = (value: string | string, delay: number) => {
  const [debouncedValue, setDebounce] = useState<string>('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounce(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
