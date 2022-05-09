import { forwardRef, ForwardRefRenderFunction } from 'react';

import * as S from './Box.styles';
import { BoxProps } from './Box.types';

const BoxElement: ForwardRefRenderFunction<HTMLDivElement, BoxProps> = (
  props,
  ref
) => {
  const { children, ...rest } = props;

  return (
    <S.Box ref={ref} {...rest}>
      {children}
    </S.Box>
  );
};

const Box = forwardRef(BoxElement);

export default Box;
