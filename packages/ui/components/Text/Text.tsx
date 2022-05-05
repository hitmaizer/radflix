import * as S from './Text.styles';
import { TextProps } from './Text.types';

const Text = ({ children }: TextProps) => {
  return <S.Text>{children}</S.Text>;
};

export default Text;

Text.defaultProps = {
  children: 'This is a text component',
};
