import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from 'src/redux/allMovies';
import { setFilteredData } from 'src/redux/filter';
import { RootState } from 'src/redux/store';

import * as S from './LinkText.styles';
import { LinkTextProps } from './LinkText.types';

const LinkText = ({ children, pathName, ...rest }: LinkTextProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies.movies);

  function handlePageChange() {
    dispatch(setFilteredData([]));
    dispatch(setMovies(movies));
  }

  return (
    <>
      <Link href={`/${pathName}`} passHref>
        <S.LinkText
          pathName={router.pathname}
          {...rest}
          onClick={() => handlePageChange()}
        >
          {children}
        </S.LinkText>
      </Link>
    </>
  );
};

export default LinkText;
