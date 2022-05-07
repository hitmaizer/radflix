import { forwardRef, ForwardRefRenderFunction } from 'react';

import * as S from './Text.styles';
import { TextProps } from './Text.types';

type TextWithRefType = ForwardRefRenderFunction<HTMLElement, TextProps>;

const TextElement: TextWithRefType = (props, ref) => {
  const { children, ...rest } = props;

  return (
    <S.Text ref={ref} {...rest}>
      {children}
    </S.Text>
  );
};

const Text = forwardRef(TextElement);

Text.defaultProps = {
  fontFamily: 'body',
  textTransform: 'none',
  size: 'md',
  as: 'p',
  textAlign: 'inherit',
  children: 'This is a text component',
};

export default Text;
