import LinkText from '@components/LinkText';

import { Stack } from '@ui';

import * as S from './MenuList.styles';
import { MenuListProps } from './MenuList.types';

const MenuList = ({ children }: MenuListProps) => {
  return (
    <S.MenuList>
      <Stack display="flex" gridGap="16px" ml={10}>
        <LinkText pathName="browse">Categories</LinkText>
        <LinkText pathName="documentaries">Documentaries</LinkText>
        <LinkText pathName="brands">Brands</LinkText>
      </Stack>
      {children}
    </S.MenuList>
  );
};

export default MenuList;
