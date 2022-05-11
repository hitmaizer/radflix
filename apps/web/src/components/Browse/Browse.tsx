import * as S from './Browse.styles';
import { BrowseProps } from './Browse.types';

const Browse = ({ children, ...rest }: BrowseProps) => {
  return <S.Browse {...rest}>{children}</S.Browse>;
};

export default Browse;
