import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setFilteredData } from 'src/redux/filter';

import * as S from './LinkText.styles';
import { LinkTextProps } from './LinkText.types';

const LinkText = ({ children, pathName, ...rest }: LinkTextProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  function handlePageChange() {
    dispatch(setFilteredData([]));
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
