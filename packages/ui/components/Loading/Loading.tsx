import * as S from './Loading.styles';
import { LoadingProps } from './Loading.types';

const Loading = ({ children, ...rest }: LoadingProps) => {
  return <S.Loading {...rest}>{children}</S.Loading>;
};

export default Loading;
