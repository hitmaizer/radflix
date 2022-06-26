import React from 'react';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useActive } from 'src/hooks/useActive';
import { setMovies } from 'src/redux/allMovies';
import { setFilteredData } from 'src/redux/filter';
import { RootState } from 'src/redux/store';

import * as S from './BackBtn.styles';
import { BackBtnProps } from './BackBtn.types';

const BackBtn = ({ children, ...rest }: BackBtnProps) => {
  const router = useRouter();
  const active = useActive(4000);
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);

  const handleBack = () => {
    dispatch(setFilteredData([]));
    dispatch(setMovies(movies));
    window.scrollTo(0, 0);
    router.back();
  };

  return (
    <>
      {active && (
        <S.BackBtn {...rest} onClick={handleBack}>
          {children}
        </S.BackBtn>
      )}
    </>
  );
};

export default BackBtn;
