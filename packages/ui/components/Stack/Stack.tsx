import * as S from './Stack.styles';
import { StackProps } from './Stack.types';

const Stack = ({ children, ...rest }: StackProps) => {
  return <S.Stack {...rest}>{children}</S.Stack>;
};

export default Stack;
