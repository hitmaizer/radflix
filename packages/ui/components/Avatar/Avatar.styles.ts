import styled from 'styled-components';
import { space, variant } from 'styled-system';

import { AvatarProps } from './Avatar.types';

export const size = variant({
  prop: 'size',
  variants: {
    sm: {
      width: '32px',
    },
    md: {
      width: '60px',
    },
    lg: {
      width: '80px',
    },
    xlg: {
      width: '200px',
    },
  },
});

export const Avatar = styled.img<AvatarProps>`
  ${space}
  ${size}
  border-radius: 8px;
`;
