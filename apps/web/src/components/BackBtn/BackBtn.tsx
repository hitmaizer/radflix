import React from 'react';

import { useRouter } from 'next/router';
import { useActive } from 'src/hooks/useActive';

import * as S from './BackBtn.styles';
import { BackBtnProps } from './BackBtn.types';

const BackBtn = ({ children, ...rest }: BackBtnProps) => {
  const router = useRouter();
  const active = useActive(4000);
  return (
    <>
      {active && (
        <S.BackBtn {...rest} onClick={() => router.back()}>
          {children}
        </S.BackBtn>
      )}
    </>
  );
};

export default BackBtn;
