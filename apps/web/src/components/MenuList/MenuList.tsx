import LinkText from '@components/LinkText';

import * as S from './MenuList.styles';
import { MenuListProps } from './MenuList.types';

const MenuList = ({ children, mob, ...rest }: MenuListProps) => {
  return (
    <S.MenuList mob={mob} {...rest}>
      <S.ListWrapper display="flex" gridGap="16px" mob={mob}>
        <LinkText pathName="browse">Categories</LinkText>
        <LinkText pathName="documentaries">Documentaries</LinkText>
        <LinkText pathName="brands">Brands</LinkText>
        <LinkText pathName="competitions">Competitions</LinkText>
      </S.ListWrapper>
      {children}
    </S.MenuList>
  );
};

export default MenuList;
