import Text from '@ui/Text';

import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({
  children,
  borderRadius,
  outline,
  banner,
  ...rest
}: ButtonProps) => {
  return (
    <S.Button
      borderRadius={borderRadius}
      {...rest}
      outline={outline}
      banner={banner}
    >
      {children}
    </S.Button>
  );
};

export default Button;

Button.defaultProps = {
  children: <Text>Hello mate!</Text>,
  borderRadius: '4px',
  padding: '7px 17px',
};
