import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import * as S from './LinkText.styles';
import { LinkTextProps } from './LinkText.types';

const LinkText = ({ children, pathName, ...rest }: LinkTextProps) => {
  const router = useRouter();
  return (
    <>
      <Link href={`/${pathName}`} passHref>
        <S.LinkText pathName={router.pathname} {...rest}>
          {children}
        </S.LinkText>
      </Link>
    </>
  );
};

export default LinkText;
