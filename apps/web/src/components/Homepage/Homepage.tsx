import { useEffect, useState } from 'react';

import * as S from './Homepage.styles';
import { HomepageProps } from './Homepage.types';

const Homepage = ({ children }: HomepageProps) => {
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

  return <S.Homepage height={height}>{children}</S.Homepage>;
};

export default Homepage;
