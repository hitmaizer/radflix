import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

import * as S from './Browse.styles';
import { BrowseProps } from './Browse.types';

const Browse = ({ children, ...rest }: BrowseProps) => {
  const isOpen = useSelector((state: RootState) => state.open.open);
  return (
    <S.Browse {...rest} open={isOpen}>
      {children}
    </S.Browse>
  );
};

export default Browse;
