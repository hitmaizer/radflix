import Text from '@components/Text';
import { Pencil } from '@styled-icons/bootstrap/Pencil';

import * as S from './MenuItem.styles';
import { MenuItemProps } from './MenuItem.types';

const MenuItem = ({ children, text, icon, ...rest }: MenuItemProps) => {
  return (
    <S.MenuItem {...rest}>
      {icon}
      <Text>{text}</Text>
      {children}
    </S.MenuItem>
  );
};

export default MenuItem;

MenuItem.defaultProps = {
  text: 'Gerir Perfil',
  icon: <Pencil size="16px" color="white" />,
};
