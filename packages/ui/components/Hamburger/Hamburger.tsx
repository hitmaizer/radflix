import { useEffect, useState } from 'react';

import * as S from './Hamburger.styles';
import { HamburgerProps } from './Hamburger.types';

const Hamburger = ({ children, open, web, ...rest }: HamburgerProps) => {
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

  return (
    <>
      <S.Container {...rest}>
        <S.Hamburger open={open} {...rest} />
        <S.HamburgerContent open={open} web={web} height={height}>
          {children}
        </S.HamburgerContent>
      </S.Container>
    </>
  );
};

export default Hamburger;
