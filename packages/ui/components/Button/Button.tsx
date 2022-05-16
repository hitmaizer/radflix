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
      <Text>{children}</Text>
    </S.Button>
  );
};

export default Button;

Button.defaultProps = {
  children: 'Hello mate',
  borderRadius: '4px',
  padding: '7px 17px',
};
