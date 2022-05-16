import Link from 'next/link';

import { Button } from '@ui';

import * as S from './MenuList.styles';
import { MenuListProps } from './MenuList.types';

const MenuList = ({ children }: MenuListProps) => {
  return (
    <S.MenuList>
      <Link href="/categories" passHref>
        <Button text>Categories</Button>
      </Link>
      <Link href="/documentaries" passHref>
        <Button text>Documentaries</Button>
      </Link>
      <Link href="/highlights" passHref>
        <Button text>Highlights</Button>
      </Link>
      {children}
    </S.MenuList>
  );
};

export default MenuList;
