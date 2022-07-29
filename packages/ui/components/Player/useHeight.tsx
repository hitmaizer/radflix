import { useEffect, useState } from 'react';

export const useHeight = () => {
  const [height, setHeight] = useState(0);

  const updateDimensions = () => {
    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return height;
};
