import { useEffect, useState } from 'react';

export function useBlinkEffect(dependencies) {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    setIsBlinking(true);
    const timeoutId = setTimeout(() => {
      setIsBlinking(false);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, dependencies);

  return isBlinking;
}